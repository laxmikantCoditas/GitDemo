var store = Ext.create('Ext.data.Store',{
    fields: ['text'],
    data: [
        {text: new Array(1000).join('Big Text. ')}
    ]
});
 
Ext.widget('grid',{
	title 			: "Test Grid",
	scroll		  	: false,
	deferRowRender  : false,
	columnLines		: true,
    store           : store,
	shrinkWrap		: true,
	shrinkWrapDock	: true,
	renderTo		: Ext.getBody(),
	columns         : [{
		width		: 300,
		dataIndex	: 'text',
		text 		: 'Text'
	}]
});
