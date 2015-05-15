Ext.require('Ext.fx.*');
Ext.onReady(function(){

    var el = Ext.getBody().createChild({
        style: {
            width: '100px',
            height: '100px',
            display: 'none',
            'background-color': 'red'
        }
    });
    
    Ext.getBody().createChild({
        style: {
            width: '100px',
            height: '100px',
            'background-color': 'blue'
        }
    });
    
    setTimeout(function(){
        el.show();
        el.fadeOut({
            easing: 'easeOut',
            duration: 2000,
            remove: false,
            useDisplay: true,
            listeners: {
                afteranimate: function(){
                    console.log('woo');
                }
            }
        });        
    }, 1000);
    
});
