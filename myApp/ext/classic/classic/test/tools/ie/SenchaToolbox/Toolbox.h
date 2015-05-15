// Toolbox.h : Declaration of the CToolbox

#pragma once
#include "resource.h"       // main symbols

#include "SenchaToolbox_i.h"

#if defined(_WIN32_WCE) && !defined(_CE_DCOM) && !defined(_CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA)
#error "Single-threaded COM objects are not properly supported on Windows CE platform, such as the Windows Mobile platforms that do not include full DCOM support. Define _CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA to force ATL to support creating single-thread COM object's and allow use of it's single-threaded COM object implementations. The threading model in your rgs file was set to 'Free' as that is the only threading model supported in non DCOM Windows CE platforms."
#endif

#include "ModuleSymbols.h"


/*
We make a slight generalization here that may be helpful should we need to do some
similar hacks in the future to watch other internals. We create a list of Event's
that we can report in JSON format. These are simple objects with just a "type" and
time information.
*/
struct Event
{
    Event * next; // link to next event (chronologically next)
    LPCWSTR type; // normally this is L"GC"
    __int64 begin;
    __int64 end;

    Event (LPCWSTR type_)
    {
        type = type_;
        next = NULL;
        QueryPerformanceCounter((LARGE_INTEGER *) &begin);
    }

    void finish ()
    {
        QueryPerformanceCounter((LARGE_INTEGER *) &end);
    }
};

// CToolbox

class ATL_NO_VTABLE CToolbox :
	public CComObjectRootEx<CComSingleThreadModel>,
	public CComCoClass<CToolbox, &CLSID_Toolbox>,
        public IObjectSafetyImpl<CToolbox, INTERFACESAFE_FOR_UNTRUSTED_CALLER | INTERFACESAFE_FOR_UNTRUSTED_DATA>,
	public IDispatchImpl<IToolbox, &IID_IToolbox, &LIBID_SenchaToolboxLib, /*wMajor =*/ 1, /*wMinor =*/ 0>,
        public IObjectWithSiteImpl<CToolbox>
{
public:
	CToolbox();
       ~CToolbox();

DECLARE_REGISTRY_RESOURCEID(IDR_TOOLBOX)


BEGIN_COM_MAP(CToolbox)
	COM_INTERFACE_ENTRY(IToolbox)
	COM_INTERFACE_ENTRY(IDispatch)
        COM_INTERFACE_ENTRY(IObjectWithSite)
END_COM_MAP()

	DECLARE_PROTECT_FINAL_CONSTRUCT()

	HRESULT FinalConstruct()
	{
		return S_OK;
	}

	void FinalRelease()
	{
	}

    void beginGC ();
    void endGC ();

private:
    __int64 _base;
    double _frequency;
    double _millisecScale;
    double _microsecScale;

    Hook *   _hookGC;
    ULONG    _countGC;
    __int64  _gcTicks;
    bool     _logGC;

    Event * _eventQueueHead;
    Event * _eventQueueTail;
    Event * _currentGC;

public:

    STDMETHOD(get_milliseconds)(DOUBLE* pVal);
    STDMETHOD(get_microseconds)(DOUBLE* pVal);
    STDMETHOD(get_frequency)(DOUBLE* pVal);
    STDMETHOD(get_ticks)(DOUBLE* pVal);
    STDMETHOD(get_events)(BSTR* pVal);
    STDMETHOD(get_garbageCollectionCounter)(DOUBLE* pVal);
    STDMETHOD(get_garbageCollectionMilliseconds)(DOUBLE* pVal);
    STDMETHOD(getSymbols)(BSTR libraryName, BSTR* ret);
    STDMETHOD(debugBreak)();
    STDMETHOD(watchGarbageCollector)(BOOL log, BSTR* errorMsg);
    STDMETHOD(unwatchGarbageCollector)();
};

OBJECT_ENTRY_AUTO(__uuidof(Toolbox), CToolbox)
