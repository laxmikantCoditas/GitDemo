Ext.define('session.Login', {

    id: 'login',
    name: 'Login',
    alias: 'widget.login',
    extend: 'Ext.form.FormPanel',
    //requires: ['Ext.Animator'],


    config: {
        
    },


    initialize: function() {
        console.log(this.self.getName() + '::initialize()', [this, arguments]);


        // Configure component
        this.add([{
                xtype: 'fieldset',
                id: 'LoginFieldset',
                title: 'Login',
                items: [
                {
                    xtype: 'emailfield',
                    placeHolder: 'email',
                    name: 'email',
                    id: 'email',
                    required: true,
                }, {
                    xtype: 'passwordfield',
                    placeHolder: 'password',
                    name: 'password',
                    required: true
                }, {
                    xtype: 'togglefield',
                    name: 'remember_me',
                    label: 'Save login?',
                    labelWidth: '60%'
                },
                {
                    xtype: 'button',
                    text: 'Login',
                    ui: 'confirm',
                    style: 'margin:2%;',
                    handler: function() {
                    }
                }
                ]},
                {
                xtype: 'fieldset',
                title: 'New user?',
                items: [
                {
                    xtype: 'button',
                    text: 'Register',
                    ui: 'confirm',
                    style: 'margin:2%;',
                    handler: function() {
                        Ext.getCmp('viewport').setActive('register', {type: 'slide', direction: 'left'});
                    }
                }
                ]}
            ]);


        this.callParent();
    }


});