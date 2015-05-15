(function(){

var LayoutReporter = new Ext.Class({
    started: false,

    finished: false,

    getStatusElement: function() {
        return document.getElementById('status');
    },

    getProgressElement: function() {
        return Ext.get('progress');
    },

    log: function(message) {
        this.getStatusElement().innerHTML = message;
    },

    reportRunnerStarting: function(runner) {
        this.started = true;
        this.specsCount = runner.specs().length;
        this.startTime = Date.now();
        this.executedCount = 0;
        this.passedCount = 0;
        this.skippedCount = 0;
        this.specs = runner.specs();

        for (var i = 0; i < this.specsCount; i++) {
            this.getProgressElement().append(document.createElement('div'));
        }

        this.log("Runner Started.");
    },

    reportSpecStarting: function(spec) {
        this.executedCount++;
        this.log(spec.suite.description + ': ' + spec.description);
    },

    reportSpecResults: function(spec) {
        var results = spec.results(),
            passed = results.passed(),
            skipped = results.skipped;

        if (skipped) {
            this.skippedCount++;
        }
        else if (passed) {
            this.passedCount++;
        }

        try {
            this.getProgressElement().dom.children[spec.id].className = passed ? 'passed' : 'failed';
        } catch(e) {};

        if (!skipped) {
            spec.specElement.addCls(passed ? 'passed' : 'failed');
        }
    },

    reportSuiteResults: function(suite) {
        var results = suite.results();
        this.log(suite.description + ": " + results.passedCount + " of " + results.totalCount + " passed.");
    },

    reportRunnerResults: function(runner) {
        var duration = Date.now() - this.startTime,
            failed = this.executedCount - this.passedCount,
            specsString = this.executedCount + (this.executedCount === 1 ? " spec, " : " specs, "),
            failureString = failed + (failed === 1 ? " failure in " : " failures in "),
            skippedString = this.skippedCount > 0 ? this.skippedCount + ' skipped, <a href="'+document.location.pathname+'">run all</a>' : '';

        this.log(specsString + failureString + (duration / 1000) + "s. " + skippedString);
        this.finished = true;
    }
});

var jasmineEnv = jasmine.getEnv(),
    reporter = new LayoutReporter;

jasmineEnv.updateInterval = 250;

jasmineEnv.addReporter(reporter);

if (jasmine.EyeReporter) {
    jasmineEnv.addReporter(new jasmine.EyeReporter());
}

jasmineEnv.beforeEach(function() {
    runs(function() {
        var me = this;
        jasmine.specSandbox(function(specElement, viewport, width, height) {
            me.specElement = specElement;
            specElement.dom.setAttribute('data-index', me.id);
            me.args = Array.prototype.slice.call(arguments, 1);
        });
    });

    waitsFor(function() {
        return this.hasOwnProperty('args');
    }, "Sandbox failure", 5000);
});

jasmineEnv.specFilter = function(spec) {
    var params = Ext.Object.fromQueryString(document.location.search);

    if (!('spec' in params)) {
        return true;
    }

    return (String(spec.id) === params.spec);
};

Ext.setup({
    viewport: null,
    animator: null,
    requires: [
        'Ext.viewport.Default'
    ],
    onReady: function() {
        var tooltip = Ext.get('tooltip'),
            tooltipTitle = Ext.get('tooltipTitle'),
            tooltipContent = Ext.get('tooltipContent'),
            highlightedSpec;

        tooltip.on('tap', function() {
            this.hide();
            highlightSpec(null);
        });

        function highlightSpec(specElement) {
            if (highlightedSpec) {
                highlightedSpec.removeCls('highlighted');
            }

            highlightedSpec = specElement;

            if (highlightedSpec) {
                highlightedSpec.addCls('highlighted');
                Ext.get('specs').addCls('highlighting');
            }
            else {
                Ext.get('specs').removeCls('highlighting');
            }
        }

        jasmineEnv.execute();

        Ext.getBody().on({
            tap: function(e, target) {
                var spec = reporter.specs[target.getAttribute('data-index')],
                    passed = spec.results().passed(),
                    content = [];

                tooltip.show();
                tooltip.toggleCls('failed', !passed);
                tooltipTitle.setHtml(spec.description);

                if (!passed) {
                    content.push('<ul>');
                    spec.results().getItems().forEach(function(item) {
                        if (!item.passed()) {
                            content.push('<li>');
                            content.push(item.message);
                            content.push('</li>');
                        }
                    });
                    content.push('</ul>');
                }

                tooltipContent.setHtml(content.join(''));
                highlightSpec(Ext.get(target));
            },
            doubletap: function(e, target) {
                var spec = target.getAttribute('data-index');

                document.location = document.location.pathname + '?spec=' + spec;
            },
            delegate: '.spec'
        });
    }
});

})();
