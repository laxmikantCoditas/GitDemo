Ext.define('Ext.org.AlbumTree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.albumtree',
    
    title: 'My Albums',
    animate: true,
    rootVisible: false,
    
    viewConfig: {
        plugins: [{
            ddGroup: 'organizerDD',
            enableDD: true,
            ptype: 'treeviewdragdrop'
        }]
    },
    
    root: {
        text: 'Root',
        children: [
            {
                text: 'Album 1',
                leaf: true
            }
        ]
    },
    
    initComponent: function() {
        this.tbar = [
            {
                text: 'New Album',
                iconCls: 'new-album',
                scope: this,
                handler: this.addAlbum
            }
        ];
        
        this.callParent();
    },
    
    /**
     * Adds a new album node to the root
     */
    addAlbum: function() {
        var root = this.store.getRootNode();
        
        root.appendChild({text: 'test', leaf: true});
    }
});