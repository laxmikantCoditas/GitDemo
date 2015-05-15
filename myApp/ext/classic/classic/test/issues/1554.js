Ext.require([
    //'Ext.diag.layout.Context',
    //'Ext.diag.layout.ContextItem',
    'Ext.container.Viewport'
]);

function hasOption (name) {
    return window.location.search.indexOf(name) >= 0;
}

Ext.onReady(function(){
    var bd = Ext.getBody();

    if (hasOption('nocss3')) {
        Ext.supports.CSS3BorderRadius = false;
        Ext.getBody().addCls('x-nbr x-nlg');
    }

    var base = {
        width: 100,
        height: 100,
        html: '???',
        title: 'Panel',
        margin: '10 0',
        collapsible: true,
        animCollapse: false
    };
    
    var lista = [
        base,
        Ext.apply({
            headerPosition: 'right',
            collapseDirection: 'left'
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapseDirection: 'top'
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
            border: false,
            collapseDirection: 'left'
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            border: false,
            collapseDirection: 'top'
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
            frame: true,
            collapseDirection: 'left'
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            frame: true,
            collapseDirection: 'top'
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
            frame: true,
            collapseDirection: 'left'
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            border: false,
            frame: true,
            collapseDirection: 'top'
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
            unstyled: true,
            collapseDirection: 'left'
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
    
    base = {
        xtype: 'window',
        width: 100,
        height: 100,
        html: '???',
        title: 'Panel',
        margin: '10 0',
        collapsible: true,
        animCollapse: false,
        hidden: false,
        floating: false
    };
    
    var listf = [
        Ext.apply({
            
        }, base),
        Ext.apply({
            headerPosition: 'right',
            collapseDirection: 'left'
        }, base),
        Ext.apply({
            headerPosition: 'bottom',
            collapseDirection: 'top'
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
            collapsed: true,
            collapseDirection: 'top'
        }, base),
        Ext.apply({
            headerPosition: 'left',
            collapsed: true
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
                    },
                    {
                        title: 'window',
                        items: listf
                    }
                ]
            }
        ]
    });
});