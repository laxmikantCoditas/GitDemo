Ext.require('*');

Ext.onReady(function() {

    var aCommonStore = new Ext.data.Store({
        groupField: 'group',
        fields: ['name', 'group'],
        data: [{
            group: 'g1',
            name: 'Foo'
        }, {
            group: 'g2',
            name: 'Bar'
        }]
    });

    new Ext.button.Button({
        renderTo: document.body,
        text: 'Create',
        handler: function() {
            new Ext.window.Window({
                autoShow: true,
                layout: 'fit',
                width: 400,
                height: 200,
                items: {
                    features: [{
                        ftype: 'grouping'
                    }],
                    xtype: 'gridpanel',
                    store: aCommonStore,
                    columns: [{
                        dataIndex: 'name',
                        text: 'Name'
                    }]
                }
            });
        }
    });

    new Ext.button.Button({
        renderTo: document.body,
        text: 'Trigger a store operation',
        handler: function() {
            aCommonStore.add({
                group: 'g1',
                name: 'Foo' + (new Date()).getTime()
            });
        }
    });
}); 