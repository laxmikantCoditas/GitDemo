Ext.define("TC.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar', 'TC.view.LineChart'],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            height:"100%",
            width:"100%",
            layout:"vbox",
            items: [{
                text: 'Load Server',
                action: 'loadone'
            }, {
                text: 'Load Local',
                action: 'loadtwo'
            }, {
                text: 'Load 3',
                action: 'loadthree'
            }, {
                text: 'Load 4',
                action: 'loadfour'
            }]
        }, {
            // xtype: 'linechart'
        }]
    }
});