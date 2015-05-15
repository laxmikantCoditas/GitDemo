Ext.onReady(function() {
    var base = {
        renderTo: Ext.getBody(),
        
        width: 300,
        height: 300,
        
        margin: '0 40 40 0',
        
        cls: 'floater'
    };
    
    Ext.create('widget.panel', Ext.apply({}, {
        border: false,
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'left',
                width: 30
            },
            {
                xtype: 'toolbar',
                dock: 'right',
                width: 30
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30,
                weight: 100
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                height: 30,
                weight: 100
            }
        ]
    }, base));
    
    Ext.create('widget.panel', Ext.apply({}, {
        border: false,
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'left',
                width: 30
            },
            {
                xtype: 'toolbar',
                dock: 'right',
                width: 30
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30,
                weight: 100
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                height: 30,
                weight: 100
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30,
                weight: 300
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                height: 30,
                weight: 300
            },
            {
                xtype: 'toolbar',
                dock: 'left',
                width: 30,
                weight: 200
            },
            {
                xtype: 'toolbar',
                dock: 'right',
                width: 30,
                weight: 200
            }
        ]
    }, base));
    
    Ext.create('widget.panel', Ext.apply({}, {
        border: false,
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'left',
                width: 30,
                weight: 100
            },
            {
                xtype: 'toolbar',
                dock: 'right',
                width: 30,
                weight: 100
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                height: 30
            }
        ]
    }, base));
    
    Ext.create('widget.panel', Ext.apply({}, {
        border: false,
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                height: 30
            },
            {
                xtype: 'toolbar',
                dock: 'right',
                width: 30,
                weight: 100
            }
        ]
    }, base));
});