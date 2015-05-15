Ext.define('YelpExtplorer.view.center.touchtable.TableBody', {
	extend: 'Ext.dataview.DataView',
	xtype: 'tablebody',

	requires: [ 'YelpExtplorer.view.center.touchtable.DataRow' ],

	refresh: function(store, records) {
		//console.group(arguments.callee.displayName, records);
		// debugger;
		this.callParent(arguments);

		if (records) {
			var container = this.container;
			var bodyRows = container.getViewItems();
			for ( var index = 0, recordsLn = records.length; index < recordsLn; index++) {
				var record = records.getAt(index);
				bodyRows[index].refreshBodyRow(record)
			}
		}
		//console.groupEnd();
	},
	config: {
		columns: [],
		useComponents: true,

		// added as experiment JIM
		// listeners:{refresh: function () { console.log('REFRESH'), this.refresh() } },

		defaultType: 'datarow'
	},


}, function createdFn_define$TableBody() {
	// console.log(arguments.callee.name);
});
