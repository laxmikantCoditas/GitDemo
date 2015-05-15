Ext.require(['Ext.grid.*', 'Ext.data.*', 'Ext.dd.*']);

Ext.define('DataObject', {
    extend: 'Ext.data.Model',
    fields: ['text', 'column1', 'column2']
});

Ext.onReady(function() {

    // create the data store
    var firstGridStore = Ext.create('Ext.data.Store', {
        model: 'DataObject',
        data: [{
            text: "Rec 0",
            column1: "0",
            column2: "0"
        }, {
            text: "Rec 1",
            column1: "1",
            column2: "1"
        }]
    });

    // declare the source Grid
    var firstGrid = Ext.create('Ext.grid.Panel', {
        viewConfig: {
            plugins: {
                ptype: 'gridviewdragdrop',
                ddGroup: 'selDD'
            }
        },
        store: firstGridStore,
        columns: [{
            text: "Record Name",
            flex: 1,
            dataIndex: 'text'
        }, {
            text: "column1",
            width: 70,
            dataIndex: 'column1'
        }, {
            text: "column2",
            width: 70,
            dataIndex: 'column2'
        }]
    });

    var secondTreeStore = Ext.create('Ext.data.TreeStore', {
        model: 'DataObject',
        root: {
            text: 'Tree Root',
            expanded: true,
            children: [{
                text: "detention",
                leaf: true
            }, {
                text: "homework",
                expanded: true,
                children: [{
                    text: "book report",
                    leaf: true
                }, {
                    text: "alegrbra",
                    leaf: true
                }]
            }, {
                text: "buy lottery tickets",
                leaf: true
            }]
        }
    });

    // create the destination Grid
    var secondTree = Ext.create('Ext.tree.Panel', {
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                ddGroup: 'selDD'
            }
        },
        store: secondTreeStore
    });

    //Simple 'border layout' panel to house both grids
    var displayPanel = Ext.create('Ext.Panel', {
        width: 650,
        height: 300,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        renderTo: document.body,
        defaults: {
            flex: 1
        }, //auto stretch
        items: [firstGrid, secondTree]
    });
});
