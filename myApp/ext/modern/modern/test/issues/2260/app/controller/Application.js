Ext.define('Test.controller.Application',{
	extend:'Ext.app.Controller',

	config:{
		refs:{
			testView: 'testview',
			buttonInstance: '#buttoninstance'
		},

		control:{
			testView:{
				push:'showButton'
			},
			buttonInstance:{
				tap:'buttonTapHandler'
			}
		}
	},

	showButton:function(){
		this.getButtonInstance().show();
	},

	buttonTapHandler:function(){
		console.log('Clicked on the next button');
	}
});
