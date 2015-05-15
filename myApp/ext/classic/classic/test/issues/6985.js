Ext.onReady(function() {
    var grid = Ext.create('Ext.grid.Panel', {
        tbar: [{
            text: 'Resize',
            handler: function() {
                grid.headerCt.getHeaderAtIndex(0).setWidth(300);
            }
        }],
        store: {
            fields: ['name', 'email', 'change'],
            data: [{
                name: 'Lisa',
                email: 'lisa@simpsons.com',
                change: 100
            }]
        },
        hideHeaders: true,
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }, {
            header: 'Email',
            dataIndex: 'email',
            flex: 1
        }, {
            header: 'Change',
            dataIndex: 'change'
        }],
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });

});