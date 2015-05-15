Ext.onReady(function(){
    var component = Ext.create("Ext.toolbar.Toolbar", {
        renderTo: Ext.getBody()
    });
    
    component.add([{
        xtype: "button",
        text: "All",
        toggleGroup: "myGroup",
        pressed: true,
        allowDepress: false
    }, {
        xtype: "splitbutton",
        text: "Multimedia",
        enableToggle: true,
        toggleGroup: "myGroup",
        allowDepress: false,
        menu: {
            xtype: 'menu',
            items: [{
                xtype: 'menuitem',
                text: 'Menu Item'
            }]
        }
    }, {
        xtype: "splitbutton",
        text: "Home appliance",
        allowDepress: true,
        enableToggle: true,
        toggleGroup: 'myGroup',
        menu: {
            xtype: 'menu',
            items: [{
                xtype: 'menuitem',
                text: 'Menu Item'
            }]
        }
    }]);
});
