var now = new Date().getTime();

Ext.require(['*']);
// some data used in the examples
Ext.namespace('Ext.example');

function hasOption (name) {
    return window.location.search.indexOf(name) >= 0;
}

Ext.example.states = [
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

function doTest() {
    var ready = new Date().getTime();

    //console.profile();

    Ext.Component.prototype.stateful = !hasOption('nostateful');

    Ext.Perf.setup({
        render: {
            'Ext.Component': 'render'
        },
        layout: {
            'Ext.layout.Context': 'run'
        }
    });

    document.body.innerHTML = '<div id="center7" class="x-hide-display">' + '<a id="hideit" href="#">Toggle the west region</a>' + '<p>My closable attribute is set to false so you can\'t close me. The other center panels can be closed.</p>' + '<p>The center panel automatically grows to fit the remaining space in the container that isn\'t taken up by the border regions.</p>' + '<hr>' + '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna. Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt diam nec urna. Curabitur velit. Quisque dolor magna, ornare sed, elementum porta, luctus in, leo.</p>' + '<p>Donec quis dui. Sed imperdiet. Nunc consequat, est eu sollicitudin gravida, mauris ligula lacinia mauris, eu porta dui nisl in velit. Nam congue, odio id auctor nonummy, augue lectus euismod nunc, in tristique turpis dolor sed urna. Donec sit amet quam eget diam fermentum pharetra. Integer tincidunt arcu ut purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla blandit malesuada odio. Nam augue. Aenean molestie sapien in mi. Suspendisse tincidunt. Pellentesque tempus dui vitae sapien. Donec aliquam ipsum sit amet pede. Sed scelerisque mi a erat. Curabitur rutrum ullamcorper risus. Maecenas et lorem ut felis dictum viverra. Fusce sem. Donec pharetra nibh sit amet sapien.</p>' + '<p>Aenean ut orci sed ligula consectetuer pretium. Aliquam odio. Nam pellentesque enim. Nam tincidunt condimentum nisi. Maecenas convallis luctus ligula. Donec accumsan ornare risus. Vestibulum id magna a nunc posuere laoreet. Integer iaculis leo vitae nibh. Nam vulputate, mauris vitae luctus pharetra, pede neque bibendum tellus, facilisis commodo diam nisi eget lacus. Duis consectetuer pulvinar nisi. Cras interdum ultricies sem. Nullam tristique. Suspendisse elementum purus eu nisl. Nulla facilisi. Phasellus ultricies ullamcorper lorem. Sed euismod ante vitae lacus. Nam nunc leo, congue vehicula, luctus ac, tempus non, ante. Morbi suscipit purus a nulla. Sed eu diam.</p>' + '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras imperdiet felis id velit. Ut non quam at sem dictum ullamcorper. Vestibulum pharetra purus sed pede. Aliquam ultrices, nunc in varius mattis, felis justo pretium magna, eget laoreet justo eros id eros. Aliquam elementum diam fringilla nulla. Praesent laoreet sapien vel metus. Cras tempus, sapien condimentum dictum dapibus, lorem augue fringilla orci, ut tincidunt eros nisi eget turpis. Nullam nunc nunc, eleifend et, dictum et, pharetra a, neque. Ut feugiat. Aliquam erat volutpat. Donec pretium odio nec felis. Phasellus sagittis lacus eget sapien. Donec est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>' + '<p>Vestibulum semper. Nullam non odio. Aliquam quam. Mauris eu lectus non nunc auctor ullamcorper. Sed tincidunt molestie enim. Phasellus lobortis justo sit amet quam. Duis nulla erat, varius a, cursus in, tempor sollicitudin, mauris. Aliquam mi velit, consectetuer mattis, consequat tristique, pulvinar ac, nisl. Aliquam mattis vehicula elit. Proin quis leo sed tellus scelerisque molestie. Quisque luctus. Integer mattis. Donec id augue sed leo aliquam egestas. Quisque in sem. Donec dictum enim in dolor. Praesent non erat. Nulla ultrices vestibulum quam.</p>' + '<p>Duis hendrerit, est vel lobortis sagittis, tortor erat scelerisque tortor, sed pellentesque sem enim id metus. Maecenas at pede. Nulla velit libero, dictum at, mattis quis, sagittis vel, ante. Phasellus faucibus rutrum dui. Cras mauris elit, bibendum at, feugiat non, porta id, neque. Nulla et felis nec odio mollis vehicula. Donec elementum tincidunt mauris. Duis vel dui. Fusce iaculis enim ac nulla. In risus.</p>' + '<p>Donec gravida. Donec et enim. Morbi sollicitudin, lacus a facilisis pulvinar, odio turpis dapibus elit, in tincidunt turpis felis nec libero. Nam vestibulum tempus ipsum. In hac habitasse platea dictumst. Nulla facilisi. Donec semper ligula. Donec commodo tortor in quam. Etiam massa. Ut tempus ligula eget tellus. Curabitur id velit ut velit varius commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Fusce ornare pellentesque libero. Nunc rhoncus. Suspendisse potenti. Ut consequat, leo eu accumsan vehicula, justo sem lobortis elit, ac sollicitudin ipsum neque nec ante.</p>' + '<p>Aliquam elementum mauris id sem. Vivamus varius, est ut nonummy consectetuer, nulla quam bibendum velit, ac gravida nisi felis sit amet urna. Aliquam nec risus. Maecenas lacinia purus ut velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet dui vitae lacus fermentum sodales. Donec varius dapibus nisl. Praesent at velit id risus convallis bibendum. Aliquam felis nibh, rutrum nec, blandit non, mattis sit amet, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius dignissim nibh. Quisque id orci ac ante hendrerit molestie. Aliquam malesuada enim non neque.</p>' + '</div>' + document.body.innerHTML;

    Ext.QuickTips.init();

    var northTb = new Ext.create('Ext.toolbar.Toolbar', {
        margin: '5 5 5 5',
        region: 'north',
        xtype: 'button',
        items: [{
            text: 'Button 1',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel1');
            }
        }, {
            text: 'Button 2',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel2');
            }
        }, {
            text: 'Button 3',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel3');
            }
        }, {
            text: 'Button 4',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel4');
            }
        }, {
            text: 'Button 5',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel5');
            }
        }, {
            text: 'Button 6',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel6');
            }
        }, {
            text: 'Button 7',
            scale: 'medium',
            width: 100,
            handler: function () {
                Ext.getCmp('card-panel').getLayout().setActiveItem('tabPanel7');
            }
        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'tbtext',
            id: 'perfnumber',
            text: 'foo'
        }, {
            text: 'Relayout',
            handler: function() {
                var begin = new Date().getTime(),
                    end;
                
                for (var i = 0; i < 10; i++) {
                    Ext.getCmp('border-example').updateLayout();
                }
                
                end = new Date().getTime();
                
                console.log('10 relayout runs took: ' + (end - begin) + 'ms, '+
                            'one run took: ' + ((end - begin)/10) + 'ms on average');
            }
        }]
    })

    var tstore1 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree1 = Ext.create('Ext.tree.Panel', {
        store: tstore1,
        rootVisible: false,
        useArrows: true,
        title: 'Check Tree',
        dockedItems: [{
            xtype: 'toolbar',
            style: 'border-top-width:0',
            items: {
                text: 'Get checked nodes',
                handler: function () {
                    var records = tree.getView().getChecked(),
                        names = [];

                    Ext.Array.each(records, function (rec) {
                        names.push(rec.get('text'));
                    });

                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

    var tstore2 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree2 = Ext.create('Ext.tree.Panel', {
        store: tstore2,
        rootVisible: false,
        useArrows: true,
        title: 'Check Tree',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Get checked nodes',
                handler: function () {
                    var records = tree.getView().getChecked(),
                        names = [];

                    Ext.Array.each(records, function (rec) {
                        names.push(rec.get('text'));
                    });

                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

    var tstore3 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree3 = Ext.create('Ext.tree.Panel', {
        store: tstore3,
        rootVisible: false,
        useArrows: true,
        title: 'Check Tree',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Get checked nodes',
                handler: function () {
                    var records = tree.getView().getChecked(),
                        names = [];

                    Ext.Array.each(records, function (rec) {
                        names.push(rec.get('text'));
                    });

                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

    var tstore4 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree4 = Ext.create('Ext.tree.Panel', {
        store: tstore4,
        rootVisible: false,
        useArrows: true,
        title: 'Check Tree',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Get checked nodes',
                handler: function () {
                    var records = tree.getView().getChecked(),
                        names = [];

                    Ext.Array.each(records, function (rec) {
                        names.push(rec.get('text'));
                    });

                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

    var tstore5 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree5 = Ext.create('Ext.tree.Panel', {
        store: tstore5,
        rootVisible: false,
        useArrows: true,
        title: 'Check Tree',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Get checked nodes',
                handler: function () {
                    var records = tree.getView().getChecked(),
                        names = [];

                    Ext.Array.each(records, function (rec) {
                        names.push(rec.get('text'));
                    });

                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

    Ext.define('Book1', {
        extend: 'Ext.data.Model',
        fields: [
        // set up the fields mapping into the xml doc
        // The first needs mapping, the others are very basic
        {
            name: 'Author',
            mapping: 'ItemAttributes > Author'
        }, 'Title', 'Manufacturer', 'ProductGroup']
    });

    // create the Data Store
    var store1 = Ext.create('Ext.data.Store', {
        model: 'Book1',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid1 = Ext.create('Ext.grid.Panel', {
        title: 'Center Panel 1',
        store: store1,
        columns: [{
            text: "Author",
            flex: 1,
            dataIndex: 'Author',
            sortable: true
        }, {
            text: "Title",
            width: 180,
            dataIndex: 'Title',
            sortable: true
        }, {
            text: "Manufacturer",
            width: 115,
            dataIndex: 'Manufacturer',
            sortable: true
        }, {
            text: "Product Group",
            width: 100,
            dataIndex: 'ProductGroup',
            sortable: true
        }]
    });

    Ext.define('Book2', {
        extend: 'Ext.data.Model',
        fields: [
        // set up the fields mapping into the xml doc
        // The first needs mapping, the others are very basic
        {
            name: 'Author',
            mapping: 'ItemAttributes > Author'
        }, 'Title', 'Manufacturer', 'ProductGroup']
    });

    // create the Data Store
    var store2 = Ext.create('Ext.data.Store', {
        model: 'Book2',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid2 = Ext.create('Ext.grid.Panel', {
        title: 'Center Panel 3',
        store: store2,
        columns: [{
            text: "Author",
            flex: 1,
            dataIndex: 'Author',
            sortable: true
        }, {
            text: "Title",
            width: 180,
            dataIndex: 'Title',
            sortable: true
        }, {
            text: "Manufacturer",
            width: 115,
            dataIndex: 'Manufacturer',
            sortable: true
        }, {
            text: "Product Group",
            width: 100,
            dataIndex: 'ProductGroup',
            sortable: true
        }]
    });

    Ext.define('Book3', {
        extend: 'Ext.data.Model',
        fields: [
        // set up the fields mapping into the xml doc
        // The first needs mapping, the others are very basic
        {
            name: 'Author',
            mapping: 'ItemAttributes > Author'
        }, 'Title', 'Manufacturer', 'ProductGroup']
    });

    // create the Data Store
    var store3 = Ext.create('Ext.data.Store', {
        model: 'Book3',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid3 = Ext.create('Ext.grid.Panel', {
        title: 'Center Panel 4',
        store: store3,
        columns: [{
            text: "Author",
            flex: 1,
            dataIndex: 'Author',
            sortable: true
        }, {
            text: "Title",
            width: 180,
            dataIndex: 'Title',
            sortable: true
        }, {
            text: "Manufacturer",
            width: 115,
            dataIndex: 'Manufacturer',
            sortable: true
        }, {
            text: "Product Group",
            width: 100,
            dataIndex: 'ProductGroup',
            sortable: true
        }]
    });


    Ext.define('Book4', {
        extend: 'Ext.data.Model',
        fields: [
        // set up the fields mapping into the xml doc
        // The first needs mapping, the others are very basic
        {
            name: 'Author',
            mapping: 'ItemAttributes > Author'
        }, 'Title', 'Manufacturer', 'ProductGroup']
    });

    // create the Data Store
    var store4 = Ext.create('Ext.data.Store', {
        model: 'Book4',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });

    // create the grid
    var grid4 = Ext.create('Ext.grid.Panel', {
        title: 'Center Panel 5',
        store: store4,
        columns: [{
            text: "Author",
            flex: 1,
            dataIndex: 'Author',
            sortable: true
        }, {
            text: "Title",
            width: 180,
            dataIndex: 'Title',
            sortable: true
        }, {
            text: "Manufacturer",
            width: 115,
            dataIndex: 'Manufacturer',
            sortable: true
        }, {
            text: "Product Group",
            width: 100,
            dataIndex: 'ProductGroup',
            sortable: true
        }]
    });

    // sample static data for the store
    var myData = [
        ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'],
        ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
        ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
        ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
        ['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
        ['AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.', 75.43, 0.53, 0.71, '9/1 12:00am'],
        ['Caterpillar Inc.', 67.27, 0.92, 1.39, '9/1 12:00am'],
        ['Citigroup, Inc.', 49.37, 0.02, 0.04, '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51, 1.28, '9/1 12:00am'],
        ['Exxon Mobil Corp', 68.1, -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company', 34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation', 30.27, 1.09, 3.74, '9/1 12:00am'],
        ['Hewlett-Packard Co.', 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc', 38.77, 0.05, 0.13, '9/1 12:00am'],
        ['Intel Corporation', 19.88, 0.31, 1.58, '9/1 12:00am'],
        ['International Business Machines', 81.41, 0.44, 0.54, '9/1 12:00am'],
        ['Johnson & Johnson', 64.72, 0.06, 0.09, '9/1 12:00am'],
        ['JP Morgan & Chase & Co', 45.73, 0.07, 0.15, '9/1 12:00am'],
        ['McDonald\'s Corporation', 36.76, 0.86, 2.40, '9/1 12:00am'],
        ['Merck & Co., Inc.', 40.96, 0.41, 1.01, '9/1 12:00am'],
        ['Microsoft Corporation', 25.84, 0.14, 0.54, '9/1 12:00am'],
        ['Pfizer Inc', 27.96, 0.4, 1.45, '9/1 12:00am'],
        ['The Coca-Cola Company', 45.07, 0.26, 0.58, '9/1 12:00am'],
        ['The Home Depot, Inc.', 34.64, 0.35, 1.02, '9/1 12:00am'],
        ['The Procter & Gamble Company', 61.91, 0.01, 0.02, '9/1 12:00am'],
        ['United Technologies Corporation', 63.26, 0.55, 0.88, '9/1 12:00am'],
        ['Verizon Communications', 35.57, 0.39, 1.11, '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am']
    ];

    var ds = Ext.create('Ext.data.ArrayStore', {
        fields: [{
            name: 'company'
        }, {
            name: 'price',
            type: 'float'
        }, {
            name: 'change',
            type: 'float'
        }, {
            name: 'pctChange',
            type: 'float'
        }, {
            name: 'lastChange',
            type: 'date',
            dateFormat: 'n/j h:ia'
        },
        // Rating dependent upon performance 0 = best, 2 = worst
        {
            name: 'rating',
            type: 'int',
            convert: function (value, record) {
                var pct = record.get('pctChange');
                if (pct < 0) return 2;
                if (pct < 1) return 1;
                return 0;
            }
        }],
        data: myData
    });


    // example of custom renderer function
    function change(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    }
    // example of custom renderer function
    function pctChange(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }

    // render rating as "A", "B" or "C" depending upon numeric value.
    function rating(v) {
        if (v == 0) return "A";
        if (v == 1) return "B";
        if (v == 2) return "C";
    }

    /*
     * Here is where we create the Form
     */
    var gridForm = Ext.create('Ext.form.Panel', {
        closable: true,
        id: 'company-form',
        title: 'Company data',
        bodyPadding: 5,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        // Specifies that the items will now be arranged in columns
        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'side'
        },
        items: [{
            width: 750 * 0.60,
            xtype: 'gridpanel',
            store: ds,
            title: 'Company Data',
            columns: [{
                id: 'company',
                text: 'Company',
                flex: 1,
                sortable: true,
                dataIndex: 'company'
            }, {
                text: 'Price',
                width: 75,
                sortable: true,
                dataIndex: 'price'
            }, {
                text: 'Change',
                width: 75,
                sortable: true,
                renderer: change,
                dataIndex: 'change'
            }, {
                text: '% Change',
                width: 75,
                sortable: true,
                renderer: pctChange,
                dataIndex: 'pctChange'
            }, {
                text: 'Last Updated',
                width: 85,
                sortable: true,
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'lastChange'
            }, {
                text: 'Rating',
                width: 30,
                sortable: true,
                renderer: rating,
                dataIndex: 'rating'
            }],

            listeners: {
                selectionchange: function (model, records) {
                    if (records[0]) {
                        this.up('form').getForm().loadRecord(records[0]);
                    }
                }
            }
        }, {
            flex: 1,
            margin: '0 0 0 10',
            xtype: 'fieldset',
            title: 'Company details',
            defaults: {
                width: 240,
                labelWidth: 90
            },
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'Name',
                name: 'company'
            }, {
                fieldLabel: 'Price',
                name: 'price'
            }, {
                fieldLabel: '% Change',
                name: 'pctChange'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Last Updated',
                name: 'lastChange'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Rating',
                columns: 3,
                defaults: {
                    name: 'rating' //Each radio has the same name so the browser will make sure only one is checked at once
                },
                items: [{
                    inputValue: '0',
                    boxLabel: 'A'
                }, {
                    inputValue: '1',
                    boxLabel: 'B'
                }, {
                    inputValue: '2',
                    boxLabel: 'C'
                }]
            }]
        }]

    });

    Ext.define('example.contact1', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'first',
            mapping: 'name > first'
        }, {
            name: 'last',
            mapping: 'name > last'
        }, 'company', 'email', 'state',
        {
            name: 'dob',
            type: 'date',
            dateFormat: 'm/d/Y'
        }]
    });

    Ext.define('example.fielderror1', {
        extend: 'Ext.data.Model',
        fields: ['id', 'msg']
    });

    var formPanel1 = Ext.create('Ext.form.Panel', {
        title: 'XML Form',
        bodyPadding: 5,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 85,
            msgTarget: 'side'
        },

        // configure how to read the XML data
        reader: Ext.create('Ext.data.reader.Xml', {
            model: 'example.contact1',
            record: 'contact',
            successProperty: '@success'
        }),

        // configure how to read the XML errors
        errorReader: Ext.create('Ext.data.reader.Xml', {
            model: 'example.fielderror1',
            record: 'field',
            successProperty: '@success'
        }),

        items: [{
            xtype: 'fieldset',
            title: 'Contact Information',
            defaultType: 'textfield',
            defaults: {
                width: 280
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            }, {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            }, {
                fieldLabel: 'Company',
                name: 'company'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            }, {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['abbr', 'state'],
                    data: Ext.example.states // from states.js
                }),
                valueField: 'abbr',
                displayField: 'state',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }]
        }],

        buttons: [{
            text: 'Load',
            handler: function () {
                formPanel1.getForm().load({
                    url: '../../examples/form/xml-form-data.xml',
                    waitMsg: 'Loading...'
                });
            }
        }, {
            text: 'Submit',
            disabled: true,
            formBind: true,
            handler: function () {
                this.up('form').getForm().submit({
                    url: 'xml-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }
        }]
    });

    Ext.define('example.contact2', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'first',
            mapping: 'name > first'
        }, {
            name: 'last',
            mapping: 'name > last'
        }, 'company', 'email', 'state',
        {
            name: 'dob',
            type: 'date',
            dateFormat: 'm/d/Y'
        }]
    });

    Ext.define('example.fielderror2', {
        extend: 'Ext.data.Model',
        fields: ['id', 'msg']
    });

    var formPanel2 = Ext.create('Ext.form.Panel', {
        title: 'XML Form',
        bodyPadding: 5,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 85,
            msgTarget: 'side'
        },

        // configure how to read the XML data
        reader: Ext.create('Ext.data.reader.Xml', {
            model: 'example.contact2',
            record: 'contact',
            successProperty: '@success'
        }),

        // configure how to read the XML errors
        errorReader: Ext.create('Ext.data.reader.Xml', {
            model: 'example.fielderror2',
            record: 'field',
            successProperty: '@success'
        }),

        items: [{
            xtype: 'fieldset',
            title: 'Contact Information',
            defaultType: 'textfield',
            defaults: {
                width: 280
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            }, {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            }, {
                fieldLabel: 'Company',
                name: 'company'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            }, {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['abbr', 'state'],
                    data: Ext.example.states // from states.js
                }),
                valueField: 'abbr',
                displayField: 'state',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }]
        }],

        buttons: [{
            text: 'Load',
            handler: function () {
                formPanel2.getForm().load({
                    url: '../../examples/form/xml-form-data.xml',
                    waitMsg: 'Loading...'
                });
            }
        }, {
            text: 'Submit',
            disabled: true,
            formBind: true,
            handler: function () {
                this.up('form').getForm().submit({
                    url: 'xml-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }
        }]
    });

    var tabPanel1 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel1',
        html: 'Panel 1',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [
            gridForm,
            grid1,
            formPanel1,
            grid2,
            grid3,
            grid4,
            formPanel2, {
            title: 'Center Panel 7',
            autoScroll: true,
            contentEl: 'center7'
        }]
    });

    var tabPanel2 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel2',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            xtype: 'container',
            title: 'Close Me',
            closable: true,
            layout: 'border',
            html: 'Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 2'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }]
    });


    var tabPanel3 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel3',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            title: 'Close Me',
            closable: true,
            html: 'Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 3'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }]
    });

    var tabPanel4 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel4',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            title: 'Close Me',
            closable: true,
            html: 'Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 4'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }]
    });

    var tabPanel5 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel5',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            title: 'Close Me',
            closable: true,
            html: 'Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 5'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }

            ]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }]
    });

    var tabPanel6 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel6',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            title: 'Close Me',
            closable: true,
            html: 'Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 6'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }]
    });

    var tabPanel7 = Ext.create('Ext.tab.Panel', {
        id: 'tabPanel7',
        deferredRender: false,
        activeTab: 0,
        // first tab initially active
        items: [{
            title: 'Close Me',
            closable: true,
            html: 'Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center p 7'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 1',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 2',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 3',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 4',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 5',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 6',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }, {
            title: 'Center Panel 7',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                region: 'north',
                html: 'north'
            }, {
                xtype: 'panel',
                title: 'test',
                region: 'center',
                html: 'center'

            }, {
                xtype: 'panel',
                region: 'south',
                html: 'south'
            }]
        }]
    });

    var cardPanel = Ext.create('Ext.Panel', {
        region: 'center',
        id: 'card-panel',
        layout: 'card',
        border: false,
        margins: '0 0 0 2',
        activeItem: 0,
        layout: 'card',
        name: 'test',
        items: [
            tabPanel1, tabPanel2, tabPanel3, tabPanel4, tabPanel5, tabPanel6, tabPanel7
        ]

    })

    var viewport = Ext.create('Ext.Viewport', {
        id: 'border-example',
        layout: 'border',
        items: [ northTb, {
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
            xtype: 'tabpanel',
            region: 'east',
            title: 'East Side',
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                items: ['->',
                {
                    xtype: 'button',
                    text: 'test',
                    tooltip: 'Test Button'
                }]
            }],
            animCollapse: true,
            collapsible: true,
            split: true,
            width: 225,
            // give east and west regions a width
            minSize: 175,
            maxSize: 400,
            margins: '0 5 0 0',
            activeTab: 2,
            tabPosition: 'bottom',
            items: [{
                html: '<p>Tab 0</p><p>A TabPanel component can be a region.</p>',
                title: 'Tab 0',
                autoScroll: true
            }, {
                html: '<p>Tab 1</p><p>A TabPanel component can be a region.</p>',
                title: 'Tab 1',
                autoScroll: true
            },
            Ext.create('Ext.grid.PropertyGrid', {
                title: 'Property Grid',
                closable: true,
                source: {
                    "(name)": "Properties Grid",
                    "grouping": false,
                    "autoFitColumns": true,
                    "productionQuality": false,
                    "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
                    "tested": false,
                    "version": 0.01,
                    "borderWidth": 1
                }
            })]
        }, {
            region: 'west',
            stateId: 'navigation-panel',
            id: 'west-panel',
            // see Ext.getCmp() below
            title: 'West',
            split: true,
            width: 200,
            minWidth: 175,
            maxWidth: 400,
            collapsible: true,
            animCollapse: true,
            margins: '0 0 0 5',
            layout: 'accordion',
            items: [ tree1, tree2, tree3, tree4, tree5]
        },
        cardPanel]
    });

    //console.profileEnd();

    var end = new Date().getTime();
    var data = Ext.Perf.getData();
    var renderTime = Math.round(data.render.pure.sum);
    var layoutTime = Math.round(data.layout.pure.sum);
    var totalTime = end - Ext._startTime;
    var initTime = end - ready - (renderTime + layoutTime);
    var loadTime = ready - Ext._startTime;
    var comp = Ext.getCmp('perfnumber');

    comp.setText('<b><big>Load(' + loadTime +
                 ') + Init(' + initTime +
                 ') + Render(' + renderTime +
                 ') + Layout(' + layoutTime +
                 ') = ' + totalTime + '</big></b>');
}

Ext.onReady(doTest);
