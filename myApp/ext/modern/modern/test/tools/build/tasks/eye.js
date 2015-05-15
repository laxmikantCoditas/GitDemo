importPackage(org.apache.commons.httpclient);
importPackage(org.apache.commons.httpclient.methods);
importPackage(org.apache.commons.httpclient.methods.multipart);


(function () {
    EyeClient = function(config) {
        var me = this,
            repo;
        applyTo(me, config);

        me.host = getValueFromAttribute('eyeurl', true);
        me.session = getValueFromAttribute('eyesession', true);

        repo = getValueFromAttribute('gitrepo');

        if (repo) {
            repo += '';
            var pr = project.getProperty('github.pr');
            
            me.githubUser = Github.extractUser(repo);
            me.githubRepo = Github.extractRepo(repo);
            me.githubBranch = getValueFromAttribute('gitbranch', true); 
            me.githubPr = pr ? pr + '' : null;
        }
        
        var performanceReportOutput = getValueFromAttribute('performancereportoutput');

        if (performanceReportOutput) {
            me.performanceReportOutput = performanceReportOutput;
        }
        
        var testReportOutput = getValueFromAttribute('testreportoutput');

        if (testReportOutput) {
            me.testReportOutput = testReportOutput;
        }
        
        me.reportFolder = getValueFromAttribute('reportdir', true);
        me.finishedRuns = {}
        me.reports = [];
        me.failure = false;
        me.visualTestsFailures = 0;
        me.jasmineTestsFailures = 0;
        me.systemErrors = 0;
        me.performanceTestsFailures = 0;
        me.javascriptErrors = 0;

        me.mapTests(elements.get('test'));
        
        me.createZipArchive(elements.get('fileset'));
        me.uploadZipArchive();
        me.waitToComplete();
        me.printResults();
        return me;
    };

    EyeClient.prototype = {

        // get current git hash
        getCurrentHash: function() {
            return exec('git', ['log', '-1', '--format=%H']).output + '';
        },

        // map the <test> tags to an array
        mapTests: function(els) {
            var elsLength = els.size(),
                tests = [],
                i = 0,
                wrap,
                next,
                children,
                testMap,
                browserMap,
                test;


            for (; i < elsLength; i++) {
                wrap = els.get(i).getRuntimeConfigurableWrapper();
                testMap = els.get(i).getRuntimeConfigurableWrapper().getAttributeMap();

                test = {
                    name: testMap.get('name') + '',
                    kind: testMap.get('kind') + '',
                    gitCommit: this.getCurrentHash(),
                    autoCreateReference: true,
                    priority: 1
                };

                if (this.githubUser) {
                    echo("github user: " + this.githubUser);
                    test.githubUser = this.githubUser;
                }
                
                if (this.githubRepo) {
                    echo("github repo: " + this.githubRepo);
                    test.gitRepo = this.githubRepo;
                }
                
                if (this.githubBranch) {
                    echo("github branch: " + this.githubBranch);
                    test.gitBranch = this.githubBranch;
                }
                
                if (this.githubPr) {
                    echo("github pull request: " + this.githubPr);
                    test.githubPullRequest = this.githubPr;
                }
                
                    
                if (testMap.get('samples')) {
                    test.samples = parseInt(testMap.get('samples') + '', 10);
                }

                if (testMap.get('tag')) {
                    test.tag = testMap.get('tag')+ '';
                }
                
                if (testMap.get('compareWithTag')) {
                    test.compareWithTag = testMap.get('compareWithTag')+ '';
                }

                if (testMap.get('injectedScript')) {
                    test.injectedScript = testMap.get('injectedScript') + '';
                }

                test.browsers = [];

                test.urls = [];
                
                children =  wrap.getChildren();
                for (; children.hasMoreElements() ;) {
                    next = children.nextElement();
                    if (next.getElementTag() == 'browser') {
                        browserMap = next.getAttributeMap();
                        test.browsers.push({
                            name: browserMap.get('name') + '',
                            version: browserMap.get('version')  + ''
                        });
                
                        if (browserMap.get('cpu')) {
                            test.browsers[test.browsers.length - 1].cpu = browserMap.get('cpu') + '';
                        }
                    }

                    if (next.getElementTag() == 'url') {
                        test.urls.push(next.text + '');
                    }
                }      

                tests.push(test);
            }
            tests.reverse();
            this.tests = tests;
        },

        // HTTP GET + Json decode
        getJson: function(url) {
            var client = new HttpClient(),
                method = new GetMethod(this.host + url + '?session=' + this.session),
                status = client.executeMethod(method), 
                json;

            if(status != -1) {
                json = method.getResponseBodyAsString();
                method.releaseConnection();
                return JSON.decode(json);
            } else {
                self.fail("EyeClient.getJson: Url Not Found");
            }
        },

        downloadTestReport: function(id, file) {
             var client = new HttpClient(),
                method = new GetMethod(this.host + 'Runs/' + id + '/junit_report.xml?session=' + this.session),
                status = client.executeMethod(method), 
                html;

            if(status != -1) {
                html = method.getResponseBodyAsString();
                method.releaseConnection();
                writeFile(file + '', html + '');
                return true;
            } else {
                self.fail("EyeClient.downloadTestReport: Url Not Found");
            }
        },
        
        downloadPerformanceReport: function(id, file) {
             var client = new HttpClient(),
                method = new GetMethod(this.host + 'Runs/' + id + '/performance_report?session=' + this.session),
                status = client.executeMethod(method), 
                html;

            if(status != -1) {
                html = method.getResponseBodyAsString();
                method.releaseConnection();
                writeFile(file + '', html + '');
                return true;
            } else {
                self.fail("EyeClient.downloadPerformanceReport: Url Not Found");
            }
        },
        
        // Echo the team city test report
        printTeamCityReport: function(run) {
            echoWithTime('Printing TeamCity report for ' + run.name + '...');
            var client = new HttpClient(),
                method = new GetMethod(this.host + 'Runs/' + run._id + '/teamcity_messages?session=' + this.session),
                status = client.executeMethod(method), 
                stream, buffer, str;

            if(status != -1) {
                stream = new InputStreamReader(method.getResponseBodyAsStream());
                
                buffer = new BufferedReader(stream);
                str = '';
                while(((str = buffer.readLine()) != null)) {
                    echo(str)
                }
      
                method.releaseConnection();
            } else {
                self.fail("EyeClient.printTeamCityReport: Url Not Found");
            }
       
        },
        
        // Prepare the multipart before uploading the zip archive
        getMultiParts: function() {
            return [new StringPart('runs', JSON.encode(this.tests)), new FilePart('zip', this.zip)];
        },

        // Upload the zip archive into the eye with the appropriate tests configuration
        uploadZipArchive: function() {
            echoWithTime('Upload Zip archive...');
            var client = new HttpClient(),
                method = new PostMethod(this.host + 'Runs/create_with_zip' + '?session=' + this.session),
                parts = this.getMultiParts(),
                reqEntity = new MultipartRequestEntity(parts, method.getParams()),
                status, json, resp;
            method.setRequestEntity(reqEntity);
            status = client.executeMethod(method);

            if(status != -1) {
                json = method.getResponseBodyAsString();
                method.releaseConnection();
                echoWithTime('Zip archive uploaded...');
                resp = JSON.decode(json);
                if (resp.success != true) {
                    self.fail("EyeClient.uploadZipArchive: " + resp.error.message);
                }
                this.runs = resp.data;
            } else {
                self.fail("EyeClient.uploadZipArchive: Url Not Found");
            }
        },

        // create the zip archive based on the <fileset>
        createZipArchive: function(filesets) {
            var task = project.createTask('zip'),
                length = filesets.size(),
                i = 0;

            echoWithTime('Creating zip archive...');
            this.zip = new File(getValueFromAttribute('zip', true));

            task.setDestFile(this.zip);

            for(; i < length; i++) {
                task.addZipfileset(filesets.get(i));
            }

            task.execute();
            echoWithTime('Zip archive created');
        },

        // Print final result
        printResults: function() {   
            var details = '',
                report,
                message;
                
            if (this.visualTestsFailures) {
                details += 'There is ' + this.visualTestsFailures + ' visual tests failure(s).\n';
            }
            if (this.javascriptErrors) {
                details += 'There is ' + this.javascriptErrors + ' javascript error(s).\n';
            }
            if (this.jasmineTestsFailures) {
                details += 'There is ' + this.jasmineTestsFailures + ' jasmine tests failure(s).\n';
            }
            if (this.systemErrors) {
                details += 'There is ' + this.systemErrors + ' system error(s).\n';
            }
            if (this.performanceTestsFailures) {
                details += 'There is ' + this.performanceTestsFailures + ' performance tests failure(s).\n';
            }

            message = details + this.reports.join('\n') + '\n';
            if (this.failure) {
                message = 'The tests ran in the eye have failed.\n' + message;
            } else {
                message = 'The tests ran in the eye have completed without any issue.\n' + message;
                
            }

            report = project.getProperty('eye.report') || '';

            project.setProperty('eye.report', report + message);
            
            echo(message);
        },

        // each time a tash finish we update global properties
        onRunFinish: function(run) {
            var me = this;
            me.visualTestsFailures += run.visualTestsFailures;
            me.jasmineTestsFailures += run.jasmineTestsFailures;
            me.systemErrors += run.systemErrors;
            me.javascriptErrors += run.javascriptErrors;
            me.performanceTestsFailures += run.performanceTestsFailures;

            me.reports.push('\n##### ' + run.name + ': ');
            
            if (run.kind == 'visual') {
                if (me.testReportOutput) {
                    me.downloadTestReport(run._id, me.testReportOutput);
                }
                me.reports.push(me.host + "#t-main#runvis#g-runs#" + run._id);
            } else {
                if (me.performanceReportOutput) {
                    me.downloadPerformanceReport(run._id, me.performanceReportOutput);
                }
                me.reports.push(me.host + "#t-main#runperf#g-runs#" + run._id);
            }
            
            me.reports.push('* ' +  run.visualTestsFailures + ' Visual Tests Failure(s).');
            me.reports.push('* ' +  run.jasmineTestsFailures + ' Jasmine Tests Failure(s).');
            me.reports.push('* ' +  run.javascriptErrors + ' Javascript error(s).');
            me.reports.push('* ' +  run.performanceTestsFailures + ' Performance Tests Failure(s).');
            me.reports.push('* ' +  run.systemErrors + ' System Error(s).');
            
            if (getValueFromAttribute('teamcityoutput')){
                me.printTeamCityReport(run);
            }
            if (run.jasmineTestsFailures > 0 || 
                run.visualTestsFailures > 0 ||
                run.performanceTestsFailures > 0 ||
                run.javascriptErrors > 0 ||
                run.systemErrors > 0) {
                this.failure = true;
            }
        },

        // check if a Run is in state == 'Done'
        isRunDone: function(run) {
            if (this.finishedRuns[run._id]) {
                return true;
            }

            var response = this.getJson('Runs/' + run._id),
                t;

            if (response.success == false) {
                self.fail("EyeClient.isRunDone: Unable to find the run " + run.name);
            }

            t = response.data;
            if (t.state == 'done') {
                this.onRunFinish(t);
                this.finishedRuns[t._id] = true;
                echoWithTime(t.name + ' has completed.');
                return true;
            }
            return false;
        },

        // Wait for a run to complete (indefinitely, the timeout is handled by the eye)
        // and if a connexion timeout occur the build will fail anyway
        waitToComplete: function() {
            var i, allDone;
            echoWithTime('Waiting for tests to complete...');
            while(true) {
                Thread.sleep(10000);
                allDone = true;
                for (i = 0; i < this.runs.length; i++) {
                    allDone = allDone && this.isRunDone(this.runs[i]);
                }
                if (allDone) {
                    echoWithTime('Tests completed');
                    return;
                }
            }

        }

    };

    new EyeClient();

})();