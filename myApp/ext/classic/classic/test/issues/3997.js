Ext.onReady(function(){
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width: 400,
        items: [{
            buttonOnly: true,
            hideLabel: true,
            xtype: 'filefield',
            buttonText: 'Upload'
        }, {
            text: 'Some other button'
        }]
    });
    
    Ext.create('Ext.form.field.File', {
        buttonOnly: true,
        hideLabel: 'true',
        buttonText: 'Upload',
        renderTo: document.body
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Some other button',
        renderTo: document.body
    });
});
