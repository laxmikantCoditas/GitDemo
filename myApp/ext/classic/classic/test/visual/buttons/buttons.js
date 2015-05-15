Ext.onReady(function() {
    var genericConfig = [{
        },{
            disabled: true
        },{
            text   : null,
            iconCls: 'add'
        },{
            iconCls: 'add',
            iconAlign: 'left'
        },{
            iconCls: 'add',
            iconAlign: 'top'
        },{
            iconCls: 'add',
            iconAlign: 'right'
        },{
            iconCls: 'add',
            iconAlign: 'bottom'
        }],
        menu = {
            items: [{
                    text:'Menu Item 1'
                },{
                    text:'Menu Item 2'
                },{
                    text:'Menu Item 3'
            }]
        };
    
    function renderButtons(title, configs, defaultConfig) {
        Ext.getBody().createChild({
                   tag: 'h2',
                   html: title
        });

        Ext.each(configs, function(config) {
               
            var generateButtons = function(config) {
   
                Ext.each(['default'], function(color) {
                    Ext.createWidget(defaultConfig.defaultType || 'button', Ext.apply({
                        text : 'Small',
                        scale: 'small',
                        color: color
                    }, config, defaultConfig));

                    Ext.createWidget(defaultConfig.defaultType || 'button', Ext.apply({
                        text : 'Medium',
                        scale: 'medium',
                        color: color
                    }, config, defaultConfig));

                    Ext.createWidget(defaultConfig.defaultType || 'button', Ext.apply({
                        text : 'Large',
                        scale: 'large',
                        color: color
                    }, config, defaultConfig));
                }, this);
            };
            
            generateButtons(Ext.apply(config, {
               renderTo: Ext.getBody().createChild({})
            }));
         
        }, this);
    }

    renderButtons('Normal Buttons', genericConfig, {
        cls: 'floater'
    });
    
    renderButtons('Toggle Buttons', genericConfig, {
        cls: 'floater',
        enableToggle: true
    });
    
    renderButtons('Menu Buttons', genericConfig, {
        cls: 'floater',
        menu : menu
    });
    
    renderButtons('Split Buttons', genericConfig, {
        cls: 'floater',
        defaultType: 'splitbutton',
        menu : menu
    });
    
    renderButtons('Menu Buttons (Arrow on bottom)', genericConfig, {
        cls: 'floater',
        menu : menu,
        arrowAlign: 'bottom'
    });

    renderButtons('Split Buttons (Arrow on bottom)', genericConfig, {
        cls: 'floater',
        defaultType: 'splitbutton',
        menu : menu,
        arrowAlign: 'bottom'
    });
});
