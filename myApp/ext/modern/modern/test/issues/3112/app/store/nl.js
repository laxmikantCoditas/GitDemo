 var dataLong = {
     text: 'Groceries',
     items: [{
         text: 'Drinks Drinks Drinks Drinks',
         items: [{
             text: 'Water Water Water Water Water Water ',
             items: [{
                 text: 'Sparkling ',
                 leaf: true
             }, {
                 text: 'Still',
                 leaf: true
             }, {
             text: 'Coffee',
             leaf: true
			 }, {
				 text: 'Espresso',
				 leaf: true
			 }, {
				 text: 'Redbull',
				 leaf: true
			 }, {
				 text: 'Coke',
				 leaf: true
			 }, {
				 text: 'Diet Coke',
				 leaf: true
			 }, {
				 text: 'Coffee',
				 leaf: true
			 }, {
				 text: 'Espresso',
				 leaf: true
			 }, {
				 text: 'Redbull',
				 leaf: true
			 }, {
				 text: 'Coke',
				 leaf: true
			 }, {
				 text: 'Diet Coke',
				 leaf: true
			 }]
         }, {
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         },{
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         }, {
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         }]
     }, {
         text: 'Fruit',
         items: [{
             text: 'Bananas',
             leaf: true
         }, {
             text: 'Lemon',
             leaf: true
         }]
     }, {
         text: 'Snacks',
         items: [{
             text: 'Nuts',
             leaf: true
         }, {
             text: 'Pretzels',
             leaf: true
         }, {
             text: 'Wasabi Peas',
             leaf: true
         }]
     }]
 };

 var dataShort = {
     text: 'Groce',
     items: [{
         text: 'Drinks',
         items: [{
             text: 'Water',
             items: [{
                 text: 'Sparkl',
                 leaf: true
             }, {
                 text: 'Still',
                 leaf: true
             }, {
             text: 'Coffee',
             leaf: true
			 }, {
				 text: 'Espr',
				 leaf: true
			 }, {
				 text: 'Redbull',
				 leaf: true
			 }, {
				 text: 'Coke',
				 leaf: true
			 }, {
				 text: 'Diet Coke',
				 leaf: true
			 }, {
				 text: 'Coffee',
				 leaf: true
			 }, {
				 text: 'Espresso',
				 leaf: true
			 }, {
				 text: 'Redbull',
				 leaf: true
			 }, {
				 text: 'Coke',
				 leaf: true
			 }, {
				 text: 'Diet Coke',
				 leaf: true
			 }]
         }, {
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         },{
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         }, {
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         }]
     }, {
         text: 'Fruit',
         items: [{
             text: 'Bananas',
             leaf: true
         }, {
             text: 'Lemon',
             leaf: true
         }]
     }, {
         text: 'Snacks',
         items: [{
             text: 'Nuts',
             leaf: true
         }, {
             text: 'Pretzels',
             leaf: true
         }, {
             text: 'Wasabi Peas',
             leaf: true
         }]
     }]
 };


 Ext.define('HdMobile.store.nl', {
	extend: 'Ext.data.TreeStore',
	requires: [
		'HdMobile.model.nl'
	],
	config: {
		model: 'HdMobile.model.nl',
		defaultRootProperty: 'items',
		root: dataLong
	}
 });