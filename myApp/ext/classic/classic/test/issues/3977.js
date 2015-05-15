Ext.onReady( function() {
    var myStore = Ext.create( 'Ext.data.Store', {
        fields: [
            'blah'
        ]
    } );

    Ext.create( 'Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        height: 600,
        width: 1000,
            bodyStyle: {
                padding: 10
            },
            autoScroll: true,
            title: 'Test',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'panel',
                    height: 300,
                    width: 20
                },
                {
                    xtype: 'container',
                    //xtype: 'panel', // works correctly
                    style: {
                        'margin-left': '10px'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'grid',
                            title: 'Blah grid',
                            style: {
                                marginBottom: 5
                            },
                            columns: [
                                {
                                    header: 'blah',
                                    dataIndex: 'blah'
                                }
                            ],
                            store: myStore
                        },
                        {
                            xtype: 'button',
                            text: 'load data',
                            handler: function() {
                                var data = [];
                                for (var i = 0; i< 1000; i++) {
                                    data.push( {
                                        blah: 'dfga'
                                    });
                                }
                                myStore.loadData( data ); 
                            }
                        }
                    ]
                }
            ]
    } );

} );
