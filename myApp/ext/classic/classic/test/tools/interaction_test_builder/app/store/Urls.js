Ext.define('Qa.Tester.store.Urls', {
    
    model: 'Qa.Tester.model.Url',
    
    extend: 'Ext.data.Store',
    
    proxy: Ext.isIE6 || Ext.isIE7 ? {
        
        type: 'memory'
        
    }:{
        type: 'localstorage',
        id  : 'urls-proxy'
    },
    
    autoSync: true,
    
    data: Ext.isIE6 || Ext.isIE7 ? [] : undefined
});