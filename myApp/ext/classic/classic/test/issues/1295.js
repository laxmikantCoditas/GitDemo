Ext.require([
    'Ext.window.Window',
    'Ext.form.field.Text'
]);
Ext.onReady(function() {
    Ext.createWidget('window', {
        title: 'My second field should gain focus immediately',
        width: 400,
        height: 250,
        items: [{
            xtype: 'textfield'
        },{
            xtype: 'textfield',
            value: 'This text will be selected'
        },{
            xtype: 'textfield'
        }],
        listeners: {
            afterrender: function(win) {
                win.query('>textfield')[1].focus(true, true);
            }
        }
    }).show();
});