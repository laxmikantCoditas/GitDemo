Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1'],
        data: [
            { 'name': 'metric one', 'data1': 10},
            { 'name': 'metric two', 'data1': 7 },
            { 'name': 'metric three', 'data1': 5},
            { 'name': 'metric one', 'data1': 10},
            { 'name': 'metric two', 'data1': 7},
            { 'name': 'metric three', 'data1': 5}
        ]
    });

    var chart = Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 500,
        height: 300,
        animate: true,
        store: store,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Sample Values',
                grid: true,
                minimum: 0
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Sample Metrics',
                label: {
                    rotate: {
                        degrees: 90
                    }
                }
            }
        ],
        series: [
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: ['bottom', 'left' ],
                xField: ['name'],
                yField: ['data1'],
                label: {
                    display: 'outside',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizantal',
                    color: '#333',
                    'text-anchor': 'right',
                    constrast: true
                },

                markerConfig: {
                    type: 'cross',
                    size: 1,
                    radius: 1,
                    'stroke-width':0
                }
            }
        ]
    });
    
    new Ext.button.Button({
        renderTo: document.body,
        margin: '10px',
        text: 'Redraw chart',
        handler: function() {
            chart.redraw();
        }
    });
});
