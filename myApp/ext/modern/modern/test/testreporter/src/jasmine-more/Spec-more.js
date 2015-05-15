(function () {
    var _Spec = jasmine.Spec,
        proto = _Spec.prototype;

    jasmine.Spec = function () {
        _Spec.apply(this, arguments);

        this.id = jasmine.hashString(this.getFullName(), this.suite.id);
    };

    jasmine.Spec.prototype = proto;

    proto.execute = function(onComplete) {
        var spec = this;
        this.env.reporter.reportSpecStarting(this);
        if (spec.isDisabled()) {
            spec.results_.skipped = true;
            spec.finish(onComplete);
            return;
        }

        spec.env.currentSpec = spec;

        spec.addBeforesAndAftersToQueue();

        spec.queue.start(function () {
            spec.finish(onComplete);
        });
    };

    // Override: adds the error to the result
    proto.fail = function (e) {
    var expectationResult = new jasmine.ExpectationResult({
        passed: false,
        message: e ? jasmine.util.formatException(e) : 'Exception'
    });
    // Modification start
    if (e instanceof Error) {
        this.hasError = true;
        expectationResult.error = e;
    }
    // Modification end
    this.results_.addResult(expectationResult);
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

    proto.getRootSuite = function() {
        var suite = this.suite;

        while (suite.parentSuite) {
            suite = suite.parentSuite;
        }

        return suite;
    };
})();
