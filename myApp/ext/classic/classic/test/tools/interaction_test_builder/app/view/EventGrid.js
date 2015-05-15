Ext.define('Qa.Tester.view.EventGrid', {
    
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.t-event-grid',
    
    title: 'Spied Events',
    
    store: 'Events',
    
    columns: [{
        xtype: 'rownumberer'
    },{
        header: 'Observable',
        dataIndex: 'observable',
        flex: 1
    },{
        header: 'Event',
        dataIndex: 'name',
        width: 100
    },{
        header: 'Received At',
        dataIndex: 'timestamp',
        width: 100,
        renderer: function(value) {
            return Ext.Date.format(new Date(value), 'h:i:s:u');
        }
    }]
});