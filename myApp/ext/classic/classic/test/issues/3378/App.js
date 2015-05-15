Ext.Loader.setConfig({enabled: true,
        paths: {
            'Ext.ux':'lib/extjs4/ux/',
            'ESearch': 'app'
        }
});
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'ESearch.view.Portal',
    'Ext.grid.PagingScroller',
    'Ext.grid.feature.Grouping',
    'Ext.grid.plugin.CellEditing',
    'Ext.state.CookieProvider'
]);
Ext.application({
	 name:'ESearch',
	 appFolder:'app',
	 autoCreateViewport:false,
     controllers:['Search'],
     launch:function() {
		this.viewport = Ext.create('ESearch.view.Portal');
		window[this.name].app = this;
		this.viewport.show();

	}
});
