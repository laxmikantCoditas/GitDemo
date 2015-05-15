// Note: run as issue.html?id=17496/app
Ext.application({
    name: 'Fiddle',

    launch: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: [
                'name',
                'value'
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    rootProperty: 'items'
                }
            }
        });

        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            width: 600,
            height: 400,
            layout: 'fit',
            tbar: [
                {
                    text: 'Load data',
                    handler: function()
                    {
                        store.load({
                            url: '17496/data1.json'
                        });
                    }
                },
                {
                    text: 'Load Empty',
                    handler: function()
                    {
                        store.load({
                            url: '17496/data2.json'
                        });
                    }
                }
            ],
            items: {
                xtype: 'cartesian',
                store: store,
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    },
                    fields: 'value'
                }, {
                    type: 'category3d',
                    position: 'bottom',
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    },
                    fields: 'name'
                }],
                series: {
                    type: 'bar3d',
                    xField: 'name',
                    yField: 'value',
                    style: {
                        fill: 'blue'
                    }
                }
            }
        });
    }
});