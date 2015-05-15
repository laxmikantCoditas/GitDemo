Ext.define('JBHunt.view.Test', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.test',

    items : [{
        xtype: 'button',
        text: 'Show Window',
        handler: function(){
            var window = Ext.create('Ext.window.Window', {
                title: 'Hello',
                height: 2000,
                width: 600,
                layout: 'fit',
                items: [{
                    xtype: 'container',
                    items: [{
                        xtype: 'button',
                        text: 'Show Mask',
                        handler: function(){

                            var mask = new Ext.LoadMask(Ext.getBody(), {msg:"Validating Information..."});
                            mask.show();

                        }
                    }]
                }],
                listeners: {
                    'afterlayout' : function(comp){
                        comp.center();
                        var pos = comp.getPosition();
                        if(pos[1] < 0){
                            comp.setPosition(pos[0],0);
                        }
                    }
                }
            });
            window.show();
        }
    }]

});

Ext.Loader.setPath('JBHunt', 'app');

Ext.Loader.setConfig({enabled:true, disableCaching: false});

Ext.require('Ext.Msg');

var currentView;
Ext.application({
    name : 'JBHunt',
    appFolder :'app',
    controllers : ['Test' ],

    launch : function() {
        var view = 'JBHunt.view.Test';
        var layout = 'fit';


        currentView = Ext.create(view, {
            renderTo : Ext.getBody(),
            layout : layout

        });

    }
});
