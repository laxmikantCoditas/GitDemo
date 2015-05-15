Ext.define('EditorApp.command.Delete', {
    extend     : 'EditorApp.Command',
    constructor: function (list) {
        this.list = list;
    },

    canDo: function () {
        return this.list;
    },
    exec : function (editor) {
        this.redo(editor);
    },
    undo : function (editor) {
        var me = this, list = me.list,
            i = 0, ln = list.length;
        editor.selected = {};
        for (; i < ln; i++) {
            editor.addEntity(list[i]);
            list[i].activate();
            editor.selected[list[i].id] = list[i];
        }
    },
    redo : function (editor) {
        var me = this, list = me.list,
            i = 0, ln = list.length;
        for (; i < ln; i++) {
            editor.removeEntity(list[i]);
        }
        editor.selected = {};
    }
});