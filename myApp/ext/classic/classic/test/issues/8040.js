Ext.application({
    name : 'Test',

    requires : [
        'Ext.form.Panel',
        'Ext.form.field.Time',
        'Ext.button.Button'
    ],

    launch : function() {

        new Ext.form.Panel({
            renderTo : document.body,
            items    : [
                {
                    xtype      : 'timefield',
                    fieldLabel : 'Date'
                },
                {
                    xtype   : 'button',
                    text    : 'setValue',
                    handler : function (btn) {
                        var form  = btn.up('form'),
                            field = form.down('timefield');

                        //should return the field
                        console.log(field.setValue('00:00'));
                    }
                }
            ]
        });

    }
});