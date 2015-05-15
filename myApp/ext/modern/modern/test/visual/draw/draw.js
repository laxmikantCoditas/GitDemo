Ext.require([
    'Ext.draw.Component',
    'Ext.Panel'
]);
Ext.setup({
    onReady: function () {
        if (location.search.match('svg')) {
            Ext.draw.Component.prototype.engine = 'Ext.draw.engine.Svg';
        }

        if (location.search.match('hp')) {
            Ext.draw.Component.prototype.engine = 'Ext.draw.engine.Svg';
        }
        var items = [
            {
                type: 'rect',
                x: 10,
                y: 0,
                width: 70,
                height: 90,
                stroke: 'black',
                radius: 10,
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
            },
            {
                type: 'ellipse',
                x: 45,
                y: 45,
                radiusX: 35,
                radiusY: 45,
                stroke: 'black',
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
            },
            {
                type: 'text',
                x: 45,
                y: 45,
                font: '15px Arial',
                text: 'Test Message',
                fill: 'black',
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
            },
            {
                type: 'image',
                x: 0,
                y: 0,
                width: 870,
                height: 312,
                src: 'banner.jpg',
                translate: {
                    x: 30,
                    y: 50
                },
                scale: {
                    x: 0.7,
                    y: 0.3
                },
                rotate: {
                    degrees: 35
                }
            }
        ];
        var parent = Ext.create("Ext.Panel", {
                scrollable: true,
                layout: 'vbox',
                style: 'background: white',
                defaults: {
                    style: 'border: 1px solid black; overflow: auto; margin-bottom: 7px'
                }
            }),
            cmp = new Ext.draw.Component({
                autoSize: true,
                viewBox: false,
                items: items
            });
//        cmp.getSurface().add(addition);
        parent.add(cmp);
        parent.add(new Ext.draw.Component({
            height: 200,
            items: items,
            autoSize: false,
            viewBox: true
        }));
        parent.add(new Ext.draw.Component({
            height: 200,
            items: items
        }));
        Ext.Viewport.add(parent);
    }
});