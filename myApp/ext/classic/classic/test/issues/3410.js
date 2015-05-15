Ext.onReady(function(){
    
    function makeItems(direction, animate) {
        var items = [],
            i = 1;
        for (; i < 5; ++i) {
            items.push({
                flex: 1,
                title: 'Item ' + i,
                html: 'Item' + i,
                collapsible: true,
                collapseDirection: direction,
                animCollapse: animate
            });
        }
        return items;
    }
    
    Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaultType: 'container',
        defaults: {
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        },
        items: [{
            items: makeItems('left', true)
        }, {
            items: makeItems('right', false)
        }]
    });
    
});
