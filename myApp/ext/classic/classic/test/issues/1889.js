Ext.onReady(function(){

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        renderTo: document.body,
        items: [{
            split: true,
            region: 'west',
            width: 250,
            html: '<iframe name="ifaui_menu" src="http://www.google.com" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" id="ifaui_menu" style="width:100%;height:100%"/>'
        }, {
            region: 'center',
             html: '<iframe name="ifaui_menu" src="http://www.google.com" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" id="ifaui_menu" style="width:100%;height:100%"/>'
        }]
    });
});
