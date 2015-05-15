var MESSAGE = 'EXTJSIV-4891 -- framed panel body "margin" must be the same on all sides';

function assert(ok, message){
    if (message) message = MESSAGE +': '+ message;
    else message = MESSAGE;

    setTimeout(function() {
        if (ok) {
            window.console && console.log && console.log('[PASS] ' + message);
        } else {
            throw Error('[FAIL] ' + message);
        }
    }, 0);
}

config = [];

config.push({
    xtype:'panel',
    frame: true,
    width: 100,
    title: 'title',
    html:'<div style="background:lime;border:5px solid green">test</div>',
    afterLayout: test
});


function test(){
    var top = this.body.getTop() - this.header.el.getBottom(),
        left = this.body.getLeft();
    assert(top == left, 'expected ' + top + ' == ' + left);
}
