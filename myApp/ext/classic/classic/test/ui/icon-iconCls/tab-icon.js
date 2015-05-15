Ext.onReady(function() {

    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 400,
        labelWidth: 220,
        fieldLabel: 'icon - "app.png", "ball.png" or empty'    
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
                    icon: field.getValue()
                }
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'setIcon',
        renderTo: document.body,
        handler: function(){
            if (tabs) {
                tabs.items.first().setIcon(field.getValue());
            }
        }
    });
    
});