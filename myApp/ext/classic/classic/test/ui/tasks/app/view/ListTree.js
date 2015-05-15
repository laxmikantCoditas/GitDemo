Ext.define('Tasks.view.ListTree', {
   extend: 'Ext.tree.Panel',
   alias: 'widget.view.listtree',
   
   //title: 'My Lists',
   // width: 200,
   // margins: '3',
   rootVisible: true,
   useArrows: true,
   hideHeaders: true,
   // animCollapse: false,
   // animExpand: false,
   // collapsible: true,
   // collapseDirection: Ext.Component.DIRECTION_LEFT,
   
   initComponent: function() {
       this.quickbar = Ext.create('Ext.Toolbar', {
           itemId: 'quickbar',
           dock: 'bottom',
           items: [{
               tooltip: 'Create List',
               itemId: 'createList',
               iconCls: 'create-list'
           }, {
               tooltip: 'Delete List',
               itemId: 'destroyList',
               iconCls: 'delete-list'
           }, '-', {
               tooltip: 'Create Folder',
               itemId: 'createFolder',
               iconCls: 'create-folder'
           }, {
               tooltip: 'Delete Folder',
               itemId: 'destroyFolder',
               iconCls: 'delete-folder'
           }]
       });
       
       this.columns = [{
           dataIndex: 'name',
           flex: 1,
           xtype: 'treecolumn',
           field: {
               xtype: 'textfield'
           }
       }];
       
       this.viewConfig = {
          toggleOnDblClick: false,
          markDirty: false 
       };
       
       this.plugins = [Ext.create('Ext.grid.plugin.CellEditing')];
       
       this.dockedItems = [this.quickbar];
       this.callParent(arguments);
   }
});