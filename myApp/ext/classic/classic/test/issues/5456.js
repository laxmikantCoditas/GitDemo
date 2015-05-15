Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        width: 500,
        height: 400,
        x: 20,
        y: 20,
        title: 'Border Layout',
        layout: 'border',
        items: [{
            title: 'Expand me please',
            region: 'west',
            xtype: 'panel',
            width: 200,
            collapsible: true,
            collapsed: true,
            layout: 'accordion',
            items: [{
                title: 'Some Panel 1',
                listeners: {
                    render: function() {
                        this.update("I've been rendered 1!");
                        this.update("I've been rendered 1!");
                    }
                }
            }, {
                title: 'Some Panel 2',
                listeners: {
                    render: function() {
                        this.update("I've been rendered 2!");
                        this.update("I've been rendered 2!");
                    }
                }
            }]
        },{
            title: 'Center Region',
            region: 'center'
        }],
        renderTo: Ext.getBody()
    });

});