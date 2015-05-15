Ext.require('Ext.anim.*');

Ext.onReady(function(){
    
    function run(btn) {
        el[btn.text]();
    }
    
    function createEl() {
        if (el) {
            el.remove();
        }
        el = Ext.getBody().createChild({
            style: {
                border: '1px solid red',
                width: '100px',
                height: '100px'
            }
        });
    }
    
    var fx = ['slideIn', 'slideOut', 'puff', 'switchOff', 'frame', 'ghost', 'highlight', 'fadeIn', 'fadeOut', 'scale'],
        items = [],
        el;
        
    Ext.each(fx, function(item){
        items.push({
            text: item,
            handler: run
        });
    });
    
    items.push({
        text: 'Recreate element',
        handler: createEl
    });
    
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        items: items
    });
    createEl();
});
