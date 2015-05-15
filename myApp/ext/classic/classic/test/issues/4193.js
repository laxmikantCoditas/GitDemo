Ext.define('Task', {
    extend: 'Ext.data.Model',
    idProperty: 'taskId',
    fields: [{
        name: 'taskId',
        type: 'int'
    }, {
        name: 'points',
        type: 'int'
    }, 'grouper']
});
Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        model: 'Task',
        data: [{
            taskId: 105,
            points: 2
        }, {
            taskId: 107,
            points: 8
        }],
        groupField: 'grouper'
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        width: 600,
        height: 200,
        renderTo: Ext.getBody(),
        store: store,
        features: [{
            ftype: 'grouping',
            hideGroupedHeader: true
        }],
        columns: [{
            dataIndex: 'taskId',
            header: 'Task Id',
            id: 'taskId'
        }, {
            dataIndex: 'points',
            header: 'Task Points',
            id: 'points'
        }]
    });
});
