Ext.require(['Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {

    var component = Ext.create('Ext.Component', {
        width: 150,
        height: 150,
        renderTo: document.body,
        style: {
            border: '1px solid red'
        }
    });
    
    var mask = new Ext.LoadMask(component);
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Show mask',
        handler: function(){
            mask.show();
        }
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Hide mask',
        handler: function(){
            mask.hide();
        }
    });
    
});