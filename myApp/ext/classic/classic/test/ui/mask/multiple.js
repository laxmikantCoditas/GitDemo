Ext.require(['Ext.container.Container', 'Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {

    var ct = Ext.create('Ext.container.Container', {
        width: 600,
        height: 200,
        renderTo: document.body,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [{
            title: 'P1'  
        }, {
            title: 'P2'
        }, {
            title: 'P3'
        }] 
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Show masks',
        handler: function(){
            ct.items.each(function(item) { 
                if (!item.activeMask) {
                    item.activeMask = new Ext.LoadMask(item);
                }
                item.activeMask.show();    
            });
        }
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Hide masks',
        handler: function(){
            ct.items.each(function(item) {
                item.activeMask.hide();
            });
        }
    });
    
});