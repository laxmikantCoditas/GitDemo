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
            renderer: function(v) {
                return v + 'Foo';
            }
        }, {
            dataIndex: 'aDate',
            text: 'aDate',
            renderer: function(v){
                return Ext.Date.format(v, 'Y/m/d');
            }
        }, {
            dataIndex: 'aNumber',
            text: 'aNumber',
            renderer: function(v){
                return v + ' Dollars'
            }
        }, {
            dataIndex: 'aFloat',
            text: 'aFloat',
            xtype: 'actioncolumn',
            items: [{
                icon: '../../../../examples/shared/icons/fam/delete.gif'
            }, {
                icon: '../../../../examples/shared/icons/fam/add.gif'    
            }]
        }, {
            dataIndex: 'aBool',
            text: 'aBool',
            xtype: 'actioncolumn',
            renderer: function(v){
                return v ? 'Foo' : 'Bar';
            },
            items: [{
                icon: '../../../../examples/shared/icons/fam/delete.gif'
            }, {
                icon: '../../../../examples/shared/icons/fam/add.gif'    
            }]
        }]
    });

});
