Ext.setup({
    onReady: function() {

        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: ['id', 'name', 'email']
            }
        });

        var store = Ext.create('Ext.data.Store', {
            model: 'User',
            storeId: 'Users',
            proxy: {
                type: 'ajax',
                url: 'users.xml',
                reader: {
                    type: 'xml',
                    record: 'user',
                    rootProperty: 'users'
                }
            }
        });

        Ext.Viewport.add([
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Load Empty',
                    handler: function() {
                        store.getProxy().setUrl('users-empty.xml');
                        store.load();
                    }
                }, {
                    xtype: 'button',
                    text: 'Load Full',
                    handler: function() {
                        store.getProxy().setUrl('users.xml');
                        store.load();
                    }
                }, {
                    xtype: 'button',
                    text: 'Load Half',
                    handler: function() {
                        store.getProxy().setUrl('users-half.xml');
                        store.load();
                    }
                }]
            },
            {
                xtype: 'list',
                itemTpl: '{name}: {email}',
                store: 'Users'
            }
        ]);

        store.load();

    }
});

                