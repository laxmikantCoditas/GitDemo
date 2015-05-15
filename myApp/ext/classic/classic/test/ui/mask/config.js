Ext.require(['Ext.form.Panel', 'Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {
    
    var i = 0,
        panel,
        mask;
        
    var form = Ext.create('Ext.form.Panel', {
        width: 300,
        height: 100,
        renderTo: document.body,
        items: [{
            xtype: 'checkbox',
            itemId: 'useTargetEl',
            boxLabel: 'useTargetEl'
        }, {
            xtype: 'checkbox',
            itemId: 'useMsg',
            boxLabel: 'useMsg',
            checked: true,
            listeners: {
                change: function(field){
                    field.next().setDisabled(!field.checked);
                }
            }
        }, {
            xtype: 'textfield',
            itemId: 'msg',
            fieldLabel: 'msg',
            value: 'Loading...'
        }],
        buttons: [{
            text: 'Create',
            handler: function(){
                Ext.destroy(panel, mask);
                
                panel = Ext.create('Ext.panel.Panel', {
                    width: 200,
                    height: 200,
                    renderTo: document.body,
                    margin: 5,
                    title: 'Panel ' + (++i)
                });
                
                mask = new Ext.LoadMask(panel, {
                    useTargetEl: form.down('#useTargetEl').checked,
                    useMsg: form.down('#useMsg').checked,
                    msg: form.down('#msg').getValue()
                }).show();
            }
        }] 
    });
    
});