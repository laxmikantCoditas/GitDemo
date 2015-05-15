#!/bin/sh

export PATH=/SenchaSDKTools-1.2.3:$PATH
export PATH=/SenchaSDKTools-1.2.3/command:$PATH
export PATH=/SenchaSDKTools-1.2.3/jsbuilder:$PATH
export PATH=/SenchaSDKTools-1.2.3/appbuilder:$PATH

cd `dirname $0`
cd ../../../
cd touch
compass compile -f resources/sass/
cd ..
export PATH="`pwd`/tools/command:$PATH"
./build/build touch `pwd`/../touch
cp -r touch/test `pwd`/../touch
