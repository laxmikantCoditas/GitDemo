Ext.define("Thing", {
    extend: "Ext.data.Model",
    fields: [{
        name: 'ID'
    }, {
        name: 'EmployeeStatusTypeName'
    }, {
        name: 'Name',
        sortType: 'asUCText'
    }, {
        name: 'PayGroupId'
    }, {
        name: 'PayGroupName'
    }]
});

Ext.onReady(function(){
    var store = Ext.create('Ext.data.Store', {
        model: 'Thing',
        data: [{
            "ID": 86146,
            "EmployeeStatusTypeName": "Active",
            "Name": "employee 17 with group c",
            "PayGroupName": "c"
        }, {
            "ID": 52402,
            "EmployeeStatusTypeName": "Active",
            "Name": "employee 2 with group a",
            "PayGroupName": "a"
        }, {
            "ID": 52400,
            "EmployeeStatusTypeName": "Active",
            "Name": "employee 1 with group a",
            "PayGroupName": "a"
        }, {
            "ID": 52401,
            "EmployeeStatusTypeName": "Active",
            "Name": "employee 22 with group b",
            "PayGroupName": "b"
        }]
    });
    
    var personnelAddGrid = Ext.create('Ext.grid.Panel', {
        multiSelect: true,
        store: store,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns: [{
            text: "Name",
            dataIndex: 'Name',
            flex: 1
        }, {
            text: "Pay Group",
            dataIndex: 'PayGroupName',
            flex: 1
        }],
        height: 300,
        width: 600,
        features: [Ext.create('Ext.grid.feature.Grouping', {
            groupHeaderTpl: 'Pay Group: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        })],
        renderTo: document.body
    });
    personnelAddGrid.getView().on('refresh', function(){
        console.log('rf');
    });
});
