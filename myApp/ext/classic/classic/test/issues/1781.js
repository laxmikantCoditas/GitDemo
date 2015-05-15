Ext.require(['Ext.form.*', 'Ext.container.Viewport']);


Ext.onReady(function() {
    
    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: {
            title: 'Foo',
            dockedItems: {
                xtype: 'toolbar',
                items: ['->', {
                    id: 'foo',
                    xtype: 'combo',
                    store: [[1, 'A'], [2, 'B'], [3, 'C']]
                }]
            }
        }    
    });
    
});