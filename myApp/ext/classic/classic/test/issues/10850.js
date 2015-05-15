Ext.onReady(function() {

    new Ext.Component({
        renderTo : document.body,
        html     : 'Start editing in the Company column and tab. Should to go the pctChange column but goes to the Change column due to the CellEditing plugin calling the getVisibleHeaderClosestToIndex passing in the index of all the columns not just the visible columns.'
    });

    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit : 1
    });

    var myData = [
        ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'],
        ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
        ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
        ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
        ['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am']
    ];

    var store = Ext.create('Ext.data.ArrayStore', {
        fields : [
            {name : 'company'},
            {name : 'price', type : 'float'},
            {name : 'change', type : 'float'},
            {name : 'pctChange', type : 'float'},
            {name : 'lastChange', type : 'date', dateFormat : 'n/j h:ia'}
        ],
        data   : myData
    });

    var grid = Ext.create('Ext.grid.Panel', {
        store       : store,
        plugins     : [cellEditing],
        columns     : [
            {
                text      : 'Company',
                flex      : 4,
                sortable  : false,
                dataIndex : 'company',
                editor    : 'textfield'
            },
            {
                text      : 'Price',
                flex      : 2,
                sortable  : true,
                hidden    : true,
                dataIndex : 'price',
                editor    : 'textfield'
            },
            {
                text      : 'pctChange',
                flex      : 2,
                sortable  : true,
                dataIndex : 'pctChange',
                editor    : 'textfield'
            },
            {
                text      : 'Change',
                flex      : 2,
                sortable  : true,
                dataIndex : 'change',
                editor    : 'textfield'
            }
        ],
        columnLines : true,
        height      : 350,
        width       : 600,
        title       : 'Array Grid',
        renderTo    : Ext.getBody()
    });

});
