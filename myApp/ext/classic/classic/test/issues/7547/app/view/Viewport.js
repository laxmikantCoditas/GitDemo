// main viewport
Ext.define('ACW.view.Viewport', {
    extend : 'Ext.container.Viewport',
    alias  : 'widget.acw-viewport',

    layout : 'border',

    initComponent : function () {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems()
        });

        ACW.view.Viewport.superclass.initComponent.call(me);
    },

    buildItems : function () {

        return [
            {
                xtype  : 'panel',
                region : 'center'
            }
        ];
    }
});