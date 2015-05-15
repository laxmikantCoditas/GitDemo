Ext.onReady(function () {

    //Flat list store with no grouping. 
    var flatListStore = Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['name', 'seniority', 'department'],
        data: [{
            name: 'vignesh',
            seniority: 'tier4',
            department: 'delivery'
        }, {
            name: 'murali',
            seniority: 'tier4',
            department: 'delivery'
        }, {
            name: 'vasanth',
            seniority: 'tier4',
            department: 'delivery'
        }]
    });

    //my grid panel
    var myGrid = Ext.create('Ext.grid.Panel', {
        title: 'Employees',
        id: 'emp_grid',
        store: flatListStore,
        columns: [{
            text: 'Name',
            dataIndex: 'name'
        }, {
            text: 'Seniority',
            dataIndex: 'seniority'
        }],
        features: [{
            ftype: 'grouping',
            groupHeaderTpl: new Ext.XTemplate(
                '<tpl>{[this.selectGroupHeaderName(values)]}</tpl>', {
                    selectGroupHeaderName: function (values) {
                        return values.name;
                    }
                })
        }],
        width: 200,
        height: 275,
        bbar: [{
            xtype: 'button',
            text: 'Group by department',
            listeners: {
                click: function () {
                    var departmentStore = Ext.create('Ext.data.Store', {
                        storeId: 'departmentViewStore',
                        groupField: 'department',
                        fields: ['name', 'seniority', 'department'],
                        data: [{
                            name: 'vignesh',
                            seniority: 'tier4',
                            department: 'delivery'
                        }, {
                            name: 'murali',
                            seniority: 'tier4',
                            department: 'delivery'
                        }, {
                            name: 'vasanth',
                            seniority: 'tier4',
                            department: 'delivery'
                        }]
                    });
                    Ext.getCmp('emp_grid').reconfigure(departmentStore);
                    Ext.getCmp('emp_grid').getView().refresh();
                }
            }
        }],
        renderTo: Ext.getBody()
    });

});
