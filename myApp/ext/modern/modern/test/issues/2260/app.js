Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Test',
    views: ['TestView'],
	controllers: ['Application'],
	launch:initApp
});

function initApp(){

	var instance = Ext.create('Test.view.TestView',{fullscreen:true});
	
	Ext.Viewport.add(instance);

}