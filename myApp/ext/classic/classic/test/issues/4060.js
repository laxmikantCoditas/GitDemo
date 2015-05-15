Ext.define('WeatherPoint', {
    extend: 'Ext.data.Model',
    fields: ['temperature', 'date']
});

Ext.require('Ext.chart.*');

Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        model: 'WeatherPoint',
        data: [{
            temperature: 58,
            date: new Date(2011, 1, 1, 8)
        }, {
            temperature: 63,
            date: new Date(2011, 1, 1, 9)
        }, {
            temperature: 73,
            date: new Date(2011, 1, 1, 10)
        }, {
            temperature: 78,
            date: new Date(2011, 1, 1, 11)
        }, {
            temperature: 81,
            date: new Date(2011, 1, 1, 12)
        }]
    });
    
    
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        store: store,
        axes: [{
            title: 'Temperature',
            type: 'Numeric',
            position: 'left',
            fields: ['temperature'],
            minimum: 0,
            maximum: 100,
            grid: true
        }, {
            title: 'Time',
            type: 'Time',
            position: 'bottom',
            fields: ['date'],
            groupBy: 'hour',
            dateFormat: 'ga',
            grid: true
        }],
        series: [{
            type: 'line',
            xField: 'date',
            yField: 'temperature',
            fill: true,
            label: {
                field: 'temperature',
                display: 'middle'
            }
        }]
    });
    
});
