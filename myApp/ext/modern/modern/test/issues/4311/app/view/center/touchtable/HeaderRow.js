Ext.define( 'YelpExtplorer.view.center.touchtable.HeaderRow', {
	extend : 'YelpExtplorer.view.center.touchtable.FrameRow',
	xtype : 'headerrow',
	requires : 'YelpExtplorer.view.center.touchtable.HeaderCell',

	config : {
		docked : 'top',
		cellClassName : 'YelpExtplorer.view.center.touchtable.HeaderCell'
	}

//	initialize : function () {
//		console.group( arguments.callee.displayName, arguments )
//		this.callParent( arguments );
//		console.groupEnd();
//	}
} );
