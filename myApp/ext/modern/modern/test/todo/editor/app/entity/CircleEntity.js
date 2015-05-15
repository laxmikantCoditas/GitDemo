Ext.define('EditorApp.entity.CircleEntity', {
    extend: 'EditorApp.entity.FillStroke',
    alias: 'entity.circle',
    type: 'circle',
    x: 200,
    y: 200,
    radius: 100,
    constructor: function (config) {
        this.callParent([config]);
        if ('x' in config) {
            this.x = config.x;
        }
        if ('y' in config) {
            this.y = config.y;
        }
        if ('radius' in config) {
            this.radius = config.radius;
        }
    },

    getGlyphSprites: function () {
        var me = this,
            editor = me.getEditor();
        return [
            {
                type: 'circle',
                id: me.getId() + '-sprite',
                group: this.getId() + '-glyphs',
                x: me.x,
                y: me.y,
                fill: me.fill,
                stroke: me.stroke,
                "stroke-width": me.thickness,
                radius: me.radius,
                hidden: false
            }
        ]
    },

    hitTest: function (x, y) {
        var dx = x - this.x, dy = y - this.y, r = this.radius + 3;
        return r * r > dx * dx + dy * dy;
    },

    save: function (target) {
        var me = this;
        me.callParent([target]);
        target.x = me.x;
        target.y = me.y;
        target.radius = me.radius;
        target.fill = me.fill;
        target.stroke = me.stroke;
        target.thickness = me.thickness;
    },

    load: function (target) {
        var me = this;
        me.x = target.x;
        me.y = target.y;
        me.radius = target.radius;
        me.fill = target.fill;
        me.stroke = target.stroke;
        me.thickness = target.thickness;
        me.callParent([target]);
    }
});