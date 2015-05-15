Ext.require('Ext.data.reader.Xml');
Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox']);

Ext.onReady(function () {
		var me = this;
		var highlow = false;   

		var convertToFloat = function(value, record) {
								if (value === '') 
									return '';
								else {
									value = parseFloat(value);
									return value;
								}
							}
		
		var rsstore = Ext.create('Ext.data.Store', {  
				proxy: {
					type: 'ajax',
					url: 'HCSSample.xml',  
					//xmlData: xml,
					reader: {
						type: 'xml',
						record: 'GRAPHINFO'
					}
				},
				fields: [
			            {name: 'RSVALUE', convert: convertToFloat},
			            {name: 'RSDATE', type: 'string'},
			            {name: 'RSTIME', type: 'string'},
			            {name: 'DATETIME', 
							convert: function(value, record) {
			                var datetime  = Ext.Date.format(Ext.Date.parse(record.get('RSDATE'), 'Ymd'), 'm/d/y') + '\n' + Ext.String.leftPad(record.get('RSTIME').trim(), 5, '0');
	                		return datetime;
	        				}			
						},
			            {name: 'RSNLOW', convert: convertToFloat},
			            {name: 'RSNHIGH', convert: convertToFloat}
			           ],
			    autoLoad: true
			});

		var chart = Ext.create('Ext.chart.Chart', {
	
			shadow: true, 
			itemId: 'lc0',
			highrangefield: 'RSNHIGH',
			lowrangefield: 'RSNLOW',
			leftaxestype: 'Numeric',
			leftaxesfields: ['RSVALUE'],
			leftaxestitle: 'replace',
			bottomaxestype: 'Category',
			bottomaxesfields: ['DATETIME'],
			bottomaxestitle: '',
			seriesxfield: 'DATETIME',
			seriesyfield: ['RSVALUE'],
			legend: false,           
			store : rsstore,
			
			xtype: 'chart',
			animate: true,
			axes: [
				{
					position: 'left',
					type: 'Numeric',
					grid: true,
					fields: ['RSVALUE', 'RSNLOW', 'RSNHIGH'],
					title: 'replace',                
					legend: false
				},
				{
					type: 'Category',
					position: 'bottom',
					fields: ['DATETIME'],
					title: '',
					label: {
								rotate: {
									degrees: -90                            
								} 
						   }   
				}
			],
			series:	[{
				type: 'line', 
				axis: 'left', 
				gutter: 80, 
				highlight: {
					size: 4,
					radius: 4
				},
				xField: 'DATETIME', 
				yField: ['RSVALUE'],
				selectionTolerance:8,					
				markerConfig: {
					type: 'circle', 
					size: 2, 
					radius: 2, 
					'stroke-width': 0
				}, 
				fill: true,
				style: { 
					fill: 'yellow', 
					stroke: 'yellow', 
					opacity: .5, 
					'stroke-width': 5, 
//					'stroke-dasharray': 5 
				},
				tips: {
					trackMouse: true, 
					width: 140, 
					height: 28, 
					seriesyfield: ['RSVALUE'],
					renderer: function(storeItem, item) {
						this.setTitle(storeItem.get('DATETIME') + ': ' + storeItem.get('RSVALUE'));
					}
				}
			},
			{
				type: 'line', 
				axis: 'left', 
				gutter: 80, 
				highlight: {
                    size: 7,
                    radius: 7
                },
				xField: 'DATETIME', 
				yField: ['RSNHIGH'],
				selectionTolerance:8,
				markerConfig: {
					type: 'plus', 
					size: 2, 
					radius: 2, 
					'stroke-width': 0 
				},
				fill: true,
				style: { 
					fill: 'orange', 
					stroke: 'orange', 
					opacity: .5, 
					'stroke-width': 1, 
//					'stroke-dasharray': 10 
				},
				tips: {
					trackMouse: true, 
					width: 140, 
					height: 28, 
					seriesyfield: ['RSNHIGH'],
					renderer: function(storeItem, item) {
    					this.setTitle(storeItem.get('DATETIME') + ': ' + storeItem.get('RSVALUE'));
	    			}
    			}   
    		},
			{
				type: 'line', 
				axis: 'left', 
				gutter: 80, 
				highlight: {
                    size: 7,
                    radius: 7
                },
				xField: 'DATETIME', 
				yField: ['RSNLOW'],
				selectionTolerance:8,
				markerConfig: {
					type: 'plus', 
					size: 2, 
					radius: 2, 
					'stroke-width': 0 
				},
				fill: true,
				style: { 
					fill: 'blue', 
					stroke: 'blue', 
					opacity: .5,  
					'stroke-width': 1, 
//					'stroke-dasharray': 10 
				},
				tips: {
					trackMouse: true, 
					width: 140, 
					height: 28, 
					seriesyfield: ['RSNLOW'],
					renderer: function(storeItem, item) {
    					this.setTitle(storeItem.get('DATETIME') + ': ' + storeItem.get('RSVALUE'));
	    			}
    			}
    		}
			
			
			
			]
		});

		var win = Ext.create('Ext.Window', {
			width: 800,
			height: 600,
			minHeight: 400,
			minWidth: 550,
			hidden: false,
			maximizable: true,
			title: 'Line Chart',
			renderTo: Ext.getBody(),
			layout: 'fit',
			items: chart
		});
	
	
});

 
