var chart, store;

store = Ext.create('Ext.data.JsonStore', {
    fields : ['name', 'data'],
    data   : [
        { name : 'metric one',   data : 10 },
        { name : 'metric two',   data : 7  },
        { name : 'metric three', data : 5  },
        { name : 'metric four',  data : 2  },
        { name : 'metric five',  data : 27 }
    ]
});

chart = Ext.create('Ext.chart.Chart', {
    renderTo : Ext.getBody(),
    width    : 500,
    height   : 300,
    store    : store,
    axes     : [
        {
            type     : 'Numeric',
            position : 'left',
            titleAlign: 'end', // or 'start', or 'center'/empty
            fields   : ['data'],
            label    : {
                renderer : Ext.util.Format.numberRenderer('0,0')
            },
            title    : 'Sample Values',
            grid     : true,
            minimum  : 0
        },
        {
            type     : 'Category',
            position : 'bottom',
            titleAlign: 'start', // or 'end', or 'center'/empty
            fields   : ['name'],
            title    : 'Sample Metrics'
        }
    ],
    series   : [
        {
            type      : 'column',
            axis      : 'left',
            xField    : 'name',
            yField    : 'data'
        }
    ]
});

Ext.create('Ext.button.Button', {
    renderTo: Ext.getBody(),
    text: 'Refresh',
    handler: function() {
        if (chart) {
            chart.refresh();
        }
    }
});
