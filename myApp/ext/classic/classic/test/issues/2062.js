Ext.require(['Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.state.*', 'Ext.window.*']);

Ext.onReady(function() {

    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
            { name: 'company' }
        ],
        data: [
            ['Row 1']
        ]
    });

    var columns = [
        {
            text: 'Column',
            flex: 1,
            sortable: false,
            dataIndex: 'company'
        }
    ];

    var grid = Ext.create('Ext.grid.Panel', {
        store: new Ext.data.ArrayStore(),
        columns: []
    });

    var window = new Ext.Window({
        x: 40, y: 40,
        height: 350,
        width: 600,
        title: 'Grid Reconfigure',
        autoShow: true,
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                border: false,
                layout: 'fit',
                items: [ grid ]
            }
        ],
        tools: [
            {
                type: 'refresh',
                handler: function () {
                    grid.reconfigure(store, columns);
                }
            }
        ],
        renderTo: Ext.getBody()
    });
});
