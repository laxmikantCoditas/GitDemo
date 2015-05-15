Ext.define('3777.store.OrderDetail',
{
    extend: 'Ext.data.Store',

    config:
	{
	    model: '3777.model.IncidentalOrder',
	    proxy: {
	        type: 'ajax',
	        url: 'order.json',
	        
	        reader: {
	            type: 'json'
	        },
	        extraParams: {
	            orderId: 0
	        }
	    }
	}
});