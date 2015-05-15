Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
        width: 400,
        height: 400,
        renderTo: Ext.getBody(),
        resizable: {
            handles: 'all',
            transparent: false
        },
        border: 1,
        style: {
            borderColor: '#FF0000', 
            borderStyle: 'solid', 
            borderWidth: '1px'
        },
        items: [{
            width: 200,
            height: 200,
            resizable: true,
            border: 1,
            style: {
                borderColor: '#0000FF', 
                borderStyle: 'solid', 
                borderWidth: '1px'
            },
            xtype: 'component',
            html: '<b>Componentje</b>'
        }]
    });
});
