Ext.require('Ext.container.Viewport');

Ext.onReady(function(){
    var bd = Ext.getBody();
    
    var base = {
        width: 200,
        height: 100,
        html: '???',
        title: 'Panel',
        margin: '10 0'
    };
    
    var lista = [
        base,
        Ext.apply({
            headerPosition: 'right'
        }, base),
        Ext.apply({
            headerPosition: 'bottom'
        }, base),
        Ext.apply({
            headerPosition: 'left'
        }, base),
        Ext.apply({
            collapsed: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapsed: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapsed: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true
        }, base)
    ];
    
    var listb = [
        Ext.apply({
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'right',
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'left',
            border: false
        }, base),
        Ext.apply({
            collapsed: true,
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapsed: true,
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapsed: true,
            border: false
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true,
            border: false
        }, base)
    ];
    
    var listc = [
        Ext.apply({
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            frame: true
        }, base),
        Ext.apply({
            collapsed: true,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapsed: true,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapsed: true,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true,
            frame: true
        }, base)
    ];
    
    var listd = [
        Ext.apply({
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            border: false,
            frame: true
        }, base),
        Ext.apply({
            collapsed: true,
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapsed: true,
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapsed: true,
            border: false,
            frame: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true,
            border: false,
            frame: true
        }, base)
    ];
    
    var liste = [
        Ext.apply({
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            unstyled: true
        }, base),
        Ext.apply({
            collapsed: true,
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapsed: true,
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapsed: true,
            unstyled: true
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true,
            unstyled: true
        }, base)
    ];
    
    //lists
    Ext.create('Ext.Viewport', {
        layout: 'fit',
        border: false,
        padding: 10,
        
        items: [
            {
                layout: 'hbox',
                border: false,
                defaults: {
                    margin: '10 50 10 0',
                    unstyled: true
                },
                items: [
                    {
                        title: 'Default panel',
                        items: lista
                    },
                    {
                        title: 'panel border:false',
                        items: listb
                    },
                    {
                        title: 'framed panel',
                        items: listc
                    },
                    {
                        title: 'framed panel border:false',
                        items: listd
                    },
                    {
                        title: 'unstyled panel',
                        items: liste
                    }
                ]
            }
        ]
    });
});