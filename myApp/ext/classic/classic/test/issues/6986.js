Ext.onReady(function() {
    
    var editing = Ext.create('Ext.grid.plugin.CellEditing');

    var grid = Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 200,
        renderTo: document.body,
        plugins: [editing],
        store: {
            fields: ['name'],
            data: [{
                name: 'Name 1'
            }, {
                name: 'Name 2'
            }]
        },
        columns: [{
            dataIndex: 'name',
            text: 'Name',
            field: 'textfield',
            renderer: function(v){
                return 'Foo' + v;
            }
        }, {
            dataIndex: 'name',
            text: 'Other'
        }]        
    });
    
    setTimeout(function(){
        editing.startEditByPosition({
            row: 0,
            column: 0
        });
        setTimeout(function(){
            grid.getStore().first().set('name', 'Bar');
            Ext.getBody().createChild({
                html: 'Click to cancel editing'
            });
        }, 500);
    }, 500);
    
});