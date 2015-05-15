Ext.require(['Ext.casso.Strength'], function() {
    describe('Strength', function() {
        it('should support set all the properties correct when constructing', function() {
            var strength = new Ext.casso.Strength('test', 1, 2, 3);
            expect(strength.getName()).toBe('test');
            expect(strength.getSymbolicWeight().values[0]).toBe(1);
            expect(strength.getSymbolicWeight().values[1]).toBe(2);
            expect(strength.getSymbolicWeight().values[2]).toBe(3);
        });
        
        it('should support set all the properties correct when passing a symbolicWeigh instance', function() {
            var weight = new Ext.casso.SymbolicWeight(1, 2, 3);
            var strength = new Ext.casso.Strength('test', weight);
            expect(strength.getSymbolicWeight()).toBe(weight);
        });
        
        it('should return proper value for isRequired', function() {
            expect(Ext.casso.Strength.required.isRequired).toBe(true);
        });
    });
});