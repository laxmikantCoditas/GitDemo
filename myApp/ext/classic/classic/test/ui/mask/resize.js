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
    
    var mask = new Ext.LoadMask(component).show();
    
    Ext.create('Ext.button.Button', {
        text: '+ 50',
        renderTo: document.body,
        handler: function(){
            var size = component.getSize();
            component.setSize(size.width + 50, size.height + 50);
        }    
    });
    
    Ext.create('Ext.button.Button', {
        text: '- 50',
        renderTo: document.body,
        handler: function(){
            var size = component.getSize();
            component.setSize(size.width - 50, size.height - 50);
        }    
    });
    
});