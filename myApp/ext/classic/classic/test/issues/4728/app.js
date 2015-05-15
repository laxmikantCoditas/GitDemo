Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'Example',

	autoCreateViewport: true, // Automatically load and instantiate Example.view.Viewport before firing the launch function

	controllers: ['PersonList'],
	stores: ['Person'],
	models: ['Person'],

	launch: function () {
		Ext.QuickTips.init();

		this.fireEvent('applicationLaunched');
	}

});
