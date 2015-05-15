
Ext.define('performs.view.ReportView', {
	extend: 'Ext.Panel',
	xtype: 'reportview',
	id:"reportviewpanel",

	requires: [
		'performs.view.ReportRO'
	],

	config:
	{
		layout: 'hbox',
		//height: '100%',
		//styleHtmlContent: false,
		items:[
			{

				xtype: 'panel',
				layout:'vbox',

				flex: 3,


				items:[
					{
						xtype: 'panel',
						layout: 'hbox',
						flex:1,

						defaults:
						{
							xtype: 'panel',
							layout:'fit',
							border:1,
							flex: 1

						},

						items:
							[
								{

									id: 'LeftTop',
									html:"poo"
								},
								{

									id: 'RightTop',
									html:"baa"
								}
							]
					},
					{

						layout: 'hbox',
						flex: 1,


						defaults:
						{
							xtype: 'panel',
							layout:'fit',

							flex: 1


						},

						items:[
							{

								id: 'LeftBottom',
								html:"bado"
							},
							{

								id: 'RightBottom',
								html:"bedo"
							}
						]
					}


				]




			},
			{
				xtype: "reportro",
				flex: 2

			}

		]
	}
});

