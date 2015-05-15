Ext.define('Photon.view.RectTorpedo', {
    extend: 'Ext.draw.sprite.Rect',
    alias: 'sprite.recttorpedo',
    mixins: ['Photon.view.Torpedo'],

    inheritableStatics: {
        def: {
            defaults: {
                stroke: 'green',
                fill: 'white',
                width: 150,
                height: 150
            }
        }
    }
});