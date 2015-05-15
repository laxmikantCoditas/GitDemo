Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', '../../examples/ux');

Ext.require(['Ext.grid.*', 'Ext.data.*', 'Ext.ux.RowExpander']);

Ext.define('Company', {
    extend: 'Ext.data.Model',
    fields: ['name']
});

Ext.onReady(function() {
    var store = Ext.create('Ext.data.Store', {
        model: 'Company',
        data: [{
            name: 'Company 1'
        }]
    });

    var columns = [{
        text: 'Company',
        flex: 1,
        dataIndex: 'name'
    }];

    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: columns,
        width: 300,
        height: 150,
        tbar: [{
            text: 'Reconfigure',
            handler: function(){
                grid.reconfigure(store, columns);
            }    
        }],
        plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl: ['<p><b>Company:</b> {name}</p>']
        }],
        renderTo: Ext.getBody()
    });
});
