Ext.require(['Ext.Button',
             'Ext.data.Store',
             'Ext.chart.CartesianChart',
             'Ext.chart.axis.Numeric',
             'Ext.chart.axis.Time',
             'Ext.chart.series.Line',
             'Ext.chart.interactions.PanZoom']);
Ext.setup({
    onReady: function () {
        var store1 = Ext.create("Ext.data.Store", {
                fields: ['time', 'value'],
                proxy: {
                    type: "ajax",
                    url: 'sven-data-1.json'
                }
            }),
            store2 = Ext.create("Ext.data.Store", {
                fields: ['time', 'value'],
                proxy: {
                    type: "ajax",
                    url: 'sven-data-2.json'
                }
            });
        
        Ext.create("Ext.chart.CartesianChart", {
            fullscreen: true,
            interactions: [
                {
                    type: 'panzoom'
                }
            ],
            background: '#FFFFFF',
            animate: false,
            series: [
                {
                    type: 'line',
                    xField: 'time',
                    yField: 'value',
                    store: store1,
                    style: {
                        stroke: '#C3C',
                        preciseStroke: true,
                        lineWidth: 1
                    }
                },
                {
                    type: 'line',
                    xField: 'time',
                    yField: 'value',
                    store: store2,
                    style: {
                        stroke: '#CC3',
                        preciseStroke: true,
                        lineWidth: 1
                    }
                }
            ],
            innerPadding: {
                left: 0,
                top: 20,
                right: 0,
                bottom: 20
            },
            axes: [
                {
                    type: 'numeric',
                    position: 'right'
                },
                {
                    type: 'time',
                    position: 'bottom',
                    visibleRange: [0, 1],
                    dateFormat: "Y-m-d"
                }
            ]
        });
        var button = Ext.ComponentQuery.query("interaction")[0].getModeToggleButton();
        button.setTop(0);
        button.setLeft(0);
        button.setZIndex(1000);
        Ext.Viewport.add(button);
        store1.load();
        store2.load();
    }
});