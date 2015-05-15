Ext.onReady(function () {

    Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone', 'info'],
        data:{'items':[
            {"name":"Lisa", "email":"lisa@simpsons.com", "phone":"555-111-1224", "info": "Foo Bar"},
            {"name":"Bart", "email":"bart@simpsons.com", "phone":"555-222-1234", "info": "Foo Bar"},
            {"name":"Homer", "email":"home@simpsons.com", "phone":"555-222-1244", "info": "Foo Bar"},
            {"name":"Marge", "email":"marge@simpsons.com", "phone":"555-222-1254", "info": "Foo Bar"}
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
        
        viewConfig: {
            getRowClass: function(record, rowIndex, rowParams, store){
                return "grid-panel-row";
            }
        },
        
        columns: [
            {header: 'Name',  dataIndex: 'name', editor: 'textfield'},
            {header: 'Email', dataIndex: 'email', flex:1,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Phone', dataIndex: 'phone'},
            {header: 'Info', width: 200, dataIndex: 'info',
                editor: {
                    xtype: 'textarea',
                    height: 60,
                    allowBlank: false
                }
            }
        ],
        selType: 'cellmodel',
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        height: 400,
        width: 600,
        renderTo: Ext.getBody()
    });

});
