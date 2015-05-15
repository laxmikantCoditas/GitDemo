 Ext.onReady(function () {
    Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone'],
        data:{'items':[
            {"name":"Lisa", "email":"lisa@simpsons.com", "phone":"555-111-1224"},
            {"name":"Bart", "email":"bart@simpsons.com", "phone":"555-222-1234"},
            {"name":"Homer", "email":"home@simpsons.com", "phone":"555-222-1244"},
            {"name":"Marge", "email":"marge@simpsons.com", "phone":"555-222-1254"}
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        columns: [
            {header: 'Name',  dataIndex: 'name', editor: 'textfield'},
            {header: 'Email', dataIndex: 'email', flex:1 },
            {header: 'Phone', dataIndex: 'phone'}
        ],
        selModel: {
            selType: 'checkboxmodel',
            listeners: {
                select: function (sm, record, index) {
                    //sm.view.headerCt.items.getAt(1)
                    /*
                    sm.view.editingPlugin.startEditByPosition({
                        column: 1,
                        row: index
                    });
                    */
                    sm.view.editingPlugin.startEdit(record, sm.view.ownerCt.columns[1]);
                }
            }
        },
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });
});
