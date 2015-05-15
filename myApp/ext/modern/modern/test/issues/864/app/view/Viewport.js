Ext.define('MyApp.view.Viewport', {

    id: 'viewport',
    extend: 'Ext.Container',

    config: {
        fullscreen: true,
        defaults: {
            scrollable: true
        },
        items: [
            

            {
                items:[{
            xtype: 'toolbar',
            title: 'myapp',
            docked: 'top',
            ui: 'dark'
        },
        {xtype: 'fieldset',
                id: 'LoginFieldset',
                title: 'Login',
                defaults: {
                    disabled: true
                },
                items: [
                {
                    xtype: 'emailfield',
                    placeHolder: 'email',
                    name: 'email',
                    id: 'email',
                    required: true
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
                    // ui: 'confirm',
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
                    text: 'OMG TAP THIS',
                    ui: 'confirm',
                    disabled: false,
                    style: 'margin:2%;',
                    handler: function() {
                        Ext.getCmp('viewport').setActiveItem(1);
                    }
                }
                ]}]
            },



            {
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
                            Ext.getCmp('viewport').setActiveItem(0);
                        }
                    }
                }
            ]
        },{
                xtype: 'fieldset',
                title: 'About you',
                items: [
                {
                    xtype: 'textfield',
                    id: 'firstName',
                    name: 'firstName',
                    placeHolder: 'first name',
                    required: true,
                    disabled:true
                },
                {
                    xtype: 'textfield',
                    placeHolder: 'last name',
                    name: 'lastName',
                    id: 'lastName',
                    required: true,
                    disabled:true
                },
                {
                    xtype: 'button',
                    text: 'Register',
                    // ui: 'confirm',
                    disabled:true,
                    style: 'margin:2%;',
                    handler: function() {
                    }
                }
                ]
            }]
    }
        ],
        layout: {
            type: 'card',
            animation: {type: 'slide'}
        }
    }


    // setActive: function(target, animation) {
    //     var start = new Date().getTime();
    //     var containerLayout = this.getLayout(),
    //         targetComponent = this.getComponent(target);
    //     console.warn(new Date().getTime() - start);
    //     containerLayout.setAnimation(animation || containerLayout.getAnimation());
    //     console.warn(new Date().getTime() - start);
    //     this.setActiveItem(targetComponent);
    //     console.warn(new Date().getTime() - start);
    // },


    // constructor: function(config) {
    //     console.log(this.self.getName() + '::constructor()', [this, arguments]);
    //     //this.initConfig(config); // not working
    //     this.callParent([config]);
    // },


    // initialize: function() {
    //     console.log(this.self.getName() + '::initialize()', [this, arguments]);

    //     this.add([
    //         {'xtype':'login'},
    //         {'xtype':'register'},
    //         //{'xtype':'container'}
    //     ]);

    //     Ext.Viewport.add(this);

    //     this.callParent();
    // }


});