var data = [
    ['Record 0', 0, -9],
    ['Record 1', 1, -8],
    ['Record 2', 2, -7],
    ['Record 3', 3, -6],
    ['Record 4', 4, -5],
    ['Record 5', 5, -4],
    ['Record 6', 6, -3],
    ['Record 7', 7, -2],
    ['Record 8', 8, -1],
    ['Record 9', 9, -0]
];

var store = Ext.create('Ext.data.ArrayStore', {
    data: data,
    fields: [
       {name: 'name'},
       {name: 'column1', type: 'float'},
       {name: 'column2', type: 'float'}
    ]
});

var columns = [
    { text: 'Name', width:100, dataIndex: 'name' },
    { text: 'Col1', width:100, dataIndex: 'column1' },
    { text: 'Col2', width:100, dataIndex: 'column2' }
];

var config = { xtype:'grid', margin:10, store: store, width: 100*3 + 2, columns: columns };

function afterrender(){
    var me = this,
        viewEl = me.down('gridview').el,
        cellInnerSelector = me.query('gridcolumn')[0].getCellInnerSelector().split(' ').slice(1)[0];
    
    var notEmptyRegExp = /[^\s]/;
    
    setTimeout(function(){
        Ext.Array.map(viewEl.query('td > *, td'), function(cell){
            if (!notEmptyRegExp.test(cell.innerText || cell.textContent)) {
                console.log(cell)
                throw Error('FAIL: Some cells are empty');
            }
        })
        console.log('PASS: Cells are empty')
    },0);
}

