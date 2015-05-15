Ext.define('TC.store.OutcomesRem', {
	extend: 'Ext.data.Store',
	requires: [
		'TC.model.Outcomes'
	],

	config: {
		model: 'TC.model.Outcomes',
 
		proxy: {
			type: 'ajax',

			// url: 'file1.json',
			url: 'data.svc/GetUText',

			reader: {
				type: 'json',
				rootProperty: 'data'
			}
		},

		autoLoad: false

	}
});