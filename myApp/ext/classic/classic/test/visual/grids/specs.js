describe("Grid Visual Tests", function() {
    describe("grids and trees", function() {

        var width = 220,
            stores = [
                Ext.create('Ext.data.Store', {
                    fields:[
                        { name: 'string', type: 'string' },
                        { name: 'date', type: 'date' },
                        { name: 'bool', type: 'boolean' }
                    ],
                    data: [
                        { string: 'sit amet', date: '1/1/1981', bool: true },
                        { string: 'consectetur adipisicing', date: '12/31/2012', bool: false },
                        { string: 'elit', date: '4/4/2004', bool: true },
                        { string: 'sed do eiusmod', date: '9/9/1999', bool: false },
                        { string: 'tempor', date: '1/1/2001', bool: false },
                        { string: 'incididunt', date: '11/12/2013', bool: true },
                        { string: 'ut labore', date: '5/7/2007', bool: true },
                        { string: 'et dolore magna', date: '7/6/2005', bool: false }
                    ],
                    sorters: [{
                        property: 'string',
                        direction: 'ASC'
                    }]
                }),
                Ext.create('Ext.data.Store', {
                    fields:[
                        { name: 'string', type: 'string' },
                        { name: 'time', type: 'date' },
                        { name: 'number', type: 'int' }
                    ],
                    data: [
                        { string: 'sit amet', time: '1/1/1981 12:15 AM', number: 0 },
                        { string: 'consectetur adipisicing', time: '12/31/2012 6:30 PM', number: 20 },
                        { string: 'elit', time: '4/4/2004 8:00 AM', number: 5280 },
                        { string: 'sed do eiusmod', time: '9/9/1999 12:45 PM', number: 42 },
                        { string: 'tempor', time: '1/1/2001 11:00 PM', number: 42 },
                        { string: 'incididunt', time: '11/12/2013 8:20 AM', number: 42 },
                        { string: 'ut labore', time: '5/7/2007 10:15 PM', bool: true },
                        { string: 'et dolore magna', time: '7/6/2005 1:00 PM', bool: false }
                    ],
                    sorters: [{
                        property: 'number',
                        direction: 'DESC'
                    }]
                })
            ],
            treeStores = [
                Ext.create('Ext.data.TreeStore', {
                    fields:[
                        { name: 'string', type: 'string' },
                        { name: 'date', type: 'date' },
                        { name: 'bool', type: 'boolean' }
                    ],
                    root: {
                        expanded: true,
                        children: [
                            { string: "loading", loading: true, date: '1/1/1981', bool: true },
                            { string: "expanded", expanded: true, date: '12/31/2012', bool: false, children: [
                                { string: "check leaf", checked: true, leaf: true, date: '4/4/2004', bool: true },
                                { string: "collapsed", date: '9/9/1999', bool: false },
                                { string: "leaf end", leaf: true, date: '1/1/2001', bool: false }
                            ] },
                            { string: "check expanded", expanded: true, checked: true, date: '11/12/2013', bool: true, children: [
                                // TODO: shouldn't need to specify children here if there are no children! https://sencha.jira.com/browse/EXTJSIV-7528
                                { string: "expanded end", expanded: true, children: [], date: '5/7/2007', bool: true }
                            ] },
                            { string: "collapsed end", date: '7/6/2005', bool: false }
                        ]
                    }
                }),
                Ext.create('Ext.data.TreeStore', {
                    fields:[
                        { name: 'string', type: 'string' },
                        { name: 'time', type: 'date' },
                        { name: 'number', type: 'int' }
                    ],
                    root: {
                        expanded: true,
                        children: [
                            { string: "loading", loading: true, time: '1/1/1981 12:15 AM', number: 0 },
                            { string: "expanded", expanded: true, time: '12/31/2012 6:30 PM', number: 20, children: [
                                { string: "check leaf", checked: true, leaf: true, time: '4/4/2004 8:00 AM', number: 5280 },
                                { string: "collapsed", time: '9/9/1999 12:45 PM', number: 42 },
                                { string: "leaf end", leaf: true, time: '1/1/2001 11:00 PM', number: 42 }
                            ] },
                            { string: "check expanded", expanded: true, checked: true, time: '11/12/2013 8:20 AM', number: 42, children: [
                                // TODO: shouldn't need to specify children here if there are no children! https://sencha.jira.com/browse/EXTJSIV-7528
                                { string: "expanded end", expanded: true, children: [], time: '5/7/2007 10:15 PM', bool: true }
                            ] },
                            { string: "collapsed end", time: '7/6/2005 1:00 PM', bool: false }
                        ]
                    }
                })
            ],
            columns = [
                [
                    { text: 'Lorem', flex: 1, dataIndex: 'string', editor: 'textfield' },
                    { text: 'ipsum', width: 85, dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield' },
                    { text: 'dolor', width: 35, dataIndex: 'bool', xtype: 'booleancolumn', editor: 'checkboxfield' }
                        
                ],
                [
                    {xtype: 'rownumberer'},
                    { text: 'ipsum', width: 80, align: 'center', dataIndex: 'time', xtype: 'datecolumn', format: "g:i A", editor: 'timefield' },
                    { text: 'dolor', width: 55, align: 'center', dataIndex: 'number', xtype: 'numbercolumn', editor: 'numberfield' },
                    { text: 'Lorem', width: 100, align: 'center', dataIndex: 'string', editor: 'textfield' }
                ],
                [
                    { text: 'Lorem', flex: 1, align: 'right', dataIndex: 'string', editor: 'textfield' },
                    { text: 'ipsum', width: 85, align: 'right', dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield' },
                    { text: 'dolor', width: 35, align: 'right', xtype: 'actioncolumn', icon: 'sdk/extjs/examples/shared/icons/fam/delete.gif' }
                        
                ],
                [
                    { text: 'ipsum', width: 80, align: 'left', dataIndex: 'time', xtype: 'datecolumn', format: "g:i A", editor: 'timefield' },
                    { text: 'dolor', width: 55, align: 'left', dataIndex: 'number', xtype: 'numbercolumn', editor: 'numberfield' },
                    { text: 'Lorem', width: 100, align: 'left', dataIndex: 'string', editor: 'textfield' }
                ]
            ],
            treeColumns = [
                [
                    { text: 'Lorem', flex: 1, dataIndex: 'string', xtype: 'treecolumn', editor: 'textfield' },
                    { text: 'ipsum', width: 85, dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield' },
                    { text: 'dolor', width: 35, dataIndex: 'bool', xtype: 'booleancolumn', editor: 'checkboxfield' }
                        
                ],
                [
                    { text: 'ipsum', width: 80, align: 'center', dataIndex: 'time', xtype: 'datecolumn', format: "g:i A", editor: 'timefield' },
                    { text: 'dolor', width: 55, align: 'center', dataIndex: 'number', xtype: 'numbercolumn', editor: 'numberfield' },
                    { text: 'Lorem', width: 100, dataIndex: 'string', xtype: 'treecolumn', editor: 'textfield' }
                ],
                [
                    { text: 'Lorem', flex: 1, dataIndex: 'string', xtype: 'treecolumn', editor: 'textfield' },
                    { text: 'ipsum', width: 85, align: 'right', dataIndex: 'date', xtype: 'datecolumn', editor: 'datefield' },
                    { text: 'dolor', width: 35, align: 'right', xtype: 'actioncolumn', icon: 'sdk/extjs/examples/shared/icons/fam/delete.gif' }
                        
                ],
                [
                    { text: 'ipsum', width: 80, align: 'left', dataIndex: 'time', xtype: 'datecolumn', format: "g:i A", editor: 'timefield' },
                    { text: 'dolor', width: 55, align: 'left', dataIndex: 'number', xtype: 'numbercolumn', editor: 'numberfield' },
                    { text: 'Lorem', width: 100, dataIndex: 'string', xtype: 'treecolumn', editor: 'textfield' }
                ]
            ],
            baseViewConfig = {
                getRowClass: function(record, rowIndex, rowParams, store){
                    return store.indexOf(record) === 2 ? Ext.baseCSSPrefix + 'grid-row-over' : '';
                }
            },
            originalFieldBlurFn, container;

        // mark a couple fields in each store as dirty to test the visual appearance of the dirty flag
        stores[0].getAt(0).set('date', '1/2/1981');
        stores[1].getAt(1).set('time', '1/2/1981 12:15 AM');

        function create(options) {
            var y = 0,
                items = [],
                hideHeaders, isTree;

            options = options || {};

            isTree = options.xtype === 'treepanel';
            hideHeaders = options.hideHeaders;

            if (isTree) {
                options.rootVisible = false;
            } else {
                options.xtype = 'grid';
            }

            Ext.each([
                {},
                { selModel: { selType: 'cellmodel' } },
                // TODO: shouldn't have to specify mode once https://sencha.jira.com/browse/EXTJSIV-5273 is fixed
                { selModel: { selType: 'checkboxmodel', mode: 'MULTI' } },
                {}
            ], function(rowConfig, rowIndex) {
                var height,
                    x = 0;
                Ext.each(isTree ? [
                    { viewConfig: baseViewConfig },
                    { viewConfig: Ext.apply({ stripeRows: true }, baseViewConfig) },
                    { rowLines: true, viewConfig: baseViewConfig },
                    { rowLines: true, viewConfig: Ext.apply({ stripeRows: true }, baseViewConfig) }
                ] : [
                    { rowLines: false, viewConfig: Ext.apply({ stripeRows: false }, baseViewConfig) },
                    { rowLines: false, viewConfig: baseViewConfig },
                    { viewConfig: Ext.apply({ stripeRows: false }, baseViewConfig) },
                    { viewConfig: baseViewConfig }
                ], function(colConfig, colIndex) {
                    var store = (isTree ? treeStores : stores)[rowIndex % 2],
                        config;
                    
                    height = 211;

                    if (hideHeaders) {
                        height -= 23;
                    }

                    if (rowIndex > 1) {
                        // last two rows of grids have vertical scrolling
                        height -= 30;
                    }
                    config = Ext.apply({
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        store: store,
                        columns: (isTree ? treeColumns : columns)[rowIndex],
                        listeners: {
                            viewready: function(grid) {
                                var selModel = grid.getSelectionModel(),
                                    view = grid.getView(),
                                    selType = selModel.selType,
                                    ignoreFirstColumn = (selType === 'checkboxmodel' || view.getHeaderAtIndex(0).xtype === 'rownumberer'), 
                                    index = ignoreFirstColumn ? colIndex + 1 : colIndex,
                                    columnHeader = view.getHeaderAtIndex(index),
                                    record;

                                if (selModel.selType === 'cellmodel') {
                                    selModel.setCurrentPosition({ row: 1, column: 0 });
                                } else {
                                    // checkboxmodel and rowmodel
                                    selModel.select(1);
                                }
                                if (colIndex < 3 && rowIndex < 3 && grid.editingPlugin) {
                                    record = view.getRecord(view.getNode(colIndex));
                                    grid.editingPlugin.startEdit(record, columnHeader);
                                }
                                
                                if (!hideHeaders) {
                                    if (columnHeader) {
                                        columnHeader.titleEl.addCls(Ext.baseCSSPrefix + 'column-header-over');
                                    } else {
                                        view.getHeaderAtIndex(ignoreFirstColumn ? 2 : 1).titleEl.addCls(Ext.baseCSSPrefix + 'column-header-open');
                                    }
                                }
                            }

                        }
                    }, options);
                    Ext.apply(config, colConfig, rowConfig);

                    if (options.useArrows) {
                        if (rowIndex % 2) {
                            store.getRootNode().cascadeBy(function(node) {
                                // simulate a mouseover on all expander elements in this store
                                node.set('cls', Ext.baseCSSPrefix + 'tree-expander-over');
                            });
                        }
                    } else if (rowIndex % 2) {
                        config.lines = false;
                    }
                    items.push(config);

                    x += width + 10;
                });
                y += height + 10;
            });

            container = Ext.widget({
                renderTo: document.body,
                xtype: 'container',
                layout: 'absolute',
                items: items
            });
        }

        function screenshot() {
            takeScreenshot({
                area: {
                    x: 0,
                    y: 0,
                    width: 910,
                    height: 820
                },
                scroll: false
            });
        }

        beforeEach(function() {
            // allow multiple cell editors to be shown simultaneously by disabling the 
            // onFieldBlur handler that hides the editor when the field is blurred
            var proto = Ext.Editor.prototype;

            originalFieldBlurFn = proto.onFieldBlur;

            proto.onFieldBlur = Ext.emptyFn;
        });

        afterEach(function() {
            container.destroy();
            Ext.Editor.prototype.onFieldBlur = originalFieldBlurFn;
        });

        it("should render grids", function() {
            create();
            screenshot();
        });

        it("should render grids with cell editors", function() {
            create({
                plugins: [{ ptype: 'cellediting' }]
            });
            // cell editor has a 15 ms delayed task to show the editor.  Wait for the editor
            // to be displayed before taking screenshot.
            waits(30);
            runs(function() {
                screenshot();
            });
        });

        it("should render grids with row editors", function() {
            create({
                plugins: [{ ptype: 'rowediting' }]
            });
            screenshot();
        });

        it("should render grids with no headers", function() {
            create({
                hideHeaders: true
            });
            screenshot();
        });

        it("should render trees", function() {
            create({
                xtype: 'treepanel'
            });
            screenshot();
        });

        it("should render trees with cell editors", function() {
            create({
                xtype: 'treepanel',
                plugins: [{ ptype: 'cellediting' }]
            });
            // cell editor has a 15 ms delayed task to show the editor.  Wait for the editor
            // to be displayed before taking screenshot.
            waits(30);
            runs(function() {
                screenshot();
            });
        });

        it("should render trees with row editors", function() {
            create({
                xtype: 'treepanel',
                plugins: [{ ptype: 'rowediting' }]
            });
            screenshot();
        });

       it("should render trees with arrows", function() {
            create({
                xtype: 'treepanel',
                useArrows: true
            });
            screenshot();
        }); 

        it("should render trees with no headers", function() {
            create({
                xtype: 'treepanel',
                hideHeaders: true
            });
            screenshot();
        });
    });

    describe("column headers", function() {
        it("should render grouped headers", function() {
            var grid = Ext.create('Ext.grid.Panel', {
                header: false,
                border: false,
                columns: [
                    {
                        text: 'Column A'
                    },
                    {
                        text: 'Column B',
                        columns: [{
                            text: 'Column C'
                        }]
                    },
                    {
                        text: 'Column D',
                        columns: [{
                            text: 'Column E'
                        }, {
                            text: 'Column<br/>F',
                            columns: [{
                                text: 'Column G'
                            }]
                        }]
                    }
                ],
                height: 84,
                width: 400,
                renderTo: Ext.getBody()
            });

            takeScreenshot({
                area: {
                    x: 0,
                    y: 0,
                    width: 400,
                    height: 84
                },
                scroll: false
            });

            grid.destroy();
        });

        it("should render nested grouped headers", function() {
            var smallWidth = 50,
                largeWidth = 200,
                grid = Ext.create('Ext.grid.Panel', {
                    header: false,
                    border: false,
                    columns: [
                        {
                            text: 'A',
                            width: largeWidth
                        },
                        {
                            text: 'B',
                            columns: [{
                                text: 'C'
                            }, {
                                text: 'D',
                                columns: [{
                                    text: 'E',
                                    width: smallWidth

                                },{
                                    text: 'F',
                                    width: smallWidth
                                }]
                            }]
                        },
                        {
                            text: 'G',
                            columns: [{
                                text: 'H',
                                width: smallWidth
                            }, {
                                text: 'I',
                                columns: [{
                                    text: 'J',
                                    width: smallWidth
                                }]
                            }]
                        },
                        {
                            text: 'K',
                            columns: [{
                                text: 'L',
                                columns: [{
                                    text: 'M',
                                    width: smallWidth
                                },{
                                    text: 'N',
                                    width: smallWidth
                                }]
                            },{
                                text: 'O'
                            }]
                        },
                        {
                            text: 'P',
                            columns: [{
                                text: 'Q',
                                columns: [{
                                    text: 'R',
                                    columns: [{
                                        text: 'S',
                                        width: smallWidth
                                    },{
                                        text: 'T',
                                        width: smallWidth
                                    }]
                                },{
                                    text: 'U',
                                    width: smallWidth
                                }]
                            },{
                                text: 'V',
                                width: smallWidth
                            }]
                        },
                        {
                            text: 'W',
                            width: largeWidth
                        }
                    ],
                    height: 91,
                    width: 1200,
                    renderTo: Ext.getBody()
                });

            takeScreenshot({
                area: {
                    x: 0,
                    y: 0,
                    width: 1200,
                    height: 91
                },
                scroll: false
            });

            grid.destroy();
        });

    });

});