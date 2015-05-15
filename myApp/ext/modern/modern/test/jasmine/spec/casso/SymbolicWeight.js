Ext.require(['Ext.casso.SymbolicWeight'], function() {
    describe('SymbolicWeight', function() {
        it('should properly set the values', function() {
            var weight = new Ext.casso.SymbolicWeight(1, 2, 3);
            expect(weight.values[0]).toBe(1);
            expect(weight.values[1]).toBe(2);
            expect(weight.values[2]).toBe(3);
        });
        
        it('should properly multiply', function() {
            var weight = new Ext.casso.SymbolicWeight(1, 2, 3).multiply(2);
            expect(weight.values[0]).toBe(2);
            expect(weight.values[1]).toBe(4);
            expect(weight.values[2]).toBe(6);
        });
        
        it('should properly divide', function() {
            var weight = new Ext.casso.SymbolicWeight(2, 4, 6).divide(2);
            expect(weight.values[0]).toBe(1);
            expect(weight.values[1]).toBe(2);
            expect(weight.values[2]).toBe(3);
        });
        
        it('should properly add', function() {
            var weight = new Ext.casso.SymbolicWeight(1, 2, 3).add(new Ext.casso.SymbolicWeight(1, 2, 3));
            expect(weight.values[0]).toBe(2);
            expect(weight.values[1]).toBe(4);
            expect(weight.values[2]).toBe(6);
        });
        
        it('should properly subtract', function() {
            var weight = new Ext.casso.SymbolicWeight(2, 4, 6).subtract(new Ext.casso.SymbolicWeight(1, 2, 3));
            expect(weight.values[0]).toBe(1);
            expect(weight.values[1]).toBe(2);
            expect(weight.values[2]).toBe(3);
        });
        
        it('should properly evaluate lessThan', function() {
            expect(new Ext.casso.SymbolicWeight(2, 4, 6).lessThan(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThan(new Ext.casso.SymbolicWeight(2, 4, 6))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThan(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThan(new Ext.casso.SymbolicWeight(1, 2, 4))).toBe(true);
        });
        
        it('should properly evaluate lessThanOrEqual', function() {
            expect(new Ext.casso.SymbolicWeight(2, 4, 6).lessThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThanOrEqual(new Ext.casso.SymbolicWeight(2, 4, 6))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).lessThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 4))).toBe(true);
        });
        
        it('should properly evaluate equal', function() {
            expect(new Ext.casso.SymbolicWeight(2, 4, 6).equal(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).equal(new Ext.casso.SymbolicWeight(2, 4, 6))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).equal(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).equal(new Ext.casso.SymbolicWeight(1, 2, 4))).toBe(false);
        });
        
        it('should properly evaluate greaterThan', function() {
            expect(new Ext.casso.SymbolicWeight(2, 4, 6).greaterThan(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).greaterThan(new Ext.casso.SymbolicWeight(2, 4, 6))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).greaterThan(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 4).greaterThan(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
        });
        
        it('should properly evaluate greaterThanOrEqual', function() {
            expect(new Ext.casso.SymbolicWeight(2, 4, 6).greaterThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).greaterThanOrEqual(new Ext.casso.SymbolicWeight(2, 4, 6))).toBe(false);
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).greaterThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, 2, 4).greaterThanOrEqual(new Ext.casso.SymbolicWeight(1, 2, 3))).toBe(true);
        });
        
        it('should properly evaluate isNegative', function() {
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).isNegative()).toBe(false);
            expect(new Ext.casso.SymbolicWeight(-1, 2, 3).isNegative()).toBe(true);
            expect(new Ext.casso.SymbolicWeight(1, -2, 3).isNegative()).toBe(false);
            expect(new Ext.casso.SymbolicWeight(0, 0, 0).isNegative()).toBe(false);
        });
        
        it('should properly evaluate toDouble', function() {
            expect(new Ext.casso.SymbolicWeight(1, 2, 3).toDouble()).toBe(3002001);
        });
    });
});