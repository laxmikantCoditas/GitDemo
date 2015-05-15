Ext.require([
    'Ext.state.*',
    'Ext.util.Point'
]);
Ext.onReady(function () {
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
        expires: new Date(new Date().getTime()+(1000*60*60*24*7)) //7 days from now
    }));

    Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone', 'gender'],
        data: [
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224", gender: 'F'  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234", gender: 'M' },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244", gender: 'M'  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254", gender: 'F'  }
        ]
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        stateful: true,
        stateId: 'foobar',    
        columns: {
            items: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Personal', columns: [
                    { text: 'Name',  dataIndex: 'name' },
                    { text: 'Phone', dataIndex: 'phone' },
                    { text: 'Gender', dataIndex: 'gender' }
                ]}
            ]
        },
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });
});
