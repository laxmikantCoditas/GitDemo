Ext.require('*');
Ext.onReady(function() {
    p = Ext.create('Ext.panel.Panel', {
        title: 'Bug Test',
        renderTo: document.body,
        width: 600,
        height: 300,
        bodyPadding: 10,
        layout: 'card',
        activeItem: 0,
        items: [{
            html: 'Card Item 0',
            listeners: {
                activate: function () { alert ('activated 0'); }
            }
        }, {
            html: 'Card Item 1',
            listeners: {
                activate: function () { alert ('activated 1'); }
            }
        }],
        tbar: [{
            text: 'Activate 0',
            pressed: true,
            enableToggle: true,
            toggleGroup: 'cards',
            toggleHandler: function(btn, pressed) {
                if (pressed) l.setActiveItem(0);
            }
        }, {
            text: 'Activate 1',
            enableToggle: true,
            toggleGroup: 'cards',
            toggleHandler: function(btn, pressed) {
                if (pressed) l.setActiveItem(1);
            }
        }]
    });
    l = p.layout;
});