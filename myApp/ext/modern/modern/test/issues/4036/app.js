Ext.application({
	name: 'App',
	models: ['ChartValue'],
	views: ['MainPanel', 'ChartPanel', 'Sparkline'],
	launch: function() {
		Ext.create('App.view.MainPanel', {
			fullscreen: true
		});
	}
});