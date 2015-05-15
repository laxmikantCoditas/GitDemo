Ext.require('Ext.chart.*');
Ext.require('Ext.data.*');
Ext.require('Ext.layout.container.Fit');

Ext.onReady(function() {

  var model = [{
    "numNoJoinData": 216,
    "numNoUpdatedData": 0, 
    "numUnexpectedError": 0,
    "numNullResponse": 0, 
    "numSent": 0, 
    "numFailed": 0,
    "numNullMsgResult": 0,
    "dayId": 20110310
  }, {
    "numNoJoinData": 1656,
    "numNoUpdatedData": 0, 
    "numUnexpectedError": 0,
    "numNullResponse": 0, 
    "numSent": 0, 
    "numFailed": 0,
    "numNullMsgResult": 0,
    "dayId": 20110311
  }];

  //--create the data store
  var myStore = new Ext.data.Store({
    fields: ['numNoJoinData', 'numNoUpdatedData', 'numUnexpectedError','numNullResponse', 'numSent', 'numFailed','numNullMsgResult']
  });

  myStore.loadData(model);


  var panel1 = Ext.create('widget.panel', {
    width: 700,
    height: 350,
    title: 'Last 7 Days',
    renderTo: Ext.getBody(),
    layout: 'fit',
    items: {
      xtype: 'chart',
      animate: true,
      shadow: true,
      store: myStore,
      legend: {
        position: 'right'
      },
      axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['numNoJoinData', 'numNoUpdatedData', 'numUnexpectedError','numNullResponse', 'numSent', 'numFailed','numNullMsgResult'],
        title: false,
        grid: true,
        label: { 
          renderer: Ext.util.Format.numberRenderer('0,0') 
        },
      }, {
        type: 'Category',
        position: 'left',
        fields: ['dayId'],
        title: false
      }],
      series: [{
        type: 'bar',
        axis: 'bottom',
        gutter: 80,
        xField: 'dayId', 
        yField: ['numNoJoinData', 'numNoUpdatedData', 'numUnexpectedError','numNullResponse', 'numSent', 'numFailed','numNullMsgResult'],
        title: ['No Join Data', 'No Updates', 'Unexpected Errors','Null Response', 'Sent', 'Failed','Null MsgResult'],
        stacked: true,
        tips: {
          trackMouse: true,
          width: 65,
          height: 28,
          renderer: function(storeItem, item){
            //this.setTitle( String(item.value[1]) );
          }
        }
      }]
    }
  });
});

