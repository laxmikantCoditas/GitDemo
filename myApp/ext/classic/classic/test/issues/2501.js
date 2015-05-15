Ext.require(['*']);

Ext.define('IDB.Temp', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.IDB.Temp',
    store : 'storeItems',
    columns : [
        { text: 'Hostname', locked: true, dataIndex: 'hostname'},
        { text: 'Address', dataIndex: 'address' },
        { text: 'Comment', dataIndex: 'comment' }
    ],
    initComponent : function () {
        this.callParent(arguments);
    }
});

Ext.onReady(function(){
    // setup the state provider, all state information will be saved to a cookie
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    var store = Ext.create('Ext.data.ArrayStore', {
        id: 'storeItems',
        fields: [
           { name: 'hostname' },
           { name: 'address' },
           { name: 'comment' }
        ],
        data: [
            [ 'loopback', '127.0.0.1', 'This machine' ]
        ]
    });

    Ext.create('IDB.Temp', {
            title: 'Stateful Locking Grid',
            renderTo: Ext.getBody(),
            width: 500,
            height: 400
        });
});
