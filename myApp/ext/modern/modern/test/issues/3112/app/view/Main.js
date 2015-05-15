Ext.define("HdMobile.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'NL!',
                iconCls: 'action',
				layout: {
					type: 'hbox'
				},

                items: [
                    {                        
                        xtype: 'HdMobile.view.nl',
                        title: 'NL',
						id: 'nl-123',
						flex: 1
                    },
					{
					    xtype: 'HdMobile.view.pnl',
						id: 'pnl-123',
						flex: 2
						
					}
                ]
            }
        ]
    }
});
