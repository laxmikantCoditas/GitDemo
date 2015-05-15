//THIS IS HACKY AND PROBABLY REDUNDANT GIVEN NICO HAS ALREADY DONE IT!~!!112one

var address = 'http://ed.local/extjs/sdk/SDK/extjs/test/unit/index.html';

if (phantom.state.length === 0) {
    phantom.state = Date.now().toString();
    phantom.open(address);
} else {
    if (phantom.loadStatus === 'success') {
        var reporter = Test.SandBox.reporter,
            queue;
        
        //wait 2 seconds for initial load, then poll for results
        setTimeout(function() {
            console.log('Running tests...');
            
            var poller = setInterval(function() {
                //reporter.runner.queue isn't available immediately after page load so we have to 
                //get a reference to it later
                queue = reporter.runner.queue;
                
                function isFinished() {
                    return queue.index == queue.blocks.length;
                }
                
                //Getting useful data out of Jasmine is like getting blood from a stone. For some reason it seems to
                //collect each failure twice but I can't figure out why so this just hacks away the duplicates :/
                function gatherFails(item, fails) {
                    var fails = fails || [],
                        children = item.children ? item.children() : [],
                        length   = children.length,
                        i;

                    if (length) {
                        for (i = 0; i < length; i++) {
                            gatherFails(children[i], fails);
                        }
                    } else {
                        if (item.description && item.results().failedCount > 0) {
                            var fullName = item.getFullName();
                            
                            if (fails.indexOf(fullName) == -1) {
                                fails.push(fullName);
                            }
                        }
                    }
                    
                    return fails;
                }

                if (isFinished()) {
                    clearInterval(poller);
                    
                    var fails = gatherFails({
                        children: function() {
                            return reporter.runner.suites();
                        }
                    });
                    
                    var failCount = fails.length;

                    if (fails) {
                        console.log("\033[1m\033[37;41m" + failCount + " test failure" + (failCount == 1 ? "" : "s") + ":\033[0m");
                        
                        fails.forEach(function(fail) {
                            console.log("    * " + fail);
                        });
                        console.log("\033[0m");
                        phantom.exit(1);
                    } else {
                        console.log(reporter.runnedSpecsCount + " Passes, " + reporter.failedSpecsCount + " Failures");
                        phantom.exit(0);
                    }
                }
            }, 500);
        }, 2000);
    }
}
