Ext.require('*');

Ext.onReady(function() {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            { 'name': 'very first one',   'data': 80 },
            { 'name': 'two here!',   'data':  12 },
            { 'name': 'three', 'data':  95 },
            { 'name': 'four', 'data': 40 },
            { 'name': 'five', 'data': 10 },
            { 'name': 'six',  'data':  100 },
            { 'name': 'seven',  'data': 27 }
        ]
    });

    var total = 0;
    store.each(function(rec) {
        total += rec.get('data');
    });

    var chart1 = Ext.create('Ext.chart.Chart', {
        width: 800,
        height: 400,
        insetPadding: 60,       // leave space for labels above and below the pie chart
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
                    margin: 10
                }
            },
            label: {
                field: 'name',
                font: '20px Arial',
                color: 'darkblue',           // hex color | css color name | TBD:auto (same color as the pie slice)
                padding: 20,
                display: 'outside',      // inside | outside | rotate | TBD:rotateAuto (rotate if enough room, otherwise outside)
                calloutLine: {
                    width: 2,
                    // color: 'black',
                    // length: 40
                }
            }
        }]
    });

        
    var chart2 = Ext.create('Ext.chart.Chart', {
        width: 800,
        height: 400,
        insetPadding: 60,       // leave space for labels above and below the pie chart
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
            rotation: {
                degrees: -90
            },
            clockwise: true,
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
                    margin: 10
                }
            },
            label: {
                field: 'name',
                font: '20px Arial',
                color: 'darkblue',           // hex color | css color name | TBD:auto (same color as the pie slice)
                padding: 20,
                display: 'outside',      // inside | outside | rotate | TBD:rotateAuto (rotate if enough room, otherwise outside)
                calloutLine: {
                    width: 2,
                    // color: 'black',
                    // length: 40
                }
            }
        }]
    });

    Ext.create('Ext.panel.Panel', {
        border: true,
        margin: 10,
        width: 820,
        title: 'Counterclockwise',
        renderTo: Ext.getBody(),
        items: [chart1]
    });

    Ext.create('Ext.panel.Panel', {
        border: true,
        margin: 10,
        width: 820,
        title: 'Clockwise + Rotation of -90 degrees',
        renderTo: Ext.getBody(),
        items: [chart2]
    });


});
