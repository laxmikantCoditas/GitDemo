// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.create('Ext.grid.Panel', {
            columns: [{flex: 1}],
            height: 300,
            hideHeaders: true,
            renderTo: Ext.getBody(),
            width: 500
        });
    }
};
