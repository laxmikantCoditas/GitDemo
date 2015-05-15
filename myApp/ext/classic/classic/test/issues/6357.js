Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.tree.*'
]);

Ext.onReady(function() {
    Ext.define('Task', {
        extend: 'Ext.data.Model',
        idProperty : 'id',
        fields: [
            {name: 'id',     type: 'int'},
            {name: 'task',     type: 'string'},
            {name: 'duration', type: 'string'}
        ]
    });

    var store = Ext.create('Ext.data.TreeStore', {
        model: 'Task',
        proxy: {
            type: 'ajax',
            //the store will get the content from the .json file
            actionMethods : { read : 'GET', create : 'GET' },
            api : { create : 'treegrid.json', read : 'treegrid.json' }
        },
        root : {
        }
    });

    // Snapshot before wiring up to tree panel
    var listeners = Ext.apply({}, store.hasListeners);
        
    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        width: 250,
        height: 300,
        renderTo: document.body
    });
    
    tree.destroy();

    for (var o in store.hasListeners) {
        if (listeners[o] !== store.hasListeners[o]) {
            console.log('Found: ' + o + ' : ' + store.hasListeners[o]);
        }
    }
});