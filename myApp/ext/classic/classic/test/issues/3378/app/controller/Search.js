Ext.define('ESearch.controller.Search', {
    extend: 'Ext.app.Controller',
    models:[
        'EPart'
    ],
    stores:[
        'EParts'
    ],
    views:[
        'parts.List'
    ],
    refs:[{
         ref:'PartsList',
         selector:'partslist'
    }],
    init:function(app) {
            var store = this.getEPartsStore();
            store.guaranteeRange(0, 199);
            this.control({
			    'partslist button':{
				click:this.onButtonClick
			}
		});
    },
    onButtonClick: function(btn, e) {
        if (btn.operation === 'newSearch') {
            //TODO need to find a nice way to instantiate a new window
        }
    }
});