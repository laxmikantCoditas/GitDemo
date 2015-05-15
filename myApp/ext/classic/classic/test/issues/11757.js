// Note that this example only works with the Same Origin Policy disabled in a browser
// In Chrome you can use the --disable-web-security command line option

var DEMO_URL = 'http://demo.rasc.ch';

Ext.Loader.loadScript({
    url: DEMO_URL + '/eds/api-debug.js?group=store'
});

Ext.onReady(function(){
    Ext.app.REMOTING_API.url = DEMO_URL + Ext.app.REMOTING_API.url;
	Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

	Ext.define('Address', {
		extend: 'Ext.data.Model',
		fields: [ 'lastName', 'firstName', 'id', 'street', 'city', 'state', 'zip' ],
		proxy: {
			type: 'direct',
			directFn: personAction.loadWithPaging,
			reader: {
				root: 'records'
			}
		},
	});

    var store = Ext.create('Ext.data.Store', {
        model: 'Address',
        sorters: [ {
			property: 'lastName',
			direction: 'ASC'
		}],
        autoLoad: true,
        buffered: true,
        leadingBufferZone: 300,
        pageSize: 100
    });

    var grid = Ext.create('Ext.grid.Panel', {
        width: 800,
        height: 500,
        title: 'Some random data',
        store: store,
        loadMask: true,
        selModel: {
            pruneRemoved: false
        },
		columns: [ {
			xtype: 'rownumberer',
			width: 50,
			sortable: false
		}, {
			text: "Last Name",
			dataIndex: 'lastName',
			sortable: true,
			flex: 1
		}, {
			text: "First Name",
			dataIndex: 'firstName',
			sortable: true,
			flex: 1
		}, {
			text: "Street Address",
			dataIndex: 'street',
			sortable: true,
			flex: 1
		}, {
			text: "City",
			dataIndex: 'city',
			sortable: true,
			flex: 1
		}, {
			text: "State",
			dataIndex: 'state',
			sortable: true,
			width: 85
		}, {
			text: "Zip Code",
			dataIndex: 'zip',
			sortable: true,
			width: 105
		} ],
        renderTo: Ext.getBody()
    });
});
