var performs = new Object();

Ext.Loader.setConfig({
	enabled:true
});




		new Ext.application({
		name: 'performs',
		appFolder: 'app',

		controllers: [
			'SettingsController'
		],


		launch: function()
		{
			console.log('launched');


		}


});













