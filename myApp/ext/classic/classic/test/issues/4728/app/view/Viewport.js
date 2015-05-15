

Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        align: 'stretch',
        padding: 5,
        type: 'vbox'
    },

    initComponent: function () {
        this.items = [
            {
                xtype: 'personlistgrid',
                flex: 1
            }
        ];

        this.callParent(arguments);
    }
});