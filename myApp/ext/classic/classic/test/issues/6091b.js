// original test case for EXTJSIV-6091
Ext.onReady(function() {

    Ext.application({
        name: 'Test',
        launch: function() {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items:[{
                    xtype : 'tabpanel',
                    items:[{
                        xtype: 'form',
                        autoScroll: true,
                        title: 'Tab1',
                        items:[{
                            xtype: 'label',
                            text : ' --** TOP **--',
                            style: 'font-size: 18px; color:RED; font-weight:bold;'


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 1',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 1 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 1 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 2',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 2 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 2 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 3',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 3 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 3 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 4',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 4 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 4 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 5',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 5 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 5 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 6',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 6 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 6 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 7',
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 7 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 7 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                }]

                            }]


                        },{
                            xtype: 'fieldset',
                            title: 'Fieldset - 8',
                            collapsible : true,
                            collapsed   : true,
                            items: [{
                                xtype: 'container',
                                layout: 'hbox',
                                items: [{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 8 A',
                                        collapsible : true,
                                        collapsed   : true,
                                        items:[{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]

                                    }]

                                },{
                                    xtype: 'form',
                                    flex: 1,
                                    items:[{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text1'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text2'

                                    },{
                                        xtype: 'displayfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'textfield',
                                        value: 'Bla',
                                        fieldLabel: 'Text3'

                                    },{
                                        xtype: 'fieldset',
                                        title: 'Fieldet collapsible - 8 B',
                                        collapsible : true,
                                        collapsed   : true,
                                        items: [{
                                            xtype: 'displayfield',
                                            value: 'Bla',
                                            fieldLabel: 'Text234'

                                        }]
                                    }]
                                }]
                            }]
                        },{
                            xtype: 'label',
                            text : ' --** BOTTOM **--',
                            style: 'font-size: 18px; color:RED; font-weight:bold;'


                        }]
                    }]


                }]
            });
        }
    });


});