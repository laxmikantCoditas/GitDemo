xdescribe("1.x - Ext.layout.FieldLayout", function() {
    var layout;
    
    beforeEach(function() {
        layout = new Ext.layout.FieldLayout({
            renderTo: Ext.getBody()
        });
    });
    
    afterEach(function() {
        layout.destroy();
    });
    
    it("should have a type", function() {
        expect(layout.type).toEqual('field');
    });
    
    describe("1.x - onLayout", function() {
        it("it should call setTargetSize", function() {
            var spy = spyOn(layout, "setTargetSize");
            
            layout.onLayout(100, 100);
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - handleLabel", function() {
        it("should call owner.labelEl.setWidth", function() {
            var called = false;
            
            
        });
    });
});