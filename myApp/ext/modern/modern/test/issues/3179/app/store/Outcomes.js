Ext.define('TC.store.Outcomes', {
	extend: 'Ext.data.Store',
	requires: [
		'TC.model.Outcomes'
	],

	config: {
		model: 'TC.model.Outcomes',
 
		proxy: {
			type: 'localstorage',
			id: 'outcomes'
		}

	}
});