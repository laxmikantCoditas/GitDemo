Ext.onReady(function(){
    var formPanel = Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        tbar: [{
            text: 'Destroy container',
            handler: function(){
                formPanel.getForm().getFields();
                formPanel.remove('baleeted');
                console.log(formPanel.getForm().getFields().getCount() == 2);
            }
        }, {
            text: 'Remove, no destroy',
            handler: function(){
                formPanel.getForm().getFields();
                formPanel.remove('baleeted', false);
                console.log(formPanel.getForm().getFields().getCount() == 2);
            }
        }, {
            text: 'Remove single field',
            handler: function(){
                formPanel.getForm().getFields();
                Ext.getCmp('baleeted').remove('f1');
                console.log(formPanel.getForm().getFields().getCount() == 3);
            }
        }],
        items: [{
            xtype: 'fieldcontainer',
            layout: 'hbox',
            id: 'baleeted',
            items: [{
                id: 'f1',
                xtype: 'textfield'
            }, {
                id: 'f2',
                xtype: 'textfield'
            }]
        }, {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [{
                id: 'f3',
                xtype: 'textfield'
            }, {
                id: 'f4',
                xtype: 'textfield'
            }]
        }]
    });
});
