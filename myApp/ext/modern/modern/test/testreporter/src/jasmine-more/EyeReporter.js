// Collect the jasmine results in a javascript object
jasmine.EyeReporter = function () {
    var me = this;
    me.suites = {};
    me.results = {
        startTime: null,
        endTime: null,
        failures: 0,
        suitesCount: 0,
        specsCount: 0,
        suites: []
    };
};


jasmine.EyeReporter.prototype.filterChars = function(string) {
    return jasmine.util.htmlEscape(string).replace(/\n|\t|\r|\v|'|"|="|=/g, ' ');
};

jasmine.EyeReporter.prototype.reportSpecStarting = function(spec){
    if (spec.isEnabled()) {
        var me = this;
            me.fireEvent('specstart', spec);
            spec.startTime = (new Date).getTime();
            me.currentSpec =  {
                startTime: spec.startTime,
                description: me.filterChars(spec.description),
                type: 'spec',
                hash: spec.id
            };
    }
};
 
jasmine.EyeReporter.prototype.reportSpecResults = function(spec){
    if (spec.isEnabled()) {
        var me = this, 
            results, result, length, i, expectation;


            me.currentSpec.endTime = (new Date).getTime();
            me.currentSpec.passed = spec.results().passed();

            if (!me.currentSpec.passed) {
                me.currentSuite.failures++;
                me.currentSuite.passed = false;
            }

            me.results.specsCount++;
            me.currentSuite.specsCount++;
            
            results = spec.results().getItems();

            if (!me.currentSpec.passed) {
                me.results.failures++;
                me.currentSpec.children = [];
                length = results.length;
                for (i = 0; i < length; i++) {
                    result = results[i];
             
                    if (result.type === "expect" && result.passed) {
                       
                        expectation = {
                             message: jasmine.util.htmlEscape(result.matcherName + ': ' + result.message),
                             type: 'expect'
                        };
                        if (!result.passed() && result.error) {
                            expectation.message = jasmine.util.htmlEscape(jasmine.extractStackTrace(result.error));
                        } 
                        
                        if (result.passed()) {
                            expectation.passed = true;
                        } else {
                            expectation.passed = false;
                        }
               
                        me.currentSpec.children.push(expectation);
                        if (!result.passed()) {
                            break;
                        }
                    }
                }
            }
           
            me.currentSuite.children.push(me.currentSpec);
    }
};

jasmine.EyeReporter.prototype.reportRunnerStarting = function(runner){
    var me = this;
    me.fireEvent('start');
    me.results.startTime = new Date().getTime();
};

jasmine.EyeReporter.prototype.reportRunnerResults = function(runner){
    var me = this;
        
    me.results.endTime = new Date().getTime();
    
    me.parentSuite = null;
    me.currentSuite = null;
    me.currentSpec = null;
    delete me.results.suites;
    me.fireEvent('finish', me.results);

    if (parent && parent.Qa) {
        parent.Qa.stop();
    } else if (typeof Qa != 'undefined') {
       Qa.stop();
    }
};

jasmine.EyeReporter.prototype.reportSuiteStarting = function(suite){
    
    if (suite.isEnabled()) {
        var me = this,
            suiteJson = {
                startTime: (new Date).getTime(),
                passed: true,
                description: me.filterChars(suite.description),
                type: 'suite',
                failures: 0,
                hash: suite.id,
                suitesCount: 0,
                specsCount: 0,
                children: [] 
            };

            if (!suite.parentSuite) {
                me.fireEvent('rootsuitestart', suite);
                me.results.suites.push(suiteJson);
                me.parentSuite = null;
            } else {
                me.suites[suite.parentSuite.id] = me.suites[suite.parentSuite.id] || me.currentSuite;
                me.parentSuite = me.suites[suite.parentSuite.id];
                me.parentSuite.children.push(suiteJson);
                me.parentSuite.suitesCount++;
            }

            me.results.suitesCount++;

            me.currentSuite = suiteJson;
    }
    
};

jasmine.EyeReporter.prototype.reportSuiteResults = function(suite){
    if (suite.isEnabled()) {
        var me = this,
            nextCurrent = suite.parentSuite,
            nextParent = nextCurrent ? nextCurrent.parentSuite : null;
            
        me.currentSuite.endTime = (new Date).getTime();

        if (me.parentSuite) {
            me.parentSuite.specsCount += me.currentSuite.specsCount;
            me.parentSuite.suitesCount += me.currentSuite.suitesCount;
            me.parentSuite.failures += me.currentSuite.failures;
            if (!me.currentSuite.passed) {
                me.parentSuite.passed = false;
            }
        }
        me.currentSuite = nextCurrent ? me.suites[nextCurrent.id] : null;
        me.parentSuite = nextParent ? me.suites[nextParent.id] : null;

        if (me.currentSuite == null && me.parentSuite == null) {
            me.suites = {};
        }
        
        if (!suite.parentSuite) {
            if (typeof parent != 'undefined' && parent.Qa) {
                parent.Qa.sendTestSuite(me.results.suites.pop(), suite);
            } else if (typeof Qa != 'undefined') {
               Qa.sendTestSuite(me.results.suites.pop(), suite);
            }
        
        }
    }
};


jasmine.EyeReporter.prototype.on = function(eventName, fn, scope) {
    var me = this;
    
    me.listeners = me.listeners || {};
    if (typeof eventName != 'string') {
        fn = eventName.fn;
        scope = eventName.scope;
        eventName = eventName.name;
    }    
    me.listeners[eventName] =  me.listeners[eventName] || [];
    
    me.listeners[eventName].push({
        fn: fn,
        scope: scope || me
    });
    
};


jasmine.EyeReporter.prototype.fireEvent = function(name) {
   this.listeners = this.listeners || {};
   var me = this,
       args = Array.prototype.slice.call(arguments, 1),
       listeners, i, length, ret, listener;
       
   me.listeners = me.listeners || {};
   listeners = me.listeners[name];
   
   if (listeners) {
       length = listeners.length;
       i = 0;

       for (; i < length; i++) {
           listener = listeners[i];
           ret = listener.fn.apply(listener.scope, args);

           if (ret == false) {
               return false;
           }
       }
   }     
   return true;
};