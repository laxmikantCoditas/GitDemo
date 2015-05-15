Ext.require('Ext.*');
Ext.onReady(function() {
    function createToolbar (type, config) {
        var panelConfig =  {
            renderTo: Ext.getBody(),
            height : 100,
            width: 300,
            title: type
        };
        panelConfig[type] = Ext.create('Ext.toolbar.Toolbar', config);
        Ext.createWidget('panel', panelConfig);
    }
   
    createToolbar('tbar', {
            layout: {
                overflowHandler: 'Menu'
            },
            items: [{
                text: 'Number 1'
            },{
                text: 'Number 2'
            },{
                text: 'Number 3'
            },{
                text: 'Number 4'
            },{
                text: 'Number 5'
            },{
                text: 'Number 6'
            }]
    });

    createToolbar('tbar', {
            layout: {
                overflowHandler: 'Scroller'
            },
            items: [{
                text: 'Number 1'
            },{
                text: 'Number 2'
            },{
                text: 'Number 3'
            },{
                text: 'Number 4'
            },{
                text: 'Number 5'
            },{
                text: 'Number 6'
            }]
    });

    createToolbar('lbar', {
            layout: {
                overflowHandler: 'Menu'
            },
            items: [{
                text: 'Number 1'
            },{
                text: 'Number 2'
            },{
                text: 'Number 3'
            },{
                text: 'Number 4'
            },{
                text: 'Number 5'
            },{
                text: 'Number 6'
            }]
    });
    createToolbar('lbar', {
            layout: {
                overflowHandler: 'Scroller'
            },
            items: [{
                text: 'Number 1'
            },{
                text: 'Number 2'
            },{
                text: 'Number 3'
            },{
                text: 'Number 4'
            },{
                text: 'Number 5'
            },{
                text: 'Number 6'
            }]
    });
    createToolbar('rbar', {
            layout: {
                overflowHandler: 'Menu'
            },
            items: [{
                text: 'Number 1'
            },{
                text: 'Number 2'
            },{
                text: 'Number 3'
            },{
                text: 'Number 4'
            },{
                text: 'Number 5'
            },{
                text: 'Number 6'
            }]
    });
    
    createToolbar('rbar', {
        layout: {
            overflowHandler: 'Scroller'
        },
        items: [{
            text: 'Number 1'
        },{
            text: 'Number 2'
        },{
            text: 'Number 3'
        },{
            text: 'Number 4'
        },{
            text: 'Number 5'
        },{
            text: 'Number 6'
        }]
    });
});