Ext.onReady(function () {
    Ext.MessageBox.show({
        title: 'Löschen',
        msg: 'Soll der Datensatz wirklich gelöscht werden?',
        modal: true,
        icon: Ext.Msg.QUESTION,
        buttons: Ext.Msg.YESNO
    });
});
