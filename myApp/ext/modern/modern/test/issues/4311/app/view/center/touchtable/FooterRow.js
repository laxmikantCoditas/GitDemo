Ext.define( 'YelpExtplorer.view.center.touchtable.FooterRow', {
	extend : 'YelpExtplorer.view.center.touchtable.FrameRow',
	xtype : 'footerrow',
	requires : 'YelpExtplorer.view.center.touchtable.FooterCell',

	config : {
		docked : 'bottom',
		cellClassName : 'YelpExtplorer.view.center.touchtable.FooterCell'
	}
} );
