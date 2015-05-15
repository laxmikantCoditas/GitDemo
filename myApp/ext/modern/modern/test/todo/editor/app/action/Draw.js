Ext.define('EditorApp.action.Draw', {
    extend: 'EditorApp.action.Selection',
    alias: 'action.draw',
    points: null,
    cmd: null,

    getPhantomSprites: function () {
        var me = this, path = ['M'];
        if (me.points) {
            for (var i = 0; i < me.points.length; i += 2) {
                path.push(me.points[i], me.points[i + 1]);
            }
            return {
                id: 'draw-path-raw',
                type: 'path',
                stroke: 'blue',
                path: path,
                "stroke-width": 5,
                hidden: false
            }
        }
        return me.callParent(arguments);
    },

    reset: function () {
        this.points = null;
    },

    drag: function (x, y) {
        var me = this;
        if (me.points) {
            me.points.push(x, y);
        }
    },

    dragStart: function (x, y) {
        var me = this;
        if (!me.points) {
            me.points = [ x, y ];
        }
    },

    dragEnd: function (x, y) {
        var me = this,
            ent,
            cmd;
        if (me.points.length > 2) {
            ent = Ext.create('entity.path', {points: me.smoothen(me.points)});
            cmd = new EditorApp.command.Create(ent);
            me.getEditor().run(cmd);
            me.points = null;
        }
    },

    smoothenPart: function (y0, y1, y2, y3) {
        if (y0 === undefined) {
            return [y1, 13 * y1 / 18 + y2 / 3 - y3 / 18, 5 * y1 / 18 + 5 * y2 / 6 - y3 / 9, y2];
        } else if (y3 === undefined) {
            return [y1, -y0 / 9 + 5 * y1 / 6 + 5 * y2 / 18, -y0 / 18 + y1 / 3 + 13 * y2 / 18, y2];
        } else {
            return [y1, -y0 / 9 + 5 * y1 / 6 + y2 / 3 - y3 / 18, -y0 / 18 + y1 / 3 + 5 * y2 / 6 - y3 / 9, y2];
        }
    },

    smoothen: function (points) {
        if (points.length < 3) {
            return points;
        }
        var result = [], beziers = [], x, y, bezier;
        for (var i = 0; i < points.length - 2; i++) {
            x = this.smoothenPart(points[i - 2], points[i], points[i + 2], points[i + 4]);
            i++;
            y = this.smoothenPart(points[i - 2], points[i], points[i + 2], points[i + 4]);
            beziers.push(Ext.draw.Bezier.createBezier2D(x[0], y[0], x[1], y[1], x[2], y[2], x[3], y[3]));
        }
        beziers = Ext.draw.Bezier.simplifyBeziers(beziers, 40);
        for (var i = 0; i < beziers.length; i++) {
            bezier = beziers[i];
            result.push(bezier.xb.a, bezier.yb.a, bezier.xb.b, bezier.yb.b, bezier.xb.c, bezier.yb.c);
        }
        if (bezier) {
            result.push(bezier.xb.d, bezier.yb.d);
        }
        return result;
    }
});