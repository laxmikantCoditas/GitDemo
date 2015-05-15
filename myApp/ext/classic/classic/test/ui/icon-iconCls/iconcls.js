Ext.onReady(function() {

    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 400,
        labelWidth: 200,
        fieldLabel: 'iconCls - "app", "ball" or empty'    
    });
    
    var i = 0,
        panel;
        
    Ext.create('Ext.button.Button', {
        text: 'Create panel',
        renderTo: document.body,
        handler: function(){
            Ext.destroy(panel);
            panel = Ext.create('Ext.panel.Panel', {
                width: 200,
                height: 100,
                title: 'Panel ' + (++i),
                renderTo: document.body,
                iconCls: field.getValue()
            });
            panel.on('iconclschange', function(p, newCls, oldCls){
                console.log(panel.title, newCls, oldCls);    
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'setIconCls',
        renderTo: document.body,
        handler: function(){
            if (panel) {
                panel.setIconCls(field.getValue());
            }
        }
    });
    
});