Ext.require('Ext.window.Window');

Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        width: 200,
        height: 200,
        modal: true,
        title: 'Modal',
        autoShow: true
    })
});
