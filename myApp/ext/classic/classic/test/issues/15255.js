Ext.require([
    'Ext.chart.*'
]);

Ext.define('ex.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClick: function() {
        var me = this,
            chartContainer = me.lookupReference('chartContainer'),
            nSeries = 10,
            nItems = 1000,
            i, j,
            headers = [],
            series = [],
            data = [];

        chartContainer.removeAll();

        for (i = 0; i < nSeries; i++) {
            headers.push('header ' + (i + 1));
        }
        for (i = 1; i < nSeries; i++) {
            series.push({
                type: 'line',
                marker: {
                    radius: 2
                },
                xField: headers[0],
                yField: headers[i]
            });
        }
        for (i = 0; i < nItems; i++) {
            var item = {};
            for (j = 0; j < nSeries; j++) {
                item[headers[j]] = (i + j) * 0.5;
            }
            data.push(item);
        }

        var chart = Ext.create('Ext.chart.CartesianChart', {
            store: {
                fields: headers,
                data: data,
                autoDestroy: true
            },
            interactions: {
                type: 'crosszoom',
                zoomOnPanGesture: false
            },
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: headers[0],
                grid: true
            }, {
                type: 'numeric',
                position: 'left',
                grid: true,
                fields: headers.slice(1, headers.length)
            }],
            series: series,
            legend: {
                docked: 'right'
            }
        });
        chartContainer.add(chart);
    }
});

Ext.define('ex.Main', {
    extend: 'Ext.window.Window',

    controller: 'main',
    title: 'Chart example',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: 400,
    width: 400,
    items: [{
        xtype: 'button',
        text: 'update',
        listeners: {
            click: 'onClick'
        }
    }, {
        xtype: 'panel',
        layout: 'fit',
        autoDestroy: true,
        reference: 'chartContainer',
        flex: 1
    }]
});

Ext.onReady(function () {
    var win = Ext.create('ex.Main', {});
    win.show();
});