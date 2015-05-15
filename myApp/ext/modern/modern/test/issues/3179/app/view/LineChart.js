Ext.define('TC.view.LineChart', {
	xtype: 'linechart',
	extend: 'Ext.chart.CartesianChart',

	requires: [
		'Ext.util.Format',
		'Ext.chart.axis.Time',
		'Ext.chart.series.Bar',
		'Ext.chart.interactions.PanZoom'
		],

	config: {
		store: 'ChartCountsSvr',

		// themeCls: 'line1',
		// theme: 'XentorOrange',

//		width: 500,
		// height: 500,

        innerPadding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
        },
        interactions: [
            {
                type: 'panzoom',
                axes: {
                    "left": {
                        allowPan: false,
                        allowZoom: false
                    },
                    "bottom": {
                        allowPan: true,
                        allowZoom: true
                    }
                }
            }
        ],
        series: [
            {
                type: 'bar',
                xField: 'evDate',
                yField: 'score',
                style: {
                    fill: 'rgba(143,203,203,0.5)',
                    stroke: 'rgba(143,203,203,1)',
                    maxBarWidth: 30,
                    lineJoin: 'miter',
                    miterLimit: 3,
                    lineWidth: 2
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['score'],
                minimum: 0,
                maximum: 30,
                label: {
                    rotate: {
                        degrees: -30
                    }
                }
            },
            {
                type: 'time',
                position: 'bottom',
                fields: 'evDate',
                dateFormat: 'M',

                // visibleRange: [0, 0.5],
                style: {
                    labelInSpan: false,
                    axisLine: false
                }
            }
        ]


	}
});