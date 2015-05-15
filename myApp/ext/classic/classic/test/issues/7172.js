Ext.require([
    'Ext.data.Store'
]);

Ext.define('Employee', {
    extend : 'Ext.data.Model',
    fields : [
        {name : 'rating', type : 'int'},
        {name : 'salary', type : 'float'},
        {name : 'name'}
    ]
});

Ext.onReady(function () {
    function createFakeData(count) {
        var firstNames = ['Ed',      'Tommy',  'Aaron',  'Abe',   'Jamie', 'Adam',    'Dave',   'David', 'Jay',      'Nicolas', 'Nige'],
            lastNames  = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            ratings    = [1, 2, 3, 4, 5],
            salaries   = [100, 400, 900, 1500, 1000000];

        var data = [];
        for (var i = 0; i < (count || 25); i++) {
            var ratingId    = Math.floor(Math.random() * ratings.length),
                salaryId    = Math.floor(Math.random() * salaries.length),
                firstNameId = Math.floor(Math.random() * firstNames.length),
                lastNameId  = Math.floor(Math.random() * lastNames.length),

                rating = ratings[ratingId],
                salary = salaries[salaryId],
                name   = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);

            data.push({
                rating : rating,
                salary : salary,
                name   : name
            });
        }
        return data;
    }

    var store = Ext.create('Ext.data.Store', {
        buffered : true,
        pageSize : 5000,
        model    : 'Employee',
        data     : createFakeData(1000),
        proxy    : {
            type  : 'ajax',
            url   : '7172.json'
        }
    });

    console.log(store.getCount());

    console.log('loading...');
    console.log('json should have 5,000 records in it');

    store.load({
        addRecords : true,
        callback   : function () {
            console.log('loaded');
            console.log(store.getCount());
        }
    });

});
