Ext.require('Ext.Layer');

Ext.onReady(function(){

    var el = Ext.DomHelper.append(Ext.getBody(), {
        tag: 'div'
    }, true);
    
    el.setBounds(100, 100, 100, 100);
    el.setStyle('background-color', 'red');
    
    var layer = Ext.create('Ext.Layer', {
        shadow: true
    }, el);
    layer.enableShadow(true);
    layer.setOpacity(0.75).setBounds(200, 200, 200, 200);
});
