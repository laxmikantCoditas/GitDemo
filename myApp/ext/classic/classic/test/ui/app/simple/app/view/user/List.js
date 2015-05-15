Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',
    
    title : 'All Users',
    store: 'Users',
    // store: {
    //     fields: ['name', 'email'],
    //     data  : [
    //         {name: 'Ed',    email: 'ed@sencha.com'},
    //         {name: 'Tommy', email: 'tommy@sencha.com'}
    //     ]
    // },
    
    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 1}
    ]
});