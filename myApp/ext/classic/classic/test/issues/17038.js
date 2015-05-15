Ext.onReady(function() {
    var panel = new Ext.panel.Panel({
        renderTo: document.body,
        width: 500,
        height: 300,
        x: 50,
        y: 50,
        
        title: 'Ribbon',
        layout: 'hbox',
        
        items: [{
            xtype: 'buttongroup',
            
            title: 'Group 1',
            
            style: {
                'margin-right': '20px'
            },
            
            items: [{
                text: 'foo'
            }, {
                text: 'bar'
            }, {
                text: 'baz'
            }]
        }, {
            xtype: 'buttongroup',
            
            title: 'Group 2',
            
            items: [{
                text: 'throbbe'
            }, {
                text: 'guzzard'
            }, {
                text: 'sploosh'
            }]
        }]
    });
});
