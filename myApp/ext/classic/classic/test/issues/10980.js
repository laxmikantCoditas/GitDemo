
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    margin: 60,
    border: 1,
    style: {font: "bold 12px Lucida Grande, Arial, sans-serif"},
    items: [
        {
            html: "This test case shows how mixing Column series and Line series in \
                   the same chart can trigger bugs depending on the order of the series. <br><br> \
                   It also shows how the first two Line series swap their colors if they \
                   also happen to be the first series in the chart. It is particularly \
                   visible when redrawing the chart in a slow animation.",
            margin: 20
        }
    ]
});


var store = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'data1', 'data2', 'data3', 'data4'],
    data: [
        { 'name': 'one',   'data1': 9, 'data2': 1, 'data3': 3, 'data4': 7 },
        { 'name': 'two',   'data1': 7, 'data2': 6, 'data3': 5, 'data4': 4 }
    ]
});

var emptyStore = Ext.create('Ext.data.JsonStore', {
    fields: ['name'],
    data: [
    ]
});


function buildChart(series, title) {
    var columnFirst = (series[0].type === 'column');
    return Ext.create('Ext.chart.Chart', {
        width: 500,
        height: 300,
        margin: 20,
        animate: {duration: 2000},
        shadow: false,
        store: store,
        legend : {position: "right"},
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['data1', 'data2', 'data3', 'data4'],
                grid: true,
                minimum: 0
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: title
            }
        ],
        series: series
    });    
}

function buildPanel(series, comment, title) {
    var chart = buildChart(series, title);

    return Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 650,
        margin: 60,
        border: 1,
        style: {font: "bold 12px Lucida Grande, Arial, sans-serif"},
        items: [
            chart,
            {
                xtype:'button',
                text: 'Redraw',
                y: -12,
                handler: function() {
                    var chart = this.ownerCt.items.items[0];
                    // chart.redraw() should have been enough here but it's broken
                    chart.bindStore(emptyStore, false);
                    chart.bindStore(store, false);
                }
            },
            {
                html: comment,
                margin: "0 0 20 20"
            }
        ]
    });
}

function lineConfig(width, field) {
    return {
        type: 'line',
        style: {'stroke-width': width},
        axis: 'left',
        xField: 'name',
        yField: field
    }
}

function columnConfig(field) {
    return {
        type: 'column',
        style: { opacity: 1.7 },
        xPadding: 40,
        axis: 'left',
        xField: 'name',
        yField: field
    }
}

var title,
    comment,
    bug = "<span style='background-color:tomato;padding:0px 4px'>BUG:</span> ",
    good = "<span style='background-color:lightgreen;padding:0px 4px'>Good:</span> ",
    fixed = bug + "<span style='background-color:gold;padding:0px 4px'>Fixed:</span> ",
    multicolumn = columnConfig(['data1','data2','data3']),
    thinLine    = lineConfig(2, 'data2'),
    mediumLine  = lineConfig(6, 'data3'),
    thickLine   = lineConfig(12, 'data4');


title   = "3 lines";
comment = bug + "The first 2 lines swap colors (data4 should be green, data3 should be blue).";
buildPanel([thickLine, mediumLine, thinLine], comment, title);


title   = "3 columns";
comment = good + "The green and blue columns are displayed in the correct order.";
buildPanel([multicolumn], comment, title);


title   = "3 columns followed by 3 lines";
comment = good + "All series are displayed in the correct order. The axis is correct.";
buildPanel([multicolumn, thickLine, mediumLine, thinLine], comment, title);


title  = "3 lines followed by 3 columns";
comment = bug + "The first 2 lines swap colors (data4 should be green, data3 should be blue).<br><br>" +
          fixed + "The Legend markers have incorrect colors.<br>" +
          fixed + "The axis should be Category-style, not Numeric-style.";
buildPanel([thickLine, mediumLine, thinLine, multicolumn], comment, title);


title  = "1 line, followed by 3 columns, followed by 2 lines";
comment = bug + "The first line is blue instead of green.<br><br>" +
          fixed + "The Legend markers have incorrect colors.<br>" +
          fixed + "The axis should be Category-style, not Numeric-style.";
buildPanel([thickLine, multicolumn, mediumLine, thinLine], comment, title);
