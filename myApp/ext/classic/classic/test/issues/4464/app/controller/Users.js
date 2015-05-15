Ext.define('SenchaBugs.controller.Users', {
    extend: 'Ext.app.Controller',

    views: ['Bugs'],
    models: ['User', 'Post', 'Comment'],
    stores: ['Users'],

    init: function () {
        var me = this;
	this.control({
	    'button': {
	        click: function () {
		    var store = this.getUsersStore()
		    store.on('load', function(){
			var user = store.getAt(0),
			    associatedData = user.getAssociatedData();

			console.log('user', user);
			console.log('associatedData',associatedData);

			console.log('author from model', user.posts().getAt(0).comments().getAt(0).author.get('name'));
			console.log('author from associatedData', associatedData.posts[0].comments[0].author);
		    });
		    store.load();
		}
	    }
	});
    }
});
