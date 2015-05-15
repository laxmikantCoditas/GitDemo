describe("Box", function() {
    ['hbox', 'vbox'].forEach(function(layoutName) {
        var sizeName = layoutName === 'hbox' ? 'width' : 'height',
            otherSizeName = sizeName === 'width' ? 'height' : 'width',
            packStartName = sizeName === 'width' ? 'left' : 'top',
            alignStartName = sizeName === 'width' ? 'top' : 'left',
            alignEndName = sizeName === 'width' ? 'bottom' : 'right';

        describe("Sized Container", function() {
            describe("Natural Sizing", function() {
                it("should size the items based on their inner, defaults to align=stretch and pack=start", function(viewport, width, height, size) {
                    var defaults = {
                            defaults: {}
                        },
                        currentSize = size[sizeName] / 4;

                    defaults.defaults[sizeName] = currentSize;

                    viewport.setLayout(layoutName);
                    viewport.setDefaults(defaults);

                    viewport.add([
                        { cls: 'blue', items: {} },
                        { cls: 'purple', items: {} },
                        { cls: 'orange', items: {} }
                    ]);

                    var items = viewport.items.items;

                    var property = sizeName === 'width' ? 'left' : 'top',
                        startProperty = sizeName === 'width' ? 'top' : 'left',
                        endProperty = sizeName === 'width' ? 'bottom' : 'right',
                        expectation = {};

                    expectation[startProperty] = 0;
                    expectation[endProperty] = size[otherSizeName];
                    expectation[sizeName] = currentSize;
                    expectation[property] = 0;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[property] = currentSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[property] = currentSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });
            });

            describe("Flex", function() {
                it("should size the items based on their flex values regardless of their inner sizes", function(viewport, width, height, size) {
                    var defaults = {
                            flex: 1,
                            items: {}
                        },
                        currentSize = size[sizeName] / 3;

                    defaults.items[sizeName] = size[sizeName] * 2;

                    viewport.setLayout(layoutName);
                    viewport.setDefaults(defaults);

                    viewport.add([
                        { cls: 'blue' },
                        { cls: 'purple' },
                        { cls: 'orange' }
                    ]);

                    var items = viewport.items.items;

                    var property = sizeName === 'width' ? 'left' : 'top',
                        startProperty = sizeName === 'width' ? 'top' : 'left',
                        endProperty = sizeName === 'width' ? 'bottom' : 'right',
                        expectation = {};

                    expectation[startProperty] = 0;
                    expectation[endProperty] = size[otherSizeName];
                    expectation[sizeName] = currentSize;
                    expectation[property] = 0;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[property] = currentSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[property] = currentSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });
            });

            describe("Pack", function() {
                var expectation, items, currentSize;

                beforeEach(function(viewport, width, height, size) {
                    currentSize = size[sizeName] / 4;

                    var defaults = {};

                    defaults[sizeName] = currentSize;

                    viewport.setLayout(layoutName);
                    viewport.setDefaults(defaults);

                    viewport.add([
                        { cls: 'blue' },
                        { cls: 'purple' },
                        { cls: 'orange' }
                    ]);

                    items = viewport.items.items;

                    expectation = {};
                    expectation[alignStartName] = 0;
                    expectation[alignEndName] = size[otherSizeName];
                    expectation[sizeName] = currentSize;
                    expectation[packStartName] = 0;
                });

                it("should size the items based on their given sizes and pack=start", function(viewport) {
                    viewport.getLayout().setPack('start');

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = currentSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = currentSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given sizes and pack=center", function(viewport) {
                    viewport.getLayout().setPack('center');

                    var startPosition = currentSize / 2;

                    expectation[packStartName] = startPosition;
                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = startPosition + currentSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = startPosition + currentSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given sizes and pack=end", function(viewport) {
                    viewport.getLayout().setPack('end');

                    var startPosition = currentSize;

                    expectation[packStartName] = startPosition;
                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = startPosition + currentSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = startPosition + currentSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });
            });

            describe("Align", function() {
                var expectation, items, packSize, alignSize;

                beforeEach(function(viewport, width, height, size) {
                    packSize = size[sizeName] / 4;
                    alignSize = size[otherSizeName] / 2;

                    var defaults = {};

                    defaults[sizeName] = packSize;
                    defaults[otherSizeName] = alignSize;

                    viewport.setLayout(layoutName);
                    viewport.setDefaults(defaults);

                    viewport.add([
                        { cls: 'blue' },
                        { cls: 'purple' },
                        { cls: 'orange' }
                    ]);

                    items = viewport.items.items;

                    expectation = {};
                    expectation[alignStartName] = 0;
                    expectation[alignEndName] = alignSize;
                    expectation[sizeName] = packSize;
                    expectation[otherSizeName] = alignSize;
                    expectation[packStartName] = 0;
                });

                it("should size the items based on their given sizes and align=start", function(viewport) {
                    viewport.getLayout().setAlign('start');

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given sizes and align=center", function(viewport) {
                    viewport.getLayout().setAlign('center');

                    expectation[alignStartName] = alignSize / 2;
                    expectation[alignEndName] = alignSize * 3 / 2;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given sizes and align=end", function(viewport) {
                    viewport.getLayout().setAlign('end');

                    expectation[alignStartName] = alignSize;
                    expectation[alignEndName] = alignSize * 2;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize * 2;
                    expect(items[2]).toHavePageBox(expectation);
                });
            });

            describe("Align & Flex", function() {
                var expectation, items, packSize, alignSize;

                beforeEach(function(viewport, width, height, size) {
                    alignSize = size[otherSizeName] / 2;
                    packSize = size[sizeName];

                    var defaults = {};

                    defaults[otherSizeName] = alignSize;

                    viewport.setLayout(layoutName);
                    viewport.setDefaults(defaults);

                    viewport.add([
                        { cls: 'blue', flex: 1 },
                        { cls: 'purple', flex: 2 },
                        { cls: 'orange', flex: 3 }
                    ]);

                    items = viewport.items.items;

                    expectation = {};
                    expectation[alignStartName] = 0;
                    expectation[alignEndName] = alignSize;
                    expectation[packStartName] = 0;
                    expectation[sizeName] = packSize / 6;
                });

                it("should size the items based on their given flexes and align=start", function(viewport) {
                    viewport.getLayout().setAlign('start');

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6;
                    expectation[sizeName] = packSize / 3;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6 + packSize / 3;
                    expectation[sizeName] = packSize / 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given flexes and align=center", function(viewport) {
                    viewport.getLayout().setAlign('center');

                    expectation[alignStartName] = alignSize / 2;
                    expectation[alignEndName] = alignSize * 3 / 2;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6;
                    expectation[sizeName] = packSize / 3;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6 + packSize / 3;
                    expectation[sizeName] = packSize / 2;
                    expect(items[2]).toHavePageBox(expectation);
                });

                it("should size the items based on their given flexes and align=end", function(viewport) {
                    viewport.getLayout().setAlign('end');

                    expectation[alignStartName] = alignSize;
                    expectation[alignEndName] = alignSize * 2;

                    expect(items[0]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6;
                    expectation[sizeName] = packSize / 3;
                    expect(items[1]).toHavePageBox(expectation);

                    expectation[packStartName] = packSize / 6 + packSize / 3;
                    expectation[sizeName] = packSize / 2;
                    expect(items[2]).toHavePageBox(expectation);
                });
            });
        });

        describe("Unsized Container", function() {
            describe("Flex", function() {
                it("should only take the items' inner " + otherSizeName, function(viewport, width, height, size) {
                    var container = viewport.add({
                        left: 0,
                        top: 0,
                        layout: layoutName
                    });

                    container.set(sizeName, size[sizeName]);

                    var defaults = {
                        flex: 1
                    };

                    var innerItem = { cls: 'violet' };
                    innerItem[sizeName] = size[sizeName];
                    innerItem[otherSizeName] = size[otherSizeName] / 2;

                    container.setDefaults(defaults);

                    container.add([
                        { cls: 'blue' },
                        { cls: 'purple', items: innerItem },
                        { cls: 'orange' }
                    ]);

                    var items = container.items.items;

                    var expectation = {};
                    expectation[sizeName] = size[sizeName] / 3;
                    expectation[otherSizeName] = size[otherSizeName] / 2;

                    expect(items[0]).toHavePageBox(expectation);
                    expect(items[1]).toHavePageBox(expectation);
                    expect(items[2]).toHavePageBox(expectation);
                });
            });
        });
    });

    describe("Nested Boxes", function() {
        it("should stretch to fit vertically", function(viewport, width, height, size) {
            viewport.isReferenceOwner = true;
            viewport.add({
                left: 0,
                top: 0,
                right: 0,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        cls: 'blue',
                        height: height / 2,
                        width: width / 2
                    },
                    {
                        flex: 1,
                        cls: 'orange',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: {
                            flex: 1,
                            reference: 'foo',
                            cls: 'purple'
                        }
                    }
                ]
            });

            expect(viewport.down('[reference=foo]')).toHavePageBox({
                width: width / 2,
                height: height / 2
            });
        });
    });
});
