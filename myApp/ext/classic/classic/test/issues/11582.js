Ext.require([
    'Ext.data.Store',
    'Ext.grid.Panel',
    'Ext.ux.grid.FiltersFeature'
]);

Ext.onReady(function () {
    var store = Ext.create('Ext.data.Store', {
        fields : ['name', 'email', 'phone'],
        data   : [
            { name : 'Lisa',  email : 'lisa@simpsons.com',  phone : '555-111-1224' },
            { name : 'Bart',  email : 'bart@simpsons.com',  phone : '555-222-1234' },
            { name : 'Homer', email : 'home@simpsons.com',  phone : '555-222-1244' },
            { name : 'Marge', email : 'marge@simpsons.com', phone : '555-222-1254' }
        ]
    });

    var optionconf = [
        { id : 1, label : 'girls' },
        { id : 2, label : 'boys'  }
    ];

    Ext.create('Ext.grid.Panel', {
        title    : 'Simpsons',
        store    : store,
        height   : 200,
        width    : 400,
        renderTo : Ext.getBody(),
        columns  : [
            {
                text      : 'Name',
                dataIndex : 'name',
                filter    : {
                    type       : 'list',
                    options    : optionconf,
                    idField    : 'id',
                    labelField : 'label'
                }
            },
            {
                text      : 'Email',
                dataIndex : 'email',
                flex      : 1,
                filter    : {
                    type : 'string'
                }
            },
            {
                text      : 'Phone',
                dataIndex : 'phone',
                filter    : {
                    type : 'string'
                }
            }
        ],
        features : [
            {
                ftype : 'filters',
                local : true
            }
        ]
    });
});
