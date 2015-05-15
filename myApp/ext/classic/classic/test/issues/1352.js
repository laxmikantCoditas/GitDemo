Ext.require('Ext.window.Window');

Ext.onReady(function() {
    
    var w1 = Ext.create('Ext.window.Window', {
        width: 100,
        height: 100,
        autoShow: true,
        title: 'Foo',
        x: 100,
        y: 100,
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Align',
                handler: function(){
                    w1.alignTo(w2);
                }
            }
        }]
    });
    
    var w2 = Ext.create('Ext.window.Window', {
        width: 200,
        height: 300,
        autoShow: true,
        title: 'Foo',
        x: 300,
        y: 400
    });
    
    
});