Ext.require('Ext.tab.*');
Ext.onReady(function() {
    var tabCount = 2;
    
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 200
    });
    
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 200,
        activeTab: 1,
        items: [
            {
                xtype: 'panel',
                title: 'First Panel',
                html : 'Test 1'
            },
            {
                xtype: 'panel',
                title: 'Second Panel',
                html : 'Test 2'
            }
        ]
    });
    
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 200,
        items: [
            {
                xtype: 'panel',
                title: 'First Panel',
                html : 'Test 1'
            },
            {
                xtype: 'panel',
                title: 'Second Panel',
                html : 'Test 2'
            }
        ]
    });
});