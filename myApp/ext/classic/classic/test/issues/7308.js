Ext.define('MyApp.a.name.space.MyController', {
    extend: 'Ext.app.Controller',

    init: function() {
        alert(Ext.getClassName(this) + ' instance created');
    }
});

Ext.application({
    name: 'MyApp',
    controllers: [ 'MyApp.a.name.space.MyController' ]
});
