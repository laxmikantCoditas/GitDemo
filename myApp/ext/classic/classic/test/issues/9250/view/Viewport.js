Ext.define('DesktopDirect.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.form.Panel'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            xtype:'form',
            title: 'Form',
            api:{
                load: 'ExtRemote.DXFormTest.load',
                submit:'ExtRemote.DXFormTest.submit'
            },
            paramOrder: ['uid'],
            items:[
                {
                    xtype:'textfield',
                    fieldLabel:'First name',
                    name:'firstname'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'Last nanme',
                    name:'lastname'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'Email',
                    name:'email'
                }
            ],
            tbar:[
                {
                    text:'load',
                    handler:function(btn){
                        btn.up('form').getForm().load({uid:123});
                    }
                },
                {
                    text:'Save',
                    handler:function(btn){
                        btn.up('form').getForm().submit();
                    }
                }
            ]
        }]
    }]
});
