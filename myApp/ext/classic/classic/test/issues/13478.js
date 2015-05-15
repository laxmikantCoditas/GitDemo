Ext.onReady(function() {
    new Ext.button.Button({
        renderTo: Ext.getBody(),
        text: 'before'
    });
    
    var win = new Ext.window.Window({
        title: 'foo',
        
//         modal: true,
        autoShow: true,
        
        minimizable: true,
        maximizable: true,
        
        layout: 'form',
        
//         defaultFocus: 'textfield',
        
        tools: [{
            type: 'pin',
            tooltip: 'pin window'
        }],
        
        items: [{
            xtype: 'textfield',
            fieldLabel: 'foo'
        }, {
            xtype: 'textfield',
            fieldLabel: 'bar'
        }],
        
        buttons: [{
            text: 'OK'
        }, {
            text: 'Cancel'
        }]
    });
    
    new Ext.button.Button({
        renderTo: Ext.getBody(),
        text: 'after'
    });
});
