Ext.require(['Ext.grid.*', 'Ext.data.*']);

Ext.onReady(function(){

    // sample static data for the store
    var myData = [['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'], ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'], ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am']];
    
    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [{
            name: 'company'
        }, {
            name: 'price',
            type: 'float'
        }],
        data: myData
    });
    
    function getColumns(which){
        if (which) {
            return [{
                text: 'Company',
                flex: 1,
                sortable: false,
                dataIndex: 'company',
                field: {
                    xtype: 'textfield'
                }
            }];
        } else {
            return [{
                flex: 1,
                text: 'Price',
                width: 75,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price',
                field: {
                    xtype: 'numberfield'
                }
            }];
        }
    }
    
    var editing = Ext.create('Ext.grid.plugin.CellEditing');
    
    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: getColumns(true),
        plugins: [editing],
        height: 100,
        width: 600,
        renderTo: document.body
    });
    
    
    
    Ext.create('Ext.button.Button', {
        text: 'reconfigure',
        renderTo: document.body,
        handler: function(){
            grid.reconfigure(null, getColumns());
        }
    });
});
