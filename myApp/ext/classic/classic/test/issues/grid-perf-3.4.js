var times = parent.times || (parent.times = {});
var version = Ext.version || Ext.versions.extjs.version;
if (times[version]) {
    version += location.pathname.split(/\//).reverse()[0].replace('.html','');
}
times[version] = true;

Ext.require && Ext.require(['Ext.grid.GridPanel','Ext.data.ArrayStore']);

// sample static data for the store
var myData = data(0, []), index = Math.round(1000 / myData.length);
while (-- index) {
    data(index, myData);
}

////////////////////////////////////////////////////////////////////////////////

Ext.onReady(initMyGrid_thanks);


function initMyGrid_thanks(){
    console.profile && console.profile('GridPanel ' + version);
    console.time && console.time('GridPanel ' + version);
    times[version] = +new Date;


    // create the data store
    var store = new Ext.data.ArrayStore({
        fields: [
           {name: 'id'},
           {name: 'company'},
           {name: 'price',      type: 'float'},
           {name: 'change',     type: 'float'},
           {name: 'pctChange',  type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ]
    });

    // manually load local data
    store.loadData(myData);

    // create the Grid
    // console.profile && console.profile('new GridPanel ' + version);
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {
                id       :'id',
                header   : 'ID', 
                width    : 24, 
                sortable : true, 
                dataIndex: 'id'
            },
            {
                id       :'company',
                header   : 'Company', 
                width    : 160, 
                sortable : true, 
                dataIndex: 'company'
            },
            {
                header   : 'Price', 
                width    : 75, 
                sortable : true, 
                renderer : 'usMoney', 
                dataIndex: 'price'
            },
            {
                header   : 'Change', 
                width    : 75, 
                sortable : true, 
                renderer : change, 
                dataIndex: 'change'
            },
            {
                header   : '% Change', 
                width    : 75, 
                sortable : true, 
                renderer : pctChange, 
                dataIndex: 'pctChange'
            },
            {
                header   : 'Last Updated', 
                width    : 85, 
                sortable : true, 
                renderer : Ext.util.Format.dateRenderer('m/d/Y'), 
                dataIndex: 'lastChange'
            }
            // ,
            // {
            //     xtype: 'actioncolumn',
            //     width: 50,
            //     items: [{
            //         icon   : '../shared/icons/fam/delete.gif',  // Use a URL in the icon config
            //         tooltip: 'Sell stock',
            //         handler: function(grid, rowIndex, colIndex) {
            //             var rec = store.getAt(rowIndex);
            //             alert("Sell " + rec.get('company'));
            //         }
            //     }, {
            //         getClass: function(v, meta, rec) {          // Or return a class from a function
            //             if (rec.get('change') < 0) {
            //                 this.items[1].tooltip = 'Do not buy!';
            //                 return 'alert-col';
            //             } else {
            //                 this.items[1].tooltip = 'Buy stock';
            //                 return 'buy-col';
            //             }
            //         },
            //         handler: function(grid, rowIndex, colIndex) {
            //             var rec = store.getAt(rowIndex);
            //             alert("Buy " + rec.get('company'));
            //         }
            //     }]
            // }
        ],
        stripeRows: true,
        autoExpandColumn: 'company',
        height: 350,
        width: 600,
        title: 'Array Grid',

        // config options for stateful behavior
        stateful: true,
        stateId: 'grid',

        deferRowRender: false
    });
    // console.profileEnd && console.profileEnd('new GridPanel ' + version);

    // render the grid to the specified div in the page
    grid.render(Ext.getBody());


    times[version] = +new Date - times[version];
    console.timeEnd && console.timeEnd('GridPanel ' + version);
    console.profileEnd && console.profileEnd('GridPanel ' + version);
    setTimeout(function(){
        console.log ? console.log(times) : alert(times);
    }, 0);
}

////////////////////////////////////////////////////////////////////////////////

function data(index, myData){
    var random = Math.random();
    myData[myData.length] = [index,                               '3m Co', random * 71.72, random + 0.02,  random + 0.03,  '9/1 12:00am'];
    myData[myData.length] = [index,                           'Alcoa Inc', random * 29.01, random + 0.42,  random + 1.47,  '9/1 12:00am'];
    myData[myData.length] = [index,                    'Altria Group Inc', random * 83.81, random + 0.28,  random + 0.34,  '9/1 12:00am'];
    myData[myData.length] = [index,            'American Express Company', random * 52.55, random + 0.01,  random + 0.02,  '9/1 12:00am'];
    myData[myData.length] = [index,  'American International Group, Inc.', random * 64.13, random + 0.31,  random + 0.49,  '9/1 12:00am'];
    myData[myData.length] = [index,                           'AT&T Inc.', random * 31.61, random + -0.48, random + -1.54, '9/1 12:00am'];
    myData[myData.length] = [index,                          'Boeing Co.', random * 75.43, random + 0.53,  random + 0.71,  '9/1 12:00am'];
    myData[myData.length] = [index,                    'Caterpillar Inc.', random * 67.27, random + 0.92,  random + 1.39,  '9/1 12:00am'];
    myData[myData.length] = [index,                     'Citigroup, Inc.', random * 49.37, random + 0.02,  random + 0.04,  '9/1 12:00am'];
    myData[myData.length] = [index, 'E.I. du Pont de Nemours and Company', random * 40.48, random + 0.51,  random + 1.28,  '9/1 12:00am'];
    myData[myData.length] = [index,                    'Exxon Mobil Corp', random * 68.1,  random + -0.43, random + -0.64, '9/1 12:00am'];
    myData[myData.length] = [index,            'General Electric Company', random * 34.14, random + -0.08, random + -0.23, '9/1 12:00am'];
    myData[myData.length] = [index,          'General Motors Corporation', random * 30.27, random + 1.09,  random + 3.74,  '9/1 12:00am'];
    myData[myData.length] = [index,                 'Hewlett-Packard Co.', random * 36.53, random + -0.03, random + -0.08, '9/1 12:00am'];
    myData[myData.length] = [index,                  'Honeywell Intl Inc', random * 38.77, random + 0.05,  random + 0.13,  '9/1 12:00am'];
    myData[myData.length] = [index,                   'Intel Corporation', random * 19.88, random + 0.31,  random + 1.58,  '9/1 12:00am'];
    myData[myData.length] = [index,     'International Business Machines', random * 81.41, random + 0.44,  random + 0.54,  '9/1 12:00am'];
    myData[myData.length] = [index,                   'Johnson & Johnson', random * 64.72, random + 0.06,  random + 0.09,  '9/1 12:00am'];
    myData[myData.length] = [index,              'JP Morgan & Chase & Co', random * 45.73, random + 0.07,  random + 0.15,  '9/1 12:00am'];
    myData[myData.length] = [index,             'McDonald\'s Corporation', random * 36.76, random + 0.86,  random + 2.40,  '9/1 12:00am'];
    myData[myData.length] = [index,                   'Merck & Co., Inc.', random * 40.96, random + 0.41,  random + 1.01,  '9/1 12:00am'];
    myData[myData.length] = [index,               'Microsoft Corporation', random * 25.84, random + 0.14,  random + 0.54,  '9/1 12:00am'];
    myData[myData.length] = [index,                          'Pfizer Inc', random * 27.96, random + 0.4,   random + 1.45,  '9/1 12:00am'];
    myData[myData.length] = [index,               'The Coca-Cola Company', random * 45.07, random + 0.26,  random + 0.58,  '9/1 12:00am'];
    myData[myData.length] = [index,                'The Home Depot, Inc.', random * 34.64, random + 0.35,  random + 1.02,  '9/1 12:00am'];
    myData[myData.length] = [index,        'The Procter & Gamble Company', random * 61.91, random + 0.01,  random + 0.02,  '9/1 12:00am'];
    myData[myData.length] = [index,     'United Technologies Corporation', random * 63.26, random + 0.55,  random + 0.88,  '9/1 12:00am'];
    myData[myData.length] = [index,              'Verizon Communications', random * 35.57, random + 0.39,  random + 1.11,  '9/1 12:00am'];
    myData[myData.length] = [index,               'Wal-Mart Stores, Inc.', random * 45.45, random + 0.73,  random + 1.63,  '9/1 12:00am'];
    return myData;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Custom function used for column renderer
 * @param {Object} val
 */
function change(val) {
    val = round(val);
    
    if (val > 0) {
        return '<span style="color:green;">' + val + '</span>';
    } else if (val < 0) {
        return '<span style="color:red;">' + val + '</span>';
    }
    return val;
}

/**
 * Custom function used for column renderer
 * @param {Object} val
 */
function pctChange(val) {
    val = round(val);
    
    if (val > 0) {
        return '<span style="color:green;">' + val + '%</span>';
    } else if (val < 0) {
        return '<span style="color:red;">' + val + '%</span>';
    }
    return val;
}

function round(value, places){
    if (places == null) places = 3;
    places = +("1e" + places);
    return Math.round(value * places) / places
}

