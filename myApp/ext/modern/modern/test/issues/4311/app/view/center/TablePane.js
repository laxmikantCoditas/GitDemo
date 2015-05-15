Ext.define('YelpExtplorer.view.center.TablePane', {
	extend: 'YelpExtplorer.view.center.touchtable.TouchTable',
	xtype: 'tablepane',

	config: {
		title: 'Table',
		defaults: {
			store: Ext.getStore('ColumbiaBusinesses'),
			columns: [
			{
				columnTitle: 'name',
				dataIndex: 'name',
				width: '30%'
			}, {
				columnTitle: 'rating',
				dataIndex: 'avg_rating',
				width: '10%'
			}, {
				columnTitle: 'reviews',
				dataIndex: 'review_count',
				width: '10%'
			}, {
				columnTitle: 'categories',
				dataIndex: 'categories',
				width: '50%'
			} ]
		}
	}
});
