importPackage(org.apache.commons.httpclient);
importPackage(org.apache.commons.httpclient.methods);
importPackage(org.apache.commons.httpclient.auth);

GithubExternalTrigger = function(options) {
    this.branch = options.branch;
    this.defaultTargets = options.targets || null;
    this.repo = options.repo;
    this.user = options.user;
    this.client = new GithubApiClientV3(options);
    this.teamcityServerUrl = options.teamcityServerUrl;
    this.teamcityBuildType = options.teamcityBuildType;
    this.teamcityUser = options.teamcityUser;
    this.teamcityPassword = options.teamcityPassword;
};

GithubExternalTrigger.prototype = {
    
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
                date: me.parseDate(commit.commit ? commit.commit.author.date : commit.author.date)
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

    run: function() {
        var githubHttpClient = this.client,
            teamcityHttpClient = new HttpClient(),
            credentials = new UsernamePasswordCredentials(this.teamcityUser, this.teamcityPassword),
            getRunningBuilds = new GetMethod(this.teamcityServerUrl + "/httpAuth/app/rest/builds?locator=running:true,buildType:" + this.teamcityBuildType),
            getTriggerBuild,
            status, json, runningBuildsCount,
            pullRequests, pullRequestsLength, pullRequest, i, teamcityHostAndPort;

        teamcityHostAndPort = this.teamcityServerUrl.replace("http://", "").split(":");
        teamcityHttpClient.getParams().setAuthenticationPreemptive(true);
        teamcityHttpClient.getState().setCredentials(new AuthScope(teamcityHostAndPort[0], teamcityHostAndPort[1] ? teamcityHostAndPort[1] : 80, AuthScope.ANY_REALM), credentials);

        getRunningBuilds.addRequestHeader("Accept", "application/json");

        teamcityHttpClient.executeMethod(getRunningBuilds);
        runningBuildsCount = JSON.decode(getRunningBuilds.getResponseBodyAsString()).count;
        getRunningBuilds.releaseConnection();

        if (runningBuildsCount) {
            echo("GithubExternalTrigger: Build already running");
            return;
        }

        pullRequests = githubHttpClient.getOpenPullRequests().reverse();
        pullRequestsLength = pullRequests.length;

        for (i = 0; i < pullRequestsLength; i++) {
            pullRequest = pullRequests[i];
            echo("GithubExternalTrigger.run: Checking pull request #" + pullRequest.number);

            if (!this.isProcessed(pullRequest)) {
                echo("GithubExternalTrigger: Triggering TeamCity build");
                getTriggerBuild = new GetMethod(this.teamcityServerUrl + "/httpAuth/action.html?add2Queue=" + this.teamcityBuildType + '&name=pr&value=' + pullRequest.number);
                status = teamcityHttpClient.executeMethod(getTriggerBuild);
                echo(status);

                getTriggerBuild.releaseConnection();
                return;
            }
        }

        echo("GithubExternalTrigger: No new/updated pull request found");
    }

};

var repo = getValueFromAttribute('gitrepo', true);

var trigger = new GithubExternalTrigger({
    token: getValueFromAttribute('githubtoken', true),
    user:  Github.extractUser(repo),
    repo: Github.extractRepo(repo),
    branch: getValueFromAttribute('gitbranch', true),
    teamcityServerUrl: getValueFromAttribute('teamcityserverurl', true),
    teamcityBuildType: getValueFromAttribute('teamcitybuildtype', true),
    teamcityUser: getValueFromAttribute('teamcityuser', true),
    teamcityPassword: getValueFromAttribute('teamcitypassword', true)
});

trigger.run();