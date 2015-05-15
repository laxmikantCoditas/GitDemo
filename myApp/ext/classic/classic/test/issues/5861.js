// Ext.require('Ext.diag.layout.ContextItem');

function test1 () {
    var state = false;

    Ext.widget({
        xtype: 'button',
        text: 'Toggle',
        renderTo: Ext.getBody(),
        handler: function () {
            var cmp = Ext.getCmp('theCt');
            cmp.setSize(700, state ? 600 : 300);
            state = !state;
        }
    });

    Ext.widget({
        //xtype: 'viewport',
        //xtype: 'window', autoShow: true, width: 700, height: 600,
        xtype: 'container', width: 700, height: 600, renderTo: Ext.getBody(), 
        style: 'border: 1px solid red;',
        id: 'theCt',
        layout: 'fit',
        items: [{
            xtype: 'container',
            layout: 'card',
            autoScroll: true,
            items: [{
                xtype: 'container',
                minHeight: 400,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    flex: 1,
                    html: 'Info 1'
                },{
                    xtype: 'component',
                    flex: 1,
                    html: 'Info 2'
                },{
                    xtype: 'component',
                    flex: 1,
                    html: 'Info 3'
                }]
            }]
        }]
    });
}

function test2 () {
    Ext.create({
        //xclass: 'Ext.container.Viewport',
        xclass: 'Ext.Window', autoShow: true, width: 700, height: 600,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'component',
            html: 'Header',
            height: 50
        },{
            xtype: 'toolbar',
            items: [{
                xtype: 'button',
                text: 'Screen',
                handler: function() {
                    Ext.ComponentQuery.query('#screens')[0].getLayout().setActiveItem('screen1');
                }
            },{
                xtype: 'button',
                text: 'Screen2',
                handler: function() {
                    Ext.ComponentQuery.query('#screens')[0].getLayout().setActiveItem('screen2');
                }
            }]
        },{
            xtype: 'container',
            itemId: 'screens',
            layout: 'card',
            autoScroll: true,
            flex: 1,
            items: [{
                xtype: 'container',
                itemId: 'screen1',
                minHeight: 400,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    flex: 1,
                    html: 'Screen 1 Part 1',
                    style: 'background-color: orange'
                },{
                    xtype: 'component',
                    flex: 1,
                    html: 'Screen 1 Part 2',
                    style: 'background-color: green'
                }]
            },{
                xtype: 'container',
                itemId: 'screen2',
                minHeight: 500,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    height: 425,
                    html: 'Screen 2 Part 1',
                    style: 'background-color: blue'
                },{
                    xtype: 'component',
                    flex: 1,
                    html: 'Screen 2 Part 2',
                    style: 'background-color: yellow'
                }]
            }]
        },{
            xtype: 'component',
            html: 'Footer',
            height: 20
        }]
    });
}

var testCase = {
    run: function () {
        test1();
        //test2();
    }
};
