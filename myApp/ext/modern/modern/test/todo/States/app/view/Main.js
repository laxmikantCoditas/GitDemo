Ext.define('StatesMVC.view.Main', {
    extend: 'Ext.Panel',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                id: 'titlebar',
                docked: 'top',
                ui: 'light',
                height: '2.6em',
                title: '2010 Census Data - USA'
            },
            {
                layout: 'hbox',
                items: [
                    {
                        layout: 'vbox',
                        width: 700,
                        items: [
                            {
                                xclass: "StatesMVC.view.Population",
                                height: 170
                            },
                            {
                                xclass: "StatesMVC.view.USMap",
                                flex: 1,
                                store: "GeoStore"
                            }
                        ]
                    },
                    {
                        flex: 1
                    },
                    {
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        width: 315,
                        items: [
                            {
                                xclass: "StatesMVC.view.Gender",
                                flex: 1,
                                maxHeight: 315
                            },
                            {
                                xclass: "StatesMVC.view.Race",
                                flex: 1,
                                maxHeight: 315
                            }
                        ]
                    }
                ]
            }
        ]
    }
});