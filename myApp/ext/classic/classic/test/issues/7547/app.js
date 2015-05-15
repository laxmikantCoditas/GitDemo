Ext.Loader.setConfig({
    enabled        : true,
    disableCaching : false,
    paths          : { }
});

Ext.require([
    'Ext.*'
]);

Ext.application({
    name      : 'ACW',
    appFolder : 'app',

    requires : [
        'ACW.Utils'
    ],

    launch: function() {
        // using 4.1.3 nightly: GET http://10.0.0.100/mvc413/ACW/Utils.js 404 (Not Found) 
        // Uncaught Error: [Ext.Loader] Failed loading 'ACW/Utils.js', please verify that the file exists 
        ACW.Utils.displayToConsole();
    },

    autoCreateViewport : true // Viewport.js

});

