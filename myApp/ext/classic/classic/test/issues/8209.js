Ext.define('mymodel', {
    extend: 'Ext.data.Model',

    fields: [
	{
	    name: 'cat',
	    type: 'string'
	},
	{
	    name: 'DPO',
	    type: 'int'
	},
	{
	    name: 'DSO',
	    type: 'int'
	}
    ]
});

Ext.onReady(function () {

    var store = Ext.create('Ext.data.Store', {
	model: 'mymodel',
	autoLoad: true,
	proxy: {
	    type: 'ajax',
	    url: '8209.json',
	    reader: {
		type: 'json',
		root: 'data'
	    }
	}
    });

    Ext.create('Ext.chart.Chart', {
	renderTo: document.body,
	border: 2,
	draggable: true,
	style: {
	    borderColor: 'black',
	    borderStyle: 'solid'
	},
	width: 950,
	height: 1000,
	shadow: true,
	animate: true,
	insetPadding: 30,
	store: store,
	theme: 'Blue',
	axes: [{
	    position: 'radial',
	    type: 'Radial',
	    maximum: 100
	}],
	series: [{
	    type: 'radar',
	    style: {
		opacity: 0.2
	    },
	    xField: 'cat',
	    yField: 'DPO'
	}, {
	    type: 'radar',
	    style: {
		opacity: 0.2
	    },
	    xField: 'cat',
	    yField: 'DSO'
	}]
    });
});
