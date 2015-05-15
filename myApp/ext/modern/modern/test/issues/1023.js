// Ext.define('SuperQualifier.model.Location', {
//     extend : 'Ext.data.Model',
//     fields : [{
//         name : 'locationName',
//         type : 'string'
//     }, {
//         name : 'id',
//         type : 'int'
//     }],
//     proxy : {
//         type : 'rest',
//         url : '../loanQualifier/getLocationTypes',
//         reader : {
//             type : 'json',
//             root : ''
//         }
//     }
// })

// Ext.define('SuperQualifier.store.Locations', {
//     extend : "Ext.data.Store",
//     model : 'SuperQualifier.model.Location',
//     requires : 'SuperQualifier.model.Location',
//     // data : [{
//         // locationName : 'Test',
//         // id : 1
//     // }, {
//         // locationName : 'ABc',
//         // id : 2
//     // }]
// })

Ext.require([
    'Ext.data.Store'
]);

Ext.setup({
    onReady : function() {
        Ext.regModel('Contact', {
            fields: ['firstName', 'lastName']
        });

        locationsStore = Ext.create('Ext.data.Store', {
            model: 'Contact',
            proxy: {
                type: 'ajax',
                url : '1023.json'
            }
        });

        // var locationsStore = Ext.create('SuperQualifier.store.Locations');
        // locationsStore.load();
        var popup = Ext.create('Ext.Panel', {
            modal : true,
            centered : true,
            layout : 'fit',
            width : 750,
            height : 350,
            hideOnMaskTap : false,
            scrollable : false,
            items : [{
                docked : 'top',
                xtype : 'toolbar',
                title : 'New Property'
            }, {
                xtype : 'formpanel',
                scrollable : false,
                items : [{
                    xtype : 'fieldset',
                    instructions : 'Please fill out above information.',
                    items : [{
                        xtype : 'textfield',
                        name : 'address',
                        label : 'Address',
                        required : true,
                        autoCapitalize : true
                    }, {
                        layout : 'hbox',
                        items : [{
                            xtype : 'textfield',
                            name : 'city',
                            label : 'City',
                            required : true,
                            flex : 2,
                            autoCapitalize : true
                        }, {
                            xtype : 'textfield',
                            name : 'state',
                            label : 'State',
                            flex : 1,
                            labelWidth : '50%',
                            required : true
                        }, {
                            xtype : 'numberfield',
                            name : 'zip',
                            label : 'Zip',
                            flex : 1,
                            required : true
                        }]
                    }, {
                        xtype : 'selectfield',
                        name : 'location',
                        label : 'Location',
                        displayField : 'firstName',
                        valueField : 'lastName',
                        store : locationsStore
                    }]
                }, {
                    layout : 'hbox',
                    defaults : {
                        xtype : 'button',
                        flex : 1,
                        style : 'margin: .5em'
                    },
                    items : [{
                        ui : 'confirm-round',
                        text : 'Add',
                        id : 'addpropertybutton',
                        handler : function() {
                            that.submitAddPropertyForm(popup.down('formpanel'));
                        }
                    }, {
                        ui : 'round',
                        text : 'Cancel',
                        id : 'canceladdpropertybutton',
                        handler : function() {
                            popup.hide();
                            popup.destroy();
                        }
                    }]
                }]
            }]
        });
        popup.show()
    }
});
