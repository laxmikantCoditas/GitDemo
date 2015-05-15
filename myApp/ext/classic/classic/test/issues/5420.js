Ext.onReady(function() {

    Ext.define('Point', {
        extend : 'Ext.data.Model',
        fields : ['y', 'x']
    });

    var store = Ext.create('Ext.data.Store', {
        model : 'Point',
        data : [{
            y : 1,
            x : 1
        }, {
            y : 30,
            x : 2
        }, {
            y : 34,
            x : 3
        },{
            y : 15,
            x : 4
        },{
            y : 27,
            x: 5
        },{
            y : 4,
            x : 6
        }]
    });

    var chart = Ext.create('Ext.chart.Chart', {
        store : store,
        style : 'background:#fff',
        mask : 'horizontal',
        enableMask: true,
        listeners : {
            select : {
                fn : function(me, selection) {
                    me.setZoom(selection);
                    me.mask.hide();
                }
            }
        },
        axes : [{
            type : 'Numeric',
            position : 'left',
            fields : 'y',
            title : 'Y',
        }, {
            type : 'Numeric',
            position : 'bottom',
            fields : 'x',
            title : 'X'
        }],
        series : [{
            type : 'line',
            axis : 'left',
            xField : 'x',
            yField : 'y',
            axis : ['left', 'bottom'],
        }]
    });

    var win = Ext.create('Ext.Window', {
        width : 800,
        height : 600,
        hidden : false,
        title : 'Line Chart',
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : chart
    });

    chart.redraw(true);
});
