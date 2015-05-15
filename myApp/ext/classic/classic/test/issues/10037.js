Ext.application({
    name: 'VFX',
    autoCreateViewport: false,
    init: function () {
    },

    launch: function () {
        // store
        var store = Ext.create('Ext.data.Store', {
            fields: ['id', 'email', 'first', 'last'],
            data: [
                { id: 1, email: 'tom@blue.com', first: 'tom', last: 'jones' },
                { id: 2, email: 'ron@blue.com', first: 'ron', last: 'burgundy' },
                { id: 3, email: 'janeDoe@blank.com', first: 'Jane', last: 'Doe' }
            ]
        });

        var store2 = Ext.create('Ext.data.Store', {
            fields: ['id', 'age', 'first', 'last'],
            data: [
                { id: 4, age: 42, first: 'fred', last: 'moseley' },
                { id: 5, age: 13, first: 'sydney', last: 'moseley' },
                { id: 6, age: 41, first: 'danielle', last: 'moseley' }
            ]
        });

        var store3 = Ext.create('Ext.data.Store', {
            fields: ['id', 'email', 'first', 'last'],
            data: [
                { id: 4, email: 'fred@moseley.com', first: 'fred', last: 'moseley' },
                { id: 5, email: 'sydney@moseley.com', first: 'sydney', last: 'moseley' },
                { id: 6, email: 'danielle@moseley.com', first: 'danielle', last: 'moseley' }
            ]
        });


        var myColumns = [
            {
                header: 'id',
                width: 100,
                dataIndex: 'id'
            },
            {
                header: 'Age',
                width: 100,
                dataIndex: 'age'
            },
            {
                header: 'First',
                width: 100,
                dataIndex: 'first'
            },
            {
                header: 'Last',
                width: 100,
                dataIndex: 'last'
            }
        ];


        // initial columns
        var initialColumns = [
            {
                header: 'id',
                width: 100,
                dataIndex: 'id'
            },
            {
                header: 'Email',
                width: 100,
                dataIndex: 'email'
            },
            {
                header: 'First',
                width: 100,
                dataIndex: 'first'
            },
            {
                header: 'Last',
                width: 100,
                dataIndex: 'last'
            }
        ];

        // grid
        var grid = Ext.create('Ext.grid.Panel', {
            store: store,
            columns: initialColumns
        });

        // create viewport with buttons
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'button',
                    text: 'reconfigure just store works',
                    handler: function () {
                        grid.reconfigure(store3);
                    }
                },
                {
                    xtype: 'button',
                    text: 'reconfigure store and columns breaks',
                    handler: function () {
                        grid.reconfigure(store2, myColumns);
                    }
                },

                {
                    xtype: 'button',
                    text: 'show/hide columns',
                    handler: function () {
                        var checkboxes = [];

                        // create checkboxes for each column in grid
                        for (var i in grid.columns) {
                            var col = grid.columns[i];
                            checkboxes.push(
                                {
                                    xtype: 'checkbox',
                                    name: col.dataIndex,
                                    checked: !col.hidden,
                                    boxLabel: col.text.replace('<br/>', ' ').replace('<br/>', ' '),
                                    boxLabelCls: 'column-select-box-label',
                                    formItemCls: 'column-select-checkbox-container ' + (col.hidden ? 'unselected' : ''),
                                    text: col.text,
                                    width: 162,
                                    height: 44,
                                    listeners: {
                                        change: function (cb, newValue, oldValue, eOpts) {
                                            cb.getEl()[newValue ? 'removeCls' : 'addCls']('unselected');
                                            Ext.suspendLayouts();

                                            for (var j in this.columns) {
                                                if (this.columns[j].dataIndex === cb.name) {
                                                    if (newValue) {
                                                        this.columns[j].show();
                                                    } else {
                                                        this.columns[j].hide();
                                                    }
                                                }
                                            }
                                            Ext.resumeLayouts();
                                            this.doComponentLayout();
                                        },
                                        scope: grid
                                    }
                                });
                        }


                        // popup window
                        var popup = Ext.create('Ext.Window', {
                            title: 'Show/Hide Columns',
                            bodyCls: 'column-select-window-body',
                            width: 550,
                            height: 500,
                            overflowY: 'auto',
                            plain: true,
                            modal: true,
                            headerPosition: 'top',
                            layout: 'column',
                            dataChanged: false,
                            items: checkboxes,
                            buttons: [
                                {
                                    text: 'Close',
                                    handler: function () {
                                        popup.close();
                                    }
                                }
                            ]
                        }).show().center();

                        // make sure to fire clicks when the whole container is clicked instead of just the checkbox
                        popup.getEl().on('click', function (e, element, opts) {
                            e.preventDefault();
                            e.stopPropagation();

                            if (e.getTarget().nodeName !== 'INPUT')
                                Ext.query('input[type=button]', element)[0].click();
                        }, this, { delegate: '.column-select-checkbox-container' });
                    }
                },
                grid
            ]
        });
    }
});
