Ext.define('MyApp.view.Start', {
    extend: 'Ext.Container',
    requires: ['MyApp.view.NewIncident'],
    config: {
        id: 'Start',
        cls: 'Start',
        fullscreen: true,
        layout: {
            type: 'vbox',
            pack: 'stretch',
            align: 'center',
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'panel',
            layout: {
                type: 'vbox',
                pack: 'top'
            },
            items: [{
                xtype: 'button',
                cls: 'PadTop',
                ui: 'Confirm',
                text: 'Create New Incident',
                handler: function(button, event) {
                    var myNewIncident = Ext.Viewport.add({
                        xtype: 'incident',
                        id: 'Incident_New'
                    });
                    Ext.Viewport.animateActiveItem(myNewIncident, {type: 'slide', direction: 'up'});
                }
            }]
        },{
            xtype: 'panel',
            flex: '1',
            layout: {
                type: 'vbox',
                pack: 'bottom'
            },
            items: [{
                xtype: 'button',
                cls: 'PadBot',
                ui: 'Minor',
                text: 'Edit Existing Incident',
                handler: function(button, event) {
                    MyApp.Viewport.setActiveItem('Incident_Edit', {type: 'slide', direction: 'up'});
                }
            }]
        },{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                //iconCls: 'settings6',
                icon: 'resources/themes/images/myapp/icon-settings.png',
                ui: 'Default',
                handler: function() {
                    MyApp.Viewport.setActiveItem('Settings', {type: 'flip'});
                }
            },{
                xtype: 'spacer'
            },{
                //iconCls: 'info',
                icon: 'resources/themes/images/myapp/icon-info.png',
                ui: 'Default',
                handler: function() {
                    MyApp.Viewport.setActiveItem('Info', {type: 'flip'});
                    //var this_view = this.getId();
                    //console.log(this_view);
                }
            }]
        }]
    }

});


// INTRO
//------------------------------------------------------------
Ext.define('MyApp.view.Intro', {
    extend: 'Ext.Panel',
    config: {
        id: 'Intro',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            html: [
                '<p>Welcome! Before you can get started you must.....</p>'
            ]
        },{
            xtype: 'button',
            ui: 'Default',
            cls: 'PadTop',
            text: 'Go to Settings',
            handler: function() {
                MyApp.Viewport.setActiveItem('Settings', {type: 'flip'});
            }
        }]
    }



});


// FIRST-TIME RUN
//------------------------------------------------------------
Ext.define('MyApp.view.DetectFirst', {
    extend: 'Ext.Panel',
    config: {
        id: 'DetectFirst',
        layout: 'card',
        items: ['MyApp.view.Start', 'MyApp.view.Intro'],
        listeners: {
            activate: function() {
                ToolbarGlobal.hide();
            }
        }

    }
});