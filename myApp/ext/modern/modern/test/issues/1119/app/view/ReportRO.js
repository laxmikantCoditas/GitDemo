Ext.define('performs.view.ReportRO', {
	extend: 'Ext.Panel',
	xtype: 'reportro',
	id: 'reportro',
	config:{
		layout: 'vbox',
		styleHtmlContent: false,

		items:[
			{
				xtype:'toolbar',
				id:'caseviewtitle',
				padding: "5px"


			},
			{

				xtype:"panel",
				height:"10px"
			},
			{
				xtype:"panel",
				layout: 'hbox',
				items:[
					{
						xtype:"panel",
						//flex:1,
						width:"37%",
						layout: 'vbox',
						defaults:
						{
							labelWidth:"80%",
							height:"35px",
							checked:false

						},
						items:[
							{
								xtype:'toolbar',
								title:'Right',
								id: 'rright',
								padding: "5px"


							}	,
							{
								xtype: "checkboxfield",
								//name: "vrecall-right",
								id:"vrecall-0-1",
								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//name: "vrecall-right",
								id:"vrecall-0-2",

								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//name: "vrecall-right",
								id:"vrecall-0-3",
								cls: "malignancy-recall",

								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//name: "vrecall-right",
								id:"vrecall-0-4",
								cls: "malignancy-recall",

								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//name: "vrecall-right",
								id:"vrecall-0-5",
								cls: "malignancy-recall",

								label: "pop"

							}
						]
					},
					{
						xtype:"panel",
						layout: 'vbox',
						width:"12%",
						defaults:
						{
							height:"35px",
							checked:false
						},
						items:[
							{
								xtype:'toolbar',
								title:'<span style="color:yellow">RO</span>',
								padding: "5px"


							}	,
							{
								xtype: "checkboxfield",
								//name: "rorecall-right",
								id:"rorecall-0-1"

							},
							{
								xtype: "checkboxfield",
								//name: "rorecall-right",
								id:"rorecall-0-2"

							},
							{
								xtype: "checkboxfield",
								//name: "rorecall-right",
								id:"rorecall-0-3",
								cls: "malignancy-recall"

							},
							{
								xtype: "checkboxfield",
								//name: "rorecall-right",
								id:"rorecall-0-4",
								cls: "malignancy-recall"

							},
							{
								xtype: "checkboxfield",
								//name: "rorecall-right",
								id:"rorecall-0-5",
								cls: "malignancy-recall"

							}
						]
					},
					{
						xtype:"panel",
						//width:"10px"
						width:"2%"
					},
					{
						xtype:"panel",
						width:"37%",
						//flex:1,
						layout: 'vbox',
						defaults:
						{
							labelWidth:"80%",
							height:"35px",
							checked:false
						},

						items:[
							{
								xtype:'toolbar',
								title:'Left',
								id: 'lleft',
								padding: "5px"

							}	,
							{
								xtype: "checkboxfield",
								//	name: "vrecall-left",
								id:"vrecall-1-1",
								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//	name: "vrecall-left",
								id:"vrecall-1-2",
								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//	name: "vrecall-left",
								id:"vrecall-1-3",
								labelCls: "malignancy-recall",
								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//	name: "vrecall-left",
								id:"vrecall-1-4",
								labelCls: "malignancy-recall",
								label: "pop"

							},
							{
								xtype: "checkboxfield",
								//		name: "vrecall-left",
								id:"vrecall-1-5",
								labelCls: "malignancy-recall",
								label: "pop"

							}
						]
					},
					{

						xtype:"panel",
						layout: 'vbox',
						width:"12%",
						defaults:
						{
							height:"35px",
							checked:false
						},
						items:[
							{
								xtype:'toolbar',
								title:'<span style="color:yellow">RO</span>',
								padding: "5px"
							},
							{
								xtype: "checkboxfield",
								//		name: "rorecall-left",
								id:"rorecall-1-1"

							},
							{
								xtype: "checkboxfield",
								//		name: "rorecall-left",
								id:"rorecall-1-2"

							},
							{
								xtype: "checkboxfield",
								//	name: "rorecall-left",
								id:"rorecall-1-3",
								cls: "malignancy-recall"

							},
							{
								xtype: "checkboxfield",
								//	name: "rorecall-left",
								id:"rorecall-1-4",
								cls: "malignancy-recall"

							},
							{
								xtype: "checkboxfield",
								//	name: "rorecall-left",
								id:"rorecall-1-5",
								cls: "malignancy-recall"

							}
						]
					}

				]
			},
			{

				xtype:"panel",
				height:"10px"
			},
			{

				xtype:"panel",
				layout:"hbox",
				flex:1,
				items:[
					{
						xtype:"panel",
						width: "52%",
						layout:"vbox",

						items:[

							{


								xtype:"panel",
								layout:'hbox',

								items:[
									{
										xtype:"panel",
										layout: 'vbox',
										flex:1,

										defaults:
										{
											labelWidth:"80%",
											height:"35px",
											checked:false
										},
										items:[
											{
												xtype:'toolbar',
												title:'Density',
												padding: "5px"
												//height:"35px"

											},
											{
												xtype: "checkboxfield",
												//				name: "vdensity",
												id:"vdensity-1",
												label: "pop"

											},
											{
												xtype: "checkboxfield",
												//			name: "vdensity",
												id:"vdensity-2",
												label: "pop"

											},
											{
												xtype: "checkboxfield",
												//			name: "vdensity",
												id:"vdensity-3",
												label: "pop"

											},
											{
												xtype: "checkboxfield",
												//			name: "vdensity",
												id:"vdensity-4",
												label: "pop"


											}
										]
									},
									{
										xtype:"panel",
										layout: 'vbox',
										//width:"24%",
										defaults:
										{
											height:"35px",
											checked:false
										},
										items:[
											{
												xtype:'toolbar',
												title:'<span style="color:yellow">RO</span>',
												padding: "5px"


											},
											{
												xtype: "checkboxfield",
												//				name: "rodensity",
												id:"rodensity-1"
											},
											{
												xtype: "checkboxfield",
												//					name: "rodensity",
												id:"rodensity-2"
											},
											{
												xtype: "checkboxfield",
												//					name: "rodensity",
												id:"rodensity-3"
											},
											{
												xtype: "checkboxfield",
												//				name: "rodensity",
												id:"rodensity-4"
											}
										]
									}
								]
							},
							{
								xtype:'panel',
								height:'10px'
							},
							{
								xtype: 'button',
								//flex: 1,
								height: "50px",
								text: 'Pathology',
								id: 'pathbutton',
								ui: 'round',
								handler: function(button, event) {


								}
							},
							{
								xtype: "panel",
								height:"10px"
							},
							{
								xtype: 'button',
								//
								// flex: 1,
								height: "50px",
								text: 'RO Comments',
								ui: 'confirm-round',
								handler: function(button, event) {


								}
							}
						]
					},


					{
						xtype:"panel",
						width:"2%"
					},
					{
						xtype:"panel",
						//flex:1,
						width:"46%",
						layout: 'vbox',
						items:[
							{
								xtype:'toolbar',
								title:'Feature Types',
								padding: "5px",
								height:"35px"

							},
							{

								flex:1,
								//height: "100%",
								xtype: 'list',
								id: 'featuretypelist2',
								styleHtmlContent: false,


								itemTpl : "<img width='24px' src='{img}' style='vertical-align:middle;' />&nbsp;{label}"
							//	store: Ext.data.StoreManager.lookup('performs.store.FeatureTypes')

							}
						]
					}
				]
			}
		]

	}

});