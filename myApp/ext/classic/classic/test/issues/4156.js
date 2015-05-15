Ext.onReady(function(){

    var view = Ext.create('Ext.view.View', {
        renderTo: document.body,
        itemTpl: '{a}',
        store: {
            fields: ['a'],
            data: []
        },
        listeners: {
            itemadd: function(view, records, nodes){
                console.log('fired');
            }
        }
    });
    
    setTimeout(function(){
        view.getStore().add([{
            a: 1
        }, {
            a: 2
        }]);
    }, 1000);
    
    setTimeout(function(){
        view.getStore().add({
            a: 3
        });
    }, 3000);
});
