/* interaction lib boot */

(function() {
    var reporter = new jasmine.EyeReporter(),
        testTree = top.Ext.ComponentQuery.query('t-test-tree')[0];
        
    reporter.on('rootsuitefinish', function(suite) {
        testTree.store.addSuite(suite);
    });
    
    reporter.on('specstarted', function(spec) {
         testTree.setTitle('Status: running ' + spec.getFullName());
    });
    
    reporter.on('start', function() {
        testTree.setTitle('Status: started.');
    });
    
    reporter.on('finish', function(results) {
        var message = results.specsCount + ' spec(s) ran with ' + results.failures + ' failure(s) in ' + ((results.endTime - results.startTime) / 1000) + 's.';
        testTree.setTitle('Results: ' + message);
    });
   
    Qa.on('snap', function (config) {
        var eventDescriptor = config.eventDescriptor;
        top.Ext.StoreManager.lookup('Keyframes').add({
            description: eventDescriptor.description,
            timestamp: eventDescriptor.timestamp || (new Date).getTime(),
            target: eventDescriptor.target,
            type: eventDescriptor.type,
            coords: eventDescriptor.coords
        });
    });

    Qa.on('spyevent', function(eventName, observable) {
        top.Ext.StoreManager.lookup('Events').add({
            observable: observable.$className,
            name: eventName,
            timestamp: (new Date).getTime()
        });
    });

    
    var start = function() {
        var env = jasmine.getEnv();
            env.addReporter(reporter);
            env.execute();
    };

    if (typeof _bootstrap != 'undefined') {       
       _bootstrap.loadSpecs(start);
    } else {
        Ext.onReady(start);
    }
})();