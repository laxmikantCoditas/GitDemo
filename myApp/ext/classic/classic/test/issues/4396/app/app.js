Ext.Loader.setConfig({enabled: true,
	paths:{
		'Test':'app'
	}
});
Ext.application({
    name: 'Test',
    appFolder: 'app',
    controllers: ['Field'],        
    launch: function() {
        Ext.create('Ext.container.Viewport', {           
            items: [
                {   
                    id: 'field',
                    xtype: 'textfield',
                    value: 'Default',
                    allowBlank: false
                },
                {   
                    id: 'button',
                    xtype: 'button',
                    text: 'Done'
                }
            ]
        });
    }
});

