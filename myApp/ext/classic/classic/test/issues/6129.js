Ext.onReady(function() {

    Ext.create('Ext.form.Panel', {
        title: 'Company data',
        frame: true,
        bodyPadding: 5,
        width: 870,
        items: [{
            xtype: 'fieldset',
            height: 234,
            collapsed: true,
            collapsible: true,
            title: 'Details',
            items: [{
                height: 100,
                width: 100
            }]
        }],
        renderTo: Ext.getBody()
    });

});