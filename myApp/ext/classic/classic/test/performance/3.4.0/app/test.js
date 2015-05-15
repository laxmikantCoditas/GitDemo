Ext.namespace('Ext.exampledata');

Ext.exampledata.states = [
        ['AL', 'Alabama', 'The Heart of Dixie'],
        ['AK', 'Alaska', 'The Land of the Midnight Sun'],
        ['AZ', 'Arizona', 'The Grand Canyon State'],
        ['AR', 'Arkansas', 'The Natural State'],
        ['CA', 'California', 'The Golden State'],
        ['CO', 'Colorado', 'The Mountain State'],
        ['CT', 'Connecticut', 'The Constitution State'],
        ['DE', 'Delaware', 'The First State'],
        ['DC', 'District of Columbia', "The Nation's Capital"],
        ['FL', 'Florida', 'The Sunshine State'],
        ['GA', 'Georgia', 'The Peach State'],
        ['HI', 'Hawaii', 'The Aloha State'],
        ['ID', 'Idaho', 'Famous Potatoes'],
        ['IL', 'Illinois', 'The Prairie State'],
        ['IN', 'Indiana', 'The Hospitality State'],
        ['IA', 'Iowa', 'The Corn State'],
        ['KS', 'Kansas', 'The Sunflower State'],
        ['KY', 'Kentucky', 'The Bluegrass State'],
        ['LA', 'Louisiana', 'The Bayou State'],
        ['ME', 'Maine', 'The Pine Tree State'],
        ['MD', 'Maryland', 'Chesapeake State'],
        ['MA', 'Massachusetts', 'The Spirit of America'],
        ['MI', 'Michigan', 'Great Lakes State'],
        ['MN', 'Minnesota', 'North Star State'],
        ['MS', 'Mississippi', 'Magnolia State'],
        ['MO', 'Missouri', 'Show Me State'],
        ['MT', 'Montana', 'Big Sky Country'],
        ['NE', 'Nebraska', 'Beef State'],
        ['NV', 'Nevada', 'Silver State'],
        ['NH', 'New Hampshire', 'Granite State'],
        ['NJ', 'New Jersey', 'Garden State'],
        ['NM', 'New Mexico', 'Land of Enchantment'],
        ['NY', 'New York', 'Empire State'],
        ['NC', 'North Carolina', 'First in Freedom'],
        ['ND', 'North Dakota', 'Peace Garden State'],
        ['OH', 'Ohio', 'The Heart of it All'],
        ['OK', 'Oklahoma', 'Oklahoma is OK'],
        ['OR', 'Oregon', 'Pacific Wonderland'],
        ['PA', 'Pennsylvania', 'Keystone State'],
        ['RI', 'Rhode Island', 'Ocean State'],
        ['SC', 'South Carolina', 'Nothing Could be Finer'],
        ['SD', 'South Dakota', 'Great Faces, Great Places'],
        ['TN', 'Tennessee', 'Volunteer State'],
        ['TX', 'Texas', 'Lone Star State'],
        ['UT', 'Utah', 'Salt Lake State'],
        ['VT', 'Vermont', 'Green Mountain State'],
        ['VA', 'Virginia', 'Mother of States'],
        ['WA', 'Washington', 'Green Tree State'],
        ['WV', 'West Virginia', 'Mountain State'],
        ['WI', 'Wisconsin', "America's Dairyland"],
        ['WY', 'Wyoming', 'Like No Place on Earth']
    ];
    
Ext.onReady(function(){
 document.body.innerHTML = '<div id="center7" class="x-hide-display">' + '<a id="hideit" href="#">Toggle the west region</a>' + '<p>My closable attribute is set to false so you can\'t close me. The other center panels can be closed.</p>' + '<p>The center panel automatically grows to fit the remaining space in the container that isn\'t taken up by the border regions.</p>' + '<hr>' + '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna. Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt diam nec urna. Curabitur velit. Quisque dolor magna, ornare sed, elementum porta, luctus in, leo.</p>' + '<p>Donec quis dui. Sed imperdiet. Nunc consequat, est eu sollicitudin gravida, mauris ligula lacinia mauris, eu porta dui nisl in velit. Nam congue, odio id auctor nonummy, augue lectus euismod nunc, in tristique turpis dolor sed urna. Donec sit amet quam eget diam fermentum pharetra. Integer tincidunt arcu ut purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla blandit malesuada odio. Nam augue. Aenean molestie sapien in mi. Suspendisse tincidunt. Pellentesque tempus dui vitae sapien. Donec aliquam ipsum sit amet pede. Sed scelerisque mi a erat. Curabitur rutrum ullamcorper risus. Maecenas et lorem ut felis dictum viverra. Fusce sem. Donec pharetra nibh sit amet sapien.</p>' + '<p>Aenean ut orci sed ligula consectetuer pretium. Aliquam odio. Nam pellentesque enim. Nam tincidunt condimentum nisi. Maecenas convallis luctus ligula. Donec accumsan ornare risus. Vestibulum id magna a nunc posuere laoreet. Integer iaculis leo vitae nibh. Nam vulputate, mauris vitae luctus pharetra, pede neque bibendum tellus, facilisis commodo diam nisi eget lacus. Duis consectetuer pulvinar nisi. Cras interdum ultricies sem. Nullam tristique. Suspendisse elementum purus eu nisl. Nulla facilisi. Phasellus ultricies ullamcorper lorem. Sed euismod ante vitae lacus. Nam nunc leo, congue vehicula, luctus ac, tempus non, ante. Morbi suscipit purus a nulla. Sed eu diam.</p>' + '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras imperdiet felis id velit. Ut non quam at sem dictum ullamcorper. Vestibulum pharetra purus sed pede. Aliquam ultrices, nunc in varius mattis, felis justo pretium magna, eget laoreet justo eros id eros. Aliquam elementum diam fringilla nulla. Praesent laoreet sapien vel metus. Cras tempus, sapien condimentum dictum dapibus, lorem augue fringilla orci, ut tincidunt eros nisi eget turpis. Nullam nunc nunc, eleifend et, dictum et, pharetra a, neque. Ut feugiat. Aliquam erat volutpat. Donec pretium odio nec felis. Phasellus sagittis lacus eget sapien. Donec est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>' + '<p>Vestibulum semper. Nullam non odio. Aliquam quam. Mauris eu lectus non nunc auctor ullamcorper. Sed tincidunt molestie enim. Phasellus lobortis justo sit amet quam. Duis nulla erat, varius a, cursus in, tempor sollicitudin, mauris. Aliquam mi velit, consectetuer mattis, consequat tristique, pulvinar ac, nisl. Aliquam mattis vehicula elit. Proin quis leo sed tellus scelerisque molestie. Quisque luctus. Integer mattis. Donec id augue sed leo aliquam egestas. Quisque in sem. Donec dictum enim in dolor. Praesent non erat. Nulla ultrices vestibulum quam.</p>' + '<p>Duis hendrerit, est vel lobortis sagittis, tortor erat scelerisque tortor, sed pellentesque sem enim id metus. Maecenas at pede. Nulla velit libero, dictum at, mattis quis, sagittis vel, ante. Phasellus faucibus rutrum dui. Cras mauris elit, bibendum at, feugiat non, porta id, neque. Nulla et felis nec odio mollis vehicula. Donec elementum tincidunt mauris. Duis vel dui. Fusce iaculis enim ac nulla. In risus.</p>' + '<p>Donec gravida. Donec et enim. Morbi sollicitudin, lacus a facilisis pulvinar, odio turpis dapibus elit, in tincidunt turpis felis nec libero. Nam vestibulum tempus ipsum. In hac habitasse platea dictumst. Nulla facilisi. Donec semper ligula. Donec commodo tortor in quam. Etiam massa. Ut tempus ligula eget tellus. Curabitur id velit ut velit varius commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Fusce ornare pellentesque libero. Nunc rhoncus. Suspendisse potenti. Ut consequat, leo eu accumsan vehicula, justo sem lobortis elit, ac sollicitudin ipsum neque nec ante.</p>' + '<p>Aliquam elementum mauris id sem. Vivamus varius, est ut nonummy consectetuer, nulla quam bibendum velit, ac gravida nisi felis sit amet urna. Aliquam nec risus. Maecenas lacinia purus ut velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet dui vitae lacus fermentum sodales. Donec varius dapibus nisl. Praesent at velit id risus convallis bibendum. Aliquam felis nibh, rutrum nec, blandit non, mattis sit amet, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius dignissim nibh. Quisque id orci ac ante hendrerit molestie. Aliquam malesuada enim non neque.</p>' + '</div>' + document.body.innerHTML;
    // NOTE: This is an example showing simple state management. During development,
    // it is generally best to disable state management as dynamically-generated ids
    // can change across page loads, leading to unpredictable results.  The developer
    // should ensure that stable state ids are set for stateful components in real apps.
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    Ext.BLANK_IMAGE_URL = '../resources/images/default/s.gif';
    Ext.QuickTips.init();

    var northTb = new Ext.Toolbar ({
    region: 'north',
    xtype: 'button', 
        items: [
                {
                    text: 'Button 1',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel1');
                    }
                },        
                {
                    text: 'Button 2',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel2');
                    }
                },                
                {
                    text: 'Button 3',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel3');
                    }
                },        
                {
                    text: 'Button 4',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel4');
                    }
                },                
                {
                    text: 'Button 5',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel5');
                    }
                },                
                {
                    text: 'Button 6',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel6');
                    }
                },                
                {
                    text: 'Button 7',
                    scale: 'medium',
                    width: 100,
                    handler: function(){
                            Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel7');
                    }
                }
        ]
    })



    var tree1 = new Ext.tree.TreePanel({
        title: 'My Task List 1',
        useArrows:true,
        autoScroll:true,
        animate:true,
        enableDD:true,
        containerScroll: true,
        rootVisible: false,
        frame: true,
        root: {
            nodeType: 'async'
        },

        // auto create TreeLoader
        dataUrl: '../examples/tree/check-nodes.json',

        listeners: {
            'checkchange': function(node, checked){
                if(checked){
                    node.getUI().addClass('complete');
                }else{
                    node.getUI().removeClass('complete');
                }
            }
        },

        buttons: [{
            text: 'Get Completed Tasks',
            handler: function(){
                var msg = '', selNodes = tree1.getChecked();
                Ext.each(selNodes, function(node){
                    if(msg.length > 0){
                        msg += ', ';
                    }
                    msg += node.text;
                });
                Ext.Msg.show({
                    title: 'Completed Tasks', 
                    msg: msg.length > 0 ? msg : 'None',
                    icon: Ext.Msg.INFO,
                    minWidth: 200,
                    buttons: Ext.Msg.OK
                });
            }
        }]
    });

    var tree2 = new Ext.tree.TreePanel({
        title: 'My Task List 2',
        useArrows:true,
        autoScroll:true,
        animate:true,
        enableDD:true,
        containerScroll: true,
        rootVisible: false,
        frame: true,
        root: {
            nodeType: 'async'
        },

        // auto create TreeLoader
        dataUrl: '../examples/tree/check-nodes.json',

        listeners: {
            'checkchange': function(node, checked){
                if(checked){
                    node.getUI().addClass('complete');
                }else{
                    node.getUI().removeClass('complete');
                }
            }
        },

        buttons: [{
            text: 'Get Completed Tasks',
            handler: function(){
                var msg = '', selNodes = tree2.getChecked();
                Ext.each(selNodes, function(node){
                    if(msg.length > 0){
                        msg += ', ';
                    }
                    msg += node.text;
                });
                Ext.Msg.show({
                    title: 'Completed Tasks', 
                    msg: msg.length > 0 ? msg : 'None',
                    icon: Ext.Msg.INFO,
                    minWidth: 200,
                    buttons: Ext.Msg.OK
                });
            }
        }]
    });

    var tree3 = new Ext.tree.TreePanel({
        title: 'My Task List 3',
        useArrows:true,
        autoScroll:true,
        animate:true,
        enableDD:true,
        containerScroll: true,
        rootVisible: false,
        frame: true,
        root: {
            nodeType: 'async'
        },

        // auto create TreeLoader
        dataUrl: '../examples/tree/check-nodes.json',

        listeners: {
            'checkchange': function(node, checked){
                if(checked){
                    node.getUI().addClass('complete');
                }else{
                    node.getUI().removeClass('complete');
                }
            }
        },

        buttons: [{
            text: 'Get Completed Tasks',
            handler: function(){
                var msg = '', selNodes = tree3.getChecked();
                Ext.each(selNodes, function(node){
                    if(msg.length > 0){
                        msg += ', ';
                    }
                    msg += node.text;
                });
                Ext.Msg.show({
                    title: 'Completed Tasks', 
                    msg: msg.length > 0 ? msg : 'None',
                    icon: Ext.Msg.INFO,
                    minWidth: 200,
                    buttons: Ext.Msg.OK
                });
            }
        }]
    });



    var tree4 = new Ext.tree.TreePanel({
        title: 'My Task List 4',
        useArrows:true,
        autoScroll:true,
        animate:true,
        enableDD:true,
        containerScroll: true,
        rootVisible: false,
        frame: true,
        root: {
            nodeType: 'async'
        },

        // auto create TreeLoader
        dataUrl: '../examples/tree/check-nodes.json',

        listeners: {
            'checkchange': function(node, checked){
                if(checked){
                    node.getUI().addClass('complete');
                }else{
                    node.getUI().removeClass('complete');
                }
            }
        },

        buttons: [{
            text: 'Get Completed Tasks',
            handler: function(){
                var msg = '', selNodes = tree4.getChecked();
                Ext.each(selNodes, function(node){
                    if(msg.length > 0){
                        msg += ', ';
                    }
                    msg += node.text;
                });
                Ext.Msg.show({
                    title: 'Completed Tasks', 
                    msg: msg.length > 0 ? msg : 'None',
                    icon: Ext.Msg.INFO,
                    minWidth: 200,
                    buttons: Ext.Msg.OK
                });
            }
        }]
    });

    var tree5 = new Ext.tree.TreePanel({
        title: 'My Task List 5',
        useArrows:true,
        autoScroll:true,
        animate:true,
        enableDD:true,
        containerScroll: true,
        rootVisible: false,
        frame: true,
        root: {
            nodeType: 'async'
        },

        // auto create TreeLoader
        dataUrl: '../examples/tree/check-nodes.json',

        listeners: {
            'checkchange': function(node, checked){
                if(checked){
                    node.getUI().addClass('complete');
                }else{
                    node.getUI().removeClass('complete');
                }
            }
        },

        buttons: [{
            text: 'Get Completed Tasks',
            handler: function(){
                var msg = '', selNodes = tree5.getChecked();
                Ext.each(selNodes, function(node){
                    if(msg.length > 0){
                        msg += ', ';
                    }
                    msg += node.text;
                });
                Ext.Msg.show({
                    title: 'Completed Tasks', 
                    msg: msg.length > 0 ? msg : 'None',
                    icon: Ext.Msg.INFO,
                    minWidth: 200,
                    buttons: Ext.Msg.OK
                });
            }
        }]
    });



    var store1 = new Ext.data.Store({
        // load using HTTP
        url: '../examples/grid/sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {name: 'Author', mapping: 'ItemAttributes > Author'},
               'Title', 'Manufacturer', 'ProductGroup'
           ])
    });

    // create the grid
    var grid1 = new Ext.grid.GridPanel({
        store: store1,
        height: 500,
        columns: [
            {header: "Author", width: 120, dataIndex: 'Author', sortable: true},
            {header: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {header: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {header: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ]
    });
    store1.load();

    var store2 = new Ext.data.Store({
        // load using HTTP
        url: '../examples/grid/sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {name: 'Author', mapping: 'ItemAttributes > Author'},
               'Title', 'Manufacturer', 'ProductGroup'
           ])
    });

    // create the grid
    var grid2 = new Ext.grid.GridPanel({
        store: store2,
        height: 500,
        columns: [
            {header: "Author", width: 120, dataIndex: 'Author', sortable: true},
            {header: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {header: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {header: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ]
    });
    store2.load();


    var store3 = new Ext.data.Store({
        // load using HTTP
        url: '../examples/grid/sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {name: 'Author', mapping: 'ItemAttributes > Author'},
               'Title', 'Manufacturer', 'ProductGroup'
           ])
    });

    // create the grid
    var grid3 = new Ext.grid.GridPanel({
        store: store3,
        height: 500,
        columns: [
            {header: "Author", width: 120, dataIndex: 'Author', sortable: true},
            {header: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {header: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {header: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ]
    });
    store3.load();


    var store4 = new Ext.data.Store({
        // load using HTTP
        url: '../examples/grid/sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {name: 'Author', mapping: 'ItemAttributes > Author'},
               'Title', 'Manufacturer', 'ProductGroup'
           ])
    });

    // create the grid
    var grid4 = new Ext.grid.GridPanel({
        store: store4,
        height: 500,
        columns: [
            {header: "Author", width: 120, dataIndex: 'Author', sortable: true},
            {header: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {header: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {header: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ]
    });
    store4.load();


    // turn on validation errors beside the field globally
        Ext.form.Field.prototype.msgTarget = 'side';

        var bd = Ext.getBody();

    //   Define the Grid data and create the Grid
        var myData = [
            ['3m Co',71.72,0.02,0.03,'9/1 12:00am'],
            ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
            ['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am'],
            ['American Express Company',52.55,0.01,0.02,'9/1 12:00am'],
            ['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am'],
            ['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am'],
            ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],
            ['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am'],
            ['Citigroup, Inc.',49.37,0.02,0.04,'9/1 12:00am'],
            ['E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1 12:00am'],
            ['Exxon Mobil Corp',68.1,-0.43,-0.64,'9/1 12:00am'],
            ['General Electric Company',34.14,-0.08,-0.23,'9/1 12:00am'],
            ['General Motors Corporation',30.27,1.09,3.74,'9/1 12:00am'],
            ['Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1 12:00am'],
            ['Honeywell Intl Inc',38.77,0.05,0.13,'9/1 12:00am'],
            ['Intel Corporation',19.88,0.31,1.58,'9/1 12:00am'],
            ['International Business Machines',81.41,0.44,0.54,'9/1 12:00am'],
            ['Johnson & Johnson',64.72,0.06,0.09,'9/1 12:00am'],
            ['JP Morgan & Chase & Co',45.73,0.07,0.15,'9/1 12:00am'],
            ['McDonald\'s Corporation',36.76,0.86,2.40,'9/1 12:00am'],
            ['Merck & Co., Inc.',40.96,0.41,1.01,'9/1 12:00am'],
            ['Microsoft Corporation',25.84,0.14,0.54,'9/1 12:00am'],
            ['Pfizer Inc',27.96,0.4,1.45,'9/1 12:00am'],
            ['The Coca-Cola Company',45.07,0.26,0.58,'9/1 12:00am'],
            ['The Home Depot, Inc.',34.64,0.35,1.02,'9/1 12:00am'],
            ['The Procter & Gamble Company',61.91,0.01,0.02,'9/1 12:00am'],
            ['United Technologies Corporation',63.26,0.55,0.88,'9/1 12:00am'],
            ['Verizon Communications',35.57,0.39,1.11,'9/1 12:00am'],
            ['Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1 12:00am']
        ];

        var ds = new Ext.data.Store({
            reader: new Ext.data.ArrayReader({}, [
                {name: 'company'},
                {name: 'price', type: 'float'},
                {name: 'change', type: 'float'},
                {name: 'pctChange', type: 'float'},
                {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'},

    //          Rating dependent upon performance 0 = best, 2 = worst
                {name: 'rating', type: 'int', convert: function(v, rec) {
                       if (rec[3] < 0) return 2;
                       if (rec[3] < 1) return 1;
                       return 0;
                   }
                }
            ])
        });
        ds.loadData(myData);

        // example of custom renderer function
        function italic(value){
            return '<i>' + value + '</i>';
        }

        // example of custom renderer function
        function change(val){
            if(val > 0){
                return '<span style="color:green;">' + val + '</span>';
            }else if(val < 0){
                return '<span style="color:red;">' + val + '</span>';
            }
            return val;
        }
        // example of custom renderer function
        function pctChange(val){
            if(val > 0){
                return '<span style="color:green;">' + val + '%</span>';
            }else if(val < 0){
                return '<span style="color:red;">' + val + '%</span>';
            }
            return val;
        }

        // render rating as "A", "B" or "C" depending upon numeric value.
        function rating(v) {
            if (v == 0) return "A"
            if (v == 1) return "B"
            if (v == 2) return "C"
        }

        // the DefaultColumnModel expects this blob to define columns. It can be extended to provide
        // custom or reusable ColumnModels
        var colModel = new Ext.grid.ColumnModel([
            {id:'company',header: "Company", width: 160, sortable: true, locked:false, dataIndex: 'company'},
            {header: "Price", width: 55, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {header: "Change", width: 55, sortable: true, renderer: change, dataIndex: 'change'},
            {header: "% Change", width: 65, sortable: true, renderer: pctChange, dataIndex: 'pctChange'},
            {header: "Last Updated", width: 80, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'},
            {header: "Rating", width: 40, sortable: true, renderer: rating, dataIndex: 'rating'}
        ]);

        bd.createChild({tag: 'h2', html: 'Using a Grid with a Form'});

    /*
     *    Here is where we create the Form
     */
        var gridForm = new Ext.FormPanel({
            id: 'company-form',
            frame: true,
            labelAlign: 'left',
            title: 'Company data',
            bodyStyle:'padding:5px',
            width: 750,
            layout: 'column',    // Specifies that the items will now be arranged in columns
            items: [{
                columnWidth: 0.60,
                layout: 'fit',
                items: {
                    xtype: 'grid',
                    ds: ds,
                    cm: colModel,
                    sm: new Ext.grid.RowSelectionModel({
                        singleSelect: true,
                        listeners: {
                            rowselect: function(sm, row, rec) {
                                Ext.getCmp("company-form").getForm().loadRecord(rec);
                            }
                        }
                    }),
                    autoExpandColumn: 'company',
                    height: 350,
                    title:'Company Data',
                    border: true,
                    listeners: {
                        viewready: function(g) {
                            g.getSelectionModel().selectRow(0);
                        } // Allow rows to be rendered.
                    }
                }
            },{
                columnWidth: 0.4,
                xtype: 'fieldset',
                labelWidth: 90,
                title:'Company details',
                defaults: {width: 140, border:false},    // Default config options for child items
                defaultType: 'textfield',
                autoHeight: true,
                bodyStyle: Ext.isIE ? 'padding:0 0 5px 15px;' : 'padding:10px 15px;',
                border: false,
                style: {
                    "margin-left": "10px", // when you add custom margin in IE 6...
                    "margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0"  // you have to adjust for it somewhere else
                },
                items: [{
                    fieldLabel: 'Name',
                    name: 'company'
                },{
                    fieldLabel: 'Price',
                    name: 'price'
                },{
                    fieldLabel: '% Change',
                    name: 'pctChange'
                },{
                    xtype: 'datefield',
                    fieldLabel: 'Last Updated',
                    name: 'lastChange'
                }, {
                    xtype: 'radiogroup',
                    columns: 'auto',
                    fieldLabel: 'Rating',
    // A radio group: A setValue on any of the following 'radio' inputs using the numeric
    // 'rating' field checks the radio instance which has the matching inputValue.
                    items: [{
                        name: 'rating',
                        inputValue: 0,
                        boxLabel: 'A'
                    }, {
                        name: 'rating',
                        inputValue: 1,
                        boxLabel: 'B'
                    }, {
                        name: 'rating',
                        inputValue: 2,
                        boxLabel: 'C'
                    }]
                }]
            }]
        });


    // turn on validation errors beside the field globally
        Ext.form.Field.prototype.msgTarget = 'side';

        var fs1 = new Ext.FormPanel({
            frame: true,
            title:'XML Form',
            labelAlign: 'right',
            labelWidth: 85,
            width:340,
            waitMsgTarget: true,

            // configure how to read the XML Data
            reader : new Ext.data.XmlReader({
                record : 'contact',
                success: '@success'
            }, [
                {name: 'first', mapping:'name/first'}, // custom mapping
                {name: 'last', mapping:'name/last'},
                'company', 'email', 'state',
                {name: 'dob', type:'date', dateFormat:'m/d/Y'} // custom data types
            ]),

            // reusable eror reader class defined at the end of this file
            errorReader: new Ext.form.XmlErrorReader(),

            items: [
                new Ext.form.FieldSet({
                    title: 'Contact Information',
                    autoHeight: true,
                    defaultType: 'textfield',
                    items: [{
                            fieldLabel: 'First Name',
                            emptyText: 'First Name',
                            name: 'first',
                            width:190
                        }, {
                            fieldLabel: 'Last Name',
                            emptyText: 'Last Name',
                            name: 'last',
                            width:190
                        }, {
                            fieldLabel: 'Company',
                            name: 'company',
                            width:190
                        }, {
                            fieldLabel: 'Email',
                            name: 'email',
                            vtype:'email',
                            width:190
                        },

                        new Ext.form.ComboBox({
                            fieldLabel: 'State',
                            hiddenName:'state',
                            store: new Ext.data.ArrayStore({
                                fields: ['abbr', 'state'],
                                data : Ext.exampledata.states // from states.js
                            }),
                            valueField:'abbr',
                            displayField:'state',
                            typeAhead: true,
                            mode: 'local',
                            triggerAction: 'all',
                            emptyText:'Select a state...',
                            selectOnFocus:true,
                            width:190
                        }),

                        new Ext.form.DateField({
                            fieldLabel: 'Date of Birth',
                            name: 'dob',
                            width:190,
                            allowBlank:false
                        })
                    ]
                })
            ]
        });

        // simple button add
        fs1.addButton('Load', function(){
            fs1.getForm().load({url:'../examples/form/xml-form.xml', waitMsg:'Loading'});
        });

        // explicit add
        var submit = fs1.addButton({
            text: 'Submit',
            disabled:true,
            handler: function(){
                fs1.getForm().submit({url:'xml-errors.xml', waitMsg:'Saving Data...', submitEmptyText: false});
            }
        });

        fs1.on({
            actioncomplete: function(form, action){
                if(action.type == 'load'){
                    submit.enable();
                }
            }
        });



    // turn on validation errors beside the field globally
        Ext.form.Field.prototype.msgTarget = 'side';
        var fs2 = new Ext.FormPanel({
            frame: true,
            title:'XML Form',
            labelAlign: 'right',
            labelWidth: 85,
            width:340,
            waitMsgTarget: true,

            // configure how to read the XML Data
            reader : new Ext.data.XmlReader({
                record : 'contact',
                success: '@success'
            }, [
                {name: 'first', mapping:'name/first'}, // custom mapping
                {name: 'last', mapping:'name/last'},
                'company', 'email', 'state',
                {name: 'dob', type:'date', dateFormat:'m/d/Y'} // custom data types
            ]),

            // reusable eror reader class defined at the end of this file
            errorReader: new Ext.form.XmlErrorReader(),

            items: [
                new Ext.form.FieldSet({
                    title: 'Contact Information',
                    autoHeight: true,
                    defaultType: 'textfield',
                    items: [{
                            fieldLabel: 'First Name',
                            emptyText: 'First Name',
                            name: 'first',
                            width:190
                        }, {
                            fieldLabel: 'Last Name',
                            emptyText: 'Last Name',
                            name: 'last',
                            width:190
                        }, {
                            fieldLabel: 'Company',
                            name: 'company',
                            width:190
                        }, {
                            fieldLabel: 'Email',
                            name: 'email',
                            vtype:'email',
                            width:190
                        },

                        new Ext.form.ComboBox({
                            fieldLabel: 'State',
                            hiddenName:'state',
                            store: new Ext.data.ArrayStore({
                                fields: ['abbr', 'state'],
                                data : Ext.exampledata.states // from states.js
                            }),
                            valueField:'abbr',
                            displayField:'state',
                            typeAhead: true,
                            mode: 'local',
                            triggerAction: 'all',
                            emptyText:'Select a state...',
                            selectOnFocus:true,
                            width:190
                        }),

                        new Ext.form.DateField({
                            fieldLabel: 'Date of Birth',
                            name: 'dob',
                            width:190,
                            allowBlank:false
                        })
                    ]
                })
            ]
        });

        // simple button add
        fs2.addButton('Load', function(){
            fs2.getForm().load({url:'../examples/form/xml-form.xml', waitMsg:'Loading'});
        });

        // explicit add
        var submit = fs2.addButton({
            text: 'Submit',
            disabled:true,
            handler: function(){
                fs2.getForm().submit({url:'xml-errors.xml', waitMsg:'Saving Data...', submitEmptyText: false});
            }
        });


        fs2.on({
            actioncomplete: function(form, action){
                if(action.type == 'load'){
                    submit.enable();
                }
            }
        });

    var tabPanel1 = new Ext.TabPanel({
            id: 'tabPanel1',
            html: 'Panel 1',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 1',
                    autoScroll: true,
                    items:[
                        gridForm
                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        grid1
                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        //fs1
                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        grid2
                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        grid3
                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        grid4
                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        //fs2
                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            contentEl: 'center7'
                        }
                    ]
                }
            ]
        });

    var tabPanel2 = new Ext.TabPanel({
            id: 'tabPanel2',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    layout: 'border',
                    html: 'Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 2'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                }
            ]
        });


    var tabPanel3 = new Ext.TabPanel({
            id: 'tabPanel3',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 3'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {




                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                }
            ]
        });

    var tabPanel4 = new Ext.TabPanel({
            id: 'tabPanel4',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 4'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',


                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                }
            ]
        });

    var tabPanel5 = new Ext.TabPanel({
            id: 'tabPanel5',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 5'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }

                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                }
            ]
        });

    var tabPanel6 = new Ext.TabPanel({
            id: 'tabPanel6',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 6'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                }
            ]
        });

    var tabPanel7 = new Ext.TabPanel({
            id: 'tabPanel7',
            deferredRender: false,
            activeTab: 0,     // first tab initially active
            items: [
                {
                    title: 'Close Me',
                    closable: true,
                    html: 'Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center p 7'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 1',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 2',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 3',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 4',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 5',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 6',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                },
                {
                    title: 'Center Panel 7',
                    autoScroll: true,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            html: 'north'
                        },
                        {
                            xtype: 'panel',
                            title: 'test',
                            region: 'center',
                            html: 'center'

                        },
                        {
                            xtype: 'panel',
                            region: 'south',
                            html: 'south'
                        }
                    ]
                }
            ]
        });


    var cardPanel = new Ext.Panel({
        region: 'center',
        id: 'card-panel',
        layout: 'card',
        border: false,
        margins: '0 0 0 2',
        activeItem: 0,
        layout: 'card',
        name: 'test',
        items:[
            tabPanel1,
            tabPanel2,
            tabPanel3,
            tabPanel4,
            tabPanel5,
            tabPanel6,
            tabPanel7
        ]
    });

    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        {
            region: 'north',
            height: 35,
            items:[
                northTb                
            ]
        }, {
            // lazily created panel (xtype:'panel' is default)
            region: 'south',
            split: true,
            height: 100,
            minSize: 100,
            maxSize: 200,
            collapsible: true,
            collapsed: true,
            title: 'South',
            margins: '0 0 0 0'
        }, {
            region: 'east',
            title: 'East Side',
            collapsible: true,
            split: true,
            width: 225, // give east and west regions a width
            minSize: 175,
            maxSize: 400,
            margins: '0 5 0 0',
            layout: 'fit', // specify layout manager for items
            items:            // this TabPanel is wrapped by another Panel so the title will be applied
            new Ext.TabPanel({
                border: false, // already wrapped so don't add another border
                activeTab: 2, // second tab initially active
                tabPosition: 'bottom',
                items: [
                {
                    html: '<p>A TabPanel component can be a region.</p>',
                    title: 'A Tab',
                    autoScroll: true
                }, 
                {
                    html: '<p>A TabPanel component can be a region.</p>',
                    title: 'A Tab',
                    autoScroll: true
                },
                new Ext.grid.PropertyGrid({
                    title: 'Property Grid',
                    closable: true,
                    source: {
                        "(name)": "Properties Grid",
                        "grouping": false,
                        "autoFitColumns": true,
                        "productionQuality": false,
                        "created": new Date(Date.parse('10/15/2006')),
                        "tested": false,
                        "version": 0.01,
                        "borderWidth": 1
                    }
                }

                )]
            })
        }, {
            region: 'west',
            id: 'west-panel', // see Ext.getCmp() below
            title: 'West',
            split: true,
            width: 200,
            minSize: 175,
            maxSize: 400,
            collapsible: true,
            margins: '0 0 0 5',
            layout: {
                type: 'accordion',
                animate: true
            },
            items: [{
                title: 'Navigation',
                border: false,
                iconCls: 'nav',
                items: [
                    tree1
                ]
            },{
                title: 'Settings',
                border: false,
                iconCls: 'settings',
                items: [
                    tree2
                ]
            },{
                title: 'Advanced',
                border: false,
                iconCls: 'settings',
                items: [
                    tree3
                ]
            },{
                title: 'Misc',
                border: false,
                iconCls: 'settings',
                items: [
                    tree4
                ]
            },{
                title: 'Admin',
                border: false,
                iconCls: 'settings',
                items: [
                    tree5
                ]
            }]
        },
            cardPanel
        ]
    });

});
// A reusable error reader class for XML forms
Ext.form.XmlErrorReader = function(){
    Ext.form.XmlErrorReader.superclass.constructor.call(this, {
            record : 'field',
            success: '@success'
        }, [
            'id', 'msg'
        ]
    );
};
Ext.extend(Ext.form.XmlErrorReader, Ext.data.XmlReader);