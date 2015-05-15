Ext.Loader.setConfig({
    paths: {
        'Ext.chart': '../../packages/ext-charts/src/chart',
        'Ext.draw': '../../packages/ext-charts/src/draw'
    }
});

Ext.require([
    'Ext.chart.Chart',
    'Ext.chart.series.Scatter'
]);

Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        closable: true,
        
        items: [{
            xtype: 'chart',
            legend: {
                position: 'right'
            },
            series: [{
                xField: 'Name',
                yField: 'Data1',
                type: 'scatter'
            }, {
                xField: 'Name',
                yField: 'Data2',
                type: 'scatter'
            }],
            store: {
                fields: [{
                        name: 'Name'
                    }, {
                        name: 'Data1'
                    }, {
                        name: 'Data2'
                    }
                ],
                data: [{
                        'Name': 'January',
                        'Data1': 86.0,
                        'Data2': 61.0
                    }, {
                        'Name': 'February',
                        'Data1': 63.0,
                        'Data2': 46.0
                    }, {
                        'Name': 'March',
                        'Data1': 20.0,
                        'Data2': 96.0
                    }
                ]
            }
        }],
        layout: 'fit'
    });
});
