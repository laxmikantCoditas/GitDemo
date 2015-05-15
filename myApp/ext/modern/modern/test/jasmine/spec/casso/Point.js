Ext.require(['Ext.casso.Point'], function() {
    describe('Point', function() {
        beforeEach(function() {
            Ext.casso.AbstractVariable.VariableCounter = 0;
        });
        
        it('should initialize correct properties after constructing', function() {
            var point = new Ext.casso.Point(10, 20, 'test');
            expect(point.getX().getValue()).toBe(10);
            expect(point.getY().getValue()).toBe(20);
            expect(point.getX().getName()).toBe('xtest1');
            expect(point.getY().getName()).toBe('ytest2');
        });
        
        it('should initialize correct without passing prefix', function() {
            var point = new Ext.casso.Point(10, 20);
            expect(point.getXValue()).toBe(10);
            expect(point.getYValue()).toBe(20);
            expect(point.getX().getName()).toBe('v1');
            expect(point.getY().getName()).toBe('v2');
        });
        
        it('should accept variable instances', function() {
            var x = new Ext.casso.Variable(10);
            var y = new Ext.casso.Variable(20);
            var point = new Ext.casso.Point(x, y);
            expect(point.getX()).toBe(x);
            expect(point.getY()).toBe(y);
        });
    });
});