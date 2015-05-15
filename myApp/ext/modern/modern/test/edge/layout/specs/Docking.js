describe("Docking", function() {
    describe("Basic", function() {
        beforeEach(function(viewport) {
            viewport.addCls('pink');
        });

        describe("Top", function() {
            it("should dock an item with relative size on top", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'top',
                    height: '20%'
                });

                var expectation = {
                    top: 0,
                    left: 0,
                    right: width,
                    bottom: height / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: height / 5,
                    width: width,
                    height: height * 4 / 5
                });
            });

            it("should dock an item with fixed size on top", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'top',
                    height: height / 5
                });

                var expectation = {
                    top: 0,
                    left: 0,
                    right: width,
                    bottom: height / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: height / 5,
                    width: width,
                    height: height * 4 / 5
                });
            });

            it("should dock an item with natural size on top", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'top',
                    items: [
                        {
                            height: height / 5
                        }
                    ]
                });

                var expectation = {
                    top: 0,
                    left: 0,
                    right: width,
                    bottom: height / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: height / 5,
                    width: width,
                    height: height * 4 / 5
                });
            });
        });

        describe("Right", function() {
            it("should dock an item with relative size on the right", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'right',
                    width: '20%'
                });

                var expectation = {
                    top: 0,
                    bottom: height,
                    right: width,
                    left: width * 4 / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    bottom: height,
                    left: 0,
                    right: width * 4 / 5
                });
            });

            it("should dock an item with fixed size on the right", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'right',
                    width: width / 5
                });

                var expectation = {
                    top: 0,
                    bottom: height,
                    right: width,
                    left: width * 4 / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    bottom: height,
                    left: 0,
                    right: width * 4 / 5
                });
            });

            it("[horizontal dock] should maintain a unsized container's body element size regardless of body content", function(viewport, width, height) {
                var container = viewport.add({
                    cls: 'blue',
                    width: width
                });

                var foo = container.add({
                    cls: 'purple',
                    docked: 'left',
                    width: width / 5
                });

                var bar = container.add({
                    cls: 'orange',
                    width: width * 5,
                    height: height
                });

                var expectation = {
                    top: 0,
                    bottom: height,
                    right: width / 5,
                    left: 0
                };

                expect(foo).toHavePageBox(expectation);

                expect(container.innerElement.getParent()).toHavePageBox({
                    top: 0,
                    bottom: height,
                    left: width / 5,
                    right: width
                });
            });

            it("[vertical dock] should maintain a unsized container's body element size regardless of body content", function(viewport, width, height) {
                var container = viewport.add({
                    cls: 'blue',
                    height: height
                });

                var foo = container.add({
                    cls: 'purple',
                    docked: 'top',
                    height: height / 5
                });

                var bar = container.add({
                    cls: 'orange',
                    height: height * 5,
                    width: width
                });

                expect(foo).toHavePageBox({
                    top: 0,
                    bottom: height /5,
                    left: 0,
                    right: width
                });

                expect(container.innerElement.getParent()).toHavePageBox({
                    top: height / 5,
                    bottom: height,
                    left: 0,
                    right: width
                });
            });

            it("[horizontal dock] should maintain a stretched container's body element size regardless of body content", function(viewport, width, height) {
                var container = viewport.add({
                    cls: 'blue',
                    width: width
                });

                container.setLayoutSizeFlags(container.LAYOUT_STRETCHED);

                var foo = container.add({
                    cls: 'purple',
                    docked: 'left',
                    width: width / 5
                });

                var bar = container.add({
                    cls: 'orange',
                    width: width * 5,
                    height: height
                });

                var expectation = {
                    top: 0,
                    bottom: height,
                    right: width / 5,
                    left: 0
                };

                expect(foo).toHavePageBox(expectation);

                expect(container.innerElement.getParent()).toHavePageBox({
                    top: 0,
                    bottom: height,
                    left: width / 5,
                    right: width
                });
            });

            it("[vertical dock] should maintain a stretched container's body element size regardless of body content", function(viewport, width, height) {
                var container = viewport.add({
                    cls: 'blue',
                    height: height
                });

                container.setLayoutSizeFlags(container.LAYOUT_STRETCHED);

                var foo = container.add({
                    cls: 'purple',
                    docked: 'top',
                    height: height / 5
                });

                var bar = container.add({
                    cls: 'orange',
                    height: height * 5,
                    width: width
                });


                expect(foo).toHavePageBox({
                    top: 0,
                    bottom: height / 5,
                    right: width,
                    left: 0
                });

                expect(container.innerElement.getParent()).toHavePageBox({
                    top: height / 5,
                    bottom: height,
                    left: 0,
                    right: width
                });
            });

            it("should dock an item with natural size on the right", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'right',
                    items: [
                        {
                            width: width / 5
                        }
                    ]
                });

                var expectation = {
                    top: 0,
                    bottom: height,
                    right: width,
                    left: width * 4 / 5
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    bottom: height,
                    left: 0,
                    right: width * 4 / 5
                });
            });
        });

        describe("Bottom", function() {
            it("should dock an item with relative size at the bottom", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'bottom',
                    height: '20%'
                });


                var expectation = {
                    top: height * 4 / 5,
                    right: width,
                    bottom: height,
                    left: 0
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height * 4 / 5,
                    left: 0
                });
            });

            it("should dock an item with fixed size at the bottom", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'bottom',
                    height: height / 5
                });

                var expectation = {
                    top: height * 4 / 5,
                    right: width,
                    bottom: height,
                    left: 0
                };
                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height * 4 / 5,
                    left: 0
                });
            });

            it("should dock an item with natural size at the bottom", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'bottom',
                    items: [
                        {
                            height: height / 5
                        }
                    ]
                });

                var expectation = {
                    top: height * 4 / 5,
                    right: width,
                    bottom: height,
                    left: 0
                };

                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height * 4 / 5,
                    left: 0
                });
            });
        });

        describe("Left", function() {
            it("should dock an item with relative size on the left", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'left',
                    width: '20%'
                });

                var expectation = {
                    top: 0,
                    right: width / 5,
                    bottom: height,
                    left: 0
                };
                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height,
                    left: width / 5
                });
            });

            it("should dock an item with fixed size on the left", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'left',
                    width: height / 5
                });

                var expectation = {
                    top: 0,
                    right: width / 5,
                    bottom: height,
                    left: 0
                };
                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height,
                    left: width / 5
                });
            });

            it("should dock an item with natural size on the left", function(viewport, width, height) {
                var foo = viewport.add({
                    cls: 'blue',
                    docked: 'left',
                    items: [
                        {
                            width: width / 5
                        }
                    ]
                });

                var expectation = {
                    top: 0,
                    right: width / 5,
                    bottom: height,
                    left: 0
                };
                expect(foo).toHavePageBox(expectation);

                expect(viewport.innerElement).toHavePageBox({
                    top: 0,
                    right: width,
                    bottom: height,
                    left: width / 5
                });
            });
        });
    });

    describe("Multiple", function() {
        it("should nest docked items based on the added order", function(viewport, width, height) {
            var top = viewport.add({
                cls: 'orange',
                docked: 'top',
                height: '50%'
            });

            var right = viewport.add({
                cls: 'blue',
                docked: 'right',
                width: '50%'
            });

            var bottom = viewport.add({
                cls: 'purple',
                docked: 'bottom',
                height: '50%'
            });

            var left = viewport.add({
                cls: 'cyan',
                docked: 'left',
                width: '50%'
            });

            var expectationTop = {
                top: 0,
                right: width,
                bottom: height / 2,
                left: 0
            };
            expect(top).toHavePageBox(expectationTop);

            var expectationRight = {
                top: height / 2,
                right: width,
                bottom: height,
                left: width / 2
            };
            expect(right).toHavePageBox(expectationRight);

            var expectationBottom = {
                top: height * 3 / 4,
                right: width / 2,
                bottom: height,
                left: 0
            };
            expect(bottom).toHavePageBox(expectationBottom);

            var expectationLeft = {
                top: height / 2,
                right: width / 4,
                bottom: height * 3 / 4,
                left: 0
            };
            expect(left).toHavePageBox(expectationLeft);
        });
    });

    describe("Intrinsic Size Docking", function() {

        var container, bodyInnerSize = {};

        beforeEach(function(viewport, width, height) {
            bodyInnerSize.width = width / 4;
            bodyInnerSize.height = height / 4;

            container = viewport.add({
                cls: 'blue',
                centered: true,
                items: {
                    cls: 'orange',
                    width: bodyInnerSize.width,
                    height: bodyInnerSize.height
                }
            });
        });

        ['top', 'right', 'bottom', 'left'].forEach(function(position) {
            var currentDimension = (position === 'top' || position === 'bottom') ? 'height' : 'width',
                otherDimension = (currentDimension === 'height') ? 'width' : 'height';

            describe(position, function() {
                it("should have outer "+currentDimension+" depends on inner "+currentDimension+"", function(viewport, width, height, size) {
                    var currentSize = size[currentDimension],
                        innerSize = currentSize / 2,
                        innerItemConfig = {},
                        config = {
                            cls: 'purple',
                            docked: position,
                            items: innerItemConfig
                        },
                        expectation = {};

                    innerItemConfig[currentDimension] = innerSize;

                    expectation[currentDimension] = innerSize;
                    expectation[otherDimension] = bodyInnerSize[otherDimension];

                    expect(container.add(config)).toHavePageBox(expectation);
                    expect(container.innerElement).toHavePageBox(bodyInnerSize);
                });

                it("should have inner "+currentDimension+" depends on outer "+currentDimension+"", function(viewport, width, height, size) {
                    var currentSize = size[currentDimension],
                        outerSize = currentSize / 2,
                        innerItemConfig = {},
                        config = {
                            cls: 'purple',
                            docked: position,
                            items: innerItemConfig
                        },
                        expectation = {};

                    config[currentDimension] = outerSize;

                    expectation[currentDimension] = outerSize;
                    expectation[otherDimension] = bodyInnerSize[otherDimension];

                    expect(container.add(config)).toHavePageBox(expectation);
                    expect(container.innerElement).toHavePageBox(bodyInnerSize);
                });

                it("should take inner "+currentDimension+" and outer "+otherDimension+"", function(viewport, width, height, size) {
                    var currentSize = size[currentDimension],
                        otherSize = size[otherDimension],
                        innerSize = currentSize / 2,
                        outerSize = otherSize / 2,
                        innerItemConfig = {},
                        config = {
                            cls: 'purple',
                            docked: position,
                            items: innerItemConfig
                        },
                        expectation = {},
                        bodyInnerExpectation = {};

                    innerItemConfig[currentDimension] = innerSize;
                    config[otherDimension] = outerSize;

                    expectation[currentDimension] = innerSize;
                    expectation[otherDimension] = outerSize;

                    bodyInnerExpectation[currentDimension] = bodyInnerSize[currentDimension];
                    bodyInnerExpectation[otherDimension] = outerSize;

                    expect(container.add(config)).toHavePageBox(expectation);
                    expect(container.innerElement).toHavePageBox(bodyInnerExpectation);
                });
            });
        });
    });

    describe("State Switching from Docking", function() {
        var foo;

        beforeEach(function(viewport, width, height) {
            foo = viewport.add({
                height: height / 2,
                docked: 'bottom',
                cls: 'blue'
            });
        });

        it("should make a docked item become inner item upon setDocked(null)", function(viewport, width, height) {
            foo.setDocked(null);

            expect(foo).toHavePageBox({
                left: 0,
                right: width,
                top: 0,
                bottom: height / 2
            });
        });

        it("should make a docked item become floating", function(viewport, width, height) {
            foo.setLeft(0);
            foo.setWidth(width / 2);
            foo.setTop(0);

            expect(foo).toHavePageBox({
                top: 0,
                left: 0,
                right: width / 2,
                bottom: height / 2
            });
        });

        it("should make a docked item centered upon setCentered(true)", function(viewport, width, height) {
            foo.setWidth(width / 2);
            foo.setCentered(true);

            expect(foo).toHavePageBox({
                top: height / 4,
                left: width / 4,
                right: width * 3 / 4,
                bottom: height * 3 / 4
            });
        });
    });

    describe("Nested inside a align-stretch + flexed box item", function() {
        it("should fit", function(viewport, width, height) {
            viewport.isReferenceOwner = true;
            viewport.add({
                height: height,
                width: width,
                layout: {
                    cls: 'blue',
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        flex: 1,
                        cls: 'orange',
                        layout: 'fit',
                        items: [
                            {
                                docked: 'top',
                                cls: 'purple',
                                height: height / 2
                            },
                            {
                                reference: 'foo',
                                cls: 'pink'
                            }
                        ]
                    }
                ]
            });

            expect(viewport.down('[reference=foo]')).toHavePageBox({
                top: height / 2,
                height: height / 2
            });
        });
    });

    describe("Docked item with borders", function() {
        it("should fit when sized", function(viewport, width, height) {
            var top = viewport.add({
                docked: 'top',
                cls: 'purple',
                height: '25%',
                style: 'border: 2px solid blue'
            });

            var left = viewport.add({
                docked: 'left',
                cls: 'orange',
                width: '25%',
                style: 'border: 2px solid blue'
            });

            expect(top.element).toHavePageBox({
                height: height / 4
            });

            expect(left.element).toHavePageBox({
                width: width / 4
            });
        });

        it("should fit when unsized", function(viewport, width, height) {
            var top = viewport.add({
                docked: 'top',
                cls: 'purple',
                items: [{
                    height: height / 4 - 4
                }],
                style: 'border: 2px solid blue'
            });

            var left = viewport.add({
                docked: 'left',
                cls: 'orange',
                items: [{
                    width: width / 4 - 4
                }],
                style: 'border: 2px solid blue'
            });

            expect(top.element).toHavePageBox({
                height: height / 4
            });

            expect(left.element).toHavePageBox({
                width: width / 4
            });
        });
    });

    describe("Docked sized horizontal with overflowing text", function() {
        it("should stay within the container with overflowing text", function(viewport, width, height) {
            viewport.add({
                docked: 'left',
                cls: 'purple',
                width: 50
            });

            var body = viewport.add({
                html: 'The quick brows fox jumped over the lazy dog. How much wood could a woodchuck chuck if a woodchuck could chuck wood?'
            });

            expect(body.element).toHavePageBox({
                width: width - 50
            });
        });
    });

    if (!Ext.browser.is.IE) {
        describe("Docked unsized horizontal with overflowing text", function() {
            it("should stay within the container with overflowing text", function(viewport, width, height) {
                var container = viewport.add({
                    xtype: 'container'
                });

                container.add({
                    docked: 'left',
                    cls: 'purple',
                    width: 50
                });

                var body = container.add({
                    html: 'The quick brows fox jumped over the lazy dog. How much wood could a woodchuck chuck if a woodchuck could chuck wood?'
                });

                expect(body.element).toHavePageBox({
                    width: width - 50
                });
            });
        });
    }
});
