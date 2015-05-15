Ext.require([
    'Ext.Component'
], function() {

describe("Ext.Component", function() {
    var component;

    var FakeContainer = new Ext.Class({
        remove: function() {}
    });

    describe("constructor()", function() {
        it("should have a generated id", function() {
            expect((new Ext.Component).getId()).toBeDefined();
        });

        it("should take the given id in the config objet", function() {
            component = new Ext.Component({
                id: 'foo'
            });
            expect(component.getId()).toBe('foo');
        });

        it("should have element", function() {
            expect((new Ext.Component).element).toBeInstanceOf(Ext.Element);
        });

        it("should have innerElement", function() {
            expect((new Ext.Component).innerElement).toBeInstanceOf(Ext.Element);
        });

        xit("should fire an 'initialize' event", function() {
            var fn = jasmine.createSpy();

            new Ext.Component({
                listeners: {
                    initialize: fn
                }
            });

            expect(fn).toHaveBeenCalled();
        });
    });

    describe("members", function() {
        beforeEach(function() {
            component = new Ext.Component;
        });

        describe("setParent()", function() {
            it("should store the parent reference", function() {
                var parent = new FakeContainer;
                component.setParent(parent);

                expect(component.getParent()).toBe(parent);
            });

            it("should remove itself from the current parent if exists", function() {
                var oldParent = new FakeContainer,
                    newParent = new FakeContainer;

                spyOn(oldParent, 'remove');

                component.setParent(oldParent);
                component.setParent(newParent);

                expect(oldParent.remove).toHaveBeenCalled();
            });
        });

        describe("destroy()", function() {
            it("should remove itself from the parent", function() {
                var parent = new FakeContainer,
                    spy = spyOn(parent, 'remove');

                component.setParent(parent);
                component.destroy();

                expect(spy).toHaveBeenCalledWith(component, false);
            });
        });
    });

    describe("config", function() {
        var lengthConfigs = ['margin', 'padding', 'border', 'top', 'right',
            'left', 'bottom', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight'];

        beforeEach(function() {
            component = new Ext.Component;
        });

        describe("style", function() {
            it("should work with string", function() {
                component.setStyle('color: red; font-size: 200%');
                expect(component.element).toHaveStyles({
                    color: 'red',
                    'font-size': '200%'
                });
            });

            it("should work with object", function() {
                component.setStyle({
                    'color': 'red',
                    'font-size': '200%'
                });
                expect(component.element).toHaveStyles({
                    color: 'red',
                    'font-size': '200%'
                });
            });

            it("should work with camelCase-styled object", function() {
                component.setStyle({
                    color: 'red',
                    fontSize: '200%'
                });
                expect(component.element).toHaveStyles({
                    color: 'red',
                    'font-size': '200%'
                });
            });
        });

        lengthConfigs.forEach(function(config) {
            describe(config, function() {
                it("should work with integer", function() {
                    component.set(config, 10);
                    if (config == 'border') {
                        expect(component.element).toHaveStyle('border-width', '10px');
                    }
                    else {
                        expect(component.element).toHaveStyle(config, '10px');
                    }
                });

                it("should work with string", function() {
                    component.set(config, '2em');
                    if (config == 'border') {
                        expect(component.element).toHaveStyle('border-width', '2em');
                    }
                    else {
                        expect(component.element).toHaveStyle(config, '2em');
                    }
                });

                it("should clear the value if null is given", function() {
                    component.set(config, '2em');
                    component.set(config, null);
                    expect(component.element).toHaveStyle(config, null);
                });

                it("should clear the value if false is given", function() {
                    component.set(config, '2em');
                    component.set(config, false);
                    expect(component.element).toHaveStyle(config, null);
                });

                it("should clear the value if empty string is given", function() {
                    component.set(config, '2em');
                    component.set(config, '');
                    expect(component.element).toHaveStyle(config, null);
                });

                it("should clear the value if empty string is given", function() {
                    component.set(config, '2em');
                    component.set(config, '');
                    expect(component.element).toHaveStyle(config, null);
                });

                it("should clear the value if undefined is given", function() {
                    component.set(config, '2em');
                    component.set(config);
                    expect(component.element).toHaveStyle(config, null);
                });
            });
        });

        describe('zIndex', function() {
            it("should work with integer", function() {
                component.set('zIndex', 10);
                expect(component.element).toHaveStyle('zIndex', '10');
            });

            it("should work with string", function() {
                component.set('zIndex', '10');
                expect(component.element).toHaveStyle('zIndex', '10');
            });

            it("should clear the value if null is given", function() {
                component.set('zIndex', '10');
                component.set('zIndex', null);
                expect(component.element).toHaveStyle('zIndex', null);
            });

            it("should clear the value if a NaN value is given", function() {
                component.set('zIndex', '10');
                component.set('zIndex', 'foo');
                expect(component.element).toHaveStyle('zIndex', null);
            });

            it("should clear the value if false is given", function() {
                component.set('zIndex', '10');
                component.set('zIndex', false);
                expect(component.element).toHaveStyle('zIndex', null);
            });

            it("should clear the value if empty string is given", function() {
                component.set('zIndex', '10');
                component.set('zIndex', '');
                expect(component.element).toHaveStyle('zIndex', null);
            });

            it("should clear the value if undefined is given", function() {
                component.set('zIndex', '10');
                component.set('zIndex');
                expect(component.element).toHaveStyle('zIndex', null);
            });
        });

        describe("Non-inner States", function() {
            it("should not be floating by default", function() {
                expect(component.isFloating()).toBe(false);
            });

            it("should not be centered by default", function() {
                expect(component.isCentered()).toBe(false);
            });

            it("should not be docked by default", function() {
                expect(component.isDocked()).toBe(false);
            });

            describe("Floating", function() {
                var floatingConfigs = ['top', 'right', 'bottom', 'left'];

                floatingConfigs.forEach(function(config) {
                    it("should be floating if " + config + " is set", function() {
                        component.set(config, 10);
                        expect(component.isFloating()).toBe(true);
                    });
                });

                it("should not be centered if it's floating", function() {
                    component.setCentered(true);
                    component.setTop(10);
                    expect(component.isCentered()).toBe(false);
                });

                it("should not be docked if it's floating", function() {
                    component.setDocked('top');
                    component.setTop(10);
                    expect(component.isDocked()).toBe(false);
                });
            });

            describe("Centered", function() {
                it("should be centered if set", function() {
                    component.setCentered(true);
                    expect(component.isCentered()).toBe(true);
                });

                it("should not be floating if it's centered", function() {
                    component.setTop(10);
                    component.setCentered(true);
                    expect(component.isFloating()).toBe(false);
                });

                it("should not be docked if it's centered", function() {
                    component.setDocked('top');
                    component.setCentered(true);
                    expect(component.isDocked()).toBe(false);
                });
            });

            describe("Docked", function() {
                it("should be centered if set", function() {
                    component.setCentered(true);
                    expect(component.isCentered()).toBe(true);
                });

                it("should not be floating if it's centered", function() {
                    component.setTop(10);
                    component.setCentered(true);
                    expect(component.isFloating()).toBe(false);
                });

                it("should not be docked if it's centered", function() {
                    component.setDocked('top');
                    component.setCentered(true);
                    expect(component.isDocked()).toBe(false);
                });
            });
        });
    });
});

});
