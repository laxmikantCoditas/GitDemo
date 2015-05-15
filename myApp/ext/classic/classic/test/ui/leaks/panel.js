Ext.require(['Ext.button.Button', 'Ext.panel.Panel']);

Ext.onReady(function() { 
    
    var o;
    var checker = Ext.create('Ext.form.field.Checkbox', {
        renderTo: document.body,
        fieldLabel: 'Frame',
        labelWidth: 40 
    });
    var create = Ext.create('Ext.button.Button', {
        text: 'Add',
        renderTo: document.body,
        handler: function(){
            o = Ext.create('Ext.panel.Panel', {
                renderTo: document.body,
                title: 'Title',
                width: 200,
                height: 200,
                html: 'Foo',
                id: 'foo',
                frame: checker.getValue()
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