var now = new Date().getTime();

Ext.require([
    'Ext.panel.Panel',
    'Ext.layout.container.Absolute'
]);

function hasOption (name) {
    return window.location.search.indexOf(name) >= 0;
}

Ext.onReady(function() {
    var ready = new Date().getTime();

    if (hasOption('nocss3')) {
        Ext.supports.CSS3BorderRadius = false;
        Ext.getBody().addCls('x-nbr x-nlg');
    }

    Ext.Perf.setup({
        render: {
            'Ext.Component': 'render'
        },
        layout: {
            'Ext.layout.Context': 'run'
        }
    });

    var panels = [];

    for (var row = 0 ; row < 100; row++) {
        for (var col = 0 ; col < 10; col++) {
            panels.push({
                x: col * 60,
                y: row * 60,
                frame: true,
                height: 50,
                title: 'Title',
                html: 'A',
                width: 50
            });
        }
    }

    var container = Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        items: panels,
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
