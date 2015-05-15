Ext.onReady(function(){
    Ext.create('Ext.container.Container', {
        width: 400,
        height: 200,
        renderTo: document.body,
        layout: 'fit',
        items: [{
            xtype: 'menu',
            floating: false,
            items: [{
                text: 'Item 1'
            }, {
                text: 'Item 2'
            }]
        }]
    })
});
