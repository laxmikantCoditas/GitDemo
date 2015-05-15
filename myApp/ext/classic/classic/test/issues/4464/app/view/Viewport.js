Ext.define('SenchaBugs.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  loadingMask: null,

  initComponent: function() {
    var me = this;
    me.items = [
      {
        xtype: 'bugs',
        layout: 'fit'
      }
    ];
    me.callParent(arguments);
  }
});
