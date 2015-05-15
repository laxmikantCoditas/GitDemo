Ext.onReady(function() {

    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: ['name']
    });

    function makeData(num) {
        var data = [];
        for (var i = 0; i < num; ++i) {
            data.push({
                name: 'name' + i
            });
        }
        return data;
    }
    
    var items = [],
        i;

    var columns = [];
    for(i = 0; i < 50; ++i) {
        columns.push({
            dataIndex: 'name'+i,
            text: 'name'+ i
        })
    }
    for (i = 0; i < 10; ++i) {
        items.push({
            xtype: 'grid',
            title: 'Grid' + i,
            store: {
                model: 'User',
                data: makeData(100)
            },
            columns: columns
        });
    }


    new Ext.container.Viewport({
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            flex: 1,
            xtype: 'tabpanel',
            deferredRender: false,
            items: items
        }, {
            xtype: 'button',
            text: 'Alert',
            handler: function() {
                Ext.Msg.alert('Alert', 'Msg');
            }
        }]
    });
});
