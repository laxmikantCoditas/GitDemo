Ext.require([
    'Ext.panel.Panel',
    'Ext.container.Viewport',
    'Ext.layout.container.Absolute'
]);
Ext.onReady(function(){

    var items = [],
        width = 150,
        height = 150,
        margin = 15,
        x = 50,
        y = 50,
        offset = 10,
        toolbarHeight = 28,
        toolbarWidth = 42,
        border = 2;
    
    Ext.Array.forEach(['top', 'right', 'bottom', 'left'], function(dock, index){
        var isHoriz = dock == 'top' || dock == 'bottom';
        items.push({
            anchor: 'none',
            width: width,
            height: height,
            x: x + (index * (width + offset)),
            y: y,
            style: {
                border: '1px solid red'
            },
            dockedItems: [{
                dock: dock,
                margin: margin,
                xtype: 'toolbar',
                width: !isHoriz ? toolbarWidth : undefined,
                height: isHoriz ? toolbarHeight : undefined,
                items: {
                    text: 'dock'
                }
            }]
        });
    });
    
    Ext.Array.forEach(['top', 'right', 'bottom', 'left'], function(dock, index){
        var isHoriz = dock == 'top' || dock == 'bottom';
        items.push({
            anchor: 'none',
            x: x + (index * (width + offset)),
            y: height + y + offset,
            style: {
                border: '1px solid blue'
            },
            items: {
                xtype: 'component',
                // account for border, body border and margins, also subtract toolbar
                width: (isHoriz ? width : (width - (2 * margin + border) - toolbarWidth)),
                height: (!isHoriz ? height : (height - (2 * margin + border) - toolbarHeight))
            },
            dockedItems: [{
                dock: dock,
                margin: margin,
                xtype: 'toolbar',
                width: !isHoriz ? toolbarWidth : undefined,
                height: isHoriz ? toolbarHeight : undefined,
                items: {
                    text: 'dock'
                }
            }]
        });
    });
    
    Ext.create('Ext.container.Viewport', {
        layout: 'absolute',
        items: items    
    });
    
    
});
