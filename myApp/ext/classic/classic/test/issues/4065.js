Ext.onReady(function(){
    var tabPanel = Ext.create('Ext.tab.Panel', {
        activeTab: 0,
        renderTo: Ext.getBody(),
        items: [{
            title: 'Tab 1',
            xtype: 'button',
            text: 'Click me',
            handler: function(){
                var btn = this;
                tabPanel.remove(btn, false);
                setTimeout(function(){
                    tabPanel.add(btn);
                }, 1000);
            }
        }]
    });
});