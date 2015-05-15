
Ext.define('ESearch.model.EPart', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name:'id', type:'int'}, 'description', 'item_number', 'part_number'
    ],
    proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'ajax',
        url: 'app/store/data.json',
        reader: {
            root: 'response.docs',
            totalProperty: 'response.numFound'
        },
        // sends single sort as multi parameter
        simpleSortMode: true
    }
});
