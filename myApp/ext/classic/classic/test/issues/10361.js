Ext.onReady(function () {
    var store = Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['name', 'seniority', 'department'],
        groupField: 'department',
        groupDir: 'DESC',
        data: {'employees': [
            { "name": "Michael Scott", "seniority": 7, "department": "Management" },
            { "name": "Dwight Schrute", "seniority": 2, "department": "Sales" },
            { "name": "Jim Halpert", "seniority": 3, "department": "Sales" },
            { "name": "Kevin Malone", "seniority": 4, "department": "Accounting" },
            { "name": "Angela Martin", "seniority": 5, "department": "Accounting" }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'employees'
            }
        }
    });

    var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {

    });

    var mygrid=    Ext.create('Ext.grid.Panel', {
        title: 'Employees',
        store: Ext.data.StoreManager.lookup('employeeStore'),
        columns: [
            { text: 'Name', dataIndex: 'name' },
            { text: 'Seniority', dataIndex: 'seniority' },
            { text: 'Department', dataIndex: 'department' }


        ],
        features: [groupingFeature],
        width: 400,
        height: 275,
        renderTo: Ext.getBody(),
        tbar: [
            { xtype: 'button', text: 'enable ',
                handler: function(me,ev){
                    groupingFeature.enable();
                }},
            { xtype: 'button', text: 'disable ',
                handler: function(me,ev){
                    groupingFeature.disable();
                }}

        ]
    });
});