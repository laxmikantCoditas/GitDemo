Ext.require('Ext.form.Radio', function() {

describe("1.x - Ext.form.Radio", function() {
    var field, fields, panel;
    
    beforeEach(function() {
        field = new Ext.form.Radio({
            label: 'test',
            name : 'test',
            value: 'test1'
        });
    });
    
    afterEach(function() {
        field.destroy();
    });
    
    it("should have an inputType", function() {
        expect(field.inputType).toEqual('radio');
    });
    
    it("should have a ui", function() {
        expect(field.ui).toEqual('radio');
    });
    
    describe("1.x - when rendered", function() {
        beforeEach(function() {
            field.render(Ext.getBody());
        });
        
        describe("1.x - when a group", function() {
            beforeEach(function() {
                panel = new Ext.form.FormPanel({
                    defaults: {
                        xtype: 'radiofield'
                    },
                    items: [
                        {
                            label: 'One',
                            name : 'test',
                            value: 'a'
                        },
                        {
                            label: 'Two',
                            name : 'test',
                            value: 'b'
                        }
                    ],
                    renderTo: Ext.getBody()
                });
                
                fields = panel.items.items;
            });
            
            afterEach(function() {
                panel.destroy();
            });

            describe("1.x - on setGroupValue", function() {
                it("should check the corresponding field", function() {
                    fields[0].setGroupValue('b');

                    expect(fields[0].isChecked()).toBeFalsy();
                    expect(fields[1].isChecked()).toBeTruthy();
                });
            });
            
            describe("1.x - on getGroupValue", function() {
                it("should return the correct checked value", function() {
                    fields[0].check();
                    
                    expect(fields[1].getGroupValue()).toEqual('a');
                });
            });
        });
    });
});

});