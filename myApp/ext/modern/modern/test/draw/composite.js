Ext.require(['Ext.draw.Component']);
Ext.setup({
    onReady: function () {
        var items = [
            {
                type: 'composite'
            }
        ], rect = {
            type: 'rect',
            x: 10,
            y: 0,
            width: 70,
            height: 90,
            stroke: 'none',
            radius: 0,
            "stroke-width": 1,
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
        };

        var seed = 1,
            parent = Ext.create("Ext.Panel", {
                scrollable: true,
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
            return seed;
        }

        for (var i = 0; i < 2000; i++) {
            rect.translate.x = random() * 100 + 30;
            rect.translate.y = random() * 100 + 30;
            rect.scale.x = random() * 3 + 1;
            rect.scale.y = random() * 3 + 1;
            rect.rotate.degrees += random() * 10;
            items[0].add(rect);
        }
//        items[0].add({
//            type: 'circle',
//            x: 300,
//            y: 300,
//            radius: 100,
////            fill: 'rgba(255,0,0,0.3)'
//        });
        items[0].setAttributes({
            fill: 'rgba(30,30,30,0.3)',
            stroke: 'red',
            translate: {
                x: 100,
                y: 100
            },
            scale: {
                x: 2,
                y: 1.5
            }
        });
        parent.add(cmp);
        Ext.Viewport.add(parent);
        
        setInterval(function () {
            items[0].setAttributes({
                fill: Ext.draw.Color.fly(255 * random(), 255 * random(), 255 * random(), 1).toString()
            });
            cmp.renderFrame();
        }, 10);
    }
});