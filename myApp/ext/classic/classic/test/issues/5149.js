Ext.onReady(function() {
    var collapsed = false;
        
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            collapsed: collapsed,
            region: 'west',
            collapsible: true,
            collapseMode: 'mini',
            split: true,
            width: 100
        }, {
            collapsed: collapsed,
            region: 'north',
            collapsible: true,
            collapseMode: 'mini',
            split: true,
            height: 100
        }, {
            region: 'center'
        }, {
            collapsed: collapsed,
            region: 'east',
            collapsible: true,
            collapseMode: 'mini',
            split: true,
            width: 100
        }, {
            collapsed: collapsed,
            region: 'south',
            collapsible: true,
            collapseMode: 'mini',
            split: true,
            height: 100
        }]
    });
});
