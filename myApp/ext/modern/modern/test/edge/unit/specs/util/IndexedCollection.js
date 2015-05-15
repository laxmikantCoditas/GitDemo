Ext.require('Ext.util.IndexedCollection', function() {
    describe("Ext.util.IndexedCollection", function() {
        var items = [],
            collection;

        var Item = new Ext.Class({
            mixins: ['Ext.mixin.Identifiable'],
            identifiablePrefix: 'test-'
        });

        function addItems(count) {
            var i, item;

            for (i = 0; i < count; i++) {
                item = new Item();
                items.push(item);
                collection.add(item);
            }
        }

        beforeEach(function() {
            collection = new Ext.util.IndexedCollection();
        });

        afterEach(function() {
            items.length = 0;
        });

        describe("add()", function() {
            it("should add one item", function() {
                addItems(1);

                expect(collection.indexOf(items[0])).toBe(0);
                expect(collection.has(items[0])).toBe(true);
                expect(collection.length).toBe(1);
            });

            it("should add multiple items", function() {
                addItems(4);

                expect(collection.length).toBe(4);
            });

            it("should not add again if the item already exists", function() {
                var item = new Item();

                collection.add(item);
                collection.add(item);
                collection.add(item);

                expect(collection.length).toBe(1);
            });
        });

        describe("remove()", function() {
            it("should remove one item", function() {
                addItems(1);
                collection.remove(items[0]);

                expect(collection.indexOf(items[0])).toBe(-1);
                expect(collection.has(items[0])).toBe(false);
                expect(collection.length).toBe(0);
            });

            it("should remove multiple items", function() {
                addItems(4);

                collection.remove(items[2]);
                expect(collection.indexOf(items[3])).toBe(2);

                collection.remove(items[0]);
                expect(collection.indexOf(items[1])).toBe(0);
            });

            it("should not rebuild indexes if removing the last item", function() {
                spyOn(collection, 'rebuildIndexes').andCallThrough();

                addItems(3);

                collection.remove(items[2]);
                collection.remove(items[1]);
                collection.remove(items[0]);

                expect(collection.rebuildIndexes).not.toHaveBeenCalled();
            });

            it("should do nothing if the item doesn't exist", function() {
                addItems(3);

                collection.remove(new Item);

                expect(collection.length).toBe(3);
            });
        });

        describe("removeAll()", function() {
            it("should remove all starting from last item", function() {
                addItems(10);

                spyOn(collection, 'rebuildIndexes').andCallThrough();

                collection.removeAll();

                expect(collection.rebuildIndexes).not.toHaveBeenCalled();
                expect(collection.length).toBe(0);
            });
        });

        describe("insert()", function() {
            beforeEach(function() {
                this.addMatchers({
                    toBeInOrder: function(order) {
                        var actualItems = this.actual,
                            actualOrder = actualItems.map(function(item) {
                                return items.indexOf(item);
                            });

                        this.message = function() {
                            return "Expected items to be in this order: " + jasmine.pp(order) +
                                " but actually got: " + jasmine.pp(actualOrder);
                        };

                        return this.env.equals_(order, actualOrder);
                    }
                });
            });

            it("should insert a new item", function() {
                var newItem = new Item;

                addItems(1);
                collection.insert(newItem, 0);

                expect(collection.indexOf(items[0])).toBe(1);
                expect(collection.indexOf(newItem)).toBe(0);
                expect(collection.length).toBe(2);
            });

            it("should do nothing if the new index is the same with the current index", function() {
                addItems(5);
                collection.insert(items[3], 3);

                expect(collection.items).toBeInOrder([0, 1, 2, 3, 4]);
            });

            it("should move an existing item before", function() {
                addItems(5);
                collection.insert(items[3], 1);

                expect(collection.items).toBeInOrder([0, 3, 1, 2, 4]);
            });

            it("should move an existing item after", function() {
                addItems(5);
                collection.insert(items[1], 3);

                expect(collection.items).toBeInOrder([0, 2, 3, 1, 4]);
            });
        });
    });
});
