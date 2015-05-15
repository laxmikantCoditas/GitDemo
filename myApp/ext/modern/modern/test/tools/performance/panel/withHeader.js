Ext.require('Ext.panel.Panel');

executeTest = function() {
    var startTime = new Date();
    
    Ext.create('Ext.panel.Panel', {
        title: 'Some Panel',
        
        height: 200,
        width: 200,
        renderTo: Ext.getBody()
    });
    
    var total = new Date() - startTime;

    runnerWindow.testResults = {
        total: total,
        version: Ext.getVersion().toString()
    };
};