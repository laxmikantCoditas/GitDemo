var path = require('path'),
    fs = require('fs'),
    exec = require('child_process').exec,
    resultDir = '/tmp/sencha-telemetry',
    perfDir = 'perf',
    submitData = require('./topcoat-server-master/lib/submitData'),
    // measurements = ["loading_timeline", "smoothness"],
    measurements = ["loading_timeline"],
    chromiumSrc = process.env.CHROMIUM_SRC || "";

module.exports = function(grunt) {
    'use strict';

    var device = grunt.option('device') || "unknown";
    var browser = grunt.option('browser') || "system";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            telemetry : {
                src: [resultDir],
                options: {
                    force: true
                }
            }
        },

        copy: {
            telemetry: {
                files: [{
                    expand: true,
                    cwd: perfDir,
                    src: ['**'],
                    dest: path.join(chromiumSrc, 'tools/perf/')
                }]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8060,
                    base: '../../../'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['telemetry']);
    grunt.registerTask('serve', ['connect']);

    grunt.registerTask('telemetry', 'Runs Sencha Telemetry Tests & Submits them through TopCoat', function() {    
        if (!chromiumSrc || chromiumSrc === "") {
            grunt.fail.warn("Please set the CHROMIUM_SRC env var to the root of your chromium sources(ends in /src)");
        } else {
            grunt.log.writeln("CHROMIUM_SRC points to " + chromiumSrc.cyan);
        }
        grunt.task.run("clean:telemetry", "copy:telemetry", "serve", "telemetry-run-tests", "telemetry-submit-sencha-results");
    });

    grunt.registerTask('telemetry-run-tests', 'Runs Telemetry on a Folder', function() {    
        grunt.file.mkdir(resultDir);
        var me = this,
            done = me.async(),
            loops = 0,
            maxLoops = 10;
            
        var cmd, out, basename,
            setsPath = path.join(process.cwd(), perfDir, "page_sets"),
            files = fs.readdirSync(setsPath),
            tests = [], test;
        
        files.forEach(function (item) {
            measurements.forEach(function(measurement) {
                tests.push({filename: item, measurement:measurement});
            });
        });

        +function processQueue() {
            test = tests.shift();
            if(test) {
                basename = test.filename.split(".").shift();
                cmd = "cd " + chromiumSrc + "/tools/perf;./run_measurement --browser="+browser+" "+test.measurement+" --output-format=csv --allow-live-sites page_sets/" + test.filename + " -o " + resultDir + "/"+test.measurement+"_benchmark_"+basename+".txt";
                exec(cmd, function(error, stdout, stderr){
                    if(error) {
                        grunt.log.error(stderr.red);
                    }else {
                        grunt.log.ok(("Ran " + basename + ": " + test.measurement).cyan);
                    }
                    processQueue();
                });
            }else {
                grunt.log.ok("All Tests Processed");
                done();
            }
        }()
    });

    grunt.registerTask('telemetry-submit-sencha-results', 'Submits All results to the Topcoat Server', function() {    
        var commandToBeExecuted = 'git log --pretty=format:"%H %ci" | head -n 1',
            done = this.async(), gitdate;

        exec(commandToBeExecuted, {}, function(error, stdout, stderr) {
            gitdate = stdout;
            submit();
        });

        function submit() {
            var test, size, files = [], file;

            grunt.file.recurse(resultDir, function callback(abspath, rootdir, subdir, filename) {
                files.push({filename:filename, abspath:abspath});
            });

            +function processQueue() {
                file = files.shift();
                if(file) {
                    test = file.filename.split(".").shift();
                    size = fs.readFileSync(file.abspath).length;
                    
                    if(size > 0) {
                        grunt.log.ok(("Submitting: " + device + " : " + test).cyan);
                        submitData(gitdate, file.abspath, {device:device, test:test}, {host:null, post:null}, processQueue);
                    } else {
                        grunt.log.error(("Not Submitting: " + device + " : " + test + " returned no results").red);
                        processQueue();
                    } 
                }else {
                    grunt.log.ok("Results submitted");
                    done();
                }
            }()
        }
    });

    function execute(command, callback){
        exec(command, function(error, stdout, stderr){ callback(stdout); });
    };
};
