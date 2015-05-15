Ext.define('Qa.Tester.view.KeyframeGrid', {
    
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.t-keyframe-grid',
    
    
    store: 'Keyframes',
    
    columns: [{
        xtype: 'rownumberer'
    },{
        header: 'Description',
        dataIndex: 'description',
        flex: 1
    },{
        header: 'Type',
        dataIndex: 'type',
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