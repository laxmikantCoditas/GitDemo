Ext.onReady(function() {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'navurl'],
        data: [{
            name: 'Cash and Short Term Investements',
            data1: 4,
            data2: 20,
            data3: 20,
            data4: '#FF0000',
            navurl: '/MultiLineGraph3.jsp'
        }, {
            name: 'Fixed Income',
            data1: 20,
            data2: 20,
            data3: 20,
            data4: '#FFFF00',
            navurl: '/LineBarGraph.jsp'
        }, {
            name: 'Equities',
            data1: .5,
            data2: '20.23',
            data3: 20,
            data4: '#04B404',
            navurl: '/MultiLineGraph3.jsp'
        }, {
            name: 'Hedge Funds',
            data1: .2,
            data2: 20,
            data3: 20,
            data4: '#40FF00',
            navurl: '/BarGraph.jsp'
        }, {
            name: 'Real Estate',
            data1: .2,
            data2: 20,
            data3: 20,
            data4: '#04B404',
            navurl: '/MultiLineGraph3.jsp'
        }, {
            name: 'Capital Market',
            data1: .2,
            data2: 20,
            data3: 20,
            data4: '#0B3B17',
            navurl: '/BarGraph.jsp'
        }, {
            name: 'Others',
            data1: .2,
            data2: 20,
            data3: 20,
            data4: '#0B3B17',
            navurl: '/MultiLineGraph3.jsp'
        }]
    });

    var colorpalette = [
    // black
    'rgb(204,204,255)',
    // yellow
    'rgb(102,153,255)',
    // brown
    'rgb(51,102,204)',
    // dark blue
    'rgb(0,0,204)',
    // dark green
    'rgb(204,204,204)',
    // orange
    'rgb(153,153,153)',
    // light blue
    'rgb(102,102,102)',
    // red
    'rgb(0,0,51)',
    // purple
    'rgb(51,51,51)',
    // light green
    'rgb(0,0,102)',
    //pink
    'rgb(0,0,0)'];

    var chart;
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Redraw chart',
        handler: function() {
            if (chart) {
                chart.redraw();
            }
        }
    });

    chart = Ext.create('Ext.chart.Chart', {
        renderTo: document.body,
        x: 300,
        y: 300,
        style: {
            position: 'absolute'
        },
        width: 350,
        height: 350,
//         width: 700,
//         height: 700,
        xtype: 'chart',
        animate: false,
        store: store,
        shadow: true,
        legend: {
            position: 'right'
        },
        insetPadding: 60,
        theme: 'Base:gradients',
        series: [{
            type: 'pie',
            field: 'data1',
            showInLegend: false,
            //colorSet:['#fff', '#ddd','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#fff', '#ddd','#FF0000','#FF0000'],
            colorSet: colorpalette,
            donut: false,
//             tips: {
//                 trackMouse: false,
//                 width: 200,
//                 height: 28,
//                 label: {
//                     font: '8px Arial'
//                 },
//                 renderer: function(storeItem, item) {
//                     //calculate percentage.
//                     var total = 0;
// 
//                     store.each(function(rec) {
//                         total += rec.get('data1');
//                     });
// 
//                     this.setTitle('<font size=1> ' + storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%' + '</font>');
//                 }
//             },
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'name',
                display: 'outside',
                contrast: true,
                calloutLine: true,
                font: '8px Arial',
                hideLessThan: 8
            }
        }]
    });
});
