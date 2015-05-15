#!/bin/bash
sencha js datagen.js 7230_data.js
sencha compile -classpath ../../../../platform/core/src,../../../../platform/src,../../../src,../../../examples/ux -ignore diag -debug false page -yui -in 7230.html -out build/7230.html
mkdir -p build/resources/css;
mkdir -p build/resources/themes;
mkdir -p build/examples/shared;
cp -R ../../../resources/css/* build/resources/css/;
cp -R ../../../resources/themes/* build/resources/themes/;
cp -R ../../../examples/shared/example.css build/examples/shared/;