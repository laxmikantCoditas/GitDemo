Ext.Loader.setPath('Ext.ux', '../../examples/ux/');
Ext.require([
    '*'
]);
Ext.onReady(function() {
    Ext.define('MyApp.view.MyViewport', {
        extend: 'Ext.container.Viewport',

        id: 'vp',
        layout: {
            type: 'vbox',
            align: 'left',
            pack: 'start'
        },

        initComponent: function() {
            var me = this;

            Ext.applyIf(me, {
                items: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Add Grid',
                                listeners: {
                                    click: {
                                        fn: me.onButtonClick,
                                        scope: me
                                    }
                                }
                            }
                        ]
                    }
                ]
            });

            me.callParent(arguments);
        },

        onButtonClick: function(button, e, eOpts) {
            Ext.getCmp('vp').add({
                xtype: 'gridpanel',
                title: 'Simpsons',
                
                // Makes the width the total of all columns widths.
                shrinkWrapDock: true,
                columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email' },
                { text: 'Phone', dataIndex: 'phone' }
                ],
                store: Ext.create('Ext.data.Store', {
                    storeId:'simpsonsStore',
                    fields:['name', 'email', 'phone'],
                    data:[
                        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                    ]
                })
            });
        }

    });

    Ext.onReady(function() {
        Ext.create('MyApp.view.MyViewport');
    })
});