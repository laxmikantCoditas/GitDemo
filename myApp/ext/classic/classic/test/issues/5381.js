Ext.onReady(function(){
    var ErrorMessageWindow = Ext.create('Ext.Window', {
        title: 'Error!',
        autoWidth: true,
        autoHeight: true,
        maxHeight: '50px',
        autoScroll: true,
// overlapHeader: true,
// frame: true,
        modal: true,
        closable: true,
        closeAction: 'hide',
        hidden: true,
        padding: 5,
        iconCls: "infoButton",
        layout: 'anchor',
        items: [
            ErrorMessageDisplay = Ext.create('Ext.form.Label', {
                margin: 5,
                html: "testerror",
                anchor: '100%'
            }),
            ErrorMessageDetails = Ext.create('Ext.panel.Panel', {
                collapsible: true,
                collapsed: true,
                titleCollapse: true,
                autoScroll: true,
                anchor: '100%',
                title: "Press for more details",
                margin: '5 5 30 5',
                height: 250,
                items: [
                    ErrorMessageDetailsDisplay = Ext.create('Ext.form.Display', {
                        fieldLabel: ''
                    })
                ],
                listeners: {

                }
            })
        ],
        buttons: [
            Ext.create('Ext.Button', {
                tooltip: "Ok",
                text: "Ok",
                cls: "btn-style",
                width: 100,
                handler: function() {
// ErrorMessageWindow.hide();
                    ErrorMessageWindow.setVisible(false);
                }
            })
        ]
    });
    ErrorMessageWindow.show();
});
