(function () {
    var _Suite = jasmine.Suite,
        proto = _Suite.prototype;

    jasmine.Suite = function () {
        _Suite.apply(this, arguments);

        var parentSuite = this.parentSuite;

        this.id = jasmine.hashString(this.getFullName(), parentSuite ? parentSuite.id : 0);
    };

    jasmine.Suite.prototype = proto;

    proto.execute = function(onComplete) {
        var self = this;
        self.env.reporter.reportSuiteStarting(self);

        if (self.isDisabled()) {
            self.results = self.forceSkippedResults;
            self.disableChildren();
        }

        self.queue.start(function () {
            self.finish(onComplete);
        });
    };

    proto.finish = function(onComplete) {
        var self = this;
        
        if (typeof self.onCompleteFn == 'function') {
            onComplete = self.onCompleteFn;
            self.deferComplete_ = false;
            self.onCompleteFn = null;
        } else {
            self.env.reporter.reportSuiteResults(self);
            self.finished = true;
        }
        
        if (typeof(onComplete) == 'function') {
            if (self.deferComplete_) {
                self.onCompleteFn = onComplete;
                return;
            }
            onComplete();
        }
    };
    
    proto.deferComplete = function() {
        this.deferComplete_ = true;
    };
    
    proto.enabled = true;

    proto.isEnabled = function() {
        return this.enabled;
    };

    proto.isDisabled = function() {
        return !this.enabled;
    };

    proto.disable = function() {
        this.enabled = false;
        return this;
    };

    proto.enable = function() {
        this.enabled = true;
        return this;
    };

    proto.forceSkippedResults = function() {
        var results = this.queue.results();
        results.skipped = true;
        return results;
    };

    proto.disableChildren = function() {
        var children = this.children(),
            length = children.length,
            i = 0;

        for (; i < length; i++) {
            children[i].disable();
        }

        return this;
    };

    proto.filter = function (suiteIds, specIds) {

        if (!suiteIds[this.id]) {
            var specs = this.specs(),
                suites = this.suites(),
                spec, i, suite, length;

            length = specs.length;

            for (i = 0; i < length; i++) {
                spec = specs[i];
                if (!specIds[spec.id]) {
                    jasmine.array.remove(this.queue.blocks, spec);
                }
            }

            length = suites.length;

            for (i = 0; i < length; i++) {
                suite = suites[i];
                suite.filter(suiteIds, specIds);
                if (suite.empty) {
                    jasmine.array.remove(this.queue.blocks, suite);
                }
            }

            if (this.queue.blocks.length === 0) {
                this.empty = true;
            }
        }

        return this;
    };

    proto.getRootSuite = function() {
        var suite = this;

        while (suite.parentSuite) {
            suite = suite.parentSuite;
        }

        return suite;
    };

})();
