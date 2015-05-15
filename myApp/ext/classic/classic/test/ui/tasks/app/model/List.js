/**
 * @class File
 * @extends Ext.data.Model
 */
Ext.define('Tasks.model.List', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: "id",       type: "string"},
        {name: "name",     type: "string"}
    ],
    
    proxy: (Ext.supports.localStorage) ? {
        type: 'localstorage',
        id  : 'lists'
    } : 'memory'
});
