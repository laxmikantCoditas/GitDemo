Ext.require([
    'Ext.data.*',
    'Ext.grid.*'
]);

Ext.define('Thing', {
    extend: 'Ext.data.Model',
    fields: ['aString', 'someHtml', 'aNumber', 'aFloat']
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
                someHtml: '<div style="color: red;">Foo</div>',
                aNumber: 12345678,
                aFloat: 123.4
            }]
        },
        columns: [{
            dataIndex: 'aString',
            text: 'aString',
            renderer: 'capitalize'
        }, {
            dataIndex: 'someHtml',
            text: 'someHtml',
            renderer: 'stripTags'
        }, {
            dataIndex: 'aNumber',
            text: 'aNumber',
            renderer: 'fileSize'
        }, {
            dataIndex: 'aFloat',
            text: 'aFloat',
            renderer: 'usMoney'
        }]
    });

});
