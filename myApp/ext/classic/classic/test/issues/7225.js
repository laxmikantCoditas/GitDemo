Ext.require('*');
Ext.onReady(function() {
    Ext.getBody().createChild('<h1 style="margin: 10px;font-size:20px">ForceFit column test - all columns should always fit and data columns should line up.</h1>');
    Ext.create('Ext.grid.Panel', {
        style: 'margin: 20px',
        itemId: 'gridLst',
        forceFit: true,
        width: 1200,
        store: Ext.create('Ext.data.ArrayStore', {
            fields: [
                'a','b','c','d','e','f','g','h'
            ],
            data: [
                ['999','999','999','999','999','999','999','999'],
                ['999','999','999','999','999','999','999','999'],
                ['999','999','999','999','999','999','999','999'],
                ['999','999','999','999','999','999','999','999']
            ],
            autoLoad : true
        }),
        columns: [
            {dataIndex: 'a',header: 'Column Sequence A'},
            {dataIndex: 'b',header: 'Column Sequence B'},
            {dataIndex: 'c',header: 'Column Sequence C'},
            {dataIndex: 'd',header: 'Column Sequence D'},
            {dataIndex: 'e',header: 'Column Sequence E'},
            {dataIndex: 'f',header: 'Column Sequence F'},
            {dataIndex: 'g',header: 'Column Sequence G'},
            {dataIndex: 'h',header: 'Column Sequence H'}
        ],
        renderTo: document.body
    });
});