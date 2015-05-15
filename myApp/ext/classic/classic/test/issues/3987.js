Ext.require(["Ext.data.*",
                "Ext.chart.*"]);
/**
 * The overall approach is to load data into the store at intervals, and update the minimum maximum
 * at an even faster interval so the graph looks like it's moving 
 */
Ext.onReady(function() {

    // Create fake wave data
    var fakeValues = [1, .8, .7, .5, .3, .2, 0, -.3, -.5, -.8, -1, -.8, -.3, -.2, 0, .1, .4, .6, .8, .9];   

    var generateData = (function(){
        var data = [], i = -10,
            random = Math.random;

        return function(){
            data.push([i+=10, fakeValues[(random()*10)>>0]]);
            return data;
        };
    })();

    var store = Ext.create("Ext.data.ArrayStore",{
        fields: ['tstamp', 'data'],
        data: generateData()
    });


    var chart = Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1600,
        height: 800,
        store: store,
        axes: [{
            title: 'Wave value',
            type: 'Numeric',
            position: 'left',
            fields: ['data'],
            minimum: -1,
            maximum: 1
        },{
            title: 'Time',
            // Time axis is buggy, wants to group everything, treat timestamp as numbers
            type: 'Numeric',
            fields: ['tstamp'],
            position: 'bottom',
            // Window of data being displayed, start by displaying half the initial data,
            // then move the window to the right at intervals
            minimum:  0 ,
            maximum:  100
        }],
        series: [{
            type: 'line',
            axis: ['left','bottom'],
            xField: 'tstamp',
            yField: 'data',
            showMarkers: false,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('data')+"");
                }
            }
        }]
    });
    
    
    function updateWindow() {
        var d = generateData();
        d = d.slice();
        var axis = chart.axes.get('bottom');

        if(+axis.maximum < d[d.length-1][0]){
            axis.minimum += 10;
            axis.maximum += 10;
        }
        store.load(d);
    }
    
    setInterval(updateWindow, 300);
}); 