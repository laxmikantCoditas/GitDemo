Ext.require(['Ext.grid.Panel', 'Ext.data.*', 'Ext.window.Window']);
Ext.onReady(function() {

    new Ext.window.Window({
        autoShow: true,
        title: 'Hello',
        height: 200,
        width: 400,
        layout: 'fit',
        items: [{
            xtype: 'grid',
            store: {
                fields: ['name', 'email', 'phone'],
                data: [{
                    name: 'Lisa',
                    email: 'lisa@simpsons.com',
                    phone: '555-111-1224'
                }, {
                    name: 'Bart',
                    email: 'bart@simpsons.com',
                    phone: '555-222-1234'
                }]
            },
            columns: [{
                header: 'Name',
                dataIndex: 'name',
                field: 'textfield'
            }, {
                header: 'Email',
                dataIndex: 'email',
                flex: 1,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }, {
                header: 'Phone',
                dataIndex: 'phone'
            }],
            selType: 'cellmodel',
            plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })],
            height: 200,
            width: 400
        }]
    });
});
