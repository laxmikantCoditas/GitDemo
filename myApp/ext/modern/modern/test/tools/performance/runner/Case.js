Ext.define('Case', {
    extend: 'Ext.data.Model',
    fields: [
        'url',
        'doctype', ///////////////////////////////////////////////////////INJECT DOCTYPE / USE DIFFERENT HARNESS FOR EACH
        {name: 'runCount', type: 'int', defaultValue: 4}
    ],
    
    hasMany: 'Run',
    belongsTo: 'Suite',
    
    execute: function(callback, scope) {
        var count = this.get('runCount'),
            runs  = this.runs(),
            testCase = this,
            results = [];

        //we have to wrap this in a timeout because FF4 can't handle calling window.close
        //followed synchronously by window.open (which happens in Run.execute)
        var executeTheTest = function() {
            setTimeout(function() {
                var run = runs.add({})[0];
                
                run.execute(testCase, function(runResults) {
                    if (runs.getCount() == count) {
                        callback.call(scope, runs);
                    } else {
                        executeTheTest();
                    }
                });
            }, 1);
        };

        executeTheTest();
    }
});