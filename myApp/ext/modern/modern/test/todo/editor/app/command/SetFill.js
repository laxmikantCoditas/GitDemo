Ext.define('EditorApp.command.SetFill', {
    extend: 'EditorApp.Command',
    constructor: function (ent, fill) {
        this.ent = ent;
        this.fill = fill;
    },

    canDo: function () {
        return this.ent && this.fill;
    },
    exec: function (editor) {
        this.oldFill = this.ent.fill;
        this.redo(editor);
    },
    undo: function (editor) {
        this.ent.fill = this.oldFill;
    },
    redo: function (editor) {
        this.ent.fill = this.fill;
    }
});