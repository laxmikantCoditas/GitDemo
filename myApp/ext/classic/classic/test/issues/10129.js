Ext.Loader.setConfig({
    enabled: true,
    paths: {
    }
});
Ext.require('Ext.grid.plugin.CellEditing');
Ext.onReady(function () {
    Ext.onReady(function () {


        Ext.override(Ext.grid.plugin.CellEditing, {

            initCancelTriggers: function () {
                var me = this,
                    grid = me.grid,
                    view = grid.view;

                //view.addElListener('mousewheel', me.cancelEdit, me);
                me.mon(view, 'bodyscroll', me.onBodyScroll, me);
                me.mon(grid, {
                    columnresize: me.cancelEdit,
                    columnmove: me.cancelEdit,
                    scope: me
                });
            },
            initFieldAccessors: function (columns) {
                columns = [].concat(columns);


                var me = this,
                    c,
                    cLen = columns.length,
                    column;

                for (c = 0; c < cLen; c++) {
                    column = columns[c];

                    Ext.applyIf(column, {
                        getEditor: function (record, defaultField) {
                            return me.getColumnField(this, defaultField);
                        },

                        setEditor: function (field) {
                            me.setColumnField(this, field);
                        }
                    });

//Subheader
                    if (column.items && column.items.items && column.items.items.length > 0) {

                        Ext.each(column.items.items, function (col, index) {

                            Ext.applyIf(col, {
                                getEditor: function (record, defaultField) {
                                    return me.getColumnField(this, defaultField);
                                },

                                setEditor: function (field) {
                                    me.setColumnField(this, field);
                                }
                            });

                        }, me)

                    }


                }
            },

            onSpecialKey: function (ed, field, e) {

                var me = this,
                    grid = field.up('gridpanel'),
                    sm;
                var rowSelected = grid.view.getSelectionModel().getCurrentPosition().row;
                var colSelected = grid.view.getSelectionModel().getCurrentPosition().column;
                try {
                    if (e.getKey() === e.TAB) {
                        e.stopEvent();
                        if (e.shiftKey) {
                            e.stopEvent();
                            me.startEditByPosition({ row: rowSelected, column: colSelected - 1 });
                        }
                        else {

                            e.stopEvent();
                            me.startEditByPosition({ row: rowSelected, column: colSelected + 1 });
                        }
                        if (ed) {
                            // Allow the field to act on tabs before onEditorTab, which ends
                            // up calling completeEdit. This is useful for picker type fields.
                            ed.onEditorTab(e);
                        }
                        sm = grid.getSelectionModel();
                        if (sm.onEditorTab) {
                            return sm.onEditorTab(grid === me.grid ? me : me.lockingPartner, e);
                        }
                    }
                    else if (e.getKey() == e.ESC) {


                        //Get Current Grid Column
                        //this.view.getHeaderCt().getVisibleHeaderClosestToIndex(colSelected)


                        this.fireEvent('validateedit', me, {
                            grid: grid,
                            record: grid.store.getAt(rowSelected),
                            row: rowSelected,
                            column: this.view.getHeaderCt().getVisibleHeaderClosestToIndex(colSelected),
                            rowIdx: rowSelected,
                            colIdx: colSelected,
                            value: field.getValue(),
                            originalValue: field.originalValue

                        });


                    }
                    else if (e.getKey() == e.LEFT) {
                        e.stopEvent();
                        me.startEditByPosition({ row: rowSelected, column: colSelected - 1 });
                    } else if (e.getKey() == e.RIGHT) {
                        e.stopEvent();
                        me.startEditByPosition({ row: rowSelected, column: colSelected + 1 });

                    } else if (e.getKey() == e.UP) {
                        e.stopEvent();
                        me.startEditByPosition({ row: rowSelected - 1, column: colSelected });

                    } else if (e.getKey() == e.DOWN) {
                        e.stopEvent();
                        me.startEditByPosition({ row: rowSelected + 1, column: colSelected });
                    }
                } catch (e) {
                }
            }
        });


        var editor = {
            xtype: 'textfield',
            selectOnFocus: true,
            allowBlank: false
        };

        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            pluginId: 'cellediting'
        });
        Ext.create('Ext.data.Store', {
            storeId: 'simpsonsStore',

            fields: ['name', 'email', 'change'],
            data: { 'items': [
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Lisa', 'email': 'lisa@simpsons.com', 'change': 100 },
                { 'name': 'Bart', 'email': 'bart@simpsons.com', 'change': -20 },
                { 'name': 'Homer', 'email': 'home@simpsons.com', 'change': 23 },
                { 'name': 'Marge', 'email': 'marge@simpsons.com', 'change': -11 }
            ]
            },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        });


        var columns = [
            {
                xtype: 'rownumberer',

                sortable: false
            },
            {
                header: 'Name', dataIndex: 'name', locked: i % 30 == 0 ? true : false, editor: editor
//                    header: 'Name', dataIndex: 'name', editor: editor

            }
        ];

        for (var i = 0; i < 200; i++) {
//                    header: 'Name', dataIndex: 'name' + i, locked: i % 30 == 0 ? true : false, editor: editor
//                    header: 'Name', dataIndex: 'name' + i, editor: editor

            columns.push({
                header: 'Name', dataIndex: 'name' + i, locked: i % 30 == 0 ? true : false, editor: editor

            })
        }


        Ext.create('Ext.grid.Panel', {
            title: 'Simpsons',

            tbar: [
                '->', {
                    xtype: 'numberfield',
                    minValue: 0,
                    id: 'xnumberfield',
                    value: 50

                },
                {

                    text: 'Reload',
                    handler: function () {
                        columns = [
                            {
                                xtype: 'rownumberer',

                                sortable: false
                            },
                            {
                                header: 'Name', dataIndex: 'name', locked: i % 30 == 0 ? true : false, editor: editor

                            }
                        ];

                        for (var i = 0; i < Ext.getCmp('xnumberfield').getValue(); i++) {

                            columns.push({
                                header: 'Name', dataIndex: 'name' + i, locked: i % 30 == 0 ? true : false, editor: editor

                            })
                        }


                        this.up('grid').reconfigure(Ext.data.StoreManager.lookup('simpsonsStore'), columns);
                    }
                }
            ],
            enableLocking: true,
            store: Ext.data.StoreManager.lookup('simpsonsStore'),
            columns: columns,
            rowNumberer: true,
            columnLines: true,
            selModel: {
                selType: 'cellmodel'
            },
            plugins: [cellEditing],
            renderTo: Ext.getBody()
        });


    });

});
