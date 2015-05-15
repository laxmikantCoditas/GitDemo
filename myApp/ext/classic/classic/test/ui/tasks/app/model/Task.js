/**
 * @class File
 * @extends Ext.data.Model
 */
Ext.define('Tasks.model.Task', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: "id",       type: "int"},
        {name: "name",     type: "string"}
    ],
    
    proxy: (Ext.supports.localStorage) ? {
        type: 'localstorage',
        id  : 'tasks'
    } : 'memory'
});
