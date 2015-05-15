Ext.require('*');
Ext.onReady(function() {

    Ext.define('Employee', {
        extend: 'Ext.data.Model',
        fields: [
           {name: 'rating', type: 'int'},
           {name: 'salary', type: 'float'},
           {name: 'name'}
        ]
    });

    function createFakeData(count) {
        var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
            lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            ratings      = [1, 2, 3, 4, 5],
            salaries     = [100, 400, 900, 1500, 1000000],
            resultComp   = viewport ? viewport.down('#result') : null,
            start;

        var data = [];
        for (var i = 0; i < (count || 25); i++) {
            var ratingId    = Math.floor(Math.random() * ratings.length),
                salaryId    = Math.floor(Math.random() * salaries.length),
                firstNameId = Math.floor(Math.random() * firstNames.length),
                lastNameId  = Math.floor(Math.random() * lastNames.length),

                rating      = ratings[ratingId],
                salary      = salaries[salaryId],
                name        = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);

            data.push({
                rating: rating,
                salary: salary,
                name: name
            });
        }
        start = new Date().getTime();
        store.loadData(data);
        resultComp && resultComp.update({recs: count, time: new Date().getTime() - start});
    }

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        model: 'Employee',
        proxy: {
            type: 'memory'
        }
    });
    createFakeData(1000);

    var grid = Ext.create('Ext.grid.Panel', {
        id: 'the-grid',
        title: 'Grid loaded with varying number of records',
        anchor: '100%',
        store: store,
        layout: 'anchor',
        viewConfig: {
            anchor: '100%',
            id: 'the-gridview'
        },
        columns: {
            id: 'grid-header-container',
            items: [{
                xtype: 'rownumberer',
                id: 'row-numberer-header',
                width: 40,
                sortable: false
            },{
                text: 'Name',
                id: 'name-numberer-header',
                flex: 1,
                sortable: true,
                dataIndex: 'name'
            },{
                text: 'Rating',
                id: 'rating-numberer-header',
                width: 125,
                sortable: true,
                dataIndex: 'rating'
            },{
                text: 'Salary',
                id: 'salary-numberer-header',
                width: 125,
                sortable: true,
                dataIndex: 'salary',
                align: 'right',
                renderer: Ext.util.Format.usMoney
            }]
        }
    });

    var viewport = new Ext.Viewport({
        layout: 'border',
        id: 'the-viewport',
        items: [{
            region: 'north',
            id: 'the-toolbar',
            xtype: 'toolbar',
            margins: '5 5 5 5',
            defaults: {
                handler: function(b) {
                    createFakeData(b.count);
                }
            },
            items: [{
                 text: '20 Items',
                 count: 20
            },{
                 text: '100 Items',
                 count: 100
            },{
                 text: '300 Items',
                 count: 300
            },{
                 text: '1000 Items',
                 count: 1000
            },{
                 text: '5000 Items',
                 count: 5000
            },{
                 text: '10000 Items',
                 count: 10000
            }]
        }, {
            region: 'west',
            id: 'the-west-tabpanel',
            xtype: 'tabpanel',
            width: 200,
            margins: '0 5 5 5',
            items: [{
                title: 'Bogus 1',
                html: 'Bogus 1 content'
            }, {
                title: 'Bogus 2',
                html: 'Bogus 2 content'
            }]
        }, {
            region: 'center',
            id: 'the-center-container',
            autoScroll: true,
            layout: {
                type: 'anchor',
                reserveScrollbar: true
            },
            bodyPadding: 10,
            margins: '0 5 5 0',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'A text Field'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Another Field'
            }, grid ]
        }, {
            xtype: 'component',
            id: 'the-text-component',
            region: 'south',
            height: 23,
            margins: '0 5 5 5',
            itemId: 'result',
            tpl: 'Grid update time for {recs} rows (ms): {time}'
        }]
    })
});