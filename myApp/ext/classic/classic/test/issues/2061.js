
Ext.onReady(function() {
    var store = Ext.create('Ext.data.Store', {
        fields:['name', 'email', 'phone'],
        data:{'items':[
            {"name":"Lisa", "email":"lisa@simpsons.com", "phone":"555-111-1224"},
            {"name":"Bart", "email":"bart@simpsons.com", "phone":"555--222-1234"},
            {"name":"Homer", "email":"home@simpsons.com", "phone":"555-222-1244"},                        
            {"name":"Marge", "email":"marge@simpsons.com", "phone":"555-222-1254"},
            {"name":"Lisa", "email":"lisa@simpsons.com", "phone":"555-111-1224"},
            {"name":"Bart", "email":"bart@simpsons.com", "phone":"555--222-1234"},
            {"name":"Homer", "email":"home@simpsons.com", "phone":"555-222-1244"},                        
            {"name":"Marge", "email":"marge@simpsons.com", "phone":"555-222-1254"},
            {"name":"Lisa", "email":"lisa@simpsons.com", "phone":"555-111-1224"},
            {"name":"Bart", "email":"bart@simpsons.com", "phone":"555--222-1234"},
            {"name":"Homer", "email":"home@simpsons.com", "phone":"555-222-1244"},                        
            {"name":"Marge", "email":"marge@simpsons.com", "phone":"555-222-1254"}            
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: store,
        columns: [
            {header: 'Name',  dataIndex: 'name'},
            {header: 'Email', dataIndex: 'email', flex:1},
            {header: 'Phone', dataIndex: 'phone'}
        ],
        height: 200,
        width: 400,
        collapsible: true,
        renderTo: Ext.getBody()
    });
});