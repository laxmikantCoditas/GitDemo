Ext.require([
    'Ext.Promise'
], function() {

describe("Ext.Promise", function() {

    var promise;

    beforeEach(function() {
        promise = new Ext.Promise();
    });

    describe("members", function() {
        describe("then()", function() {
            var scope, success, error;

            beforeEach(function() {
                promise = new Ext.Promise();
                success = jasmine.createSpy();
                error = jasmine.createSpy();
                scope = {
                    success: success,
                    error: error
                };
            });

            it("should accept 1 argument as a success callback", function() {
                promise.then(success);

                expect(promise.listeners.length).toBe(1);
                expect(promise.listeners[0]).toEqual({
                    scope: null,
                    error: undefined,
                    success: success
                });
            });

            it("should accept 2 arguments as success and error callbacks", function() {
                promise.then(success, error);

                expect(promise.listeners.length).toBe(1);
                expect(promise.listeners[0]).toEqual({
                    scope: null,
                    error: error,
                    success: success
                });
            });

            it("should accept 2 arguments as success and error callbacks", function() {
                promise.then(success, error);

                expect(promise.listeners.length).toBe(1);
                expect(promise.listeners[0]).toEqual({
                    scope: null,
                    error: error,
                    success: success
                });
            });

            it("should accept 3 arguments as scope, success and error callbacks", function() {
                promise.then(scope, 'success', error);

                expect(promise.listeners.length).toBe(1);
                expect(promise.listeners[0]).toEqual({
                    scope: scope,
                    success: success,
                    error: error
                });
            });
        });

        describe("succeed()", function() {
            describe("Synchronous", function() {
                var foo, bar, baz;

                beforeEach(function() {
                    foo = jasmine.createSpy().andReturn('foo');
                    bar = jasmine.createSpy().andReturn('bar');
                    baz = jasmine.createSpy().andReturn('baz');
                });

                it("should trigger all listeners and chain the previous returned value to the next one", function() {
                    promise.then(foo).then(bar).then(baz);
                    promise.succeed('test');

                    expect(foo).toHaveBeenCalledWith('test');
                    expect(bar).toHaveBeenCalledWith('foo');
                    expect(baz).toHaveBeenCalledWith('bar');
                });

                it("should work with delayed chain", function() {
                    promise.succeed('test');
                    promise.then(foo).then(bar).then(baz);

                    expect(foo).toHaveBeenCalledWith('test');
                    expect(bar).toHaveBeenCalledWith('foo');
                    expect(baz).toHaveBeenCalledWith('bar');
                });

                it("should pass the last returned value to the new callback", function() {
                    var boo = jasmine.createSpy();

                    promise.then(foo).then(bar).then(baz);
                    promise.succeed('test');
                    promise.then(boo);

                    expect(boo).toHaveBeenCalledWith('baz');
                });
            });

            describe("Asynchronous", function() {
                var foo, bar, baz, fooDone, barDone;

                beforeEach(function() {
                    fooDone = false;
                    barDone = false;

                    foo = jasmine.createSpy().andCallFake(function() {
                        var p = new Ext.Promise();

                        setTimeout(function() {
                            p.succeed('foo');
                            fooDone = true;
                        }, 10);

                        return p;
                    });
                    bar = jasmine.createSpy().andCallFake(function() {
                        var p = new Ext.Promise();

                        setTimeout(function() {
                            p.succeed('bar');
                            barDone = true;
                        }, 10);

                        return p;
                    });
                    baz = jasmine.createSpy().andReturn('baz');
                });

                it("should trigger all listeners and chain the previous returned value to the next one", function() {
                    promise.then(foo).then(bar).then(baz);
                    promise.succeed('test');

                    expect(foo).toHaveBeenCalledWith('test');
                    expect(bar).not.toHaveBeenCalled();
                    expect(baz).not.toHaveBeenCalled();

                    waitsFor(function() {
                        return fooDone;
                    });

                    runs(function() {
                        expect(bar).toHaveBeenCalledWith('foo');
                        expect(baz).not.toHaveBeenCalled();
                    });

                    waitsFor(function() {
                        return barDone;
                    });

                    runs(function() {
                        expect(baz).toHaveBeenCalledWith('bar');
                    });
                });

                it("should work with delayed chain", function() {
                    promise.succeed('test');
                    promise.then(foo).then(bar).then(baz);

                    expect(foo).toHaveBeenCalledWith('test');
                    expect(bar).not.toHaveBeenCalled();
                    expect(baz).not.toHaveBeenCalled();

                    waitsFor(function() {
                        return fooDone;
                    });

                    runs(function() {
                        expect(bar).toHaveBeenCalledWith('foo');
                        expect(baz).not.toHaveBeenCalled();
                    });

                    waitsFor(function() {
                        return barDone;
                    });

                    runs(function() {
                        expect(baz).toHaveBeenCalledWith('bar');
                    });
                });

            });
        });
    });

    describe("statics", function() {
        describe("when()", function() {
            it("should resolve when all given promises are fulfilled", function() {
                var fooDone = false,
                    barDone = false,
                    foo = new Ext.Promise(),
                    bar = new Ext.Promise(),
                    baz = jasmine.createSpy();

                Ext.Promise.when(foo, bar).then(baz);

                setTimeout(function() {
                    foo.succeed('foo');
                    fooDone = true;
                }, 10);

                setTimeout(function() {
                    bar.succeed('bar');
                    barDone = true;
                }, 20);

                waitsFor(function() {
                    return fooDone && barDone;
                });

                runs(function() {
                    expect(baz).toHaveBeenCalledWith('foo', 'bar');
                })
            });
        });
    });
});

});
