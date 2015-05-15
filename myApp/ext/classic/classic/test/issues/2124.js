Ext.Loader.setPath({
    'Ext.ux': '../../examples/ux'
});

Ext.require(['*']);

Ext.define('Issues.Grid2124', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.ux.RowExpander'
    ],
    alias: 'widget.grid2124',
    columns: [
        { text: 'Column 1', flex: 1, dataIndex: 'name' }
    ],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : [
            '<p><b>Comments:</b> {name}</p>'
        ]
    }]
});

Ext.onReady(function(){
    function makeGrid () {
        var store = Ext.create('Ext.data.ArrayStore', {
            fields: [
               {name: 'name' }
            ],
            data: [
                [ 'Foo' ]
            ]
        });

        return {
            xtype: 'grid2124',
            title: 'Grid',
            style: 'margin-top: 10px;',
            anchor: '0',
            height: 100,
            store: store
        };
    }

    var panel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        layout: 'anchor',
        border: false,
        items: [
            makeGrid(),
            makeGrid()
        ]
    });
});
