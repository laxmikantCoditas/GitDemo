Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        width: 500,
        height: 300,

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [{
            xtype: 'panel',
            title: 'panel1',
            flex: 1
        },{
            xtype: 'panel',
            title: 'form1',
            flex: 1,

            collapsible: true,
            titleCollapse: true,
            collapseDirection: Ext.Component.DIRECTION_BOTTOM,
            animCollapse: false,

            listeners: {
                afterrender: function(panel) {
                    if (panel) {
                        panel.collapse(Ext.Component.DIRECTION_BOTTOM);
                    }
                }
            }
        }]
    }).show();
});
