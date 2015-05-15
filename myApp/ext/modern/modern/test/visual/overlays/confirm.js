Ext.setup({
    requires: ['Ext.MessageBox'],
    onReady: function() {
        Ext.Msg.show({
            title: 'Confirmation',
            message: 'Are you sure you want to do that?',
            showAnimation: null,
            hideAnimation: null,
            buttons: Ext.MessageBox.YESNO,
            promptConfig: false
        });
    }
});