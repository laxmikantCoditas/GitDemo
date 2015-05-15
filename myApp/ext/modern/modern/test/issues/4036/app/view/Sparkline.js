Ext.define('App.view.Sparkline', {
	extend: 'Ext.Panel',
	requires: ['Ext.data.Store',
			   'Ext.chart.CartesianChart',
			   'App.model.ChartValue'],

    maxValue: 10,

	initialize: function () {
		this.callParent();

		var store = Ext.create('Ext.data.Store', {
			model: 'App.model.ChartValue',
			proxy: {
				type: 'memory'
			}
		});

		this.generateData(store);

		var dashboardChart = Ext.create('Ext.chart.CartesianChart', {
		    id: "myChart",
			store: store,
			shadow: false,
			animate: false,
			border: 2,
            innerPadding: 10,
			style: 'border-color: white; border-style: solid',
			legend: false,
			insetPadding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			},
			series: [{
				type: 'line',
				fill: true,
				smooth: false,
				xField: 'timestamp',
				yField: 'value',
				style: {
        				stroke: 'blue',
        				fill: 'blue',
        				lineWidth: 1,
        				opacity: 1.0
        			}
			}],
			axes: [{
                type: 'numeric',
                position: 'left',
                title: 'Value',
                minimum: 0,
                maximum: this.maxValue
            }, {
                type: 'category',
                position: 'bottom',
                title: 'Category',
                minimum: 0,
                maximum: window.CHART_RECORD_COUNT - 1
			}],
			legend: (window.CHART_LEGEND ? {position:'bottom'} : null)
		}); 
	    this.add(dashboardChart);
	},

    destroy: function() {
        var me = this,
            chart = me.down("#myChart"),
            store = chart.getStore();
        store.destroy();
        me.remove(chart, true);
        me.callParent(arguments);
    },

	config: {
		layout: 'fit'
	},

	generateData: function(store) {
	    var recordCount = window.CHART_RECORD_COUNT;
		for (var i = 0; i < recordCount; i++) {
			var record = Ext.create('App.model.ChartValue', {
					timestamp: i,
					value: Math.round(Math.random() * this.maxValue)
				});
			store.add(record);
		}
	}
});