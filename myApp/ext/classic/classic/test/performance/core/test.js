var now = new Date().getTime();

Ext.require('Ext.container.Container');

Ext.onReady(function() {
    var ready = new Date().getTime();

    Ext.Perf.setup({
        render: {
            'Ext.Component': 'render'
        },
        layout: {
            'Ext.layout.Context': 'run'
        }
    });

    var children = [];

    for (var row = 0 ; row < 400 ; row++) {
        for (var col = 0 ; col < 25; col++) {
            children.push({
                xtype: 'component',
                x: col * 40,
                y: row * 30,
                frame: true,
                html: 'text',
                height: 30,
                width: 40
            });
        }
    }

    var container = Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        items: children,
        layout: 'absolute'
    });

    var end = new Date().getTime();
    var data = Ext.Perf.getData();
    var renderTime = Math.round(data.render.pure.sum);
    var layoutTime = Math.round(data.layout.pure.sum);
    var totalTime = end - Ext._startTime;
    var initTime = end - ready - (renderTime + layoutTime);
    var loadTime = ready - Ext._startTime;

    Ext.getBody().createChild({
        style: {
            position: 'absolute',
            right: '10px',
            top: '10px'
        },
        html: ('<b><big>Load(' + loadTime +
               ') + Init(' + initTime +
               ') + Render(' + renderTime +
               ') + Layout(' + layoutTime +
               ') = ' + totalTime + '</big></b>').
                   replace(/[+]/g, '+<br>').replace(/[=]/g, '=<br>')
    });
});
