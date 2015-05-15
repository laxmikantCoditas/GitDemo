Ext.onReady(function () {

    Ext.create('Ext.container.Viewport', {

        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'container',
            region: 'center',
            layout: {
                align: 'stretch',
                type: 'vbox'
            },
            items: [{
                xtype: 'button',
                toggleHandler: function (button, state) {
                    var c = Ext.getCmp('target').getEl();
                    if (state) {
                        c.slideIn();
                    } else {
                        c.slideOut('t', {
                            remove: true
                        });
                    }
                },
                enableToggle: true,
                pressed: true,
                text: 'MyButton'
            }, {
                xtype: 'container',
                height: 100,
                style: {
                    background: 'yellow'
                }
            }, {
                xtype: 'container',
                id: 'target',
                height: 100,
                style: {
                    background: 'red'
                }
            }, {
                xtype: 'container',
                height: 100,
                style: {
                    background: 'blue'
                }
            }, {
                xtype: 'container',
                flex: 1,
                style: {
                    background: 'green'
                }
            }]
        }]
    });

});
