#pragma once

#ifndef INCL_ModuleSymbols_h
#define INCL_ModuleSymbols_h

#include <dia2.h>
#include <psapi.h>

#include <map>
#include <list>

#pragma comment(lib, "diaguids.lib")
#pragma comment(lib, "psapi.lib")

struct Symbol
{
    std::wstring name;
    std::wstring prettyName;
    DWORD symTag;
    ULONGLONG virtualAddr;

    Symbol (IDiaSymbol & symbol)
    {
        CComBSTR s1, s2;

        symbol.get_symTag(&symTag);

        symbol.get_name(&s1);
        name = s1.m_str;

        if (symTag == SymTagPublicSymbol)
        {
            symbol.get_undecoratedName(&s2);
            prettyName = s2.m_str;
        }
        else
        {
            prettyName = name;
        }

        symbol.get_virtualAddress(&virtualAddr);
    }
};

typedef std::list<Symbol> Symbols;

typedef std::map<std::wstring, Symbol *> SymbolsByName;

//-----------------------------------------------------------------------------

class ModuleSymbols
{
public:
    ModuleSymbols (LPCWSTR moduleName)
    {
        init(GetModuleHandle(moduleName));
    }

    ModuleSymbols (HMODULE module)
    {
        init(module);
    }

    Symbol * findByName (const std::wstring & name)
    {
        SymbolsByName::const_iterator it = _symbolsByName.find(name);

        if (it == _symbolsByName.end())
        {
            return NULL;
        }

        return it->second;
    }

    Symbol * findByPrettyName (const std::wstring & name)
    {
        SymbolsByName::const_iterator it = _symbolsByPrettyName.find(name);

        if (it == _symbolsByPrettyName.end())
        {
            return NULL;
        }

        return it->second;
    }

    LPCWSTR getErrorMsg () const { return _errorMsg.c_str(); }

    Symbols::const_iterator symbolsBegin () const { return _symbols.begin(); }
    Symbols::const_iterator symbolsEnd () const { return _symbols.end(); }

private:
    CComPtr<IDiaDataSource> _source;
    CComPtr<IDiaSession> _session;
    CComPtr<IDiaSymbol> _global;

    Symbols _symbols;
    SymbolsByName _symbolsByName;
    SymbolsByName _symbolsByPrettyName;
    std::wstring _errorMsg;

    HRESULT init (HMODULE module)
    {
        HRESULT hr;
        WCHAR fileName[MAX_PATH];
        MODULEINFO info;

#define CHECK(m) if (FAILED(hr)) { _errorMsg = m; return hr; }

        hr = CoCreateInstance(CLSID_DiaSource, NULL, CLSCTX_INPROC_SERVER, 
                    __uuidof(IDiaDataSource), (void **) &_source);
        CHECK(formatString(L"Cannot create DiaSource: %lX", hr));

        GetModuleFileName(module, fileName, sizeof fileName);
        GetModuleInformation(GetCurrentProcess(), module, &info, sizeof info);

        hr = _source->loadDataForExe(fileName, NULL, NULL);
        CHECK(L"Failed to loadDataForExe");

        hr = _source->openSession(&_session);
        CHECK(L"Failed to openSession");

        hr = _session->put_loadAddress((ULONGLONG) info.lpBaseOfDll);
        CHECK(L"Failed to set loadAddress");

        hr = _session->get_globalScope(&_global);
        CHECK(L"Failed to get global scope");

        ULONG celt = 0;
        CComPtr<IDiaEnumSymbols> enumSym;
        CComPtr<IDiaSymbol> symbol;

        hr = _global->findChildren(SymTagPublicSymbol, NULL, nsfCaseInsensitive | nsfUndecoratedName, &enumSym);
        CHECK(L"Failed to findChildren of global scope");

        for (; SUCCEEDED(hr = enumSym->Next(1, &symbol, &celt)) && celt == 1; symbol = NULL)
        {
            _symbols.push_back(Symbol(*symbol));

            Symbol & sym = _symbols.back();

            _symbolsByName.insert(std::make_pair(sym.name, &sym));
            _symbolsByPrettyName.insert(std::make_pair(sym.prettyName, &sym));
        }
    }
};

//-----------------------------------------------------------------------------

/*
This class is used to patch (hook) a function and create a "trampoline" function
that can be used to call to the original. At present, this class can only handle
the most basic form that matches the single function we need to hook:

        GcContext::Collect:
        75C6C598 8B FF            mov         edi,edi 
        75C6C59A 56               push        esi  
        75C6C59B 8B F1            mov         esi,ecx 
        75C6C59D 8B 46 0C         mov         eax,dword ptr [esi+0Ch] 

The idea is to write a "JMP <offset>" instruction at the entry point of the above
method. Since that is a 5-byte operation, we are in luck! We happen to have 5 bytes
of entry code that is perfectly relocatable even!

We create a trampoline by copying those 5 bytes to a new block of memory and tack
on a JMP instruction to direct control back to the original method but 5 bytes
further in to the code. This skips the 5 byte hook placed at the exact entry.
*/
class Hook
{
public:
    Hook (ULONG procAddr, UINT prefixSize, void * hookFn)
    {
        BYTE * procPtr = (BYTE *) procAddr;
        MEMORY_BASIC_INFORMATION memInfo;
        DWORD oldProtect;

        _trampolineFn = (BYTE *) VirtualAlloc(NULL, prefixSize + 5, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
        memcpy(_trampolineFn, procPtr, prefixSize);

        _trampolineFn[prefixSize] = 0xE9; // jmp <rel32>
        *(ULONG *)(_trampolineFn + prefixSize + 1) = procAddr - (ULONG) _trampolineFn - prefixSize;

        VirtualQuery(_trampolineFn, &memInfo, sizeof memInfo);
        VirtualProtect(memInfo.BaseAddress, memInfo.RegionSize, PAGE_EXECUTE_READ, &oldProtect);

        VirtualQuery(procPtr, &memInfo, sizeof memInfo);
        VirtualProtect(memInfo.BaseAddress, memInfo.RegionSize, PAGE_EXECUTE_READWRITE, &oldProtect);

        *(ULONG *)(procPtr + 1) = (ULONG) hookFn - procAddr - 5;
        procPtr[0] = 0xE9;

        VirtualProtect(memInfo.BaseAddress, memInfo.RegionSize, oldProtect, &oldProtect);

        _prefixSize = prefixSize;
        _procAddr = procAddr;
    }

    ~Hook ()
    {
        MEMORY_BASIC_INFORMATION memInfo;
        DWORD oldProtect;

        VirtualQuery((void *)_procAddr, &memInfo, sizeof memInfo);
        VirtualProtect(memInfo.BaseAddress, memInfo.RegionSize, PAGE_EXECUTE_READWRITE, &oldProtect);

        memcpy((void *)_procAddr, _trampolineFn, _prefixSize);
        VirtualProtect(memInfo.BaseAddress, memInfo.RegionSize, oldProtect, &oldProtect);
    }

    BYTE * getTrampoiline () const { return _trampolineFn; }

    DWORD getTrampoilineAddr () const { return (DWORD) _trampolineFn; }

private:
    UINT   _prefixSize;
    ULONG  _procAddr;
    BYTE * _trampolineFn;
};

#endif // INCL_ModuleSymbols_h
