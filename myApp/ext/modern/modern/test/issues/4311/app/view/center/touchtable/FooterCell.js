Ext.define( 'YelpExtplorer.view.center.touchtable.FooterCell', {
	extend : 'YelpExtplorer.view.center.touchtable.FrameCell',
	xtype : 'footercell',

	config : { html : 'YelpExtplorer.view.center.touchtable.FooterCell' },

	setCellContent : function ( value, columnConfig ) {
		// console.log( arguments.callee.displayName, this, arguments );
		var renderer = columnConfig.footerRenderer || this.renderer
		// this.setHtml( 'FooterCell#setCellContent()' );
		arguments[0] = 'FooterCell#setCellContent()'
		this.callParent( arguments );
	}
} );
