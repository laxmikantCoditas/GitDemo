Ext.setup({
    requires: ['Ext.picker.Picker'],
    onReady: function() {
         (Ext.create('Ext.picker.Picker', {
             showAnimation: null,
             hideAnimation: null,
                slots: [
                    {
                        name : 'limit_speed',
                        title: 'Speed',
                        data : [
                            {text: '50 KB/s', value: 50},
                            {text: '100 KB/s', value: 100},
                            {text: '200 KB/s', value: 200},
                            {text: '300 KB/s', value: 300}
                        ]
                    }
                ]
            })).show();
    }
});