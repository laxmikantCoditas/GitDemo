Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function() {    
    
    var store = new Ext.data.Store({
        fields: ['company', 'description'],
        data: [{
            company: '3m Co',
            description: '3m Desc'
        }, {
            company: 'Alcoa Inc',
            description: 'Alcoa Inc Desc'
        }, {
            company: 'Altria Group Inc',
            description: 'Altria Group Inc Desc'
        }]
    });

    // create the Grid
    var grid = new Ext.grid.Panel({
        store: store,
        columns: [{
            flex: 1,
            dataIndex: 'company',
            text: 'Company'
        }],
        height: 200,
        width: 400,
        renderTo: document.body,
        features: [{
            ftype: 'rowbody',
            setupRowData: function(record, idx, rowValues){
                this.self.prototype.setupRowData.apply(this, arguments);
                rowValues.rowBody = record.get('description');
            }
        }],
        listeners: {
            rowbodyclick: function(){
                log('rowbodyclick');
            },
            rowbodydblclick: function(){
                log('rowbodydblclick');
            },
            rowbodycontextmenu: function(){
                log('rowbodycontextmenu');
            }
        }
    });
    
    var logger = Ext.getBody().createChild({
        style: {
            width: '200px',
            height: '200px',
            border: '1px solid red',
            overflow: 'auto'
        }
    });
    
    var log = function(text) {
        logger.dom.innerHTML = logger.dom.innerHTML + '<br />' + text;
    }
});