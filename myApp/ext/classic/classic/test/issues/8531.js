Ext.require('Ext.chart.*');
 
Ext.onReady(function() {
    var store;
    
    store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1', 'data2'],
        data: [
            { 'name': 'metric one', 'data1': 25, 'data2': 13},
            { 'name': 'metric two', 'data1': 14, 'data2': 18}
        ]
    });
    
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields:  ['data1', 'data2'],
                title: 'Sample Values',
                minimum: 0
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: 'name',
                title: 'Sample Metrics'
            }
        ],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2'],
            style:{
                width:'50'
            },
             label: {
                display: 'insideEnd',
                field: ['data1', 'data2'],
                renderer: Ext.util.Format.numberRenderer('0')
            }
        }]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'bottom',
                fields:  ['data1', 'data2'],
                title: 'Sample Values',
                minimum: 0
            },
            {
                type: 'Category',
                position: 'left',
                fields: 'name',
                title: 'Sample Metrics'
            }
        ],
        series: [{
            type: 'bar',
            axis: 'bottom',
            xField: 'name',
            yField: ['data1', 'data2'],
            style:{
                height: '50'
            },
             label: {
                display: 'insideEnd',
                field: ['data1', 'data2'],
                renderer: Ext.util.Format.numberRenderer('0')
            }
        }]
    });
});
