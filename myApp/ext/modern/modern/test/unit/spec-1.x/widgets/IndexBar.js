Ext.require('Ext.IndexBar', function() {

describe("1.x - Ext.IndexBar", function() {
    var indexBar, e;

    beforeEach(function() {
        indexBar = new Ext.IndexBar({
            renderTo: Ext.getBody()
        });
    });

    afterEach(function() {
        indexBar.destroy();
    });

    describe("1.x - when initComponent", function() {
        it("should create a store", function() {
            expect(indexBar.store).toBeDefined();
        });

        describe("1.x - when using the alphabet", function() {
            beforeEach(function() {
                indexBar.destroy();
                indexBar = new Ext.IndexBar({
                    renderTo: Ext.getBody(),

                    alphabet: true
                });
            });

            it("should set the ui property", function() {
                expect(indexBar.ui).toEqual('alphabet');
            });
        });

        describe("1.x - when vertical", function() {
            it("isVertical should return true", function() {
                expect(indexBar.isVertical()).toBeTruthy();
            });
        });

        describe("1.x - when horizontal", function() {
            beforeEach(function() {
                indexBar.destroy();
                indexBar = new Ext.IndexBar({
                    renderTo: Ext.getBody(),
                    direction: 'horizontal'
                });
            });

            it("isHorizontal() should be true", function() {
                expect(indexBar.isHorizontal()).toBeTruthy();
            });
        });
    });

    describe("1.x - when afterrender", function() {
        beforeEach(function() {
            e = {
                pageX: 0,
                pageY: 0,

                stopEvent: function() {},
                stopPropagation: function() {},
                preventDefault: function() {}
            };
        });

        describe("1.x - when using the alphabet", function() {
            beforeEach(function() {
                indexBar.destroy();
                indexBar = new Ext.IndexBar({
                    renderTo: Ext.getBody(),

                    alphabet: true
                });
            });

            it("should load the letters into the store", function() {
                expect(indexBar.store.getAt(0).get('key')).toEqual(indexBar.letters[0].toLowerCase());
            });
        });

        describe("1.x - when vertical", function() {
            it("should add a vertical class", function() {
                expect(indexBar.el.hasCls(indexBar.componentCls + '-vertical')).toBeTruthy();
            });
        });

        describe("1.x - when horizontal", function() {
            beforeEach(function() {
                indexBar.destroy();
                indexBar = new Ext.IndexBar({
                    renderTo: Ext.getBody(),

                    direction: 'horizontal'
                });
            });

            it("should add a horizontal class", function() {
                expect(indexBar.el.hasCls(indexBar.componentCls + '-horizontal')).toBeTruthy();
            });
        });

        describe("1.x - when onTouchStart", function() {
            it("should add a pressed class", function() {
                spyOn(indexBar.el, "addCls").andCallThrough();
                spyOn(indexBar, "onTouchMove");

                indexBar.onTouchStart(e);

                expect(indexBar.el.addCls).wasCalledWith(indexBar.componentCls + '-pressed');
            });

            it("should call onTouchMove", function() {
                spyOn(indexBar, "onTouchMove");

                indexBar.onTouchStart(e);

                expect(indexBar.onTouchMove).wasCalledWith(e);
            });
        });

        describe("1.x - when onTouchEnd", function() {
            it("should remove a pressed class", function() {
                spyOn(indexBar.el, "removeCls").andCallThrough();

                indexBar.onTouchEnd(e);

                expect(indexBar.el.removeCls).wasCalledWith(indexBar.componentCls + '-pressed');
            });
        });

        describe("1.x - when onTouchMove", function() {
            describe("1.x - when vertical", function() {
                beforeEach(function() {
                    indexBar.pageBox = {
                        bottom: 50,
                        top   : 30
                    };
                });

                it("should run", function() {
                    indexBar.onTouchMove({
                        pageX: 0,
                        pageY: 40,

                        stopEvent: function() {},
                        stopPropagation: function() {},
                        preventDefault: function() {}
                    });
                });

                it("should not run", function() {
                    indexBar.onTouchMove({
                        pageX: 0,
                        pageY: 0,

                        stopEvent: function() {},
                        stopPropagation: function() {},
                        preventDefault: function() {}
                    });
                });
            });

            describe("1.x - when horizontal", function() {
                beforeEach(function() {
                    indexBar.vertical = false;
                    indexBar.horizontal = true;

                    indexBar.pageBox = {
                        left : 30,
                        right: 50
                    };
                });

                it("should run", function() {
                    indexBar.onTouchMove({
                        pageX: 40,
                        pageY: 0,

                        stopEvent: function() {},
                        stopPropagation: function() {},
                        preventDefault: function() {}
                    });
                });

                it("should not run", function() {
                    indexBar.onTouchMove({
                        pageX: 0,
                        pageY: 0,

                        stopEvent: function() {},
                        stopPropagation: function() {},
                        preventDefault: function() {}
                    });
                });
            });

            describe("1.x - when no pageBox", function() {
                beforeEach(function() {
                    indexBar.vertical = false;
                    indexBar.horizontal = true;

                    indexBar.pageBox = false;
                });

                it("should not run", function() {
                    indexBar.onTouchMove({
                        pageX: 40,
                        pageY: 0,

                        stopEvent: function() {},
                        stopPropagation: function() {},
                        preventDefault: function() {}
                    });
                });
            });
        });
    });
});

});
