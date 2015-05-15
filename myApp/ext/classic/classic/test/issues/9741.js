Ext.onReady(function () {
    var htmleditor = new Ext.panel.Panel({
        title: 'HTML Editor',
        renderTo: Ext.getBody(),
        layout: 'fit',
        width: 550,
        height: 250,
        frame: true,
        items: {
            xtype: 'htmleditor',
            name: 'MyEditorName'
        }
    });

    var editor = htmleditor.down('htmleditor');
    editor.markInvalid();
    console.log(editor.isValid());
});
