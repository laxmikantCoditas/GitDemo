Ext.onReady(function() {
    var panel = new Ext.panel.Panel({
        renderTo: document.body,
        height: 300,
        width: 400,
        x: 20,
        y: 20,
        
        title: 'foo',
        
        items: [{
            xtype: 'button',
            text: 'bar'
        }]
    });
});
