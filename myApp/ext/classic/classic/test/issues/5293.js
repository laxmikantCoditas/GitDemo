var testCase = {
    run: function () {

        Ext.create('Ext.data.Store', {
            storeId:'simpsonsStore',
            fields:['name', 'email', 'phone'],
            data:{'items':[
                { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234"  },
                { 'name': 'Homer', "email":"homer@simpsons.com", "phone":"555-222-1244"  },
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

        var grid = Ext.create('Ext.grid.Panel', {
            title: 'Simpsons',
            store: Ext.data.StoreManager.lookup('simpsonsStore'),
            columns: [
                { header: 'Name',  dataIndex: 'name', width: 100 },
                { header: 'Email', dataIndex: 'email', flex: 1 },
                { header: 'Phone', dataIndex: 'phone', flex: 1, hidden: true }
            ],
            height: 200,
            width: 400,
            renderTo: Ext.getBody()
        });

        setTimeout(function(){
            grid.columns[2].show();
        }, 1);
    }
};
