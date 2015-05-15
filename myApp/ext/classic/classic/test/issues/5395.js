Ext.require('*');
Ext.onReady(function() {
    
new Ext.Component({
    html: '<h1>Drag Child 1 onto Child 3. Then open the second accordion item and do the same. It should work.</h1>',
    style: 'margin: 10px',
    renderTo: document.body
});

Ext.create('Ext.panel.Panel', {
    title: 'Accordion Layout',
    width: 300,
    height: 300,
    style: 'margin: 10px',
    layout:'accordion',
    layoutConfig: {
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [
        {
            xtype: 'treepanel',
            title: 'Simple Tree',
            viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    appendOnly: true
                }
            },
            root: {
                text: 'Root',
                expanded: true,
                children: [
                    {
                        text: 'Child 1',
                        leaf: true
                    },
                    {
                        text: 'Child 2',
                        leaf: true
                    },
                    {
                        text: 'Child 3',
                        expanded: true,
                        children: [
                            {
                                text: 'Grandchild',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        }, {
            xtype: 'treepanel',
            title: 'Simple Tree',
            viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    appendOnly: true
                }
            },
            root: {
                text: 'Root',
                expanded: true,
                children: [
                    {
                        text: 'Child 1',
                        leaf: true
                    },
                    {
                        text: 'Child 2',
                        leaf: true
                    },
                    {
                        text: 'Child 3',
                        expanded: true,
                        children: [
                            {
                                text: 'Grandchild',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        }
    ],
    renderTo: Ext.getBody()
});

});