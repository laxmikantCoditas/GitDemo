Ext.require(['*'], function(){
    
    // Ext.grid.View.override({
    //     onAdd : function(ds, records, index) {
    //         this.callParent(arguments);
    //         this.doStripeRows(index);
    //         var g = this.up('gridpanel');
    //         if (g) {
    //             g.invalidateScroller();
    //         }
    //     },
    //     onRemove : function(ds, records, index) {
    //         this.callParent(arguments);
    //         this.doStripeRows(index);
    //         var g = this.up('gridpanel');
    //         if (g) {
    //             g.invalidateScroller();
    //         }
    //     },
    //     onUpdate : function(ds, record, operation) {
    //         var index = ds.indexOf(record);
    //         this.callParent(arguments);
    //         this.doStripeRows(index, index);
    //         var g = this.up('gridpanel');
    //         if (g) {
    //             g.invalidateScroller();
    //         }
    //     }
    // });
    
    var columns = [
        {header:'name', width:100, dataIndex: 'name'},
        {header:'column1', width:100, dataIndex: 'column1'},
        {header:'column2', width:100, dataIndex: 'column2'}
    ];
    
    store = {
        model : Ext.define('DataObject', {extend: 'Ext.data.Model'}),
        data  : [
            { name : "Record 0", column1 : "0", column2 : "0" },
            { name : "Record 1", column1 : "1", column2 : "1" },
            { name : "Record 2", column1 : "2", column2 : "2" },
            { name : "Record 3", column1 : "3", column2 : "3" },
            { name : "Record 4", column1 : "4", column2 : "4" },
            { name : "Record 5", column1 : "5", column2 : "5" },
            { name : "Record 6", column1 : "6", column2 : "6" },
            { name : "Record 7", column1 : "7", column2 : "7" },
            { name : "Record 8", column1 : "8", column2 : "8" },
            { name : "Record 9", column1 : "9", column2 : "9" }
        ]
    };


    // console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"width < rows, auto height", renderTo : 'panel', store : store, width: 250, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"width > rows, auto height", renderTo : 'panel', store : store, width: 350, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"width > rows, 265 height", renderTo : 'panel', store : store, height: 265, width: 350, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"width < rows, 100 height", renderTo : 'panel', store : store, height: 100, width: 250, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"width > rows, 100 height", renderTo : 'panel', store : store, height: 100, width: 350, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');

    columns = [
        {header:'name', width:100, dataIndex: 'name'},
        {header:'flex column', flex:1, dataIndex: 'column1'},
        {header:'column2', width:100, dataIndex: 'column2'}
    ];

    // console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"flex width, auto height", renderTo : 'panel2', store : store, width: 250, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"flex width, 265 height", renderTo : 'panel2', store : store, height: 265, width: 350, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');console.group('Ext.create');console.log( 
    Ext.create('Ext.grid.Panel', { title:"flex width, 100 height", renderTo : 'panel2', store : store, height: 100, width: 250, columns : columns })
    // .el.dom);console.groupEnd('Ext.create');
});
