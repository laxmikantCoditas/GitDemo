// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        new Ext.Viewport({
            layout: 'border',
            items: [{
                xtype: 'panel',
                layout: 'fit',
                region: 'center',
                tbar: new Ext.Toolbar ({
                    items: [
                        { xtype: 'label', text: 'Import Specification Editor' },
                        '|',
                        { xtype: 'label', text: 'some text' }
                    ]}
                )
            }]
        });
    }
};
