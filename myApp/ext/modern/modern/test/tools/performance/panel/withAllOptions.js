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
        
        title: 'My Panel',
        iconCls: 'some-icon-cls',
        tbar: {
            items: [
                {text: 'Test'},
                {text: 'Test'},
                {text: 'Test'},
                {text: 'Test'},
                {text: 'Test'}
            ]
        },
        
        height: 400,
        width: 400,
        renderTo: Ext.getBody()
    });
    
    console.log(new Date() - startTime);
});