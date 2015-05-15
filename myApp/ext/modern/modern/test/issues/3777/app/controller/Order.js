Ext.define('3777.controller.Order',
{
    extend: 'Ext.app.Controller',

    config:
    {
        refs:
        {
            orderDetail: { selector: 'Order' },
            orderArticleList: { selector: 'Order list' }

        },
        control:
        {
            orderDetail:
            {
                activate: 'loadOrderView',
                articles_itemtap: 'onArticleItemTap',
                addarticle: function () { this.getApplication().fireEvent("addarticle"); }
            }
        },
    },


    // load de Orders detail view
    loadOrderView: function () {
        // load store
        var orderDetailStore = Ext.getStore('OrderDetail');
        orderDetailStore.removeAll();
        
        orderDetailStore.load(this.loadOrderDetail_ready, this);
    },

    loadOrderDetail_ready: function (records, operation) {
        var operationScope = operation.getScope();
        var orderDetailObject = records[0];
                
        orderDetailObject.IncidentalOrderLines().setDestroyRemovedRecords(false);
        operationScope.getOrderDetail().setFields(orderDetailObject);
                
    },

    onArticleItemTap: function (record, processState) {
        this.getApplication().fireEvent("editorderline", record);
    }
        
});
