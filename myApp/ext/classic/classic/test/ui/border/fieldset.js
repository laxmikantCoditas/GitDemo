Ext.onReady(function(){
    
    var c = Ext.create('Ext.form.FieldSet', {
        renderTo: document.body,
        width: 200,
        height: 200,
        html: 'Fs text',
        title: 'A title'
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
