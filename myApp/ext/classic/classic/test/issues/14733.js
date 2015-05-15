Ext.onReady(function() {
    var panel = new Ext.tab.Panel({
        renderTo: document.body,
        width: 200,
        height: 200,
        items: [{
            title: 'A',
            html: 'Panel A'
        }, {
            title: 'B',
            html: 'Panel B'
        }, {
            title: 'C',
            html: 'Panel C'
        }],
        listeners: {
            beforetabchange: function(tabs, newTab, oldTab) {
                var ret = newTab.title === 'B' ? false : true;
                
                console.log(ret ? 'Going' : 'Not going', ' from ', oldTab.title, ' to ', newTab.title);
                
                return ret;
            }
        }
    });
    
    panel.getTabBar().insert(1, new Ext.button.Button({
        text: 'Foo',
        handler: function() {
            console.log('foo blip');
        }
    }));
});
