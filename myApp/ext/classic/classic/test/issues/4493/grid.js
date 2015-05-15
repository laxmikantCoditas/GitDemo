
Ext.onReady(function(){
   Ext.define("thm", {extend: "Ext.data.Model", fields: [{name:'pgNo',type:'string'}]});
   	
    Ext.define('ThmStore', {
    extend: 'Ext.data.Store',	
    constructor: function(config) {
        config = config || {};
        config.buffered = true;  		
        config.proxy = {
            model: 'thm',
            type:"thmproxy",
            url: "ivf/dummyurl",
            extraParams: {
                total: 40
            },
            reader: {
                root: 'pages',
                //totalProperty: 'totalCount'
            }
        };
        this.callParent([config]);
    },
  
    // Sencha override for EXTJSIV-1897
	onProxyPrefetch: function(operation) {
        var me         = this,
            resultSet  = operation.getResultSet(),
            records    = operation.getRecords(),
 
            successful = operation.wasSuccessful();
 
        if (resultSet) {
            me.totalCount = resultSet.total;
            me.fireEvent('totalcountchange', me.totalCount);
        }
 
        if (successful) {
            me.cacheRecords(records, operation);
        }
        Ext.Array.remove(me.pendingRequests, operation.requestId);
        if (operation.page) {
            Ext.Array.remove(me.pagesRequested, operation.page);
        }
 
        me.loading = false;
        me.fireEvent('prefetch', me, records, successful, operation);
 
        // HACK to support loadMask
        if (operation.blocking) {
            me.fireEvent('load', me, records, successful);
        }
 
        if (!this.preventCallback) {
            //this is a callback that would have been passed to the 'read' function and is optional
            Ext.callback(operation.callback, operation.scope || me, [records, operation, successful]);
        }
    },
	
	// Sencha override for EXTJSIV-1897
    guaranteeRange: function(start, end, cb, scope) {
        //<debug>
        if (start && end) {
            if (end - start > this.pageSize) {
                Ext.Error.raise({
                    start: start,
                    end: end,
                    pageSize: this.pageSize,
                    msg: "Requested a bigger range than the specified pageSize"
                });
            }
        }
        //</debug>
 
        end = (end > this.totalCount) ? this.totalCount - 1 : end;
 
        var me = this,
            i = start,
            prefetchData = me.prefetchData,
            range = [],
            startLoaded = !!prefetchData.getByKey(start),
            endLoaded = !!prefetchData.getByKey(end),
            startPage = me.getPageFromRecordIndex(start),
            endPage = me.getPageFromRecordIndex(end);
 
        me.cb = cb;
        me.scope = scope;
 
        me.requestStart = start;
        me.requestEnd = end;
        // neither beginning or end are loaded
        if (!startLoaded || !endLoaded) {
            // same page, lets load it
            if (startPage === endPage) {
                me.mask();
                me.prefetchPage(startPage);
            // need to load two pages
            } else {
                me.mask();
                this.preventCallback = true;
                me.prefetchPage(startPage);
                this.preventCallback = false;
                me.prefetchPage(endPage);
            }
        // Request was already satisfied via the prefetch
        } else {
            me.onGuaranteedRange();
        }
    } 
});
	
    var pageSize = 50;
    var storeConfig = new ThmStore({pageSize: pageSize });
    var grid = new Ext.grid.GridPanel(
	{			
		id:'ram',
		width: 150,
		height: 300,
		cls:'xcp_viewer',
		region:'west',			
		store: storeConfig,
		verticalScrollerType: 'paginggridscroller',
		loadMask: false,			
		invalidateScrollerOnRefresh: false,			 
		hideHeaders:true,
		bodyStyle:'background:#999999',
		viewConfig: {
		stripeRows:false,
		trackOver: false	
		}, 
		columns: [{
			dataIndex: 'pgNo',
			align: 'center',
			flex:1
            }]
        }        
    );
	var centerPanel = new Ext.Panel({region:'center', 
	items:[ { xtype: 'button', text: 'Reload Store', handler:function() {
		 var thmCmp = Ext.getCmp('ram');
                 thmCmp.store.proxy.extraParams.total = 60;                 
                 thmCmp.store.load();
                }}
	]
	});
	var mainPanel = new Ext.Panel(
	{
	layout:'border',
	items:[grid,centerPanel],
	renderTo: Ext.getBody(),	
	width:600,
	height:300	
	});    	
	
    // trigger the data store load
    storeConfig.guaranteeRange(0, 49);
	
});


