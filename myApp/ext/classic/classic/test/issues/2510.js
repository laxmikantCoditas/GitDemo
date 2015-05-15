Ext.require('Ext.tip.*');
Ext.onReady(function() {
    
    Ext.tip.QuickTipManager.init();
    
    Ext.create('Ext.button.Button', {
        text: 'Foo',
        renderTo: document.body,
        tooltip: 'Normal tip'
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Bar',
        renderTo: document.body,
        tooltip: {
            title: 'Foo',
            text: 'Custom tip',
            width: 200,
            height: 100
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Baz',
        renderTo: document.body,
        tooltip: 'Title tip',
        tooltipType: 'title'
    });
    
    Ext.create('Ext.button.Button', {
        split: true,
        text: 'Split1',
        renderTo: document.body,
        arrowTooltip: 'Arrow title',
        tooltipType: 'title'
    });
    
    Ext.create('Ext.button.Button', {
        split: true,
        text: 'Split2',
        renderTo: document.body,
        arrowTooltip: 'Arrow tip'
    });
    
});
