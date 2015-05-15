Ext.require(['Ext.grid.Panel', 'GridCreator']);

executeTest = function() {
    var grid = Ext.create('GridCreator', {
        rowCount: 100,
        colCount: 100
    });
    
    grid.execute(function(results) {
        runnerWindow.testResults = results;
    });
};