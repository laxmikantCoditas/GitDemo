/*
Ext.define('Ext.overrides.selection.CheckboxModel', {
    override: 'Ext.selection.CheckboxModel',
}, function () {
    // After refresh, ensure that the header checkbox state matches
    this.prototype.refresh = function() {
        var me = this;

        me.superclass.refresh.apply(me, arguments);

        if (me.views.length) {
            me.updateHeaderState();
        }
    };
});
*/

Ext.Loader.setConfig({ enabled: true,
	paths: {
		//'Ext': '/public/extjs-4.1.2/src',
		'MyApp': 'sencha'
	}
});


var	store1 = Ext.create('Ext.data.Store', {
	id: 'system',
	fields: ['id','value'],
	data: [['1','testing 1...'],['2','testing 2...']]
});

var store2 = Ext.create('Ext.data.Store', {
	id: 'appearance',
	fields: ['id','otherfield'],
	data: [['10','other value 1...'],['20','other value 2...'],['30','other value 3...']]
});

var storetree = Ext.create('Ext.data.TreeStore', {
	root: {  
        expanded: true,  
        children: [  
            {  
                text: 'Settings',  
                leaf: false,  
                expanded: true,  
                children: [  
                    {  
                        id: 'system',
                    	text: 'System Settings',  
                        leaf: true  
                    },  
                    {  
                    	id: 'appearance',
                        text: 'Appearance',  
                        leaf: true  
                    }   
                ]  
            }  
        ]  
    } 
});

Ext.ns('MyApp');
MyApp.gridColumns = {
		'system' :  [
			{header: 'ID 1', id: 'dz1', dataIndex: 'id', width:150},
	        {header: 'Value', id: 'dz2', dataIndex: 'value', width: 100}
		],
		'appearance' :  [
 			{header: 'ID 2', id: 'dz3', dataIndex: 'id', width:50},
 	        {header: 'Othe field', id: 'dz4', dataIndex: 'otherfield', width: 300}
 		]
};

Ext.define('MyApp.Bleveltree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.bleveltree',
	store: storetree,
	border: false,
	rootVisible: false,
	width: 200,
	frame: false
});

Ext.application({
    
    name: 'MyApp',
    appFolder: 'sencha',
    controllers: [
      'MainController'
    ],
    
    autoCreateViewport: true,

    launch: function() {
    }
});
