Ext.define('Photon.view.CircleTorpedo', {
    extend: 'Ext.draw.sprite.Circle',
    alias: 'sprite.circletorpedo',
    mixins: ['Photon.view.Torpedo'],

    inheritableStatics: {
        def: {
            defaults: {
                stroke: 'green',
                fill: 'white',
                r: 75
            }
        }
    }
});