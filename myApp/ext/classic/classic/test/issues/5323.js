// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'gridpanel',
                title: 'Simpsons',
                store: {
                    fields: ['name'],
                    data: [
                        {name: "Lisa"},
                        {name: "Bart"},
                        {name: "Homer"},
                        {name: "Marge"}
                    ]
                },

                columns: [{
                    header: 'Name',
                    dataIndex: 'name',
                    editor: { xtype : 'textfield', allowBlank : false  },
                    flex: 1
                }],

                plugins: [{
                    ptype: 'rowediting',
                    //errorSummary: false,
                    autoCancel: false
                }]
            }
        });
    }
};
