Ext.define('performs.view.MainMenu', {
	extend: 'Ext.tab.Panel',

	id: 'mainmenu',
	
	requires: [
		'performs.view.Welcome',

		'performs.view.ReportView'

	],



	config: {
		fullscreen: true,
		//styleHtmlContent: false,
		layout: {
			animation: {
				type: 'fade'

			}

		},

		listeners: {
			activeitemchange: function() {
				console.log('???');
			}
		},


		items:[

			{
				title: 'Welcome',
				xtype: 'welcome'


			},
			{
				title: 'View Case',
				xtype: 'reportview'

			}

		]
		//	}
		//]

	}

});

