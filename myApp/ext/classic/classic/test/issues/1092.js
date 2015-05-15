Ext.require('*');
Ext.onReady(function() {
    new Ext.container.Viewport({
        layout: 'fit',
        items: [{
            xtype: 'grid',
            title: 'Click on the right-side of my one and only column...',
            store: {
                fields: ['a'],
                data: [{
                    a: 1
                }]
            },
            columns: [{
                flex: 1,
                dataIndex: 'a',
                header: 'A'
            }]
        }]
    });
});