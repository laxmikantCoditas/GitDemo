Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        layout: 'fit',
        tbar: [
            '-',
            {   xtype: 'label',
                text: 'Click on the "first" and behold cursor: '
            }, '->',{
                xtype: 'combo',
                store: {
                    fields: ['flag', 'name'],
                    data : [
                        {"flag":"", "name":"First"},
                        {"flag":"true", "name":"Second"},
                        {"flag":"false", "name":"Last"}
                    ]
                },
                displayField: 'name',
                valueField: 'flag',
                value: '',
                editable: false
            }
        ],
        width: 400,
        renderTo: Ext.getBody()
    })
});

