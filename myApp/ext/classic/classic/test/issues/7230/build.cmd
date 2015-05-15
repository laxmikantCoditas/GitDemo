@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
goto :MAIN
	
:MAIN

    sencha js datagen.js 7230_data.js
    sencha compile -classpath ..\..\..\..\platform\core\src,..\..\..\..\platform\src,..\..\..\src,..\..\..\examples\ux -ignore diag -debug false page -yui -in 7230.html -out build\7230.html
    mkdir build\resources\css
    mkdir build\resources\themes
    mkdir build\examples\shared
    xcopy ..\..\..\resources\css\* build\resources\css\ /E /Y
    xcopy ..\..\..\resources\themes\* build\resources\themes\ /E /Y
    xcopy ..\..\..\examples\shared\example.css build\examples\shared\ /E /Y

goto :EOF

