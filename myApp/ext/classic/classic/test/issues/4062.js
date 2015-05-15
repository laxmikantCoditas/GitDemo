Ext.onReady(function(){
    var store = Ext.create('Ext.data.Store', {
        fields: ['name'],
        data: [{
            name: "Lisa"
        }, {
            name: "Bart"
        }, {
            name: "Homer"
        }, {
            name: "Marge"
        }],
        listeners: {
            add: function(ds, records){
                Ext.each(records, function(r){
                    r.set('name', r.get('name') + ' Simpson');
                    r.commit();
                });
            }
        }
    });
    
    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: store,
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }],
        height: 200,
        width: 400,
        renderTo: Ext.getBody(),
        tbar: [{
            text: 'Add',
            handler: function(){
                var added = store.add({
                    name: 'Maggie'
                });
            }
        }]
    });
    
});
