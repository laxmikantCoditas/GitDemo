Ext.require('Ext.form.Url', function() {

describe("1.x - Ext.form.Url", function() {
    var field;
    
    beforeEach(function() {
        field = new Ext.form.Url({
            label: 'test'
        });
    });
    
    afterEach(function() {
        field.destroy();
    });
    
    it("should have a inputType", function() {
        expect(field.inputType).toEqual('url');
    });
    
    it("should not autoCapitalize", function() {
        expect(field.autoCapitalize).toBeFalsy();
    });
});

});