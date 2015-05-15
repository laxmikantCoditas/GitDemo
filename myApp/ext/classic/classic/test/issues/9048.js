Ext.require('*');
Ext.onReady(function() {
    var gridData = [],
       row,
       i,
       start,
       grid,
       status,
       store,
       bufferedStore,
       createGrid,
       buffered;
    
    for (i = 0; i < 2000; i++) {
        row = [];
        row.push('row' + i + ',col0');
        row.push('row' + i + ',col1');
        row.push('row' + i + ',col2');
        row.push('row' + i + ',col3');
        row.push('row' + i + ',col4');
        gridData.push(row);
    }

    store = new Ext.data.Store({
        proxy: {
            type: 'memory',
            reader: 'array'
        },
        fields: ['f1', 'f2', 'f3', 'f4', 'f5'],
        data: gridData
    });

    bufferedStore = new Ext.data.Store({
        buffered: true,
        proxy: {
            type: 'memory',
            reader: 'array'
        },
        fields: ['f1', 'f2', 'f3', 'f4', 'f5'],
        data: gridData,
        pageSize: 2000
    });

    // Deferred, so that spinner gets time to repaint
    createGrid = Ext.Function.createDelayed(function() {
        start = new Date().getTime();
        for (i = 0; i < 5 ; i++) {
            if (grid) {
                grid.destroy();
            }
            var gridConfig = {
                height: 400, width: 600,
                border: true,
                margin: '0 10 10 10',
                store: store,
                columns: [{
                    text: 'col1',
                    dataIndex: 'f1'
                }, {
                    text: 'col2',
                    dataIndex: 'f2'
                }, {
                    text: 'col3',
                    dataIndex: 'f3'
                }, {
                    text: 'col4',
                    dataIndex: 'f4'
                }, {
                    text: 'col5',
                    dataIndex: 'f5'
                }],
                deferRowRender: false,
                viewConfig: {
                    preserveScrollOnRefresh: true
                },
                renderTo: document.body
            };
            
            if (buffered.getValue()) {
                if (Ext.versions.extjs.minor < 2) {
                    gridConfig.store = bufferedStore;
                } else {
                    gridConfig.plugins = 'bufferedrenderer';
                }
            }

            grid = new Ext.grid.GridPanel(gridConfig);
        }
        status.el.dom.innerHTML = 'That took ' + (new Date().getTime() - start) + ' milliseconds';
    }, 1);

    new Ext.container.Container({
        layout: {
            type: 'table',
            tableAttrs: {
                cellSpacing: 5
            }
        },
        margin: '0 10 10 10',
        renderTo: document.body,
        items: [
            new Ext.button.Button({
                text: 'Create 2000 row, 5 column grid five times',
                handler: function() {
                    status.el.dom.innerHTML = '<div style="padding: 8px 5px 8px 20px;" class="x-mask-msg-text"></div>';
                    createGrid();
                }
            }),
            buffered = new Ext.form.field.Checkbox({
                fieldLabel: 'Buffered',
                labelWidth: 60,
                margin: 0
            }),
            status = new Ext.Component({
                margin: '0 0 0 10'
            })
        ]
    });
});