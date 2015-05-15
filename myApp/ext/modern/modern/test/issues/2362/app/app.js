/**
 * Created by Ilya Ilievski.
 */




Ext.Loader.setConfig({ enabled: true });

Ext.application({

    name    : 'Bugs',
    views   : ['Main'],
    models  : ['User'],
    stores  : ['Users'],

    launch: function() {
        Ext.Viewport.add({xclass:'Bugs.view.Main'});
    }
});