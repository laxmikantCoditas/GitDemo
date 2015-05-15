Ext.setup({
    requires: ['Ext.Button', 'Ext.Toolbar'],
    onReady: function() {
        var segmentedbutton = {
            xtype: 'segmentedbutton',
            flex: 1,
            items: [
                { text: 'Item 1', iconCls: 'home' },
                { text: 'Item 2', iconCls: 'home' },
                { text: 'Item 3', iconCls: 'home' },
                { text: 'Item 4', iconCls: 'home' }
            ]
        };

        Ext.Viewport.add([
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [segmentedbutton]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'light',
                items: [segmentedbutton]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'neutral',
                items: [segmentedbutton]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'plain',
                items: [segmentedbutton]
            },
            {
                xtype: 'container',
                padding: 20,
                items: [segmentedbutton]
            }
        ]);

        // var items = [],
        //     uis = [
        //     "normal", "plain", "small", "round",
        //     "action", "decline", "confirm",
        //     "action-small", "decline-small", "confirm-small",
        //     "action-round", "decline-round", "confirm-round",
        // ];

        // uis = ["normal"];

        // // Ext.each(uis, function(ui) {
        // //     items.push({
        // //         ui: ui
        // //     });
        // // });

        // // items.push({ ui: "back" });
        // // items.push({ ui: "forward" });

        // /**
        //  * config: badgeText
        //  */
        // // Ext.each([1, "1", "One"], function(cfg) {
        // //     items.push({
        // //         badgeText: cfg
        // //     });

        // //     items.push({
        // //         badge: cfg
        // //     });
        // // });

        // /**
        //  * config: iconCls + iconAlign
        //  */
        // Ext.each([null, "left", "right", "top", "bottom"], function(cfg) {
        //     Ext.each(uis, function(ui) {
        //         items.push({
        //             text     : (cfg) ? "Button" : null,
        //             iconMask : true,
        //             iconCls  : "download",
        //             iconAlign: cfg,
        //             ui       : ui
        //         });
        //     });
        // });

        // items.push({
        //     iconMask : true,
        //     iconCls  : "download",
        //     ui       : "normal",
        //     text: null
        // });

        // var panel = Ext.Viewport.add({
        //     xtype: 'container',
        //     layout: 'vbox',
        //     scrollable: true
        // });

        // Ext.each(items, function(item) {

        //     panel.add(Ext.apply({}, item, {
        //         xtype: 'button',
        //         margin  : '5 5 0 5',
        //         text    : 'Button',
        //         ui      : 'normal'
        //     }));

        //     panel.add({
        //         docked: 'top',
        //         xtype: 'toolbar',
        //         items: [
        //             Ext.apply({}, item, {
        //                 xtype: 'button',
        //                 // margin  : '5 5 0 5',
        //                 text    : 'Button',
        //                 ui      : 'normal'
        //             })
        //         ]
        //     });
        // });
    }
});
