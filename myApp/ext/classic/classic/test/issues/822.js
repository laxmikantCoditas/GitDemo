Ext.require('Ext.panel.Panel');

Ext.onReady(function(){
	var bd = Ext.getBody();
	var simple = Ext.create('Ext.panel.Panel', {
		unstyled: true,
		title: 'Unstyled Panel',
		width: 300,
		height: 300,
		html: '???',
		renderTo: bd
	});
});