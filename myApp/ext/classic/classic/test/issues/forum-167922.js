// Ext.require('Ext.diag.layout.ContextItem');

function doTest () {

        var logo = Ext.create('Ext.Panel', { itemId: 'logo', screen: self
                , region: 'west'
                , html: ''
                , layout: 'card'
                , width: 300
        });

        var header = Ext.create('Ext.Panel', { itemId: 'header', screen: self
                , region: 'center'
                , html: ''
                , layout: 'card'
        });

        var body = Ext.create('Ext.Panel', { itemId: 'body', screen: self
                , region: 'center'
                , html: ''
                , layout: 'card'
        });

        var fake1 = Ext.create('Ext.Panel', { itemId: 'fake1', screen: self
                , region: 'west'
                , width: 223
                , layout: 'card'
        });

        var loginname = Ext.create('Ext.form.field.Text', { itemId: 'loginname'
                , screen: self
                , fieldLabel: 'Username'
                , name: 'loginname'
                , value: ''
                , labelWidth: 75
                , width: 225
                , height: 22
                , resize: { minHeight: 22, maxHeight: 22, minWidth: 225, maxWidth: 375 }
        });

        var password = Ext.create('Ext.form.field.Text', { itemId: 'password'
                , screen: self
                , fieldLabel: 'Password'
                , inputType: 'password'
                , name: 'password'
                , labelWidth: 75
                , width: 225
                , height: 22
                , resize: { minHeight: 22, maxHeight: 22, minWidth: 225, maxWidth: 375 }
        });

        var client = Ext.create('Ext.form.field.Number', { itemId: 'client'
                , screen: self
                , fieldLabel: 'Client'
                , inputType: ''
                , name: 'client'
                , value: '24'
                , labelWidth: 75
                , width: 150
                , height: 22
                , resize: { minHeight: 22, maxHeight: 22, minWidth: 150, maxWidth: 225 }
        });

        var application = Ext.create('Ext.form.field.Number', { itemId: 'application'
                , screen: self
                , fieldLabel: 'Application'
                , inputType: ''
                , name: 'application'
                , value: '20'
                , labelWidth: 75
                , width: 150
                , height: 22
                , resize: { minHeight: 22, maxHeight: 22, minWidth: 150, maxWidth: 225 }
        });

        var rememberme = Ext.create('Ext.form.field.Checkbox', { itemId: 'rememberme'
                , screen: self
                , fieldLabel: 'Remember Me'
                , name: 'rememberme'
                , value: '@rememberme'
                , labelWidth: 75
                , width: 225
                , height: 22
                , resize: { minHeight: 22, maxHeight: 22, minWidth: 225, maxWidth: 375 }
        });

        var formfieldset10 = Ext.create('Ext.form.FieldSet', { itemId: 'formfieldset10', screen: self, defaults: { labelWidth: 75 }
                 , items: [loginname,
                 password,
                 client,
                 application,
                 rememberme]
        });

        var form_loginpanel = Ext.create('Ext.form.Panel', { itemId: 'form_loginpanel', items: [formfieldset10] });

         var loginpanel = Ext.create('Ext.Panel', { 
                 itemId: 'loginpanel'
                , screen: self
                , region: 'center' 
                , layout: 'card', items: [form_loginpanel]
         });

        var submitbut = Ext.create('Ext.Button', { itemId: 'submitbut'
                  , screen: self
                  , text: 'Log in'
        });

        var formfieldset17 = Ext.create('Ext.form.FieldSet', { itemId: 'formfieldset17'
                  , screen: self
                  , defaults: { labelWidth: 75 }
                  , items: [submitbut]
        });

        var form_fake2 = Ext.create('Ext.form.Panel', { itemId: 'form_fake2'
                  , items: [formfieldset17]
        });

        var fake2 = Ext.create('Ext.Panel', { itemId: 'fake2'
                , screen: self
                , region: 'east'
                , width: 319
                , layout: 'card', items: [form_fake2]
        });

        var footerpanel = Ext.create('Ext.Panel', { itemId: 'footerpanel'
                    , screen: self
                    , height: 20
                    , html: ''
                    , layout: 'card'
        });

        var fourthpanel = Ext.create('Ext.Panel', { itemId: 'fourthpanel', screen: self
                , region: 'south'
                , height: 20
                , layout: 'card', items: [footerpanel]
        });

        var thirdpanel = Ext.create('Ext.Panel', { itemId: 'thirdpanel', screen: self
                , region: 'south'
                , id: 'thirdpanel'
                , layout: 'border', items: [fake1,
                 loginpanel,
                 fake2,
                 fourthpanel]
        });

        var secondpanel = Ext.create('Ext.Panel', { itemId: 'secondpanel', screen: self
                , region: 'south'
                , layout: 'border'
                , height: 300, items: [body, thirdpanel]
        });

        var firstpanel = Ext.create('Ext.Panel', { itemId: 'firstpanel'
                 , screen: self
                 , layout: 'border'
                 , id: 'firstpanel'
                 , items: [logo,
                 header,
                 secondpanel]
        });

        var screen_0 = Ext.create('Ext.Panel', { itemId: 'screen_0', screen: self
                    , id: 'screen_0'
                    , layout: 'card'
                    , items: [firstpanel]
        });

    var vp = Ext.create('Ext.Viewport', {
    layout: 'fit'
       , renderTo: Ext.getBody()
       ,items: [screen_0] 
    });
}

Ext.onReady(doTest);
