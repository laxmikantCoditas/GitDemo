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
    { text: 'Name', width:50, dataIndex: 'name' },
    { text: 'Col1', width:50, dataIndex: 'column1' },
    { text: 'Col2', width:50, dataIndex: 'column2' }
];

var config = {
    layout:'hbox',
    items:[
        {layout:'auto', bodyPadding:5, title:'cols > width (scrollX)', items:getConfigFixed()},
        {layout:'auto', bodyPadding:5, title:'width > cols', items:getConfig()},
        {layout:'auto', bodyPadding:5, title:'flex width', items:getConfigFlex()}
    ]
};

function getConfig(){
    return [
        { xtype:'grid', title:'auto height', store: store, width: 50*3 + 10, columns: columns },
        { xtype:'grid', title:'height > rows', store: store, height: 265, width: 50*3 + 10, columns: columns },
        { xtype:'grid', title:'rows > height', store: store, height: 100, width: 50*3 + 10, columns: columns }
    ];
}

function getConfigFixed(){
    return [
        { xtype:'grid', title:'auto height', store: store, width: 50*3 - 10, columns: columns },
        { xtype:'grid', title:'height > rows', store: store, height: 265, width: 50*3 - 10, columns: columns },
        { xtype:'grid', title:'rows > height', store: store, height: 100, width: 50*3 - 10, columns: columns }
    ];
}

function getConfigFlex(){
    var columns = [
        { text: 'Flex', flex:1, dataIndex: 'name' },
        { text: 'Col1', width:50, dataIndex: 'column1' },
        { text: 'Col2', width:50, dataIndex: 'column2' }
    ];

    return [
        { xtype:'grid', title:'auto height', store: store, width: 50*3 + 10, columns: columns },
        { xtype:'grid', title:'height > rows', store: store, height: 265, width: 50*3 + 10, columns: columns },
        { xtype:'grid', title:'rows > height', store: store, height: 100, width: 50*3 + 10, columns: columns }
    ];
}
