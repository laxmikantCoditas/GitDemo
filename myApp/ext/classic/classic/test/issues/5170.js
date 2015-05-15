Ext.onReady(function() {
    var myPanel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'dataview',
            store: {
                fields: ['text'],
                data: [{
                    text: 'Text 1'
                }]
            },
            itemTpl: '{text}',
            height: 200,
            width: 200
        }, {
            height: 200,
            width: 200,
            title: 'A panel'
        }]
    });
});
