Ext.require('Ext.grid.*');
Ext.onReady(function() {
    Ext.create('Ext.data.Store', {    storeId:'simpsonsStore',
        fields:['name', 'email', 'phone'],
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });


    Ext.create('Ext.grid.Panel', {
        style: 'margin:20px',
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email' },
            { text: 'Phone', dataIndex: 'phone' }
        ],
        width: 200,
        renderTo: Ext.getBody()
    });
});