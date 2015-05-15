Ext.require('Ext.Button', function() {
    
describe("1.x - Ext.Button", function() {
    var button;
    
    beforeEach(function() {
        button = new Ext.Button({
            text    : 'button',
            renderTo: Ext.getBody()
        });
    });
    
    afterEach(function() {
        button.destroy();
    });
    
    describe("1.x - when rendered", function() {
        beforeEach(function() {
            button.destroy();
            button = new Ext.Button({
                text     : 'button',
                icon     : 'add',
                iconCls  : 'addCls',
                badgeText: '1',
                renderTo : Ext.getBody()
            });
        });
        
        it("should set the text", function() {
            expect(button.text).toEqual('button');
        });
        
        it("should set the icon", function() {
            expect(button.icon).toEqual('add');
        });
        
        it("should set the iconCls", function() {
            expect(button.iconCls).toEqual('addCls');
        });
        
        it("should set the badgeText", function() {
            expect(button.badgeText).toEqual('1');
        });
    });
    
    describe("1.x - onTapStart", function() {
        beforeEach(function() {
            button.pressedDelay = 1;
        });
        
        describe("1.x - when pressedDelay", function() {

            
            it("should add the pressedCls after 1ms", function() {
                runs(function() {
                    spyOn(button.el, "addCls");
    
                    button.onTapStart();
    
                    expect(button.el.addCls).wasNotCalledWith(button.pressedCls);
                });

                waitsFor(function() {
                    return button.el.addCls.calls.length === 1;
                });
                
                runs(function() {
                    expect(button.el.addCls).wasCalledWith(button.pressedCls);
                });
            });
        });
        
        describe("1.x - when !pressedDelay", function() {
            beforeEach(function() {
                button.pressedDelay = false;
            });
            
            it("should add the pressedCls", function() {
                spyOn(button.el, "addCls");
                
                button.onTapStart();
                
                expect(button.el.addCls).wasCalledWith(button.pressedCls);
            });
        });
        
        it("should not add the pressedCls when disabled", function() {
            runs(function() {
                button.disable();
    
                spyOn(button.el, "addCls");
    
                button.onTapStart();
    
                expect(button.el.addCls).wasNotCalledWith(button.pressedCls);
            });
            
            waits(50);
            
            runs(function() {
                expect(button.el.addCls).wasNotCalledWith(button.pressedCls);
            });
        });
    });
    
    describe("1.x - onTapCancel", function() {
        describe("1.x - when pressedDelay", function() {
            beforeEach(function() {
                button.pressedDelay = 250;
                button.onTapStart();
            });
            
            it("should remove the pressedTimeout", function() {
                expect(button.pressedTimeout).toBeDefined();
                
                button.onTapCancel();
                
                expect(button.pressedTimeout).not.toBeDefined();
            });
        });
        
        it("should remove the pressedCls", function() {
            spyOn(button.el, "removeCls");
            
            button.onTapCancel();
            
            expect(button.el.removeCls).wasCalledWith(button.pressedCls);
        });
    });
    
    describe("1.x - when passing autoEvent", function() {
        var button, eventName, theScope, scope;
        
        beforeEach(function() {
            button = undefined;
            eventName = 'myEvent';
            scope = {
                foo: 'bar'
            };
        });
        
        describe("1.x - if the autoEvent config is a string", function() {
            it("should accept an alternative scope via scope", function() {
                button = new Ext.Button({
                    scope    : scope,
                    autoEvent: eventName
                });

                expect(button.scope).toEqual(scope);
            });
        });
        
        describe("1.x - if the autoEvent config is an object", function() {
            it("should use the configured scope", function() {
                button = new Ext.Button({
                    autoEvent: {
                        name: eventName,
                        scope: scope
                    }
                });
                
                button.on(eventName, function() {
                    theScope = this;
                });
                
                expect(button.scope).toEqual(scope);
            });
        });
        
        it("should add the event", function() {
            spyOn(Ext.Button.prototype, 'addEvents');
            
            button = new Ext.Button({
                autoEvent: eventName
            });
            
            expect(Ext.Button.prototype.addEvents).toHaveBeenCalledWith(eventName);
        });
        
        it("should set the handler", function() {
            spyOn(Ext.Button.prototype, 'setHandler').andCallThrough();
            
            new Ext.Button({
                autoEvent: eventName
            });
            
            expect(Ext.Button.prototype.setHandler).toHaveBeenCalled();
        });
        
        it("should create a handler that fires the event", function() {
            var executed = false;
            
            button = new Ext.Button({
                autoEvent: eventName
            });
            
            button.on(eventName, function() {
                executed = true;
            }, this);

            
            button.handler();
        });
    });
    
    it("should set the handler", function() {
        expect(button.handler).toBeFalsy();
        
        var foo = function() {};
        button.setHandler(foo);
        
        expect(button.handler).toEqual(foo);
    });
    
    describe("1.x - setText", function() {
        it("should set the text", function() {
            expect(button.text).toEqual('button');
    
            button.setText('new');
    
            expect(button.text).toEqual('new');
        });
        
        it("should remove the text", function() {
            button.setText();
            
            expect(button.textEl).toBeNull();
        });
    });
    
    describe("1.x - setIcon", function() {
        describe("1.x - when there is no icon", function() {
            it("should set the icon", function() {
                expect(button.icon).toBeFalsy();
    
                button.setIcon('new');
    
                expect(button.icon).toEqual('new');
            });
            
            it("should set the icon alignment class", function() {
                var spy = spyOn(button, "setIconAlign").andCallThrough();
                
                expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                
                button.setIcon('new');
                
                expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                expect(spy).wasCalledWith('left');
            });
        });
        
        describe("1.x - when there is an icon", function() {
            beforeEach(function() {
                button.setIcon('new');
            });
            
            describe("1.x - setting the icon", function() {
                it("should set the icon", function() {
                    expect(button.icon).toEqual('new');
    
                    button.setIcon('new2');
                    
                    expect(button.icon).toEqual('new2');
                });
                
                it("should set the icon align", function() {
                    var spy = spyOn(button, "setIconAlign").andCallThrough();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(button.icon).toEqual('new');
    
                    button.setIcon('new2');
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(spy).wasCalledWith('left');
                });
            });
            
            describe("1.x - removing the icon", function() {
                it("should remove the icon", function() {
                    expect(button.icon).toEqual('new');

                    button.setIcon();
    
                    expect(button.icon).toBeNull();
                    expect(button.iconEl).toBeNull();
                });
                
                it("should remove the icon align", function() {
                    var spy = spyOn(button, "setIconAlign").andCallThrough();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(button.icon).toEqual('new');
    
                    button.setIcon();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                    expect(spy).wasCalledWith(false);
                });
            });
        });
    });
    
    describe("1.x - setIconClass", function() {
        describe("1.x - when there is no iconEl", function() {
            it("should set the iconCls", function() {
                expect(button.iconEl).not.toBeDefined();
                expect(button.iconCls).toBeNull();
    
                button.setIconClass('new');
    
                expect(button.iconEl).toBeDefined();
            });
            
            it("should set the icon alignment class", function() {
                var spy = spyOn(button, "setIconAlign").andCallThrough();
                
                expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                
                button.setIconClass('new');
                
                expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                expect(spy).wasCalledWith('left');
            });
        });
        
        describe("1.x - when there is an iconEl", function() {
            beforeEach(function() {
                button.setIconClass('new');
            });
            
            describe("1.x - setting the icon", function() {
                it("should set the icon", function() {
                    expect(button.iconCls).toEqual('new');
    
                    button.setIconClass('new2');
                    
                    expect(button.iconCls).toEqual('new2');
                });
                
                it("should set the icon align", function() {
                    var spy = spyOn(button, "setIconAlign").andCallThrough();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(button.iconCls).toEqual('new');
    
                    button.setIcon('new2');
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(spy).wasCalledWith('left');
                });
            });
            
            describe("1.x - removing the icon", function() {
                it("should remove the icon", function() {
                    expect(button.iconCls).toEqual('new');
    
                    button.setIconClass();
    
                    expect(button.iconCls).toBeNull();
                    expect(button.iconEl).toBeNull();
                });
                
                it("should remove the icon align", function() {
                    var spy = spyOn(button, "setIconAlign").andCallThrough();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                    expect(button.iconCls).toEqual('new');
    
                    button.setIconClass();
    
                    expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                    expect(spy).wasCalledWith(false);
                });
            });
        });
    });
    
    describe("1.x - setIconAlign", function() {
        describe("1.x - when using an invalid alignment", function() {
            it("should use current iconCls", function() {
                expect(button.iconAlign).toEqual('left');
                
                button.setIconAlign('overthere');
                
                expect(button.iconAlign).toEqual('left');
            });
        });
        
        describe("1.x - when using a valid alignment", function() {
            it("should accept 'top'", function() {
                expect(button.iconAlign).toEqual('left');

                button.setIconAlign('top');

                expect(button.iconAlign).toEqual('top');
            });
            
            it("should accept 'bottom'", function() {
                expect(button.iconAlign).toEqual('left');

                button.setIconAlign('bottom');

                expect(button.iconAlign).toEqual('bottom');
            });
            
            it("should accept 'left'", function() {
                expect(button.iconAlign).toEqual('left');
                
                button.setIconAlign('right');
                
                expect(button.iconAlign).toEqual('right');
                
                button.setIconAlign('left');
                
                expect(button.iconAlign).toEqual('left');
            });
            
            it("should accept 'right'", function() {
                expect(button.iconAlign).toEqual('left');

                button.setIconAlign('right');

                expect(button.iconAlign).toEqual('right');
            });
        });
        
        describe("1.x - when no icon/iconEl", function() {
            it("should set iconAlign", function() {
                expect(button.iconAlign).toEqual('left');
                
                button.setIconAlign('right');
                
                expect(button.iconAlign).toEqual('right');
            });
            
            it("should not add a class to the button", function() {
                expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                
                button.setIconAlign('right');
                
                expect(button.el.hasCls('x-iconalign-right')).toBeFalsy();
            });
            
            describe("1.x - when using false", function() {
                it("should use last iconAlign", function() {
                    expect(button.iconAlign).toEqual('left');
                    
                    button.setIconAlign(false);
                    
                    expect(button.iconAlign).toEqual('left');
                    
                    button.setIconAlign('right');
                    
                    expect(button.iconAlign).toEqual('right');
                    
                    button.setIconAlign(false);
                    
                    expect(button.iconAlign).toEqual('right');
                });
            });
            
            describe("1.x - when adding icon", function() {
                it("should use default iconAlign", function() {
                    expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                    
                    button.setIcon('new');
                    
                    expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                });
                
                it("should use updated iconAlign", function() {
                    expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                    
                    button.setIconAlign('right');
                    
                    expect(button.el.hasCls('x-iconalign-right')).toBeFalsy();
                    
                    button.setIcon('new');
                    
                    expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
                    expect(button.el.hasCls('x-iconalign-right')).toBeTruthy();
                });
            });
        });
        
        describe("1.x - when icon/iconEl", function() {
            beforeEach(function() {
                button.setIcon('new');
            });
            
            it("should set iconAlign", function() {
                expect(button.iconAlign).toEqual('left');
                
                button.setIconAlign('right');
                
                expect(button.iconAlign).toEqual('right');
            });
            
            it("should add a class to the button", function() {
                expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                
                button.setIconAlign('right');
                
                expect(button.el.hasCls('x-iconalign-right')).toBeTruthy();
            });
            
            it("should remove the class", function() {
                expect(button.el.hasCls('x-iconalign-left')).toBeTruthy();
                
                button.setIcon(false);
                
                expect(button.el.hasCls('x-iconalign-left')).toBeFalsy();
            });
        });
    });
    
    describe("1.x - setBadge", function() {
        describe("1.x - when there is no badgeEl", function() {
            it("should set the iconCls", function() {
                expect(button.badgeEl).toBeFalsy();
                expect(button.badgeText).toEqual('');
    
                button.setBadge('new');
    
                expect(button.badgeEl).toBeDefined();
            });
        });
        
        describe("1.x - when there is an badgeEl", function() {
            beforeEach(function() {
                button.setBadge('new');
            });
            
            it("should set the icon", function() {
                expect(button.badgeText).toEqual('new');
                
                button.setBadge('new2');
                
                expect(button.badgeText).toEqual('new2');
            });
            
            it("should remove the icon", function() {
                button.setBadge();
                
                expect(button.badgeEl).toBeNull();
            });
        });
    });
    
    
    
    it("should set the badgeText", function() {
        expect(button.badgeText).toBeFalsy();
        
        button.setBadge('badge');
        
        expect(button.badgeText).toEqual('badge');
    });
    
    it("should return the text", function() {
        expect(button.getText()).toEqual(button.text);
    });
    
    it("should return the badgeText", function() {
        button.setBadge('1');
        
        expect(button.getBadgeText()).toEqual('1');
    });
    
    it("should disable", function() {
        expect(button.disabled).toBeFalsy();
        
        button.disable();
        
        expect(button.disabled).toBeTruthy();
    });
    
    it("should enable", function() {
        expect(button.disabled).toBeFalsy();
        
        button.disable();
        
        expect(button.disabled).toBeTruthy();
        
        button.enable();
        
        expect(button.disabled).toBeFalsy();
    });
    
    describe("1.x - when pressed", function() {
        it("should fire a tap event", function() {
            runs(function() {
                this.fired = false;
                var me = this;
                
                button.on({
                    tap: function() {
                        me.fired = true;
                    }
                });
                
                button.onPress();
            });

            waitsFor(function() {
                return this.fired === true;                
            }, "tap event wasn't fired");
        });
        
        it("should not fire a tap event when disabled", function() {
            button.disable();
            
            var fired = false;
            
            button.on({
                tap: function() {
                    fired = true;
                }
            });
            
            button.onPress();
            
            expect(fired).toBeFalsy();
        });
        
        it("should call the handler", function() {
            runs(function() {
                this.called = false;
                var me = this;
                
                button.setHandler(function() {
                    me.called = true;
                });
                
                button.onPress();
            });
            
            waitsFor(function() {
                return this.called === true;
            }, "handler wasn't called");
        });
    });
});

});