Ext.define('App.model.ChartValue', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'timestamp', type: 'int'},
			{name: 'value', type: 'int'}
		]
	}
});