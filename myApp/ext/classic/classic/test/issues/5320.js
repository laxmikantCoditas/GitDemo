var testCase = {
    run: function(){

//        Ext.create('Ext.window.Window', {
//            title: 'Foo',
//            layout: 'anchor',
//            autoShow: true,
//            defaultType: 'label',
//            items: [{
//                text: 'My Label this is extra long so the label wraps... eventually',
//                anchor: '100% 50%'
//            }, {
//                text: 'My Label',
//                anchor: '100% 50%'
//            }]
//        });


        Ext.define('TaskDialog',{
            extend: 'Ext.window.Window',
            alias: 'widget.taskdialog',


            title: 'app',
            layout: {
                type: 'anchor'
            },
            initComponent: function() {
                var me = this;


                Ext.apply(me,
                    {
                        items:
                            [
                                {
                                    xtype: 'label',
                                    id: 'title',
                                    padding: '8 0 8 8',
                                    style: 'color:#49D;font-weight:bold;font-size:12pt;',
                                    text: 'My Label this is extra long so the label wraps... eventually',
                                    anchor: '100% 50%'
                                },
                                {
                                    xtype: 'label',
                                    id: 'details',
                                    padding: '8',
                                    text: 'My Label',
                                    anchor: '100% 50%'
                                }
                            ]


                    });


                me.callParent(arguments);
            }
        });

        Ext.application(
            {
                name: 'My App',
                launch: function()
                {
                    Ext.create('Ext.Button',
                        {
                            renderTo: Ext.getBody(),
                            text: 'Click me',
                            width: 100,
                            height: 24,
                            listeners:
                            {
                                click: function()
                                {
                                    Ext.create('TaskDialog',{ }).show();
                                }
                            }
                        }).center();
                }
            });
    }
};