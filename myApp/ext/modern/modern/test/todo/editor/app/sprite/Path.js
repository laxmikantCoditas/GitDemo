Ext.define("EditorApp.sprite.Path", {
    extend: 'Ext.draw.sprite.Sprite',
    alias: 'sprite.editorPath',
    inheritableStatics: {
        def: {
            processors: {
                points: function (n) {
                    return n;
                },
                active: 'bool'
            },
            defaults: {
                points: [0, 0],
                active: false
            },
            dirtyTriggers: {
                points: 'bbox',
                active: 'bbox'
            }
        }
    },
    drawAnchorPoint: function (ctx, matrix, x, y) {
        var tx = Math.round(matrix.x(x, y) + 0.5) - 0.5,
            ty = Math.round(matrix.y(x, y) + 0.5) - 0.5;
        ctx.fillRect(tx - 3, ty - 3, 6, 6);
        ctx.strokeRect(tx - 3, ty - 3, 6, 6);
    },
    drawControlPoint: function (ctx, matrix, x0, y0, x1, y1) {
        var tx = matrix.x(x1, y1),
            ty = matrix.y(x1, y1);
        ctx.beginPath();
        ctx.moveTo(matrix.x(x0, y0), matrix.y(x0, y0));
        ctx.lineTo(tx, ty);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(tx, ty, 3, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    },
    getBBox: function (isWithoutTransform) {
        if (isWithoutTransform) {
            this.bbox.plain = this.bbox.plain || this.getDimension(true);
            return this.bbox.plain;
        }
        this.bbox.transform = this.getDimension();
        return this.bbox.transform;
    },
    getDimension: function (isWithoutTransform) {
        var me = this,
            attr = this.attr,
            points = attr.points,
            i = 0, ln = points.length,
            matrix = this.matrix,
            x, y,
            left = Infinity,
            right = -Infinity,
            top = Infinity,
            bottom = -Infinity;
        if (isWithoutTransform) {
            while (i < ln) {
                x = points[i];
                y = points[i + 1];
                if (x < left) {
                    left = x;
                }
                if (x > right) {
                    right = x;
                }
                if (y < top) {
                    top = y;
                }
                if (y > bottom) {
                    bottom = y;
                }
                i += 2;
            }
        } else {
            while (i < ln) {
                x = matrix.x(points[i], points[i + 1]);
                y = matrix.y(points[i], points[i + 1]);
                if (x < left) {
                    left = x;
                }
                if (x > right) {
                    right = x;
                }
                if (y < top) {
                    top = y;
                }
                if (y > bottom) {
                    bottom = y;
                }
                i += 2;
            }
        }
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        }
    },
    render: function (surface, ctx) {
        var me = this,
            attr = me.attr,
            matrix = this.matrix.clone(),
            inverseMatrix = me.inverseMatrix,
            points = attr.points,
            ln = points.length, i = 2;
        matrix.toContext(ctx);
        ctx.beginPath();
        ctx.moveTo(points[0], points[1]);
        while (i < ln) {
            ctx.bezierCurveTo(points[i], points[i + 1], points[i + 2], points[i + 3], points[i + 4], points[i + 5]);
            i += 6;
        }
        inverseMatrix.toContext(ctx);
        ctx.stroke();
        ctx.fill();
        matrix.prepend(surface.matrix);
        ctx.setTransform(surface.devicePixelRatio, 0, 0, surface.devicePixelRatio, 0, 0);
        if (attr.active) {
            ctx.lineWidth = 1;
            // Draw control points
            i = 0;
            ctx.beginPath();
            ctx.fillStyle = '#0f0';
            while (i + 6 < ln) {
                this.drawControlPoint(ctx, matrix, points[i], points[i + 1], points[i + 2], points[i + 3]);
                this.drawControlPoint(ctx, matrix, points[i + 6], points[i + 7], points[i + 4], points[i + 5]);
                i += 6;
            }
            // Draw anchor points
            i = 0;
            ctx.beginPath();
            ctx.fillStyle = '#00f';
            while (i < ln) {
                this.drawAnchorPoint(ctx, matrix, points[i], points[i + 1]);
                i += 6;
            }
        }
    }
});