Ext.onReady(function(){

    var csm = Ext.create('Ext.selection.CheckboxModel', {
        listeners: {
            select: function(){
                console.log('select');
            },
            deselect: function(){
                console.log('deselect');
            }
        }
    }), 
    data = [], 
    i = 0;
        
    for (; i < 100; ++i) {
        data.push({
            a: i
        });
    }
    
    var grid = Ext.create('Ext.grid.Panel', {
        width: 200,
        height: 200,
        renderTo: document.body,
        selModel: csm,
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Select record 50',
                handler: function(){
                    csm.select(grid.getStore().getAt(49));
                }
            }]    
        }],
        store: {
            fields: ['a'],
            data: data
        },
        columns: [{
            dataIndex: 'a',
            header: 'A'
        }]
    });    
});
