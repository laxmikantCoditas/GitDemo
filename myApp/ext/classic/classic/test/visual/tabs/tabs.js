function makeTabs(num, icon) {
    var tabs = [],
        i = 1;
        
    for (; i <= num; ++i) {
        tabs.push({
            title: 'Tab ' + i,
            html: 'Tab ' + i + ' Content',
            iconCls: icon ? 'tabs' : undefined
        });
    }
    
    return tabs;
}

Ext.onReady(function() {
    
    // No tabs
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body
    });
    
    // Single tab
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(1)
    });
    
    // Single tab, with icon
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(1, true)
    });
    
    // Multiple tabs
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(3, true)
    });
    
    // Multiple tabs, with icons
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(3)
    });
    
    // Multiple tabs, with overflow
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(20)
    });
    
    // Multiple tabs, with icons, with overflow
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: makeTabs(20, true)
    });
    
    // Multiple tabs, mix icons/no icons
    var items = makeTabs(5, true);
    Ext.Array.forEach(items, function(item, index){
        if (index % 2 === 0) {
            delete item.iconCls
        }
    });
    
    Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 100,
        renderTo: document.body,
        items: items
    });
    
});
