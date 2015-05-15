Ext.require([
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.define('Thing', {
    extend: 'Ext.data.Model',
    fields: ['aString', 'aDate', 'aNumber', 'aFloat', 'aBool']
});

Ext.onReady(function() {

    new Ext.grid.Panel({
        width: 800,
        height: 300,
        renderTo: document.body,
        store: {
            model: 'Thing',
            data: [{
                aString: 'foo',
                aDate: new Date(),
                aNumber: 12345678,
                aFloat: 123456.7,
                aBool: true
            }]
        },
        columns: [{
            dataIndex: 'aString',
            text: 'aString',
            xtype: 'templatecolumn',
            tpl: '{aString} bar'
        }, {
            dataIndex: 'aDate',
            text: 'aDate',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            dataIndex: 'aNumber',
            text: 'aNumber',
            xtype: 'numbercolumn',
            format: '0.00'
        }, {
            dataIndex: 'aFloat',
            text: 'aFloat',
            xtype: 'numbercolumn'
        }, {
            dataIndex: 'aBool',
            text: 'aBool',
            xtype: 'booleancolumn'
        }]
    });

});
