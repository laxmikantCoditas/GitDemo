Ext.onReady (function () {
    Ext.define ('timeModel', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'date', type: 'date', dateFormat: 'c' },
            { name: 'value', type: 'int' }
        ]
    });
    Ext.create ('Ext.data.Store', {
        model: 'timeModel',
        storeId: 'timeStore',
        data: [
            { 'date': '2011-01-27T06:00:00Z', value: 50 },
            { 'date': '2012-05-26T06:00:00Z', value: 100 }
        ],
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
            }
        }
    });
    
    Ext.create ('Ext.chart.Chart', {
        store: 'timeStore',
        axes: [{
            type: 'Numeric',
            minimum: 0,
            position: 'left',
            fields: 'value',
            title: 'Number'
        }, {
            type: 'Time',
            position: 'bottom',
            fields: 'date',
            dateFormat: 'M-y',
            groupBy: 'year,month',
            aggregrateOp: 'avg',
            step: [ Ext.Date.MONTH, 1 ]
        }],
        series: [{
            type: 'line',
            axis: [ 'left', 'bottom' ],
            xField: 'date',
            yField: 'value',
            markerConfig: {
                radius: 5,
                size: 5
            }
        }],
        height: 600,
        width: 1000,
        renderTo: Ext.getBody ()
    });

    Ext.create ('Ext.chart.Chart', {
        store: 'timeStore',
        axes: [{
            type: 'Numeric',
            minimum: 0,
            position: 'left',
            fields: 'value',
            title: 'Number'
        }, {
            type: 'Time',
            position: 'bottom',
            fields: 'date',
            dateFormat: 'M-Y',
            groupBy: 'year,month',
            aggregrateOp: 'avg',
            step: [ Ext.Date.YEAR, 1 ]
        }],
        series: [{
            type: 'line',
            axis: [ 'left', 'bottom' ],
            xField: 'date',
            yField: 'value',
            markerConfig: {
                radius: 5,
                size: 5
            }
        }],
        height: 600,
        width: 1000,
        renderTo: Ext.getBody ()
    });
});
