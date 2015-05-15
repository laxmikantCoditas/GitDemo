Tasks.store.Task = Ext.create('Ext.data.Store', {
    model: 'Task',
    autoLoad: (Ext.supports.localStorage) ? true : false  
});