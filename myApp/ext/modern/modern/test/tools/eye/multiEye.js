/**
 * @class Worker
 * Represents a single virtualized Worker, which can run one screenshot command at a tie
 */
Worker = function(config) {
    for (var key in config) {
        this[key] = config[key];
    }
};

Worker.extend = function(config) {
    for (var key in config) {
        Worker.prototype[key] = config[key];
    }
};

Worker.extend({
    status: 'free',
    timeout: 15000,
    
    capture: function(testcase, callback, scope) {
        // system.print("STARTING CAPTURE OF " + testcase.path);
        this.testcase  = testcase;
        this.callback  = callback;
        this.scope     = scope;
        this.startTime = testcase.startTime = new Date().getTime();
        
        testcase.tmpPath = 'test/eye/tmp/' + testcase.path.split(" ").join("-") + '.png'; 
        
        this.ensureParentDir(testcase.tmpPath);
        system.execute('phantomjs ./test/eye/multiScreenGrab.js "' + testcase.path + '" ' + testcase.tmpPath + ' &');
        this.status = 'busy';
    },
    
    updateStatus: function() {
        var testcase = this.testcase,
            timedOut = new Date().getTime() - this.startTime > this.timeout;
        
        if (this.status == 'free') {
            return;
        } else if (timedOut) {
            system.print(this.testcase.path + " COULD NOT BE CAPTURED");
            this.callCallback();
        } else if (testcase && this.hasFinished()) {
            this.ensureParentDir(testcase.snapshotPath);
            system.execute("sleep 0.2");
            system.execute('mv ' + testcase.tmpPath + ' ' + testcase.snapshotPath);
            
            delete testcase.tmpPath;
            
            this.callCallback();
        }
    },
    
    callCallback: function() {
        var callback = this.callback,
            scope    = this.scope;
        
        this.status = 'free';
        this.testcase.endTime = new Date().getTime();
        
        if (callback) {
            delete this.callback;
            delete this.scope;
            
            callback.call(scope, this.testcase, this);
        }
    },
    
    hasFinished: function() {
        return fs.exists(this.testcase.tmpPath);
    },
    
    /**
     * Ensures that the given file can be created by ensuring that its parent directory is present first
     * @param {String} fileName The full name of the file that will be created
     */
    ensureParentDir: function(fileName) {
        system.execute('mkdir -p ' + fileName.split("/").slice(0, -1).join('/'));
    }
});

/**
 * @class TestCase
 * Represents a single TestCase to be executed
 */
TestCase = function(path) {
    var escapedPath = path.split(" ").join("-");
    
    this.success = false;
    this.path = path;
    this.snapshotUrl = 'snapshots/' + escapedPath + '.png';
    this.referenceUrl = 'references/' + escapedPath + '.png';
    this.snapshotPath = 'test/eye/snapshots/' + escapedPath + '.png';
    this.referencePath = 'test/eye/references/' + escapedPath + '.png';
};

/**
 * @class InnerEye
 * Compares the rendered output of a set of .html files inside a given directory to references images of the same files
 */
InnerEye = function(config) {
    for (var key in config) {
        this[key] = config[key];
    }
    
    this.queue = [];
    this.results = [];
    this.workers = [];
    for (var i = 0; i < this.processes; i++) {
        this.workers.push(new Worker({id: i}));
    }
    
    if (this.testDir) {
        this.addTestCasesFromDirectory(this.testDir);
    }
};

InnerEye.extend = function(config) {
    for (var key in config) {
        InnerEye.prototype[key] = config[key];
    }
};

function setTimeout(callback, milli) {
    system.execute('sleep ' + milli / 1000);
    callback();
}

InnerEye.extend({
    eyePath: './test/eye/',
    examplesPath: 'examples',
    testUiPath: 'test/ui',
    testIssuesPath: 'test/issues',
    baseUrl: 'http://ed.local/extjs/sdk/SDK/extjs/',
    processes: 16,
    total: 0,
    
    takeReferences: false,
    
    onTestCaseComplete: function(testcase, worker) {
        this.results.push(testcase);
        
        var examplePath = testcase.path,
            percentage = Math.round(100 * this.results.length / this.total),
            percentageStr = percentage + "%",
            reference, snapshot;
        
        // system.print('Worker ' + worker.id + ' finished capturing ' + testcase.path);
        
        // try {
        // system.execute("sleep 0.1");
        referenceMD5 = this.getFileMD5(testcase.referencePath);
        snapshotMD5  = this.getFileMD5(testcase.snapshotPath);
        
        // } catch(e) {
        //     system.print("\033[1m\033[37;41mComparison Failed: " + examplePath);
        //     system.print("    ===> UNABLE TO COMPARE " + examplePath + " TO REFERENCE");
        //     system.print("    " + e);
        //     system.print(":\033[0m");
        // }
        
        var me = this;
        
        if (referenceMD5 != snapshotMD5) {
            system.print("HUH?");
            // system.print('md5 -q ' + testcase.referencePath);
            // setTimeout(function() {
                system.print('md5 -q ' + testcase.referencePath);
                system.print('md5 -q ' + testcase.snapshotPath);
                system.execute('ls -l ' + testcase.referencePath);
                system.execute('ls -l ' + testcase.snapshotPath);
                
                system.print(me.getFileMD5(testcase.referencePath));
                system.print(me.getFileMD5(testcase.snapshotPath));
            // }, 2000);
            system.print(testcase.path + ": " + referenceMD5 + ", " + snapshotMD5);
            
            system.print("\033[1m\033[37;31mComparison Failed: " + examplePath + " " + percentageStr + "\033[0m");
        } else {
            testcase.success = true;
            var success = this.takeReferences ? 'Reference Saved' : 'Test Case Passed';

            system.print("\033[1m\033[37;32m" + success + ": " + examplePath + " " + percentageStr + "\033[0m");
        }
        
        this.workers.forEach(function(worker) {
            // system.print("Worker " + worker.id + ": " + worker.status);
        });
    },
    
    onQueueFinished: function() {
        var totalTime = (new Date().getTime() - this.startTime) / 1000,
            changed   = [];
        
        system.print(this.results.length + " results captured in " + totalTime + " seconds");
        
        this.results.forEach(function(result) {
            if (!result.success) {
                changed.push({
                    example: result.path,
                    snapshotPath: result.snapshotUrl,
                    referencePath: result.referenceUrl
                });
            }
        });

        var json = JSON.stringify({failures: changed}),
            file = fs.open('./test/eye/failures.json', 'w');

        file.writeLine(json);
        file.flush();
        file.close();

        system.print("");

        if (changed.length == 0) {
            system.print("\033[1m\033[37;32mAll Tests Passed\033[0m");
        } else {
            var error = changed.length + " Test" + (changed.length == 1 ? "" : "s") + " Failed";
            system.print("\033[1m\033[37;31m" + error + "\033[0m");
            system.execute('open ' + this.baseUrl + this.eyePath + 'results.html');
        }
    },
    
    addTestCase: function(testcase) {
        if (!(testcase instanceof TestCase)) {
            testcase = new TestCase(testcase);
        }
        
        this.queue.push(testcase);
        this.total++;
    },
    
    addTestCasesFromDirectory: function(dir) {
        var fileNames = this.scanDirectory(dir),
            me = this;
        
        fileNames.forEach(function(fileName) {
            me.addTestCase(fileName);
        });
    },
    
    getFreeWorkers: function() {
        return this.getWorkersInStatus('free');
    },
    
    getWorkersInStatus: function(status) {
        var matched = [];
        
        this.workers.forEach(function(worker) {
            if (worker.status == status) {
                matched.push(worker);
            }
        });
        
        return matched;
    },
    
    getBusyWorkers: function() {
        return this.getWorkersInStatus('busy');
    },
    
    updateWorkers: function() {
        this.workers.forEach(function(worker) {
            worker.updateStatus();
        });
    },
    
    execute: function() {
        var me = this,
            queue = this.queue,
            freeWorkers, busyWorkers;
        
        function process() {
            me.updateWorkers();
            freeWorkers = me.getFreeWorkers();
            
            //if we have jobs in the queue push them onto any free workers
            if (queue.length) {
                freeWorkers.forEach(function(worker) {
                    var nextTest = queue.shift();

                    if (nextTest) {
                        worker.capture(nextTest, me.onTestCaseComplete, me);
                    }
                });
            }

            //if nothing is running at this point it means we're done
            if (me.getBusyWorkers().length == 0) {
                if (me.onQueueFinished() !== false) {
                    system.exit();
                }
            } else {
                setTimeout(process, 200);
            }
        }
        
        this.startTime = new Date().getTime();
        process();
    },
    
    /**
     * Calculates the MD5 of the contents of a file
     * @param {String} fileName The name of the file to MD5
     * @return {String} The MD5 value
     */
    getFileMD5: function(fileName, tmpName) {
        //the implementation is sadly absurd. I haven't been able to get a return value out of system.execute so had
        //to write the result out to a temporary file :)
        
        var tempFileName = 'test/eye/tmp/tempfile.md5' + fileName.split("/").join("-");

        system.execute('md5 -q ' + fileName + ' > ' + tempFileName);

        var stream = fs.open(tempFileName),
            contents = stream.readLine();

        stream.close();
        system.execute('rm ' + tempFileName);

        return contents.split("\n")[0];
    },
    
    /**
     * Returns all files under a certain path that optionally match a matcher regex (only matching file names are 
     * returned)
     * @param {String} path The directory to start scanning in
     * @param {String/RegExp} matcher Regex to match each file against
     * @return {Array} All files matching the matcher regex
     */
    scanDirectory: function(path, matcher) {
        matcher = matcher || "\.html";
        var me = this,
            paths = [];

        //the charts/Live regex is a gentle hack required because we override new Date() in screenGrab.js and the 
        //live charting examples rely on being able to modify the date...
        if (fs.exists(path) && fs.isFile(path) && path.match(matcher) && ! path.match("charts\/Live")) {
            return path;
        } else {
            if (fs.isDirectory(path) && !path.match('app\/')) {
                fs.list(path).forEach(function(e) {
                    paths = paths.concat(me.scanDirectory(path + '/' + e));
                });
            }
        }

        return paths;
    }
});


new InnerEye({
    takeReferences: system.args[2] == 'references',
    testDir: system.args[1]
}).execute();
