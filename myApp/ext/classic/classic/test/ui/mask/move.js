Ext.require(['Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {

    var component = Ext.create('Ext.Component', {
        width: 150,
        height: 150,
        renderTo: document.body,
        floating: {
            shadow: false
        },
        x: 50,
        y: 50,
        style: {
            border: '1px solid red'
        }
    });
    
    var mask = new Ext.LoadMask(component).show();
    
    Ext.create('Ext.button.Button', {
        text: 'Move',
        renderTo: document.body,
        handler: function(){
            var x = Math.floor(Math.random() * 400),
                y = Math.floor(Math.random() * 400);
                
            component.setPosition(x, y);
        }    
    });
    
});