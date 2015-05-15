Ext.require([
    'Ext.draw.Component',
    'Ext.Panel',
    'Ext.draw.modifier.Highlight'
]);
Ext.setup({
    onReady: function () {
        if (location.search.match('svg')) {
            Ext.draw.Component.prototype.engine = 'Ext.draw.engine.Svg';
        }

        var parent = Ext.create("Ext.Panel", {
                layout: 'fit',
                style: 'background: white'
            }),
            cmp = new Ext.draw.Component({
                sprites: [
                    {
                        type: 'instancing'
                    }
                ]
            }),
            instancing = cmp.getSurface().getItems().getAt(0);

        instancing.setTemplate({
            type: 'circle',
            stroke: 'red',
            lineWidth: 1,
            transformFillStroke: true,
            r: 10,
            opacity: 0,
            scaleX: 1,
            scaleY: 1,
            highlightCfg: {
                scaleX: 3,
                scaleY: 3,
                stroke: 'red',
                opacity: 1
            },
            fx: {
                duration: 1000
            },
            modifiers: 'highlight'
        });
        var template = instancing.getTemplate(),
            highlight = new Ext.draw.modifier.Highlight({sprite: template});

        for (var i = 0; i < 300; i++) {
            instancing.createInstance({
                translateX: Math.random() * 800,
                translateY: Math.random() * 600
            });
        }
        parent.add(cmp);
        Ext.Viewport.add(parent);
        cmp.renderFrame();
        var len = instancing.instances.length;

        function move(e) {
            e.preventDefault();
            e.stopPropagation();
            var x = e.pageX, y = e.pageY;
            for (i = 0; i < len; i++) {
                var instance = instancing.instances[i],
                    dx = instance.translationX - x,
                    dy = instance.translationY - y,
                    hl = !!(dx * dx + dy * dy < 10000);
                instancing.setAttributesFor(i, {
                    highlighted: hl
                });
            }
            cmp.getSurface().renderFrame();
        }

        cmp.element.on('touchstart', move);
        cmp.element.on('mousemove', move);
        cmp.element.on('drag', move);
    }
});