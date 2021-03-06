Ext.require(['Ext.data.*']);
Ext.onReady(function() {
    var fields = [],
        columns = [],
        recordData = {},
        size = 100,
        i, m, store, grid;

    for (i = 0; i < size; i++) {
        columns.push({
            header: 'column' + i,
            dataIndex: 'column' + i,
            width: 100
        });
        fields.push({
            name: 'column' + i
        });
    }

    Ext.define('myModel', {
        extend: 'Ext.data.Model',
        fields: fields
    });

    store = Ext.create('Ext.data.Store', {
        model: 'myModel'
    });

    grid = Ext.create('Ext.grid.Panel', {
        border: false,
        columns: columns,
        store: store
    });

    for (i = 0; i < size; i++) {
        recordData['column' + i] = 'column' + i;
    }

    for (j = 0; j < size; j++) {
        m = Ext.ModelManager.create(recordData, 'myModel');
        store.add(m);
    }

    Ext.create('Ext.window.Window', {
        title: 'SLOW GRID',
        width: 700,
        height: 500,
        layout: 'fit',
        items: grid
    }).show();
});
