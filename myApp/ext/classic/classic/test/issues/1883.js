Ext.require('*');

Ext.onReady(function() {
    var allowExpand = true,
        allowCollapse = true;

    Ext.create('Ext.tree.Panel', {
        width: 300,
        height: 400,
        title: 'Tree',
        renderTo: Ext.getBody(),
        rootVisible: false,
        tbar: [
            {
                //xtype: 'checkbox',
                text: 'Allow Expand',
                pressed: allowExpand,
                enableToggle: true,
                handler: function (comp) {
                    allowExpand = comp.pressed;
                }
            },
            {
                //xtype: 'checkbox',
                text: 'Allow Collapse',
                pressed: allowCollapse,
                enableToggle: true,
                handler: function (comp) {
                    allowCollapse = comp.pressed;
                }
            }
        ],
        //viewConfig: {
        listeners: {
            beforeitemexpand: function () {
                Ext.log('beforeitemexpand');
                return allowExpand;
            },
            beforeitemcollapse: function () {
                Ext.log('beforeitemcollapse');
                return allowCollapse;
            }
        //}
        },
        store: Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Child 1',
                        children: [
                            { text: 'Sub 1a', leaf: true },
                            { text: 'Sub 1b', leaf: true }
                        ]
                    },
                    {
                        text: 'Child 2',
                        children: [
                            { text: 'Sub 2a', leaf: true },
                            { text: 'Sub 2b', leaf: true },
                            { text: 'Sub 2c', leaf: true },
                            { text: 'Sub 2d', leaf: true }
                        ]
                    }
                ]
            }
        })
    });
});
