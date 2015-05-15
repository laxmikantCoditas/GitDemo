Ext.onReady(function() {

    Ext.create('Ext.data.Store', {
        storeId : 'simpsonsStore',
            fields: ['instanceId', 'msg', ''],
            data: [
            {
                "instanceId": "166",
                "msg": "(1589) Can not find [ProcessInstance] with [piid=166].; context(BLUtil.getProcessInstanceEB(piid))(1589) Can not find [PROCESSINSTANCE] with [ID=166]."
            }, {
                "instanceId": "169",
                "msg": "(1589) Can not find [ProcessInstance] with [piid=169].; context(BLUtil.getProcessInstanceEB(piid))(1589) Can not find [PROCESSINSTANCE] with [ID=169]."
            }, {
                "instanceId": "172",
                "msg": "(1589) Can not find [ProcessInstance] with [piid=172].; context(BLUtil.getProcessInstanceEB(piid))(1589) Can not find [PROCESSINSTANCE] with [ID=172]."
            }, {
                "instanceId": "163",
                "msg": "(1589) Can not find [ProcessInstance] with [piid=163].; context(BLUtil.getProcessInstanceEB(piid))(1589) Can not find [PROCESSINSTANCE] with [ID=163]."
            }]
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title      : 'Simpsons',
        store      : Ext.data.StoreManager.lookup('simpsonsStore'),
        
        columns    : [
        {
            xtype: 'rownumberer',
            dataIndex: 'No',
            header: 'No'
        },{
            header: 'PI ID',
            dataIndex: 'instanceId',
            width: 100
        },{
            header: 'Message',
            dataIndex: 'msg',
            width: 800
        },{
            header: 'Message2',
            dataIndex: 'msg',
            width: 800
        }],
        
//        height     : 200,
//        width      : 1000,
        renderTo   : Ext.getBody()
    });

    Ext.EventManager.onWindowResize(grid.doLayout,grid);

});
