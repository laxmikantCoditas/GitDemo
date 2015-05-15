Ext.require('*');
Ext.onReady(function(){

    // sample static data for the store
    var myData = [
        ['3m Co',                               71.72],
        ['Alcoa Inc',                           29.01],
        ['Altria Group Inc',                    83.81],
        ['American Express Company',            52.55],
        ['American International Group, Inc.',  64.13],
        ['AT&T Inc.',                           31.61],
        ['Boeing Co.',                          75.43],
        ['Caterpillar Inc.',                    67.27],
        ['Citigroup, Inc.',                     49.37]
    ];

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */


    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price',      type: 'float'}
        ],
        data: myData
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        //hideCollapseTool: true,
        store: store,
        columnLines: true,
        deferRowRender: false,
        columns: [
            {
                text     : 'Company',
                width    : 500,
                sortable : false,
                dataIndex: 'company'
            },
            {
                text     : 'Price',
                width    : 500,
                sortable : true,
                dataIndex: 'price'
            }
        ],
        title: 'Array Grid (Click header to collapse)'
    });

    var item1 = grid;

    var item2 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 2',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item3 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 3',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });


    Ext.create('Ext.Panel', {
        width: 600,
        height: 150,
        renderTo: Ext.getBody(),
        layout:'accordion',
        items: [item1, item2, item3]
    });
    
    Ext.create('Ext.form.Panel', {
        border: true,
        width: 600,
        height: 100,
        renderTo: Ext.getBody(),    
        layout:'column',
        autoScroll:true,
        items: [{
            columnWidth: 1/2,
                title: 'A Panel',
                html: 'rterwterwtretdvcxgbdxtyhredfg'
        },{
            columnWidth: 1/2,
            items:[{
                title: 'A Panel',
                html: 'rterwterwtretdvcxgbdxtyhredfg'
            },{
                title: 'Another Panel',
                html: 'rterwterwtretdvcxgbdxtyhredfg'
            }]
        }]
     });
     
Ext.create('Ext.Panel', {
        id:'main-panel',
        baseCls:'x-plain',
        renderTo: Ext.getBody(),
        layout: {
            type: 'table',
            columns: 3
        },
        // applied to child components
        defaults: {frame:true, width:200, height: 50},
        items:[{
            title:'Item 1'
        },{
            title:'Item 2'
        },{
            title:'Item 3'
        },{
            title:'Item 4',
            width:110,
            colspan:2
        },{
            title:'Item 5'
        },{
            title:'Item 6'
        },{
            title:'Item 7',
            width:110,
            colspan:2
        },{
            title:'Item 8',
            rowspan: 2,
            height: 110
        },{
            title:'Item 9'
        },{
            title:'Item 10'
        },{
            title:'Item 11',
            rowspan: 2,
            height: 110
        },{
            title:'Item 12'
        }]
    });
});
