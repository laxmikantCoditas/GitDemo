Ext.define('Stat', {
    extend: 'Ext.data.Model',
    fields: ['name', 'hits']    
});

Ext.require('Ext.chart.*');

Ext.onReady(function(){
    
    function createStore() {
        var data = [],
            i = 0;
            
        for (; i < 12; ++i) {
            data.push({
                name: Ext.Date.monthNames[i],
                hits: Math.floor(Math.random() * 11)
            });
        }
            
        return {
            model: 'Stat',
            data: data
        };
    }

    Ext.create('Ext.panel.Panel', {
        width: 600,
        height: 400,
        renderTo: document.body,
        layout: 'fit',
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Bind new store',
                handler: function(){
                    Ext.getCmp('chart').bindStore(createStore());
                }
            }
        }],
        items: {
            id: 'chart',
            xtype: 'chart',
            store: createStore(),
            axes: [{
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['hits'],
                title: 'Number of Hits'
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'line',
                axis: 'left',
                xField: 'name',
                yField: 'hits'
            }]
        }
    });
    
});
