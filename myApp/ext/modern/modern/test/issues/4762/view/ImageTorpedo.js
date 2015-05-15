Ext.define('Photon.view.ImageTorpedo', {
    extend: 'Ext.draw.sprite.Image',
    alias: 'sprite.imagetorpedo',
    mixins: ['Photon.view.Torpedo'],

    inheritableStatics: {
        def: {
            defaults: {
                src: 'images/photon.png',
                width: 150,
                height: 150
            }
        }
    }
});