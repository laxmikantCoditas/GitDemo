Ext.define('MVCE.controller.TabCtrl', {
    extend: 'Ext.app.Controller',
    init: function(){
        this.control({
            'component[id=myTab]': {
                beforedestroy: function(){
                    console.log('beforedestroy');
                },
                destroy: function(){
                    console.log('destroy');
                }
            }
        });
    }
});

Ext.application({
    name: 'MVCE',
    controllers: ['TabCtrl'],
    
    launch: function(){
        var tabs = Ext.createWidget('tabpanel', {
            renderTo: document.body,
            width: 450,
            items: [{
                title: 'Short Text',
                id: 'myTab',
                html: 'Close the tab',
                closable: true
            }]
        });
    }
});
