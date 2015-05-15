Ext.application({
    name : 'Fiddle',

    launch : function() {
         Ext.create('Ext.window.Window', {
            layout: 'fit',
            modal: true,
            title: 'title',
            height: 300,
            width: 600,

            items: [{
                xtype: 'form',
                items: [{
                    xtype: 'textfield',
                    emptyText: 'Story Name',
                    name: 'title',
                    label: 'title',
                }, {
                    xtype: 'htmleditor',
                    name: 'description',
                    id: 'htmleditor'
                }]
            }]
        }).show();
    }
});
