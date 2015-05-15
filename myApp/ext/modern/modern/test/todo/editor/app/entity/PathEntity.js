Ext.define('EditorApp.entity.PathEntity', {
    extend: 'EditorApp.entity.FillStroke',
    requires: ['EditorApp.sprite.Path'],
    alias: 'entity.path',
    type: 'path',
    points: [],

    constructor: function(config) {
        var me = this;
        me.callParent([config]);
        me.points = config.points || [50, 50, 150, 50, 0, 100, 100, 100, 130, 130, 150, 170, 200, 200];
        me.updateBeziers();
    },

    getGlyphSprites: function() {
        var me = this,
            editor = me.getEditor();
        return [
            {
                type: 'editorPath',
                id: me.getId() + '-sprite',
                group: this.getId() + '-glyphs',
                points: me.points,
                fill: me.fill,
                stroke: me.stroke,
                lineWidth: me.thickness,
                hidden: false,
                active: me.activated
            }
        ]
    },

    crossTest: function(l, r, t, b) {

    },

    hitTest: function(x, y, rad) {
        var me = this, ps = me.points,
            idx, i, ln = ps.length,
            minx, maxx, miny, maxy;
        if (me.activated) {
            for (i = 0; i < ln; i += 2) {
                if (Math.abs(x - ps[i]) < rad && Math.abs(y - ps[i + 1]) < rad) {
                    return true;
                }
            }
        }
        if (me.fill === 'none') {
            for (idx = 0, i = 0; i < ln; i += 6, idx++) {
                minx = Math.min(ps[i], ps[i + 2], ps[i + 4], ps[i + 6]) - rad;
                maxx = Math.max(ps[i], ps[i + 2], ps[i + 4], ps[i + 6]) + rad;
                miny = Math.min(ps[i + 1], ps[i + 3], ps[i + 5], ps[i + 7]) - rad;
                maxy = Math.max(ps[i + 1], ps[i + 3], ps[i + 5], ps[i + 7]) + rad;
                if (minx < x && x < maxx && miny < y && y < maxy) {
                    if (me.beziers[idx].hitTest(x, y, rad)) {
                        return true;
                    }
                }
            }
        } else {
            var hits = 0;
            for (idx = 0, i = 0; i < ln; i += 6, idx++) {
                maxx = Math.max(ps[i], ps[i + 2], ps[i + 4], ps[i + 6]);
                miny = Math.min(ps[i + 1], ps[i + 3], ps[i + 5], ps[i + 7]);
                maxy = Math.max(ps[i + 1], ps[i + 3], ps[i + 5], ps[i + 7]);
                if (x < maxx && miny < y && y < maxy) {
                    hits += me.beziers[idx].rayTest(x, y);
                }
            }
            // closed
            miny = Math.min(ps[0], ps[1], ps[ln - 2], ps[ln - 1]);
            maxy = Math.max(ps[0], ps[1], ps[ln - 2], ps[ln - 1]);
            if (miny < y && y < maxy) {
                if (x < (y - ps[1]) / (ps[ln - 1] - ps[1]) * (ps[ln - 2] - ps[0]) + ps[0]) {
                    hits++;
                }
            }
            return hits % 2 == 1;
        }

        return false;
    },

    save: function(target) {
        var me = this;
        me.callParent([target]);
        target.points = me.points.slice(0);
    },

    load: function(target) {
        var me = this;
        me.points = target.points.slice(0);
        me.updateBeziers();
        me.callParent([target]);
    },

    drag: function(from, to) {
        var me = this, points = me.points, idx = 0,
            i = 0, ln = points.length,
            done = false,
            dx = to[0] - from[0],
            dy = to[1] - from[1],
            radius = me.getEditor().getRadius();
        if (me.activated) {
            for (idx = 0; i < ln; i += 6, idx++) {
                if (Math.abs(from[0] - points[i]) < radius && Math.abs(from[1] - points[i + 1]) < radius) {
                    points[i] += dx;
                    points[i + 1] += dy;
                    if (i) {
                        points[i - 2] += dx;
                        points[i - 1] += dy;
                    }
                    if (i + 2 < ln) {
                        points[i + 2] += dx;
                        points[i + 3] += dy;
                    }
                    done = true;
                    if (idx) {
                        me.updateBeziers(idx - 1);
                    }
                    me.updateBeziers(idx);
                    break;
                }
            }
            if (!done) {
                for (idx = 0, i = 2; i < ln; i += 6, idx++) {
                    if (Math.abs(from[0] - points[i]) < radius && Math.abs(from[1] - points[i + 1]) < radius) {
                        points[i] += dx;
                        points[i + 1] += dy;
                        done = true;
                        break;
                    }
                    if (Math.abs(from[0] - points[i + 2]) < radius && Math.abs(from[1] - points[i + 3]) < radius) {
                        points[i + 2] += dx;
                        points[i + 3] += dy;
                        done = true;
                        break;
                    }
                }
                if (done) {
                    me.updateBeziers(idx);
                }
            }
        }
        if (!done) {
            for (i = 0; i < ln; i += 2) {
                points[i] += dx;
                points[i + 1] += dy;
            }
            me.updateBeziers();
        }
        me.update();
        me.getEditor().renderFrame();
    },

    transform: function(mat) {
        var me = this,
            x, y, points = me.points,
            i, ln = points.length;
        for (i = 0; i < ln; i += 2) {
            x = mat.x(points[i], points[i + 1]);
            y = mat.y(points[i], points[i + 1]);
            points[i] = x;
            points[i + 1] = y;
        }
        me.updateBeziers();
        me.update();
        me.getEditor().renderFrame();
    },

    activate: function() {
        this.activated = true;
        this.update();
    },

    deactivate: function() {
        this.activated = false;
        this.update();
    },

    updateBeziers: function(idx) {
        var me = this, bezier2 = Ext.draw.Bezier.createBezier2D;
        if (idx !== undefined) {
            me.beziers[idx] = (bezier2.apply(me, me.points.slice(idx * 6, idx * 6 + 8)));
        } else {
            me.beziers = [];
            for (var i = 2; i < me.points.length; i += 6) {
                me.beziers.push(bezier2.apply(me, me.points.slice(i - 2, i + 6)));
            }
        }
    }
});
