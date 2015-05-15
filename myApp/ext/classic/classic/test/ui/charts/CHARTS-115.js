Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function(){
    /* 
     Random data to test performance of charts with a lot of data. Has over 1000 points.
     */
    Ext.define('SalesPricesByMonthScatter', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'category-name',
            type: 'String'
        }, {
            name: 'avg-sales-price',
            type: 'double'
        }, {
            name: 'avg-nat-sales-price',
            type: 'double'
        }, {
            name: 'avg-msrp',
            type: 'double'
        }, {
            name: 'avg-sale-price',
            type: 'double'
        }, {
            name: 'avg-price-at-cost',
            type: 'double'
        }]
    });
    
    var scatterStore = Ext.create('Ext.data.JsonStore', {
        model: 'SalesPricesByMonthScatter',
        data: [{
            'category-name': 'January',
            'avg-sales-price': 245.901976,
            'avg-nat-sales-price': 279.011987,
            'avg-msrp': 329.15,
            'avg-sale-price': 224.25,
            'avg-price-at-cost': 194.234
        }, {
            'category-name': 'February',
            'avg-sales-price': 258.567179,
            'avg-nat-sales-price': 285.578614,
            'avg-msrp': 320.236,
            'avg-sale-price': 232.252156,
            'avg-price-at-cost': 204.234
        }, {
            'category-name': 'March',
            'avg-sales-price': 256.455452,
            'avg-nat-sales-price': 290.075916,
            'avg-msrp': 330.325,
            'avg-sale-price': 221.251,
            'avg-price-at-cost': 197.234
        }, {
            'category-name': 'April',
            'avg-sales-price': 250.554505,
            'avg-nat-sales-price': 285.600000,
            'avg-msrp': 301.3254,
            'avg-sale-price': 240.251,
            'avg-price-at-cost': 186.234
        }, {
            'category-name': 'May',
            'avg-sales-price': 241.545747,
            'avg-nat-sales-price': 273.122443,
            'avg-msrp': 310.15,
            'avg-sale-price': 219.236,
            'avg-price-at-cost': 201.234
        }, {
            'category-name': 'June',
            'avg-sales-price': 248.852938,
            'avg-nat-sales-price': 281.153440,
            'avg-msrp': 315.2521,
            'avg-sale-price': 224.561,
            'avg-price-at-cost': 185.234
        }, {
            'category-name': 'July',
            'avg-sales-price': 245.315083,
            'avg-nat-sales-price': 278.753754,
            'avg-msrp': 305.252,
            'avg-sale-price': 232.262,
            'avg-price-at-cost': 186.234
        }, {
            'category-name': 'August',
            'avg-sales-price': 254.302098,
            'avg-nat-sales-price': 287.891469,
            'avg-msrp': 325.15,
            'avg-sale-price': 246.325,
            'avg-price-at-cost': 197.234
        }, {
            'category-name': 'September',
            'avg-sales-price': 257.432922,
            'avg-nat-sales-price': 291.385679,
            'avg-msrp': 311.325,
            'avg-sale-price': 243.252,
            'avg-price-at-cost': 190.234
        }, {
            'category-name': 'October',
            'avg-sales-price': 247.217493,
            'avg-nat-sales-price': 283.266213,
            'avg-msrp': 332.15,
            'avg-sale-price': 235.325,
            'avg-price-at-cost': 188.234
        }, {
            'category-name': 'November',
            'avg-sales-price': 239.898922,
            'avg-nat-sales-price': 269.902480,
            'avg-msrp': 305.2462,
            'avg-sale-price': 212.26,
            'avg-price-at-cost': 195.234
        }, {
            'category-name': 'December',
            'avg-sales-price': 244.435373,
            'avg-nat-sales-price': 276.609108,
            'avg-msrp': 311.426,
            'avg-sale-price': 228.234,
            'avg-price-at-cost': 190.234
        }]
    });
    var largeScatterChart = Ext.create('Ext.chart.Chart', {
        id: 'scatter-chart',
        xtype: 'chart',
        style: 'background:#fff',
        animate: true,
        autosize: true,
        shadow: true,
        theme: 'Category1',
        store: scatterStore,
        legend: {
            position: 'right'
        },
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['avg-price-at-cost', 'avg-sale-price', 'avg-sales-price', 'avg-nat-sales-price', 'avg-msrp'],
            title: 'Average Price',
            grid: true
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['category-name'],
            title: 'Average Prices Over Two Decades (by month)'
        }],
        series: [{
            showInLegend: true,
            type: 'scatter',
            axis: 'left',
            xField: 'category-name',
            yField: 'avg-price-at-cost',
            markerConfig: {
                type: 'circle',
                size: 2,
                radius: 2
            },
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item){
                    this.setTitle(String(item.value[1]));
                }
            }
        }, {
            showInLegend: true,
            type: 'scatter',
            axis: 'left',
            xField: 'category-name',
            yField: 'avg-sale-price',
            markerConfig: {
                type: 'circle',
                size: 2,
                radius: 2
            },
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item){
                    this.setTitle(String(item.value[1]));
                }
            }
        
        }, {
            showInLegend: true,
            type: 'scatter',
            axis: 'left',
            xField: 'category-name',
            yField: 'avg-sales-price',
            markerConfig: {
                type: 'circle',
                size: 2,
                radius: 2
            },
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item){
                    this.setTitle(String(item.value[1]));
                }
            }
        
        }, {
            showInLegend: true,
            type: 'scatter',
            axis: 'left',
            xField: 'category-name',
            yField: 'avg-nat-sales-price',
            markerConfig: {
                type: 'circle',
                size: 2,
                radius: 2
            },
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item){
                    this.setTitle(String(item.value[1]));
                }
            }
        }, {
            showInLegend: true,
            type: 'scatter',
            axis: 'left',
            xField: 'category-name',
            yField: 'avg-msrp',
            markerConfig: {
                type: 'circle',
                size: 2,
                radius: 2
            },
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item){
                    this.setTitle(String(item.value[1]));
                }
            }
        
        }]
    });
    
    var containerPanel = Ext.create('Ext.panel.Panel', {
        id: 'containerPanel',
        title: 'Large Scatter Chart',
        renderTo: document.body,
        layout: 'fit',
        height: 400,
        width: 800,
        items: [largeScatterChart]
    });
});

