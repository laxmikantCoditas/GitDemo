// stdafx.h : include file for standard system include files,
// or project specific include files that are used frequently,
// but are changed infrequently

#pragma once

#ifndef STRICT
#define STRICT
#endif

#include "targetver.h"

#define _ATL_APARTMENT_THREADED
#define _ATL_NO_AUTOMATIC_NAMESPACE

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS	// some CString constructors will be explicit

#include "resource.h"
#include <atlbase.h>
#include <atlcom.h>
#include <atlctl.h>

#include <string>

using namespace ATL;

template <typename T>
inline T * nonConst (const T * ptr)
{
    return const_cast<T *>(ptr);
}

static inline std::wstring convert (const char * str)
{
    int alength = lstrlenA(str);
    int wlength = MultiByteToWideChar(CP_ACP, 0, str, alength, NULL, 0);
    std::wstring ret(wlength, L' ');
    MultiByteToWideChar(CP_ACP, 0, str, alength, nonConst(ret.c_str()), wlength);
    return ret;
}

static inline std::wstring convert (const std::string & str)
{
    return convert(str.c_str());
}

inline std::wstring formatString (LPCWSTR format, ...)
{
    WCHAR buffer[4096];
    va_list args;

    va_start(args, format);
    _vsnwprintf(buffer, sizeof buffer, format, args);
    va_end(args);

    return buffer;
}
