Ext.require('*');
Ext.onReady(function() {
    
    Ext.getBody().setStyle('padding', '10px').createChild('<h1 style="font-size:20px;margin-bottom:10px">Showing the Row Editor should NOT cause scrollbars</h1>');
    
    Ext.define('rsctest.store.AStore', {
        extend: 'Ext.data.Store',
        fields: ['num1', 'num2','num3'],
        data: [
            {num1:1,num2:1.5,num3:1.75},
            {num1:2,num2:2.5,num3:2.75},
            {num1:3,num2:3.5,num3:3.75},
            {num1:4,num2:4.5,num3:4.75}
        ]
    });
    
    var colModel = [{
        header: "One",
        dataIndex: 'num1',
        editor: {
            xtype: 'numberfield'
        },
        flex:1
    }, {
        header: "Two",
        dataIndex: 'num2',
        editor: {
            xtype: 'numberfield'
        },
        flex:1
    }, {
        header: "Three",
        dataIndex: 'num3',
        editor: {
            xtype: 'numberfield'
        },
        flex:1
    }];

    Ext.create('Ext.tab.Panel', {
        renderTo: document.body,
        title: "Row Editor Test",
        width: 400,
        height: 200,
        layout: 'hbox',
        items: [{
            title: "Grid 1",
            xtype: 'gridpanel',
            itemId: 'grid1',
            flex: 1,
            height: 200,
            columns: colModel,
            store: new rsctest.store.AStore(),
            plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
                pluginId: 'roweditor',
                autoCancel: false,
                clicksToEdit: 2 
            })]
        },{
            title: "Grid 2",
            xtype: 'gridpanel',
            itemId: 'grid2',
            flex: 1,
            height: 200,
            columns: colModel,
            store: new rsctest.store.AStore(),
            plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
                pluginId: 'roweditor',
                autoCancel: false,
                clicksToEdit: 2 
            })]
        }],
        bbar: [{
            text: 'Change grid1',
            handler: function() {
                var grid = this.up('tabpanel').down('#grid1'),
                    cols = grid.query('gridcolumn');
                if (cols[0].flex === 1) {
                    cols[0].flex = 3;
                    cols[1].flex = 2;
                    cols[2].flex = 1;
                } else {
                    cols[0].flex = 1;
                    cols[1].flex = 2;
                    cols[2].flex = 3;
                }
                grid.updateLayout();
            }
        }]
    });
});