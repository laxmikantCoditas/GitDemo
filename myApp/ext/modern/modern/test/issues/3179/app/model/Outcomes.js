Ext.define('TC.model.Outcomes', {
	extend: 'Ext.data.Model',

	config: {

		idProperty: 'lid',
		identifier: 'uuid',

		fields: [{
			name: 'lid'
		}, {
			name: 'id'
		}, {
			name: 'value',
			type: 'int'
		}]
	}

});