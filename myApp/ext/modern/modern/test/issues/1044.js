Ext.setup({
    onReady: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'fit',
            items: [
                {
                    docked: 'left',
                    style: 'border-right:1px solid #000000;background:#fff;',
                    width: '30%',
                    items: [
                        {
                            xtype: 'toolbar',
                            docked: 'top'
                        }
                    ],
                    html: 'left item'
                },
                {
                    layout: 'fit',
                    items: [


                        {
                            xtype: 'toolbar',
                            docked: 'top',
                            title: 'Content',
                            items: [
                                {
                                    text: 'Show Sheet',
                                    handler: function() {
                                        var sheet = Ext.getCmp('sheet');
                                        sheet.show();
                                    }
                                }
                            ]
                        },
                        {
                            layout: 'card',
                            items: [
                                {
                                    html: 'this is a card'
                                },
                                {
                                    xtype: 'sheet',
                                    id: 'sheet',
                                    modal: false,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: 100
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});