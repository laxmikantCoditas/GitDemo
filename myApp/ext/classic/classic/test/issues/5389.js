Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Leading line break (\\n)',
        width: 350,
        renderTo: Ext.getBody(),

        items: [{
            id: 'myTextArea',
            xtype: 'textarea',
            anchor: '100%',
            value: '\nline1\nline2'
        }],

        buttons: [{
            text: 'Is Dirty?',
            handler: function(button) {
                Ext.Msg.alert('Is form dirty?', button.up('form').getForm().isDirty() ? 'yes' : 'no');
            }
        }]
    });
});