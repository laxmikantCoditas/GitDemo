Ext.Loader.setPath('Ext.ux', '../../examples/ux/');
Ext.require([
    '*',
    'Ext.ux.grid.FiltersFeature'
]);
Ext.onReady(function() {
var store, grid;

        // create the data store
    store = Ext.create('Ext.data.ArrayStore', {
        fields: ['id', 'title', 'text'],
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        data : function() { // build test data
            var ar = [], i = 0, max = 500, temp,
                    sample = { id: 0, title: 'Title', text: 'Text' };
            for (; i < max; i++) {
                    temp = Ext.clone(sample);
                    temp.id = (i + 1);
                    temp.title += ' ' + (i + 1);
                    temp.text += ' ' + (i * 2);
                    ar.push(temp);
            }
            return ar;
        }()
    });

    // create the Grid
    grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columnLines: true,
        plugins: 'bufferedrenderer',

        // Filtering
        features: [{
            ftype: 'filters',
            local: true,
            filters: [{
                type: 'numeric',
                dataIndex: 'id'
            }, {
                type: 'string',
                dataIndex: 'title'
            }]
        }],

        columns: [{
            xtype: 'rownumberer',
            width: 50
        }, {
            text     : 'Product ID',
            locked   : true,
            dataIndex: 'id'
        }, {
            text     : 'Title',
            dataIndex: 'title'
        }, {
            text     : 'Text',
            dataIndex: 'text'
        }],
        height: 350,
        width: '100%',
        title: 'Das Grid',
        renderTo: document.body
    });
}); // eo Ext.onReady()