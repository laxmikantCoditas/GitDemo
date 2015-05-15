/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../../../examples/ux');

Ext.require([
    'Ext.tab.*',
    'Ext.ux.TabCloseMenu'
]);

Ext.onReady(function() {
    var currentItem;
    var tabs = Ext.createWidget('tabpanel', {
        renderTo: 'tabs',
        resizeTabs: true,
        enableTabScroll: true,
        width: 980,
        height: 600,
        defaults: {
            autoScroll:true,
            bodyPadding: 10
        },
        items: [{
            title: 'Tab 1',
            iconCls: 'tabs',
            html: 'Tab Body<br/><br/>' + Ext.example.bogusMarkup,
            closable: true
        }],
        plugins: Ext.create('Ext.ux.TabCloseMenu', {
            extraItemsTail: [
                '-',
                {
                    text: 'Closable',
                    checked: true,
                    hideOnClick: true,
                    handler: function (item) {
                        currentItem.tab.setClosable(item.checked);
                    }
                }
            ],
            listeners: {
                aftermenu: function () {
                    currentItem = null;
                },
                beforemenu: function (menu, item) {
                    var menuitem = menu.child('*[text="Closable"]');
                    currentItem = item;
                    menuitem.setChecked(item.closable);
                }
            }
        })
    });

    // tab generation code
    var index = 0;
/*    while(index < 3){
        addTab(index % 2);
    }

    function addTab (closable) {
        ++index;
        tabs.add({
            title: 'New Tab ' + index,
            iconCls: 'tabs',
            html: 'Tab Body ' + index + '<br/><br/>' + Ext.example.bogusMarkup,
            closable: !!closable
        }).show();
    }
*/
    function addTab (closable) {
        ++index;
        tabs.add({
    xtype: 'panel',
    height: 603,
    width: 946,
    layout: {
        type: 'border'
    },
    title: 'New Tab ' + index,
    iconCls: 'tabs',
    closable: !!closable,
    items: [
        {
            xtype: 'form',
            height: 136,
            layout: {
                align: 'stretch',
                type: 'hbox'
            },
            bodyPadding: 10,
            collapsed: false,
            collapsible: true,
            title: 'Contact Information',
            region: 'north',
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Last',
                            labelAlign: 'right',
                            labelWidth: 28,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First',
                            labelAlign: 'right',
                            labelWidth: 28,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Street',
                            labelAlign: 'right',
                            labelWidth: 40,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '',
                            hideEmptyLabel: false,
                            labelAlign: 'right',
                            labelWidth: 40,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '',
                            hideEmptyLabel: false,
                            labelAlign: 'right',
                            labelWidth: 40,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'City',
                            labelAlign: 'right',
                            labelWidth: 34,
                            anchor: '100%'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'State',
                            labelAlign: 'right',
                            labelWidth: 34,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Zip',
                            labelAlign: 'right',
                            labelWidth: 34,
                            anchor: '100%'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: '',
            region: 'center',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'String'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'number',
                    text: 'Number'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'bool',
                    text: 'Boolean'
                }
            ],
            viewConfig: {

            }
        },
        {
            xtype: 'form',
            height: 120,
            layout: {
                align: 'stretch',
                type: 'hbox'
            },
            bodyPadding: 10,
            collapsible: true,
            title: 'Personal Information',
            region: 'south',
            items: [
                {
                    xtype: 'fieldset',
                    title: '',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Height',
                            labelAlign: 'right',
                            labelWidth: 44,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Weight',
                            labelAlign: 'right',
                            labelWidth: 44,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Age',
                            labelAlign: 'right',
                            labelWidth: 44,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Gender',
                            labelAlign: 'right',
                            labelWidth: 44,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '',
                    flex: 1,
                    items: [
                        {
                            xtype: 'textareafield',
                            fieldLabel: 'Comments',
                            labelAlign: 'right',
                            labelWidth: 62,
                            anchor: '100%'
                        }
                    ]
                }
            ]
        }
    ]
}).show();
    }

    Ext.createWidget('button', {
        renderTo: 'addButtonCt',
        text: 'Add Closable Tab',
        handler: function () {
            addTab(true);
        },
        iconCls:'new-tab'
    });

    Ext.createWidget('button', {
        renderTo: 'addButtonCt',
        text: 'Add Unclosable Tab',
        handler: function () {
            addTab(false);
        },
        iconCls:'new-tab',
        style: 'margin-left: 8px;'
    });
});

