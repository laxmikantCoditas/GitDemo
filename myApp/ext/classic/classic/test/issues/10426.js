
var store = Ext.create('Ext.data.JsonStore', {
    fields : ['field1', 'field2'],
    data : [{'field1':5, 'field2':17}]
});


Ext.create('Ext.chart.Chart', {
    renderTo: Ext.getBody(),
    height: 100,
    width: 400,
    animate: true,
    store: store,
    shadow : true,
    legend : {
        position : 'bottom',
        boxStrokeWidth : 0,
        padding : 0
    },

    // Workaround for https://sencha.jira.com/browse/EXTJSIV-10426
    //
    //      axes: [{
    //          type: 'Numeric',
    //          position: 'bottom',
    //          hidden: true
    //      }],

    series : [ {
        type : 'bar',
        axis : 'bottom',
        gutter : 0,
        groupGutter : 0,
        yField : ['field1', 'field2'],
        stacked : true
    } ]
});


