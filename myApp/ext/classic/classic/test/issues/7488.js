Ext.onReady(function() {
    Ext.define('TestModel', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'field1'},
            {name: 'field2'},
            {name: 'field3'},
            {name: 'field4'},
            {name: 'field5'}
        ]
    });

    var data = [];
    for(var i = 0; i<500;i++){
        data.push([0, 1, 2, 3, 4]);
    }

    var store = Ext.create('Ext.data.ArrayStore', {
        model: 'TestModel',
        data: data
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {
                text     : 'Column1',
                flex     : 1,
                dataIndex: 'field1'
            },
            {
                text     : 'Column2',
                flex     : 1,
                dataIndex: 'field2'
            },
            {
                text     : 'Column3',
                flex     : 1,
                dataIndex: 'field3'
            },
            {
                text     : 'Column4',
                flex     : 1,
                dataIndex: 'field4'
            },
            {
                text     : 'Column5',
                flex     : 1,
                dataIndex: 'field5'
            }
        ],
        height: 300,
        width: 600,
        renderTo: Ext.getBody()
    });

    Ext.create("Ext.button.Button", {
        text: "Menu",
        renderTo: Ext.getBody(),
        menu :[
            {
                text: "Item1"
            },
            {
                text: "Item2"
            },
            {
                text: "Item3"
            },
            {
                text: "Item4"
            },
            {
                text: "Item5"
            }
        ]
    });
});