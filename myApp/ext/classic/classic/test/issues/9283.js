Ext.require('*');

Ext.define('My.Model', {
    extend : 'Ext.data.Model',

    idProperty : 'id',
    fields     : [
        {
            type : 'int', name : 'id'
        },
        {
            type : 'string', name : 'text'
        },
        {
            type : 'string', name : 'iconCls'
        }
    ],
    proxy      : {
        type : 'ajax',
        url  : '9283.json'
    }
});

Ext.define('My.Store', {
    extend : 'Ext.data.TreeStore',

    model : 'My.Model',
    root  : {
        id       : 1,
        text     : 'Root',
        iconCls  : 'custom',
        expanded : true
    }
});

Ext.onReady(function() {

    Ext.create('Ext.tree.Panel', {
        renderTo    : Ext.getBody(),
        width       : 200,
        height      : 400,
        title       : 'Tree with custom icons',
        store       : Ext.create('My.Store'),
        dockedItems : [
            {
                xtype : 'toolbar',
                dock  : 'top',
                items : [
                    {
                        text    : 'Reload Store',
                        handler : function (button) {
                            var tree = button.up('treepanel'),
                                store = tree.getStore(),
                                proxy = store.getProxy();

                            proxy.url = '9283-1.json';
                            store.load();
                        }
                    }
                ]
            }
        ]
    });

    Ext.create('Ext.Component', {
        renderTo : Ext.getBody(),
        html     : 'Click the Reload Store button, all nodes should be expanded on load'
    });

});