Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west',
            collapsible: true,
            collapsed: true,
            title: 'West',
            html: 'The west panel',
            width: 150
        }, {
            region: 'south',
            title: 'South',
            collapsible: true,
            collapsed: true,
            html: 'The south panel',
            split: true,
            height: 100,
            minHeight: 100
        }, {
            region: 'east',
            title: 'East Panel',
            collapsible: true,
            collapsed: true,
            html: 'The east panel',
            split: true,
            width: 150
        }, {
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'text',
                    text: 'test',
                    fill: '#a82',
                    font: '20px Arial',
                    x: 5,
                    y: 5,
                    width: 150,
                    height: 150,
                    listeners: {
                        mouseover: function(sprite) {
                            //alert('over');
                            sprite.setAttributes({
                                fill: '#000'
                            }, true);
                        },
                        mouseout: function(sprite) {
                            //alert('out');
                            sprite.setAttributes({
                                fill: '#a82'
                            }, true); 
                        }   
                    }
                }]
            }]
        }]
    });
});

