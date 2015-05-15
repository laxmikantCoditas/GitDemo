Ext.onReady(function () {
    var store = Ext.create('Ext.data.Store', {
        fields : ['name', 'email', 'phone'],
        data   : {
            'items' : [
                {
                    'name'  : 'Lisa',
                    "email" : "lisa@simpsons.com",
                    "phone" : "555-111-1224"
                },
                {
                    'name'  : 'Bart',
                    "email" : "bart@simpsons.com",
                    "phone" : "555-222-1234"
                },
                {
                    'name'  : 'Homer',
                    "email" : "home@simpsons.com",
                    "phone" : "555-222-1244"
                },
                {
                    'name'  : 'Marge',
                    "email" : "marge@simpsons.com",
                    "phone" : "555-222-1254"
                }
            ]
        },
        proxy  : {
            type   : 'memory',
            reader : {
                type : 'json',
                root : 'items'
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title    : 'Simpsons',
        store    : store,
        height   : 200,
        width    : 400,
        renderTo : 'grid',

        dockedItems : [
            {
                xtype  : 'toolbar',
                docked : 'top',
                items  : [
                    {
                        text    : 'Remove Selected Record',
                        handler : function (btn) {
                            var sel = grid.getSelectionModel().getSelection();
                            grid.getStore().remove(sel);
                        }
                    },

                    '->',
                    {
                        text    : 'Undo Changes',
                        handler : function (btn) {
                            try {
                                store.rejectChanges();
                            }
                            catch (e) {
                                alert(e);
                            }
                        }
                    }
                ]
            }
        ],

        columns : [
            {
                text      : 'Name',
                dataIndex : 'name'
            },
            {
                text      : 'Email',
                dataIndex : 'email',
                flex      : 1
            },
            {
                text      : 'Phone',
                dataIndex : 'phone'
            }
        ]
    });
});