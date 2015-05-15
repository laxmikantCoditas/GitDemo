Ext.define('EditorApp.Command', {
    /**
     *
     * @param {EditorApp.view.Editor} editor
     * @abstract
     * @return {Boolean}
     */
    canDo : function(editor) {
        throw 'canDoc(editor) not implemented';
    },
    /**
     *
     * @abstract
     * @param {EditorApp.view.Editor} editor
     */
    exec : function(editor) {
        throw 'exec(editor) not implemented';
    },
    /**
     *
     * @abstract
     * @param {EditorApp.view.Editor} editor
     */
    undo : function(editor) {
        throw 'undo(editor) not implemented';
    },
    /**
     *
     * @abstract
     * @param {EditorApp.view.Editor} editor
     */
    redo : function(editor) {
        throw 'redo(editor) not implemented';
    }
});