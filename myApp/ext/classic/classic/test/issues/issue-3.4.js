// Disable the error alert
Ext.Error.notify = false;

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
    '(' + (Ext.version || Ext.versions.extjs.version) + ')',
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

if (!Ext.global) {
    Ext.global = window;
}

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
