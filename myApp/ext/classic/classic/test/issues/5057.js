Ext.require('*');

Ext.define('OrderWindow', {
    extend: 'Ext.window.Window',

    initComponent: function() {
        var this_window = this;

        Ext.apply(this, {
            layout: 'fit',
            title: 'Order',
            width: 800,
            height: 700,
            resizable: true,
            maximizable: true,
            autoShow: true,
            items: [{
                xtype: 'tabpanel',
                itemId: 'the_tabpanel',
                activeTab: 0,
                items: [{
                    title: 'LANG',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    tbar: [{
                        xtype: 'button',
                        text: 'Refresh'
                    }],
                    items: [{
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        height: 340,
                        defaults: {
                            bodyPadding: 5
                        },
                        items: [{
                            xtype: 'form',
                            title: 'LANG',
                            width: 360,
                            defaults: {
                                xtype: 'displayfield',
                                width: 310,
                                labelWidth: 160
                            },
                            items: [{
                                name: 'order_id',
                                fieldLabel: 'Order-ID'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }, {
                                name: 'test_data',
                                fieldLabel: 'Test Data'
                            }]
                        }, {
                            layout: {
                                type: 'vbox',
                                align: "stretch"
                            },
                            defaults: {
                                xtype: 'panel',
                                flex: 1,
                                bodyPadding: 5
                            },
                            flex: 1,
                            bodyPadding: 0,
                            border: 0,
                            items: [{
                                title: 'LANG',
                                tools: [{
                                    type: 'edit'
                                }]
                            }, {
                                title: 'LANG',
                                tools: [{
                                    type: 'edit'
                                }]
                            }]
                        }, {
                            xtype: 'form',
                            title: 'LANG',
                            width: 250,
                            bodyPadding: '5 10',
                            defaults: {
                                labelWidth: 150
                            },
                            items: [{
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }, {
                                xtype: 'displayfield',
                                name: 'test_data',
                                fieldLabel: 'LANG'
                            }],
                            dockedItems: [{
                                dock: 'bottom',
                                xtype: 'form',
                                title: 'LANG',
                                width: 250,
                                bodyPadding: '5px 10px',
                                defaults: {
                                    width: 200
                                },
                                items: [{
                                    xtype: 'displayfield',
                                    name: 'test_data',
                                    fieldLabel: 'LANG'
                                }, {
                                    xtype: 'displayfield',
                                    name: 'test_data',
                                    fieldLabel: 'LANG'
                                }],
                                bbar: [{
                                    xtype: 'button',
                                    text: 'LANG'
                                }]
                            }]
                        }]
                    }, {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        flex: 1,
                        defaults: {
                            flex: 1,
                            bodyPadding: 5
                        },
                        items: [{
                            title: 'LANG',
                            bbar: [{
                                xtype: 'button',
                                text: 'Done',
                                itemId: 'done_button'
                            }]
                        }, {
                            title: 'LANG',
                            layout: 'fit',
                            bodyPadding: 0,
                            bbar: [{
                                xtype: 'button',
                                text: 'Save Changes'
                            }],
                            items: [{
                                xtype: 'textarea'
                            }]
                        }]
                    }]
                }, {
                    xtype: 'treepanel',
                    title: 'LANG',
                    cls: 'crazy_order_lines',
                    loadMask: {
                        msg: 'Fetching...'
                    },
                    rootVisible: false,
                    multiSelect: true,
                    store: Ext.create('Ext.data.TreeStore', {
                        root: {
                            loaded: true
                        },
                        sorters: [{
                            property: 'INHERENT_SORTING',
                            direction: 'ASC'
                        }],
                        fields: [{
                            name: 'test_data'
                        }]
                    }),
                    tbar: [{
                        xtype: 'button',
                        text: 'Refresh'
                    }],
                    columns: [{
                        xtype: 'treecolumn',
                        header: 'Pos',
                        sortable: true,
                        dataIndex: 'INHERENT_SORTING',
                        width: 55,
                        renderer: function() {
                            return '';
                        },
                        style: {
                            cursor: 'help'
                        },
                        tooltip: 'Click here to sort in original order'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data',
                        width: 100
                    }],
                    listeners: {
                        beforeitemmousedown: function(grid, record, item, index, e) {
                            return e.button != 2 || grid.getSelectionModel().getSelection().indexOf(record) == -1;
                        },
                        containerclick: function containerclick(view, e, options) {
                            view.panel.getSelectionModel().deselectAll();
                        }
                    }
                }, {
                    xtype: 'grid',
                    title: 'LANG',
                    loadMask: {
                        msg: 'Fetching...'
                    },
                    tbar: [{
                        xtype: 'button',
                        text: 'Refresh',
                        handler: function() {
                            this_window.down('#delivery_notes').store.load();
                        }
                    }],
                    store: {
                        autoLoad: false,
                        fields: [{
                            name: 'test_data'
                        }]
                    },
                    columns: [{
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }]
                }, {
                    title: 'LANG',
                    xtype: 'grid',
                    loadMask: {
                        msg: 'Fetching...'
                    },
                    tbar: [{
                        xtype: 'button',
                        text: 'Refresh'
                    }],
                    store: {
                        fields: [{
                            name: 'test_data',
                            type: 'int'
                        }]
                    },
                    columns: [{
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }]
                }, {
                    title: 'LANG',
                    xtype: 'grid',
                    loadMask: {
                        msg: 'Fetching...'
                    },
                    tbar: [{
                        xtype: 'button',
                        text: 'Refresh'
                    }],
                    store: {
                        fields: [{
                            name: 'test_data'
                        }]
                    },
                    columns: [{
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }, {
                        header: 'Test Data',
                        sortable: true,
                        hidden: false,
                        dataIndex: 'test_data'
                    }]
                }]
            }],
            buttons: [{
                text: 'Close'
            }]
        });
        this.callParent();
    }
});

Ext.onReady(function() {
    new OrderWindow().show();
});
