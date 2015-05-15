Ext.define('MyApp.view.FullyQualified', {
    extend: 'Ext.DataView',
    requires: ['MyApp.view.ListItem'],
    
    config: {
        useComponents: true,
        
        defaultType: 'mylistitem'
    }
});