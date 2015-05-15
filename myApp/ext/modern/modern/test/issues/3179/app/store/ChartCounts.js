Ext.define('TC.store.ChartCounts', {
	extend: 'Ext.data.Store',
	requires: 'TC.model.ChartCounts',

	config: {
		model: 'TC.model.ChartCounts',

		proxy: {
			type: 'localstorage',
			id: 'ChartCounts12'
		},
	
		autoLoad: false
	}

});
