Ext.onReady(function() {
    Ext.define('Thing', {
        extend: 'Ext.data.Model',
        fields: ['name', 'group']
    });

    Ext.onReady(function() {

        var store = Ext.create('Ext.data.Store', {
            model: 'Thing',
            groupField: 'group',
            proxy: 'memory',
            data: [{
                name: 'G1 - Item 1',
                group: 'Group 1'
            }, {
                name: 'G2 - Item 1',
                group: 'Group 2'
            }]
        });

        Ext.create('Ext.grid.Panel', {
            tbar: [{
                text: 'Remove g1 item',
                handler: function() {
                    store.removeAt(0);
                }
            }, {
                text: 'Change g2 item',
                handler: function() {
                    store.last().set('group', 'Group 3');
                }
            }, {
                text: 'Add new group',
                handler: function() {
                    store.add({
                        name: 'G4 - Item 1',
                        group: 'Group 4'
                    });
                }
            }],
            width: 400,
            height: 300,
            renderTo: document.body,
            store: store,
            features: [Ext.create('Ext.grid.feature.Grouping', {})],
            columns: [{
                dataIndex: 'name',
                text: 'Name',
                flex: 1
            }]
        });

    });
});
