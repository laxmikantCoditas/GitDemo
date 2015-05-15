Ext.require('Ext.chart.*');
 
Ext.onReady(function() {
    var store;
    
    store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1', 'data2', 'xPos'],
        data: [
            { 'name': 'metric one', 'data1': 25, 'data2': 13, 'xPos': 4},
            { 'name': 'metric two', 'data1': 14, 'data2': 18, 'xPos': 7}
        ]
    });
    
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields:  ['data1', 'data2'],
                title: 'Sample Values',
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: 'name',
                title: 'fixed width'
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
                title: 'fixed width + rotate',
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
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

 /**/

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields:  ['data1', 'data2'],
                title: 'Sample Values',
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: 'name',
                title: 'xPadding + fixed width'
            }
        ],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2'],
            xPadding: 50,
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
        width: 400,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields:  ['data1', 'data2'],
                title: 'Sample Values',
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: 'name',
                title: 'xPadding + no fixed width'
            }
        ],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2'],
            xPadding: 50,
            style:{
                // width:'50'
            },
             label: {
                display: 'insideEnd',
                field: ['data1', 'data2'],
                renderer: Ext.util.Format.numberRenderer('0')
            }
        }]
    });

/**/
    
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
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
                title: 'xPadding + stacked'
            }
        ],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2'],
            stacked: true,
            xPadding: 50,
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
        width: 400,
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
                title: 'no fixed width + stacked'
            }
        ],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2'],
            stacked: true,
            xPadding: 50,
            style:{
                // width:'50'
            },
             label: {
                display: 'insideEnd',
                field: ['data1', 'data2'],
                renderer: Ext.util.Format.numberRenderer('0')
            }
        }]
    });

/**/

    
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        store: store,

        legend: true,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields:  ['data1'],
                title: 'Sample Values',
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
            },
            {
                type: 'Numeric',
                position: 'bottom',
                fields:  ['xPos'],
                title: 'bound columns at x=4 and x=7',
                minimum: 0,
                maximum: 10
            }
        ],
        series: [{
            type: 'column',
            axis: ['left', 'bottom'],   // These columns are bound to both numerical axes
            xField: 'xPos',
            yField: ['data1'],
            style:{
                width:'30'
            },
             label: {
                display: 'insideEnd',
                field: ['data1'],
                renderer: Ext.util.Format.numberRenderer('0')
            }
        }]
    });


});
