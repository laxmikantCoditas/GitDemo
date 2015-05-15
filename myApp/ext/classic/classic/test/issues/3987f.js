Ext.require(["Ext.data.*",
                "Ext.chart.*"]);
/**
 * The overall approach is to load data into the store at intervals, and update the minimum maximum
 * at an even faster interval so the graph looks like it's moving 
 */
Ext.onReady(function() {
    var chart;
    var generateData = (function(){
        var fakeValues = [1, .8, .7, .5, .3, .2, 0, -.3, -.5, -.8, -1, -.8, -.3, -.2, 0, .1, .4, .6, .8, .9];
        var data = [], i = -10,
            random = Math.random;
        
        return function(){
            data = data.slice();
            data.push({
                tstamp: i+=10,
                data: fakeValues[((random()*(fakeValues.length-1))>>0)]
            });
            return data;
        };
    })();

    
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['tstamp','data'],
        data: generateData()
    });

    var intr = setInterval(function(){
        var gs = generateData(),
            maximum = axis.maximum,
            lastTstamp = gs[gs.length-1].tstamp,
            markerIndex = chart.markerIndex || 0;

        
        if(+maximum < +lastTstamp){
            markerIndex = 1;
            axis.maximum = axis.maximum + 10;
            axis.minimum = axis.minimum + 10;
            chart.markerIndex = markerIndex;
        }
        store.loadData(gs);
            
    }, 400);
    

   Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        maximizable: true,
        title: 'Live Animated Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'chart',
            style: 'background:#fff',
            shadow:true,
            id: 'chartCmp',
            store: store,
            animate: true,
            axes: [{
                title: 'Wave value',
                type: 'Numeric',
                grid: true,
                position: 'left',
                grid: {
                        odd: {
                            fill: '#dedede',
                            stroke: '#ddd',
                            'stroke-width': 0.5
                        }
                },
                fields: ['data'],
                minimum: -1,
                maximum: 1
            } ,{
                title: 'Time',
                // Time axis is buggy, wants to group everything, treat timestamp as numbers
                type: 'Numeric',
                fields: ['tstamp'],
                position: 'bottom',
                // Window of data being displayed, start by displaying half the initial data,
                // then move the window to the right at intervals
                minimum:  0,
                maximum:  100,
                constrain: true
            }],
            series: [{
                type: 'line',
                axis: ['left', 'bottom'],
                xField: 'tstamp',
                yField: 'data',
                smooth:false,
                showMarkers: true,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('tstamp')+"/"+storeItem.get('data'));
                    }
                },
                markerConfig: {
                    radius: 5,
                    size: 5
                }
            }]
        }]
    });
    chart = Ext.getCmp("chartCmp");
    var axis = chart.axes.get(1);

}); 