Ext.require('Ext.tip.*');

Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.panel.Panel', {
        width: 100,
        height: 100,
        renderTo: document.body,
        tools: [{
            type: 'help',
            tooltip: 'Foo!'
        }, {
            type: 'gear',
            tooltip: {
                title: 'Custom',
                text: 'Tip',
                width: 200,
                height: 50
            }
        }, {
            type: 'maximize',
            tooltip: 'Title only',
            tooltipType: 'title'
        }]
    });
    
});
