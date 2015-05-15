Ext.define('Item', {
    extend: 'Ext.data.Model',
    fields: ['name']
});

Ext.onReady(function(){

    Ext.create('Ext.view.View', {
        renderTo: document.body,
        width: 200,
        height: 200,
        store: {
            model: 'Item',
            data: [{
                name: 'Item 1'
            }, {
                name: 'Item 2'
            }, {
                name: 'Item 3'
            }, {
                name: 'Item 4'
            }],
            proxy: {
                type: 'memory'
            }
        },
        overItemCls: 'foo',
        itemTpl: '<div class="item">{name}</div>'
    });
    
    
});
