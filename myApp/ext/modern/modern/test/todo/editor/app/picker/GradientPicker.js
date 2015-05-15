Ext.define('EditorApp.picker.GradientPicker', {
    extend: 'Ext.draw.Component',
    xtype: 'gradpicker',
    config: {
        width: 333,
        height: 380
    },
    degrees: 30,
    initialize: function () {
        var me = this, radius = 80;
        me.callParent();
        me.getSurface().addGradient({
            id: 'ball',
            degrees: me.degrees,
            stops: {
                0: {
                    color: '#f00'
                },
                100: {
                    color: '#f00',
                    opacity: 0
                }
            }
        });
        me.ballShadow = me.getSurface().add({
            type: 'circle',
            x: 0,
            y: 0,
            radius: radius,
            fill: 'white',
            "shadowColor": 'black',
            "shadowOffsetX": 0,
            "shadowOffsetY": 0,
            "shadowBlur": 3
        });
        me.ball = me.getSurface().add({
            type: 'circle',
            x: 0,
            y: 0,
            radius: radius,
            fill: 'url(#ball)',
            stroke: 'black',
            "stroke-width": 2
        });
        me.vector = me.getSurface().add({
            type: 'path',
            path: [
                'M',
                0, 0,
                3, 4],
            stroke: 'black',
            "stroke-width": 1
        });
        me.on('tap', me.onTap);
        me.on('drag', me.onDrag);
        me.on('dragstart', me.onDragStart);
        me.on('dragend', me.onDragEnd);
    },

    getEventXY: function (e) {
        e = (e.changedTouches && e.changedTouches[0]) || e.event || e.browserEvent || e;
        var me = this, xy = me.element.getXY();
        return [e.pageX - xy[0], e.pageY - xy[1]];
    },

    tapBall: function (xy) {
        var me = this;
        me.degrees = Ext.draw.Draw.degrees(Math.atan2(xy[1], xy[0]));
        me.refreshUI();
    },

    onTap: function (e) {
        var me = this,
            xy = me.getEventXY(e);
        xy[0] -= me.center[0];
        xy[1] -= me.center[1];
        me.tapBall(xy);
    },

    onDragStart: function (e) {
        var me = this,
            xy = me.getEventXY(e),
            radius = 100;
        xy[0] -= me.center[0];
        xy[1] -= me.center[1];
        if (me.gesture === false && xy[0] * xy[0] + xy[1] * xy[1] < radius * radius) {
            me.gesture = 'ball';
            me.startDegrees = Ext.draw.Draw.degrees(Math.atan2(xy[1], xy[0])) - me.degrees;
        }
    },

    onDrag: function (e) {
        var me = this,
            xy = me.getEventXY(e),
            radius = 80 + 44;
        xy[0] -= me.center[0];
        xy[1] -= me.center[1];
        if (me.gesture === 'ball') {
            me.degrees = Ext.draw.Draw.degrees(Math.atan2(xy[1], xy[0])) - me.startDegrees;
            me.refreshUI();
        }
    },

    onDragEnd: function (e) {
        var me = this;
        me.gesture = false;
    },

    refreshUI: function () {
        var me = this,
            radius = 80,
            cx = me.center[0],
            cy = me.center[1];
        me.getSurface()._gradients.ball.setDegrees(me.degrees);
        me.vector.setAttributes({
            path: [
                'M',
                cx - radius, cy,
                cx + radius, cy,
                cx + radius - 7.5, cy - 5,
                'M',
                cx + radius, cy,
                cx + radius - 7.5, cy + 5
            ],
            rotate: {
                x: cx,
                y: cy,
                degrees: me.degrees
            }
        });
        me.renderFrame();
    },

    onResize: function () {
        var me = this,
            radius = 80,
            cx = me.element.getWidth() * 0.5,
            cy = radius + 20;
        me.center = [cx, cy];
        me.ballShadow.setAttributes({
            x: cx,
            y: cy
        });
        me.ball.setAttributes({
            x: cx,
            y: cy
        });
        me.refreshUI();
    }
});