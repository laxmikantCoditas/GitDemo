Ext.require(['Ext.draw.Component']);
Ext.onReady(function () {
    var items = [
        {
            type: 'rect',
            x: 10,
            y: 0,
            width: 70,
            height: 90,
            stroke: 'black',
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
    var parentStyle = {style: 'border: 1px solid black; overflow: auto; margin-bottom: 7px'},
        cmp = new Ext.draw.Component({
        autoSize: true,
        viewBox: false,
        renderTo: Ext.getBody().createChild(parentStyle),
        items: items
    }), i1 = cmp.surface.items.get(1),
        i2 = cmp.surface.items.get(1),
        i3 = cmp.surface.items.get(2),
        i4 = cmp.surface.items.get(3),
        addition = [
        Ext.apply({
            type: 'rect',
            stroke: 'red'
        }, cmp.surface.getBBox(i1)),

        Ext.apply({
            type: 'rect',
            stroke: 'red'
        }, cmp.surface.getBBox(i2)),

        Ext.apply({
            type: 'rect',
            stroke: 'red'
        }, cmp.surface.getBBox(i3)),

        Ext.apply({
            type: 'rect',
            stroke: 'red'
        }, cmp.surface.getBBox(i4))
    ];
    cmp.surface.add(addition);
    new Ext.draw.Component({
        width: 1050,
        height: 200,
        autoSize: false,
        viewBox: true,
        renderTo: Ext.getBody().createChild(parentStyle),
        items: items.concat(addition)
    });
    new Ext.draw.Component({
        width: 1050,
        height: 200,
        autoSize: false,
        viewBox: false,
        renderTo: Ext.getBody().createChild(parentStyle),
        items: items.concat(addition)
    });
    
    cmp.surface.render()
});