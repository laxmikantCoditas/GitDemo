Ext.onReady(function(){    
    var store = Ext.create('Ext.data.Store', {
        fields: ['name', 'category'],
        data: [{
            name: 'Name 1',
            category: 'Group 1'
        }, {
            name: 'Name 2',
            category: 'Group 2'
        }, {
            name: 'Name 3',
            category: 'Group 1'
        }, {
            name: 'Name 4',
            category: 'Group 2'
        }, {
            name: 'Name 5',
            category: 'Group 1'
        }, {
            name: 'Name 6',
            category: 'Group 2'
        }, {
            name: 'Name 7',
            category: 'Group 1'
        }, {
            name: 'Name 8',
            category: 'Group 3'
        }, {
            name: 'Name 9',
            category: 'Group 1'
        }, {
            name: 'Name 10',
            category: 'Group 2'
        }, {
            name: 'Name 11',
            category: 'Group 1'
        }, {
            name: 'Name 12',
            category: 'Group 4'
        }, {
            name: 'Name 13',
            category: 'Group 1'
        }]
    });
    
    var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {});
    
    Ext.create('Ext.grid.Panel', {
        frame: true,
        features: [groupingFeature],
        title: 'Test1',
        renderTo: document.body,
        style: 'margin: 10px auto;',
        store: store,
        tbar: [{
            text: 'CollapseAll',
            scope: groupingFeature,
            handler: function(){
                groupingFeature.collapseAll();
            }
        }, {
            text: 'ExpandAll',
            scope: groupingFeature,
            handler: function(){
                groupingFeature.expandAll();
            }
        }],
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }, {
            header: 'Category',
            dataIndex: 'category'
        }],
        width: 1000
    });
});
