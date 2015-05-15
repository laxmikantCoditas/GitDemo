Ext.onReady(function(){
    
    Ext.create('Ext.panel.Panel', {
        width: 300,
        height: 300,
        renderTo: document.body,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            flex: 1,
            title: 'A'
        }, {
            xtype: 'splitter'
        },{
            flex: 1,
            title: 'B'
        }, {
            xtype: 'splitter'
        },{
            flex: 1,
            title: 'C'
        }]
    });
    
    Ext.create('Ext.panel.Panel', {
        width: 300,
        height: 300,
        renderTo: document.body,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            flex: 1,
            title: 'A'
        }, {
            xtype: 'splitter'
        },{
            flex: 1,
            title: 'B'
        }, {
            xtype: 'splitter'
        },{
            flex: 1,
            title: 'C'
        }]
    });
    
});
