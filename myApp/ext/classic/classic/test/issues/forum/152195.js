Ext.require('*');

var order_window;
var orders_window;

function doTest () {

    orders_window = Ext.extend(Ext.Window, {
        initComponent: function() {
            var this_window = this;

            var special_searches_field_id = Ext.id();

            //daterange aus den Examples vom ExtJS
            Ext.apply(Ext.form.field.VTypes, {
                daterange: function(val, field) {
                    var date = field.parseDate(val);

                    if (!date) {
                        return false;
                    }
                    if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                        var start = field.up('buttongroup').down('#' + field.startDateField);
                        start.setMaxValue(date);
                        start.validate();
                        this.dateRangeMax = date;
                    }
                    else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                        var end = field.up('buttongroup').down('#' + field.endDateField);
                        end.setMinValue(date);
                        end.validate();
                        this.dateRangeMin = date;
                    }
                    /*
                             * Always return true since we're only using this vtype to set the
                             * min/max allowed values (these are tested for after the vtype test)
                             */
                    return true;
                },
                daterangeText: 'Start date must be less than end date'
            });

            Ext.apply(this,{
                layout: 'fit',
                title: 'Orders',
                width: 1030,
                height: 600,
                resizable: true,
                maximizable: true,
                autoShow: true, // s.u.
                tbar: [
                {
                    xtype: 'buttongroup',
                    title: 'Search',
                    width: 630,
                    height: 70,
                    columns: 4,
                    padding: '2 3 2 3',
                    items: [
                    {
                        xtype: 'textfield',
                        emptyText: 'Search',
                        itemId: 'search_field',
                        listeners: {
                            specialkey: function(field, e) {
                                if (e.getKey() == e.ENTER) {
                                    field.up('buttongroup').down('#search_button').fireEvent('click', field.up('buttongroup').down('#search_button'), e);
                                }
                            },
                            afterrender: function() {
                                var textfield = this;
                                window.setTimeout(function() { //keine Ahnung warum, aber das scheint das Einzige zu sein, was hilft...
                                    textfield.focus();
                                }, 0);
                            }
                        },
                        margin: '0 10 3 0'
                    },
                    {
                        xtype: 'datefield',
                        name: 'date_from',
                        itemId: 'date_from',
                        fieldLabel: 'From',
                        labelWidth: 30,
                        width: 130,
                        margin: '0 10 3 0',
                        startDay: 1,
                        vtype: 'daterange',
                        endDateField: 'date_to'
                    },
                    {
                        xtype: 'label',
                        text: 'Special Searches:',
                        padding: '3px 0 0 0',
                        style: 'float: left;',
                        forId: special_searches_field_id
                    },
                    {
                        xtype: 'button',
                        text: 'Search',
                        itemId: 'search_button',
                        margin: '0 10 3 0',
                        listeners: {
                            click: function(field) {
                                if (this_window.getComponent('the_grid').store.filters.length)
                                    this_window.getComponent('the_grid').store.filters.clear();
                                var buttongroup = field.up('buttongroup');
                                this_window.getComponent('the_grid').store.filter([
                                {
                                    property: 'search_value', 
                                    value: buttongroup.down('#search_field').getValue()
                                    },

                                    {
                                    property: 'search_more', 
                                    value: buttongroup.down('#search_more_checkbox').getValue()
                                    },

                                    {
                                    property: 'date_from', 
                                    value: buttongroup.down('#date_from').getValue()
                                    },

                                    {
                                    property: 'date_to', 
                                    value: buttongroup.down('#date_to').getValue()
                                    },

                                    {
                                    property: 'special_searches', 
                                    value: buttongroup.down('#search_parameter').getValue()
                                    }
                                ]);
                            }
                        }
                    },
                    {
                        xtype: 'checkbox',
                        itemId: 'search_more_checkbox',
                        boxLabel: 'Search more Fields',
                        margin: '0 10 0 0'
                    },
                    {
                        xtype: 'datefield',
                        name: 'date_to',
                        itemId: 'date_to',
                        fieldLabel: 'To',
                        labelWidth: 30,
                        width: 130,
                        margin: '0 10 0 0',
                        startDay: 1,
                        vtype: 'daterange',
                        startDateField: 'date_from'
                    },
                    {
                        xtype: 'combobox',
                        name: 'search_parameter', // WTF, warum heißt das Ding so!?
                        itemId: 'search_parameter',
                        inputId: special_searches_field_id,
                        width: 250,
                        editable: false,
                        multiSelect: true,
                        store: {
                            data: [
                            {
                                key: 'rma_only', 
                                value: 'RMA only'
                            },

                            {
                                key: 'incomplete_orders', 
                                value: 'Incomplete Orders'
                            },

                            {
                                key: 'no_delivery_notes', 
                                value: 'No Delivery Notes'
                            },

                            {
                                key: 'unsuccessfully_resolved', 
                                value: 'Unsuccessfully Resolved'
                            },

                            {
                                key: 'pending_comments', 
                                value: 'Pending Comments'
                            },

                            {
                                key: 'canceled_delivery_notes', 
                                value: 'Canceled Delivery Notes'
                            },

                            {
                                key: 'unexported_delivery_notes', 
                                value: 'Unexported Delivery Notes'
                            }
                            ],
                            fields: [
                            {
                                name: 'key', 
                                type: 'string'
                            },

                            {
                                name: 'value', 
                                type: 'string'
                            }
                            ],
                            listeners: {
                                load: function(store) {
                                    // Das ist nötig, damit die Einträge, die vorher schon ausgewählt waren, auch wirklich visuell ausgewählt sind:
                                    if (this_window.down('#search_parameter') && this_window.down('#search_parameter').crazy_value_to_set_on_load)
                                        this_window.down('#search_parameter').setValue(this_window.down('#search_parameter').crazy_value_to_set_on_load);
                                }
                            }
                        },
                        displayField: 'value',
                        valueField: 'key'
                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        margin: '0 10 0 0',
                        listeners: {
                            click: function(field) {
                                var buttongroup = field.up('buttongroup');
                                buttongroup.down('#search_field').reset();
                                buttongroup.down('#search_more_checkbox').reset();
                                buttongroup.down('#date_from').reset();
                                buttongroup.down('#date_to').reset();
                                buttongroup.down('#search_parameter').reset();
                            }
                        }
                    }
                    ]
                },
                {
                    xtype: 'buttongroup',
                    title: 'Tools',
                    height: 70,
                    items: [
                    {
                        xtype: 'button',
                        text: 'Create new Order',
                        handler: function() {
                            new window.win_order_new().show();
                        }
                    }
                    ]
                }
                ],
                items: [
                {
                    itemId: 'the_grid',
                    xtype: 'grid',
                    loadMask: {
                        msg: 'Searching...'
                    },
                    store: {
                        autoLoad: true,
                        remoteFilter: true,
                        fields: [ // s.u.
                            {
                                name: 'order_id'
                            },
                            {
                                name: 'test_data'
                            }
                        ],
                        proxy: {
                            type: 'ajax',
                            url: 'forum/152195-data.json',
                            paramOrder: ['filter'],
                            reader: {
                                type: 'json',
                                root: 'data',
                                idProperty: 'order_id'
                            }
                        },
                        listeners: {
                            load: function (store) {
                                this_window.down('#buttonbar #statusbarlight').update(store.getCount() + ' entries found');
                            }
                        //							beforeload: function (store,operation) {
                        //								operation.params = {
                        //									q: '', // this_window.getComponent('the_grid').dockableBladiblub.feld...
                        //									filters: {lala: 'bubu', wum: 'wendelin'}
                        //								};
                        //							}
                        }
                    },
                    columns: { // Config für den headerCt (Ext.grid.header.Container)
                        defaults:
                        {
                            // flex: 1,
                            sortable: true
                        },
                        items: [
                        {
                            header: 'ID', 
                            hidden: true, 
                            dataIndex: 'order_id', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            dataIndex: 'test_data', 
                            width: 85
                        },

                        {
                            header: 'Test Data', 
                            dataIndex: 'test_data', 
                            width: 125
                        },

                        {
                            header: 'Test Data', 
                            dataIndex: 'test_data', 
                            width: 125
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 105
                        },

                        {
                            header: 'Test Data(with Tooltip)', 
                            hidden: true, 
                            tdCls: 'crazy_has_tooltip crazy_customer_address_synopsis', 
                            dataIndex: 'test_data', 
                            width: 150
                        },

                        {
                            header: 'Test Data(with Tooltip)', 
                            tdCls: 'crazy_has_tooltip crazy_recipient_address_synopsis', 
                            dataIndex: 'test_data', 
                            width: 150
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 115
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 115
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 105
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 105
                        },

                        {
                            header: 'Test Data',
                            dataIndex: 'test_data',
                            width: 50,
                            renderer: function(value) {
                                return (value === "1" ? 'yes' : 'no');
                            }
                        },
                        {
                            header: 'Test Data', 
                            dataIndex: 'test_data', 
                            width: 40
                        },

                        {
                            header: 'Test Data', 
                            xtype: 'numbercolumn', 
                            dataIndex: 'test_data', 
                            align: 'right', 
                            width: 70
                        },

                        {
                            header: 'Test Data (with Tooltip)', 
                            tdCls: 'crazy_has_tooltip crazy_customers_comment', 
                            dataIndex: 'test_data', 
                            width: 130
                        },

                        {
                            header: 'Test Data (with Tooltip)', 
                            tdCls: 'crazy_has_tooltip crazy_support_comment', 
                            dataIndex: 'test_data', 
                            width: 130
                        },

                        {
                            header: 'Test Data', 
                            hidden: true, 
                            dataIndex: 'test_data', 
                            width: 130
                        },

                        {
                            header: 'Test Data', 
                            hidden: true,  
                            dataIndex: 'test_data', 
                            width: 90
                        },

                        {
                            header: 'Test Data', 
                            hidden: true,  
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            hidden: true,  
                            dataIndex: 'test_data', 
                            width: 95
                        }
                        ]
                    },
                    listeners: {
                        itemdblclick: function (view, record, item, index, e) {
                            // Das Grid wäre vom View aus in panel zu finden, aber der View hat auch selber den Store (wozu auch immer):
                            var t = new Date().getTime();
                            var win = new order_window({
                                    order_id: view.store.getAt(index).get('order_id')
                                });
                            t = new Date().getTime() - t;
                            //alert('t = ' + t);
                            win.down('#centerTopPane').body.dom.innerHTML = 'Time: '+t+'ms';
                        },
                        afterrender: function (grid) {
                            var view = grid.view;
                            grid.tip = Ext.create('Ext.tip.ToolTip', {
                                target: grid.view.el,
                                delegate: 'td.crazy_has_tooltip',
                                showDelay: 300,
                                dismissDelay: 0,
                                hideDelay: 0,
                                anchorToTarget: true,
                                trackMouse: true, // s.u.
                                anchor: 'left',
                                // renderTo: Ext.getBody(),  // Render immediately so that tip.body can be referenced prior to the first show (?)
                                listeners: {
                                    beforeshow: function (tip) {
                                        var text;
                                        if (Ext.get(tip.triggerElement).hasCls('crazy_customer_address_synopsis'))
                                            text = grid.view.getRecord(tip.triggerElement.parentNode).get('test_data');
                                        else if (Ext.get(tip.triggerElement).hasCls('crazy_recipient_address_synopsis'))
                                            text = grid.view.getRecord(tip.triggerElement.parentNode).get('test_data');
                                        else if (Ext.get(tip.triggerElement).hasCls('crazy_customers_comment'))
                                            text = grid.view.getRecord(tip.triggerElement.parentNode).get('test_data');
                                        else if (Ext.get(tip.triggerElement).hasCls('crazy_support_comment'))
                                            text = grid.view.getRecord(tip.triggerElement.parentNode).get('test_data');
                                        else
                                            text = 'Wut?';

                                        if (text)
                                            tip.update(text.replace(/(\r\n|\n|\r)/gm,"<br>"));
                                        else
                                            // return false; // http://www.sencha.com/forum/showthread.php?139596-When-returning-false-from-beforeshow-of-a-ToolTip-no-further-tooltips-are-shown
                                            tip.update('-');
                                    }
                                }
                            });
                        },
                        beforeitemmousedown: function(grid, record, item, index, e) {
                            // Durch einen Rechtsklick darf nur dann eine Auswahl ausgelöst werden, wenn man nicht auf einen selektierten Eintrag klickt
                            return e.button != 2 || grid.getSelectionModel().getSelection().indexOf(record) == -1;
                        },
                        itemcontextmenu: function(grid, record, item, index, e) {
                        }
                    },
                    selModel: {
                        // selType: 'RowModel', // ist Default und darf nicht angegeben werden (s.u.)
                        mode: 'MULTI'
                    // allowDeselect: true // s.u.
                    }
                }
                ],
                dockedItems: [{
                    xtype: 'toolbar',
                    itemId: 'buttonbar',
                    dock: 'bottom',
                    ui: 'footer', // was auch immer das ist
                    defaults: {
                        minWidth: this.minButtonWidth
                        },
                    items: [
                    {
                        xtype: 'component', 
                        itemId: 'statusbarlight', 
                        flex: 1
                    },

                    {
                        text: 'Close', 
                        handler: function (button, e) {
                            button.ownerCt.ownerCt.close();
                        }
                    }
                ]
            }],
            listeners: { // vom Window
                show: function (win) {
                    viewport.getComponent('taskbar').crazy_register_window(win, 'Orders');
                },
                afterrender: function() {
                    if (typeof this_window.filter != 'undefined')
                    {
                        // hier brauchen wir für die Checkboxen kein suspendEvents, da beim Change-Event nichts passiert
                        var filter = new Array();

                        if (typeof this_window.filter.search_field != 'undefined')
                        {
                            filter.push({
                                property: 'search_field', 
                                value: this_window.filter.search_field
                                });
                            this_window.down('#search_field').setValue(this_window.filter.search_field);
                        }

                        if (typeof this_window.filter.search_more != 'undefined')
                        {
                            filter.push({
                                property: 'search_more', 
                                value: this_window.filter.search_more
                                });
                            this_window.down('#search_more_checkbox').setValue(this_window.filter.search_more);
                        }

                        if (typeof this_window.filter.date_from != 'undefined')
                        {
                            filter.push({
                                property: 'date_from', 
                                value: this_window.filter.date_from
                                });
                            this_window.down('#date_from').setValue(this_window.filter.date_from);
                        }

                        if (typeof this_window.filter.date_to != 'undefined')
                        {
                            filter.push({
                                property: 'date_to', 
                                value: this_window.filter.date_to
                                });
                            this_window.down('#date_to').setValue(this_window.filter.date_to);
                        }

                        if (typeof this_window.filter.special_searches != 'undefined')
                        {
                            filter.push({
                                property: 'special_searches', 
                                value: this_window.filter.special_searches
                                });
                            this_window.down('#search_parameter').setValue(this_window.filter.special_searches);
                            this_window.down('#search_parameter').crazy_value_to_set_on_load = this_window.filter.special_searches;
                        }

                        this_window.down('#the_grid').store.filter(filter);
                    }
                }
            }
            });
        orders_window.superclass.initComponent.apply(this, arguments);
    }
    });

    order_window = Ext.extend(Ext.window.Window, {
        initComponent: function() {
            var this_window = this;

            Ext.apply(this,{
                layout: 'fit',
                title: 'Order',
                width: 1300,
                height: 690,
                minWidth: 720,
                minHeight: 510,
                resizable: true,
                maximizable: true,
                autoShow: true, // s.u.
                items: [
                {
                    xtype: 'tabpanel',
                    itemId: 'the_tabpanel',
                    activeTab: 0,
                    items: [
                    {
                        title: 'LANG',
                        layout: {
                            type: 'vbox', 
                            align: 'stretch'
                        },
                        tbar: [
                        {
                            xtype: 'button',
                            text: 'Refresh',
                            handler: function(b) {
                                this_window.down('#tab_overview').fireEvent('afterrender', b.up('#tab_overview'));
                            }
                        }
                        ],
                        items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox', 
                                align: 'stretch'
                            },
                            height: 340,
                            defaults: {
                                bodyPadding: 5
                            },
                            items: [
                            {
                                xtype: 'form',
                                title: 'LANG',
                                width: 360,
                                defaults: {
                                    xtype: 'displayfield',
                                    width: 310,
                                    labelWidth: 160
                                },
                                items: [
                                {
                                    name: 'order_id', 
                                    fieldLabel: 'Order-ID'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                },

                                {
                                    name: 'test_data', 
                                    fieldLabel: 'Test Data'
                                }
                                ]
                            },
                            {
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
                                items: [
                                {
                                    title: 'LANG',
                                    itemId: 'centerTopPane',
                                    tools: [
                                        { type: 'refresh' }
                                    ]
                                },
                                {
                                    title: 'LANG',
                                    tools: [
                                    {
                                        type: 'edit'
                                    }
                                    ]
                                }
                                ]
                            },
                            {
                                xtype: 'form', // Ext.form.Panel, nötig, damit man Felder per findField() findet
                                title: 'LANG',
                                width: 250,
                                bodyPadding: '5px 10px',
                                defaults: {
                                    labelWidth: 150
                                },
                                items: [
                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },


                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },

                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },

                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },

                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },

                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                },

                                {
                                    xtype: 'displayfield', 
                                    name: 'test_data', 
                                    fieldLabel: 'LANG'
                                }
                                ],
                                dockedItems: [
                                {
                                    dock: 'bottom',
                                    xtype: 'form', // Ext.form.Panel, nötig, damit man Felder per findField() findet
                                    title: 'LANG',
                                    width: 250,
                                    bodyPadding: '5px 10px',
                                    defaults: {
                                        width: 200
                                    },
                                    items: [
                                    {
                                        xtype: 'displayfield', 
                                        name: 'test_data', 
                                        fieldLabel: 'LANG'
                                    },

                                    {
                                        xtype: 'displayfield', 
                                        name: 'test_data', 
                                        fieldLabel: 'LANG'
                                    }
                                    ],
                                    bbar: [
                                    {
                                        xtype: 'button',
                                        text: 'LANG'
                                    }
                                    ]
                                }
                                ]
                            }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox', 
                                align: 'stretch'
                            },
                            flex: 1,
                            height: 255,
                            defaults: {
                                flex: 1,
                                bodyPadding: 5
                            },
                            items: [
                            {
                                title: 'LANG',
                                bbar: [
                                {
                                    xtype: 'button',
                                    text: 'Done',
                                    itemId: 'done_button',
                                    handler: function(b) {
                                        b.up('.panel').getEl().mask('Working...');
                                        order.mark_comment_done(this_window.order_id, function() {
                                            b.up('.panel').getEl().unmask();
                                            b.disable();
                                        });
                                    }
                                }
                                ]
                            },
                            {
                                title: 'LANG',
                                layout: 'fit',
                                bodyPadding: 0,
                                bbar: [
                                    {
                                        xtype: 'button',
                                        text: 'Save Changes'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'textarea'
                                    }
                                ]
                            }
                            ]
                        }
                        ],
                        listeners: { // vom Overview-Tab
                            afterrender: function(tab) {
                            }
                        }
                    },
                    {
                        xtype: 'treepanel',
                        title: 'LANG',
                        cls: 'crazy_order_lines',
                        loadMask: {
                            msg: 'Fetching...'
                        },
                        rootVisible: false, // Das ist nicht nur für diese Darstellung sinnvoll, sondern der Tree funktioniert auch nicht richtig, wenn man den Rootknoten sichtbar hat, aber nicht angibt (sondern versucht, ihn asynchron laden zu lassen)
                        multiSelect: true,
                        store: Ext.create('Ext.data.TreeStore',{
                            // Weil der TreeStore keine eigenen Filter-Methoden mitbringt, bauen wir sie selber. Interessanterweise beachtet sie der Proxy bereits und schickt sie an den Server.
                            filter: function (filters, value) {
                                var store = this;

                                if (Ext.isString(filters))
                                {
                                    filters = {
                                        property: filters,
                                        value: value
                                    };
                                }

                                Ext.each(filters, function (value) {
                                    store.filters.add(new Ext.util.Filter(value));
                                });

                            // Abweichend von der normalen Implementierung muss man hier aber das load() selber aufrufen
                            },
                            clearFilter: function () {
                                this.filters.clear();

                            // Abweichend von der normalen Implementierung muss man hier aber das load() selber aufrufen
                            },
                            root: {
                                loaded: true
                            },
                            sorters: [{
                                property: 'INHERENT_SORTING', 
                                direction: 'ASC'
                            }],
                            // s.u.
                            fields: [
                            {
                                name: 'test_data'
                            }
                            ]
                        }),
                        tbar: [
                            {
                                xtype: 'button',
                                text: 'Refresh',
                                handler: function() {
                                    this_window.down('#order_lines').store.load();
                                }
                            }
                        ],
                        columns: [
                        {
                            xtype: 'treecolumn', 
                            header: 'Pos', 
                            sortable: true, 
                            dataIndex: 'INHERENT_SORTING', 
                            width: 55, 
                            renderer: function () {
                                return '';
                            }, 
                            style: {
                                cursor: 'help'
                            }, 
                            tooltip: 'Click here to sort in original order'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data', 
                            width: 100
                        }
                        ],
                        viewConfig: {
                            getRowClass: function(record, rowIndex, rowParams, store){
                            }
                        },
                        listeners: { // vom Order-Lines-Grid
                            afterrender: function (grid) {
                                grid.crazy_keymap = new Ext.util.KeyMap(grid.view.el, {
                                    key: 65,
                                    ctrl: true,
                                    handler: function() {
                                        grid.getSelectionModel().selectAll();
                                    },
                                    defaultEventAction: 'stopEvent'
                                });

                            },
                            beforeitemmousedown: function(grid, record, item, index, e) {
                                // // Durch einen Rechtsklick darf nur dann eine Auswahl ausgelöst werden, wenn man nicht auf einen selektierten Eintrag klickt
                                return e.button != 2 || grid.getSelectionModel().getSelection().indexOf(record) == -1;
                            },
                            containerclick: function containerclick(view, e, options) {
                                view.panel.getSelectionModel().deselectAll();
                            }
                        }
                    },
                    {
                        xtype: 'grid',
                        title: 'LANG',
                        loadMask: {
                            msg: 'Fetching...'
                        },
                        tbar: [
                        {
                            xtype: 'button',
                            text: 'Refresh',
                            handler: function() {
                                this_window.down('#delivery_notes').store.load();
                            }
                        }
                        ],
                        store: {
                            autoLoad: false,
                            fields: [ // s.u.
                                {
                                    name: 'test_data'
                                }
                            ]
                        },
                        columns: [
                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        }
                        ],
                        viewConfig: {
                            listeners: {
                                // Dieses Event ist nur im View, ist undokumentiert und sein Name wird dynamisch zusammengebaut
                                cellclick: function (view, cell, cellIndex, record, row, rowIndex, e) {
                                    if (e.target.parentNode.tagName == 'A' && view.panel.headerCt.getHeaderAtIndex(cellIndex).dataIndex == 'line_count') {
                                    }
                                }
                            }
                        }
                    },
                    {
                        title: 'LANG',
                        xtype: 'grid',
                        loadMask: {
                            msg: 'Fetching...'
                        },
                        tbar: [
                        {
                            xtype: 'button',
                            text: 'Refresh',
                            handler: function() {
                                this_window.down('#invoices').store.load();
                            }
                        }
                        ],
                        store: {
                            fields: [
                                {
                                    name: 'test_data', 
                                    type: 'int'
                                }
                            ]
                        },
                        columns: [
                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        },

                        {
                            header: 'Test Data', 
                            sortable: true, 
                            hidden: false, 
                            dataIndex: 'test_data'
                        }
                        ]
                    },
                    {
                        title: 'LANG',
                        xtype: 'grid',
                        loadMask: {
                            msg: 'Fetching...'
                        },
                        tbar: [
                            {
                                xtype: 'button',
                                text: 'Refresh',
                                handler: function() {
                                    this_window.down('#order_history').store.load();
                                }
                            }
                        ],
                        store: {
                            fields: [
                                {
                                    name: 'test_data'
                                }
                            ]
                        },
                        columns: [
                            {
                                header: 'Test Data', 
                                sortable: true, 
                                hidden: false, 
                                dataIndex: 'test_data'
                            },

                            {
                                header: 'Test Data', 
                                sortable: true, 
                                hidden: false, 
                                dataIndex: 'test_data'
                            },

                            {
                                header: 'Test Data', 
                                sortable: true, 
                                hidden: false, 
                                dataIndex: 'test_data'
                            },
                            {
                                header: 'Test Data', 
                                sortable: true, 
                                hidden: false, 
                                dataIndex: 'test_data'
                            }
                        ]
                    }],
                    listeners: {
                        tabchange: function (tab_panel, new_tab) {
                            if (['order_lines', 'delivery_notes', 'invoices', 'order_history'].indexOf(new_tab.itemId) != -1 && !new_tab["store_already_loaded"])
                            {
                                new_tab["store_already_loaded"] = true;
                            // new_tab.getStore().load();
                            }
                        }
                    }
                }],
                buttons: [
                    {
                        text: 'Close', 
                        handler: function (button, e) {
                            button.ownerCt.ownerCt.close();
                        }
                    }
                ],
                listeners: { // vom Window
                    show: function (win) {
                        viewport.getComponent('taskbar').crazy_register_window(win, 'Orders');
                    }
                }
            });

            order_window.superclass.initComponent.apply(this, arguments);
        }
    });

    // Der Viewport ist mein Nachrichtenbus, daher global:
    window.viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            collapsible: true,
            title: 'LANG',
            itemId: 'left_box',
            width: 200,
            region: 'west',
            items: [
            {
                xtype: 'treepanel',
                itemId: 'navigation',
                flex: 1,
                bodyStyle: 'background-image: url(../images/penguin.png); background-position: bottom; background-repeat: no-repeat; background-color: #FFFFFF;',
                // http://www.sencha.com/forum/showthread.php?131061-Tree-or-TreeStore-root-config-option&p=596350&viewfull=1#post596350
                store: {
                    fields: [
                        {
                            name: 'text'
                        },        // Warum muß das hier sein und "leaf" nicht?

                        {
                            name: 'what_to_do'
                        }   // zusätzliches Feld, das die Funktion aufnimmt, die beim Klicken ausgeführt werden soll
                    ],
                    root: {
                        expanded: true,
                        children: [
                            {
                                text: 'Example',
                                children: [
                                    {
                                        text: 'Order List', 
                                        leaf: true, 
                                        what_to_do: function() {
                                            new orders_window;
                                        }
                                    }
                                ]
                            },
                            {
                                text: 'LANG',
                                children: [
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },

                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },

                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    }
                                ]
                            },
                            {
                                text: 'LANG',
                                children: [
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },

                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },

                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    }
                                ]
                            },
                            {
                                text: 'LANG',
                                children: [
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    }
                                ]
                            },
                            {
                                text: 'LANG',
                                children: [
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    },
                                    {
                                        text: 'LANG', 
                                        leaf: true, 
                                        what_to_do: function() { }
                                    }
                                ]
                            }
                        ]
                    }
                },
                rootVisible: false, // Damit das funktioniert, muß der Rootnode expanded: true gesetzt haben
                listeners: {
                    itemclick: function( treepanel, record, item, index, e) {
                        if (record.get('what_to_do'))
                            record.get('what_to_do')();
                    }
                }
            }]
        },
        {
            xtype: 'component',
            region: 'center',
            html: '<div style="height: 100%; width: 100%; background: #003366;">'
        },
        {
            region: 'south',
            xtype: 'toolbar',
            height: 30,
            itemId: 'taskbar',
            enableOverflow: true, // setzt intern layout.overflowHandler: 'Menu'
            crazy_register_window: function (the_window) {
                var taskbar = this;

                the_window.crazy_taskbar_button = new Ext.button.Button({
                    text: the_window.title,
                    handler: function () {
                        the_window.toFront();
                    }
                });

                the_window.on('activate', function () {
                    the_window.crazy_taskbar_button.toggle(true);
                });
                the_window.on('deactivate', function () {
                    the_window.crazy_taskbar_button.toggle(false);
                });
                the_window.on('titlechange', function () {
                    the_window.crazy_taskbar_button.setText(the_window.title);
                });
                the_window.on('destroy', function () {
                    // Hide-Event kommt nach Destroy-Event... wtf Sencha, wtf.

                    the_window.crazy_taskbar_button.destroy();
                });

                taskbar.add(the_window.crazy_taskbar_button);
                the_window.crazy_taskbar_button.toggle(true);
            }
        }], // viewport items
        listeners: {
            render: function (vp) {
                vp.addEvents('dragging_pieces_start','dragging_pieces_end');
            }
        }
    }); // new viewport

    viewport.getComponent('left_box').getComponent('navigation').expandAll();

    new orders_window();

    Ext.QuickTips.init();
}

Ext.onReady(doTest);
