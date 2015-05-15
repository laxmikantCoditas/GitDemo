Ext.onReady(function() {
	// MENU; MOUSE; MOUSELEAVE; 
	// delay property is causing menu to trigger mouse delay right away .. 
	// after 2000 delay .. even if still hoving menu in CHROME only
	var scrollMenu = Ext.create('Ext.menu.Menu',{
		listeners: {
	            mouseleave: {
	                element: 'el',
	                //delay: 2000,
	                fn: function(){
	                	console.log('MouseLeave :: Menu');
	                	Ext.defer(function() {
   			           		scrollMenu.hide();
            		    }, 2000);
	                    //this.hide();
	                }
	             }
	        },
	    maxHeight: 200
	});
	for (var i = 0; i < 50; ++i){
	    scrollMenu.add({
	    text: 'Item '+ (i+1),
	    handler: onItemClick
		});
	}

	Ext.get('moreoptions').on('click', function(eventObj, elRef) {
		eventObj.stopEvent();
		scrollMenu.show();
		scrollMenu.alignTo(Ext.get('moreoptions'),"tl-bl",[0,7]);
		
	});
});
