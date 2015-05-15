Ext.onReady(function() {
    var panel = Ext.create('Ext.Panel', {
        x: 10, 
        y: 10, 
        width: 250,
        title: "Panel",
        renderTo: document.body,
        items: [{
            xtype: 'button',
            text: 'I am a button',
            foo: 0
        }, {
            xtype: 'button',
            text: 'I am a button',
            foo: 1
        }, {
            xtype: 'button',
            text: 'I am a button',
            foo: 2
        }]  
    }); 

    panel.add({
        xtype: 'displayfield',
        value: 'Found ' + panel.query('[foo]').length + ' buttons'
    });
});
