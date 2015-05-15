Ext.onReady(function(){

    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        items: [{
            text: 'Without submenu',
            menu: {
                items: {
                    id: 'item1',
                    text: 'An item'
                }
            }
        }, {
            text: 'Add submenu',
            handler: function(){
                Ext.getCmp('item1').setMenu({
                    items: {
                        text: 'Sub item'
                    }
                });
            }
        }, {
            text: 'Remove submenu',
            handler: function(){
                Ext.getCmp('item1').setMenu(null);
            }
        }]
    });
    
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        items: [{
            text: 'With submenu',
            menu: {
                items: {
                    id: 'item2',
                    text: 'An item',
                    menu: {
                        items: {
                            text: 'Sub item'
                        }
                    }
                }
            }
        }, {
            text: 'Add submenu',
            handler: function(){
                Ext.getCmp('item2').setMenu({
                    items: {
                        text: 'Sub item'
                    }
                });
            }
        }, {
            text: 'Remove submenu',
            handler: function(){
                var item = Ext.getCmp('item2'),
                    menu = item.menu;
                    
                item.setMenu(null, false);
                console.log(menu.isDestroyed);
            }
        }]
    });
});
