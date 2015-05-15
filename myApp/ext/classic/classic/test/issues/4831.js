var config = {
    xtype: 'container',
    layout: 'hbox',
    width: 300,
    padding: 10,
    items: [
        {xtype:'textfield'}
        ,
        {xtype:'tbspacer'}
        ,
        {xtype:'triggerfield'}
    ]
};

config = [
    config
    ,
    Ext.Object.mergeIf({layout:'vbox'}, config)
    ,
    Ext.Object.mergeIf({layout:'auto'}, config)
];
