// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.widget('window', {
            title: 'My Window',
            height: 200,
            width: 200,
            autoShow: true,
            layout: 'fit',
            items: [{
                xtype: 'tabpanel',
                items: [{
                    title: 'tab 1'
                }, {
                    title: 'tab 2',
                    dockedItems: [{
                        xtype: 'toolbar', dock: 'top',
                        items: [
                            { text: 'Test Button' },
                            { xtype: 'radiofield', boxLabel: 'ONE', checked: true },
                            { xtype: 'radiofield', boxLabel: 'TWO', margin: '0 0 0 5' }
                        ]
                    }]
                }]
            }]
        });
    }
};
