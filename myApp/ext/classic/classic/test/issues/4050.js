Ext.require('Ext.picker.Color');
Ext.onReady(function() {
    
    function expand(c) {
        console.log('expand', c.id);
    }
    
    function collapse(c) {
        console.log('collapse', c.id);
    }
    
    Ext.create('Ext.panel.Panel', {
        layout: {
            type: 'accordion',
            animate: true
        },
        width: 400,
        height: 400,
        renderTo: document.body,
        items: [{
            title: 'Item 1',
            id: 'c1',
            listeners: {
                expand: expand,
                collapse: collapse
            }
        }, {
            title: 'Item 2',
            id: 'c2',
            listeners: {
                expand: expand,
                collapse: collapse
            }
        }, {
            title: 'Item 3',
            id: 'c3',
            listeners: {
                expand: expand,
                collapse: collapse
            }
        }]    
    });
    
});