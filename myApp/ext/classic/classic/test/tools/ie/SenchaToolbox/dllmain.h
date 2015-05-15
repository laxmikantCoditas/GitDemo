// dllmain.h : Declaration of module class.

class CSenchaToolboxModule : public CAtlDllModuleT< CSenchaToolboxModule >
{
public :
	DECLARE_LIBID(LIBID_SenchaToolboxLib)
	DECLARE_REGISTRY_APPID_RESOURCEID(IDR_SENCHATOOLBOX, "{394EAB6E-835B-45E8-8AED-498759DA35B0}")
};

extern class CSenchaToolboxModule _AtlModule;
