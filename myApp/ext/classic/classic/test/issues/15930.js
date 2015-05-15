Ext.onReady(function() {
    var container = Ext.create('Ext.Container', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 400,
        layout: 'fit',
        items: {
            xtype: 'cartesian',
            store: {
                fields: ['name', 'value'],
                data: [{
                    name: 'metric one',
                    value: 0
                }, {
                    name: 'metric two',
                    value: 7
                }, {
                    name: 'metric three',
                    value: 5
                }, {
                    name: 'metric four',
                    value: 2
                }, {
                    name: 'metric five',
                    value: 20
                }]
            },
            axes: [{
                id: 'left',
                type: 'numeric',
                position: 'left',
                fields: 'value',
                grid: true
            }, {
                id: 'bottom',
                type: 'category',
                position: 'bottom',
                fields: 'name'
            }, {
                id: 'right',
                type: 'numeric',
                position: 'right',
                fields: 'value',
                linkedTo: 'left'
            }],
            series: {
                type: 'bar',
                xField: 'name',
                yField: 'value',
                label: {
                    field: 'value',
                    display: 'outside',
                    orientation: 'horizontal'
                },
                style: {
                    fill: 'blue'
                }
            }
        }
    });
});
