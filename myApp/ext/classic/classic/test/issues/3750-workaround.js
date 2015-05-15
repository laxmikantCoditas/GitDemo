/**
 * Temporary workaround for EXTJSIV-3750
 * Hiding columns causes cell misalignment with remaining headers
 * 
 * NOTE: Remove this workaround when upgrading to ExtJS 4.0.7
 */
Ext.require('Ext.grid.header.Container', function(){

    Ext.override(Ext.grid.header.Container, {
        
        /**
         * @private
         * @override 
         */
        doComponentLayout: function(){
            var me = this;
            if (me.view && me.view.saveScrollState) {
                me.view.saveScrollState();
            }
            me.callOverridden(arguments);
            if (me.view && me.view.restoreScrollState) {
                me.view.restoreScrollState();
            }
        }
    });

});
