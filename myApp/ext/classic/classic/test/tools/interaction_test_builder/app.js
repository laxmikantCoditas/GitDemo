Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'Qa.Tester',
    // Define all the controllers that should initialize at boot up of your application
    controllers: [
        'Qa.Tester.controller.Core'
    ],
    
    autoCreateViewport: true
});

if (window.Ion) {
   Ion.app.appWindow.maximize();
   Ion.app.appWindow.show();
}