Ext.require('Ext.grid.Panel');

executeTest = function() {
    //prepare the data before starting the clock
    var rows = [];
    for (var i = 0; i < 100; i++) {
        rows.push({title: 'Mr', firstName: 'Ed', lastName: 'Spencer'});
    }
    
    var startTime = new Date();

    grid = Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 400,
        
        store: {
            fields: ['title', 'firstName', 'lastName'],
            data: rows
        },
        
        columns: [
            {header: 'Title', dataIndex: 'title'},
            {header: 'First', dataIndex: 'firstName'},
            {header: 'Last',  dataIndex: 'lastName'}
        ]
    });
    
    grid.view.on('render', function() {
        var total = new Date() - startTime;

        runnerWindow.testResults = {
            total: total,
            version: Ext.getVersion().toString()
        };
    });
    
    grid.render(Ext.getBody());
};