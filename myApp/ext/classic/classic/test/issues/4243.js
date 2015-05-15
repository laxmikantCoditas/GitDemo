Ext.application({
    name: 'MyApp',

    launch: function() {
        var store = Ext.create('Ext.data.Store', {
    
            fields : [ 'foo', 'bar' ],
    
            proxy: {
               type: 'rest',
               url : '/users',
               reader: {
                        type: 'json',
                        root: 'items'
               }
           }
        });
    
        if (store) {
            Ext.Msg.alert('Information', 'Store created successfully');
        }
    }
});
