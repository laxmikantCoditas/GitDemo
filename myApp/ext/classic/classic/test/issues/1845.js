Ext.onReady(function(){

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            collapsible: true,
            region: 'west',
            width: 200,
            split: true,
            hideCollapseTool: true,
            html: 'West'
        }, {
            region: 'center',
            layout: 'fit',
            dockedItems: [{
                xtype: 'toolbar',
                items: {
                    text: 'Collapse',
                    handler: function(){
                        Ext.getCmp('foo').collapse();
                    }
                }
            }],
            items: {
                id: 'foo',
                style: 'border: 5px solid red;',
                collapsible: true,
                hideCollapseTool: true
            }
        }, {
            collapsible: true,
            region: 'south',
            height: 200,
            split: true,
            hideCollapseTool: true,
            html: 'South'
        }]
    });
    
});
