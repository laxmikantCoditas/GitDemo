Ext.require('Ext.grid.*');

Ext.onReady(function() {
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        height: 100,
        title: 'Users',
        store: {
            fields: ['name', 'email', 'phone'],
            proxy: {
                type: 'ajax',
                url : 'users.json'
            },
            autoLoad: true
        },
        columns: [
            {header: 'Name',  dataIndex: 'name'},
            {header: 'Email', dataIndex: 'email'},
            {header: 'Phone', dataIndex: 'phone'}
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        height: 100,
        title: 'Users',
        store: {
            fields: ['name', 'email', 'phone'],
            proxy: {
                type: 'ajax',
                url : 'users.json'
            },
            autoLoad: true
        },
        columns: [
            {
                header: 'Name',
                dataIndex: 'name',
                sortable: false,
                hideable: false,
                flex: 1
            },
            {
                header: 'Email',
                dataIndex: 'email',
                hidden: true
            },
            {
                header: 'Phone',
                dataIndex: 'phone',
                width: 100
            }
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        height: 100,
        title: 'Users',
        store: {
            fields: ['name', 'email', 'phone'],
            proxy: {
                type: 'ajax',
                url : 'users.json'
            },
            autoLoad: true
        },
        columns: [
            {header: 'Name',  dataIndex: 'name'},
            {
                header: 'Email', 
                dataIndex: 'email',
                renderer: function(value) {
                    return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
                }
            },
            {header: 'Phone', dataIndex: 'phone'}
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        selType: 'cellmodel',
        width: 500,
        height: 100,
        title: 'Users',
        store: {
            fields: ['name', 'email', 'phone'],
            proxy: {
                type: 'ajax',
                url : 'users.json'
            },
            autoLoad: true
        },
        columns: [
            {
                header: 'Name',
                dataIndex: 'name',
                field: 'textfield'
            },
            {
                header: 'Email',
                dataIndex: 'email',
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Phone', dataIndex: 'phone'}
        ],
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        selType: 'rowmodel',
        width: 500,
        height: 100,
        title: 'Users',
        store: {
            fields: ['name', 'email', 'phone'],
            proxy: {
                type: 'ajax',
                url : 'users.json'
            },
            autoLoad: true
        },
        columns: [
            {
                header: 'Name',
                dataIndex: 'name',
                field: {
                    xtype: 'textfield'
                }
            },
            {
                header: 'Email',
                dataIndex: 'email',
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Phone', dataIndex: 'phone'}
        ],
        plugins: [
            Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit: 1
            })
        ]
    });
});