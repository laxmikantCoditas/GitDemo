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
        var jsonObj = {
            //"totalCount": 10,
            "pages":[{pgNo:(++j).toString()}]
        };

        for (; i < operation.limit; i++)
        {
            jsonObj.pages[i] = {pgNo:(++j).toString()};
        }

        var readData = reader.read(jsonObj);
        //console.log("start,limit :" + operation.start + "," + operation.limit);
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

Ext.define("thm", {extend: "Ext.data.Model", fields: [
    {name:'pgNo',type:'string'}
]});

Ext.define('ThmStore', {
    extend: 'Ext.data.Store',
    constructor: function(config) {
        config = config || {};
        config.buffered = true;
        config.totalCount = 50;
        config.proxy = {
            model: 'thm',
            type:"thmproxy",
            url: "ivf/dummyurl",
            extraParams: {
                total: 50
            },
            reader: {
                root: 'pages',
                totalProperty: 'totalCount'
            }
        };
        this.callParent([config]);
    }
});

function createGrid (gridConfig, panelConfig) {
    var pageSize = 50;
    var storeConfig = new ThmStore({
        pageSize: pageSize
    });

    var grid = new Ext.grid.GridPanel(Ext.apply({
            width: 150,
            height: 300,
            cls:'xcp_viewer',
            region:'west',
            store: storeConfig,           
            hideHeaders:true,			
            bodyStyle:'background:#999999',    
            scroll:'vertical',	
            viewConfig: {
                stripeRows:false,
                trackOver: false		   
            },
            columns: [
                {
                    dataIndex: 'pgNo',
                    align: 'center',
                    flex:1,
                    renderer: function(val) {
                        var x = "<table id=thumb.P" + val + " height=100><tr><td width=7>&nbsp;</td><td width=5 align='left'>" + val + "</td><td width=7>&nbsp;</td><td width=100 height=100 valign='center' align='left'><img src=''></img></td></tr></table>";
                        return x;
                    }
                }
            ],
            lbar:[
                {xtype:'button',text:'insert',handler:function() {                 
                }}
            ]
        }, gridConfig));

    var centerPanel = new Ext.Panel({region:'center',html:"Hello world"});
    var mainPanel = new Ext.Panel(Ext.apply({
            layout:'border',
            items:[grid,centerPanel],
            renderTo: Ext.getBody(),
            width:300,
            height:300,
            x: 10, y: 10,
            style: { position: 'absolute' }
        }, panelConfig));

    storeConfig.guaranteeRange(0, 49);
}

var testCase = {
    run: function () {
        Ext.useShims = true;

        createGrid({
                hideHeaders: true
            }, {
                title: 'Hide Headers'
            });

        createGrid({
                hideHeaders: false
            }, {
                title: 'Show Headers',
                x: 350
            });
    }
};
