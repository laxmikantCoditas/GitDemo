Ext.require(['Ext.grid.Panel', 'GridCreator']);

executeTest = function() {
    var grid = Ext.create('GridCreator', {
        rowCount: 50,
        colCount: 50
    });
    
    grid.execute(function(results) {
        runnerWindow.testResults = results;
    });
};