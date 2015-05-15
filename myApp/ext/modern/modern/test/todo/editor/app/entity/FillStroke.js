Ext.define('EditorApp.entity.FillStroke', {
    extend: 'EditorApp.Entity',
    fill: 'none',
    stroke: 'black',
    thickness: 4,
    save: function (target) {
        var me = this;
        me.callParent([target]);
        target.fill = me.fill;
        target.stroke = me.stroke;
        target.thickness = me.thickness;
    },

    load: function (target) {
        var me = this;
        me.fill = target.fill;
        me.stroke = target.stroke;
        me.thickness = target.thickness;
        me.callParent([target]);
    }

});