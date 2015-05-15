Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Hello',
        animCollapse: 2000,
        collapsible: true,
        width: 200,
        x: 100,
        y: 100,
        html: '<p>World!</p>',
        renderTo: Ext.getBody()
    });
});
