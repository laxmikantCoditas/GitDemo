Ext.define('YelpExtplorer.controller.SearchController', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			'leftpane dataview': {
				select: 'onCategorySelect'
			}
		}
	},

	defaultCountry : '',
	category : 'restaurants',

	onCategorySelect : function ( dataview, record ) {
		var category = record.raw.category;

		if ( category ) {
			this.category = category;
			this.fetchData();
		}
		return true;
	},

	fetchData : function () {
		// console.group( arguments.callee.displayName, YeAppSettings.locationString );
		var store = Ext.getStore( 'ColumbiaBusinesses' );

		var locationString = YeAppSettings.locationString; // 'Columbia';

		// console.log( arguments.callee.displayName, store ); 
		store.fetchStoreData( this, locationString );
		// console.groupEnd();
	},
	
	launch: function(application) {
		// console.log(arguments.callee.displayName);
		this.callParent(arguments);
		this.fetchData(); // SearchControllerShared
	}
});
