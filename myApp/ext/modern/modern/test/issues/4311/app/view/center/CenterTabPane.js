Ext.define('YelpExtplorer.view.center.CenterTabPane', {
		extend: 'Ext.tab.Panel',
		xtype: 'centertabpane',

		requires: [
			// 'YelpExtplorer.view.center.extspect.ExtSpect',
			'YelpExtplorer.view.center.TablePane',
			'YelpExtplorer.view.center.ListPane',
			// 'YelpExtplorer.view.center.MapPane',
		],

		config: {
			items: [
				{  xtype: 'tablepane' },
				// {  xtype : 'mappane' },
				{  xtype: 'listpane' }//,
				//	{  xtype : 'extspect', app : YelpExtplorer.app }
			]
		}
	}
);
