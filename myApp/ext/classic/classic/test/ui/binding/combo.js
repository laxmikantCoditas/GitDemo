Ext.define('Item', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']    
});

Ext.onReady(function(){
    
    var count = 0;
    
    function createStore() {
        var data;
        
        if (count % 3 === 0) {
            data = [{
                name: 'One',
                value: 1
            }, {
                name: 'Two',
                value: 2
            }, {
                name: 'Three',
                value: 3
            }];
        } else if (count % 3 === 1) {
            data = [{
                name: 'Four',
                value: 4
            }, {
                name: 'Five',
                value: 5
            }, {
                name: 'Six',
                value: 6
            }];
        } else {
            data = [{
                name: 'Seven',
                value: 7
            }, {
                name: 'Eight',
                value: 8
            }, {
                name: 'Nine',
                value: 9
            }];
        }
        ++count;
            
        return {
            model: 'Item',
            data: data
        };
    }

    Ext.create('Ext.panel.Panel', {
        width: 600,
        height: 400,
        renderTo: document.body,
        layout: 'fit',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Bind new store',
                handler: function(){
                    Ext.getCmp('combo').bindStore(createStore());
                }
            }
        }],
        items: {
            id: 'combo',
            xtype: 'combo',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            store: createStore()
        }
    });
    
});
