Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        id: 'outer',
        title: 'Some Panel',
        layout: {
            type: 'hbox',
            align: 'stretchmax'
        },
        renderTo: Ext.getBody(),
        width: 500,
        items: [{
            id: 'panel1',
            xtype: 'panel',
            flex: 1,
            height: 300,
            title: 'Panel 1',
            html: 'Panel 1'
        }, {
            id: 'panel2',
            xtype: 'panel',
            flex: 1,
            title: 'Panel 2',
            html: 'Panel 2'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                id: 'button1',
                text: 'Button One'
            }, {
                id: 'button2',
                text: 'Button Two',
                handler: function() {
                    this.setHeight(50);
                }
            }]
        }]
    });
});