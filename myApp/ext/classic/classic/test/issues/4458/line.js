Ext.require('Ext.chart.*');

var lineChart = Ext.create('Ext.chart.Chart',{
	id: 'line-chart',
    xtype: 'chart',
    style: 'background:#fff',
    animate: false,
    height: 350,
    width: 800,	
    store: lineChartStore,
    shadow: true,
    theme: 'Category1',
    legend: {
        position: 'right'
    },
    axes: [{
        type: 'Numeric',
        minimum: 0,
        position: 'left',
        fields: ['avg-sales-price', 'avg-nat-sales-price'],
        title: 'Average Sales Price by Month',
        minorTickSteps: 1,
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 0.5
            }
        }
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['category-name'],
        title: 'Month'
    }],
    series: [{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
		tips: {
			  trackMouse: true,
			  width: 140,
			  height: 40,
			  renderer: function(storeItem, item) {
				this.setTitle('Avg Sales Price: $' + storeItem.get('avg-sales-price'));
			  }
		},
        axis: 'left',
        xField: 'category-name',
        yField: 'avg-sales-price',
        markerConfig: {
            type: 'circle',
            size: 4,
            radius: 4,
            'stroke-width': 0
        }
    }, {
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
		tips: {
			  trackMouse: true,
			  width: 140,
			  height: 40,
			  renderer: function(storeItem, item) {
				this.setTitle('Avg National Sales Price: $' + storeItem.get('avg-nat-sales-price'));
			  }
		},
        axis: 'left',
        smooth: true,
        xField: 'category-name',
        yField: 'avg-nat-sales-price',
        markerConfig: {
            type: 'circle',
            size: 4,
            radius: 4,
            'stroke-width': 0
        }
    }]
});

function initializeView() {

	var containerPanel = Ext.create('Ext.panel.Panel', {
		id: 'containerPanel',
		title : 'Charts!',
		renderTo : "chartWrapper",
		layout : 'fit',
		items : [ lineChart]
	});

}
