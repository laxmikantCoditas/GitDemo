Ext.require('*');
Ext.onReady(function(){
    Ext.createWidget('tabpanel', {
       width: 800,
       height: 200,
       tabPosition: 'bottom',
       items: [{
           id: 'tab1',
           title: 'TAB 1'
       },{
           id: 'tab2',
           title: 'TAB 2',
           closable: true
       }],
       renderTo: Ext.getBody()
    });
    Ext.TaskManager.start({
         run: function(){
             var tab1 =  Ext.getCmp('tab1');
             if (tab1) {
                 tab1.setTitle(tab1.title + ' * ');
             }
             var tab2 =  Ext.getCmp('tab2');
             if (tab2) {
                 tab2.setTitle(tab2.title + ' * ');
             }
         },
         interval: 1000
     });
});