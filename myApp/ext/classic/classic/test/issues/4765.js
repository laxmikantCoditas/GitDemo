// Ext.require('Ext.diag.layout.ContextItem');

var config = {
    xtype: 'container',
    
    height: 300,
    width: 150,
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    style:'background: #9ff; border:10px solid yellow',

    items: [

        {
            xtype: 'textareafield',
            fieldLabel: 'Message',
            labelAlign: 'top',
            flex: 1
        }
        // ,
        // {
        //     xtype: 'textareafield',
        //     fieldLabel: 'Message',
        //     labelAlign: 'top',
        //     flex: 1
        // }
        ,
        {
            xtype: 'slider',
            fieldLabel: 'Message',
            labelAlign: 'top',
            flex: 1
        }
        ,
        {
            xtype: 'slider',
            fieldLabel: 'Message',
            labelAlign: 'top',
            vertical: true,
            flex: 1
        }

    ]

};
