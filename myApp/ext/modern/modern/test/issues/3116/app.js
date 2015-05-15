Ext.application({
    requires : [
        'Ext.Container',
        'Ext.field.Text',
        'Ext.field.DatePicker',
        'Ext.layout.Fit',
        'Ext.layout.HBox'
    ],

    name : 'Foo',

    launch : function () {

        var content = Ext.create('Ext.form.Panel', {
            items : [
                {
                    xtype  : 'textfield',
                    itemId : 'lastName',
                    value  : '',

                    label       : 'Name',
                    labelWidth  : '40%',
                    placeHolder : 'John Doe',

                    autoCapitalize : true,

                    required : true
                },

                {
                    xtype  : 'datepickerfield',
                    itemId : 'dob',
                    value  : '',

                    label      : 'DOB',
                    labelWidth : '40%',

                    picker : {
                        yearFrom : new Date().getFullYear() - 80,
                        yearTo   : new Date().getFullYear() - 2,

                        slotOrder : ["day", "month", "year"]
                    },

                    required : true
                }
            ]
        });

        var container = Ext.Viewport.add({
            xtype      : 'container',
            fullscreen : true,
            layout     : 'fit',

            items : [
                content
            ]
        });
    }
});
