Ext.define('Photon.view.Torpedo', {
    extend: 'Ext.mixin.Mixin',

    inheritableStatics: {
        def: {
            processors: {
                /**
                 * @cfg {string} [photonTube=''] The torpedo tube that launched the photon
                 */
                photonTube: 'string'
            },

            defaults: {
                photonTube: '0'
            }
        }
    },

    numRendered: 0,

    mixinConfig: {
        id: 'observable',
        hooks: {
            constructor: 'constructor',
            render: 'render'
        }
    },

    constructor: function() {
        this.fire();
    },

    render: function () {
        this.numRendered++;
    },

    fire: function() {
        var surface = this.config.surface;

        var stageWidth = surface.element.getWidth(true);
        var stageHeight = surface.element.getHeight(true);

        var centerX = Math.floor(stageWidth / 2);
        var centerY = Math.floor(stageHeight / 2);

        switch (this.config.photonTube) {
            case 0:
                this.setAttributes({
                    x: -150,
                    y: stageHeight
                });
                break;
            case 1:
                this.setAttributes({
                    x: stageWidth,
                    y: stageHeight
                });
                break;
        }

        this.fx.setDuration(1500);
        this.fx.setEasing('easeOut');
        this.fx.on('animationend',this.onAnimationEnd, this);

        this.setAttributes({
            x: centerX - 20,
            y: centerY - 20,
            rotationRads: 3,
            width: 40,
            height: 40,
            r: 20
        });
    },

    onAnimationEnd: function(animation) {
        console.log(Ext.getClassName(this).split('.').pop(), 'rendered', this.numRendered, 'times');
        this.destroy();
    }
});