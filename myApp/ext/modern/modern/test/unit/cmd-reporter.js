(function() {
    if (! jasmine) {
        throw new Exception("jasmine library does not exist in global namespace!");
    }

    var SenchaCmdReporter = function() {
        this.started = false;
        this.finished = false;
    };

    SenchaCmdReporter.prototype = {

        screenshots: {},

        screenshotIndex: 0,

        waitsForScreenshot: function(name) {
            var me = this,
                screenshotIndex;
            runs(function() {
                screenshotIndex = me.screenshotIndex++;
                me.screenshots[screenshotIndex] = false;
                me.log({
                    event: 'screenshot',
                    name: name,
                    id: screenshotIndex
                });
            });
            waitsFor(function() {
                if (me.screenshots[screenshotIndex]) {
                    delete me.screenshots[screenshotIndex];
                    return true;
                }
                return false;
            });
        },

        reportRunnerResults: function(runner) {
            this.log('testRunnerFinished');
        },

        reportRunnerStarting: function(runner) {
            this.log('testRunnerStarted');
        },

        reportSpecResults: function(spec) { },

        reportSpecStarting: function(spec) { },

        reportSuiteStarting: function(suite) {
            this.log({
                event: 'testSuiteStarted',
                name: suite.description
            });
        },

        reportSuiteResults: function(suite) {
            var results = suite.results();
            var outerThis = this;
            var eachSpecFn = function(spec) {
                if (spec.description) {
                    outerThis.log({
                        event: 'testStarted',
                        name: spec.description
                    });
                    var specResultFn = function(result){
                        if (!result.passed()) {
                            outerThis.log({
                                event: 'testFailed',
                                name: spec.description,
                                message: result.message,
                                details: result.trace.stack
                            });
                        }
                    };

                    for (var j = 0, jlen = spec.items_.length; j < jlen; j++) {
                        specResultFn(spec.items_[j]);
                    }
                    outerThis.log({
                        event: 'testFinished',
                        name: spec.description
                    });
                }
            };
            for (var i = 0, ilen = results.items_.length; i < ilen; i++) {
                eachSpecFn(results.items_[i]);
            }

            this.log({
                event: 'testSuiteFinished',
                name: suite.description
            });
        },

        events: [],
        seq: 0,

        log: function(event) {
            var me = this;

            if (typeof event != 'object') {
                event = {
                    event: event
                };
            }

            event.seq = ++me.seq;
            me.events.push(event);
            me.notifyWebDriver();
        },

        notifyWebDriver: function() {
            if (this.pendingNotifier) {
                return;
            }

            var me = this,
                notifier = function() {
                    var result,
                        webDriverCallback = me.webDriverCallback;
                    if (webDriverCallback) {
                        result = JSON.stringify(me.events);
                        me.webDriverCallback = null;
                        me.pendingNotifier = null;
                        webDriverCallback(result);
                    } else {
                        me.pendingNotifier = notifier;
                    }
                };

            notifier();
        },

        purgeTestEvents: function(count) {
            var me = this;
            me.events.splice(0, count);
        }
    };

    // export public
    jasmine.SenchaCmdReporter = SenchaCmdReporter;
})();
