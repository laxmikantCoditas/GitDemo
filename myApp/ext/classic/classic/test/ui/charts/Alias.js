Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    var chart = Ext.create('Ext.chart.Chart', {
        width: 800,
        height: 600,
        animate: true,
        store: store1,
        renderTo: Ext.getBody(),
        axes: [{
            type: 'Numeric',
            grid: true,
            position: 'left',
            fields: ['data1', 'data2', 'data3'],
            title: 'Number of Hits',
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Month of the Year',
            grid: true,
            label: {
                rotate: {
                    degrees: 315
                }
            }
        }],
        series: []
    });

    var klass = Ext.define('mynamespace.MySeries', {
        alias: 'series.myseries',
        extend: 'Ext.chart.series.Area',
        type: 'myseries'
    });
    
    var mySeriesInstance = new klass({
        chart: chart,
        axis: 'left',
        xField: 'name',
        yField: ['data1', 'data2', 'data3'],
        style: {
            opacity: 0.93
        }
    });
    
    chart.series.add(mySeriesInstance);
    chart.redraw();

    
});
