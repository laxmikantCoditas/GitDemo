Ext.require('*');
Ext.onReady(function(){
    Ext.create('Ext.Viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        height: 600,
        width: 600,
        items: [{
            region: 'north',
            collapsible: true,
            title: 'North',
            split: true,
            height: 100,
            minHeight: 60,
            html: 'north'
        },{
            region: 'west',
            collapsible: true,
            title: 'Starts at width 30%',
            split: true,
            width: '30%',
            minWidth: 100,
            minHeight: 140,
            html: 'west<br>I am floatable'
        },{
            region: 'center',
            layout: 'border',
            border: false,
            items: [{
                region: 'center',
                html: 'center center',
                title: 'Center',
                minHeight: 80,
                items: [cw = Ext.create('Ext.Window', {
                    xtype: 'window',
                    closable: false,
                    minimizable: true,
                    title: 'Constrained Window',
                    height: 200,
                    width: 400,
                    constrain: true,
                    html: 'I am in a Container'
                })],
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: ['Text followed by a spacer',
                        ' ', {
                            itemId: 'toggleCw',
                            text: 'Constrained Window'
                    }]
                }]
            },{
                region: 'south',
                height: 100,
                split: true,
                collapsible: true,
                title: 'Splitter above me',
                minHeight: 60,
                html: 'center south'
            }]
        },{
            region: 'east',
            collapsible: true,
            floatable: true,
            split: true,
            width: 200,
            minWidth: 120,
            minHeight: 140,
            title: 'East',
            layout: {
                type: 'vbox',
                padding: 5,
                align: 'stretch'
            },
            items: [{
                xtype: 'textfield',
                labelWidth: 70,
                fieldLabel: 'Text field'
            }, {
                xtype: 'component',
                html: 'I am floatable'
            }]
        },{
            region: 'south',
            collapsible: true,
            split: true,
            height: 200,
            minHeight: 120,
            title: 'South',
            layout: {
                type: 'border',
                padding: 5
            },
            items: [{
                title: 'South Central',
                region: 'center',
                minWidth: 80,
                html: 'South Central'
            }, {
                title: 'South Eastern',
                region: 'east',
                flex: 1,
                minWidth: 80,
                html: 'South Eastern',
                split: true,
                collapsible: true
            }, {
                title: 'South Western',
                region: 'west',
                flex: 1,
                minWidth: 80,
                html: 'South Western<br>I collapse to nothing',
                split: true,
                collapsible: true,
                collapseMode: 'mini'
            }]
        }]
    });
   
});
