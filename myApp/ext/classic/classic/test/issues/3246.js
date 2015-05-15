Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '../../examples/ux');
Ext.require([
  'Ext.grid.*',
  'Ext.data.*',
  'Ext.ux.grid.FiltersFeature',
  'Ext.toolbar.Paging'
]);

Ext.onReady(function(){
	var myData = [
    ["1","71.72","3m Co","2007-09-01","large","1"],
    ["2","1.72","xxxm Co","2017-09-01","large","1"]
  ];
  var store = Ext.create('Ext.data.ArrayStore', {
    fields: [
      'column1',
      'column2',
      'column3',
      'column4',
      'column5'
    ],
    data: myData
  });
  
  Ext.define('newGrid', {
    extend: 'Ext.Panel',
    alias: 'widget.newGrid',
    layout: 'fit',
    items: [{
      title: 'grid',
      xtype: 'grid',
      features: {
        ftype: 'filters',
        local: true,
        filters: [{
          type: 'numeric',
          dataIndex: 'column1'
        }]
      },
      store: store,
      columns: [{
        header: 'column 1',
        dataIndex: 'column1'
      },{
        header: 'column 2',
        dataIndex: 'column2'
      },{
        header: 'column 3',
        dataIndex: 'column3'
      },{
        header: 'column 4',
        dataIndex: 'column4'
      },{
        header: 'column 5',
        dataIndex: 'column5'
      }],
      listeners: {
        afterrender: function() {
          this.store.load({params:{limit: 100, start: 0}});
        }
      }
    }]
  });
  
  
  Ext.create('newGrid', {
  	renderTo : 'target',
    height: 400,
    width: 700
  });
});