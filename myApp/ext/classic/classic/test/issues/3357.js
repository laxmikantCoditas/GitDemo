Ext.onReady(function() {
    
    Ext.create('Ext.container.Container', {
        layout: 'vbox',
        width: 400,
        height: 800,
        renderTo: document.body,
        defaultType: 'container',
        defaults: {
            layout: 'hbox',
            height: 50,
            width: 600
        },
        items: [{
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Field 1'
            }, {
                xtype: 'button',
                text: 'Change Label, no sep',
                handler: function(){
                    this.prev().setFieldLabel('Change 1');
                }
            }]
        }, {
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Field 2'
            }, {
                xtype: 'button',
                text: 'Change Label with sep',
                handler: function(){
                    this.prev().setFieldLabel('Change 2:');
                }
            }]
        }, {
            items: [{
                xtype: 'textfield'
            }, {
                xtype: 'button',
                text: 'Add Label',
                handler: function(){
                    this.prev().setFieldLabel('Added 3');
                }
            }]
        }, {
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Field 4'
            }, {
                xtype: 'button',
                text: 'Remove Label',
                handler: function(){
                    this.prev().setFieldLabel('');
                }
            }]
        }, {
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Field 5',
                hideEmptyLabel: false
            }, {
                xtype: 'button',
                text: 'Hide Label',
                handler: function(){
                    this.prev().setFieldLabel('');
                }
            }]
        }]
    });
    
});