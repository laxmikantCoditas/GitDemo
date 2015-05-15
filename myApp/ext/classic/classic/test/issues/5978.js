Ext.define('My.TabpageWindow', {
    extend: 'Ext.window.Window',
    height: 500,
    width: 500,
    autoScroll: true,
    title: 'Tabpanel window',
    items: [{
        xtype: 'tabpanel',
        items: [{
            xtype: 'form',
            itemId: 'validationForm',
            title: 'Tabpanel 1',
            items: [{
                xtype: 'textfield',
                allowBlank: false,
                fieldLabel: 'Errortip test',
                value: ''
            }]
        }, {
            xtype: 'panel',
            title: 'Tabpanel 2'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 3'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 4'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 5'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 6'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 7'
        }, {
            xtype: 'panel',
            title: 'Tabpanel 8'
        }]
    }]
});

Ext.onReady(function () {
    var window = Ext.create('My.TabpageWindow').show();
    window.down('#validationForm').getForm().isValid();

});
