// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.create('Ext.Panel', {
            width       : 900,
            height      : 500,
            renderTo    : Ext.getBody(),
            layout : {type : 'hbox', align : 'stretch' },

            items : [
                {
                    title : 'left panel',
                    collapseDirection : 'left',
                    collapsible : true,
                    flex : 1
                },

                {
                    title : 'right panel',
                    flex : 2,
                    collapseDirection : 'right',
                    collapsible : true
                }
            ]
        });
    }
};
