Ext.require('*');
Ext.onReady(function() {
    var tab2 = Ext.widget({
        title: 'Inner Tabs',
        xtype: 'form',
        collapsible: true,
        bodyPadding: 5,
        width: 600,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            anchor: '100%'
        },

        items: [{
            xtype:'tabpanel',
            plain:true,
            activeTab: 0,
            height:235,
            deferredRender : false,
            defaults: {
                bodyPadding: 10
            },
            items:[{
                title:'Personal Details',
                defaults: {
                    width: 230
                },
                defaultType: 'textfield',

                items: [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    value: 'Jamie'
                },{
                    fieldLabel: 'Last Name',
                    name: 'last',
                    value: 'Avins'
                }]
            },{
                title:'Phone Numbers',
                defaults: {
                    width: 230
                },
                defaultType: 'textfield',

                items: [{
                    xtype: 'filefield',
                    fieldLabel: 'Picture',
                    name: 'pic'
                },{
                    fieldLabel: 'Business',
                    name: 'business'
                }]
            }]
        }]
    });

    tab2.render(document.body);
})