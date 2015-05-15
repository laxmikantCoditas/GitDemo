Ext.require([
    'Ext.Container',
    'Ext.layout.Abstract'
], function() {

    describe("Ext.Container", function() {
        var container, foo, bar,
            Container = new Ext.Class({
            extend: Ext.Container,
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

        describe("constructor()", function() {
//            it("should create items and innerItems collections", function() {
//                expect(container.getItems()).toBeInstanceOf(Ext.util.IndexedCollection);
//                expect(container.getInnerItems()).toBeInstanceOf(Ext.util.IndexedCollection);
//            });
        });

        describe("members", function() {
            describe("add()", function() {
                it("should add a single item", function() {
                    container.add(foo);
                    expect(container.has(foo)).toBe(true);
                    expect(container.hasInnerItem(foo)).toBe(true);
                });

                it("should return the added item", function() {
                    var ret = container.add({});
                    expect(ret).toBeInstanceOf(Ext.Container);
                });

                it("should add an array of items", function() {
                    container.add([foo, bar]);
                    expect(container.has(foo));
                    expect(container.has(bar));
                });

//                it("should return an array of added items", function() {
//                    var ret = container.add([
//                        {},
//                        {}
//                    ]);
//                    expect(ret.length).toBe(2);
//                    expect(ret[0]).toBeInstanceOf(Ext.Container);
//                    expect(ret[1]).toBeInstanceOf(Ext.Container);
//                });

                it("should not add a non-inner item to innerItems collection", function() {
                    foo.setTop(0);

                    container.add(foo);
                    expect(container.has(foo));
                    expect(container.hasInnerItem(foo)).toBe(false);
                });

                it("should do nothing if adding existing item", function() {
                    container.add(foo);
                    container.add(foo);
                    container.add(foo);

                    expect(container.getItems().length).toBe(1);
                });

                it("should invoke setParent() on the added item", function() {
                    var spy = spyOn(foo, 'setParent');

                    container.add(foo);

                    expect(spy).toHaveBeenCalledWith(container);
                });

                it("should throw an error if the given item is falsy", function() {
                    expect(function() {
                        container.add(null);
                    }).toThrowSomethingLike("Invalid item given");
                });
            });

            describe("remove()", function() {
                var component;

                beforeEach(function() {
                    component = new Ext.Component;
                    container.add(component);
                });

                it("should remove the item", function() {
                    container.remove(component);
                    expect(container.has(component)).toBe(false);
                    expect(container.hasInnerItem(component)).toBe(false);
                });

                it("should destroy the item when autoDestroy is true", function() {
                    spyOn(component, 'destroy');
                    container.setAutoDestroy(true);

                    container.remove(component);
                    expect(component.destroy).toHaveBeenCalled();
                });

                it("should not destroy the item when autoDestroy is false", function() {
                    var component = new Ext.Component;

                    spyOn(component, 'destroy');
                    container.setAutoDestroy(false);

                    container.remove(component);
                    expect(component.destroy).not.toHaveBeenCalled();
                });

                it("should destroy the item when destroy argument is true", function() {
                    spyOn(component, 'destroy');
                    container.setAutoDestroy(false);

                    container.remove(component, true);
                    expect(component.destroy).toHaveBeenCalled();
                });

                it("should do nothing if the item is not contained", function() {
                    container.remove(new Ext.Component);
                    expect(container.getItems().length).toBe(1);
                });
            });

            describe("removeAll()", function() {
                beforeEach(function() {
                    container.add([
                        {
                            docked: 'top'
                        },
                        {},
                        {
                            top: 0
                        },
                        {},
                        {
                            centered: true
                        },
                        {},
                        {}
                    ]);
                });

                it("should only remove inner items if 'everything' argument is not true", function() {
                    container.removeAll();

                    expect(container.getItems().length).toBe(3);
                    expect(container.getInnerItems().length).toBe(0);
                });

                it("should only remove all items if 'everything' argument is true", function() {
                    container.removeAll(true, true);

                    expect(container.getItems().length).toBe(0);
                    expect(container.getInnerItems().length).toBe(0);
                });

                describe("destroying", function() {
                    var spies;

                    beforeEach(function() {
                        spies = [];
                        container.getItems().items.forEach(function(item) {
                            spies.push(spyOn(item, 'destroy'));
                        });
                    });

                    it("should destroy all items if autoDestroy is set to true", function() {
                        container.setAutoDestroy(true);
                        container.removeAll(null, true);

                        spies.forEach(function(spy) {
                            expect(spy).toHaveBeenCalled();
                        });
                    });

                    it("should not destroy any item if autoDestroy is set to false", function() {
                        container.setAutoDestroy(false);

                        container.removeAll(null, true);

                        spies.forEach(function(spy) {
                            expect(spy).not.toHaveBeenCalled();
                        });
                    });

                    it("should destroy all items if 'destroy' argument is true", function() {
                        container.setAutoDestroy(false);

                        container.removeAll(true, true);

                        spies.forEach(function(spy) {
                            expect(spy).toHaveBeenCalled();
                        });
                    });
                });
            });

            describe("insertion", function() {
                beforeEach(function() {
                    this.addMatchers({
                        toBeInOrder: function(order) {
                            var items = this.actual.items || this.actual,
                                actualOrder = items.map(function(item) {
                                    return item.config.reference;
                                });

                            this.message = function() {
                                return "Expected items to be in this order: " + jasmine.pp(order) +
                                    " but actually got: " + jasmine.pp(actualOrder);
                            };

                            return this.env.equals_(order, actualOrder);
                        }
                    });

                    container.add([
                        {
                            reference: '0',
                            docked: 'top'
                        },
                        {
                            reference: '1'
                        },
                        {
                            reference: '2',
                            top: 0
                        },
                        {
                            reference: '3'
                        },
                        {
                            reference: '4',
                            centered: true
                        },
                        {
                            reference: '5'
                        },
                        {
                            reference: '6'
                        }
                    ]);
                });

                describe("New Item(s)", function() {
                    it("should insert a single item at a current non-inner item", function() {
                        container.insert(2, foo);
                        expect(container.has(foo)).toBe(true);
                        expect(container.indexOf(foo)).toBe(2);
                        expect(container.hasInnerItem(foo)).toBe(true);
                        expect(container.innerIndexOf(foo)).toBe(1);
                    });

                    it("should insert a single item at a current inner item", function() {
                        container.insert(3, foo);
                        expect(container.indexOf(foo)).toBe(3);
                        expect(container.innerIndexOf(foo)).toBe(1);
                    });

                    it("should insert a single item at another current inner item", function() {
                        container.insert(4, foo);
                        expect(container.indexOf(foo)).toBe(4);
                        expect(container.innerIndexOf(foo)).toBe(2);
                    });

                    it("should insert at last index if the given index is greater than the current last index", function() {
                        container.insert(100, foo);
                        expect(container.indexOf(foo)).toBe(7);
                        expect(container.innerIndexOf(foo)).toBe(4);
                    });

                    it("should throw an error if no valid index is given", function() {
                        expect(function() {
                            container.insert(null, foo);
                        }).toThrowSomethingLike("Invalid index of 'null', must be a valid number");
                    });

                    it("should return the added item", function() {
                        var ret = container.insert(2, {});
                        expect(ret).toBeInstanceOf(Ext.Container);
                    });

                    it("should insert an array of items", function() {
                        container.insert(2, [foo, bar]);
                        expect(container.indexOf(foo)).toBe(2);
                        expect(container.indexOf(bar)).toBe(3);
                        expect(container.getItems().length).toBe(9);
                    });

//                    it("should return an array of inserted items in the right order", function() {
//                        var ret = container.insert(2, [foo, bar]);
//
//                        expect(ret).toEqual([foo, bar]);
//                    });

                    it("should invoke setParent() on the inserted item", function() {
                        var spy = spyOn(foo, 'setParent');

                        container.insert(6, foo);

                        expect(spy).toHaveBeenCalledWith(container);
                    });
                });

                describe("Existing Item(s)", function() {
                    it("should move a non-inner item before the current index", function() {
                        var toMove = container.getAt(2);
                        container.insert(1, toMove);
                        expect(container.getItems()).toBeInOrder(['0', '2', '1', '3', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['1', '3', '5', '6']);
                    });

//                    it("should move a non-inner item after the current index", function() {
//                        var toMove = container.getAt(2);
//                        container.insert(5, toMove);
//                        expect(container.getItems()).toBeInOrder(['0', '1', '3', '4', '5', '2', '6']);
//                        expect(container.getInnerItems()).toBeInOrder(['1', '3', '5', '6']);
//                    });

                    it("should move an inner item before the current index", function() {
                        var toMove = container.getAt(3);
                        container.insert(1, toMove);
                        expect(container.getItems()).toBeInOrder(['0', '3', '1', '2', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['3', '1', '5', '6']);
                    });

//                    it("should move an inner item after the current index", function() {
//                        var toMove = container.getAt(3);
//                        container.insert(5, toMove);
//                        expect(container.getItems()).toBeInOrder(['0', '1', '2', '4', '5', '3', '6']);
//                        expect(container.getInnerItems()).toBeInOrder(['1', '5', '3', '6']);
//                    });

//                    it("should move multiple items from arbitrary indexes ", function() {
//                        var foo = container.getAt(1),
//                            bar = container.getAt(3),
//                            baz = container.getAt(6);
//
//                        container.insert(2, [foo, bar, baz]);
//                        expect(container.getItems()).toBeInOrder(['0', '2', '1', '3', '6', '4', '5']);
//                        expect(container.getInnerItems()).toBeInOrder(['1', '3', '6', '5']);
//                    });

//                    it("should move mixed items from arbitrary indexes (1)", function() {
//                        var foo = container.getAt(0),
//                            bar = container.getAt(3),
//                            baz = container.getAt(4),
//                            boo = container.getAt(6);
//
//                        container.insert(3, [foo, bar, baz, boo]);
//                        expect(container.getItems()).toBeInOrder(['1', '2', '5', '0', '3', '4', '6']);
//                        expect(container.getInnerItems()).toBeInOrder(['1', '5', '3', '6']);
//                    });

//                    it("should move mixed items from arbitrary indexes (2)", function() {
//                        var foo = container.getAt(4),
//                            bar = container.getAt(0),
//                            baz = container.getAt(6),
//                            boo = container.getAt(3);
//
//                        container.insert(3, [foo, bar, baz, boo]);
//                        expect(container.getItems()).toBeInOrder(['1', '2', '5', '4', '0', '6', '3']);
//                        expect(container.getInnerItems()).toBeInOrder(['1', '5', '6', '3']);
//                    });

                    it("should move mixed items from arbitrary indexes (3)", function() {
                        var foo = container.getAt(6),
                            bar = container.getAt(1),
                            baz = container.getAt(3),
                            boo = container.getAt(2);

                        container.insert(0, [foo, bar, baz, boo]);
                        expect(container.getItems()).toBeInOrder(['6', '1', '3', '2', '0', '4', '5']);
                        expect(container.getInnerItems()).toBeInOrder(['6', '1', '3', '5']);
                    });

//                    it("should move mixed items from arbitrary indexes (4)", function() {
//                        var foo = container.getAt(2),
//                            bar = container.getAt(3),
//                            baz = container.getAt(1),
//                            boo = container.getAt(6);
//
//                        container.insert(100, [foo, bar, baz, boo]);
//                        expect(container.getItems()).toBeInOrder(['0', '4', '5', '2', '3', '1', '6']);
//                        expect(container.getInnerItems()).toBeInOrder(['5', '3', '1', '6']);
//                    });

                    it("should move mixed items from arbitrary indexes (5)", function() {
                        var foo = container.getAt(2),
                            bar = container.getAt(3),
                            baz = container.getAt(1),
                            boo = container.getAt(6);

                        container.insert(0, [foo, bar, baz, boo]);
                        expect(container.getItems()).toBeInOrder(['2', '3', '1', '6', '0', '4', '5']);
                        expect(container.getInnerItems()).toBeInOrder(['3', '1', '6', '5']);
                    });

//                    it("should add new and move existing items", function() {
//                        var foo = container.getAt(1),
//                            bar = {
//                                reference: 'bar'
//                            },
//                            baz = container.getAt(5),
//                            boo = {
//                                reference: 'boo'
//                            };
//
//                        container.insert(3, [foo, bar, baz, boo]);
//                        expect(container.getItems()).toBeInOrder(['0', '2', '3', '1', 'bar', '5', 'boo', '4', '6']);
//                        expect(container.getInnerItems()).toBeInOrder(['3', '1', 'bar', '5', 'boo', '6']);
//                    });
                });

                describe("insertBefore()", function() {
                    it("should move the item in front to before the item behind", function() {
                        container.insertBefore(container.getAt(3), container.getAt(1));
                        expect(container.getItems()).toBeInOrder(['0', '3', '1', '2', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['3', '1', '5', '6']);
                    });

                    it("should move the item behind to before the item in front", function() {
                        container.insertBefore(container.getAt(1), container.getAt(3));
                        expect(container.getItems()).toBeInOrder(['0', '2', '1', '3', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['1', '3', '5', '6']);
                    });
                });

                describe("insertAfter()", function() {
                    it("should move the item in front to after the item behind", function() {
                        container.insertAfter(container.getAt(3), container.getAt(1));
                        expect(container.getItems()).toBeInOrder(['0', '1', '3', '2', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['1', '3', '5', '6']);
                    });

                    it("should move the item behind to after the item in front", function() {
                        container.insertAfter(container.getAt(1), container.getAt(3));
                        expect(container.getItems()).toBeInOrder(['0', '2', '3', '1', '4', '5', '6']);
                        expect(container.getInnerItems()).toBeInOrder(['3', '1', '5', '6']);
                    });
                });
            });
        });


        describe("items", function() {
            describe("onItemInnerStateChange()", function() {
                it("should take the item out of innerItems collection", function() {
                    container.add([foo, bar]);
                    spyOn(foo, 'isInnerItem').andReturn(false);
                    container.onItemInnerStateChange(foo, false);
                    expect(container.hasInnerItem(foo)).toBe(false);
                });
                it("should put the item back to innerItems collection", function() {
                    container.add([foo, bar]);
                    spyOn(foo, 'isInnerItem').andReturn(false);
                    container.onItemInnerStateChange(foo, false);
                    foo.isInnerItem.andReturn(true);
                    container.onItemInnerStateChange(foo, true);
                    expect(container.hasInnerItem(foo)).toBe(true);
                    expect(container.innerIndexOf(foo)).toBe(0);
                });
            });
        });

        describe("destroy()", function() {
            it("should remove and destroy all items", function() {
                container.add([foo, bar]);
                container.destroy();
                expect(foo).toHaveBeenDestroyed();
                expect(bar).toHaveBeenDestroyed();
            });
        });

    });

});
