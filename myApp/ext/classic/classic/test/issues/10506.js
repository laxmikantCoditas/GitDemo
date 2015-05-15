        Ext.onReady(function() {
            Ext.create('Ext.grid.Panel', {
                title: 'Test',
                height: 150,
                width: 800,
                renderTo: Ext.getBody(),
                store: Ext.create('Ext.data.Store', {
                    fields: ['f1', 'f2', 'f3', 'f4'],
                    proxy: {
                        type: 'memory'
                    },
                    data: [{
                        f1: '1',
                        f2: '2',
                        f3: '3',
                        f4: '4'
                    }]
                }),
                columns: [{
                    text: 'Group Field 1',
                    columns: [{
                        text: 'F1',
                        dataIndex: 'f1'
                    }, {
                        text: 'F2',
                        dataIndex: 'f2'
                    }]
                }, {
                    text: 'Hidden Group Field',
                    hidden: true,
                    columns: [{
                        text: 'F3',
//                        hidden: true,
                        dataIndex: 'f3'
                    }, {
                        text: 'F4',
//                        hidden: true,
                        dataIndex: 'f4'
                    }]
                }]
            });
        });
