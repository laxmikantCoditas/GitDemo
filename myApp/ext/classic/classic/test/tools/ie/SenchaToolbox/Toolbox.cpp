// Toolbox.cpp : Implementation of CToolbox

#include "stdafx.h"
#include "Toolbox.h"

static DWORD hookGcContext_Collect_Trampoline;

static CToolbox * _watcher;

/*
These two helper functions simplify the calling conventions going from assembler to
C++ object method... and checking that some object is there to call.
*/

static void __stdcall beginGC ()
{
    if (_watcher)
    {
        _watcher->beginGC();
    }
}

static void __stdcall endGC ()
{
    if (_watcher)
    {
        _watcher->endGC();
    }
}

/*
This method is called via a JMP instruction written to GcContext::Collect. We have
to be especially careful about the stack and registers in order to safely call the
original method via our "trampoline". We have to "call" it and not "jmp" into it so
that we can get timing information about the GC operation.

Since this method is a hostile environment (coded in naked assembler), we call to
some sane (normal) helper functions around the call to the trampoline.
*/
__declspec(naked) static void GcContext_Collect ()
{
    __asm {
        // We have to preserve ECX (our "this" pointer):
        push ecx
        call dword ptr[beginGC]
        pop ecx

        call dword ptr[hookGcContext_Collect_Trampoline]

        push ecx
        call dword ptr[endGC]
        pop ecx

        ret // naked method don't even have exit code!
    }
}

//-----------------------------------------------------------------------------
// CToolbox

CToolbox::CToolbox ()
{
    LARGE_INTEGER k;
    QueryPerformanceFrequency(&k);

    _frequency = k.QuadPart;
    _millisecScale = 1000.0 / _frequency; // use milliseconds
    _microsecScale = _millisecScale * 1000;

    QueryPerformanceCounter(&k);
    _base = k.QuadPart;

    _countGC = 0;
    _gcTicks = 0;
    _logGC = false;

    _eventQueueHead = _eventQueueTail = _currentGC = NULL;
    _hookGC = NULL;
}

CToolbox::~CToolbox ()
{
    unwatchGarbageCollector();
}

void CToolbox::beginGC ()
{
    _currentGC = new Event(L"GC");
    ++_countGC;

    if (_logGC)
    {
        if (!_eventQueueHead) 
        {
            _eventQueueHead = _currentGC;
        }
        else
        {
            _eventQueueTail->next = _currentGC;
        }

        _eventQueueTail = _currentGC;
    }
}

void CToolbox::endGC ()
{
    _currentGC->finish();

    _gcTicks += _currentGC->end - _currentGC->begin;

    if (!_logGC)
    {
        delete _currentGC;
    }

    _currentGC = NULL;
}

STDMETHODIMP CToolbox::get_milliseconds(DOUBLE* pVal)
{
    LARGE_INTEGER counter;

    QueryPerformanceCounter(&counter);

    *pVal = (counter.QuadPart - _base) * _millisecScale;

    return S_OK;
}

STDMETHODIMP CToolbox::get_microseconds(DOUBLE* pVal)
{
    LARGE_INTEGER counter;

    QueryPerformanceCounter(&counter);

    *pVal = (counter.QuadPart - _base) * _microsecScale;

    return S_OK;
}

STDMETHODIMP CToolbox::get_frequency(DOUBLE* pVal)
{
    *pVal = _frequency;

    return S_OK;
}

STDMETHODIMP CToolbox::get_ticks(DOUBLE* pVal)
{
    LARGE_INTEGER counter;

    QueryPerformanceCounter(&counter);

    *pVal = counter.QuadPart - _base;

    return S_OK;
}

STDMETHODIMP CToolbox::get_events(BSTR* pVal)
{
    Event * ev = _eventQueueHead;
    Event * prev = NULL;
    std::wstring s;

    _eventQueueHead = _eventQueueTail = NULL;

    for ( ; ev; ev = ev->next)
    {
        delete prev;
        prev = ev;

        s += s.empty() ? L'[' : L',';
        s += formatString(L"{ type: '%ws', at: %f, time: %f }", ev->type,
                    (ev->begin - _base) * _millisecScale,
                    (ev->end - ev->begin) * _millisecScale);
    }

    delete prev;
    if (!s.empty())
    {
        s += L"]";
    }

    *pVal = SysAllocString(s.c_str());
    return S_OK;
}

STDMETHODIMP CToolbox::get_garbageCollectionCounter(DOUBLE* pVal)
{
    *pVal = _countGC;
    return S_OK;
}

STDMETHODIMP CToolbox::get_garbageCollectionMilliseconds(DOUBLE* pVal)
{
    *pVal = _gcTicks * _millisecScale;
    return S_OK;
}

STDMETHODIMP CToolbox::getSymbols(BSTR libraryName, BSTR* ret)
{
    ModuleSymbols  module(libraryName);
    Symbols::const_iterator it, end;
    std::wstring s;

    for (it = module.symbolsBegin(), end = module.symbolsEnd(); it != end; ++it)
    {
        if (!s.empty())
        {
            s += L'\n';
        }

        s += formatString(L"%lX: ", it->virtualAddr);
        if (it->prettyName.empty())
        {
            s += it->name;
        }
        else
        {
            s += formatString(L"%ws (%ws)", it->prettyName.c_str(), it->name.c_str());
        }
    }

    return S_OK;
}

STDMETHODIMP CToolbox::debugBreak()
{
    __asm int 3
    return S_OK;
}

STDMETHODIMP CToolbox::watchGarbageCollector (BOOL log, BSTR* errorMsg)
{
    if (_watcher)
    {
        *errorMsg = SysAllocString(L"GarbageCollector already has a watcher");
    }
    else
    {
        ModuleSymbols symbols(L"jscript");
        LPCWSTR err = symbols.getErrorMsg();

        if (err && *err)
        {
            *errorMsg = SysAllocString(err);
        }
        else
        {
            Symbol * sym = symbols.findByPrettyName(L"public: int __thiscall GcContext::Collect(void)");

            if (sym)
            {
                _logGC = !!log;
                _hookGC = new Hook(sym->virtualAddr, 5, GcContext_Collect);

                hookGcContext_Collect_Trampoline = _hookGC->getTrampoilineAddr();
                _watcher = this;
            }
            else
            {
                *errorMsg = SysAllocString(L"Cannot find GcContext::Collect address");
            }
        }
    }

    return S_OK;
}

STDMETHODIMP CToolbox::unwatchGarbageCollector ()
{
    if (_watcher == this)
    {
        delete _hookGC;
        _hookGC = NULL;
        _watcher = NULL;
    }

    return S_OK;
}
