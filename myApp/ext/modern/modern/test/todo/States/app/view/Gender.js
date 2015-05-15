Ext.define("StatesMVC.view.Gender", {
    extend: 'Ext.chart.CartesianChart',
    config: {
        animate: true,
        shadow: false,
        showInLegend: true,
        store: "PyramidStore",
        title: 'Gender Distribution',
        legend: {
            position: {
                portrait: 'bottom',
                landscape: 'bottom'
            }
        },
        series: [
            {
                type: 'pyramid',
                field1: 'female',
                field2: 'male',
                label: {
                    field: 'name',
                    display: 'rotate'
                }
            }
        ]
    }
});