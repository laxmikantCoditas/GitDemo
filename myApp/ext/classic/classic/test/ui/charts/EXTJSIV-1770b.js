Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.onReady(function () {
   Ext.define('SalesGrowthGlobal', {
	extend: 'Ext.data.Model',
    fields: [
        {name: 'productLine',  			type: 'string'},
        {name: 'salesRegion',  			type: 'string'},
        {name: 'upperTarget',  			type: 'float'},
        {name: 'value',                         type: 'float'}
    ]
});

    var salesGrowthGlobalChart = {                          
             id : 'salesGrowthGlobalChart',
             xtype : 'chart',
             width: 800,
             height: 600,            
             store: store,
             shadow: true,
             theme: 'Category1',
             legend: {
                 position: 'right'  
               },
             axes: [{
                 type: 'Numeric',
                 position: 'left',
                 fields: ['upperTarget','value'],                 
                 minorTickSteps: 1,
                 label: {
                     renderer: Ext.util.Format.numberRenderer('0.00')
                 },
                 grid: true
             },{
                 type: 'Category',
                 position: 'bottom',
                 fields: 'salesRegion',
                 title: 'Sales Region'
             }],
             series: [{
                 type: 'column',
                 axis: 'left',
                 gutter: 30,              
                 label: {
                 	display: 'outside',
                 	'text-anchor': 'middle',
                 	//field: ['lowerTarget','value'],
                 	renderer: Ext.util.Format.numberRenderer('0.00'),
                 	orientation: 'horizontal',
                 	color: '#FFF'
                 },
                 xField: 'salesRegion',
                 yField: ['upperTarget','value'],
                 style: {
                     opacity: 0.8
                 }          
             }]             
         };
});