Ext.onReady(function(){
	var store,myProxy,panel2,called=false;
	var data = {
		employees: [{
			id: 1,
			name: 'John Doe'
		},{
			id: 2,
			name: 'Jane Doe'
		}]
	};
	myProxy = Ext.create('Ext.data.proxy.Memory',{
		reader: {
			type: 'json',
			root: 'employees'
		}
	});
	myProxy.addEvents('myEvent');
	
	myProxy.on('metachange',function(){
		myProxy.fireEvent('myEvent','myEvent fired');
	},myProxy);
	
	Ext.define('Employee', {
		extend: 'Ext.data.Model',
		fields: [
			{name: 'id',    type: 'int'},
			{name: 'name',  type: 'string'}
		],
		retire:function(){
			//assume that this is like afterrender event and will only be called once			
			if(!called){
				this.relayEvents(myProxy,['myEvent']);
				called = true;
			}
		}
	});
	var emp = new Employee();
	emp.addEvents('myEvent');

	store = Ext.create('Ext.data.Store', {
		autoLoad: false,
		model: 'Employee',
		data : data,
		proxy: myProxy
	});	
	
	doSomething = function(){
		//nothing happens, seems to be not called
		alert(arguments);
		if(panel2){
			panel2.down('#myContainer2').update(arguments[0]);
		}
	}
	panel2 = Ext.create('Ext.form.Panel', {
		title: 'My Panel2',
		width: 200,
		bodyPadding: 10,
		renderTo: document.body,
		layout: 'fit',
		items: [{
			xtype: 'container',
			itemId:'myContainer2'
		}],
		listeners:{
			'afterrender':function(){
				Ext.util.Observable.observe(Employee,{
					scope:this,
					'myEvent':doSomething
				});
			}
		}
	});
	
	setTimeout(function(){
		//just for illustration, manually trigger the metachange event
		myProxy.fireEvent('metachange');
	},30);
	
	store.load();
	emp.retire(); //illustration purpose only. A mock up to call/trigger the relayEvents
	
	
	//another sample to test relayEvents
	/*var states = Ext.create('Ext.data.Store', {
		fields: ['abbr', 'name'],
		data : [
			{"abbr":"AL", "name":"Alabama"},
			{"abbr":"AK", "name":"Alaska"},
			{"abbr":"AZ", "name":"Arizona"}
		]
	});
	var selectBox = Ext.create('Ext.form.field.ComboBox',{
		fieldLabel: 'Choose State',
		store: states,
		queryMode: 'local',
		displayField: 'name',
		valueField: 'abbr',
		renderTo: 'testDiv'
	});
	var panel2,
		panel = Ext.create('Ext.form.Panel', {
		title: 'My Panel1',
		width: 100,
		bodyPadding: 10,
		renderTo: 'testDiv2',
		layout: 'fit',
		items: [{
			xtype: 'container',
			itemId:'myContainer'
		}],
		listeners:{
			'afterrender':function(){
				this.relayEvents(selectBox,['chosen']);
			}
		}
	});
	doSomething2 = function(){
		if(panel2){
			panel2.down('#myContainer2').update(arguments[0]);
		}
	}
	
	panel2 = Ext.create('Ext.form.Panel', {
		title: 'My Panel2',
		width: 200,
		bodyPadding: 10,
		renderTo: 'testDiv3',
		layout: 'fit',
		items: [{
			xtype: 'container',
			itemId:'myContainer2'
		}],
		listeners:{
			'afterrender':function(){
				Ext.util.Observable.observe(Ext.form.Panel,{
					scope:this,
					'chosen':doSomething2
				});
			}
		}
	});
	
	selectBox.addEvents('chosen');
	panel.addEvents('chosen');
	selectBox.on('select', function(){
		selectBox.fireEvent('chosen', 'Alaska');
	},selectBox);*/
	
});