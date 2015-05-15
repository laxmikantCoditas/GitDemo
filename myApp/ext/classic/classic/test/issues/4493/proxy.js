
Ext.define("ThmProxy", {
    extend: "Ext.data.ServerProxy",
    alias: 'proxy.thmproxy',
    constructor : function(config) {
	
        ThmProxy.superclass.constructor.call(this, config);
    },
    doRequest: function(operation, loadCallback, scope) {

        var me = this,
                writer = me.getWriter(),
                request = me.buildRequest(operation, loadCallback, scope),
                args = [],
                params = request.params,
                reader = me.getReader();
        var i = 1;
        var j = operation.start;
	operation.limit=(params.total<operation.limit)?params.total:operation.limit;
        var jsonObj = {
            //"totalCount": 10,
            "pages":[{pgNo:(++j).toString()}]
        };

        for (; i < operation.limit; i++)
        {
            jsonObj.pages[i] = {pgNo:(++j).toString()};
        }

        var readData = reader.read(jsonObj);
        var records = readData.records ? readData.records : [];
		
        var operationCfg = {
            action: "read",
            success:true,
            complete:true			
        };
		Ext.apply(operation,operationCfg);
        operation.resultSet = Ext.create('Ext.data.ResultSet', {
            records: records
            ,total  : params.total         
        });		
		
	operation.setStarted(true);		
        loadCallback.call(scope, operation, args, true);
    }
});