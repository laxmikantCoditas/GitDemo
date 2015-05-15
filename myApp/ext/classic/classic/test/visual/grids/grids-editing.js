Ext.require('*');
Ext.define('Foo', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'date', type: 'date' },
        { name: 'bool', type: 'boolean' },
        { name: 'numb', type: 'number' },
        { name: 'time', type: 'date' }
    ]
});
Ext.onReady(function() {
    
    var simpleTree, simpleTreeWithArrows, propertyGrid, grid, grid2, tree, tree2;

    simpleTree = Ext.create('Ext.tree.Panel', {
        title: 'Simple Tree - Cell Editing',
        width: 300,
        height: 200,
        plugins: [Ext.create('Ext.grid.plugin.CellEditing')],
        columns: [
            { 
                xtype: 'treecolumn',
                dataIndex: 'name',
                header: 'Name',
                editor: 'textfield',
                flex: 1
            }
        ],
        store: Ext.create('Ext.data.TreeStore', {
            model: 'Foo',
            root: {
                expanded: true,
                children: [
                    { name: "Lorem ipsum dolor", leaf: true },
                    { name: "sit amet", expanded: true, children:
                        [
                            { name: "consectetur", leaf: true },
                            { name: "adipisicing elit", children: 
                                [
                                    { name: "sed do eiusmod", leaf: true },
                                    { name: "tempor", leaf: true }
                                ]
                            }
                        ]
                    },
                    { name: "incididunt ut labore", leaf: true }
                ]
            }
        }),
        rootVisible: false
    });

    simpleTreeWithArrows = Ext.create('Ext.tree.Panel', {
        title: 'Tree with Arrows/Checkboxes/Row Lines/Cell Editing',
        rowLines: true,
        width: 300,
        height: 200,
        useArrows: true,
        plugins: [Ext.create('Ext.grid.plugin.CellEditing')],
        columns: [
            { xtype: 'treecolumn', dataIndex: 'name', header: 'Name', editor: 'textfield', flex: 1 }
        ],
        store: Ext.create('Ext.data.TreeStore', {
            model: 'Foo',
            root: {
                expanded: true,
                name: 'Root Node',
                children: [
                    { name: "Lorem ipsum dolor", checked: true, leaf: true },
                    { name: "sit amet", expanded: true, children:
                        [
                            { name: "consectetur", leaf: true },
                            { name: "adipisicing elit", checked: false, children: 
                                [
                                    { name: "sed do eiusmod", leaf: true },
                                    { name: "tempor", checked: true, leaf: true }
                                ]
                            }
                        ]
                    },
                    { name: "incididunt ut labore", leaf: true }
                ]
            }
        })
    });

    propertyGrid = Ext.create('Ext.grid.property.Grid', {
        title: 'Properties Grid',
        width: 300,
        rowLines: false,
        source: {
            "(name)": "My Object",
            "Created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
            "Available": false,
            "Version": .01,
            "Description": "A test object"
        }
    });

    grid = Ext.create('Ext.grid.Panel', {
        title: 'Grid with Cell Selection - Cell Editing',
        selModel: Ext.create('Ext.selection.CellModel'),
        store: Ext.create('Ext.data.Store', {
            model: 'Foo',
            data:{'items':[
                { name: "Lorem", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5 },
                { name: "ipsum", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5 },
                { name: "dolor", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5 },
                { name: "sit", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5 }
            ]},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        }),
        plugins: [Ext.create('Ext.grid.plugin.CellEditing')],
        columns: [
            { header: 'String',  dataIndex: 'name', editor: 'textfield' },
            { header: 'Date', dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield'},
            { header: 'Time', dataIndex: 'time', xtype: 'datecolumn', editor: 'timefield', format: "g:i A" },
            { header: 'Boolean', dataIndex: 'bool', xtype: 'booleancolumn', editor: 'checkboxfield' },
            { header: 'Number', dataIndex: 'numb', xtype: 'numbercolumn', editor: 'numberfield' },
            { xtype: 'actioncolumn', icon: '../shared/icons/delete.gif', width: 21 }
        ],
        height: 200,
        width: 550
    });

    grid2 = Ext.create('Ext.grid.Panel', {
        title: 'Grid with Checkbox Selection, No Striped Rows, and No Row Lines - Row Editing',
        columnLines: true,
        rowLines: false,
        viewConfig: {
            stripeRows: false
        },
        store: Ext.create('Ext.data.Store', {
            model: 'Foo',
            data:{'items':[
                { name: "Lorem", date: '1/1/2011', time: '1/1/2008 12:15 AM', bool: true, numb: 5 },
                { name: "ipsum", date: '1/1/2011', time: '1/1/2008 12:15 AM', bool: true, numb: 5 },
                { name: "dolor", date: '1/1/2011', time: '1/1/2008 12:15 AM', bool: true, numb: 5 },
                { name: "sit", date: '1/1/2011', time: '1/1/2008 12:15 AM', bool: true, numb: 5 }
            ]},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        }),
        plugins: [Ext.create('Ext.grid.plugin.RowEditing')],
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns: [
            { header: 'String',  dataIndex: 'name', editor: 'textfield' },
            { header: 'Date', dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield'},
            { header: 'Time', dataIndex: 'time', xtype: 'datecolumn', editor: 'timefield', format: "g:i A" },
            { header: 'Boolean', dataIndex: 'bool', xtype: 'booleancolumn', editor: 'checkboxfield' },
            { header: 'Number', dataIndex: 'numb', xtype: 'numbercolumn', editor: 'numberfield' }
        ],
        height: 200,
        width: 550
    });

    tree = Ext.create('Ext.tree.Panel', {
        plugins: [Ext.create('Ext.grid.plugin.CellEditing')],
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns: [
            { xtype: 'treecolumn', dataIndex: 'name', header: 'Name', editor: 'textfield' },
            { xtype: 'datecolumn', dataIndex: 'date', header: 'Date', editor: 'datefield' },
            { xtype: 'booleancolumn', dataIndex: 'bool', header: 'Boolean', editor: 'checkboxfield' },
            { xtype: 'numbercolumn', dataIndex: 'numb', header: 'Number', editor: 'numberfield' },
            { xtype: 'datecolumn', dataIndex: 'time', header: 'Time', editor: 'timefield', format: "g:i A" }
        ],
        title: 'Tree Grid with Checkbox Selection - Cell Editing',
        width: 550,
        height: 200,
        store: Ext.create('Ext.data.TreeStore', {
            model: 'Foo',
            root: {
                expanded: true,
                name: 'Root Node',
                date: '1/15/2011',
                time: '1/1/2008',
                bool: 'false',
                numb: '10',
                children: [
                    { name: "Lorem ipsum dolor", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true },
                    { name: "sit amet", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, expanded: true, children:
                        [
                            { name: "consectetur", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true },
                            { name: "adipisicing elit", date: '5/1/2011', time: '1/1/2008', bool: false, numb: 5, children: 
                                [
                                    { name: "sed do eiusmod", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true },
                                    { name: "tempor", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true }
                                ]
                            }
                        ]
                    },
                    { name: "incididunt ut labore", date: '5/1/2011', time: '1/1/2008', bool: false, numb: 5, leaf: true }
                ]
            }
        })
    });

    tree2 = Ext.create('Ext.tree.Panel', {
        plugins: [Ext.create('Ext.grid.plugin.RowEditing')],
        rowLines: true,
        lines: false,
        viewConfig: {
            stripeRows: true
        },
        columns: [
            { xtype: 'treecolumn', dataIndex: 'name', header: 'Name', editor: 'textfield' },
            { xtype: 'datecolumn', dataIndex: 'date', header: 'Date', editor: 'datefield' },
            { xtype: 'booleancolumn', dataIndex: 'bool', header: 'Boolean', editor: 'checkboxfield' },
            { xtype: 'numbercolumn', dataIndex: 'numb', header: 'Number', editor: 'numberfield' },
            { xtype: 'datecolumn', dataIndex: 'time', header: 'Time', editor: 'timefield', format: "g:i A" },
            { xtype: 'actioncolumn', icon: '../shared/icons/delete.gif', width: 21 }
        ],
        title: 'Tree Grid with Cell Selection, Striped Rows, and No Tree Lines - Row Editing',
        width: 550,
        height: 200,
        store: Ext.create('Ext.data.TreeStore', {
            model: 'Foo',
            root: {
                expanded: true,
                children: [
                    { name: "Lorem ipsum dolor", date: '1/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true },
                    { name: "sit amet", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, expanded: true, children:
                        [
                            { name: "consectetur", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true },
                            { name: "adipisicing elit", date: '5/1/2011', time: '1/1/2008', bool: false, numb: 5, children: 
                                [
                                    { name: "sed do eiusmod", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true, checked: true },
                                    { name: "tempor", date: '5/1/2011', time: '1/1/2008', bool: true, numb: 5, leaf: true, checked: false }
                                ]
                            }
                        ]
                    },
                    { name: "incididunt ut labore", date: '5/1/2011', time: '1/1/2008', bool: false, numb: 5, leaf: true }
                ]
            }
        }),
        rootVisible: false
    });

    Ext.create('Ext.container.Viewport', {
        items: [
            {
                layout: 'hbox',
                xtype: 'container',
                items: [
                    simpleTree,
                    simpleTreeWithArrows,
                    propertyGrid
                ]
            },
            {
                layout: 'hbox',
                xtype: 'container',
                items: [ grid, grid2 ]
            },
            {
                layout: 'hbox',
                xtype: 'container',
                items: [ tree, tree2 ]
            }
        ]
    });

});