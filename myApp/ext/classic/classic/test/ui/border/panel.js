Ext.onReady(function(){
    
    var c = Ext.create('Ext.panel.Panel', {
        renderTo: document.body,
        width: 100,
        height: 100,
        title: 'A title',
        bbar: [{
            text: 'Foo'
        }]
    });
    
    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 200,
        margin: '10 0 0 0'
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Set border',
        handler: function(){
            c.setBorder(field.getValue());
        }
    });
    
});
