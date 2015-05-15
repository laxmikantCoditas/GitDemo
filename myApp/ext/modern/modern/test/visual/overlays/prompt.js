Ext.setup({
    requires: ['Ext.MessageBox'],
    onReady: function() {
        Ext.Msg.show({
            title: 'Welcome!',
            message: "What's your first name?",
            showAnimation: null,
            hideAnimation: null,
            buttons  : Ext.MessageBox.OKCANCEL,
            prompt   : prompt || true
        });
    }
});