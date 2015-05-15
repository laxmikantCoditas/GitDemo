Ext.require(['Ext.button.*', 'Ext.form.field.Checkbox']);

Ext.onReady(function() { 
    
    var o;
    var checker = Ext.create('Ext.form.field.Checkbox', {
        renderTo: document.body,
        fieldLabel: 'Create split button',
        labelWidth: 130    
    });
    var create = Ext.create('Ext.button.Button', {
        text: 'Add',
        renderTo: document.body,
        handler: function(){
            o = Ext.create('Ext.button.' + (checker.getValue() ? 'Split' : 'Button'), {
                renderTo: document.body,
                text: 'A button'
            });
            create.disable();
            destroy.enable();
        }    
    });
    
    var destroy = Ext.create('Ext.button.Button', {
        text: 'Destroy',
        renderTo: document.body,
        disabled: true,
        handler: function(){
            o.destroy();
            create.enable();
            destroy.disable();
        }    
    });
    
});