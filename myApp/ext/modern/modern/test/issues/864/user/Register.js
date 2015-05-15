Ext.define('MyApp.view.user.Register', {

    id: 'register',
    name: 'Register',
    alias: 'widget.register',
    extend: 'Ext.form.FormPanel',
    requires: [],


    config: {
        items:[{
            xtype: 'toolbar',
            title: 'Register',
            docked: 'top',
            ui: 'dark',
            items: [
                {
                    text: 'Back',
                    ui: 'back',
                    xtype:'button',
                    listeners: {
                        'tap': function () {
                            Ext.getCmp('viewport').setActive('login', {type: 'slide', direction: 'right'});
                        }
                    }
                }
            ]
        }]
    },


    initialize: function() {
        console.log(this.self.getName() + '::initialize()', [this, arguments]);


        // Configure component
        this.add([
                {
                xtype: 'fieldset',
                title: 'About you',
                items: [
                {
                    xtype: 'textfield',
                    id: 'firstName',
                    name: 'firstName',
                    placeHolder: 'first name',
                    required: true,
                },
                {
                    xtype: 'textfield',
                    placeHolder: 'last name',
                    name: 'lastName',
                    id: 'lastName',
                    required: true,
                },
                {
                    xtype: 'button',
                    text: 'Register',
                    ui: 'confirm',
                    style: 'margin:2%;',
                    handler: function() {
                    }
                }
                ]
            }]);


        this.callParent();
    }


});