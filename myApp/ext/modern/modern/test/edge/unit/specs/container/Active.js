Ext.require([
    'Ext.container.Active'
], function() {

    describe("Ext.container.Active", function() {
        var container, foo, bar,
            Container = new Ext.Class({
                extend: Ext.container.Active,
                config: {
                    layout: {
                        xclass: Ext.layout.Abstract
                    }
                }
            });

        beforeEach(function() {
            container = new Container;
            foo = new Ext.Component;
            bar = new Ext.Component;
        });

        afterEach(function() {
            container.destroy();
            foo.destroy();
            bar.destroy();
        });

        describe("config", function() {
            describe("activeItem", function() {
                describe("getActiveItem()", function() {
                    it("should be set to null if doesn't have any item", function() {
                        expect(container.getActiveItem()).toBe(null);
                    });

                    it("should be set to the first item when it's added", function() {
                        container.add([foo, bar]);
                        expect(container.getActiveItem()).toBe(foo);
                    });

                    it("should be set to the first item when it's inserted", function() {
                        container.insert([foo, bar], 0);
                        expect(container.getActiveItem()).toBe(foo);
                    });

                    it("should not change if the current activeItem is moved", function() {
                        container.add([foo, bar]);
                        container.setActiveItem(bar);
                        container.insert(bar, 0);
                        expect(container.getActiveItem()).toBe(bar);
                    });

                    it("should be set to the first item by default during constructor()", function() {
                        container = new Container({
                            items: [foo, bar]
                        });

                        expect(container.getActiveItem()).toBe(foo);
                    });

                    it("should set to null if all items are removed", function() {
                        container.add([foo, bar]);
                        container.removeAll();

                        expect(container.getActiveItem()).toBe(null);
                    });

                    it("should set to the first item if the current activeItem is removed", function() {
                        container.add([foo, bar]);
                        container.setActiveItem(bar);

                        container.remove(bar);
                        expect(container.getActiveItem()).toBe(foo);
                    });
                });

                describe("setActiveItem()", function() {
                    beforeEach(function() {
                        container.add([foo, bar]);
                    });

                    it("should accept index number", function() {
                        container.setActiveItem(1);
                        expect(container.getActiveItem()).toBe(bar);
                    });

                    it("should accept string id", function() {
                        container.setActiveItem(bar.getId());
                        expect(container.getActiveItem()).toBe(bar);
                    });

                    it("should accept instance", function() {
                        container.setActiveItem(bar);
                        expect(container.getActiveItem()).toBe(bar);
                    });
                });
            });
        });

    });

});
