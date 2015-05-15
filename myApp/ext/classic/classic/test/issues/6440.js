Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'center',
                    region: 'center'
                },
                /*
                 {   // panel works fine
                 xtype: 'panel',
                 height: 150,
                 collapsed: true,
                 collapsible: true,
                 title: 'South',
                 region: 'south'
                 }
                 */
                {   // grid cause panel to go to top
                    xtype: 'grid',
                    height: 150,
                    collapsed: true, // works fine if set to false first
                    collapsible: true,
                    title: 'Expand me',
                    region: 'south',
                    columns: [{header: 'World'}],
                    store: Ext.create('Ext.data.ArrayStore', {})
                }
            ]
        });

        me.callParent(arguments);
    }

});

Ext.onReady(function() {
    var vp = Ext.create('MyApp.view.MyViewport', {

    });

    // vp.down('grid').collapse(); // collapsed and this still causes problem
});