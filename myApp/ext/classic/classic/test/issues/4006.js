Ext.define('A', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.a',
    layout: 'border',
    items: [{
        xtype: 'b',
        html: 'centre container'
    }, {
        xtype: 'c',
        html: 'east container'
    }]

});

Ext.define('B', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.b',
    region: 'center'
});

Ext.define('C', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.c',
    region: 'east',
    split: true,
    width: 300,
    
    collapsible: true,
    animCollapse: true,
    collapsed: true,
    collapseMode: 'mini',
    hideCollapseTool: true
});

Ext.onReady(function(){

    Ext.create('A');
    
});
