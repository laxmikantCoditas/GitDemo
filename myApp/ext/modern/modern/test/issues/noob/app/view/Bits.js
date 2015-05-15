// GENERAL
var setTitle = function(target,title) {
    target.dockedItems.items[0].setTitle(title);
}
// TOOLBARS
Ext.define('ToolbarGlobal',{
    extend: 'Ext.Toolbar',
    config: {
        xtype: 'toolbar',
        items: [{
            //iconCls: 'settings6',
            icon: 'resources/themes/images/myapp/icon-settings.png',
            ui: 'Default',
            handler: function() {
                MyApp.Viewport.setActiveItem('Settings', {type: 'flip'});
            }
        },{
            xtype: 'spacer'
        },{
            //iconCls: 'info',
            icon: 'resources/themes/images/myapp/icon-info.png',
            ui: 'Default',
            handler: function() {
                MyApp.Viewport.setActiveItem('Info', {type: 'flip'});
                //var this_view = this.getId();
                //console.log(this_view);
            }
        }]
    }
});