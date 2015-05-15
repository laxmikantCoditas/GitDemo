Ext.application({
    name: 'Testing MessageBox',
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            items: {
                html:'Close the MessageBox using the "X" in the top corner to reproduce the error'
                
            }
        });
        
        var msgBox = Ext.create("Ext.window.MessageBox",{draggable:false});

        msgBox.show({
            title: 'This one breaks',
            msg: 'Test Message',
            buttons: Ext.Msg.OK
        });
    }
});

