Ext.require('Ext.grid.*');
Ext.onReady(function() {
    var gridConfig = {
        xtype: 'gridpanel',
        columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
        ],
        store: Ext.create('Ext.data.Store', {
            storeId:'simpsonsStore',
            fields:['name', 'email', 'phone'],
            data:[
                { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
            ]
        })
    };
    
    new Ext.grid.Panel(Ext.apply({
        renderTo: document.body,
        style: 'margin:20px',
        frame: true,
        width: 500,
        height: 400,
        columnLines: true,
        dockedItems: Ext.apply({
            hideHeaders: true,
            height: 60,
            dock: 'bottom'
        }, gridConfig)
    }, gridConfig));
});