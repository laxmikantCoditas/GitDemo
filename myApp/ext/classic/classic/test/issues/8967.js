Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.grid.plugin.BufferedRenderer'
]);


Ext.define('Employee', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'rating',
        type: 'int'
    }, {
        name: 'salary',
        type: 'float'
    }, {
        name: 'name'
    }]
});

Ext.onReady(function () {
    /**
        * Returns an array of fake data
        * @param {Number} count The number of fake rows to create data for
        * @return {Array} The fake record data, suitable for usage with an ArrayReader
        */

    function createFakeData(count) {
        var firstNames = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
            lastNames = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            ratings = [1, 2, 3, 4, 5],
            salaries = [100, 400, 900, 1500, 1000000];


        var data = [];
        for (var i = 0; i < (count || 25); i++) {
            var ratingId = Math.floor(Math.random() * ratings.length),
                salaryId = Math.floor(Math.random() * salaries.length),
                firstNameId = Math.floor(Math.random() * firstNames.length),
                lastNameId = Math.floor(Math.random() * lastNames.length),


                rating = ratings[ratingId],
                salary = salaries[salaryId],
                name = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);


            data.push({
                id: 'rec-' + i,
                rating: rating,
                salary: salary,
                name: name
            });
        }
        return data;
    }

    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        model: 'Employee',
        proxy: {
            type: 'memory'
        }
    });


    var grid = Ext.create('Ext.grid.Panel', {
        width: 700,
        height: 400,
        title: 'Bufffered Grid of 2,500 random records',
        store: store,
        loadMask: true,
        plugins: 'bufferedrenderer',
        selModel: {
            pruneRemoved: false
        },
        selType: 'checkboxmodel',
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns: [{
            xtype: 'rownumberer',
            width: 40,
            sortable: false
        }, {
            text: 'Name',
            flex: 1,
            sortable: true,
            dataIndex: 'name'
        }, {
            text: 'Rating',
            width: 125,
            sortable: true,
            dataIndex: 'rating'
        }, {
            text: 'Salary',
            width: 125,
            sortable: true,
            dataIndex: 'salary',
            align: 'right',
            renderer: Ext.util.Format.usMoney
        }],
        bbar: [{
            text: 'loadData into grid',
            handler: function () {
                //Bug 1 - load data does not work.
                grid.getStore().loadData(createFakeData(2500));
            }
        }, {
            text: 'Reconfigure grid',
            handler: function () {
                //Bug 2 - reconfigure data does not work
                var store3 = Ext.create('Ext.data.Store', {
                    id: 'store',
                    data: createFakeData(3000),
                    model: 'Employee',
                    proxy: {
                        type: 'memory'
                    }
                });

                grid.reconfigure(store3);
            }
        }],
        renderTo: Ext.getBody()
    });

    store.loadData(createFakeData(2500));
});