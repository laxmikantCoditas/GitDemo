Ext.require('*');
Ext.onReady(function() {
    new Ext.Panel({
        height : 100,
        style: 'width: 200px',
        title: 'Test Panel',
        tbar : {
            xtype: 'toolbar',
            items: [{
                xtype: 'fieldcontainer',
                layout: {
                    type : 'hbox',
                    align : 'stretchmax'
                },
                items: [{
                    width: 150,
                    html: '<div style="height:20px;background-color:red"></div>'
                }]
            }]
        },
        renderTo: document.body
    });
});