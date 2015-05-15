Ext.require('Ext.Mixin', function() {

describe("Ext.Mixin", function() {
    var Foo, Bar, Baz;

    beforeEach(function() {
        Foo = new Ext.Class({
            extend: Ext.Mixin,

            mixinConfig: {
                id: 'foo',
                hooks: {
                    foo: 'bar'
                }
            },

            foo: function() {
                // Foo
            }
        });

        Bar = new Ext.Class({
            mixins: [Foo],

            bar: function() {
                // Bar
            }
        });

        Baz = new Ext.Class({
            extend: Foo,
            mixinConfig: {
                id: 'baz'
            }
        });
    });

    describe("onClassExtended", function() {
        it("should merge mixinConfig with the parent class' mixinConfig", function() {
            expect(Baz.prototype.mixinConfig.hooks).toBeDefined();
            expect(Baz.prototype.mixinConfig.id).toBe('baz');
        });

        it("should copy mixinConfig.id to mixinId", function() {
            expect(Foo.prototype.mixinId).toBe('foo');
        });
    });

    describe("onClassMixedIn", function() {
        it("should hooks into the target class' methods", function() {
            spyOn(Foo.prototype, 'foo');
            spyOn(Bar.prototype, 'bar').andCallThrough();

            var bar = new Bar();
            bar.bar();

            expect(Foo.prototype.foo).toHaveBeenCalled();
        });
    });

});

});

