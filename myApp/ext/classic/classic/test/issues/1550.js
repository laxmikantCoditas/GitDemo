Ext.require(['*']);
Ext.onReady(function() {
    Ext.regModel('testModel', {
        fields: ['x']
    });
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            xtype: 'toolbar',
            items: [{
                text: 'Show Tab',
                handler: function() {
                    var panel = Ext.getCmp('tabPanel');
                    panel.add({
                        xtype: 'panel',
                        id: 'panel1',
                        title: 'Tab 1',
                        layout: {
                            type: 'card'
                        },
                        activeItem: 'gridCard1',
                        dockedItems: [{
                            dock: 'top',
                            xtype: 'toolbar',
                            items: [{
                                text: 'Show Grid 1',
                                handler: function() {
                                    var panel = Ext.getCmp('panel1');
                                    panel.getLayout().setActiveItem('gridCard1');
                                }
                            },
                            {
                                text: 'Show Grid 2',
                                handler: function() {
                                    var panel = Ext.getCmp('panel1');
                                    panel.getLayout().setActiveItem('gridCard2');
                                }
                            }]
                        }],
                        items: [{
                            xtype: 'container',
                            id: 'gridCard1',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: 5
                            },
                            items: {
                                xtype: 'grid',
                                flex: 1,
                                columns: [{
                                    text: 'column 1',
                                    dataIndex: 'x'
                                }],
                                store: Ext.create('Ext.data.Store', {
                                    model: 'testModel',
                                    data: [{
                                        x: 1
                                    },
                                    {
                                        x: 2
                                    },
                                    {
                                        x: 3
                                    }]
                                })
                            }
                        },
                        {
                            xtype: 'container',
                            id: 'gridCard2',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                padding: 5
                            },
                            items: {
                                xtype: 'grid',
                                flex: 1,
                                columns: [{
                                    text: 'column 1',
                                    dataIndex: 'x'
                                }],
                                store: Ext.create('Ext.data.Store', {
                                    model: 'testModel',
                                    data: [{
                                        x: 4
                                    },
                                    {
                                        x: 5
                                    },
                                    {
                                        x: 6
                                    }]
                                })
                            }
                        }]
                    });
                }
            },
            'Click Show Tab then Show Grid 2']
        },
        {
            xtype: 'tabpanel',
            id: 'tabPanel',
            region: 'center'
        }]
    });
});
