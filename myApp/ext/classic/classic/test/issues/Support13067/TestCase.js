Ext.onReady(function() {

    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        defaults: { margin: 10 },
        items: [
            { xtype: 'component', html: 'Select any BUT the first item:' },
            {
                xtype: 'grid',
                useArrows: true,
                autoScroll: true,
                store: Ext.create('Ext.data.Store', {
                    storeId: 'gridStore',
                    fields: ['hw'],
                    data: [
                        { hw: 'Do NOT select me (no error)'},
                        { hw: 'Select Me'},
                        { hw: 'Or me'}
                    ]
                }),
                selType : 'cellmodel',
                columns: [{ 
                        text: 'Column 1',  dataIndex: 'hw', flex: 1
                }]
            },
            { xtype: 'component', html: 'Now click this button and watch console:' },
            {
                xtype:'button',
                text: 'gridStore.removeAll()',
                handler: function() {
                    Ext.getStore('gridStore').removeAll();
                }
            },
            { xtype: 'component', html: "\"Uncaught TypeError: Cannot call method 'getId' of undefined ext-all-debug.js:126070\"" },
        ]
    });

});