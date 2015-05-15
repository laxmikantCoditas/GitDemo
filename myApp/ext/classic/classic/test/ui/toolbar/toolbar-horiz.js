Ext.require(['*']);

Ext.onReady(function() {
    var buttons = [{
        xtype: 'tbtext',
        text : 'Text'
    },  {
        xtype: 'tbseparator'
    }];
    for (var i = 0; i < 20; i++) {
        buttons.push({
            text: 'Button ' + (i + 1),
            handler: function(b) {
                console.log('clicked ' + b.text);
            }
        })
    }
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width : 600,
        layout: {
            overflowHandler: 'Menu'
        },
        items: buttons
    });
});