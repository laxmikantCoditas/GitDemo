Ext.require('*');
Ext.onReady(function() {
    Ext.create('Ext.form.field.Text', {
        id: 'padding-test',
        padding: '80 0 0 80',
        width: 100,
        renderTo: document.body
    })
});