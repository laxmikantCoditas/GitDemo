Ext.require('*');
Ext.onReady(function(){
    Ext.define('Company', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'company'},
            {name: 'price', type: 'float'},
            {name: 'change', type: 'float'},
            {name: 'pctChange', type: 'float'},
            {name: 'lastChange', type: 'date'},
            {name: 'industry'},
            {name: 'desc'}
         ]
    });
    // Array data for the grids
    Ext.grid.dummyData = [
        ['3m Co',71.72,0.02,0.03,'9/1/2011', 'Manufacturing'],
        ['Alcoa Inc',29.01,0.42,1.47,'9/1/2011', 'Manufacturing'],
        ['Altria Group Inc',83.81,0.28,0.34,'9/1/2011', 'Manufacturing'],
        ['American Express Company',52.55,0.01,0.02,'9/1/2011', 'Finance'],
        ['American International Group, Inc.',64.13,0.31,0.49,'9/1/2011', 'Services'],
        ['AT&T Inc.',31.61,-0.48,-1.54,'9/1/2011', 'Services'],
        ['Boeing Co.',75.43,0.53,0.71,'9/1/2011', 'Manufacturing'],
        ['Caterpillar Inc.',67.27,0.92,1.39,'9/1/2011', 'Services'],
        ['Citigroup, Inc.',49.37,0.02,0.04,'9/1/2011', 'Finance'],
        ['E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1/2011', 'Manufacturing'],
        ['Exxon Mobil Corp',68.1,-0.43,-0.64,'9/1/2011', 'Manufacturing'],
        ['General Electric Company',34.14,-0.08,-0.23,'9/1/2011', 'Manufacturing'],
        ['General Motors Corporation',30.27,1.09,3.74,'9/1/2011', 'Automotive'],
        ['Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1/2011', 'Computer'],
        ['Honeywell Intl Inc',38.77,0.05,0.13,'9/1/2011', 'Manufacturing'],
        ['Intel Corporation',19.88,0.31,1.58,'9/1/2011', 'Computer'],
        ['International Business Machines',81.41,0.44,0.54,'9/1/2011', 'Computer'],
        ['Johnson & Johnson',64.72,0.06,0.09,'9/1/2011', 'Medical'],
        ['JP Morgan & Chase & Co',45.73,0.07,0.15,'9/1/2011', 'Finance'],
        ['McDonald\'s Corporation',36.76,0.86,2.40,'9/1/2011', 'Food'],
        ['Merck & Co., Inc.',40.96,0.41,1.01,'9/1/2011', 'Medical'],
        ['Microsoft Corporation',25.84,0.14,0.54,'9/1/2011', 'Computer'],
        ['Pfizer Inc',27.96,0.4,1.45,'9/1/2011', 'Services', 'Medical'],
        ['The Coca-Cola Company',45.07,0.26,0.58,'9/1/2011', 'Food'],
        ['The Home Depot, Inc.',34.64,0.35,1.02,'9/1/2011', 'Retail'],
        ['The Procter & Gamble Company',61.91,0.01,0.02,'9/1/2011', 'Manufacturing'],
        ['United Technologies Corporation',63.26,0.55,0.88,'9/1/2011', 'Computer'],
        ['Verizon Communications',35.57,0.39,1.11,'9/1/2011', 'Services'],
        ['Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1/2011', 'Retail'],
        ['Walt Disney Company (The) (Holding Company)',29.89,0.24,0.81,'9/1/2011', 'Services']
    ];

    // add in some dummy descriptions
    for(var i = 0; i < Ext.grid.dummyData.length; i++){
        Ext.grid.dummyData[i].push('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. ');
    }

    var getLocalStore = function() {
        return Ext.create('Ext.data.ArrayStore', {
            model: 'Company',
            data: Ext.grid.dummyData,
            groupField: 'industry'
        });
    };


    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 1
    ////////////////////////////////////////////////////////////////////////////////////////
    // row expander

    Ext.create('Ext.grid.Panel', {
        store: getLocalStore(),
        deferRowRender: false,
        columns: [
            {text: "Company", flex: 1, dataIndex: 'company'},
            {text: "Price", renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", dataIndex: 'change'},
            {text: "% Change", dataIndex: 'pctChange'},
            {text: "Last Updated", renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        width: 600,
        height: 300,
        collapsible: true,
        animCollapse: false,
        title: 'Expander Rows in a Collapsible Grid',
        iconCls: 'icon-grid',
        renderTo: Ext.getBody()
    });

    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 2
    ////////////////////////////////////////////////////////////////////////////////////////
    
    Ext.create('Ext.grid.Panel', {
        store: getLocalStore(),
        deferRowRender: false,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns: [
            {text: "Company", width: 200, dataIndex: 'company'},
            {text: "Price", renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", dataIndex: 'change'},
            {text: "% Change", dataIndex: 'pctChange'},
            {text: "Last Updated", width: 135, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        columnLines: true,
        width: 600,
        height: 300,
        frame: true,
        title: 'Framed with Checkbox Selection and Horizontal Scrolling',
        iconCls: 'icon-grid',
        renderTo: Ext.getBody()
    });

    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 3
    ////////////////////////////////////////////////////////////////////////////////////////
    Ext.create('Ext.grid.Panel', {
        store: getLocalStore(),
        deferRowRender: false,
        columns: [
            Ext.create('Ext.grid.RowNumberer'),
            {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
            {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
            {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
            {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        columnLines: true,
        width:600,
        height:300,
        title:'Grid with Numbered Rows',
        iconCls:'icon-grid',
        renderTo: Ext.getBody()
    });

    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 4
    ////////////////////////////////////////////////////////////////////////////////////////
   
    
    Ext.create('Ext.grid.Panel', {
        store: getLocalStore(),
        deferRowRender: false,
        columns: [
            {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
            {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
            {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
            {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        columnLines: true,
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        // inline buttons
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
            },
            items: [{
                minWidth: 80,
                text: 'Save'
            },{
                minWidth: 80,
                text: 'Cancel'
            }]
        }, {
            xtype: 'toolbar',
            items: [{
                text:'Add Something',
                tooltip:'Add a new row',
                iconCls:'add'
            }, '-', {
                text:'Options',
                tooltip:'Set options',
                iconCls:'option'
            },'-',{
                itemId: 'removeButton',
                text:'Remove Something',
                tooltip:'Remove the selected item',
                iconCls:'remove',
                disabled: true
            }]
        }],

        width: 600,
        height: 300,
        frame: true,
        title: 'Support for standard Panel features such as framing, buttons and toolbars',
        iconCls: 'icon-grid',
        renderTo: Ext.getBody()
    });
    



    Ext.create('Ext.Panel', {
        renderTo: Ext.getBody(),
        frame: true,
        title: 'List',
        width: 600,
        height: 400,
        layout: 'border',
        items: [
            Ext.create('Ext.grid.Panel', {
            deferRowRender: false,
            store: getLocalStore(),
            columns: [
                {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
                {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
                {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
                {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
                {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
            ],
            viewConfig: {
                forceFit: true
            },
            height:210,
            split: true,
            region: 'north'
        }), {
                id: 'detailPanel',
                region: 'center',
                bodyPadding: 7,
                bodyStyle: "background: #ffffff;",
                html: 'The crazy frenchman in fact!'
        }]
    });
    
    Ext.create('Ext.grid.Panel', {
        width: 600,
        height: 400,
        title: 'Paging',
        deferRowRender: false,
        store: getLocalStore(),
        disableSelection: true,
        loadMask: true,
        viewConfig: {
            trackOver: false,
            stripeRows: false
        },
        columns: [
            {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
            {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
            {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
            {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        // paging bar on the bottom
        bbar: Ext.create('Ext.PagingToolbar', {
            store: getLocalStore(),
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"
        }),
        renderTo: Ext.getBody()
    });
    
  
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        collapsible: true,
        deferRowRender: false,
        iconCls: 'icon-grid',
        store: getLocalStore(),
        width: 600,
        height: 400,
        title: 'Grouping',
        features: [Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: 'Industry: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        })],
        columns: [
            {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
            {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
            {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
            {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ]
    });
    
    // TREES
    
    //we want to setup a model and store instead of using dataUrl
    Ext.define('Task', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'task',     type: 'string'},
            {name: 'user',     type: 'string'},
            {name: 'duration', type: 'string'}
        ]
    });
    
    var data = {"text":".","children": [
        {
            task:'Project: Shopping',
            duration:13.25,
            user:'Tommy Maintz',
            iconCls:'task-folder',
            expanded: true,
            children:[{
                task:'Housewares',
                duration:1.25,
                user:'Tommy Maintz',
                iconCls:'task-folder',
                children:[{
                    task:'Kitchen supplies',
                    duration:0.25,
                    user:'Tommy Maintz',
                    leaf:true,
                    iconCls:'task'
                },{
                    task:'Groceries',
                    duration:.4,
                    user:'Tommy Maintz',
                    leaf:true,
                    iconCls:'task'
                },{
                    task:'Cleaning supplies',
                    duration:.4,
                    user:'Tommy Maintz',
                    leaf:true,
                    iconCls:'task'
                },{
                    task: 'Office supplies',
                    duration: .2,
                    user: 'Tommy Maintz',
                    leaf: true,
                    iconCls: 'task'
                }]
            }, {
                task:'Remodeling',
                duration:12,
                user:'Tommy Maintz',
                iconCls:'task-folder',
                expanded: true,
                children:[{
                    task:'Retile kitchen',
                    duration:6.5,
                    user:'Tommy Maintz',
                    leaf:true,
                    iconCls:'task'
                },{
                    task:'Paint bedroom',
                    duration: 2.75,
                    user:'Tommy Maintz',
                    iconCls:'task-folder',
                    children: [{
                        task: 'Ceiling',
                        duration: 1.25,
                        user: 'Tommy Maintz',
                        iconCls: 'task',
                        leaf: true
                    }, {
                        task: 'Walls',
                        duration: 1.5,
                        user: 'Tommy Maintz',
                        iconCls: 'task',
                        leaf: true
                    }]
                },{
                    task:'Decorate living room',
                    duration:2.75,
                    user:'Tommy Maintz',
                    leaf:true,
                    iconCls:'task'
                },{
                    task: 'Fix lights',
                    duration: .75,
                    user: 'Tommy Maintz',
                    leaf: true,
                    iconCls: 'task'
                }, {
                    task: 'Reattach screen door',
                    duration: 2,
                    user: 'Tommy Maintz',
                    leaf: true,
                    iconCls: 'task'
                }]
            }]
        },{
            task:'Project: Testing',
            duration:2,
            user:'Core Team',
            iconCls:'task-folder',
            children:[{
                task: 'Mac OSX',
                duration: 0.75,
                user: 'Tommy Maintz',
                iconCls: 'task-folder',
                children: [{
                    task: 'FireFox',
                    duration: 0.25,
                    user: 'Tommy Maintz',
                    iconCls: 'task',
                    leaf: true
                }, {
                    task: 'Safari',
                    duration: 0.25,
                    user: 'Tommy Maintz',
                    iconCls: 'task',
                    leaf: true
                }, {
                    task: 'Chrome',
                    duration: 0.25,
                    user: 'Tommy Maintz',
                    iconCls: 'task',
                    leaf: true
                }]
            },{
                task: 'Windows',
                duration: 3.75,
                user: 'Darrell Meyer',
                iconCls: 'task-folder',
                children: [{
                    task: 'FireFox',
                    duration: 0.25,
                    user: 'Darrell Meyer',
                    iconCls: 'task',
                    leaf: true
                }, {
                    task: 'Safari',
                    duration: 0.25,
                    user: 'Darrell Meyer',
                    iconCls: 'task',
                    leaf: true
                }, {
                    task: 'Chrome',
                    duration: 0.25,
                    user: 'Darrell Meyer',
                    iconCls: 'task',
                    leaf: true
                },{
                    task: 'Internet Exploder',
                    duration: 3,
                    user: 'Darrell Meyer',
                    iconCls: 'task',
                    leaf: true
                }]
            },{
                task: 'Linux',
                duration: 0.5,
                user: 'Aaron Conran',
                iconCls: 'task-folder',
                children: [{
                    task: 'FireFox',
                    duration: 0.25,
                    user: 'Aaron Conran',
                    iconCls: 'task',
                    leaf: true
                }, {
                    task: 'Chrome',
                    duration: 0.25,
                    user: 'Aaron Conran',
                    iconCls: 'task',
                    leaf: true
                }]
            }]
        }
    ]};

    var store = Ext.create('Ext.data.TreeStore', {
        model: 'Task',
        proxy: {
            type: 'memory',
            data: data
        },
        folderSort: true
    });

    //Ext.ux.tree.TreeGrid is no longer a Ux. You can simply use a tree.TreePanel
    Ext.create('Ext.tree.Panel', {
        title: 'Tree 1',
        width: 600,
        height: 300,
        renderTo: Ext.getBody(),
        collapsible: true,
        useArrows: true,
        deferRowRender: false,
        rootVisible: false,
        store: store,
        multiSelect: true,
        singleExpand: true,
        //the 'columns' property is now 'headers'
        columns: [{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: 'Task',
            flex: 2,
            sortable: true,
            dataIndex: 'task'
        },{
            text: 'Assigned To',
            flex: 1,
            dataIndex: 'user',
            sortable: true
        }]
    });
    
    var data2 = [{
        "text": "To Do", 
        "cls": "folder",
        "expanded": true,
        "children": [{
            "text": "Go jogging",
            "leaf": true,
            "checked": true
        },{
            "text": "Take a nap",
            "leaf": true,
            "checked": false
        },{
            "text": "Climb Everest",
            "leaf": true,
            "checked": false
        }]
    },{
        "text": "Grocery List",
        "cls": "folder",
        "children": [{
            "text": "Bananas",
            "leaf": true,
            "checked": false
        },{
            "text": "Milk",
            "leaf": true,
            "checked": false
        },{
            "text": "Cereal",
            "leaf": true,
            "checked": false
        },{
            "text": "Energy foods",
            "cls": "folder",
            "children": [{
                "text": "Coffee",
                "leaf": true,
                "checked": false
            },{
                "text": "Red Bull",
                "leaf": true,
                "checked": false
            }]
        }]
    },{
        "text": "Remodel Project", 
        "cls": "folder",
        "children": [{
            "text": "Finish the budget",
            "leaf": true,
            "checked": false
        },{
            "text": "Call contractors",
            "leaf": true,
            "checked": false
        },{
            "text": "Choose design",
            "leaf": true,
            "checked": false
        }]
    }];

    var store2 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'memory',
            data: data2
        },
        folderSort: true
    });
    
    Ext.create('Ext.tree.Panel', {
        store: store2,
        rootVisible: false,
        deferRowRender: false,
        useArrows: true,
        frame: true,
        title: 'Check Tree',
        renderTo: Ext.getBody(),
        width: 600,
        height: 250
    });
    
});
