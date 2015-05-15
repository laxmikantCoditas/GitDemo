Ext.application({
    name: 'Sencha',
    requires:['Main'],
    launch: function() {
        Ext.create('Main');
    }
});