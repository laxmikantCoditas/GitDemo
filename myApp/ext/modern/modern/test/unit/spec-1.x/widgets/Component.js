Ext.require('Ext.Component', function() {

describe("1.x - Ext.Component", function() {
    var proto = Ext.Component.prototype,
        component, componentOld, btn;
    
    beforeEach(function() {
        component = new Ext.Component({
            renderTo: Ext.getBody()
        });
    });
    
    afterEach(function() {
        component.destroy();
    });
    
    describe("1.x - when it is fullscreen", function() {
        beforeEach(function() {
            componentOld = component;
            component = new Ext.Component({
                fullscreen: true,
                
                renderTo: Ext.getBody()
            });
        });
        
        afterEach(function() {
            component.destroy();
            component = componentOld;
        });
        
        it("should monitorOrientation", function() {
            expect(componentOld.monitorOrientation).toBeFalsy();
            expect(component.monitorOrientation).toBeTruthy();
        });
        
        it("should set a width", function() {
            expect(component.width).toEqual(300);
        });
        
        it("should set a height", function() {
            expect(component.height).toEqual(600);
        });
        
        it("should have a fullscreen class", function() {
            expect(component.el.hasCls('x-fullscreen')).toBeTruthy();
        });
    });
    
    describe("1.x - when it is floating", function() {
        beforeEach(function() {
            componentOld = component;
            component = new Ext.Component({
                floating: true,
                
                renderTo: Ext.getBody()
            });
        });
        
        afterEach(function() {
            component.destroy();
            component = componentOld;
        });
        
        it("should monitorOrientation", function() {
            expect(componentOld.monitorOrientation).toBeFalsy();
            expect(component.monitorOrientation).toBeTruthy();
        });
    });
    
    describe("1.x - when it is draggable", function() {
        beforeEach(function() {
            component.destroy();
            component = new Ext.Component({
                draggable: true
            });
        });
        
        it("should setDraggable", function() {
            spyOn(component, "setDraggable");
            
            component.render(Ext.getBody());
            
            expect(component.setDraggable).wasCalled();
        });
    });

    describe("1.x - when it is horizontal", function() {
        beforeEach(function() {
            component.destroy();
            component = new Ext.Component({
                scroll  : 'horizontal'
            });
        });
        
        it("should afterComponentLayout", function() {
            spyOn(component, "afterComponentLayout").andCallThrough();
            
            component.render(Ext.getBody());
            
            expect(component.afterComponentLayout).wasCalled();
        });
    });
    
    describe("1.x - on update", function() {
        it("should run", function() {
            component.update();
        });
        
        describe("1.x - when there is a scroller", function() {
            beforeEach(function() {
                component.destroy();
                component = new Ext.Component({
                    scroll: 'horizontal'
                });
            });
            
            it("should run", function() {
                component.update();
            });
        });
    });
    
    describe("1.x - on show", function() {
        beforeEach(function() {
            component.hide();
        });
        
        it("should fire an event", function() {
            var fired = false;
            
            component.on({
                show: function() {
                    fired = true;
                }
            });
            
            component.show();
            
            expect(fired).toBeTruthy();
        });
        
        describe("1.x - when centered", function() {
            beforeEach(function() {
                component.floating = true;
                component.centered = true;
            });
            
            it("should call setCentered", function() {
                var spy = spyOn(component, "setCentered").andCallThrough();
                
                component.show();
                
                expect(spy).wasCalled();
            });
        });
        
        describe("1.x - when there is an anchorEl", function() {
            beforeEach(function() {
                component.anchorEl = new Ext.Button({
                    text    : 'text',
                    renderTo: Ext.getBody()
                });
            });
            
            afterEach(function() {
                component.anchorEl.destroy();
            });
            
            it("should hide the anchorEl", function() {
                var spy = spyOn(component.anchorEl, "hide");
                
                component.show();
                
                expect(spy).wasCalled();
            });
        });
    });
    
    describe("1.x - on showBy", function() {
        beforeEach(function() {
            btn = new Ext.Button({
                text    : 'text',
                renderTo: Ext.getBody()
            });
        });
        
        afterEach(function() {
            btn.destroy();
        });
        
        it("should return when it isnt floating", function() {
            component.render(Ext.getBody());
            
            component.showBy(btn);
        });
        
        describe("1.x - when floating", function() {
            beforeEach(function() {
                component.floating = true;
            });
            
            it("should continue", function() {
                component.render(Ext.getBody());

                component.showBy(btn.el);
            });
        });
    });
    
    describe("1.x - when hiding the component", function() {
        it("should fire an event", function() {
            var fired = false;
            
            component.on({
                hide: function() {
                    fired = true;
                }
            });
            
            component.hide();
            
            expect(fired).toBeTruthy();
        });
    });
    
    it("should allow you to setScrollable", function() {
        expect(component.scroller).not.toBeDefined();
        
        component.setScrollable('auto');
        
        expect(component.scroller).toBeDefined();
    });
    
    describe("1.x - when changing orientation", function() {
        it("should fire a beforeorientationchange", function() {
            var fired = false;
            
            component.on({
                beforeorientationchange: function() {
                    fired = true;
                }
            });
            
            component.setOrientation('portrait');
            
            expect(fired).toBeTruthy();
            
            fired = false;
            expect(fired).toBeFalsy();
            
            component.on({
                beforeorientationchange: function() {
                    fired = true;
                }
            });
            
            component.setOrientation('landscape');
            
            expect(fired).toBeTruthy();
        });
        
        it("should fire a orientationchange", function() {
            var fired = false;
            
            component.on({
                orientationchange: function() {
                    fired = true;
                }
            });
            
            component.setOrientation('portrait');
            
            expect(fired).toBeTruthy();
            
            fired = false;
            expect(fired).toBeFalsy();
            
            component.on({
                orientationchange: function() {
                    fired = true;
                }
            });
            
            component.setOrientation('landscape');
            
            expect(fired).toBeTruthy();
        });
        
        it("should add a class", function() {
            expect(component.el.hasCls('x-landscape')).toBeFalsy();
            expect(component.el.hasCls('x-portrait')).toBeFalsy();
            
            component.setOrientation('portrait');
            
            expect(component.el.hasCls('x-landscape')).toBeFalsy();
            expect(component.el.hasCls('x-portrait')).toBeTruthy();
            
            component.setOrientation('landscape');
            
            expect(component.el.hasCls('x-landscape')).toBeTruthy();
            expect(component.el.hasCls('x-portrait')).toBeFalsy();
        });
    });
});

});