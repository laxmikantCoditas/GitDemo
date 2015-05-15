#!/bin/sh

ZIP_FILE=$1

UNCOMPRESSED_FILES=( \
	extjs-4.1.1/builds/ext-all-sandbox-debug-w-comments.js \
	extjs-4.1.1/builds/ext-all-sandbox-debug.js \
	extjs-4.1.1/builds/ext-all-sandbox-dev.js \
	extjs-4.1.1/builds/ext-core-debug-w-comments.js \
	extjs-4.1.1/builds/ext-core-debug.js \
	extjs-4.1.1/builds/ext-core-dev.js \
	extjs-4.1.1/docs/source/Ext-more.html \
	extjs-4.1.1/ext-all-debug-w-comments.js \
	extjs-4.1.1/ext-all-debug.js \
	extjs-4.1.1/ext-all-dev.js \
	extjs-4.1.1/ext-debug-w-comments.js \
	extjs-4.1.1/ext-debug.js \
	extjs-4.1.1/ext-dev.js \
	extjs-4.1.1/pkgs/extras.js \
	extjs-4.1.1/src/core/src/Ext-more.js \
)

COMPRESSED_FILES=( \
	extjs-4.1.1/builds/ext-all-sandbox.js \
	extjs-4.1.1/builds/ext-core.js \
	extjs-4.1.1/docs/extjs/ext-all.js \
	extjs-4.1.1/ext-all.js \
	extjs-4.1.1/ext.js \
)

for FILE in "${UNCOMPRESSED_FILES[@]}"
do
	# unzip -p $ZIP_FILE $FILE | sed -f uncompressed.sed | zip $ZIP_FILE $FILE -
	unzip $ZIP_FILE $FILE
	sed -i.bak -f uncompressed.sed $FILE
	zip $ZIP_FILE $FILE
	# echo UPDATED $FILE
done

for FILE in "${COMPRESSED_FILES[@]}"
do
	# unzip -p $ZIP_FILE $FILE | sed -f compressed.sed | zip $ZIP_FILE $FILE -
	unzip $ZIP_FILE $FILE
	sed -i.bak -f compressed.sed $FILE
	zip $ZIP_FILE $FILE
	# echo UPDATED $FILE
done

echo Files now containing updated uncompressed pattern:
grep "'extjs', '4.1.1'" extjs-4.1.1/* --recursive -l
echo Files now containing updated compressed pattern:
grep '"extjs","4.1.1"' extjs-4.1.1/* --recursive -l

rm -rf extjs-4.1.1

