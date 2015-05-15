var tabPanel;
Ext.onReady(function() {

    var viewport = Ext.create('Ext.container.Viewport', {
        layout:'vbox',
        items:[
            {
                xtype:'container',
                height:100,
                items:[
                    {
                        xtype:'button',
                        text:'Add Tab',
                        listeners:{
                            click:function () {
                                Ext.ComponentQuery.query('tabpanel')[0].add(Ext.create('Ext.Component',
                                    {
                                        title:'New Tab'
                                    }));
                            }

                        }
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                width: 500,
                height: 200,
                minTabWidth: 125,
                items:[
                    {
                        title: 'Centered'
                    }
                ]
            }
        ]
    });

});