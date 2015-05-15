
var DATA = [
    {company:'3m Co',                               price:71.72, change:0.02,  pctChange:0.03,  lastChange:'9/1 12:00am'},
    {company:'Alcoa Inc',                           price:29.01, change:0.42,  pctChange:1.47,  lastChange:'9/1 12:00am'},
    {company:'Altria Group Inc',                    price:83.81, change:0.28,  pctChange:0.34,  lastChange:'9/1 12:00am'},
    {company:'American Express Company',            price:52.55, change:0.01,  pctChange:0.02,  lastChange:'9/1 12:00am'},
    {company:'American International Group, Inc.',  price:64.13, change:0.31,  pctChange:0.49,  lastChange:'9/1 12:00am'}
];

var STORE = {
    data: DATA,
    fields: [
       {name: 'company'},
       {name: 'price',      type: 'float'},
       {name: 'change',     type: 'float'},
       {name: 'pctChange',  type: 'float'},
       {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
    ]
};

var COLUMNS = [
    { text: 'This column header should be offscreen!'     , width: 250, sortable : false, dataIndex: 'company' },
    { text: 'Price'       , width: 50, sortable : true, dataIndex: 'price' },
    { text: 'Change'      , width: 50, sortable : true, dataIndex: 'change' },
    { text: 'Last Updated', width: 100, sortable : true, renderer : Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange' }
];

var CONFIG = [
    {
        xtype: 'gridpanel',
        store: STORE,
        columns: COLUMNS,
        width: 300,
        margin: 50,
        title: 'text'
    }
];

////////////////////////////////////////////////////////////////////////////////

CONFIG.push(Ext.Object.merge({}, CONFIG[0], {
    title: 'html',
    columns: CONFIG[0].columns.slice(0)
}));

CONFIG[1].columns.splice(0,1, 
    Ext.Object.merge({}, CONFIG[1].columns[0], {text:undefined, html:CONFIG[1].columns[0].text})
);

////////////////////////////////////////////////////////////////////////////////

CONFIG = [].concat(CONFIG).concat(Ext.Array.map(CONFIG, function(config){
    var newConfig = Ext.Object.merge({}, config, {
        _useAlternateTest: true,
        title: config.title + ' (show)'
    });
    config.title += ' (hide)';
    return newConfig;
}));

// Ext.Loader.loadScriptFile('3750-workaround.js', function(){});

////////////////////////////////////////////////////////////////////////////////

function afterrender(){
    setTimeout(function(){
        Ext.Array.forEach(instances, afterInstanceRender);
    },0);
}

function afterInstanceRender(instance, index){
    instance.scrollByDeltaX(9999);

    var gridcolumn = instance.query('gridcolumn')[1];

    gridcolumn.hide();
    if (instance._useAlternateTest) gridcolumn.show();
    
    setTimeout(function(){
        if (instance._useAlternateTest) gridcolumn.show();
        else gridcolumn.hide();
    },0);
}


