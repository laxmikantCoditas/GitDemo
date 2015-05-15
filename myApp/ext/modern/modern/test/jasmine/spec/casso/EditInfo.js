Ext.require(['Ext.casso.EditInfo'], function() {
    describe('EditInfo', function() {
        it('should set up correct default properties', function() {
            var editInfo = new Ext.casso.EditInfo('test', 10, 20, 30, 40);
            expect(editInfo.getConstraint()).toBe('test');
            expect(editInfo.getEditPlus()).toBe(10);
            expect(editInfo.getEditMinus()).toBe(20);
            expect(editInfo.getPreviousEditConstant()).toBe(30);
            expect(editInfo.getIndex()).toBe(40);
        });
        
        it('should set allow changing the previous edit constant', function() {
            var editInfo = new Ext.casso.EditInfo('test', 10, 20, 30, 40);
            editInfo.setPreviousEditConstant(20);
            expect(editInfo.getPreviousEditConstant()).toBe(20);
        });
    });
});