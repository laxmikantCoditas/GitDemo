Ext.onReady(function() {
    var states = Ext.create('Ext.data.Store', {
        fields: ['abbr', 'name'],
        data: [{
            "abbr": "AL",
            "name": "Alabama"
        }, {
            "abbr": "AK",
            "name": "Alaska"
        }, {
            "abbr": "AZ",
            "name": "Arizona"
        }]
    });


    Ext.create('Ext.form.Panel', {
        title: 'Simple Form',
        bodyPadding: 5,
        width: 350,

        // The form will submit an AJAX request to this URL when submitted
        url: 'save-form.php',

        // Fields will be arranged vertically, stretched to full width
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

        // The fields
        defaultType: 'textfield',
        items: [{
            xtype: 'combo',
            fieldLabel: 'Choose State',
            name: 'cbTest',
            emptyText: 'Choose an Option...',
            store: states,
            queryMode: 'local',
            valueField: 'abbr',
            displayField: 'name'
        }, {
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            name: 'last',
            allowBlank: false
        }],

        // Reset and Submit buttons
        buttons: [{
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }
        },
        {
            text: 'Load Data',
            handler: function() {
                this.up('form').getForm().load({
                    url: '14803.json',
                    failure: function(form, action) {
                        Ext.Msg.alert("Load failed", action.result.errorMessage);
                    }
                });


            }
        }],
        renderTo: Ext.getBody()
    });
});
