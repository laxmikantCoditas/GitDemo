Ext.Loader.setPath({
    'Ext.ux': '../../examples/ux'
});

Ext.require([
    '*'
//    , 'Ext.ux.event.Player'
]);

// See /test/issues/4938.js for an example of a testCase

// Disable the error alert
Ext.Error.notify = false;

Ext.define('Ext.issue.Expectation', {
    constructor: function (owner, actual) {
        this.actual = actual;
        this.owner = owner;
    },

    statics: {
        addMatchers: function (matchers) {
            var me = this,
                wrapped = {};

            Ext.Object.each(matchers, function (name, matcher) {
                wrapped[name] = me.wrapMatcher(name, matcher);
            });

            me.override(wrapped);
        },

        wrapMatcher: function (name, matcherFn) {
            return function () {
                // in this method "this" is the Expectation instance
                var args = Ext.Array.slice(arguments),
                    result = matcherFn.apply(this, arguments),
                    lf = '\n',
                    message;

                if (typeof result == 'boolean') {
                    if (!result) {
                        message = ['Expected ', 
                            Ext.JSON.encodeValue(this.actual, lf), ' ',
                            name.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); }),
                            ' '
                        ];

                        if (args.length > 1) {
                            message.push(Ext.JSON.encodeValue(args, lf));
                        } else {
                            message.push(Ext.JSON.encodeValue(args[0], lf));
                        }

                        message = message.join('');
                    }

                    this.owner.addResult({
                        name: name,
                        passed: result,
                        actual: this.actual,
                        expected: (args.length > 1) ? args : args[0],
                        message: message
                    }, this);
                } else {
                    this.owner.addResult(result, this);
                }
            };
        }
    }
},
function () {
    this.addMatchers({
        toEqual: function (expected) {
            return this.actual == expected;
        }
    });
});

Ext.define('Ext.issue.Manager', {
    singleton: true,

    // should match bootstrap.js in / and in /extjs/test/unit
    cacheBust: (/[?&](?:cache|disableCacheBuster)\b/i.test(location.search) ||
                /(^|[ ;])ext-cache=1/.test(document.cookie)) ? '' : ('?_dc=' + (+new Date)),

    failCount: 0,
    passCount: 0,

    constructor: function () {
        var testId = this.hasOption('id');

        if (!testId) {
            testId = window.location.search;
            if (!/^\d+$/.test(testId)) {
                this.help();
                return;
            }
        }

        this.testId = testId;
        this.visualTest = this.hasOption('visual');

        this.updateTitle();
        if (this.hasOption('decor')) {
            this.addDecorations();
        }

        this.loadCSS(testId + '.css');
        this.loadJS(testId + '.js');

        Ext.onReady(this.run, this);
    },

    addDecorations: function () {
        var url = location.href,
            otherDocMode;

        document.write('<a href="' + url + '" class="issueVersion">' + this.title + '</a>');

        if (url.indexOf('issue.html') < 0) {
            otherDocMode = url.replace(/issue\-nodoctype\.html/, 'issue.html');
        } else {
            otherDocMode = url.replace(/issue\.html/, 'issue-nodoctype.html');
        }

        document.write('<a href="' + otherDocMode + 
                '" class="issueVersion modeLink">(Open in ' + (Ext.isStrict ? 'Quirks' : 'Strict') +
                ')</a>');

        document.write('<div class="status">'+
                '<b id="_status">Running...</b>&nbsp;&nbsp;' +
                (this.visualTest ? '' : '<b id="_pass" class="pass">?</b>&nbsp;') +
                '<b id="_fail" class="fail">-</b>' +
            '</div>');
    },

    addResult: function (result) {
        if (result.passed) {
            ++this.passCount;
        } else {
            ++this.failCount;
        }

        Ext.fly('_fail').dom.innerHTML = this.failCount;

        if (!this.visualTest) {
            Ext.fly('_pass').dom.innerHTML = this.passCount;
        }
    },

    expect: function (value) {
        return new Ext.issue.Expectation(this, value);
    },

    hasOption: function (opt) {
        var s = window.location.search;
        var re = new RegExp('(?:^|[&?])' + opt + '(?:[=]([^&]*))?(?:$|[&])', 'i');
        var m = re.exec(s);

        return m ? (m[1] === undefined ? true : m[1]) : false;
    },

    getOptionNumber: function (opt, def) {
        var v = this.hasOption(opt);
        if (v === false) {
            return def;
        }
        return parseInt(v, 10);
    },

    help: function () {
        document.write('<h1>Append "?id=<ticket number>" to URL and reload</h1>'
            + '<iframe onload="Ext.issue.Manager.setupFrame()" id="issuesFrame" height="1000" width="100%" src="'
                + String(location).split('/').reverse().slice(1).reverse().join('/')
                + '?C=M;O=D"></iframe>');
    },

    loadCSS: function (url) {
        document.write('<link rel="stylesheet" type="text/css" href="'+url+this.cacheBust+'"/>');
    },

    loadJS: function (url) {
        Ext.Loader.loadScript(url);
    },

    onDone: function (testCase) {
        this.done = true;

        var status = Ext.fly('_status');
        if (status) {
            status.setStyle(this.failCount ? {
                    backgroundColor: 'red',
                    color: 'white'
                }: {
                    backgroundColor: '#0f0'
                }).dom.innerHTML = (this.failCount ? 'Fail' : 'Pass');
        }

        if (testCase.onDone) {
            testCase.onDone();
        }
    },

    run: function () {
        var me = this,
            testCase = Ext.global.testCase;

        if (me.hasOption('nocss3')) {
            Ext.supports.CSS3BorderRadius = false;
            Ext.getBody().addCls('x-nbr x-nlg');
        }

        if (!testCase) {
            me.runLegacy();
            return;
        }

        testCase.manager = me;
        testCase.run();

        if (testCase.events) {
            me.player = new Ext.ux.event.Player({
                eventQueue: testCase.events,
                eventScope: testCase,
                listeners: {
                    stop: function () {
                        me.onDone(testCase);
                    }
                }
            });

            me.player.start();
        } else {
            me.onDone(testCase);
        }
    },

    runLegacy: function () {
        var global = Ext.global,
            config = global.CONFIG || global.config;

        if (typeof config == 'function') {
            config = config();
        }

        if (config) {
            this.container = new Ext.Container({
                renderTo: Ext.getBody(),
                autoScroll: true,
                items: Ext.Array.from(config),
                listeners: {
                    afterrender: function() {
                        var afterrender = global.afterRender || global.afterrender;

                        // Define global vars for debugging
                        global.instance = (global.instances = this.items.items)[0];

                        if (afterrender) {
                            afterrender.apply(this, arguments);
                        }
                    }
                }
            });
        }
    },

    setupFrame: function () {
        issuesFrame.document.head.innerHTML += '<base target=_top>';
        issuesFrame.document.onclick = function(event) {
            if (!event) {
                event = window.event;
            }

            var path = event.target.pathname,
                ret;

            if (path) {
                path = path.split('/').splice(-1)[0];
                var extension = path.split('.')[1];
                if (extension == 'js') {
                    location.search = 'id=' + path.split('.')[0];
                    ret = false;
                }
            }

            return ret;
        }
    },

    updateTitle: function () {
        var me = this,
            title = [ me.testId ];

        if (Ext.isIE) {
            title.push('IE' + Ext.ieVersion);
        }

        title.push(Ext.isStrict ? 'Strict' : 'Quirks');

        if (!this.visualTest) {
            title.push(
                '(', Ext.versions.extjs.version, ')',
                String(new Date()).split(':').splice(0,2).join(':'));
        }

        me.title = title.join(' ');

        // Show it in the titlebar/tab too
        setTimeout(function(){
            document.title = me.title;
        }, 100);
    }
});

/*

TODO - for reference until the above version is deemed solid... then remove from here down

(function(){

// get the issue number
var match = /^\?([^=]+)$|\bid=([^&]+)/.exec(location.search),
    testCase = match && decodeURIComponent(match[1] || match[2]),
    otherDocMode;

window.setupIssuesFrame = function(){
    issuesFrame.document.head.innerHTML += '<base target=_top>';
    issuesFrame.document.onclick = function(event) {
        if (!event) {
            event = window.event;
        }
        var path = event.target.pathname;
        if (!path) {
            return;
        }
        path = path.split('/').splice(-1)[0];
        var extension = path.split('.')[1];
        if (extension != 'js') {
            return;
        }
        location.search = 'id=' + path.split('.')[0];
        return false;
    }
}

if (!testCase) {
    document.write('<h1>Append "?ticket" to URL and reload</h1>'
        + '<iframe onload="setupIssuesFrame()" id=issuesFrame height=1000 width="100%" src="'
        + String(location).split('/').reverse().slice(1).reverse().join('/')
        + '?C=M;O=D"></iframe>');
    return;
}

// Load testCase
var cacheBust = '';//'?' + +new Date();
document.write('<link rel="stylesheet" type="text/css" href="'+ testCase + '.css' + cacheBust + '"/>');
document.write('<script src="'+ testCase +'.js' + cacheBust + '"></script>');


// Title
var title = [
    testCase,
    '(' + Ext.versions.extjs.version + ')',
    String(new Date()).split(':').splice(0,2).join(':')
];

if (Ext.isIE) {
    title.push('IE' + Ext.ieVersion);
}

title.push(Ext.isStrict ? 'Strict' : 'Quirks');


// Clickable title for screenshots
document.write('<a href="' + location + '" class=issueVersion>' + title.join(' ') + '</a>');

if (location.href.indexOf('issue.html') < 0) {
    otherDocMode = location.href.replace(/issue\-nodoctype\.html/, 'issue.html');
} else {
    otherDocMode = location.href.replace(/issue\.html/, 'issue-nodoctype.html');
}

document.write('<a style="top:30px;" href="' + otherDocMode + '" class=issueVersion>(Open in ' + (Ext.isStrict ? 'Quirks' : 'Strict')  + ')</a>');

// Show it in the titlebar/tab too
setTimeout(function(){
    document.title = title.join(' ');
}, 100);



// Define the variable `afterrender` to have it hooked up as an event

if (typeof Ext.global.afterRender == 'function') {
    Ext.global.afterrender = Ext.global.afterRender;
}
if (typeof Ext.global.afterrender != 'function') {
    Ext.global.afterrender = function(){};
}

// Define the variable `config` to have it created onReady
// Can be an object, array or function that returns an object or array
Ext.onReady(function(){
    if (Ext.global.CONFIG != null) {
        Ext.global.config = Ext.global.CONFIG;
    }
    if (typeof Ext.global.config == 'function') {
        Ext.global.config = Ext.global.config();
    }
    if (typeof Ext.global.config == 'object') {
        renderIssueConfig(Ext.global.config, Ext.global.afterrender);
    }
});

function renderIssueConfig(config, afterrender){
    Ext.require('*', function(){
        // render with a timeout to keep the call stack short
        setTimeout(function(){
            renderIssueConfigImpl(config, afterrender);
        },0);
    });
}

function renderIssueConfigImpl(config, afterrender){
    Ext.create('Ext.Container', {
        renderTo: Ext.getBody(),
        autoScroll: true,
        items: Ext.Array.from(config),
        listeners: {
            afterrender: function(){
                
                // Define global vars for debugging
                Ext.global.instances = this.items.items;
                Ext.global.instance = instances[0];
                
                afterrender.apply(this, arguments);
            }
        }
    });
}

})();
/**/
