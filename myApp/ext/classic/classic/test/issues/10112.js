Ext.require('Ext.tab.*');

Ext.onReady(function () {
    var tabs = Ext.widget('tabpanel', {
        renderTo: Ext.getBody(),
        width: 450,

        activeTab: 0,
        defaults: {
            bodyPadding: 10
        },
        items: [
            {
                xtype: 'panel',
                title: 'hide',
                id: 'view',
                hideMode: 'offsets',
                order: 1,
                html: 'html cont'
            }
        ]
    });


    Ext.create('Ext.container.Container', {
        layout: {
            type: 'hbox'
        },
        width: 400,
        renderTo: Ext.getBody(),
        items: [
            {
                xtype: 'button',
                text: 'Hide',
                handler: function () {
                    var myCmp = Ext.getCmp('view');
                    myCmp.hide();
//                        myCmp.hidden= true;       // Workaround: works if you uncomment this line
                }
            },
            {
                xtype: 'button',
                text: 'Show',
                handler: function () {
                    Ext.getCmp('view').show();
                }
            }
        ]

    });
});