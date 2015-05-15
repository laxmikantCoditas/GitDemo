Ext.define( 'YelpExtplorer.store.ColumbiaBusinesses', {
		extend :  'Ext.data.Store',

		requires : [
			'YelpExtplorer.model.Business'
		],

		config : {
			storeId : 'ColumbiaBusinesses', // needed for Chrome !
			model : 'YelpExtplorer.model.Business',

			autoLoad : true,
			pageSize : 10,

			proxy : {
				type : 'ajax',
				url : 'data/ColumbiaBusinesses.json',
				reader : { type : 'json' }
			}
		},

		filterBusinesses: function(record, recordId) {
			// yeSchoolName & yeCategoryName set in fetchStoreData()
			var containsUniversity = Ext.Array.contains(record.get('schools'), this.yeSchoolName);
			var containsCategory = Ext.Array.contains(record.get('categories'), this.yeCategoryName);
			// console.log(arguments.callee.displayName);
			return containsUniversity && containsCategory;
		},

		fetchStoreData: function(searchController, locationString) {
			var businessStore = this;

			businessStore.yeSchoolName = 'Columbia';

			businessStore.yeCategoryName = Ext.String.capitalize(searchController.category);

			if (businessStore.isFiltered()) {
				// console.group('fetchStoreData:', 'store.isFiltered()');
				businessStore.clearFilter(true);
				businessStore.filterBy(businessStore.filterBusinesses, businessStore);
				// searchController.updateMap(place, university.get('zoom'));
				// console.groupEnd();
			} else {
				businessStore.load({
					scope: searchController,
					callback: function loadStoreCallback_fetchStoreDataAcademicBusinessesMixin() {
						businessStore.filterBy(businessStore.filterBusinesses, businessStore);
					}
				});
			}
			// console.groupEnd();
		}
	}
);
