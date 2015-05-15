// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.widget({
            autoShow: true,
            title: 'Test Window',
            xtype: 'window',
            items: [{
                xtype: 'fieldset',
                //collapsed: true,
                collapsible: true,
                title: 'Details',
                items: [{
                    height: 100,
                    width: 100
                }]
            }]
        });
    }
};
