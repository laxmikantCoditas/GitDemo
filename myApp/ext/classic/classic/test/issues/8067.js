Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        renderTo : document.body,
        items    : [
            {
                xtype : 'textfield'
            },
            {
                xtype : 'htmleditor'
            }
        ]
    });
});