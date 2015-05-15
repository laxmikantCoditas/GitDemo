Ext.require([
    'Ext.panel.Panel',
    'Ext.container.Viewport',
    'Ext.form.*',
    'Ext.layout.*',

    // TODO - 'Ext.diag.*',
    'Ext.diag.layout.ContextItem',
    'Ext.diag.layout.Context',

    'Ext.slider.Single',
    'Ext.grid.Panel',
    'Ext.grid.column.Action',
    'Ext.perf.Monitor'
]);

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function hasOption (opt) {
    var s = window.location.search;
    var re = new RegExp('(?:^|[&?])' + opt + '(?:[=]([^&]*))?(?:$|[&])', 'i');
    var m = re.exec(s);

    return m ? (m[1] === undefined ? true : m[1]) : false;
}

var testCases = {
    A: {
        xtype: 'panel',
        width: 250,
        height: 110,
        x: 10, y: 35,
        title: 'Test A - dock',
        collapsible: true,
        bodyStyle: {
            backgroundColor: 'blue',
            color: 'white'
        },
        html: 'Body'
    },
    //-------------------------------------------------------------------------
    B: function () {
        var items = [];
        for (var y = 0; y++ < 3; ) {
            var row = {
                xtype: 'container',
                //height: 100,
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: []
            }
            for (var x = 0; x++ < 3; ) {
                var title = 'Panel ' + x + ',' + y;
                row.items.push({
                    xtype: 'panel',
                    flex: 1,
                    title: title,
                    id: title,
                    bodyStyle: {
                        backgroundColor: 'blue',
                        color: 'white'
                    },
                    html: 'Body ' + x + ',' + y
                });
            }
            items.push(row);
        }

        return {
            xtype: 'panel',
            title: 'Test B - box',
            width: 450,
            height: 300,
            border: false,
            bodyBorder: false,
            x: 270, y: 35,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: items
        };
    }(), // B
    //-------------------------------------------------------------------------
    C: {
        xtype: 'panel',
        width: 250,
        height: 180,
        title: 'Test C - dock+hbox',
        x: 10, y: 155,
        collapsible: true,
        //resizable: true,
        bodyStyle: 'background-color:red',
        dockedItems: [{
            xtype: 'component',
            id: 'testC_top',
            html: 'Top<br>test',
            dock: 'top',
            style: 'border: 1px solid'
        }, {
            xtype: 'component',
            id: 'testC_right',
            html: 'Right<br>Test',
            dock: 'right',
            style: 'border: 1px solid'
        }, {
            xtype: 'component',
            id: 'testC_bot',
            html: 'Bottom<br>test',
            dock: 'bottom',
            style: 'border: 1px solid'
        }, {
            xtype: 'component',
            id: 'testC_left',
            html: 'Left test',
            dock: 'left',
            style: 'border: 1px solid'
            }],
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'component',
            flex: 1,
            height: 50,
            id: 'testC_leftFlex',
            style: {
                'background-color': 'green'
            }
        }, {
            xtype: 'component',
            flex: 1,
            height: 40,
            id: 'testC_rightFlex',
            style: {
                backgroundColor: 'blue'
            }
        }]
    }, // C

    //-------------------------------------------------------------------------
    D: function () {
        // sample static data for the store
        var myData = [
            ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
            ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
            ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
            ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
            ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
            ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
            ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
            ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
            ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
            ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am'],
            ['Exxon Mobil Corp',                    68.1,  -0.43, -0.64, '9/1 12:00am'],
            ['General Electric Company',            34.14, -0.08, -0.23, '9/1 12:00am'],
            ['General Motors Corporation',          30.27, 1.09,  3.74,  '9/1 12:00am'],
            ['Hewlett-Packard Co.',                 36.53, -0.03, -0.08, '9/1 12:00am'],
            ['Honeywell Intl Inc',                  38.77, 0.05,  0.13,  '9/1 12:00am'],
            ['Intel Corporation',                   19.88, 0.31,  1.58,  '9/1 12:00am'],
            ['International Business Machines',     81.41, 0.44,  0.54,  '9/1 12:00am'],
            ['Johnson & Johnson',                   64.72, 0.06,  0.09,  '9/1 12:00am'],
            ['JP Morgan & Chase & Co',              45.73, 0.07,  0.15,  '9/1 12:00am'],
            ['McDonald\'s Corporation',             36.76, 0.86,  2.40,  '9/1 12:00am'],
            ['Merck & Co., Inc.',                   40.96, 0.41,  1.01,  '9/1 12:00am'],
            ['Microsoft Corporation',               25.84, 0.14,  0.54,  '9/1 12:00am'],
            ['Pfizer Inc',                          27.96, 0.4,   1.45,  '9/1 12:00am'],
            ['The Coca-Cola Company',               45.07, 0.26,  0.58,  '9/1 12:00am'],
            ['The Home Depot, Inc.',                34.64, 0.35,  1.02,  '9/1 12:00am'],
            ['The Procter & Gamble Company',        61.91, 0.01,  0.02,  '9/1 12:00am'],
            ['United Technologies Corporation',     63.26, 0.55,  0.88,  '9/1 12:00am'],
            ['Verizon Communications',              35.57, 0.39,  1.11,  '9/1 12:00am'],
            ['Wal-Mart Stores, Inc.',               45.45, 0.73,  1.63,  '9/1 12:00am']
        ];

        /**
         * Custom function used for column renderer
         * @param {Object} val
         */
        function change(val) {
            if (val > 0) {
                return '<span style="color:green;">' + val + '</span>';
            } else if (val < 0) {
                return '<span style="color:red;">' + val + '</span>';
            }
            return val;
        }

        /**
         * Custom function used for column renderer
         * @param {Object} val
         */
        function pctChange(val) {
            if (val > 0) {
                return '<span style="color:green;">' + val + '%</span>';
            } else if (val < 0) {
                return '<span style="color:red;">' + val + '%</span>';
            }
            return val;
        }

        // create the data store
        var store = Ext.create('Ext.data.ArrayStore', {
            fields: [
               {name: 'company'},
               {name: 'price',      type: 'float'},
               {name: 'change',     type: 'float'},
               {name: 'pctChange',  type: 'float'},
               {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
            ],
            data: myData
        });

        // create the Grid
        return {
            xtype: 'grid',
            height: 150,
            width: 500,
            id: 'testD',
            title: 'Test D - Grid',
            store: store,
            bbar: {
                xtype: 'pagingtoolbar',
                id: 'testD_pagingbar',
                store      : store,
                displayInfo: true,
                displayMsg : 'Displaying topics {0} - {1} of {2}'
            },
            deferRowRender: false,
            x: 730, y: 35,
            viewConfig: {
                stripeRows: true
            },
            columns: [
                {
                    text     : 'Company',
                    flex     : 1,
                    sortable : false,
                    dataIndex: 'company'
                },
                {
                    text     : 'Price',
                    width    : 75,
                    sortable : true,
                    renderer : 'usMoney',
                    dataIndex: 'price'
                },
                {
                    text     : 'Change',
                    width    : 75,
                    sortable : true,
                    renderer : change,
                    dataIndex: 'change'
                },
                {
                    text     : '% Change',
                    width    : 75,
                    sortable : true,
                    renderer : pctChange,
                    dataIndex: 'pctChange'
                },
                {
                    text     : 'Last Updated',
                    width    : 85,
                    sortable : true,
                    renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                    dataIndex: 'lastChange'
                },
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [{
                        icon   : '../shared/icons/fam/delete.gif',  // Use a URL in the icon config
                        tooltip: 'Sell stock',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = store.getAt(rowIndex);
                            alert("Sell " + rec.get('company'));
                        }
                    }, {
                        getClass: function(v, meta, rec) {          // Or return a class from a function
                            if (rec.get('change') < 0) {
                                this.items[1].tooltip = 'Hold stock';
                                return 'alert-col';
                            } else {
                                this.items[1].tooltip = 'Buy stock';
                                return 'buy-col';
                            }
                        },
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = store.getAt(rowIndex);
                            alert((rec.get('change') < 0 ? "Hold " : "Buy ") + rec.get('company'));
                        }
                    }]
                }
            ]
        };
    }, // D
    //-------------------------------------------------------------------------
    //*
    E: {
        xtype: 'panel',
        width: 250,
        height: 182, // 1px scroll range 
        title: 'Test E - anchor 1px vscroll',
        x: 10, y: 345,
        layout: 'anchor',
        bodyPadding: 5,
        bodyStyle: {
            overflow: 'auto'
        },
        defaults: {
            anchor: '0'
        },
        items: [{
            xtype: 'component',
            height: 20,
            id: 'testE_1',
            style: 'background-color:green; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            width: 70,
            height: 30,
            id: 'testE_2',
            style: 'background-color:blue; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testE_3',
            style: 'background-color:yellow; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testE_4',
            style: 'background-color:#0f0; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testE_5',
            style: 'background-color:#00f; border: 1px solid red; margin: 6px;'
        }]
    }, /* E */
    //-------------------------------------------------------------------------
    F: {
        title: 'Test F - Fields',
        //height: 600,
        width: 600,
        x: 270, y: 345,
        bodyPadding: 5,
        layout: 'anchor',
        frame: true,
        defaults: {
            //width: 588,
            anchor: '-8',
            allowBlank: false,
            labelWidth: 200
        },
        items: [
            {
                xtype: 'textfield',
                labelAlign: 'left',
                fieldLabel: 'Left label, msgTarget: "side"',
                msgTarget: 'side'
            }, {
                xtype: 'textfield',
                labelAlign: 'top',
                fieldLabel: 'Top label, msgTarget: "side"',
                msgTarget: 'side'
            }, {
                xtype: 'textfield',
                labelAlign: 'right',
                fieldLabel: 'Right label, msgTarget: "side"',
                msgTarget: 'side'
            }, {
                xtype: 'textfield',
                labelAlign: 'left',
                fieldLabel: 'Left label, msgTarget: "under"',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                labelAlign: 'top',
                fieldLabel: 'Top label, msgTarget: "under"',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                labelAlign: 'right',
                fieldLabel: 'Right label, msgTarget: "under"',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                labelAlign: 'left',
                fieldLabel: 'Left label'
            }, {
                xtype: 'textfield',
                labelAlign: 'top',
                fieldLabel: 'Top label'
            }, {
                xtype: 'textfield',
                labelAlign: 'right',
                fieldLabel: 'Right label'
            },
            {
                xtype: 'htmleditor',
                name: 'bio',
                fieldLabel: 'Biography',
                labelAlign: 'top',
                height: 150
            },
            {
                xtype: 'slider',
                minValue: 0,
                hideLabel: true,
                useTips: false,
                maxValue: 100
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    padding: 5
                },
                defaults: {
                    flex: 1,
                    labelWidth: 55
                },
                items: [
                    {
                        xtype: 'combobox',
                        queryMode: 'local',
                        store: ['foo', 'bar'],
                        fieldLabel: 'Combo'
                    },
                    {
                        xtype: 'combobox',
                        queryMode: 'local',
                        store: ['foo', 'bar'],
                        fieldLabel: 'Uneditable',
                        labelWidth: 65,
                        editable: false
                    },
                    {
                        xtype: 'combobox',
                        queryMode: 'local',
                        store: ['foo', 'bar'],
                        fieldLabel: 'HideTrigger',
                        labelWidth: 65,
                        hideTrigger: true
                    },
                    {
                        xtype: 'combobox',
                        queryMode: 'local',
                        store: ['foo', 'bar'],
                        readOnly: true,
                        fieldLabel: 'ReadOnly'
                    }
                ]
            }
        ]
    },
    //-------------------------------------------------------------------------
    //*
    G: {
        xtype: 'panel',
        width: 250,
        height: 183, // exactly = contentHeight
        title: 'Test G - anchor noscroll',
        x: 10, y: 532,
        layout: 'anchor',
        bodyStyle: {
            overflow: 'auto'
        },
        defaults: {
            anchor: '0'
        },
        items: [{
            xtype: 'component',
            height: 20,
            id: 'testG_1',
            style: 'background-color:green; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            width: 70,
            height: 40,
            id: 'testG_2',
            style: 'background-color:blue; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testG_3',
            style: 'background-color:yellow; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testG_4',
            style: 'background-color:#0f0; border: 1px solid red; margin: 6px;'
        }, {
            xtype: 'component',
            height: 20,
            id: 'testG_5',
            style: 'background-color:#00f; border: 1px solid red; margin: 6px;'
        }]
    }, /* G */
    //-------------------------------------------------------------------------
    H: {
        title: 'Test H - column 1px vscroll',
        height: 100,
        width: 170,
        x: 875, y: 190,
        bodyPadding: 10,
        bodyStyle: {
            overflow: 'auto'
        },
        layout: 'column',
        items: [
            {
                columnWidth: 0.3,
                xtype: 'component',
                id: 'testH_1',
                style: 'height:20px;background-color:yellow;border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.5,
                xtype: 'component',
                height: 48, // 1px vscroll
                id: 'testH_2',
                style: 'background-color:orange; border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.2,
                xtype: 'component',
                id: 'testH_3',
                style: 'height:30px;background-color:#0f0;border: 1px solid red; margin: 3px;'
            }
        ]
    },
    //-------------------------------------------------------------------------
    I: {
        title: 'Test I - column noscroll',
        height: 100,
        width: 175,
        x: 1055, y: 190,
        bodyPadding: 10,
        bodyStyle: {
            overflow: 'auto'
        },
        layout: 'column',
        items: [
            {
                columnWidth: 0.3,
                xtype: 'component',
                id: 'testI_1',
                style: 'height:20px;background-color:yellow;border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.5,
                xtype: 'component',
                height: 47, // exact fit
                id: 'testI_2',
                style: 'background-color:orange; border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.2,
                xtype: 'component',
                id: 'testI_3',
                style: 'height:30px;background-color:#0f0;border: 1px solid red; margin: 3px;'
            }
        ]
    },
    //-------------------------------------------------------------------------
    J: {
        title: 'Test J - column w/text',
        height: 100,
        width: 170,
        x: 875, y: 295,
        bodyPadding: 5,
        bodyStyle: {
            overflow: 'auto'
        },
        layout: 'column',
        items: [
            {
                columnWidth: 1,
                xtype: 'component',
                id: 'testJ_1',
                style: 'border: 1px solid red; margin: 3px;',
                html: loremIpsum
            },
            {
                xtype: 'component',
                height: 60,
                width: 30,
                id: 'testJ_2',
                style: 'background-color:#0f0; border: 1px solid red;'
            }
        ]
    },
    //-------------------------------------------------------------------------
    K: {
        title: 'Test K - wrapped column',
        height: 100,
        width: 175,
        x: 1055, y: 295,
        bodyPadding: 10,
        bodyStyle: {
            overflow: 'auto'
        },
        layout: 'column',
        items: [
            {
                columnWidth: 0.3,
                xtype: 'component',
                id: 'testK_1',
                style: 'height:20px;background-color:yellow;border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.5,
                xtype: 'component',
                height: 20,
                id: 'testK_2',
                style: 'background-color:orange; border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.2,
                xtype: 'component',
                id: 'testK_3',
                style: 'height:25px;background-color:#0f0;border: 1px solid red; margin: 3px;'
            },
            // row 2
            {
                columnWidth: 0.4,
                xtype: 'component',
                height: 30,
                id: 'testK_4',
                style: 'background-color:#00f; border: 1px solid red; margin: 3px;'
            },
            {
                columnWidth: 0.6,
                xtype: 'component',
                id: 'testK_5',
                style: 'height:15px;background-color:cyan; border: 1px solid red; margin: 3px;'
            }
        ]
    },
    //-------------------------------------------------------------------------
    L: {
        xtype: 'panel',
        width: 140,
        height: 145,
        x: 730, y: 190,
        title: 'Test L - tbar+btn',
        bodyStyle: 'background-color: orange; color:white;',
        html: 'Body',
        tbar: [
            {
                text: 'Button',
                id: 'testL_tbtn1',
                handler: function (btn) {
                    alert(btn.text);
                }
            },
            {
                text: 'B',
                iconCls: 'iconBtn',
                id: 'testL_tbtn2',
                handler: function (btn) {
                    alert(btn.text);
                }
            },
            '->',
            {
                iconCls: 'iconBtn',
                id: 'testL_tbtn3',
                handler: function (btn) {
                    alert(btn.text);
                }
            }
        ]
    },
    //-------------------------------------------------------------------------
    //*
    M: {
        xtype: 'panel',
        width: 170,
        //height: 125,
        title: 'Test M - CheckBoxGroup/%',
        id: 'testM',
        x: 875, y: 400,
        //resizable: true,
        layout: 'anchor',
        bodyPadding: 5,
        items: [{
            xtype: 'checkboxgroup',
            id: 'testM_chkgroup',
            columns: 2,
            anchor: '0',
            items: [
                { id: 'testM_chk1', boxLabel: 'A' },
                { id: 'testM_chk2', boxLabel: 'B' },
                { id: 'testM_chk3', boxLabel: 'C' }
            ]
        }]
    }, /* M */
    //-------------------------------------------------------------------------
    //*
    N: {
        xtype: 'panel',
        width: 175,
        //height: 125,
        title: 'Test N - CheckBoxGroup/V',
        id: 'testN',
        x: 1055, y: 400,
        //resizable: true,
        layout: 'anchor',
        bodyPadding: 5,
        items: [{
            xtype: 'checkboxgroup',
            id: 'testN_chkgroup',
            columns: [0.5, 0.5],
            vertical: true,
            anchor: '0',
            items: [
                {
                    boxLabel: 'AB', id: 'testN_chk1',//width: 60,
                    listeners: {
                        change: function (comp) {
                            if (comp.checked) {
                                comp.markInvalid("Blah");
                            } else {
                                comp.clearInvalid();
                            }
                        }
                    }
                },
                { boxLabel: 'BCD', id: 'testN_chk2' },
                { boxLabel: 'CDEF', id: 'testN_chk3' }
            ]
        }]
    }, /* M */
    //-------------------------------------------------------------------------
    //*
    O: {
        xtype: 'fieldset',
        width: 170,
        //height: 125,
        title: 'Test O - FieldSet',
        id: 'testO',
        x: 875, y: 490,
        defaults: { anchor: 0 },
        layout: 'anchor',
        collapsible: true,
        items: [
            {
                hideLabel: true,
                xtype: 'radiogroup',
                columns: [100,100],
                items: [
                    { boxLabel: 'Radio A', checked: true, name: 'testO_radiogrp' },
                    { boxLabel: 'Radio B', name: 'testO_radiogrp' },
                    { boxLabel: 'Radio C', name: 'testO_radiogrp' }
                ]
            }
        ]
    }, /* O */
    //-------------------------------------------------------------------------
    //*
    P: {
        xtype: 'fieldset',
        width: 175,
        //height: 125,
        title: 'Test P - FieldSet',
        id: 'testP',
        x: 1055, y: 490,
        layout: 'auto',  // tests natural width...
        collapsible: true,
        items: [
            {
                title: 'Foo',
                xtype: 'panel',
                html: 'Some stuff',
                bodyPadding: 2,
                collapsible: true
            }
        ]
    }, /* O */
    //-------------------------------------------------------------------------
    //*
    Q: {
        xtype: 'panel',
        width: 170,
        //height: 125,
        title: 'Test Q - Panel+FieldSet',
        id: 'testQ',
        x: 875, y: 580,
        bodyPadding: 15,
        //frame: true,
        layout: 'anchor',
        items: [
            {
                xtype: 'fieldset',
                title: 'FieldSet',
                id: 'testQ_fldset',
                //checkboxToggle: true,
                collapsible: true,
                anchor: '0',
                defaults: { anchor: '0', labelWidth: 50 },
                items: [
                    { id: 'testQ_comp1', xtype: 'textfield', fieldLabel: 'Text 1' },
                    { id: 'testQ_comp2', xtype: 'textfield', fieldLabel: 'Text 2' }
                ]
            }
        ]
    }, /* Q */
    //-------------------------------------------------------------------------
    //*
    R: {
        xtype: 'panel',
        //width: 250,
        //height: 180,
        title: 'Test R - dock autoSize',
        x: 10, y: 720,
        //resizable: true,
        anchor: 'none',
        bodyStyle: 'background-color:red',
        defaultType: 'component',
        layout: {
            type: 'hbox'
        },
        dockedItems: [
            {
                xtype: 'component',
                id: 'testR_top',
                html: 'Top<br>test',
                dock: 'top',
                style: 'border: 1px solid'
            },
            {
                xtype: 'component',
                id: 'testR_right',
                html: 'Right<br>X',
                dock: 'right',
                style: 'border: 1px solid'
            },
            {
                xtype: 'component',
                id: 'testR_bot',
                html: 'Bottom<br>test',
                dock: 'bottom',
                style: 'border: 1px solid'
            },
            {
                xtype: 'component',
                id: 'testR_left',
                html: 'Left X Y Z',
                dock: 'left',
                style: 'border: 1px solid'
            }
        ],
        items: [
            {
                width: 73,
                height: 50,
                id: 'testR_leftBox',
                style: 'background-color:green'
            },
            {
                id: 'testR_centerBox',
                html: 'A B C',
                style: {
                    'background-color':'yellow'
                }
            },
            {
                width: 50,
                height: 40,
                id: 'testR_rightBox',
                style: 'background-color:blue'
            }
        ]
    }, /* R */
    //-------------------------------------------------------------------------
    S: {
        xtype: 'panel',
        title: 'Test S - auto body',
        id: 'testS',
        //width: 110,
        //height: 180,
        //title: 'Test S - box autoSize',
        x: 1055, y: 580,
        defaultType: 'component',
        layout: 'hbox',
        items: [
            {
                html: 'Abc Bcd C D E Foobar G H I J',
                id: 'testS_comp',
                style: {
                    'background-color': 'yellow',
                    padding: '10px'
                }
            }
        ]
    }, /* S */
    //-------------------------------------------------------------------------
    T: {
        xtype: 'panel',
        width: 355,
        height: 200,
        x: 875, y: 745,
        title: 'Test T - border',
        layout: {
            //padding: 5,
            type: 'border'
        },
        items: [
            {
                region: 'north',
                id: 'testT_north',
                title: 'North',
                height: '35%',
                collapsible: true,
                margins: '5 5 0 5',
                split: true
            },
            {
                region: 'west',
                id: 'testT_west',
                title: 'West',
                ctitle: '-W-',
                width: '30%',
                collapsible: true,
                collapseMode: 'mini',
                margins: '0 0 0 5',
                split: true
            },
            {
                region: 'center',
                id: 'testT_center',
                bodyStyle: 'background-color: green; color:white;',
                html: 'Body'
            },
            {
                region: 'east',
                id: 'testT_east',
                title: 'East',
                flex: 0.3, // width:'30%' said another way
                collapsible: true,
                margins: '0 5 0 0',
                split: true
            },
            {
                region: 'south',
                id: 'testT_south',
                title: 'South',
                flex: 0.35, // height:'35%' said another way
                collapsible: true,
                collapseMode: 'mini',
                margins: '0 5 5 5',
                split: true
            }
        ]
    },
    U: {
        xtype: 'panel',
        frame: true,
        title: 'U - Framed Panel',
        width: 250,
        height: 200,
        x: 10,
        y: 860,
        bodyStyle: {
            "background-color": 'red'
        },
        tbar: {
            xtype: 'toolbar',
            items: {
                text: 'Button'
            }
        }
    },
    V: {
        xtype: 'panel',
        frame: true,
        title: 'V - Framed Panel',
        width: 250,
        height: 200,
        x: 270,
        y: 910,
        bodyStyle: {
            "background-color": 'red'
        },
        lbar: {
            xtype: 'toolbar',
            items: {
                text: 'Button'
            }
        }
    },
    W: {
        xtype: 'window',
        draggable: false,
        resizable: false,
        title: 'W - Window',
        floating: false,
        hidden: false,
        width: 250,
        height: 200,
        x: 530,
        y: 910,
        fbar: {
            xtype: 'toolbar',
            items: {
                text: 'Button'
            }
        }
    },
    //-------------------------------------------------------------------------
    0:0
}; // testCases

function go (tests) {
    var start = new Date(),
        viewport = {
            xtype: 'viewport',
            id: 'viewport',
            autoScroll: true,
            layout: {
                type: 'absolute',
                defaultAnchor: null
            },
            items: [{
                xtype: 'component',
                x: 10, y: 5,
                html: 'Use ?test=AB on the URL to run only certain test(s) and ?perf to ' +
                    'turn of Perf monitor. These can be combined "test=A&amp;perf"' + 
                    '<a href="javascript:void(window.open(\'../../../examples/layout-analyzer/layout-analyzer.html\',\'diag\'))">Diag</a>'
            }]
            //html: '<div style="padding: 6px;">' +
            //        'Use ?test=AB on the URL to run only certain test(s) and ?perf to ' +
            //        'turn of Perf monitor. These can be combined "test=A&amp;perf"' +
            //    '</div>'
        },
        minX = 1e9,
        minY = 1e9,
        testSet = [],
        i, len, test, c, id;

    //tests = 'C';

    if (!hasOption('notips')) {
        Ext.QuickTips.init();
    }

    for (i = 0, len = tests.length; i < len; ++i) {
        c = tests.charAt(i);
        id = 'test' + c;

        test = testCases[c];

        if (typeof test == 'function') {
            test = test(id);
        }

        if (test) {
            test.id = id;
            if (minX > test.x) {
                minX = test.x;
            }
            if (minY > test.y) {
                minY = test.y;
            }

            //*
            if (test.title) {
                var tools = test.tools || (test.tools = []);
                tools.push({
                    type: 'refresh',
                    //qtip: 'Run the layout this component',
                    qtip: loremIpsum,
                    handler: function (e, toolEl, owner) {
                        owner.doLayout();
                    }
                });
            }/**/

            viewport.items.push(test);
            testSet.push(test);
        }
    }

    minX -= 10;
    minY -= 35;

    for (i = 0, len = testSet.length; i < len; ++i) {
        testSet[i].x -= minX;
        testSet[i].y -= minY;
    }

    Ext.ComponentManager.create(viewport);

    var dt = new Date() - start;
    Ext.log('totalTime = ' + dt);
}

Ext.onReady(function () {
    var tests = hasOption('test');

    if (hasOption('nocss3')) {
        Ext.supports.CSS3BorderRadius = false;
        Ext.getBody().addCls('x-nbr x-nlg');
    }

    if (!tests) {
        tests = '';
        Ext.Object.each(testCases, function (name) {
            if (name != '0') {
                tests += name;
            }
        });
    }

    if (hasOption('perf')) {
        Ext.Perf.setup();
        Ext.Perf.monitor('go', function () {
            go(tests);
        });
        Ext.Perf.report();
    } else {
        go(tests);
    }
});
