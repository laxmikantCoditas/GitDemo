Ext.require('*');
Ext.onReady(function() {
    Ext.createWidget('tabpanel', {
        width: 200,
        height: 100,
        renderTo: Ext.getBody(),
        items: [{
            title: 'Tab 1',
            html: 'Tab 1'
        }, {
            title: 'Tab 2',
            html: 'Tab 2'
        }]
    });
    
    Ext.createWidget('tabpanel', {
        width: 200,
        height: 100,
        renderTo: Ext.getBody()
    });
    
    Ext.createWidget('tabpanel', {
        width: 200,
        height: 100,
        activeTab: 1,
        renderTo: Ext.getBody(),
        items: [{
            title: 'Tab 1',
            html: 'Tab 1'
        }, {
            title: 'Tab 2',
            html: 'Tab 2'
        }]
    });
});