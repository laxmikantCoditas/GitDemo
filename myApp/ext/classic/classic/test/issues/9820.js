Ext.onReady(function () {
    
    Ext.define('SimpsonsStore1', {
        extend: 'Ext.data.Store',
        fields:['name', 'email', 'phone'],
        proxy: {
            type: 'ajax',
            url: '9820.json',
            reader: {
                type: 'json',
                root: 'data1'
            }
        }
    });
    Ext.define('SimpsonsStore2', {
        extend: 'Ext.data.Store',
        fields:['name', 'email', 'phone'],
        proxy: {
            type: 'ajax',
            url: '9820.json',
            reader: {
                type: 'json',
                root: 'data2'
            }
        }
    });
    Ext.define('SimpsonsStore3', {
        extend: 'Ext.data.Store',
        fields:['name', 'email', 'phone'],
        proxy: {
            type: 'ajax',
            url: '9820.json',
            reader: {
                type: 'json',
                root: 'data3'
            }
        }
    });
    
    Ext.create('SimpsonsStore1', { storeId: 'store1' }).load();
    Ext.create('SimpsonsStore2', { storeId: 'store2' });
    Ext.create('SimpsonsStore3', { storeId: 'store3' });
    
    var grid = Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: 'store1',
        enableLocking: true,
        columns: [
            { text: 'Name',  dataIndex: 'name', locked: true },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' }
        ],
        height: 200,
        width: 400,
        renderTo: Ext.getBody(),
        tbar: ['->',{
            xtype: 'button',
            text: 'store1',
            listeners: {
                click: function() {
                    grid.reconfigure('store1');
                    grid.getStore().load();
                }
            }
        }, {
            xtype: 'button',
            text: 'store2',
            listeners: {
                click: function() {
                    grid.reconfigure('store2');
                    grid.getStore().load();
                }
            }
        }, {
            xtype: 'button',
            text: 'store3',
            listeners: {
                click: function() {
                    grid.reconfigure('store3');
                    grid.getStore().load();
                }
            }
        }]
    });
    
});
