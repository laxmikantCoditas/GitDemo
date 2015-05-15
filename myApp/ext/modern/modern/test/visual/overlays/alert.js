Ext.setup({
    requires: ['Ext.MessageBox'],
    onReady: function() {
        Ext.Msg.show({
            title: 'Title',
            message: 'The quick brown fox jumped over the lazy dog.',
            showAnimation: null,
            hideAnimation: null,
            buttons: Ext.MessageBox.OK,
            promptConfig: false
        });
    }
});