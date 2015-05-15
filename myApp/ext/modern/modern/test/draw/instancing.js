Ext.require(['Ext.draw.Component']);
Ext.setup({
    onReady: function () {
        var items = [
            {
                type: 'instancing',
                template: {
                    type: 'rect',
                    x: 10,
                    y: 30,
                    width: 5,
                    height: 5,
                    radius: 1,
                    "stroke-width": 1,
                    stroke: "none",
                    translate: {
                        x: 30,
                        y: 90
                    },
                    scale: {
                        x: 1.1,
                        y: 3
                    },
                    rotate: {
                        degrees: 35
                    }
                }
            }
        ];

        var seed = 1,
            parent = Ext.create("Ext.Panel", {
                layout: 'vbox',
                style: 'background: white',
                defaults: {
                    style: 'border: 1px solid black; overflow: auto; margin-bottom: 7px'
                }
            }),
            cmp = new Ext.draw.Component({
                width: 800,
                height: 600
            });
        items = cmp.getSurface().add(items);
        function random() {
            seed *= 1.7;
            seed -= Math.floor(seed);
            return Math.random();
        }

        for (var i = 0; i < 500; i++) {
            items[0].createInstance({
                fill: Ext.draw.Color.fly(255 * random(), 255 * random(), 255 * random(), 1).toString(),
                translate: {
                    x: random() * 400 + 30,
                    y: random() * 400 + 30
                },
                scale: {
                    x: random() * 3 + 1,
                    y: random() * 3 + 1
                }
            });
        }

        items[0].getTemplate().fx.setDuration(500);
        items[0].fx.setDuration(1000);
        parent.add(cmp);
        Ext.Viewport.add(parent);

        setInterval(function () {
            items[0].setAttributes({
                stroke: Ext.draw.Color.fly(255 * random(), 255 * random(), 255 * random(), 1).toString(),
                rotation: {
                    degrees: random() * 360
                }
            });
            cmp.renderFrame();
        }, 1000);
    }
});