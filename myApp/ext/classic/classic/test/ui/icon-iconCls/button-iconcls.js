Ext.onReady(function() {

    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 400,
        labelWidth: 220,
        fieldLabel: 'iconCls - "app", "ball" or empty'    
    });
    
    var i = 0,
        button;
        
    Ext.create('Ext.button.Button', {
        text: 'Create button',
        renderTo: document.body,
        handler: function(){
            Ext.destroy(button);
            button = Ext.create('Ext.button.Button', {
                renderTo: document.body,
                iconCls: field.getValue(),
                text: 'Button ' + (++i)
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'setIcon',
        renderTo: document.body,
        handler: function(){
            if (button) {
                button.setIconCls(field.getValue());
            }
        }
    });
    
    Ext.getBody().createChild({
        tag: 'br'
    });
    
});