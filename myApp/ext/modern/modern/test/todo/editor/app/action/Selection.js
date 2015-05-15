Ext.define('EditorApp.action.Selection', {
    extend: 'EditorApp.action.PanZoom',
    requires: ['EditorApp.command.Drag'],
    alias: 'action.selection',
    dragging: false,
    startCrossing: false,
    lastHitTest: [],
    hitTestPos: 0,
    reset: function () {
        this.dragging = false;
        this.cmd = false;
        this.lastHitTest = [];
        this.hitTestPos = 0;
    },

    drag: function (x, y) {
        var me = this,
            editor = me.getEditor();
        if (this.cmd) {
            if (this.cmd == editor.lastCommand()) {
                this.cmd.undo(editor);
                this.cmd.tx = x;
                this.cmd.ty = y;
                this.cmd.redo(editor);
            }
        }
    },

    dragStart: function (x, y) {
        var me = this,
            editor = me.getEditor(),
            test = editor.getEntitiesFromPoint(x, y),
            draggingSelected = false;
        me.dragging = [x, y];

        for (var i = 0; i < test.length; i++) {
            if (editor.selected[test[i].id]) {
                test = [];
                draggingSelected = true;
                for (var id in editor.selected) {
                    test.push(editor.selected[id]);
                }
                break;
            }
        }

        if (!draggingSelected) {
            if (test.length != 1) {
                return me.tap(x, y);
            } else {
                editor.selected = {};
                editor.selected[test[0].id] = test[0];
            }
        }
        if (test.length) {
            this.cmd = new EditorApp.command.Drag(test, this.dragging[0], this.dragging[1], x, y);
            editor.run(this.cmd);
        }
    },

    dragEnd: function (x, y) {
        var me = this,
            editor = me.getEditor();
        if (me.cmd && me.cmd == editor.lastCommand()) {
            me.cmd.undo(editor);
            me.cmd.tx = x;
            me.cmd.ty = y;
            me.cmd.redo(editor);
        }
        me.cmd = null;
        me.dragging = null;
    },

    tap: function (x, y) {
        var me = this,
            editor = me.getEditor(),
            test = editor.getEntitiesFromPoint(x, y);
        if (test.length == 1) {
            editor.selected = {};
            editor.selected[test[0].id] = test[0];
        } else if (test.length == 0) {
            editor.selected = {};
        } else if (test.length !== this.lastHitTest.length) {
            me.hitTestPos = 0;
            editor.selected = {};
            editor.selected[test[0].id] = test[0];
            this.lastHitTest = test.slice(0);
        } else {
            me.hitTestPos = (me.hitTestPos + 1) % test.length;
            editor.selected = {};
            editor.selected[test[me.hitTestPos].id] = test[me.hitTestPos];
        }
        me.startCrossing = [ x, y ];
    }
});