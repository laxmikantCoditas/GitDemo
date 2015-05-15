/**
 * Created with JetBrains PhpStorm.
 * User: fredmoseley
 * Date: 5/1/13
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.onReady(function () {
    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [
            {
                xtype: 'panel',
                region: 'center',
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: 'combo picker doesn\'t align',
                        labelWidth: 150,
                        store: [
                            ['1', 'Item 1'],
                            ['2', 'Item 2']
                        ]
                    }
                ]
            }
        ]
    });
});
