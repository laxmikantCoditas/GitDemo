Ext.define('TC.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {

		control: {
			'button[action=loadone]': {tap: 'onLoadOne'},
			'button[action=loadtwo]': {tap: 'onLoadTwo'},
			'button[action=loadthree]': {tap: 'onLoadThree'},
			'button[action=loadfour]': {tap: 'onLoadFour'}
		}

	},

	onLoadOne: function() {

		console.log('Load Server');

		var sStore = Ext.getStore('ChartCountsSvr');
		var lStore = Ext.getStore('ChartCounts');

		sStore.getProxy().setUrl('ChartCounts12.json');

		sStore.load(function(records, operation, success) {

			lStore.getProxy().clear();

			sStore.each(function(record) {

				console.log( record.get('personId') + ': ' + record.get('evDate') + ' : ' + record.get('lid'));

				lStore.add(record);

			});

			lStore.sync();

		}, this);

	},

	onLoadTwo: function() {

		console.log('Load Local');

		var lStore = Ext.getStore('ChartCounts');

		lStore.load(function(records, operation, success) {

			lStore.each(function(record) {
				console.log( record.get('personId') + ': ' + record.get('evDate') + ' : ' + record.get('lid'));

			});

		}, this);




/*
		var store = Ext.getStore('Outcomes'), newItem;
		store.load();

		console.log(store);

		store.clearFilter();
		// store.filter('personId', 12);

		// store.filter({property: 'personId', value: 12, exactMatch: true});

		store.filterBy(function(record, id) {
			return record.get('personId')===12;
		}, this);


		store.each(function(record) {
			console.log( record.get('personId') + ': ' + record.get('value'));
		});
*/


/*
		newItem = Ext.create('TC.model.Outcomes', {'outText': 'Ford'});
		store.add(newItem);

		newItem = Ext.create('TC.model.Outcomes', {'outText': 'Honda'});
		store.add(newItem);

		newItem = Ext.create('TC.model.Outcomes', {'outText': 'Toyota'});
		store.add(newItem);
*/
	},

	onLoadThree: function() {



		var tStore = Ext.getStore('ChartCountsSvr');
		tStore.fireEvent('refresh');



/*		console.log('Loading store 2');

		var store = Ext.getStore('Outcomes');
		store.getProxy().setId('Outcomes-2');

		store.load(function(records, operation, success) {

			store.each(function(record) {
				console.log(record.get('id') + " : " + record.get('value'));

			});
			
		});

*/

/*		var store = Ext.getStore('Outcomes'), newItem;
		store.removeAll();
		store.load();
*/
	},

	onLoadFour: function() {

		localStorage.clear();


		var store = Ext.getStore('Outcomes');
		var svrStore = Ext.getStore('OutcomesRem');
		// store.getProxy().setId('Outcomes-2');


		svrStore.load(function(records, operation, success) {

			store.each(function(record) {
				console.log(record.get('id') + " : " + record.get('value'));

			});

			store.removeAll();
			store.sync();

			svrStore.each(function(record) {
				store.add(record);
			});

			store.sync();
			
		});


	}


});