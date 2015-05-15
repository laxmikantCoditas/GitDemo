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
            {name: 'id',     type: 'int', useNull: true},
            {name: 'task',     type: 'string'},
            {name: 'duration', type: 'string'}
        ]
    });

    store = Ext.create('Ext.data.TreeStore', {
        model: 'Task',
        proxy: {
            type: 'ajax',
            //the store will get the content from the .json file
            actionMethods : { read : 'GET', create : 'GET' },
            api : { create : '6580.json', read : '6580.json' }
        },
        defaultRootId: null,
        root : {
        }
    });

    root = store.getRoot();
    one = new Task({ task : 'foo', duration : 20 });
    two = new Task({ task : 'foo2', duration : 200 });
    store.getRootNode().appendChild(one);
    store.getRootNode().appendChild(two);    
    store.on('write', function() {
        Ext.getBody().createChild('<div>Record 1 in store: ' + (store.getById(1) ? 'YUP' : 'CRAP') + '</div>');
        Ext.getBody().createChild('<div>Record 2 in store: ' + (store.getById(2) ? 'YUP' : 'CRAP') + '</div>');
        Ext.getBody().createChild('<div>Record 1\'s parentId===root\'s id: ' + (store.getById(1).data.parentId === root.id ? 'YUP' : 'CRAP') + '</div>');
    });
    store.sync();

});