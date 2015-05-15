Ext.define('EditorApp.command.Create', {
    extend: 'EditorApp.Command',
    constructor: function (entity) {
        this.entity = entity;
    },

    canDo: function () {
        return this.entity;
    },
    exec: function (editor) {
        this.redo(editor);
    },
    undo: function (editor) {
        editor.removeEntity(this.entity);
    },
    redo: function (editor) {
        editor.addEntity(this.entity);
    }
});