Ext.require('*');
Ext.onReady(function() {
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Open Window 1',
        handler: function() {
            var win = Ext.create('Ext.window.Window', {
                title: 'Window 1',
                id: 'window1',
                width: 500,
                height: 400,
                items: [{
                    xtype: 'textarea',
                    fieldLabel: 'Text area',
                    resizable: true,
                    width: 305,
                    height: 100
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Text field',
                    name: 'first',
                    width: 305,
                    resizable: {
                        target: this,
                        dynamic: true,
                        handles: 'e',
                        pinned: true
                    },
                    allowBlank: false
                }]
            });
            win.showAt(20, 20);
        }
    });
});