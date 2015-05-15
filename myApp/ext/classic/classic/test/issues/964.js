Ext.require(['Ext.panel.Panel']);
Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 400,
        collapsed: true,
        collapsible: true,
        resizable: {
            handles: 's'
        }
    });
});
