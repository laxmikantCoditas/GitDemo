
var YeAppSettings = {
	locationString : 'Columbia',
};

Ext.define( 'YelpExtplorer.AppSettings', {
		statics : {
			createStore : function createStore$AppSettings() {
				Ext.Loader.require( 'YelpExtplorer.store.ColumbiaBusinesses',
					function callback_require_createStore$AppSettings() {
						Ext.create( 'YelpExtplorer.store.ColumbiaBusinesses',
							{  pageSize : 10,
								filters : { property : 'categories', value : 'Restaurants' }
							}
						);
					}
				)
			}
		}
	},

	function createdFn_define$AppSettings() {
		// console.log( arguments.callee.name );
		this.createStore();
	});
