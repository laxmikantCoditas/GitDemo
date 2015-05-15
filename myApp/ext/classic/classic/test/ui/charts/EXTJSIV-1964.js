Ext.require('Ext.chart.*');
Ext.require('Ext.data.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.onReady(function() {   
var store1 = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'total', 'unique'],
    data:  [{ name: '04/03/2011', total: 0, unique: 0},
            { name: '04/04/2011', total: 0, unique: 0},
            { name: '04/05/2011', total: 0, unique: 0},
            { name: '04/06/2011', total: 0, unique: 0},
            { name: '04/07/2011', total: 0, unique: 0},
            { name: '04/08/2011', total: 0, unique: 0},
            { name: '04/09/2011', total: 0, unique: 0},
            { name: '04/10/2011', total: 0, unique: 0}]

});

Ext.create('Ext.panel.Panel', {
    border: false,
    height: 250,
    layout: 'fit',
    items: [{
        animate: true,
        axes: [{
            fields: ['total'],
            grid: true,
            minimum: 0,
            position: 'left',
            title: 'Number of Hits',
            type: 'Numeric'
        }, {
            fields: ['name'],
            grid: true,
            position: 'bottom',
            type: 'Category'
        }],
        height: 250,
        highlight: true,
        series: [{
            fill: true,
            highlight: true,
            smooth: true,
            type: 'line',
            xField: 'name',
            yField: 'total'
        }],
        store: store1,
        xtype: 'chart'
    }],
    renderTo: Ext.getBody(),
    width: 700
});

});
