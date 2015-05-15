Ext.require('*');

Ext.onReady(function() {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            // { 'name': 'M1M',   'data': 40 },
            // { 'name': 'M2M',   'data':  2 },
            // { 'name': 'M3M', 'data':  2 },
            // { 'name': 'M4M', 'data': 2 },
            // { 'name': 'M5M', 'data': 2 },
            // { 'name': 'M6M',  'data':  2 },
            // { 'name': 'M6M',  'data':  2 },
            // { 'name': 'M7M',  'data': 2 },
            // { 'name': 'M8M',  'data': 54 }

            // { 'name': 'M1M',   'data': 2 },
            // { 'name': 'M2M',   'data':  2 },
            // { 'name': 'M3M', 'data':  2 },
            // { 'name': 'M4M', 'data': 2 },
            // { 'name': 'M5M', 'data': 80 },
            // { 'name': 'M6M',  'data':  2 },
            // { 'name': 'M7M',  'data': 2 },
            // { 'name': 'M8M',  'data': 2 }

            // { 'name': 'gM',   'data': 12 },
            // { 'name': 'gM',   'data':  24 },
            // { 'name': 'gM', 'data':  12 },
            // { 'name': 'Mg', 'data': 24 },
            // { 'name': 'Mg', 'data': 12 },
            // { 'name': 'gM',  'data':  24 },
            // { 'name': 'gM',  'data': 12 },
            // { 'name': 'Mg',  'data': 24 }

            // { 'name': 'MgM1MgM',   'data': 12 },
            // { 'name': 'MgM2MgM',   'data':  24 },
            // { 'name': 'MgM3MgM', 'data':  12 },
            // { 'name': 'MgM4MgM', 'data': 24 },
            // { 'name': 'MgM5MgM', 'data': 12 },
            // { 'name': 'MgM6MgM',  'data':  24 },
            // { 'name': 'MgM7MgM',  'data': 12 },
            // { 'name': 'MgM8MgM',  'data': 24 }

            { 'name': 'Mg1gM',   'data': 10 },
            { 'name': 'Mg2gM',   'data':  12 },
            { 'name': 'Mg3gM', 'data':  95 },
            { 'name': 'Mg4gM', 'data': 40 },
            { 'name': 'Mg5gM', 'data': 10 },
            { 'name': 'Mg6gM',  'data':  100 },
            { 'name': 'Mg7gM',  'data': 27 }

            // { 'name': 'MgXgM',   'data': 10 },
            // { 'name': 'MgXgM',   'data':  12 },
            // { 'name': 'MgXgM', 'data':  95 },
            // { 'name': 'MgXgM', 'data': 40 },
            // { 'name': 'MgXgM', 'data': 10 },
            // { 'name': 'MgXgM',  'data':  100 },
            // { 'name': 'MgXgM',  'data': 27 }

            // { 'name': 'MgM1MgM',   'data': 10 },
            // { 'name': 'MgM2MgM',   'data':  12 },
            // { 'name': 'MgM3MgM', 'data':  95 },
            // { 'name': 'MgM4MgM', 'data': 40 },
            // { 'name': 'MgM5MgM', 'data': 10 },
            // { 'name': 'MgM6MgM',  'data':  100 },
            // { 'name': 'MgM7MgM',  'data': 27 }

            // { 'name': 'M1M',   'data': 10 },
            // { 'name': 'M2M',   'data':  7 },
            // { 'name': 'M3M', 'data':  105 },
            // { 'name': 'M4M', 'data': 10 },
            // { 'name': 'M5M',  'data':  100 },
            // { 'name': 'M6M',  'data': 27 }

            // { 'name': 'M1',   'data': 10 },
            // { 'name': 'M2',   'data':  7 },
            // { 'name': 'M3', 'data':  105 },
            // { 'name': 'M4', 'data': 10 },
            // { 'name': 'M5',  'data':  100 },
            // { 'name': 'M6',  'data': 27 }

            // { 'name': 'two',   'data':  7 },
            // { 'name': 'three', 'data':  105 },
            // { 'name': '3M', 'data': 10 },
            // { 'name': 'FOUR',  'data':  100 },
            // { 'name': 'MfiveM',  'data': 27 }

            // { 'name': 'metric value one',   'data': 10 },
            // { 'name': 'metric value two',   'data':  7 },
            // { 'name': 'metric value three', 'data':  105 },
            // { 'name': 'metric value four',  'data':  100 },
            // { 'name': 'metric value five',  'data': 27 }

            // { 'name': 'value pgyj mon 1', 'data': 10 },
            // { 'name': 'value pgyj tue 2', 'data': 10 },
            // { 'name': 'value pgyj wed 3', 'data': 10 },
            // { 'name': 'value pgyj thu 4', 'data': 10 },
            // { 'name': 'value pgyj fri 5', 'data': 10 }
        
            // { 'name': 'value pgyj mon 1', 'data': 10 },
            // { 'name': 'value pgyj tue 2', 'data': 10 },
            // { 'name': 'value pgyj wed 3', 'data': 10 },
            // { 'name': 'value pgyj thu 4', 'data': 10 },
            // { 'name': 'value pgyj mon 5', 'data': 10 },
            // { 'name': 'value pgyj tue 6', 'data': 10 },
            // { 'name': 'value pgyj wed 7', 'data': 10 },
            // { 'name': 'value pgyj mon 1', 'data': 10 },
            // { 'name': 'value pgyj tue 2', 'data': 10 },
            // { 'name': 'value pgyj wed 3', 'data': 10 },
            // { 'name': 'value pgyj thu 4', 'data': 10 },
            // { 'name': 'value pgyj mon 5', 'data': 10 },
            // { 'name': 'value pgyj tue 6', 'data': 10 },
            // { 'name': 'value pgyj wed 7', 'data': 10 },
            // { 'name': 'value pgyj mon 1', 'data': 10 },
            // { 'name': 'value pgyj tue 2', 'data': 10 },
            // { 'name': 'value pgyj wed 3', 'data': 10 },
            // { 'name': 'value pgyj thu 4', 'data': 10 },
            // { 'name': 'value pgyj mon 5', 'data': 10 },
            // { 'name': 'value pgyj tue 6', 'data': 10 },
            // { 'name': 'value pgyj thu 8', 'data': 10 }
        ]
    });

    var total = 0;
    store.each(function(rec) {
        total += rec.get('data');
    });

        
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 800,
        margin: 50,
        insetPadding: 180,       // leave space for labels above and below the pie chart
        style: {
            border: "1px solid red"
        },
        animate: true,
        store: store,
        legend: {
            position: 'right'
        },
        series: [{
            type: 'pie',
            angleField: 'data',
            showInLegend: true,
            donut: 30,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                    // calculate and display percentage on hover
                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
                }
            },
            highlight: {
                segment: {
                    margin: 40
                }
            },
            label: {
                field: 'name',
                font: '48px Arial',
                color: 'blue',           // hex color | css color name | TBD:auto (same color as the pie slice)
                contrast: true,
                padding: 50,
                display: 'outside',      // inside | outside | rotate | TBD:rotateAuto (rotate if enough room, otherwise outside)
                calloutLine: {
                    width: 8,
                    // color: 'black',
                    // length: 40
                }
            }
        }]
    });
});
