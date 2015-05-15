Ext.require('*');
Ext.onReady(function(){

    Ext.createWidget({
        renderTo: Ext.getBody(),
        title: "Ext.Supports Values",
        xtype: 'propertygrid',
        width: 500,
        nameColumnWidth: 250,
        source: (function(){
            var supports = {};
            for (var name in Ext.supports) {
                if(Ext.supports.hasOwnProperty(name)) {
                    supports[name] = Ext.supports[name];
                }
            }
            return supports;
        })()
    });

});