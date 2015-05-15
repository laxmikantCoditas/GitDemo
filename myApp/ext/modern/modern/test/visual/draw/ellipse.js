Ext.require([
    'Ext.draw.Component',
    'Ext.Panel'
]);
Ext.setup({
    onReady: function () {
        if (location.search.match('svg')) {
            Ext.draw.Component.prototype.engine = 'Ext.draw.engine.Svg';
        }
        var items = [],
            parent = Ext.create("Ext.Container", {
                layout: 'vbox',
                scrollable: true
            });
        Ext.Viewport.setLayout('fit');
        Ext.Viewport.add(parent);


        function setup(items, height) {
            var cmp = new Ext.draw.Component({
                sprites: items,
                height: height ? height : 400
            });
            parent.add(cmp);
        }


        items = [
            {
                type: 'path',
                stroke: 'red',
                lineWidth: 2,
                path: 'M 125,75 a100,50 0 0,0 100,50'
            },
            {
                type: 'path',
                stroke: 'green',
                lineWidth: 2,
                path: 'M 125,75 a100,50 0 0,1 100,50'
            },
            {
                type: 'path',
                stroke: 'darkgreen',
                path: 'M 125,75 a100,50 0 1,0 100,50'
            },
            {
                type: 'path',
                stroke: 'darkred',
                path: 'M 125,75 a100,50 0 1,1 100,50'
            },
//            {
//                type: 'ellipse',
//                stroke: 'black',
//                cx: 125,
//                cy: 50,
//                rx: 100,
//                ry: 50,
//                axisRotation: 0
//            },
            {
                type: 'circle',
                stroke: 'black',
                cx: 125,
                cy: 50,
                r: 50
            }
        ];
        setup(items, 200);

        items = [];
        var cx = 55,
            cy = 55,
            rx = 547.5977479863121,
            ry = 41.06983109897341,
            rot = 0.08726646259971647,
            cos = Math.cos(rot),
            sin = Math.sin(rot),
            start = -1.6599409560689342,
            end = 1.481651697520859;
        items.push({
            type: 'ellipticalArc',
            stroke: 'black',
            cx: cx,
            cy: cy,
            rx: rx,
            ry: ry,
            axisRotation: rot,
            startAngle: start,
            endAngle: end,
            anticlockwise: false
        });
        for (var i = 0; i <= 100; i++) {
            var phase = (i / 100) * (end - start) + start;
            items.push({
                type: 'path',
                path: 'M-2,0L2,0 M 0,-2 L 0,2',
                lineWidth: 0.3,
                stroke: 'red',
                translationX: cx + (rx * Math.cos(phase)) * cos - (ry * Math.sin(phase)) * sin,
                translationY: cy + (rx * Math.cos(phase)) * sin + (ry * Math.sin(phase)) * cos
            });
        }
        setup(items, 120);
        items = [];

        for (var i = 1; i < 50; i++) {
            items.push({
                type: 'arc',
                cx: 150,
                cy: 150,
                stroke: 'blue',
                endAngle: (i / 50) * Math.PI * 2,
                r: i * 3
            });

            items.push({
                type: 'arc',
                cx: 150,
                cy: 150,
                stroke: 'red',
                endAngle: (i / 50) * Math.PI * 2,
                anticlockwise: true,
                r: i * 3
            });
        }
        setup(items, 300);
        items = [];
        var N = 50;
        for (var i = 0; i < N; i++) {
            items.push({
                type: 'path',
                stroke: 'red',
                path: 'M 150,150 A 100,40,' + (i / N) * 180 + ',0,1,250,250'
            });
            items.push({
                type: 'path',
                stroke: 'green',
                path: 'M 150,150 A 100,40,' + (i / N) * 180 + ',1,0,250,250'
            });
        }

        items.push({
            type: 'circle',
            x: 150,
            y: 150,
            r: 3,
            stroke: 'black'
        });
        items.push({
            type: 'circle',
            x: 250,
            y: 250,
            r: 3,
            stroke: 'black'
        });
        setup(items, 400);
    }
});