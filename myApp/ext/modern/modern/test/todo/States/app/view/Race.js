Ext.define("StatesMVC.view.Race", {
    extend: 'Ext.chart.Polar',
    requires: ['Ext.chart.series.Pie'],
    config: {
        animate: true,
        shadow: false,
        store: "PieStore",
        title: 'Race Distribution',
        interactions: [
            'rotate'
        ],
        series: [
            {
                type: 'pie',
                donut: 15,
                field: 'value',
                highlight: false,
                colorSet: ['rgb(8, 69, 148)',
                    'rgb(33, 113, 181)',
                    'rgb(66, 146, 198)',
                    'rgb(107, 174, 214)',
                    'rgb(158, 202, 225)',
                    'rgb(198, 219, 239)',
                    'rgb(222, 235, 247)'],
                listeners: {
                    'labelOverflow': function (label, item) {
                        item.useCallout = true;
                    }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true
                }
            }
        ]
    }
});