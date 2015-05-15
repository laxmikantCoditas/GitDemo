Ext.require(['Ext.grid.Panel', 'GridCreator']);

executeTest = function() {
    var grid = Ext.create('GridCreator', {
        rowCount: 10,
        colCount: 5
    });
    
    grid.execute(function(results) {
        runnerWindow.testResults = results;
    });
};