Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.tree.*'
]);

Ext.define('FileSystemItem', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'text',
        type: 'string'
    }, {
        name: 'leaf',
        type: 'bool'
    }],
     proxy: {
        type: 'ajax',
        url: 'get-nodes.php'
    } 
});

Ext.onReady(function(){
    
    var treeStore = Ext.create('Ext.data.TreeStore', {
        model: 'FileSystemItem',
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        },
        folderSort: true,
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
    });
    
    var store = Ext.create('Ext.data.Store', {
        autoLoad: {
            params: {
                node: 'src'
            }
        },
        model: 'FileSystemItem',
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]    
    });
    
    Ext.create('Ext.panel.Panel', {
        width: 600,
        height: 300,
        renderTo: document.body,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            title: 'Tree',
            flex: 1,
            xtype: 'treepanel',
            store: treeStore
        }, {
            title: 'Grid',
            flex: 1,
            xtype: 'gridpanel',
            store: store,
            columns: [{
                width: 30,
               text: 'Icon',
               dataIndex: 'iconCls',
               renderer: function(value, meta, rec){
                   meta.tdCls = Ext.String.format('grid-icon x-tree-icon-{0}', rec.get('leaf') ? 'leaf' : 'parent');
               }
            }, {
                flex: 1,
                text: 'Name',
                dataIndex: 'text'
            }]
        }]
    });
    
});
