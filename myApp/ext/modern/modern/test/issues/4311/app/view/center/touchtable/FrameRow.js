Ext.define( 'YelpExtplorer.view.center.touchtable.FrameRow', {
	extend : 'YelpExtplorer.view.center.touchtable.TableRow',

	config : {
		layout : 'hbox',
		columns : []
	},

	buildCells : function () {
		// console.group( arguments.callee.displayName, arguments );
		// debugger;
		var columnConfigs = this.getColumns();
		// var columnConfigs = this.columns;
		// console.log( arguments.callee.displayName, 'columnConfigs=', columnConfigs );

		for ( var length = columnConfigs.length, index = 0; index < length; index++ ) {
			var cell = Ext.create( this.getCellClassName(), {} );
			var columnConfig = columnConfigs[index];
			// console.log( arguments.callee.displayName, columnConfig );

			cell.setCellContent( columnConfig.columnTitle, columnConfig );

			// Copy over properties if they are in the columnConfig
			var properties = ['width', 'minWidth', 'maxWidth', 'sortable', 'groupable'];
			var propertiesLength = properties.length;
			for ( var propertyIndex = 0; propertyIndex < propertiesLength; propertyIndex++ ) {
				var property = properties[propertyIndex];
				var value = columnConfig[property];
				// console.log( arguments.callee.displayName, property, value );
				if ( value ) { cell.setProperty( property, value ) }
			}

			this.add( cell )
		}
		// console.groupEnd();
	},

	initialize : function () {
		// console.group( arguments.callee.displayName, arguments )
		this.buildCells();
		this.callParent( arguments );
		// console.groupEnd();
	}
} );
