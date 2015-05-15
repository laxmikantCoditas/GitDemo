Ext.define('YelpExtplorer.view.Viewport', {
	extend: 'Ext.Container',

	requires: [ 'YelpExtplorer.view.left.LeftPane', 
	            'YelpExtplorer.view.center.CenterTabPane'
	            ],

	config: {
		layout: {
			type: 'vbox'
		},
		height: window.innerHeight,
		items: [ {
			xtype: 'container',
			layout: {
				type: 'hbox'
			},
			defaults: {
				height: window.innerHeight,
				style: 'border-right-width:1px; border-right-style:solid'
			},
			items: [ {
				xtype: 'leftpane',
				width: '15%',
				minWidth: '130'
			}, {
				xtype: 'centertabpane',
				width: '85%'
			}]
		} ]
	}
});
