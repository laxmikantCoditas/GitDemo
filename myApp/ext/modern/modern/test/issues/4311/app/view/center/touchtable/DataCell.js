Ext.define( 'YelpExtplorer.view.center.touchtable.DataCell', {
	extend : 'YelpExtplorer.view.center.touchtable.BodyCell',
	xtype : 'datacell',

	setCellContent : function ( value, columnConfig ) {
		// console.log( arguments.callee.displayName, this, arguments );
		// var renderer = columnConfig.renderer || this.renderer
		this.callParent( arguments );
	},

	refreshCell : function ( record, columnConfig ) {
		// console.log( arguments.callee.displayName, 'columnConfig=', columnConfig );
		var fieldName = columnConfig.dataIndex;
		var fieldValue = record.get( fieldName );
		this.setCellContent( fieldValue, arguments );
	}
} );
