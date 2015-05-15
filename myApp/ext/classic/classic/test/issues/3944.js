Ext.onReady(function() {
    
    Ext.create('Ext.container.Container', {
        width: 600,
        height: 300,
        renderTo: document.body,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaultType: 'container',
        items: [{
            id: 'top',
            flex: 1,
            layout: 'hbox',
            defaultType: 'textfield',
            items: [{
                value: 'Field 1',
                flex: 1
            }, {
                value: 'Field 2',
                flex: 1,
                id: 'f2'
            }]
        }, {
            id: 'bottom',
            flex: 1,
            layout: 'hbox',
            defaultType: 'textfield',
            items: [{
                value: 'Field 3',
                flex: 1
            }, {
                value: 'Field 4',
                flex: 1
            }]
        }]    
    });
    
    Ext.create('Ext.button.Button', {
        pressed: true,
        enableToggle: true,
        renderTo: document.body,
        text: 'Panel 2 in top row',
        toggleHandler: function(btn, pressed){
            var f2 = Ext.getCmp('f2');
            if (pressed) {
                Ext.getCmp('bottom').remove(f2, false);
                Ext.getCmp('top').add(f2);
            } else {
                Ext.getCmp('top').remove(f2, false);
                Ext.getCmp('bottom').add(f2);
            }
            console.log(f2.el.hasCls(Ext.baseCSSPrefix + 'box-item'));
        }    
    });
    
});