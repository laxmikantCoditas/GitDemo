Ext.define('Run', {
    extend: 'Ext.data.Model',
    fields: ['total', 'version'],
    belongsTo: 'Case',
    
    relativePath: '../',
    
    execute: function(testCase, callback) {
        var results = {},
            me = this;

        win = window.open('harness.html?nocache');
        win.runnerWindow = window;
        
        var doExecute = function() {
            win.Ext.Loader.loadScriptFile(me.relativePath + testCase.get('url'), function() {
                Ext.defer(function() {
                    win.executeTest();
                    
                    var pollForResults = setInterval(function() {
                        if (window.testResults) {
                            clearInterval(pollForResults);
                            win.close();
                            
                            //Initially we just passed window.testResults to me.set but this causes errors on IE8
                            //so we have to copy the object first
                            var data = {};
                            for (var key in window.testResults) {
                                data[key] = window.testResults[key];
                            }

                            me.set(data);
                            
                            //IE8 also dies when trying to do this :(
                            try {
                                delete window.testResults;
                            } catch(e) {}

                            callback(me);
                        }
                    }, 100);
                }, 200);
            });
        };
        
        //polls for the presence of the Ext object on the page
        var pollForExt = setInterval(function() {
            if (win.Ext) {
                clearInterval(pollForExt);
                doExecute();
            }
        }, 100);
    },
    
    Windowexecute: function(testCase, callback) {
        var results = {},
            me = this;

        win = window.open('harness.html');
        win.runnerWindow = window;
        
        var doExecute = function() {
            win.Ext.Loader.loadScriptFile(me.relativePath + testCase.get('url'), function() {
                Ext.defer(function() {
                    win.executeTest();
                    
                    var pollForResults = setInterval(function() {
                        if (window.testResults) {
                            clearInterval(pollForResults);
                            win.close();

                            me.set(window.testResults);
                            delete window.testResults;

                            callback(me);
                        }
                    }, 100);
                }, 200);
            });
        };
        
        //polls for the presence of the Ext object on the page
        var pollForExt = setInterval(function() {
            if (win.Ext) {
                clearInterval(pollForExt);
                doExecute();
            }
        }, 100);
    }
});