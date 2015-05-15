Ext.require('Ext.menu.Menu');
Ext.onReady(function() {
    Ext.create('Ext.menu.Menu', {
        renderTo: Ext.getBody(),
        items: [{
            text: 'Menu 1 - Enabled',
            menu: [{
                text: 'Item 1',
                handler: function() {
                    alert('This shouldn\'t show!');
                }
            },{
                text: 'Item 2',
                handler: function() {
                    alert('This shouldn\'t show!');
                }
            },{
                text: 'Item 3',
                handler: function() {
                    alert('This shouldn\'t show!');
                }
            },{
                text: 'Item 4',
                handler: function() {
                    alert('This shouldn\'t show!');
                }
            },{
                text: 'I have a menu!',
                menu: [{
                    text: 'Submenu Item 1'
                }]
            },{
                xtype: 'button',
                text: 'Click Me!',
                handler: function() {
                    alert('This shouldn\'t show!');
                }
            }]
        }, {
            text: 'Menu 2 - Disabled',
            menu: {
                items: [{
                    text: 'Item 1',
                    handler: function() {
                        alert('This shouldn\'t show!');
                    }
                },{
                    text: 'Item 2',
                    handler: function() {
                        alert('This shouldn\'t show!');
                    }
                },{
                    text: 'Item 3',
                    handler: function() {
                        alert('This shouldn\'t show!');
                    }
                },{
                    text: 'Item 4',
                    handler: function() {
                        alert('This shouldn\'t show!');
                    }
                },{
                    text: 'I have a menu!',
                    menu: [{
                        text: 'Submenu Item 1'
                    }]
                },{
                    xtype: 'button',
                    text: 'Click Me!',
                    handler: function() {
                        alert('This shouldn\'t show!');
                    }
                }],
                disabled: true
            }
        }]
    }).showAt(0, 0);
});