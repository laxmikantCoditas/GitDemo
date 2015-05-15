Ext.onReady(function(){
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west',
            title: 'West',
            width: 200
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: {
                title: 'Tab',
                layout: 'border',
                items: [{
                    region: 'center',
                    html: 'Main',
                    dockedItems: [{
                        xtype: 'toolbar',
                        items: {
                            text: 'Top toolbar'
                        }
                    }, {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        id: 'tb',
                        items: [{
                            text: 'Update text',
                            handler: function(){
                                Ext.getCmp('text').setText('long text here');
                                Ext.getCmp('tb').doComponentLayout();
                            }
                        }, '->', {
                            xtype: 'tbtext',
                            id: 'text'
                        }]
                    }]
                }, {
                    region: 'south',
                    height: 200,
                    title: 'South'
                }]
            }
        }]
    });
});