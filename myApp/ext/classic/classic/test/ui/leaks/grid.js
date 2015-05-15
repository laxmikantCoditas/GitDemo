Ext.define('Thing', {
    extend: 'Ext.data.Model',
    fields: ['a']
});

Ext.require(['Ext.grid.Panel', 'Ext.button.Button']);

Ext.onReady(function() { 
    
    var o;
    var create = Ext.create('Ext.button.Button', {
        text: 'Add',
        renderTo: document.body,
        handler: function(){
            o = Ext.create('Ext.grid.Panel', {
                width: 200,
                height: 200,
                renderTo: document.body,
                store: {
                    autoDestroy: true,
                    model: 'Thing',
                    data: [{
                        a: 1
                    }]
                },
                columns: [{
                    dataIndex: 'a',
                    header: 'A'
                }]
            });
            create.disable();
            destroy.enable();
        }    
    });
    
    var destroy = Ext.create('Ext.button.Button', {
        text: 'Destroy',
        renderTo: document.body,
        disabled: true,
        handler: function(){
            o.destroy();
            create.enable();
            destroy.disable();
        }    
    });
    
});