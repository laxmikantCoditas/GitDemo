Ext.require('*');
Ext.onReady(function() {
    var store = Ext.create('Ext.data.Store', {
        fields: ['letter', 'group1', 'group2'],
        data: [
            {letter: 'A', group1: 'B', group2: 'B'},
            {letter: 'B', group1: 'B', group2: 'A'},
            {letter: 'C', group1: 'A', group2: 'B'},
            {letter: 'D', group1: 'A', group2: 'A'}
        ],
        sorters: {
            property: 'letter'
        }
    });

    Ext.create('Ext.grid.Panel', {
        height: 300,
        renderTo: Ext.getBody(),
        store: store,
        width: 302,
        columns: [
            {dataIndex: 'letter', text: 'Letter'},
            {dataIndex: 'group1', text: 'Group 1'},
            {dataIndex: 'group2', text: 'Group 2'}
        ],
        tbar: [
            {
                text: 'Group 1',
                handler: function() {
                    store.group('group1');
                }
            }, {
                text: 'Group 2',
                handler: function() {
                    store.group('group2');
                }
            }, {
                text: 'Clear Grouping',
                handler: function() {
                    store.clearGrouping();
                }
            }
        ]
    });
});