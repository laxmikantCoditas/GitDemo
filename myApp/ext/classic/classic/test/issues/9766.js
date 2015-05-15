Ext.onReady(function() {
	Ext.create('Ext.window.Window', {
	    title: 'Hello',
	    height: 200,
	    width: 400,
	    layout: 'fit',
	    items: {  
	        xtype: 'htmleditor'
	    }
	}).show();
});	
