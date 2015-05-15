Ext.define('Test.view.TestView', {
	extend:'Ext.navigation.View',
	xtype:'testview',

	config:{
		autoDestroy:true,
		title:'Test',
		items:[
			{
				xtype:'button',
				text:'click me',
				handler:function(){
					this.getParent().push(
					{
						title: 'Second',
						items:[
							{
								html:'if you press the button below, it will console log the method in the controller. if you then pop, and add a new view with the same button (same id), it will not work.'
							},
							{
								xtype:'toolbar',
								docked:'bottom',
								items:[
									{
										xtype:'button',
										id:'buttoninstance',
										ui:'normal',
										text:'Next',
										hidden:true
									}
								]
							}
						]
					});
				}
			}
		]
	}
});
