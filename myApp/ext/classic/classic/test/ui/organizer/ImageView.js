Ext.define('Ext.org.ImageView', {
    extend: 'Ext.view.View',
    alias : 'widget.imageview',
    requires: ['Ext.data.Store'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    '<img src="../view/chooser/icons/{thumb}" />',
                '</div>',
                '<span>{name}</span>',
            '</div>',
        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: true,
    singleSelect: false,
    cls: 'x-image-view',
    autoScroll: true,
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['name', 'thumb'],
            proxy: {
                type: 'ajax',
                url : '../view/chooser/icons.json',
                reader: {
                    type: 'json',
                    root: ''
                }
            }
        });
        
        this.mixins.dragSelector.init(this);
        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'organizerDD'
            },
            ghostTpl: [
                '<tpl for=".">',
                    '<img src="../view/chooser/icons/{thumb}" />',
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                '</tpl>',
                '<div class="count">',
                    '{[values.length]} images selected',
                '<div>'
            ]
        });
        
        this.callParent();
    }
});