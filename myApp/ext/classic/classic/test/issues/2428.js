Ext.define('Thing', {
    extend: 'Ext.data.Model',
    fields: ['a', 'b']
});

Ext.onReady(function() {
    
    var store = Ext.create('Ext.data.Store', {
        model: 'Thing',
        proxy: 'memory',
        data: [{
            a: 1,
            b: 2
        }, {
            a: 3,
            b: 4
        }, {
            a: 5,
            b: 6
        }]    
    });
    
    var editing = Ext.create('Ext.grid.plugin.CellEditing', {
        listeners: {
            beforeedit: function(context){
                if (context.rowIdx % 2 === 0) {
                    context.column.setEditor({
                        xtype: 'numberfield'
                    });
                } else {
                    context.column.setEditor({
                        xtype: 'textfield'
                    });
                }
            }
        }
    });
    
    Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        plugins: [editing],
        store: store,
        columns: [{
            header: 'Col A',
            dataIndex: 'a'
        }] 
    });
    
});
