Ext.define('EditorApp.command.Drag', {
    extend: 'EditorApp.Command',
    constructor: function (dragList, fx, fy, tx, ty) {
        this.dragList = dragList;
        this.fx = fx;
        this.fy = fy;
        this.tx = tx;
        this.ty = ty;
    },

    canDo: function () {
        return !!(this.dragList && this.fx !== undefined && this.fy !== undefined
            && this.tx !== undefined && this.ty !== undefined);
    },
    exec: function () {
        this.save = [];
        var me = this, list = this.dragList,
            i = 0, ln = list.length, entity, target;
        for (; i < ln; i++) {
            entity = list[i];
            target = {};
            entity.save(target);
            me.save[i] = target;
        }
        this.redo();
    },
    undo: function () {
        var me = this, list = this.dragList,
            i = 0, ln = list.length, entity;
        for (; i < ln; i++) {
            entity = list[i];
            entity.load(me.save[i]);
        }
    },
    redo: function () {
        var me = this, list = this.dragList,
            i = 0, ln = list.length, entity, act = false;
        for (; i < ln; i++) {
            entity = list[i];
            entity.drag([ me.fx, me.fy ], [ me.tx, me.ty ]);
        }
    }
});