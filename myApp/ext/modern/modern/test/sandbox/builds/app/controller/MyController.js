Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',
    
    launch: function() {
       Ext.create('MyApp.view.MyView', {
           devices: [{
               text: 'Device 1',
               value: 0
           }, {
               text: 'Device 2',
               value: 1
           }]
       }).show();
    }
});