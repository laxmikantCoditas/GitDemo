Ext.define( 'YelpExtplorer.view.center.touchtable.TouchTable', {
		extend : 'Ext.Container',
		xtype : 'touchtable',

		requires : [
			'YelpExtplorer.view.center.touchtable.HeaderRow',
			'YelpExtplorer.view.center.touchtable.TableBody',
			'YelpExtplorer.view.center.touchtable.FooterRow'
		],

		config : {
			layout : 'fit',
			items : [
				{  xtype : 'headerrow' },
				{  xtype : 'tablebody' },
				{  xtype : 'footerrow' }
			]
		}
	});
