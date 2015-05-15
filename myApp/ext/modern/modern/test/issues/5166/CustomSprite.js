Ext.define('CustomSprite', {
    extend: 'Ext.draw.sprite.Sprite',
    type: 'custom',
    inheritableStatics: {
        def: {
            processors: {
                x: 'number',
                y: 'number'
            },
            dirtyTriggers: {

            }
        }
    },
    render: function (surface, ctx) {
        var attr = this.attr;
        attr.matrix.toContext(ctx);

        ctx.beginPath();
        ctx.moveTo(attr.x, attr.y);
        ctx.lineTo(attr.x + 100, attr.y + 100);
        ctx.fillStroke(attr);

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 8;

        ctx.translate(100, 200);
        ctx.rotate(Math.PI / 4);
        ctx.scale(0.5, 0.5);

        ctx.moveTo(0, -50);
        ctx.lineTo(100, -50);
        ctx.lineTo(100, -150);
        ctx.fillStroke(attr);
        ctx.fillRect(0,0,100,100);
        ctx.restore();
    }
});