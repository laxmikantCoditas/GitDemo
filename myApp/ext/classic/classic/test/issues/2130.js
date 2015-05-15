var title = 'HBox/Field labelAlign';

Ext.require(['*']);

Ext.onReady(function(){
    var cnt = Ext.ComponentManager.create({
        xtype: 'panel',
        renderTo    : Ext.getBody(),
        layout      : 'hbox',
        defaultType : 'textfield',
        title: 'HBox w/labelAlign top',
        bodyPadding: 8,
        defaults    : {
            labelClsExtra: 'mycls',
            flex       : 1
        },
        items       : [
            { fieldLabel : 'Full Name', labelAlign: 'top' },
            { fieldLabel : 'Email', vtype : 'email' }
        ]
    });
});
