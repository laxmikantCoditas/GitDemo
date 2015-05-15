Ext.onReady(function(){
    
    var c = Ext.create('Ext.Component', {
        renderTo: document.body,
        width: 100,
        height: 100,
        border: 1,
        floating: true,
        shadow: false,
        x: 20,
        y: 100,
        html: 'foo',
        style: {
            'border-style': 'solid'
        }
    });
    
    var field = Ext.create('Ext.form.field.Text', {
        renderTo: document.body,
        width: 200
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Set border',
        handler: function(){
            c.setBorder(field.getValue());
        }
    });
    
});
