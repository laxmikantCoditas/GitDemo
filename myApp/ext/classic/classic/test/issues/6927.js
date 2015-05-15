Ext.onReady(function(){
    
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'center'
        }, {
            region: 'south',
            height: 200,
            collapsible: true,
            collapsed: true,
            listeners: {
                collapse: function(){
                    console.log('Foo');
                }
            }
        }]
    })
    
});
