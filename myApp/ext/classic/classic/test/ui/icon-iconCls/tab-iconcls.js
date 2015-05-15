Ext.onReady(function() {

    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 400,
        labelWidth: 200,
        fieldLabel: 'iconCls - "app", "ball" or empty'    
    });
    
    var i = 0,
        tabs;
        
    Ext.create('Ext.button.Button', {
        text: 'Create tabs',
        renderTo: document.body,
        handler: function(){
            Ext.destroy(tabs);
            tabs = Ext.create('Ext.tab.Panel', {
                width: 200,
                height: 100,
                renderTo: document.body,
                items: {
                    title: 'Tab ' + (++i),
                    iconCls: field.getValue()
                }
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'setIconCls',
        renderTo: document.body,
        handler: function(){
            if (tabs) {
                tabs.items.first().setIconCls(field.getValue());
            }
        }
    });
    
});