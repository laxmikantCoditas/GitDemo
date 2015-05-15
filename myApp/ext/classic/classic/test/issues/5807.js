Ext.onReady(function() {
    Ext.create('Ext.Button', {
        text     : 'Button',
        renderTo : Ext.getBody(),
        itemId: 'linksAdd',
        menuAlign: 't-b?',
        menu: {
            xtype: 'menu'
            , items: [{
                xtype: 'toolbar'
                , width: 300
                , items: [{
                    xtype: 'textfield'
                    , emptyText: 'link url...'
                    , value: 'http://'
                    , allowBlank: false
                    , flex: 1
                }, {
                    xtype: 'textfield'
                    , emptyText: 'link title...'
                    , allowBlank: false
                }]
            }]
        }
    });
});
