//Example 1 – Form Example
//ExtJS 4.0 - preview 5
//
Ext.require(['*']);
Ext.onReady(function() {
    var watch = new StopWatch();
    var win = Ext.create('Ext.Window', {
        layout: 'fit',
        width: 420,
        height: 450,
        title: 'Test Page',
        items: [{
            xtype: 'form',
            autoScroll: true,

            items: (function() {
                var items = [],
                    i = 1, num = 500;
                for (; i <= num; i++) {
                    items.push({
                        xtype: 'textfield',
                        fieldLabel: 'Field ' + i
                    });
                }
                return items;
            })()
        }]
    });


    function dump(str) {
        Ext.getBody().createChild({
            tag: 'div',
            html: str
        })
    }

    watch.start();
    win.on('afterrender', function() {
        watch.stop();
        dump('Rendering took: ' + watch.duration());

        win.setSize = function() {
            watch.start();
            win.self.prototype.setSize.apply(this, arguments);
            watch.stop();
            dump('Resize took: ' + watch.duration());
        };
    });

    win.show();

});