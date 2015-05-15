//performs.controllers.SettingsController = new Ext.Controller({
Ext.define('performs.controller.SettingsController', {
	extend: 'Ext.app.Controller',

	views:[
		'MainMenu'

	],




	init:function() {

		this.getMainMenuView().create();


	}




});