importPackage(org.apache.commons.httpclient);
importPackage(org.apache.commons.httpclient.methods);

// Minimal Github API v3 client
// You can retrieve the list of open pull requests, any pull request, any comment or commit.
// You can comment a pr.
// That's it. (See example at the end of the file)

GithubApiClientV3 = function(options) {
    this.token = options.token;
    this.user = options.user;
    this.repo = options.repo;
};

GithubApiClientV3.prototype = {
    
    apiUrl: 'https://api.github.com/',
    
    paramifyRe: /&$/,
    
    paginationLimit: 100,
    
    paramify: function(params) {
        var str = "?", 
            key;
        for (key in params) {
            if (params.hasOwnProperty(key)) {
                str += key + "=" + encodeURIComponent(params[key]) + "&";
            }
        } 
        return str.replace(this.paramifyRe, "");
    },
        
    get: function(url, params) {
        var client = new HttpClient(),
            method = new GetMethod(this.apiUrl + url + this.paramify(params)),
            status, json, response;
            
        method.setRequestHeader("Authorization", "token " + this.token);
        status = client.executeMethod(method);
        
        if(status != -1) {
            json = method.getResponseBodyAsString();
            method.releaseConnection();
            try {
                response = JSON.decode(json);
            } catch(e) {
                self.fail("GithubApiClientV3.get: Unable to decode json.\nServer Response:\n" + json);
            }
            if (response && response.message) {
                self.fail("GithubApiClientV3.get: " + url + "\n.Error: " + response.message);
            }
            return response;
        } else {
            self.fail("GithubApiClientV3.get: Unable to process http request.");
        }
    },
     
    getOpenPullRequests: function(page) {
        if (!page) {
            page = 1;
            echo("GithubApiClientV3.getOpenPullRequests: Fetching open pull requests.");
        }
        
        var pullRequests = this.get("repos/" + this.user + "/" + this.repo + "/pulls", {
            state: 'open',
            page: page,
            per_page: this.paginationLimit
        });
        
        if (pullRequests.length % this.paginationLimit === 0 && pullRequests.length > 0) {
            pullRequests = pullRequests.concat(this.getOpenPullRequests(page + 1))
        }
        
        if (page == 1) {
            echo("GithubApiClientV3.getOpenPullRequests: " + pullRequests.length + ' open pull requests found.');
        }
        
        return pullRequests;
    },
    
    getPullRequest: function(number) {
        echo("GithubApiClientV3.getPullRequest: Fetching pull request #" + number + '.');

        var pullRequest = this.get("repos/" + this.user + "/" + this.repo + "/pulls/" + number);
  
        echo("GithubApiClientV3.getPullRequest: Pull request #" + number + ' received.');
        return pullRequest;
    },
    
    getPullRequestCommits: function(number, page) {
        if (!page) {
            page = 1;
            echo("GithubApiClientV3.getPullRequestCommits: Fetching pull request " + number + ' commits.');
        }
         
        var commits = this.get("repos/" + this.user + "/" + this.repo + "/pulls/" + number + "/commits", {
            page: page,
            per_page: this.paginationLimit
        });
  
        if (commits.length % this.paginationLimit === 0 && commits.length > 0) {
            commits = commits.concat(this.getPullRequestCommits(number, page + 1))
        }
        
        if (page == 1) {
            echo("GithubApiClientV3.getPullRequestCommits: " + commits.length + ' commits found.');
        }
        
        return commits;
    },
    
    getIssueComments: function(number, page) {
        if (!page) {
            page = 1;
            echo("GithubApiClientV3.getIssueComments: Fetching pull request " + number + ' comments.');
        }
         
        var comments = this.get("repos/" + this.user + "/" + this.repo + "/issues/" + number + "/comments", {
            page: page,
            per_page: this.paginationLimit
        });
  
        if (comments.length % this.paginationLimit === 0 && comments.length > 0) {
            comments = comments.concat(this.getIssueComments(number, page + 1))
        }
        
        if (page == 1) {
            echo("GithubApiClientV3.getIssueComments: " + comments.length + ' comments found.');
        }
        
        return comments;
    },
    
    post: function(url, body) {
        var client = new HttpClient(),
            method = new PostMethod(this.apiUrl + url),
            status, json, response;

        method.setRequestHeader("Authorization", "token " + this.token);

        method.setRequestEntity(new StringRequestEntity(JSON.encode(body), "application/json", "UTF-8")); 

        status = client.executeMethod(method);

        if(status != -1) {
            json = method.getResponseBodyAsString();
            method.releaseConnection();
            try {
                response = JSON.decode(json);
            } catch(e) {
                self.fail("GithubApiClientV3.post: Unable to decode json.\nServer Response:\n" + json);
            }
            if (response && response.message) {
                self.fail("GithubApiClientV3.post: " + url + "\n.Error: " + response.message);
            }
            return response;
        } else {
            self.fail("GithubApiClientV3.post: Unable to process http request.");
        }
    },
    
    postIssueComment: function(number, message) {
        echo("GithubApiClientV3.postIssueComment: Posting pull request #" + number + ' message.\n' + message);
        
        var pullRequest = this.post("repos/" + this.user + "/" + this.repo + "/issues/" + number + "/comments", {body: message});
  
        echo("GithubApiClientV3.postIssueComment: Comment posted.");
        return pullRequest;
    }
};

/*
 * Example:
 */ 

//var gh = new GithubApiClientV3({
//    token: 'a45fdcc34ef3d27e57eecb8c1c251d1fbd90e7c0',
//    user: 'extjs',
//    repo: 'SDK'
//});
//
//var prs = gh.getOpenPullRequests();
//
//
//gh.getPullRequest(prs[0].number);
//
//gh.getIssueComments(prs[0].number);
//
//gh.getPullRequestCommits(prs[0].number);
//
//
//gh.postIssueComment(prs[0].number, "TEST (ignore me)");

 
 