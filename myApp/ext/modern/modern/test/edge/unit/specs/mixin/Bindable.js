Ext.require('Ext.mixin.Hookable', function() {

    describe("Ext.mixin.Hookable", function() {
        var TestClass, object, test;

        beforeEach(function() {
            object = {
                foo: function() {
                }
            };

            TestClass = new Ext.Class({
                mixins: [Ext.mixin.Hookable],
                foo: function() {
                },
                bar: function() {
                },
                baz: function() {

                }
            });

            test = new TestClass();
        });

        describe("bind()", function() {
            it("should bind the the same method name", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();
                spyOn(test, 'foo').andCallThrough();

                test.bind(object, 'foo');
                object.foo();

                expect(boundFn).toHaveBeenCalled();
                expect(test.foo).toHaveBeenCalled();
            });

            it("should bind the the specified method name", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();
                spyOn(test, 'bar').andCallThrough();

                test.bind(object, 'foo', 'bar');
                object.foo();

                expect(boundFn).toHaveBeenCalled();
                expect(test.bar).toHaveBeenCalled();
            });

            it("should pass the original arguments object so that it can be modified", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();
                spyOn(test, 'bar').andCallFake(function(a, b, args) {
                    args[1] = 'c';
                });

                test.bind(object, 'foo', 'bar');
                object.foo('a', 'b');

                expect(boundFn).toHaveBeenCalledWith('a', 'c');
            });

            it("should prevent the original method from being called with the binding method returns false", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();

                spyOn(test, 'bar').andReturn(false);

                test.bind(object, 'foo', 'bar');
                object.foo();

                expect(boundFn).not.toHaveBeenCalled();
            });

            it("should not bind the same method again", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();
                spyOn(test, 'foo').andCallThrough();

                test.bind(object, 'foo');
                test.bind(object, 'foo');
                test.bind(object, 'foo');
                test.bind(object, 'foo');
                object.foo();

                expect(boundFn.callCount).toBe(1);
                expect(test.foo.callCount).toBe(1);
            });

            describe("Multiple bindings", function() {
                it("should allow multiple bindings on the same method", function() {
                    var boundFn = spyOn(object, 'foo').andCallThrough();

                    spyOn(test, 'foo').andCallThrough();

                    var test2 = new TestClass();

                    spyOn(test2, 'foo').andCallThrough();

                    test.bind(object, 'foo');
                    test2.bind(object, 'foo');

                    object.foo();

                    expect(test.foo).toHaveBeenCalled();
                    expect(test.foo.callCount).toBe(1);
                    expect(test.foo.mostRecentCall.object).toBe(test);

                    expect(test2.foo).toHaveBeenCalled();
                    expect(test2.foo.callCount).toBe(1);
                    expect(test2.foo.mostRecentCall.object).toBe(test2);

                    expect(boundFn).toHaveBeenCalled();
                    expect(boundFn.callCount).toBe(1);
                    expect(boundFn.mostRecentCall.object).toBe(object);
                });

                it("should prevent the earlier bound method to be called if the later one returns false", function() {
                    var boundFn = spyOn(object, 'foo').andCallThrough();

                    spyOn(test, 'foo').andCallThrough();

                    var test2 = new TestClass();

                    spyOn(test2, 'foo').andReturn(false);

                    test.bind(object, 'foo');
                    test2.bind(object, 'foo');

                    object.foo();

                    expect(test2.foo).toHaveBeenCalled();
                    expect(test.foo).not.toHaveBeenCalled();
                    expect(boundFn).not.toHaveBeenCalled();
                });
            });
        });

        describe("unbind()", function() {
            it("should remove the single binding", function() {
                var originalFn = object.foo;

                test.bind(object, 'foo');
                expect(object.foo).not.toBe(originalFn);

                test.unbind(object, 'foo');
                expect(object.foo).toBe(originalFn);
            });

            it("should remove the bindings in the middle of the chain", function() {
                var boundFn = spyOn(object, 'foo').andCallThrough();
                var test2 = new TestClass();
                var test3 = new TestClass();
                var test4 = new TestClass();

                spyOn(test, 'foo').andCallThrough();
                spyOn(test2, 'foo').andCallThrough();
                spyOn(test3, 'foo').andCallThrough();
                spyOn(test4, 'foo').andCallThrough();

                test.bind(object, 'foo');
                test2.bind(object, 'foo');
                test3.bind(object, 'foo');
                test4.bind(object, 'foo');

                test3.unbind(object, 'foo');
                test.unbind(object, 'foo');

                object.foo();

                expect(test.foo).not.toHaveBeenCalled();
                expect(test2.foo).toHaveBeenCalled();
                expect(test3.foo).not.toHaveBeenCalled();
                expect(test4.foo).toHaveBeenCalled();
                expect(boundFn).toHaveBeenCalled();
            });
        });
    });

});

