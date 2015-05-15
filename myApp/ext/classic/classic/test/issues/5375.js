Ext.Loader.setConfig({ enabled: true });
  
Ext.application({                
    name: 'MyApp',
    
    appFolder: '5375',
    
    models: ['Category'],   // works now

// WORKS -->    requires: [ 'MyApp.model.Category' ],  
// DOESN'T WORK -->    models: [ 'Category' ],

    launch: function() {

       new Ext.data.Store({
           model: 'MyApp.model.Category',
           storeId: 'CategoryList',
           autoLoad: true,
           proxy: {
             type: 'ajax',
             url: '5375/data/json.json',
             reader: {
                 type: 'json',
                 root: 'apiRecords'
             }
          }
      }); 
     
      new Ext.container.Container({ 
          renderTo : document.body, 
          width    : 400, 
          height   : 400, 
          items    : [    
              { 
                  xtype: 'combobox', 
                  triggerAction: 'all', 
                  store: 'CategoryList', 
                  width: 300, 
                  queryMode: 'local', 
                  valueField: 'categoryid', 
                  displayField: 'description', 
                  editable: false 
              } 
          ] 
      });   
   }
});