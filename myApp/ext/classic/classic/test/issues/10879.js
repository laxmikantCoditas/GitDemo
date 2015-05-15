Ext.require('*');

Ext.onReady(function() {
    
    var store = new Ext.data.Store({
        fields: ['name', 'f1', 'f2', 'f3', 'f4', 'f5'],
        data: [{
            name: 'Item 1',
            'f1': 15.8,
            'f2': 27,
            'f3': 9.9,
            'f4': 18.33,
            'f5': 4.15
        }, {
            name: 'Item 2',
            'f1': 12.4,
            'f2': 27.9,
            'f3': 10.1,
            'f4': 21.34,
            'f5': 7.3
        }, {
            name: 'Item 3',
            'f1': 10.6,
            'f2': 30,
            'f3': 10.4,
            'f4': 19.01,
            'f5': 9.22
        }, {
            name: 'Item 4',
            'f1': 12.4,
            'f2': 30,
            'f3': 9.9,
            'f4': 22.24,
            'f5': 9.32
        }, {
            name: 'Item 5',
            'f1': 11.4,
            'f2': 30,
            'f3': 25.4,
            'f4': 16.9,
            'f5': 3.67
        }]
    });

    new Ext.chart.Chart({
        renderTo: document.body,
        xtype: 'chart',
        height: 400,
        width: 600,
        //animate: true,
        insetPadding: 20,
        store: store,
        axes: [{
            type: 'Category',
            fields: ['name'],
            position: 'left',
            title: 'Operator'
        }, {
            type: 'Numeric',
            position: 'bottom',
            title: 'KPI (%)'
        }],
        series: [{
            type: 'bar',
            label: {
                display: 'insideEnd',
                field: ['f1', 'f2', 'f3', 'f4', 'f5'],
                'text-anchor': 'middle'
            },
            axis: 'bottom',
            yField: ['f1', 'f2', 'f3', 'f4', 'f5'],
            stacked: true
        }],
        legend: {
            position: 'right'
        }
    });

});

