Ext.require(['*']);

Ext.onReady(function () {
    var viewPort = new Ext.Viewport({
        layout: 'border', items: [
            {
                region: 'north',
                title: 'North',
                height: 100
            },
            {
                region: 'south',
                collapsible: true,
                collapsed: true,
                height: 100,
                //split: true,
                title: 'Messages'
            },
            {
                region: 'west',
                collapsible: true,
                collapsed: true,
                width: 200,
                title: 'West'
            },
            {
                region: 'east',
                collapsible: true,
                collapsed: true,
                width: 200,
                title: 'East'
            },
            {
                region: 'center',
                html: 'In IE grow browser window on right and see if Expand tool in South '+
                    'region follows properly'
            }
        ]
    });
});
