Ext.define('MyApp.view.MyView', {
    extend: 'Ext.form.Panel',
    xtype: 'myview',

    config: {
        fullscreen: true,
        floating: true,
        modal: true,
        centered: true,
        hideOnMaskTap: false,
        layout: {
            type: 'vbox'
        },
        height: 400,
        width: 480
    },


    initialize: function() {
        this.callParent();
        this.setItems(this.buildItems());
    },


    buildItems: function() {
        return [{
            xtype: 'titlebar',
            title: 'My App Rocks',
            docked: 'top'
        }, {
            xtype: 'fieldset',
            title: 'Kiosk Mode',
            defaults: {
                labelWidth: '50%'
            },
            items: [{
                xtype: 'selectfield',
                label: 'Kiosk Name',
                name: 'kioskName',
                options: this.config.devices
            }, {
                xtype: 'checkboxfield',
                label: 'Development Mode',
                name: 'devMode',
                checked: true
            }]
        }, {
            xtype: 'button',
            text: 'Start Kiosk',
            ui: 'confirm',
            itemId: 'startButton'
        }];
    }
});