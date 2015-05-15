Ext.define('EditorApp.Entity', {
    mixins: {
        observable: 'Ext.mixin.Observable',
        identifiable: 'Ext.mixin.Identifiable'
    },

    config: {
        editor: null
    },

    constructor: function(config) {
        var me = this;
        me.callParent([config]);
        me.activated = false;
        if ('fill' in config) {
            this.fill = config.fill || this.fill;
        }
        if ('stroke' in config) {
            this.stroke = config.stroke;
        }
        if ('thickness' in config) {
            this.thickness = config.thickness;
        }
    },

    getGlyphGroup: function() {
        var group = this.getEditor().getSurface().getGroup(this.getId() + '-glyphs');
        group.autoDestroy = true;
        return group;
    },

    hitTest: function(x, y) {
        return false;
    },

    destorySprites: function() {
        var me = this;
        me.getGlyphGroup().destroy();
        me.glyphs = {};
    },

    createSprites: function() {
        var me = this,
            glyphs = [].concat(me.getGlyphSprites()),
            i, ln;
        me.glyphs = {};
        for (i = 0, ln = glyphs.length; i < ln; i++) {
            me.glyphs[glyphs[i].id] = me.getEditor().getSurface().add(Ext.merge({
                fill: me.fill,
                stroke: me.stroke,
                lineWidth: me.thickness
            }, glyphs[i]));
        }
        me.deactivate();
    },

    getGlyphSprites: function() {
        return [];
    },

    activate: function() {
        
    },

    deactivate: function() {
        
    },

    applyEditor: function(newEditor, oldEditor) {
        if (oldEditor === newEditor) {
            return;
        }
        if (oldEditor) {
            this.destorySprites();
        }
        return newEditor;
    },

    updateEditor: function(newEditor) {
        if (newEditor) {
            this.createSprites();
        }
    },

    drag: function(from, to) {
    },

    save: function(target) {
        target.id = this.getId();
        target.type = this.type;
        target.activated = this.activated;
    },

    load: function(target) {
        this.update();
    },

    update: function() {
        var me = this,
            editor = me.getEditor(),
            glyphs = me.getGlyphSprites(),
            i, ln, sprite, id;
        for (i = 0, ln = glyphs.length; i < ln; i++) {
            sprite = glyphs[i];
            id = sprite.id;
            delete sprite.type;
            delete sprite.id;
            this.glyphs[id].setAttributes(Ext.merge({}, sprite));
        }
    }
});