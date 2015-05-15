Ext.define('EditorApp.action.PanZoom', {
    extend: 'EditorApp.Action',
    alias: 'action.panzoom',
    reset: function() {
    },

    pinchStart: function(e) {
        var me = this;
        if (e.distance > 30) {
            me.touches = [ e.touches[0].point.x, e.touches[0].point.y, e.touches[1].point.x, e.touches[1].point.y];
            me.canScale = true;
        } else {
            me.canScale = false;
        }
    },

    pinch: function(e) {
        var me = this,
            editor = me.getEditor(),
            touches = [e.touches[0].point.x, e.touches[0].point.y, e.touches[1].point.x, e.touches[1].point.y],
            mat;
        if (me.canScale && e.distance > 30) {
            mat = Ext.draw.Matrix.createAffineMatrixFromTwoPair.apply(Ext.draw.Matrix, me.touches.concat(touches));
            me.touches = touches;
            editor.transform(mat);
        }
        editor.updateEntities();
        editor.draw();
    },

    pinchEnd: function(e) {
    }
});