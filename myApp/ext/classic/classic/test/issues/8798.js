Ext.onReady(function () {
    Ext.create("Ext.chart.Chart", {
        renderTo: Ext.getBody(),
        height: 400,
        width: 400,
        axes: [{
            position: "bottom",
            title: "X",
            fields: ["x"],
            type: "Numeric"
        }, {
            position: "left",
            title: "Y",
            fields: ["y"],
            type: "Numeric"
        }],
        legend: {}, // removing it causes the sample to be launched without any error
        series: [{
            title: "Chart",
            xField: "x",
            yField: "y",
            type: "line"
        }],
        store: {
            fields: [{
                name: "x"
            }, {
                name: "y"
            }],
            data: [{
                x: 0,
                y: 0
            }, {
                x: 50,
                y: 50
            }, {
                x: 100,
                y: 100
            }]
        }
    });
});
