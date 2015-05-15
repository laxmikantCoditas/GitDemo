Ext.require('*');
Ext.onReady(function() {
    var vertical = {
        renderTo: Ext.getBody(),
        margin: '10 0 10 10',
        vertical: true,
        height: 300,
        style: 'float:left',
        items: [
            {
                xtype: 'button',
                text: 'button'
            },
            '-',
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            }
        ]
    };
    
    var horizontal = {
        renderTo: Ext.getBody(),
        margin: '10 0 10 10',
        width: 500,
        style: 'clear:both',
        items: [
            {
                xtype: 'button',
                text: 'button'
            },
            '-',
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            },
            {
                xtype: 'button',
                text: 'button'
            }
        ]
    };
    
    Ext.create('widget.toolbar', Ext.apply({
        width: 100
    }, vertical));
    
    Ext.create('widget.toolbar', Ext.apply({
        width: 200
    }, vertical));
    
    Ext.create('widget.toolbar', Ext.apply({
        width: 300
    }, vertical));
    
    Ext.create('widget.toolbar', horizontal);
    
    Ext.create('widget.toolbar', Ext.apply({
        height: 100
    }, horizontal));
});