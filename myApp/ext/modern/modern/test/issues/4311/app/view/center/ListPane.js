Ext.define('YelpExtplorer.view.center.ListPane', {
	extend: 'Ext.dataview.List',
	xtype: 'listpane',

	config: {
		title: 'List',
		// itemHeight: 68, // Needed for Touch 2.2.0-b1
		store: 'ColumbiaBusinesses',
		itemTpl: [
			'<div>',
			'    <img src="{rating_img_url_small}"><br/>',
			'    {name}<br/>',
			'    Rating: {avg_rating},',
			'    # Reviews: {review_count}<br/>',
			'    {categories}',
			'</div>'
		]
	}
});
