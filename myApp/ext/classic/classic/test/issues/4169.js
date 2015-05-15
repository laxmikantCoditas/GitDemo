// EXTJSIV-4169
// desktop example windows open minimized to the task bar; cannot be opened

// document.write('<iframe name=example onload="test.call(example)" width=800 height=600 src="../../deploy/ext-4.0.6/examples/desktop/desktop.html"></iframe>')
document.write('<iframe name=example onload="test.call(example)" width=800 height=600 src="../../examples/desktop/desktop.html"></iframe>')

var Ext;

function test(){
    var window = this;
    Ext = window.Ext;
    
    Ext.onReady(function(){
        Ext.require('Ext.ComponentQuery', function(){

            fuzzy.clickElementBySelector('.cpu-shortcut', [], function(){
                fuzzy.whenElementBySelector('#systemstatus', function(dom){
                    if ((parseFloat(dom.style.left) + dom.offsetWidth) < 0) {
                        throw Error('FAIL: window must not be offscreen');
                    }
                    console.log('PASS');
                });
            });

        });
    });
}

Ext.ns('fuzzy');

fuzzy.clickElementBySelector = function(selector, xy, callback){
    fuzzy.whenElementBySelector(selector, function(el){
        fuzzy.clickElement(el, xy);
        if (callback) {
            setTimeout(function(){
                callback(el, xy);
            },0);
        }
    });
};

fuzzy.whenElementBySelector = function(selector, callback){
    var el = Ext.query(selector)[0];
    if (!el) {
        setTimeout(function(){
            fuzzy.whenElementBySelector(selector, callback);
        }, 100);
        return;
    }
    
    setTimeout(function(){
        callback(el);
    },0);
};


fuzzy.clickElement = function(target, xy){
    var event = new Ext.EventObjectImpl({target:target.dom || target, xy:xy});
    event.xy = xy;
    event.type = 'mouseenter';event.injectEvent();
    event.type = 'mouseover';event.injectEvent();
    event.type = 'mousemove';event.injectEvent();
    event.type = 'mousedown';event.injectEvent();
    event.type = 'mouseup';event.injectEvent();
    event.type = 'click';event.injectEvent();
    event.type = 'mouseout';event.injectEvent();
    event.type = 'mouseleave';event.injectEvent();
    
    // console.log('clicked', xy, target);
};
