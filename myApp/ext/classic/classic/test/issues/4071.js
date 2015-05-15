Ext.onReady(function(){
    Ext.create('Ext.container.Viewport', {
        layout: 'anchor',
        items: [{
            xtype: 'splitbutton',
            tooltip: "This menu will NOT open.",
            tooltipType: "title",
            text: 'Split Broken w/ Title Tooltip',
            menu: Ext.create('Ext.menu.Menu', {
                width: 175,
                items: {
                    text: 'XXX',
                    xtype: 'menuitem'
                }
            })
        }, {
            xtype: 'splitbutton',
            text: 'Split Works w/o Tooltip',
            menu: Ext.create('Ext.menu.Menu', {
                width: 175,
                items: {
                    text: 'XXX',
                    xtype: 'menuitem'
                }
            })
        }, {
            xtype: 'button',
            tooltip: "This menu will NOT open.",
            tooltipType: "title",
            text: 'Button Broken w/ Title Tooltip',
            menu: Ext.create('Ext.menu.Menu', {
                width: 175,
                items: {
                    text: 'XXX',
                    xtype: 'menuitem'
                }
            })
        }, {
            xtype: 'button',
            text: 'Button Works w/o Tooltip',
            menu: Ext.create('Ext.menu.Menu', {
                width: 175,
                items: {
                    text: 'XXX',
                    xtype: 'menuitem'
                }
            })
        }]
    });
});
