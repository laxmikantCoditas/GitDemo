
Ext.require([
        'Ext.form.*',
        'Ext.tip.*'
    ]);

    Ext.onReady(function () {

        function createCheckBox(index) {
            return {
                xtype    : 'checkboxfield',
                boxLabel : 'Check: ' + index,
                name     : 'check' + index,
                itemId   : 'check' + index
            }
        }

        Ext.create('Ext.window.Window', {
            title    : 'Hello',
            renderTo : Ext.getBody(),
            layout   : 'fit',
            width    : 400,
            items    : [
                {
                    xtype       : 'form',
                    items       : [
                        {
                            bodyStyle   : 'padding: 5px 5px 0 5px;',
                            defaultType : 'textfield',
                            items       : [
                                {
                                    xtype : 'textareafield',
                                    name  : 'message',
                                    flex  : 1,
                                    value : 'Click the checkboxes, then shrink width to see the Toolbar Overflow Menu.'
                                }
                            ]
                        }
                    ],
                    dockedItems : [
                        {
                            xtype          : 'toolbar',
                            itemId         : 'toptoolbar',
                            enableOverflow : true,
                            dock           : 'top',
                            items          : [
                                '->',
                                createCheckBox(1),
                                createCheckBox(2),
                                createCheckBox(3),
                                createCheckBox(4),
                                {
                                    xtype        : 'button',
                                    text         : 'Toggle Button',
                                    enableToggle : true
                                }
                            ]
                        }
                    ]
                }
            ]
        }).show();
    });
