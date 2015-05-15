Ext.require('Ext.toolbar.Toolbar');

Ext.onReady(function() {
    var suspend = false,
        all = ['b', 'a'];
   
   Ext.create('Ext.toolbar.Toolbar', {
       width: 400,
       renderTo: document.body,
       items: [{
           id: 'a',
           text: 'A'
       }, {
           id: 'b',
           text: 'B'
       }]
   })

    setTimeout(function() {
        if (suspend) {
            Ext.suspendLayouts();
        }
        Ext.Array.forEach(all, function(id, index){
            Ext.getCmp(id).setText('Longer Name ' + (index + 1));
        });
        if (suspend) {
            Ext.resumeLayouts(true)
        }
    }, 1000);
});