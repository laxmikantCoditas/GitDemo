Ext.require('Ext.chart.*');
Ext.onReady(function() {

    var today = new Date().getTime();

    var store = Ext.create('Ext.data.JsonStore', {
        fields: [{
            name: 'datetime',
            type: 'date'
        },
        {
            name: 'val',
            type: 'float'
        }],
        data: [{
            datetime: new Date(today + (0 * 24 * 3600 * 1000)),
            val: 5
        },
        {
            datetime: new Date(today + (1 * 24 * 3600 * 1000)),
            val: 10
        },
        {
            datetime: new Date(today + (2 * 24 * 3600 * 1000)),
            val: 2
        },
        {
            datetime: new Date(today + (3 * 24 * 3600 * 1000)),
            val: 12
        },
        {
            datetime: new Date(today + (4 * 24 * 3600 * 1000)),
            val: 25
        },
        {
            datetime: new Date(today + (5 * 24 * 3600 * 1000)),
            val: 30
        },
        {
            datetime: new Date(today + (6 * 24 * 3600 * 1000)),
            val: 8
        }]
    });

    var chart = Ext.create('Ext.chart.Chart', {
        animate: false,
        shadow: true,
        store: store,
        axes: [{
            type: 'Time',
            dateFormat: 'M d',
            position: 'bottom',
            fields: 'datetime',
            title: 'Date'
        },
        {
            type: 'Numeric',
            position: 'left',
            fields: 'val',
            title: 'Utilization (%)',
            grid: false,
            minimum: 0,
            maximum: 100
        }],
        series: [{
            type: 'scatter',
            axis: 'left',
            xField: 'datetime',
            yField: 'val',
            color: '#ccc',
            markerConfig: {
                type: 'circle',
                radius: 3,
                size: 3
            }
        }]
    });

    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Scatter Chart Test',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: chart
    });
});
