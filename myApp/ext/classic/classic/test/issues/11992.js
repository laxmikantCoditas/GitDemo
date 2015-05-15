Ext.require('*');

Ext.onReady(function() {

    var store1 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            { 'name': 'first one',  'data': 1080 },
            { 'name': 'two here!',  'data': 1012 },
            { 'name': 'three',      'data': 1095 },
            { 'name': 'four',       'data': 1040 },
            { 'name': 'five',       'data': 1020 },
            { 'name': 'six',        'data': 1101 },
            { 'name': 'seven',      'data': 1027 }
        ]
    });

    var store2 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            { 'name': 'first one',  'data':  80 },
            { 'name': 'two here!',  'data': -12 },
            { 'name': 'three',      'data':  95 },
            { 'name': 'four',       'data': -36 },
            { 'name': 'five',       'data':  20 },
            { 'name': 'six',        'data': 101 },
            { 'name': 'seven',      'data': -27 }
        ]
    });


    var chart1 = Ext.create('Ext.chart.Chart', {
        width: 800,
        height: 500,
        insetPadding: 20,       // leave space for labels
        animate: true,
        store: store1,
        axes: [{
            type: 'Radial',
            position: 'radial',
            minimum: 1000
        }],
        series: [{
            type: 'radar',
            xField: 'name',
            yField: 'data',
            style: {
                opacity: 0.5
            },
            label: {
                display: true,
                color: 'blue',
                field: 'data',
            },
            showMarkers: true,
            markerConfig: {
                type: 'cross',
                radius: 12,
                color: 'lightgreen',
                opacity: 0.5
            }
        }]
    });


    var chart2 = Ext.create('Ext.chart.Chart', {
        width: 800,
        height: 500,
        insetPadding: 20,       // leave space for labels
        animate: true,
        store: store2,
        axes: [{
            type: 'Radial',
            position: 'radial',
            minimum: -40
        }],
        series: [{
            type: 'radar',
            xField: 'name',
            yField: 'data',
            style: {
                opacity: 0.5
            },
            label: {
                display: true,
                color: 'blue',
                field: 'data',
            },
            showMarkers: true,
            markerConfig: {
                type: 'cross',
                radius: 12,
                color: 'lightgreen',
                opacity: 0.5
            }
        }]
    });

        
    Ext.create('Ext.panel.Panel', {
        border: true,
        margin: 10,
        width: 820,
        title: 'Radar minimum = 1000',
        renderTo: Ext.getBody(),
        items: [chart1]
    });

        
    Ext.create('Ext.panel.Panel', {
        border: true,
        margin: 10,
        width: 820,
        title: 'Radar minimum = -40',
        renderTo: Ext.getBody(),
        items: [chart2]
    });



});
