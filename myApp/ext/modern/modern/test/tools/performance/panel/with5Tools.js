Ext.require('Ext.panel.Panel');

Ext.onReady(function() {
    var startTime = new Date();
    
    Ext.create('Ext.panel.Panel', {
        tools: [
            {type: 'help'},
            {type: 'close'},
            {type: 'refresh'},
            {type: 'help'},
            {type: 'collapse'}
        ],
        
        height: 200,
        width: 200,
        renderTo: Ext.getBody()
    });
    
    console.log(new Date() - startTime);
});