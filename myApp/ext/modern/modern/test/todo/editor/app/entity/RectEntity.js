Ext.define('EditorApp.entity.RectEntity', {
    extend: 'EditorApp.entity.FillStroke',
    alias: 'entity.rect',
    type: 'rect',
    cx: 200,
    cy: 200,
    width: 100,
    height: 100,
    rotation: 0,

    constructor: function(config) {
        this.callParent([config]);
        if ('cx' in config) {
            this.cx = config.cx;
        }
        if ('cy' in config) {
            this.cy = config.cy;
        }
        if ('width' in config) {
            this.width = config.width;
        }
        if ('height' in config) {
            this.height = config.height;
        }
        if ('rotation' in config) {
            this.rotation = config.rotation;
        }
    },

    getGlyphSprites: function() {
        var me = this, editor = me.getEditor(),
            rotation = {
                degrees: me.rotation,
                x: null,
                y: null
            };
        return [
            {
                type: 'rect',
                id: me.getId() + '-sprite',
                group: this.getId() + '-glyphs',
                x: (me.cx - me.width * 0.5 + 1),
                y: (me.cy - me.height * 0.5 + 1),
                width: me.width - 2,
                height: me.height - 2,
                fill: me.fill,
                stroke: me.stroke,
                "stroke-width": me.thickness,
                hidden: false,
                rotation: rotation
            }
        ]
    },

    hitTest: function(x, y, radius) {
        var me = this,
            w = Math.abs(me.width) * 0.5,
            h = Math.abs(me.height) * 0.5,
            from = me.rotate([x, y], true);
        x = from[0];
        y = from[1];

        if (me.fill != 'none' && Math.abs(x) < w + radius * 0.5 && Math.abs(y) < h + radius * 0.5) {
            return true;
        } else if (Math.abs(Math.abs(x) - w) < radius * 0.5 && Math.abs(y) < h + radius * 0.5
            || Math.abs(Math.abs(y) - h) < radius * 0.5 && Math.abs(x) < w + radius * 0.5) {
            return true;
        }

        if (me.activated) {
            if (Math.abs(x + w) < radius || Math.abs(x) < radius || Math.abs(x - w) < radius) {
                if (Math.abs(y + h) < radius || Math.abs(y) < radius || Math.abs(y - h) < radius) {
                    return true;
                } else if (Math.abs(x) < radius) {
                    return Math.abs(y + h + EditorApp.RADIUS * 2) < radius;
                }
            }
        }
        return false;
    },

    save: function(target) {
        var me = this;
        me.callParent([target]);
        target.x = me.cx;
        target.y = me.cy;
        target.fill = me.fill;
        target.stroke = me.stroke;
        target.thickness = me.thickness;
        target.width = me.width;
        target.height = me.height;
        target.rotation = me.rotation;
    },

    load: function(target) {
        var me = this;
        me.cx = target.x;
        me.cy = target.y;
        me.width = target.width;
        me.height = target.height;
        me.rotation = target.rotation;
        me.fill = target.fill;
        me.stroke = target.stroke;
        me.thickness = target.thickness;
        me.callParent([target]);
    },

    rotate: function(from, invese) {
        var me = this,
            th = Ext.draw.Draw.rad(me.rotation),
            cos = Math.cos(th), sin = invese ? -Math.sin(th) : Math.sin(th);
        return [
            (from[0] - me.cx) * cos - (from[1] - me.cy) * sin,
            (from[0] - me.cx) * sin + (from[1] - me.cy) * cos
        ]
    },

    drag: function(from, to) {
        from = this.rotate(from, true);
        to = this.rotate(to, true);

        var me = this,
            w = Math.abs(me.width) * 0.5,
            h = Math.abs(me.height) * 0.5,
            radius = me.getEditor().getRadius(),
            l = -w, r = +w,
            t = -h, b = +h,
            xc, yc, x = from[0], y = from[1], diff;

        if (Math.abs(x + w) < radius) {
            xc = 'l';
        } else if (Math.abs(x) < radius) {
            xc = '-';
        } else if (Math.abs(x - w) < radius) {
            xc = 'r';
        }

        if (Math.abs(y + h) < radius) {
            yc = 't';
        } else if (Math.abs(y) < radius) {
            yc = '-';
        } else if (Math.abs(y - h) < radius) {
            yc = 'b';
        } else if (Math.abs(y + h + EditorApp.RADIUS * 2) < radius) {
            yc = 'rot';
        }

        if (xc && yc && xc + yc != '--') {
            if (xc == 'l') {
                diff = me.rotate([to[0] - from[0] + me.cx, me.cy]);
                me.cx += diff[0] * 0.5;
                me.cy += diff[1] * 0.5;
                me.width -= to[0] - from[0];
            } else if (xc == 'r') {
                diff = me.rotate([to[0] - from[0] + me.cx, me.cy]);
                me.cx += diff[0] * 0.5;
                me.cy += diff[1] * 0.5;
                me.width += to[0] - from[0];
            } else if (xc == '-' && yc == 'rot') {
                me.rotation += Math.atan2(to[1], to[0]) / Math.PI * 180 + 90;
            }
            if (yc == 't') {
                diff = me.rotate([me.cx, to[1] - from[1] + me.cy]);
                me.cx += diff[0] * 0.5;
                me.cy += diff[1] * 0.5;
                me.height -= to[1] - from[1];
            } else if (yc == 'b') {
                diff = me.rotate([me.cx, to[1] - from[1] + me.cy]);
                me.cx += diff[0] * 0.5;
                me.cy += diff[1] * 0.5;
                me.height += to[1] - from[1];
            }
        } else {
            diff = me.rotate([to[0] - from[0] + me.cx, to[1] - from[1] + me.cy]);
            me.cx += diff[0];
            me.cy += diff[1];
        }
        me.width = Math.abs(me.width);
        me.height = Math.abs(me.height);
        me.update();
        me.getEditor().renderFrame();
    }
});
