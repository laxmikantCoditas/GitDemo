Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function() {
    var myData = [
        ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
        ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
        ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
        ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
        ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
        ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am']
    ];
    
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price', type: 'float'},
           {name: 'change', type: 'float'},
           {name: 'pctChange', type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        sorters: {
            property : 'company',
            direction: 'ASC'
        },
        data: myData
    });

    var grid = {
        xtype: 'gridpanel',
        height: 200,
        width : 450,
        x: 20,
        y: 10,
        store: store,
        columns: [
            {header: "Company",      width: 160, sortable: true, dataIndex: 'company', id:'company'},
            {header: "Price",        width: 75,  sortable: true, dataIndex: 'price'},
            {header: "Change",       width: 75,  sortable: true, dataIndex: 'change'},
            {header: "% Change",     width: 75,  sortable: true, dataIndex: 'pctChange'},
            {header: "Last Updated", width: 85,  sortable: true, dataIndex: 'lastChange'}
        ],
        loadMask: true
    };
    
    new Ext.Container({
        renderTo: Ext.getBody(),
        layout: 'absolute',
        width: 600,
        height: 600,
        items: [grid]
    });
    
});
