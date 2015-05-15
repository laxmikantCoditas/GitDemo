Ext.require('*');
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Test',
        autoScroll: true,
        height: 500,
        items: {},
        layout: 'fit',
        renderTo: Ext.getBody(),
        width: 500
    });
});