Ext.require([
    'Ext.data.*',
    'Ext.form.field.Text',
    'Ext.Interaction',
    'Ext.toolbar.Spacer'
]);

/**
 * @application twitter
 * Twitter application which uses the MVC system by `Ed Spencer <ed@sencha.com>`. Very similar to the Touch example (controllers, models + stores
 * are very similar) but with different views
 *
 * This is where you register the application. Some key things to know:
 *  - you must always set the `name` configuration. It automatically sets up a namespace using this name so you can use `twitter.*` for views etc.
 *  - defaultTarget is used when you use this.render in a controller. If you do not set this, it will render to the body which is useless
 *    most of the time
 *  - `defaultUrl` is used when you have URLs configured (in routes.js). your application will automatically go to this URL if one is
 *    not already set
 *  - the `launch` method is called just like `Ext.onReady`, so initiate you main view/viewport in there.
 *
 * Try to keep the application definition as simple as possible. Split all of your controllers/models/stores/views into their own files + directories.
 * Much neater.
 */
Ext.regApplication({
    name: 'twitter',

    defaultTarget   : 'viewport',
    defaultUrl      : 'searches/first',
    autoInitViewport: false,

    launch: function() {
        this.viewport = new twitter.views.Viewport({
            application: this
        });
    }
});
