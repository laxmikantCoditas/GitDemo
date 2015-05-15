Ext.application({

    name: 'MyApp',


    controllers: [/*'Sessions'*/],
    // autoCreateViewport: true,
    viewport: {
        autoMaximize: false
    },
    views: ['Viewport'],


    launch: function() {
        Ext.create('MyApp.view.Viewport');
    }


});
