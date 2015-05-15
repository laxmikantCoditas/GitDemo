Ext.define('EditorApp.Action', {
    config: {
        editor: null
    },
    constructor: function(config) {
        this.init();
        this.callParent();
        this.initConfig(config);
    },
    reset: function() {
        var me = this;
        me.startCrossing = null;
        me.dragging = null;
        me.oldSelection = null;
        me.draggingLabel = null;
        me.cmd = null;
    },
    init: function() {
    },
    click: function() {
    },
    getPhantomSprites: function() {
        return [];
    },
    tap: function(x, y) {

    },
    tapCancel: function(x, y) {

    },
    dragStart: function(x, y) {

    },
    drag: function(x, y) {

    },
    dragEnd: function(x, y) {

    },
    pinchStart: function(e) {

    },
    pinch: function(e) {

    },
    pinchEnd: function(e) {

    },
    destroy: function () {
        
    }
});