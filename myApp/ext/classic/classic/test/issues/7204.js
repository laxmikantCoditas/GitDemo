Ext.require([
    'Ext.panel.Panel',
    'Ext.form.field.File',
    'Ext.button.Button'
]);

Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        renderTo    : Ext.getBody(),
        height      : 200,
        width       : 320,
        bodyPadding : 10,
        title       : 'Panel',
        items       : [
            {
                xtype    : 'filefield',
                disabled : true,
                id       : 'file'
            }
        ],
        dockedItems : [
            {
                xtype : 'toolbar',
                dock  : 'top',
                items : [
                    {
                        xtype     : 'button',
                        text      : 'Disable field',
                        listeners : {
                            click : function () {
                                Ext.getCmp('file').disable();
                            }
                        }
                    },
                    {
                        xtype     : 'button',
                        text      : 'Enable field',
                        listeners : {
                            click : function () {
                                Ext.getCmp('file').enable();
                            }
                        }
                    }
                ]
            }
        ]
    }).show();

});
