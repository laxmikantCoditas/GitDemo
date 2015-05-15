Ext.require('Ext.data.*');
var store;
Ext.onReady(function() {
    Ext.regModel('spec.User', {
        fields: [
            {name: 'id',   type: 'int'},
            {name: 'name', type: 'string'}
        ]
    });

    store = Ext.create('Ext.data.Store', {
        model: 'spec.User',
        proxy: {
            id: 'lsTest',
            type: 'localstorage'
        }
    });
});