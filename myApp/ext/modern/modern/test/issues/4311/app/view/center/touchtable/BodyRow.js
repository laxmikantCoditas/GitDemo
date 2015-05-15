Ext.define( 'YelpExtplorer.view.center.touchtable.BodyRow', {
	extend : 'Ext.dataview.component.DataItem',
	xtype : 'bodyrow',
	requires : ['YelpExtplorer.view.center.touchtable.DataCell'],

	config : {
		layout : 'hbox',
		items : []
	},

	fetchDataView : function () {
		// var dataview = this.dataview; // sencha-debug.js
		return this.config.dataview // sencha-debug-all.js
	},
	// fetchColumnConfigs : function () { return this.dataview.columns; },
	fetchColumnConfigs : function () {
		return this.fetchDataView().getColumns();
	},

	fetchRowRecord : function () { return this.config.record; },

	checkDataIndex : function ( fieldName, columnConfig, record, index ) {
		var fieldValue
		if ( 'dataIndex' in columnConfig ) {
			var fieldNameOk = this.checkFieldName( fieldName, record, index );
			fieldValue = fieldNameOk ? record.get( fieldName ) : 'Bad dataIndex in columns config';
		}
		else {
			fieldValue = 'No dataIndex in columns config';
		}
		return fieldValue;
	},

	checkFieldName : function ( dataIndex, record, index ) {
		// console.log( arguments.callee.displayName, 'dataIndex:', dataIndex );
		var fieldsCollection = record.getFields();
		var fieldNames = fieldsCollection.keys;
		if ( -1 === fieldNames.indexOf( dataIndex ) ) {
			var message = 'The dataIndex, ' + dataIndex + ', for column #' + index + ' is not in this record:';
			console.error( message, record ); // record.statics().getName() );
			return false;
		}
		return true;
	},

	createBodyCell : function ( columnIndex ) {

		var dataCell = Ext.create( 'YelpExtplorer.view.center.touchtable.DataCell' );
		var record = this.fetchRowRecord();

		var columnConfig = this.fetchColumnConfigs()[columnIndex];
		// console.log( arguments.callee.displayName, 'columnConfig:', columnConfig );
		var fieldName = columnConfig.dataIndex;
		var fieldValue;

		var rowNum = this.fetchDataView().items.getCount() - 1;

		// console.log( arguments.callee.displayName, 'row:', row );
		if ( rowNum === 0 ) { // BUG: row is always = 0
			fieldValue = this.checkDataIndex( fieldName, columnConfig, record, columnIndex );
			// console.log( 'fieldValue:', fieldValue )
		}
		else {
			fieldValue = record.get( fieldName );
		}

		dataCell.setCellContent( fieldValue, columnConfig );
		return dataCell;
	},

	createBodyCells : function () {
		// console.group( arguments.callee.displayName );
		var columnConfigs = this.fetchColumnConfigs();
		for ( var index = 0, length = columnConfigs.length; index < length; index++ ) {
			var dataCell = this.createBodyCell( index );
			this.add( dataCell );
		}
		// console.groupEnd();
	},

	setPropertiesInCells : function () {
		// console.group( arguments.callee.displayName, 'this=', this );
		var columnConfigs = this.fetchColumnConfigs();
		var cellsCollection = this.items;
		var dataCells = cellsCollection.getRange();
		for ( var index = 0, length = dataCells.length; index < length; index++ ) {
			dataCells[index].copyProperties( columnConfigs[index] );
		}
		// console.groupEnd();
	},

	refreshBodyRow : function ( record ) {
		// console.group( arguments.callee.displayName, this.id );
		var columnConfigs = this.fetchColumnConfigs();
		var cellsCollection = this.items;
		var dataCells = cellsCollection.getRange();
		// var record = this.fetchRowRecord();
		// console.log( arguments.callee.displayName, 'record=', record );
		for ( var index = 0, length = dataCells.length; index < length; index++ ) {
			dataCells[index].refreshCell( record, columnConfigs[index] );
		}
		// console.groupEnd();
	},

	initialize : function () {
		// console.group( arguments.callee.displayName, this.id );
		this.createBodyCells();
		//this.callParent( arguments );
		this.setPropertiesInCells();
		// console.groupEnd();
	}

//	updateRecord : function () {
//		//console.group( arguments.callee.displayName, this, arguments );
//		this.callParent( arguments );
//		// this.setPropertiesInCells();
//		//console.groupEnd();
//	},
//
//	updateListItem : function () {
//		console.group( arguments.callee.displayName, this, arguments );
//		this.callParent( arguments );
//		console.groupEnd();
//	}
} );
