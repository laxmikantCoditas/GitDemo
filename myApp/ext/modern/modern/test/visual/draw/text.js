Ext.require([
    'Ext.draw.Component',
    'Ext.Panel'
]);
Ext.setup({
    onReady: function () {
        var items = [
            {
                type: 'text',
                x: 45,
                y: 120,
                font: '40px Arial',
                text: 'abcdefghijklm\nnopqrstuvwxyz',
//                textBaseline: 'middle',
                fill: 'black'
            },
            {
                type: 'path',
                path: ['M', 40, 120, 50, 120, 'M', 45, 115, 45, 125],
                stroke: 'red'
            }
        ];
        var parent = Ext.create("Ext.Panel", {
                scrollable: true,
                layout: 'vbox'
            }),
            cmp = new Ext.draw.Component({
                width: 2050,
                height: 200,
                items: items
            });
        var text = cmp.getSurface().getItems().get(0);
        var bbox = text.getBBox();
        cmp.getSurface().add(Ext.apply({type: 'rect', stroke: 'black'}, bbox));
        parent.add(cmp);
        Ext.Viewport.add(parent);
    }
});