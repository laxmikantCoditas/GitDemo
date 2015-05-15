Ext.define('Example.view.PersonListGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.personlistgrid',

	store: Ext.data.StoreManager.lookup('Person'),

	title: 'List of Persons',
	collapsible: true,

	selType: 'cellmodel',
	plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
        	clicksToEdit: 1,
        	listener: {
        		edit: function () {
        			var controller = this.application.getController
        			this.mon(this.application, 'personListGrid', this.onApplicationLaunched, this);
        		}
        	}
        })
    ],

	tbar: [
		{
			xtype: 'numberfield',
			minValue: 0,
			value: 0
		},
		{
			xtype: 'button',
			text: 'Search'
		},
		{
			xtype: 'button',
			text: 'Reset'
		}
	],

	bbar: {
		xtype: 'button',
		itemId: 'btnNextPage'
	},

	columnLines: true,
	columns: [
        {
        	dataIndex: 'Name',
        	header: 'Name',
        	editor: {
        		xtype: 'textfield',
        		allowBlank: false
        	}
        },
        {
        	dataIndex: 'NumberOfPets',
        	header: 'Number of Pets',
        	renderer: function (value) {
        		if (value === 0) {
        			return Ext.String.format('<span style="color:red">{0}</span>', value);
        		}
        		else
        			return value;
        	},
        	editor: {
        		xtype: 'numberfield',
        		allowBlank: false,
        		minValue: 0
        	}
        },
        {
        	xtype: 'datecolumn',
        	format: 'd-M-Y',
        	dataIndex: 'DateOfBirth',
        	header: 'Date of Birth',
        	editor: {
        		xtype: 'datefield',
        		allowBlank: false,
        		format: 'd-M-Y',
        		maxValue: new Date()
        	}
        },
        {
        	dataIndex: 'Rating',
        	header: 'Rating',
        	renderer: function (value) { return Ext.String.repeat('*', value, ' '); },
        	editor: {
        		xtype: 'numberfield',
        		allowBlank: false,
        		minValue: 1,
        		maxValue: 5
        	}
        }
    ]

});
