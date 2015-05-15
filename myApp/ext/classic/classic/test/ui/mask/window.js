Ext.require(['Ext.window.Window', 'Ext.LoadMask']);
Ext.onReady(function() {
    
    var win = Ext.create('Ext.window.Window', {
        width: 200,
        height: 200,
        autoShow: true,
        modal: true,
        title: 'A window',
        layout: 'fit',
        items: {
            title: 'A panel'
        }    
    }), i = 0, mask;
    
    setInterval(function(){
        if (i % 2 === 0) {
            mask = new Ext.LoadMask(win.items.first());
            mask.show();
        } else {
            mask.destroy();
        }
        ++i;
    }, 2000);
    
});