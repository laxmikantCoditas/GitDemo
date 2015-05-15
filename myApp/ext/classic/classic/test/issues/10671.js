Ext.Loader.setConfig({enabled: true});
Ext.onReady(function () {
// NOTE: Select a record, then click "Delete":
    var win = Ext.widget('window',{
        width: 500,
        heigth: 500,
        layout: 'fit',
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                text: 'delete',
                handler: function(btn) {
                    var grid = btn.up('window').down('grid');
                    var sel = grid.getSelectionModel().getSelection()[0];
                    if (sel) {
                        sel.destroy({
                            callback: function() {
                                console.log('destroyed');
                            }});
                    }
                }
            }]
        }],
        items: [{
            xtype: 'grid',
            columns: [{
                header: 'test',
                dataIndex: 'name'
            }],
            store: Ext.create('Ext.data.Store', {
                fields: ['id','name'],
                data: [{
                    id: 1,
                    name: 'eins'
                }, {
                    id: 2,
                    name: 'zwei'
                }]
            })
        }]
    }).show();
});
