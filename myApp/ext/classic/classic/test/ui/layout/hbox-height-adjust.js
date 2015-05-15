Ext.require([
    'Ext.container.Container',
    'Ext.layout.container.HBox'
]);

Ext.onReady(function(){

    var ct = Ext.widget('container', {
        style: 'border:1px solid blue;',
        width: 600,
        layout: {
            type: 'hbox',
            align: 'stretchmax'
        },
        renderTo: Ext.getBody(),

        items: [{
            style: 'border:1px solid red;',
            xtype: 'container',
            flex: 1,
            items: [{
                xtype: 'component',
                html: 'foo'
            }]
        }, {
            style: 'border:1px solid red;',
            xtype: 'container',
            flex: 1,
            items: [{
                xtype: 'component',
                html: 'foo'
            }]
        }]
    });


    Ext.widget('button', {
        renderTo: Ext.getBody(),
        text: 'add item to first column',
        handler: function(){
            ct.items.getAt(0).add({
                xtype: 'component',
                html: 'foo'
            });
        }
    });

});