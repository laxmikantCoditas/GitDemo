Ext.define('Photon.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.draw.Component',
        'Photon.view.ImageTorpedo',
        'Photon.view.RectTorpedo',
        'Photon.view.CircleTorpedo'
    ],

    config: {
        style: 'background-color: black',
        layout: 'fit'
    },

    photonTube: 0,

    fire: function (type) {
        var surface = this.down('#space').getSurface();

        surface.add({
            type: type,
            surface: surface,
            photonTube: this.photonTube
        });

        if (this.photonTube == 0)
            this.photonTube = 1;
        else
            this.photonTube = 0;
    },

    initialize: function () {
        this.setItems(
            [
                {
                    xtype: 'draw',
                    itemId: 'space'
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    layout: {
                        pack: 'center'
                    },
                    defaults: {
                        xtype: 'button',
                        scope: this
                    },
                    items: [
                        {
                            text: 'Fire Image',
                            handler: function () {
                                this.fire('imagetorpedo');
                            }
                        },
                        {
                            text: 'Fire Rect',
                            handler: function () {
                                this.fire('recttorpedo');
                            }
                        },
                        {
                            text: 'Fire Circle',
                            handler: function () {
                                this.fire('circletorpedo');
                            }
                        }
                    ]
                }
            ])
    }
});