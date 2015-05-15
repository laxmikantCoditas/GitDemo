Ext.require(['Ext.panel.Panel', 'Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {
    
    var panel = Ext.create('Ext.panel.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        title: 'Panel'
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Config',
        renderTo: document.body,
        handler: function(){
            panel.setLoading(false);
            panel.setLoading({
                useMsg: false
            });   
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'String',
        renderTo: document.body,
        handler: function(){
            panel.setLoading(false);
            panel.setLoading('Custom message'); 
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Bool, targetEl=false',
        renderTo: document.body,
        handler: function(){
            panel.setLoading(false);
            panel.setLoading(true, false); 
        }
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Bool, targetEl=true',
        renderTo: document.body,
        handler: function(){
            panel.setLoading(false);
            panel.setLoading(true, true); 
        }
    });
    
});