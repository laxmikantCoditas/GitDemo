
Ext.define('MyApp.controller.MainController', {
	extend: 'Ext.app.Controller',

	views: ['List'],

	refs:[ 
	      { ref: 'businesslevelTab', selector: 'tab' }
	      ],

	      init: function() {

	    	  this.control({
	    		  'bleveltree': {
	    			  itemclick: this.treeclick
	    		  }
	    	  });
	      },

	      treeclick: function(view, record) {
	    	  var tab = Ext.getCmp('tabs');
	    	  var context = record.data.id;

	    	  var gridlist = tab.child('centraltablist');

	    	  gridlist.reconfigure(context, MyApp.gridColumns[context]);

	    	  tab.setActiveTab(gridlist);
	      }
});
