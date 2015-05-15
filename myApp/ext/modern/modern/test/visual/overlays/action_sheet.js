Ext.setup({
    onReady: function() {
        Ext.create('Ext.ActionSheet', {
            enter: null,
            exit: null,
            items: [
                {
                    text   : 'Delete draft',
                    ui     : 'decline'
                },
                {
                    text   : 'Save draft'
                },
                {
                    text   : 'Cancel'
                }
            ]
        }).show();
    }
});