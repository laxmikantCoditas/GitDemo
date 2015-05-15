function createRow(mainCfg) {
    var main = Ext.create('Ext.button.Button', Ext.apply({
        renderTo: document.body
    }, mainCfg));
    
    Ext.create('Ext.panel.Panel', {
        width: 300,
        renderTo: document.body,
        layout: 'hbox',
        defaultType: 'button',
        defaults: {
            margins: 0
        },
        items: [{
            text: 'Set iconCls',
            handler: function(){
                main.setIconCls('icon');
            }
        }, {
            text: 'Clear iconCls',
            handler: function(){
                main.setIconCls('');
            }
        }, {
            text: 'Set icon',
            handler: function(){
                main.setIcon('icon.png');
            }
        }, {
            text: 'Clear icon',
            handler: function(){
                main.setIcon('');
            }
        }]
    });
}

Ext.onReady(function(){

    createRow({
        text: 'With iconCls',
        iconCls: 'icon'
    });
    
    createRow({
        text: 'With icon',
        icon: 'icon.png'
    });
    
    createRow({
        text: 'Text only'
    });
    
    
});
