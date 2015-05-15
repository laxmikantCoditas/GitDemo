Ext.require('Ext.form.TextArea', function() {

describe("1.x - Ext.form.TextArea", function() {
    var field;
    
    beforeEach(function() {
        field = new Ext.form.TextArea({
            label  : 'test'
        });
    });
    
    afterEach(function() {
        field.destroy();
    });
    
    it("should not have maxRows", function() {
        expect(field.maxRows).toBeNull();
    });
    
    it("should not autoCapitalize", function() {
        expect(field.autoCapitalize).toBeFalsy();
    });
    
    describe("1.x - on render", function() {
        beforeEach(function() {
            field = new Ext.form.TextArea({
                label  : 'test',
                maxRows: 10
            });
        });
        
        it("should add maxRows to renderData", function() {
            expect(field.renderData.maxRows).not.toBeDefined();
            
            field.render(Ext.getBody());
            
            expect(field.renderData.maxRows).toBeDefined();
        });
    });
});

});