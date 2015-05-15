// The code pasted above the Ext.application in my app.js was right here
//
//

// Edit
//------------------------------------------------------------
Ext.define('EditIncident', {
    extend: 'Ext.TabPanel',
    config: {
        id: 'Incident_Edit',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        ui: 'Filters',
        defaults: {
            flex: 1,
            itemTpl: '{date} ({number})',
        },
        items: [{
            xtype: 'list',
            title: 'By Date',
            store: IncidentsDate,
            itemTpl: '{date} ({number})',
            listeners: {
                itemtap: function() {
                    // MyApp.Viewport.setActiveItem('Dashboard', {type: 'slide', direction: 'left'});
                }
            }
        },{
            xtype: 'list',
            title: 'Incident Number',
            store: IncidentsID,
            itemTpl: '{number} ({date})',
            listeners: {
                itemtap: function() {
                    // MyApp.Viewport.setActiveItem('Dashboard', {type: 'slide', direction: 'left'});
                }
            }
            //onItemDisclosure: function(record, btn, index) {
            //    MyApp.Viewport.setActiveItem('Dashboard', {type: 'slide', direction: 'left'});
            //}
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
//                ToolbarGlobal.setTitle('Edit Incident');
            }
        }
    }
});