Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox', 'Ext.rtl.*']);

Ext.onReady(function() {

    var chart = Ext.create('Ext.chart.Chart', {
        rtl: true,
        width: 800,
        height: 600,
        renderTo: document.body,
        animate: true,
        shadow: true,
        store: {
            fields: ['name', 'value'],
            data: [{
                name: 'Foo',
                value: 20
            }, {
                name: 'Bar',
                value: 37
            }]
        },
        axes: [{
            type: 'Numeric',
            position: 'bottom',
            fields: ['value'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Number of Hits',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'left',
            fields: ['name'],
            title: 'Month of the Year'
        }],
        series: [{
            type: 'bar',
            axis: 'bottom',
            highlight: true,
            label: {
                display: 'insideEnd',
                field: 'value',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'horizontal',
                color: '#333',
                'text-anchor': 'middle'
            },
            xField: 'name',
            yField: ['value']
        }]
    });
    
    function setLabel(item) {
        chart.series.getAt(0).label.display = item.text;
        chart.redraw();
    }
    
    new Ext.button.Button({
        renderTo: document.body,
        text: 'Set label',
        menu: {
            items: [{
                text: 'insideStart',
                handler: setLabel
            }, {
                text: 'insideEnd',
                handler: setLabel
            }, {
                text: 'outside',
                handler: setLabel
            }]
        }
    });
});
