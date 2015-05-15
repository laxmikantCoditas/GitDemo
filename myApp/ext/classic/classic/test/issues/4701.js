var MESSAGE = 'EXTJSIV-4701 -- gap must not exist between panel header and panel body';

function assert(ok, message){
    if (message) message = MESSAGE +': '+ message;
    else message = MESSAGE;

    if (ok) {
        window.console && console.log && console.log('[PASS] ' + message);
    } else {
        setTimeout(function(){
            throw Error('[FAIL] ' + message);
        }, 0);
    }
}

config = [];

config.push({
    xtype:'panel',
    title:'header with no border',
    style:'background:red;border:5px solid yellow !important',
    border: 0,
    bodyStyle:'background:lime;border:0 !important',
    items:[],
    afterLayout: assertNoHeaderGap
});

config.push({
    xtype:'panel',
    title:'header with 5px top-border',
    style:'background:red;border:5px solid yellow !important',
    border: 5,
    bodyStyle:'background:lime;border:0 !important',
    items:[],
    afterLayout: assertNoHeaderGap
});


function assertNoHeaderGap(){
    var gap = this.body.getTop() - this.header.el.getBottom();
    assert(gap == 0, this.title + ': gap = ' + gap);
}
