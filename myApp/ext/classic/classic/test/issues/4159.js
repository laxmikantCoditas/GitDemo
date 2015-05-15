Ext.onReady(function(){

    var menu = Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 100,
        floating: false,
        renderTo: document.body,
        items: {
            text: 'Item',
            menu: {}
        }
    });
    
    var sub = menu.items.first().menu;
    
    var button_add = Ext.create('Ext.Button', {
        text: 'Add',
        renderTo: document.body,
        handler: function(){
            if (sub.items.getCount() === 0) {
                sub.add({
                    text: 'a menuitem'
                });
            }
        }
    });
    
    
    Ext.create('Ext.Button', {
        text: 'Remove',
        renderTo: document.body,
        handler: function(){
            if (sub.items.getCount()) {
                sub.remove(0);
            }
        }
    });
    
    Ext.getBody().createChild({
        tag: 'ul',
        cn: [{
            tag: 'li',
            html: 'Show the sub menu'
        }, {
            tag: 'li',
            html: 'Hit the add button'
        }, {
            tag: 'li',
            html: 'Hit the delete button'
        }, {
            tag: 'li',
            html: 'Show the sub menu'
        }]
    });
});
