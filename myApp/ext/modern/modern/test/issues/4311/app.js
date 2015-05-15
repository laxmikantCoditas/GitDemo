Ext.Loader.setConfig( {
	enabled : true
} );

Ext.application( {
	name : 'YelpExtplorer',
	requires : ['YelpExtplorer.AppSettings',
	            'Ext.dataview.DataView'
	            ], // This must come first

	views : [
		'Viewport'
	],

	controllers : [
		'SearchController'
	],

	launch : function () {
		Ext.create( 'YelpExtplorer.view.Viewport', {fullscreen : true} );
	}
} );
