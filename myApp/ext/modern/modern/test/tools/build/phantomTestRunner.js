if (phantom.state.length === 0) {
    if (phantom.args.length !== 1) {
        console.log('Usage: run-jasmine.js URL');
        phantom.exit();
    } else {
        phantom.state = 'run-jasmine';
        phantom.open(phantom.args[0]);
    }
} else {
    (function () {
        var count = 0;
        var timer = window.setInterval(function () {
            count++;
            if (typeof Test == 'undefined') {
                if (count >= 100) {
                    clearInterval(timer);
                    console.log("failed to detect global 'Test' object -> check sdk.root.url ant property");
                    phantom.exit(1);
                }
                return;
            }

            var reporter = Test && Test.SandBox && Test.SandBox.phantomReporter;
            if (reporter && reporter.complete) {
                var results = reporter.specResults,
                    rl = results.length,
                    specResult, items, failedItems, result, r,
                    failedSpecs = [], f, fl, fs,
                    item, i, il,
                    logitem, suites,
                    total = 0,
                    failed = 0,
                    disabled = 0;

                for (r=0;r<rl;r++) {
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
                            var suite = result.suite;
                            while (suite) {
                                suites.push(suite.description);
                                suite = suite.parentSuite;
                            }

                            il = items.length;
                            for (i=0;i<il;i++) {
                                item = items[i];
                                if (!item.passed_) {
                                    failedItems.push(item);
                                }
                            }
                            logitem = {
                                items: failedItems,
                                time: result.time,
                                id: result.id,
                                location: suites.reverse(),
                                description: result.description
                            };
                            failedSpecs.push(logitem);
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
                phantom.exit(failed);
            }
            if (count > 10 * 60 * 20) {
                clearInterval(timer);
            }

        }, 100);
    })();
}

