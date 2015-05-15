Ext.require('*');
Ext.onReady(function() {
    var parent = Ext.create('Ext.tab.Panel', {
        title: 'Parent',
        width: 600,
        height: 400,
        items: [{
            title: 'Tab 1',
            id: 'tab1',
            items: {
                xtype: 'button',
                text: 'Open Window 1',
                handler: function() {
                    var tp = Ext.getCmp('tab1'),
                        win = Ext.create('Ext.window.Window', {
                            title: 'Window 1',
                            width: 250,
                            height: 200,
                            layout: 'fit',
                            bodyStyle: 'background-color: blue'
                        });
                    tp.add(win);
                    win.show();
                }
            }
        },
        {
            title: 'Tab 2',
            id: 'tab2',
            items: {
                xtype: 'button',
                text: 'Open Window 2',
                handler: function() {
                    var tp = Ext.getCmp('tab2'),
                        win = Ext.create('Ext.window.Window', {
                            title: 'Window 2',
                            width: 250,
                            height: 200,
                            bodyStyle: 'background-color: red'
                        });
                    tp.add(win);
                    win.show();
                }
            }
        }],
        renderTo: Ext.getBody()
    });
});