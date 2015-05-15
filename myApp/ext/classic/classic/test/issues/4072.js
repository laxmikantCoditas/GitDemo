Ext.onReady(function(){
    Ext.create('Ext.form.field.Text', {
        renderTo: Ext.getBody(),
        name: 'name',
        width: '150',
        emptyText: 'empty text placeholder',
        selectOnFocus: true
    });
    
    Ext.create('Ext.Button', {
        text: 'Just a button',
        renderTo: Ext.getBody(),
        menu: [{
            text: 'Item 1'
        }, {
            text: 'Item 2'
        }]
    });
});
