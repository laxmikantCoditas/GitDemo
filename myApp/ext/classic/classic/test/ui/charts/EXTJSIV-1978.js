Ext.require('Ext.chart.*');
Ext.require('Ext.data.*');

Ext.onReady(function(){
   var d = new Date;
    var store = Ext.create('Ext.data.JsonStore', { 
        fields: ['date', 'sc'], 
        data: [ 
            {date: d, sc: 1}, 
            {date: Ext.Date.add(d, Ext.Date.DAY, 1),   sc: 3}, 
            {date: Ext.Date.add(d, Ext.Date.DAY, 5), sc: 4}, 
            {date: Ext.Date.add(d, Ext.Date.DAY, 6), sc: 3}, 
            {date: Ext.Date.add(d, Ext.Date.DAY, 7), sc: 2} 
        ] 
    }); 
        
    Ext.create('Ext.Panel', { 
        width: 800,  
        height: 400, 
        hidden: false, 
        border: 0, 
        renderTo: Ext.getBody(), 
        layout: 'fit', 
        items: [{ 
            xtype: 'chart', 
            id: 'accountChart', 
            style: 'background:#fff', 
            animate: true, 
            store: store, 
            shadow: false, 
            theme: 'Category1', 
            axes: [{ 
                type: 'Numeric', 
                position: 'left', 
                fields: ['sc'], 
                title: 'Y' 
            }, { 
                title: 'Timeline', 
                type: 'Time', 
                position: 'bottom', 
                fields: ['date'], 
                dateFormat: 'M d', 
                groupBy: 'year,month,day',
                fromDate: d,
                toDate: Ext.Date.add(d, Ext.Date.DAY, 7),
                constrain: true
            }], 
            series: [{ 
                type: 'line', 
                axis: 'left', 
                xField: 'date', 
                yField: 'sc', 
                showMarkers: true 
            }] 
        }] 
    }); 
});