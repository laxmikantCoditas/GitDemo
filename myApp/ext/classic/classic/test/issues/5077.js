Ext.require('Ext.form.*');
Ext.onReady(function() {
    
    
    var main = Ext.create('Ext.form.Panel', {
        renderTo: document.body,
        width: 200,
        bodyPadding: 10,
        items: [{
            xtype: 'checkbox',
            boxLabel: 'readOnly',
            id: 'readOnly'
        }, {
            xtype: 'checkbox',
            boxLabel: 'editable',
            id: 'editable'
        }],
        buttons: [{
            text: 'Create',
            handler: function(){
                Ext.destroy(form);
                
                var readOnly = Ext.getCmp('readOnly').checked,
                    editable = Ext.getCmp('editable').checked;
                
                trigger = Ext.create('Ext.form.field.Trigger', {
                    readOnly: readOnly,
                    editable: editable,
                    anchor: '75%'        
                });
                
                form = Ext.create('Ext.form.Panel', {
                    renderTo: document.body,
                    bodyPadding: 10,
                    width: 300,
                    margin: '20 0 0 0',
                    items: trigger,
                    buttons: [{
                        text: 'readOnly',
                        enableToggle: true,
                        pressed: readOnly,
                        toggleHandler: function(btn, pressed) {
                            trigger.setReadOnly(pressed);
                        }
                    }, {
                        text: 'editable',
                        enableToggle: true,
                        pressed: editable,
                        toggleHandler: function(btn, pressed) {
                            trigger.setEditable(pressed);
                        }
                    }]
                })
            }
        }]
    }), form, trigger;
    
});