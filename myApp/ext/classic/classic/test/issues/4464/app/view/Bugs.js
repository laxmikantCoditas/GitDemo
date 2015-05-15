Ext.define('SenchaBugs.view.Bugs', {
  alias: 'widget.bugs',
  extend:'Ext.tab.Panel',
  items:[
    {
      id: 'nested_data',
      xtype: 'panel',
      title: 'Nested Data',
      items: [
        {
          xtype:'button',
          text: 'Load Users'
        }
      ]
    }
  ]
});
