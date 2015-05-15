Ext.require(['Ext.casso.Casso'], function() {
    describe('Casso', function() {
        it('should return the correct values for approximate', function() {
            expect(Ext.casso.Casso.approximate(0, 0.000000009)).toBe(true);
            expect(Ext.casso.Casso.approximate(0, 0.00000001)).toBe(false);
            expect(Ext.casso.Casso.approximate(0, 0.1)).toBe(false);
            expect(Ext.casso.Casso.approximate(0.000000009, 0)).toBe(true);
            expect(Ext.casso.Casso.approximate(0.00000001, 0)).toBe(false);
            expect(Ext.casso.Casso.approximate(0.1, 0)).toBe(false);
            expect(Ext.casso.Casso.approximate(1.000000009, 1)).toBe(true);
            expect(Ext.casso.Casso.approximate(1.00000001, 1)).toBe(true);
            expect(Ext.casso.Casso.approximate(1.1, 1)).toBe(false);
        });
    });
});