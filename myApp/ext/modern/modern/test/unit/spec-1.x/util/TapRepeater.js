describe("1.x - Ext.util.TapRepeater", function() {
    var btn, tr, called = false, e;
    
    beforeEach(function() {
        btn = new Ext.Button({
            text    : 'Button',
            renderTo: Ext.getBody()
        });
        
        tr = new Ext.util.TapRepeater(btn.el, {
            preventDefault: true
        });
    });
    
    afterEach(function() {
        tr.destroy();
        btn.destroy();
    });
    
    describe("1.x - on eventOptions", function() {
        beforeEach(function() {
            tr.preventDefault = false;
            tr.stopDefault = false;
        });
        
        afterEach(function() {
            e = {};
            called = false;
        });
        
        describe("1.x - when preventDefault", function() {
            beforeEach(function() {
                tr.preventDefault = true;
                
                e = {
                    preventDefault: function() { called = true; }
                };
            });
            
            it("should call preventDefault", function() {
                expect(called).toBeFalsy();
                
                tr.eventOptions(e);
                
                expect(called).toBeTruthy();
            });
        });
        
        describe("1.x - when stopDefault", function() {
            beforeEach(function() {
                tr.stopDefault = true;
                
                e = {
                    stopEvent: function() { called = true; }
                };
            });
            
            it("should call stopEvent", function() {
                expect(called).toBeFalsy();
                
                tr.eventOptions(e);
                
                expect(called).toBeTruthy();
            });
        });
    });
    
    describe("1.x - on onTouchStart", function() {
        beforeEach(function() {
            tr.pressClass = 'x-test';
        });
        
        describe("1.x - when pressClass", function() {
            it("should add pressClass", function() {
                expect(btn.el.hasCls(tr.pressClass)).toBeFalsy();
                
                tr.onTouchStart();
                
                expect(btn.el.hasCls(tr.pressClass)).toBeTruthy();
            });
        });
        
        it("should set a tapStartTime", function() {
            expect(tr.tapStartTime).not.toBeDefined();
            
            tr.onTouchStart();
            
            expect(tr.tapStartTime).toBeDefined();
        });
        
        describe("1.x - it should fire events", function() {
            it("touchstart", function() {
                var fired = false;
                
                tr.on({
                    touchstart: function() { fired = true; }
                });
                
                tr.onTouchStart();
                
                expect(fired).toBeTruthy();
            });
            
            it("tap", function() {
                var fired = false;
                
                tr.on({
                    tap: function() { fired = true; }
                });
                
                tr.onTouchStart();
                
                expect(fired).toBeTruthy();
            });
        });
        
        describe("1.x - when accelerate", function() {
            beforeEach(function() {
                tr.accelerate = true;
            });
            
            it("should add a delay", function() {
                expect(tr.delay).toEqual(250);
                
                tr.onTouchStart();
                
                expect(tr.delay).toEqual(400);
            });
        });
    });
    
    describe("1.x - on onTouchEnd", function() {
        describe("1.x - it should fire events", function() {
            it("touchend", function() {
                var fired = false;
                
                tr.on({
                    touchend: function() { fired = true; }
                });
                
                tr.onTouchEnd();
                
                expect(fired).toBeTruthy();
            });
        });
    });
});
