Ext.define('TC.store.ChartCountsSvr', {
	extend: 'Ext.data.Store',
	requires: 'TC.model.ChartCounts',

	config: {
		// id: 'ChartCountsSvr',
		model: 'TC.model.ChartCounts',

		proxy: {
			type: 'ajax',

			url: 'ChartCounts.json',

			reader: {
				type: 'json',
				rootProperty: 'data'
			},
			extraParams: {
				personId: 0
			}
		},

		autoLoad: false
	}
});
