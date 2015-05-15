        Ext.onReady(function () {
            Ext.create('Ext.container.Viewport', {
                    layout: 'border',
                    items: [{
                            xtype: 'panel',
                            region: 'center',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [{
                                    xtype: 'panel',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: 'Panel_1'
                                }, {
                                    xtype: 'splitter'
                                }, {
                                    xtype: 'panel',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: 'Panel_2'
                                }
                            ]
                        }
                    ]
                });
        });
