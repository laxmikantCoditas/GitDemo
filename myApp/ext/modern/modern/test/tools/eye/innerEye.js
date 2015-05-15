/**
 * @class InnerEye
 * Compares the rendered output of a set of .html files inside a given directory to references images of the same files
 */
InnerEye = function(config) {
    for (var key in config) {
        this[key] = config[key];
    }
};

InnerEye.extend = function(config) {
    for (var key in config) {
        InnerEye.prototype[key] = config[key];
    }
};

InnerEye.extend({
    eyePath: './test/eye/',
    examplesPath: 'examples',
    testUiPath: 'test/ui',
    testIssuesPath: 'test/issues',
    baseUrl: 'http://ed.local/extjs/sdk/SDK/extjs/',
    
    takeReferences: false,
    
    executeAll: function() {
        // this.execute(this.testIssuesPath);
        this.execute(this.testsDir);
    },
    
    /**
     * Captures screenshots for a set of examples, compares the screenshots against the reference images and returns 
     * any that differ
     * @param {String} dir The directory of test cases to run
     */
    execute: function(dir) {
        var examples  = this.scanDirectory(dir),
            length    = examples.length,
            startTime = new Date().getTime(),
            changed   = [],
            me = this,
            example;

        system.print("Capturing " + length + " test cases");

        examples.forEach(function(example, i) {
            var escapedPath   = example.split(" ").join("-"),
                snapshotUrl   = 'snapshots/' + escapedPath + '.png',
                referenceUrl  = 'references/' + escapedPath + '.png',
                snapshotPath  = me.eyePath + 'snapshots/' + escapedPath + '.png',
                referencePath = me.eyePath + 'references/' + escapedPath + '.png',
                percentage    = Math.round(100 * (i + 1) / length),
                percentageStr = "(" + percentage + "% complete)";
            
            system.execute('phantomjs ./test/eye/screenGrab.js "' + example + '" ' + i + " " + length);
            
            if (me.takeReferences) {
                //make sure there is a folder present to copy the reference image into
                system.execute('mkdir -p ' + referencePath.split('/').slice(0, -1).join('/'));
                
                system.execute('cp ' + snapshotPath + ' ' + referencePath);
            } else {
                try {
                    var reference = me.getFileMD5(referencePath),
                        snapshot  = me.getFileMD5(snapshotPath);
                        
                } catch(e) {
                    system.print("\033[1m\033[37;41mComparison Failed: " + example);
                    system.print("    ===> UNABLE TO COMPARE " + example + " TO REFERENCE");
                    system.print("    " + e);
                    system.print(":\033[0m");
                }
            }
            
            if (reference != snapshot) {
                system.print("\033[1m\033[37;31mComparison Failed: " + example + " " + percentageStr + "\033[0m");
                
                changed.push({
                    example: example,
                    referencePath: referenceUrl,
                    snapshotPath: snapshotUrl
                });
            } else {
                var success = me.takeReferences ? 'Reference Saved' : 'Test Case Passed';
                
                system.print("\033[1m\033[37;32m" + success + ": " + escapedPath + " " + percentageStr + "\033[0m");
            }
        });

        system.print("Captured " + length + " examples in " + ((new Date().getTime() - startTime) / 1000) + " seconds");
        
        if (!me.takeReferences) {
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
        }
    },
    
    /**
     * Calculates the MD5 of the contents of a file
     * @param {String} fileName The name of the file to MD5
     * @return {String} The MD5 value
     */
    getFileMD5: function(fileName) {
        //the implementation is sadly absurd. I haven't been able to get a return value out of system.execute so had
        //to write the result out to a temporary file :)
        
        var tempFileName = 'tempfile.md5';

        system.execute('md5 -q ' + fileName + ' > ' + tempFileName);

        var stream = fs.open(tempFileName),
            contents = stream.readLine();

        stream.close();
        system.execute('rm ' + tempFileName);

        return contents;
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
    testsDir: system.args[1]
}).executeAll();
