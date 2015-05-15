Ext.define('Tasks.store.List', {
    extend: 'Ext.data.TreeStore',
    model: 'Tasks.model.List',
    root: {
        expanded: true,
        name: 'All Lists',
        id: 'all'
    }
});