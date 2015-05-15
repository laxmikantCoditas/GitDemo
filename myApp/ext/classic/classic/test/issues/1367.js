Ext.require('*');

Ext.onReady(function() {
    
    Ext.create('widget.toolbar', {
        renderTo: Ext.getBody(),
      
        margin: 50,
      
        width: 400,
        layout: { overflowHandler: 'Scroller' },
        
        defaults: {
            xtype: 'button',
            text: 'A long button'
        },
        
        items: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    })
    
});