
Ext.define('Example.controller.PersonList', {
	extend: 'Ext.app.Controller',

	stores: ['Person'],
	views: ['PersonListGrid'],

	refs: [
        { ref: 'personListGrid', selector: 'personlistgrid' },
        { ref: 'nextPageButton', selector: 'personlistgrid button[itemId="btnNextPage"]' },
        { ref: 'numberOfPetsField', selector: 'personlistgrid > toolbar > numberfield' }
    ],

	init: function () {

		// Start listening for events on views
		this.control({
			'personlistgrid button[itemId="btnNextPage"]': {
				click: this.onNextPageButtonClick
			},
			'personlistgrid > toolbar > combobox': {
				select: this.onComboboxSelect
			},
			'personlistgrid > toolbar > button[text="Search"]': {
				click: this.onSearchButtonClick
			},
			'personlistgrid > toolbar > button[text="Reset"]': {
				click: this.onResetButtonClick
			}
		});

	},

	onSearchButtonClick: function () {
		var value = this.getNumberOfPetsField().getValue();
		this.getPersonStore().filter('NumberOfPets', value);		
	},

	onResetButtonClick: function () {
		this.getPersonStore().clearFilter();
	},

	collectPersonListName: function () {
		var names = this.getPersonStore().collect('Name', false, true);
		this.getPersonNameStore().removeAll();
		this.getPersonNameStore().add('');
		for (var i in names) {
			var p = Ext.create('Example.model.Person', { Name: names[i] });
			this.getPersonNameStore().add(p);
		}
	}


});
