Ext.define('Item', {
    extend: 'Ext.data.Model',
    fields: ['name']    
});

Ext.onReady(function(){
    
    function createStore() {
        var data = [],
            i = 0;
            
        for (; i < 10; ++i) {
            data.push({
                name: 'Name ' + Math.floor(Math.random() * 11)
            });
        }
            
        return {
            model: 'Item',
            data: data
        };
    }

    Ext.create('Ext.panel.Panel', {
        width: 600,
        height: 400,
        renderTo: document.body,
        layout: 'fit',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Bind new store',
                handler: function(){
                    Ext.getCmp('view').bindStore(createStore());
                }
            }
        }],
        items: {
            id: 'view',
            xtype: 'dataview',
            store: createStore(),
            itemTpl: '<div>{name}</div>'
        }
    });
    
});
