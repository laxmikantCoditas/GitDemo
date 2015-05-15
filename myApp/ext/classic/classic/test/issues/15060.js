Ext.onReady(function() {
    var w = Ext.create('Ext.window.Window', {
        width: 200,
        height: 200,
        title: 'foo',
        
        defaultFocus: 'item1',
        
        defaultType: 'textfield',
        items: [{
            itemId: 'item1'
        }, {
            itemId: 'item2'
        }, {
            itemId: 'item3'
        }],
        
        listeners: {
            scope: this,
            boxready: function() {
                
                setTimeout(function() {
                    w.setLoading(true);
                    
//                     setTimeout(function() {
//                         w.setLoading(false);
//                     }, 30000);
                }, 2000);
            }
        }
    });
    
    w.show();
});
