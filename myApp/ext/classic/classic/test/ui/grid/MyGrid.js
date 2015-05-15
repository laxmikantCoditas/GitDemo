Ext.define('MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid',
    initComponent: function() {
        this.columns = [{
            text     : 'Company',
            flex     : 1,
            sortable : false, 
            dataIndex: 'company'
        },{
            text     : 'Price',
            locked: true,
            width    : 75, 
            sortable : true, 
            dataIndex: 'price'
        },{
            text     : 'Change', 
            width    : 75, 
            sortable : true, 
            dataIndex: 'change'
        },{
            text     : '% Change', 
            width    : 75, 
            sortable : true, 
            dataIndex: 'pctChange'
        },{
            text     : 'Last Updated', 
            width    : 85, 
            sortable : true, 
            dataIndex: 'lastChange'
        }];
        this.callParent(arguments);
    }
})


