Ext.require('Ext.*');

Ext.onReady(function() {
    Ext.QuickTips.init();

    // sample static data for the store
    var myData = [
        ['3m Co',  true],
        ['Alcoa Inc',  false]
    ];


    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
    
    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'closed',      type: 'boolean'}
        ],
        data: myData
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'company',
                field: {
                    xtype: 'textfield'
                }
            },
            {
                text     : 'Closed',
                width    : 75,
                sortable : true,
                dataIndex: 'closed',
                xtype: 'booleancolumn',
                trueText: 'Yes',
                falseText: 'No',
                field: {
                  xtype: 'checkbox'
                }
            }
        ],
        height: 350,
        width: 600,
        title: 'Array Grid',
        renderTo: Ext.getBody(),
        viewConfig: {
            stripeRows: true
        },
        plugins: [cellEditing]
    });
    
});