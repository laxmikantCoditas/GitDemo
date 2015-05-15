Ext.onReady(function() {
    var panel;
    
    panel = Ext.create('Ext.panel.Panel', {
        width: 200,
        height: 500,
        x: 100,
        y: 100,
        renderTo: Ext.getBody(),
        
        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            
            items: [{
                xtype: 'displayfield',
                value: 'This is a really long display field that will not wrap around onto a second line and thus create a rendering problem.'
            }]
        }]
    });
});