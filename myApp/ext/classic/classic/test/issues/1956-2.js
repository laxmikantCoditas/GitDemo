Ext.onReady(function(){

    Ext.create('Ext.container.Viewport', {
        layout: 'anchor',
        items: [
            {
                xtype: 'panel',
                bodyPadding: 15,
                title: 'Panel A',
                collapsible: true,
                layout: 'anchor',
                items: [
                    {
                        xtype: 'displayfield',
                        value: 'Panel C should have twenty items, but it does not display '+
                                '(its auto height is not respected).<br>'+
                                'Collapsing these panel should properly resize outer panels.'
                    },
                    {
                        xtype: 'panel',
                        title: 'Panel B',
                        collapsible: true,
                        bodyPadding: 10,
                        anchor: '0',
                        layout: 'anchor',
                        items: [{
                            xtype: 'panel',
                            title: 'Panel C',
                            anchor: '0',
                            collapsible: true,
                            bodyPadding: 10,
                            layout: 'anchor',
                            //height: 100,  // is there another way to use vbox/column w/out this?
                            //layout: { type: 'vbox', align: 'stretch' },
                            items: (function () {
                                var ret = [];
                                for (var i = 0; i < 20; ++i) {
                                    ret.push({
                                        xtype: 'container',
                                        layout: 'hbox',
                                        anchor: '0',
                                        items: [
                                            { xtype: 'checkbox', boxLabel: 'BoxLabel', flex: 1 },
                                            { xtype: 'radio', boxLabel: 'BoxLabel' }
                                        ]
                                    });
                                }
                                return ret;
                            })()
                        }]
                    }
                ]
            }
        ]
    }); // viewport
});
