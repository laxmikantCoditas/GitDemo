Ext.define('App.view.ChartPanel', {
	extend: 'Ext.Container',
	requires: ['App.view.Sparkline'],
	config: {
		layout: 'fit',
		height: 300,
		width: 500,
		margin: 50
	},
    initialize: function(){
		this.setItems(this.buildItems());
		this.callParent();
    },
	buildItems : function(){
		var chartCmp = Ext.create('App.view.Sparkline', {
			itemId: 'chartCmp'
		});
		return [chartCmp];
	},
});