Ext.define("EditorApp.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.SegmentedButton'],
    config: {
        layout: 'fit',
        items: [
            {
                height: '2.6em',
                docked: 'top',
                layout: {
                    pack: 'right'
                },
                xtype: 'toolbar',
                ui: 'dark',
                title: 'Graphical Editor',
                items: [
                    {
                        text: 'Gradient',
                        handler: function () {
                            var gradPanel = Ext.ComponentQuery.query('gradPanel')[0];
                            gradPanel.showBy(this);
                        }
                    },
                    {
                        text: 'Undo',
                        handler: function () {
                            Ext.ComponentQuery.query('geditor')[0].undo();
                        }
                    },
                    {
                        text: 'Redo',
                        handler: function () {
                            Ext.ComponentQuery.query('geditor')[0].redo();
                        }
                    },
                    {
                        text: 'Delete',
                        handler: function () {
                            var list = [],
                                editor = Ext.ComponentQuery.query('geditor')[0];
                            for (var id in editor.selected) {
                                list.push(editor.selected[id]);
                            }
                            var cmd = new EditorApp.command.Delete(list);
                            editor.run(cmd);
                        }
                    }
                ]
            },
            {
                height: '2.6em',
                docked: 'bottom',
                xtype: 'toolbar',
                ui: 'dark',
                layout: {
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                pressed: true,
                                text: 'Manipulate',
                                handler: function () {
                                    Ext.ComponentQuery.query('geditor')[0].setAction('selection');
                                }
                            },
                            {
                                text: 'View',
                                handler: function () {
                                    Ext.ComponentQuery.query('geditor')[0].setAction('panzoom');
                                }
                            },
                            {
                                text: 'Draw',
                                handler: function () {
                                    Ext.ComponentQuery.query('geditor')[0].setAction('draw');
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'geditor',
                style: 'background: white'
            }
        ]
    }
});
