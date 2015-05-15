Ext.define('MyApp.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'border',

	initComponent: function() {

		this.items = [ {
			xtype: 'tabpanel',
			region: 'center',
			height: '100%',
			margins: '4 4 4 4',
			border: false,
			id: 'tabs',
			items: [{
				title: 'First tab',
				xtype: 'panel'
			},{ 
				xtype: 'centraltablist',
				title: 'Store',
				id: 'centraltablist',
				//store: Ext.data.StoreManager.lookup('store1'),
				store: store1,
				closable : false
			}]
		},{
			region: 'west',
			split: true,
			width: 150,
			minSize: 175,
			maxSize: 400,
			collapsible: true,
			margins:'4 4 4 4',
			layout:'fit',
			items: [{
				xtype: 'bleveltree'
			}]
		}];

		this.callParent(arguments);
	}
});
