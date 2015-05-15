Ext.onReady(function() {
    var btn = new Ext.button.Button({
        renderTo: Ext.getBody(),
        text: 'button'
    });
    
    var tabPanel = Ext.create({
        xtype: 'tabpanel',
        renderTo: Ext.getBody(),
        items: [{
            title: 'first tab',
            html: 'qqqqqq'
        }, {
            title: 'second tab',
            html:'wwwwww'
        }]
    });
    
    function addListeners(el, desc) {
        var events = ['mousedown', 'click', 'mouseup'],
            i, len, ev;
        
        for (i = 0, len = events.length; i < len; i++) {
            ev = events[i];
            
            (function(desc, ev) {
                el.dom.addEventListener(ev, function() {
                    console.log(desc + ' native ' + ev);
                });
            
                el.on(ev, function() {
                    console.log(desc + ' ext ' + ev);
                });
            })(desc, ev);
        }
    }
    
    addListeners(btn.el, 'btn');
    addListeners(tabPanel.tabBar.el, 'bar');
    
    var tabs = tabPanel.query('tab');
    
    for (var i = 0, len = tabs.length; i < len; i++) {
        var el = tabs[i].el;
        
        addListeners(el, 'tab #' + (i + 1));
        
        tabs[i].setWidth(150);
    }
    
    var preventDefault = Event.prototype.preventDefault;
    
    Event.prototype.preventDefault = function() {
        if (/^(mouse|pointer|click)/.test(this.type)) {
            console.log('preventDefault: ', this);
        }
        preventDefault.apply(this, arguments);
    }
});
