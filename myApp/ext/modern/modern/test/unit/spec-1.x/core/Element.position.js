Ext.require('Ext.dom.Element', function() {

describe("1.x - Ext.Element - position", function() {
    var proto = Ext.Element.prototype,
        el, testEl,
        input, testInputEl,
        child1, child2, child3;
    
    beforeEach(function() {
        testEl = Ext.getBody().createChild({
            id      : 'ExtElementHelper',
            style   : 'position:absolute;',
            children: [
                {id: 'child1', style: 'position:absolute;'},
                {id: 'child2', style: 'position:absolute;'},
                {id: 'child3', style: 'position:absolute;'}
            ]
        });
        
        testInputEl = Ext.getBody().createChild({
            id  : 'ExtElementInputHelper',
            tag : 'input',
            type: 'text'
        });
        
        el    = new Ext.Element(Ext.getDom(testEl));
        input = new Ext.Element(Ext.getDom(testInputEl));
        
        child1 = Ext.get('child1');
        child2 = Ext.get('child2');
        child3 = Ext.get('child3');
    });
    
    describe("1.x - getY", function() {
        it("should return the Y value of the element", function() {
            expect(el.getY()).toBeDefined();
        });
        
        it("should call getXY", function() {
            var spy = spyOn(el, "getXY").andCallThrough();
            
            el.getY();
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - getX", function() {
        it("should return the X value of the element", function() {
            expect(el.getX()).toBeDefined();
        });
        
        it("should call getXY", function() {
            var spy = spyOn(el, "getXY").andCallThrough();
            
            el.getX();
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - getXY", function() {
        it("should return the X+Y value of the element", function() {
            expect(el.getXY()).toBeDefined();
        });
    });
    
    describe("1.x - getOffsetsTo", function() {
        it("should return offsets", function() {
            expect(child1.getOffsetsTo(child2)).toBeDefined();
        });
    });
    
    describe("1.x - setXY", function() {
        describe("1.x - array", function() {
            it("should set the X+Y", function() {
                el.setXY([10, 10]);
                
                expect(el.getXY()).toEqual([10, 10]);
            });
        });
        
        describe("1.x - arguments", function() {
            it("should set the X+Y", function() {
                el.setXY(20, 20);
                
                expect(el.getXY()).toEqual([20, 20]);
            });
        });
    });
    
    describe("1.x - setX", function() {
        it("should call setXY", function() {
            var spy = spyOn(el, "setXY").andCallThrough();
            
            el.setX(10);
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - setY", function() {
        it("should call setXY", function() {
            var spy = spyOn(el, "setXY").andCallThrough();
            
            el.setY(10);
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - setLeft", function() {
        it("should set left", function() {
            expect(el.getLeft()).toEqual(0);
            
            el.setLeft(10);
            
            expect(el.getLeft()).toEqual(10);
        });
    });
    
    describe("1.x - setTop", function() {
        it("should set top", function() {
            expect(el.getTop()).toEqual(0);
            
            el.setTop(10);
            
            expect(el.getTop()).toEqual(10);
        });
    });
    
    describe("1.x - setTopLeft", function() {
        it("should set left", function() {
            expect(el.getLeft()).toEqual(0);
            
            el.setTopLeft(10, 10);
            
            expect(el.getLeft()).toEqual(10);
        });
        
        it("should set top", function() {
            expect(el.getTop()).toEqual(0);
            
            el.setTopLeft(10, 10);
            
            expect(el.getTop()).toEqual(10);
        });
    });
    
    describe("1.x - setRight", function() {
        it("should set right", function() {
            expect(el.getRight()).toEqual(0);
            
            el.setRight(10);
            
            expect(el.getRight()).toEqual(10);
        });
    });
    
    describe("1.x - setBottom", function() {
        it("should set bottom", function() {
            expect(el.getBottom()).toEqual(0);
            
            el.setBottom(10);
            
            expect(el.getBottom()).toEqual(10);
        });
    });
    
    describe("1.x - getLeft", function() {
        it("should get left", function() {
            expect(el.getLeft()).toEqual(0);
            
            el.setLeft(10);
            
            expect(el.getLeft()).toEqual(10);
        });
    });
    
    describe("1.x - getTop", function() {
        it("should get top", function() {
            expect(el.getTop()).toEqual(0);
            
            el.setTop(10);
            
            expect(el.getTop()).toEqual(10);
        });
    });
    
    describe("1.x - getRight", function() {
        it("should get right", function() {
            expect(el.getRight()).toEqual(0);
            
            el.setRight(10);
            
            expect(el.getRight()).toEqual(10);
        });
    });
    
    describe("1.x - getBottom", function() {
        it("should get bottom", function() {
            expect(el.getBottom()).toEqual(0);
            
            el.setBottom(10);
            
            expect(el.getBottom()).toEqual(10);
        });
    });
    
    describe("1.x - setBox", function() {
        describe("1.x - when object", function() {
            beforeEach(function() {
                el.setBox({
                    left  : 10,
                    top   : 20,
                    width : 500,
                    height: 400
                });
            });
            
            it("should set left", function() {
                expect(el.getLeft()).toEqual(10);
            });
            
            it("should set top", function() {
                expect(el.getTop()).toEqual(20);
            });
            
            it("should set width", function() {
                expect(el.getWidth()).toEqual(500);
            });
            
            it("should set height", function() {
                expect(el.getHeight()).toEqual(400);
            });
        });
        
        describe("1.x - when arguments", function() {
            beforeEach(function() {
                el.setBox(10, 20, 500, 400);
            });
            
            it("should set left", function() {
                expect(el.getLeft()).toEqual(10);
            });
            
            it("should set top", function() {
                expect(el.getTop()).toEqual(20);
            });
            
            it("should set width", function() {
                expect(el.getWidth()).toEqual(500);
            });
            
            it("should set height", function() {
                expect(el.getHeight()).toEqual(400);
            });
        });
    });
    
    describe("1.x - getBox", function() {
        beforeEach(function() {
            el.setBox(10, 20, 500, 400);
        });
        
        it("should return values", function() {
            var box = el.getBox();
            
            expect(box).toBeDefined();
            expect(box.left).toEqual(10);
            expect(box.top).toEqual(20);
            expect(box.width).toEqual(500);
            expect(box.height).toEqual(400);
        });
    });
});

});