Ext.onReady(function() {

    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 400,
        labelWidth: 220,
        fieldLabel: 'icon - "app.png", "ball.png" or empty'    
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
                icon: field.getValue()
            });
            panel.on('iconchange', function(p, newIcon, oldIcon){
                console.log(panel.title, newIcon, oldIcon);    
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'setIcon',
        renderTo: document.body,
        handler: function(){
            if (panel) {
                panel.setIcon(field.getValue());
            }
        }
    });
    
});