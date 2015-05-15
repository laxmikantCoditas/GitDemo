Ext.define('Suite', {
    extend: 'Ext.data.Model',
    fields: ['startTime', 'endTime'],
    hasMany: 'Case',
    
    execute: function(callback, scope) {
        var cases   = this.cases().data.items,
            length  = cases.length,
            counter = 0,
            me      = this,
            i;
        
        me.set('startTime', new Date().getTime());
        
        var executeTestCase = function(index) {
            var testCase = cases[index];
            
            testCase.execute(function(caseResults) {
                //if all test cases have been run, call back, else keep running
                if (counter + 1 == cases.length) {
                    me.set('endTime', new Date().getTime());
                    callback.call(scope || this, caseResults);
                } else {
                    counter++;
                    executeTestCase(counter);
                }
            });
        };

        executeTestCase(counter);
    },
    
    /**
     * Flattens the Cases and Runs into a set of {@link Result Results} that detail the min/max/avg
     * of each Case in the Suite
     * @return {Ext.data.Store} A Store populated with {@link Result} instances
     */ 
    getResults: function() {
        var results = [];
        
        this.cases().each(function(testCase) {
            var caseRuns = Ext.Array.pluck(testCase.runs().data.items, 'data'),
                runTimes = Ext.Array.pluck(caseRuns, 'total'),
                runCount = runTimes.length,
                runAverage = Ext.Array.mean(runTimes),
                runMin = Ext.Array.min(runTimes),
                runMax = Ext.Array.max(runTimes),
                stdDev = 0,
                i;
            
            //calculate the standard deviation to 2dp
            for (i = 0; i < runCount; i++) {
                stdDev += ((runTimes[i] - runAverage) * (runTimes[i] - runAverage));
            }
            
            stdDev = Math.round(Math.sqrt(stdDev / runCount) * 100) / 100;
            
            results.push({
                url: testCase.get('url'),
                count: runTimes.length,
                times: runTimes,
                average: runAverage,
                min: runMin,
                max: runMax,
                
                deviation: stdDev
            });
        });
        
        return Ext.create('Ext.data.Store', {
            model: 'Result',
            data : results
        });
    },
    
    /**
     * Returns the Ext JS version that this Suite was executed against
     */
    getVersion: function() {
        return this.cases().first().runs().first().get('version');
    },
    
    /**
     * Returns the total number of {@link Case Test Case} {@link Run Runs} executed for this Suite
     * @return {Number} The total number of runs executed for this suite
     */
    getRunCount: function() {
        var total = 0;
        this.cases().each(function(testCase) {
            total += testCase.runs().getCount();
        });
        
        return total;
    },
    
    /**
     * Prints a report of this Suite's results to the console
     */
    report: function() {
        var version = this.getVersion(),
            results = this.getResults();
        
        console.log('Suite finished in ' + this.getDuration() + ' seconds on Ext JS ' + version);
        
        console.log('=========================');
        
        results.each(function(result) {
            console.log('Results for ' + result.get('url'));
            console.log('  Ran ' + result.get('count') + ' times');
            console.log('  Average run time: ' + result.get('average') + ' (min: ' + result.get('min') +', Max: ' + result.get('max') + ')');
        });
    },
    
    /**
     * Returns the length of time that the Suite took to execute
     */
    getDuration: function() {
        return Math.round((this.get('endTime') - this.get('startTime')) / 1000);
    }
});