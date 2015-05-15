Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {
    Ext.createWidget('form', {
        title: 'Form Panel',
        width: 500,
        height: 250,
        renderTo: 'form',
        bodyStyle: {
            padding: '10px'
        },
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        
        defaultType: 'textfield',
        items: [{
            xtype: 'numberfield',
            fieldLabel: 'Some Number',
            minValue: 0,
            allowBlank: false,
            allowDecimals: false
        },{
            fieldLabel: 'Text Field 1',
            allowBlank: false
        },{
            fieldLabel: 'Text Field 2'
        }],
        
        buttons: [{
            text: 'Submit',
            formBind: true,
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    console.log('Valid!');
                } else {
                    console.log('Invalid!');
                }
            }
        }]
    });
});
