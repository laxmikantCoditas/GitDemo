Ext.require(['*']);

Ext.onReady(function(){
    var panels = [];
    for (var i = 0; i < 10; i++) {
        panels.push({
            xtype:'panel',
            height: 150,
            collapsible: true,
            title: 'pane'
        });
    }
    var vp = Ext.create("Ext.container.Viewport", {
        layout: 'border',
        items: [
            Ext.create("Ext.panel.Panel", {
            region: 'west',
            width: 300,
            split: true
        }), {
            xtype:'tabpanel',
            region: 'center',
            items: [{
                xtype: 'panel',
                bodyPadding: 20,
                title:'Panels',
                layout: 'auto',
                autoScroll: true,
                items: panels
            }]
        }]
    });
});
