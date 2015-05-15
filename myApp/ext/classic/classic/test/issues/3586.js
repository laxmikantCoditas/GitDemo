Ext.onReady(function(){

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west',
            width: 300,
            title: 'West',
            xtype: 'treepanel',
            root: {
                text: 'A node'
            }
        }, {
            xtype: 'tabpanel',
            region: 'center',
            items: {
                title: 'Put mouse on the left edge of the first column, it will trigger a drag of the tree column',
                xtype: 'gridpanel',
                store: {
                    fields: ['f1', 'f2'],
                    data: [{
                        f1: 1,
                        f2: 2
                    }, {
                        f1: 3,
                        f2: 4
                    }, {
                        f1: 5,
                        f2: 6
                    }, {
                        f1: 7,
                        f2: 8
                    }]
                },
                columns: [{
                    dataIndex: 'f1',
                    header: 'F1'
                }, {
                    dataIndex: 'f2',
                    header: 'F2'
                }]
            }
        }]
    });

});