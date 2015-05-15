Ext.define('MyApp.view.NewIncident', {
    extend: 'Ext.form.FormPanel',
    xtype: 'incident',
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'center'
        },
        items: [{
            xtype: 'textfield',
            name: 'CaseID',
            placeHolder: 'Incident Number'
        },{
            xtype: 'button',
            name: 'Begin',
            ui: 'Confirm',
            text: 'Begin',
            handler: function(button, event) {
                // MyApp.Viewport.setActiveItem('Dashboard', {type: 'fade'});
            }
        }],
        dockedItems: [{
            xtype: 'toolbar',
            cls: 'Secondary',
            dock: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Cancel',
                handler: function() {
                    // MyApp.Viewport.setActiveItem('Start', {type: 'slide', direction: 'down'});
                }
            }]
        }],
        listeners: {
            activate: function() {
//                ToolbarGlobal.setTitle('New Incident');
            }
        }
    }
});


Ext.application({
    tabletStartupScreen: 'core-tablet.png',
    phoneStartupScreen: 'core-phone.png',
    icon: 'core-icon.png',
    name: 'MyApp',
    views: ['Start', 'NewIncident'],
    launch: function() {
        Ext.create('MyApp.view.Start');
    }
});













