Ext.onReady(function(){
    
    var red = Ext.create('Ext.Component', {
        floating: {
            shadow: false    
        },
        width: 200,
        height: 200,
        maxWidth: 250,
        maxHeight: 250,
        style: {
            border: '1px solid red'
        },
        x: 50,
        y: 50
    }).show();
    
    var blue = Ext.create('Ext.Component', {
        floating: {
            shadow: false    
        },
        width: 300,
        height: 300,
        minWidth: 250,
        minHeight: 250,
        style: {
            border: '1px solid blue'
        },
        x: 400,
        y: 50
    }).show();
    
    Ext.create('Ext.button.Button', {
        text: 'Set red 300,300',
        renderTo: document.body,
        handler: function(){
            red.animate({
                to: {
                    width: 300,
                    height: 300
                }
            });
        } 
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Set blue 200,200',
        renderTo: document.body,
        handler: function(){
            blue.animate({
                to: {
                    width: 200,
                    height: 200
                }
            });
        } 
    });
});
