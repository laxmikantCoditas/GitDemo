Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function(){
    store1.loadData(generateData(8));
    
    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Line Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function(){
                store1.loadData(generateData(8));
            }
        }],
        items: {
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: store1,
            shadow: true,
            theme: 'Category1',
            legend: {
                position: 'right'
            },
            axes: [{
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['data1', 'data2', 'data3'],
                title: 'Number of Hits',
                minorTickSteps: 1,
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 0.5
                    }
                }
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'line',
                axis: 'left',
                smooth: 5,
                fill: true,
                xField: 'name',
                yField: 'data1',
                style: {
                    stroke: '#E56600',
                    'stroke-width': 10,
                    fill: '#93DD2F',
                    opacity: 0.8
                },
                showMarkers: false
            }]
        }
    });
});