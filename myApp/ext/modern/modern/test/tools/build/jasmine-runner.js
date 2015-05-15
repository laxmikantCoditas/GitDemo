var page = require('webpage').create(),
    system = require('system'),
    fs = require('fs');

/**
 *  error handler logic, updates should be below this section
 */
page.onConsoleMessage = function (msg) {
    console.log(msg);
};

function handleError(err, stack) {
    console.log("== Unhandled Error ==");
    phantom.defaultErrorHandler(err, stack);
    phantom.exit(2);
}

page.onError = phantom.onError = handleError

/* end error handler setup */

if (system.args.length < 2) {
    console.log("usage:");
    console.log("\tsencha jasmine -page <path to html file> [+teamcity]:");
    phantom.exit(1);
}

/**
 * args:
 * 0 => this script's file name
 * 1 => the html file to render (on windows, be mindful of '\\' chars)
 * 2 => 0/1 for junit style output
 */
var url = system.args[1].replace("\\", "/"),
    formatTeamCityOutput = !!(((system.args.length > 2) && system.args[2]) || 0),
    testObjReady = false,
    reportsReady = false;

console.log("loading page " + url);

function waitForCondition(condition, ready, timeout, failmsg) {
    var maxtimeOutMillis = timeout
            ? timeout
            : 30 * 1000,
        start = new Date().getTime(),
        interval = setInterval(function(){
            if(condition()) {
                clearInterval(interval);
                ready();
            } else if((new Date().getTime() - start) > maxtimeOutMillis) {
                console.log(failmsg);
                clearInterval(interval);
                phantom.exit(1);
            }
        }, 100);
};

function reportTestResults() {
    console.log("tests completed, processing test results...");
    page.evaluate(function(){
        var teamcityEscape = function (str) {
                return str
                    .replace(/\|/g, "||")
                    .replace(/\'/g, "|'")
                    .replace(/\n/g, "|n")
                    .replace(/\r/g, "|r")
                    .replace(/\u0085/g, "|x")
                    .replace(/\u2028/g, "|l")
                    .replace(/\u2029/g, "|p")
                    .replace(/\[/g, "|[")
                    .replace(/]/g, "|]");
            },
            reporter = Test.SandBox.phantomReporter,
            results = reporter.specResults,
            rl = results.length,
            specResult, items, failedItems, result, r,
            failedSpecs = [], f, fl, fs,
            item, i, il,
            logitem, suites,
            total = 0,
            failed = 0,
            disabled = 0,
            suite;

        for (r = 0; r < rl; r++) {
            total++;
            result = results[r];
            if (!result.isEnabled()) {
                disabled++;
            } else {
                specResult = result.results();
                if (!specResult.passed()) {
                    failed++;
                    items = specResult.getItems();
                    failedItems = [];
                    suites = [];
                    suite = result.suite;
                    while (suite) {
                        suites.push(suite.description);
                        suite = suite.parentSuite;
                    }

                    il = items.length;
                    for (i = 0; i < il; i++) {
                        item = items[i];
                        if (!item.passed_) {
                            failedItems.push(item);
                        }
                    }
                    logitem = {
                        items:failedItems,
                        time:result.time,
                        id:result.id,
                        location:suites.reverse(),
                        description:result.description
                    };
                    failedSpecs.push(logitem);
                }
                // teamcity output
                if (window["__formatTeamCityOutput"]) {
                    suites = [];
                    suite = result.suite;
                    while (suite) {
                        suites.push(suite.description);
                        suite = suite.parentSuite;
                    }
                    var name = teamcityEscape('PhantomJS: ' + suites.reverse().join('->') + '->it ' + result.description);

                    console.log("##teamcity[testStarted name='" + name + "']\n");

                    if (!specResult.passed()) {
                        items = specResult.getItems();


                        il = items.length;
                        for (i = 0; i < il; i++) {
                            item = items[i];
                            if (!item.passed_) {
                                console.log("##teamcity[testFailed name='" + name + "' message='" + teamcityEscape(item.message) + "']\n");
                            }
                        }

                    }
                    console.log("##teamcity[testFinished name='" + name + "']\n");
                }
            }
        }

        fl = failedSpecs.length;
        if (fl) {
            for (f = 0; f < fl; f++) {
                console.log("\n****************** FAILED SPEC ******************");
                var failedSpec = failedSpecs[f];
                var indent = "";
                for (var fsl = 0; fsl < failedSpec.location.length; fsl++) {
                    console.log(indent + failedSpec.location[fsl]);
                    indent += '  ';
                }
                console.log(indent + failedSpec.description);
                indent += '  ';
                for (var fsi = 0; fsi < failedSpec.items.length; fsi++) {
                    var failedSpecItem = failedSpec.items[fsi];
                    console.log(indent + '-> ' + failedSpecItem.message);
                }

            }
            console.log("**************************************************\n");
        }

        console.log('Completed ' + total + ' tests : ' + disabled + ' disabled : ' + failed + ' failures');
        console.log('Duration: ' + (reporter.endTime - reporter.startTime) / 1000 + ' sec.');
        window.$jasmineDone = true;
        window.$jasmineFailures = failed;
    });
}

page.open(url, function (status) {
    var initialTimeout = 10 * 1000,
        secondaryTimeout = 5 * 60 * 1000;

    if (status === 'success') {
        page.evaluate("function(){window.__formatTeamCityOutput = " + formatTeamCityOutput + ";}");
        waitForCondition(
            function(){
                return page.evaluate(function () {
                    return typeof this.Test != "undefined";
                });
            },
            function () {
                if(testObjReady) {
                    return;
                }
                testObjReady = true;
                console.log("Global test object loaded, waiting for tests to complete...");
                waitForCondition(
                    function(){
                        return page.evaluate(function () {
                            var reporter = this.Test && this.Test.SandBox && this.Test.SandBox.phantomReporter;
                            return !!(reporter && reporter.complete);
                        });
                    },
                    function () {
                        if(reportsReady) {
                            return;
                        }
                        reportsReady = true;
                        reportTestResults();
                        waitForCondition(function(){
                            return page.evaluate(function(){
                                return !!(window['$jasmineDone']);
                            });
                        }, function(){
                            console.log("extracting test results");
                            var failedTestCount = page.evaluate(function(){
                                return window["$jasmineFailures"];
                            });
                            console.log(failedTestCount + " test failures");
                            console.log("tests complete");
                            phantom.exit(parseInt(failedTestCount + ''));
                        })
                    },
                    secondaryTimeout,
                    "Failed to complete unit tests");
            },
            initialTimeout,
            "Failed to load global Test object");
    } else {
        console.log('failed to load page');
        phantom.exit(100);
    }
});
