Ext.define('Qa.Tester.store.Scripts', {
    
    model: 'Qa.Tester.model.Script',
    
    extend: 'Ext.data.Store',
    
    proxy: Ext.isIE6 || Ext.isIE7 ? {
        
        type: 'memory'
        
    }:{
        type: 'localstorage',
        id  : 'js-scripts-proxy'
    },
    
    autoSync: true,
    
    data: Ext.isIE6 || Ext.isIE7 ? [] : undefined
});