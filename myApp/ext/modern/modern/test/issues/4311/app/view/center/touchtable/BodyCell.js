// The current sole subclass of the BodyCell is the DataCell
// We could potentially have cells for group rows
// but the store would have to contain the relevant data for it to work.

Ext.define( 'YelpExtplorer.view.center.touchtable.BodyCell', {
	extend : 'YelpExtplorer.view.center.touchtable.TableCell',
	xtype : 'bodycell'
} );
