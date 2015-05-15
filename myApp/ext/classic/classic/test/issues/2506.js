Ext.onReady(function(){

    var panel = Ext.create('Ext.panel.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        title: 'Really long title that will overflow over the tools',
        tools: [{
            type: 'help'
        }],
        dockedItems: [{
            dock: 'bottom',
            xtype: 'toolbar',
            items: {
                text: 'Change size',
                handler: function(){
                    panel.setSize(200, 200);
                }
            }
        }]
    });
});
