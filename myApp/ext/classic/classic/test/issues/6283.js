Ext.require('*');
Ext.onReady(function() {
    Ext.create("Ext.window.Window", {
        id: 'w',
        width: 500,
        height: 500,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: {
            id: 'o',
            xtype: "container",
            flex: 1,
            autoScroll: true,
            items: {
                id: 'i',
                title: 'inner tall Panel',
                height: 1000,
                html: 'A very tall Panel'
            }
        }
    }).show();
});