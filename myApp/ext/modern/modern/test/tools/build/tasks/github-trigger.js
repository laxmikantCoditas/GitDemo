// Github Trigger : Find a pull request not processed by the Eye, merge the code,
// and execute the default an targets or those passed in the pr's comment.
// (See example at the end of the file)

GithubTrigger = function(options) {
    this.branch = options.branch;
    this.defaultTargets = options.targets || null;
    this.pr = options.pr;
    this.repo = options.repo;
    this.user = options.user;
    this.client = new GithubApiClientV3(options);
};

GithubTrigger.prototype = {
    
    isProcessedRe: /###\sEye:\sTesting/,
    
    parseDate: function(input) {
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])

        return new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4], parts[5]); // months are 0-based
    },
    isProcessed: function(pullRequest) {
        var me = this,
            processed = true,
            targets = null,
            comments, commits, array;
        
        if (pullRequest.base.ref != this.branch) {                                                                                                                                  
            return true;                                                                                                                                                  
        }   
        
        this.targets = this.defaultTargets;
        
 
        comments = this.client.getIssueComments(pullRequest.number);
        commits = this.client.getPullRequestCommits(pullRequest.number);
        
        array = [];
        
        commits.forEach(function(commit) {  
            array.push({                                                                                                                                                    
                type: 'Commit',                                                                                                                                           
                date: me.parseDate(commit.commit.author.date)                                                                                                           
            });                                                                                                                                                            
        });                                                                                                                                                               

        comments.forEach(function(comment) {    
            array.push({                                                                                                                                                    
                type: 'Comment',                                                                                                                                          
                date: me.parseDate(comment.updated_at),                                                                                                                       
                body: comment.body                                                                                                                                        
            });                                                                                                                                                          
        });                                                                                                                                                               

        // sort comments and commits by date, so if there is a new commit the pull request will be processed again
        array.sort(function(a,b) {                                                                                                                                          
            return (a.date < b.date) ? -1 : 1;                                                                                                                            

        });   
        
        array.forEach(function(item) {
            if (item.type == 'Commit' || 
               (item.body.match("EyE redo")) || 
               (targets = item.body.match(/EyE\srun\s(.*)/))) {                                                                                              
                processed = false;                                                                                                                                        
            }                                                                                                                                                             

            if (item.type == 'Comment' && item.body.match(me.isProcessedRe)) {         
                targets = null;
                processed = true;                                                                                                                                         
            }                                                                                                                                                             
        });    
        
        if (targets) {
            this.targets = targets[1].split(' ');
        }
            
        return processed;
    },
    
    getBuildUrl: function() {
        return getValueFromAttribute("teamcityserverurl", true) + "viewLog.html?buildId=" + getValueFromAttribute("teamcitybuildid", true) + "&tab=buildResultsDiv&buildTypeId=" + getValueFromAttribute("teamcitybuildtype", true) + '\n';
    },
        
    spawn: function(command) {
       echo(exec(command).output);
    },

    merge: function(pullRequest) {
        var number = pullRequest.number,
            user = pullRequest.user.login,
            repo = pullRequest.head.repo.name,
            branch = pullRequest.head.ref;

        echo("Merging " + pullRequest.number);

        this.spawn({
            app: "git", 
            args: ["remote", "add", "remote_" + user, "git@github.com:" + user + "/" + repo + ".git"],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["fetch", "remote_" + user],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["remote", "add", "remote_" + this.user, "git@github.com:" + this.user + "/" + this.repo + ".git"],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["fetch", "remote_" + this.user],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["branch", "-D", "PULL_REQUEST_" + number],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["checkout", "remote_" + user + "/" + branch, "-b", "PULL_REQUEST_" + number],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["branch", "-D", "CURRENT_"+ number],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["checkout", "remote_" + this.user + "/" + this.branch, "-b", "CURRENT_"+ number],
            failOnError: false
        });

        this.spawn({
            app: "git", 
            args: ["merge", "PULL_REQUEST_" + number],
            failOnError: false
        });


        echo("Merge done...");
    },

    run: function() {
        var me = this,
            client = me.client,
            pullRequests,
            length,
            i,
            pullRequest;

        if (me.pr > 0) {
            pullRequest = client.getPullRequest(me.pr);
            me.processPullRequest(pullRequest);
        } else {
            pullRequests = client.getOpenPullRequests().reverse();
            length = pullRequests.length;

            if (length == 0) {
                echo("GithubTrigger: No pull requests found. Exiting." )
            }

            for (i = 0; i < length; i++) {
                pullRequest = pullRequests[i];
                echo("GithubTrigger.run: Checking pull request #" + pullRequest.number);

                if (!me.isProcessed(pullRequest)) {
                    me.processPullRequest(pullRequest);
                    break;
                }
            }
        }
    },

    processPullRequest: function(pullRequest) {
        var me = this,
            message, error, report;

        echo('GithubTrigger.run: Processing ' + pullRequest.number);

        project.setProperty('github.pr', pullRequest.number);


        me.merge(pullRequest);

        var startDate = new Date();
        var message = "### Eye: Testing started at " + startDate + '.\n';
                
        message += "Build Log:\n";
        message += me.getBuildUrl();
        message += 'Will run the following ant targets: ' + me.getTargets().join(', ');

        me.client.postIssueComment(pullRequest.number, message);

        error = me.executeTargets();

        report = project.getProperty("eye.report");

        var duration = (new Date()).getTime() - startDate.getTime();
        var min = parseInt(duration/60000);
        message = "### Eye: Testing duration " + min + ' minutes.\n';
        message += "You can consult the TeamCity build result at:\n";
        message += me.getBuildUrl();

        if (report) {
            message += report;
        }

        if (error) {
            message += '\n### Build failed: ' + e + '\n';
        } else {
            message += '\n### Build successful.\n'
        }

        me.client.postIssueComment(pullRequest.number, message);

        if (error) {
            throw error;
        }
    },
       
    getTargets: function() {
        var i = 0,
            targets,
            length,
            array;
            
        
        if (!this.targets) {
            targets = elements.get('exectarget');
            length = targets.size();
            array = [];
            for (;i < length; i++) {
                array.push(targets.get(i).getRuntimeConfigurableWrapper().getAttributeMap().get('name') + '');
            }
        } else {
            array = this.targets;

        }

        return array;
    },
    
    getTargetsVector: function() {
        var i = 0,
            targets = this.getTargets(),
            length = targets.length,
            vector = new java.util.Vector();
                
        for (;i < length; i++) {
            vector.add(targets[i]);
        }
        
        return vector;
    },
    
    executeTargets: function(targets) {
        echo("Executing targets:");

        
        try {
            project.executeTargets(this.getTargetsVector());
        } catch(e) {
            return e;
        }
        
        echo("Targets executed.");
        return null;

    }
};

var repo = getValueFromAttribute('gitrepo', true);

var trigger = new GithubTrigger({
    token: getValueFromAttribute('githubtoken', true),
    user:  Github.extractUser(repo),
    repo: Github.extractRepo(repo),
    branch: getValueFromAttribute('gitbranch', true),
    pr: getValueFromAttribute('gitpr', true)
});

trigger.run();



/*
 * Example:
 */
//
//var trigger = new GithubTrigger({
//    token: 'a45fdcc34ef3d27e57eecb8c1c251d1fbd90e7c0',
//    user: 'extjs',
//    repo: 'SDK',
//    branch: 'extjs-4.1.1',
//    targets: ['css']
//});
//
//trigger.run();
//trigger.executeTargets();