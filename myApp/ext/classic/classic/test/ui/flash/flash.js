Ext.require([
    'Ext.flash.Component',
    'Ext.window.Window'
]);

Ext.onReady(function() {

    Ext.widget('window', {
        title: 'Flash Component - resize me!',
        layout: 'fit',
        width: 300,
        height: 300,
        x: 20,
        y: 20,
        resizable: true,
        renderTo: Ext.getBody(),
        hidden: false,
        items: {
            xtype: 'flash',
            url: 'tiger.swf'
        }
    });

    Ext.widget('window', {
        title: 'With wmode=transparent - resize me!',
        layout: 'fit',
        width: 300,
        height: 300,
        x: 340,
        y: 20,
        resizable: true,
        renderTo: Ext.getBody(),
        hidden: false,
        items: {
            xtype: 'flash',
            url: 'tiger.swf',
            wmode: 'transparent'
        }
    });

});