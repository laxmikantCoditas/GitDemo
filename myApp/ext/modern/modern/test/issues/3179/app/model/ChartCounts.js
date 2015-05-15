Ext.define('TC.model.ChartCounts', {
	extend: 'Ext.data.Model',
	
	config: {
		idProperty: 'lid',
		identifier: 'uuid',
		//        fields: ['name', 'data1', 'data2', 'data3', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 'iphone', 'android', 'ipad'],
		fields: [{
			name: 'lid',
			type: 'string'
		}, {
			name: 'id'
		}, {
			name: 'personId',
			type: 'int'
		}, {
			name: 'score',
			type: 'float'
		}, {
			name: 'evDate',
			type: 'date',
			dateFormat: 'MS'
		}]
	}

});
