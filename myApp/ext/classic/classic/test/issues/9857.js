Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        title: 'Hello',
        height: 250,
        width: 500,
        layout: 'column',
        defaults: {
            labelAlign: 'top',
            padding: '10'
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: '1',
                height: 36
            },
            {
                xtype: 'textfield',
                fieldLabel: '2',
                height: 36
            },
            {
                xtype: 'textfield',
                fieldLabel: '3',
                height: 50
            },
            {
                xtype: 'textfield',
                fieldLabel: '4',
//                        margin: '0 0 15 0',    //Fixes the issue
                height: 36
            },
            {
                xtype: 'textfield',
                fieldLabel: '5',
                height: 36
            }
        ]
    }).show();
});