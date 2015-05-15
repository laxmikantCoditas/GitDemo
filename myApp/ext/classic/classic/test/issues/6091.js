// simplified test case for EXTJSIV-6091
Ext.onReady(function() {

    var loremIpsum = 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>'
        + 'lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>lorem<br/>ipsum<br/>dolor<br/>sit<br/>amet<br/>';

    Ext.create('Ext.container.Viewport', {
        renderTo: Ext.getBody(),
        layout: 'fit',
        items:[{
            xtype: 'form',
            autoScroll: true,
            items:[
                {
                    xtype: 'displayfield',
                    value: loremIpsum
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'form',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Fieldset',
                                    collapsible: true,
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            value: loremIpsum
                                        }
                                    ]
                                }
                            ] // form items
                        }
                        ,
                        {
                            xtype: 'form',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Fieldset',
                                    collapsible: true,
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            value: loremIpsum
                                        }
                                    ]
                                }
                            ] // form items
                        }
                    ] // container items
                }

            ]
        }]
    });

});