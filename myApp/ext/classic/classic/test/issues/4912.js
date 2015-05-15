var MESSAGE = 'EXTJSIV-4912 -- panel body size must not add borders twice';

function assert(ok, message){
    if (!message) message = MESSAGE;
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
    title:'This is a title!',
    bodyStyle:'background:red;border:5px solid yellow !important',
    items:[],
    afterLayout:function(){
        assert(this.body.getHeight() == 5*2);
    }
});

config.push({
    xtype:'panel',
    title:'title!',
    bodyStyle:'background:red;border:5px solid yellow !important',
    width:52,
    html:'<div style="width:50px;height:50px;background:lime">',
    afterLayout:function(){
        assert(this.body.getHeight() == 50 + 5*2)
    }
});
