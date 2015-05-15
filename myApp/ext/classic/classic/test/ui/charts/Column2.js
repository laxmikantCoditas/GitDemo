Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.onReady(function () {
   store1.loadData([{
       name: 'Jan',
       data1: 100
   }, {
       name: 'Feb',
       data1: 100
   }, {
       name: 'Mar',
       data1: 100
   }, {
       name: 'Apr',
       data1: 100
   }, {
       name: 'May',
       data1: 100
   }, {
       name: 'Jun',
       data1: 100
   }, {
       name: 'Jul',
       data1: 100
   }, {
       name: 'Aug',
       data1: 100
   }, {
       name: 'Sep',
       data1: 100
   }, {
       name: 'Oct',
       data1: 100
   }, {
       name: 'Nov',
       data1: 100
   }, {
       name: 'Dec',
       data1: 100
   }]);

   var win = Ext.create('Ext.Window', {
       width: 800,
       height: 600,
       hidden: false,
       maximizable: true,
       title: 'Column Chart',
       renderTo: Ext.getBody(),
       layout: 'fit',
       items: {
           id: 'chartCmp',
           xtype: 'chart',
           animate: true,
           shadow: true,
           store: store1,
           axes: [{
               type: 'Category',
               position: 'bottom',
               fields: ['name'],
               title: 'Month of the Year'
           }],
           series: [{
               type: 'column',
               axis: 'left',
               label: {
                 display: 'insideEnd',
                 'text-anchor': 'middle',
                   field: 'data1',
                   renderer: Ext.util.Format.numberRenderer('0'),
                   orientation: 'vertical',
                   color: '#333'
               },
               xField: 'name',
               yField: 'data1'
           }]
       }
   });
});