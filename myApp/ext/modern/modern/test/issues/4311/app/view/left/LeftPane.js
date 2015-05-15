// See also http://www.sencha.com/learn/ext-js-trees/

var yeCategoriesList = [
	{ "category" : "Restaurants"},
	{ "category" : "Food"},
	{ "category" : "Delis" } ,
	{ "category" : "Food Stands" } ,
	{ "category" : "Sandwiches" },
	{ "category" : "Chinese" },
	{ "category" : "Diners" } ,
	{ "category" : "Italian" } ,
	{ "category" : "Pizza" },
	{ "category" : "Nightlife" },
	{ "category" : "Bars" }
];

Ext.define( 'YelpExtplorer.view.left.LeftPane', {
	extend : 'Ext.Panel',
	xtype : 'leftpane',

	config : {
		items : [
			{  xtype : 'tabbar', 
				docked : 'top',
				style : 'color:white',
				html : 'YeTMini ' + Ext.version.version
			},
			{  xtype : 'list', 
				// style : 'line-height:1.1em;min-height:1.1em;border:0;margin:0;padding:0',
				itemTpl : '<div>{category}</div>',
				padding : 10,
				minHeight : window.innerHeight - 36, // 36 is tab bar height
				store : {
					fields : ['category'],
					data : yeCategoriesList
				}
			}
		]
	}
} );
