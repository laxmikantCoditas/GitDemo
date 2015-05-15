Ext.create('Ext.container.Viewport', {
    layout: 'border',
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        margins: '0 0 5 0'},
    {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 150
        // could use a TreePanel or AccordionLayout for navigational items
        },
    {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100},
    {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150},
    {
        region: 'center',
        xtype: 'box',
        title: 'Main Panel',
        html: '<span style="font-size:25px">Should NOT be able to drop nodes from right window into occluded window</span>'}
    ]
});

Ext.create('Ext.window.Window', {
    title: 'Hello',
    layout: 'fit',
    modal: true,
    width: 400,
    height: 400,
    items: { // Let's put an empty grid in just to illustrate fit layout
        xtype: 'treepanel',
        border: false,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        },

        store: Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                    text: "detention",
                    leaf: true},
                {
                    text: "homework",
                    expanded: true,
                    children: [
                        {
                        text: "book report",
                        leaf: true},
                    {
                        text: "algebra",
                        leaf: true}
                    ]},
                {
                    text: "buy lottery tickets",
                    leaf: true},
                {
                    text: "detention",
                    leaf: true},
                {
                    text: "homework",
                    expanded: true,
                    children: [
                        {
                        text: "book report",
                        leaf: true},
                    {
                        text: "algebra",
                        leaf: true}
                    ]},
                {
                    text: "buy lottery tickets",
                    leaf: true}
                ]
            }
        })
    }
}).showAt(100,100);
Ext.create('Ext.window.Window', {
    title: 'Hello',
    layout: 'fit',
    modal: true,
    width: 400,
    height: 400,
    items: { // Let's put an empty grid in just to illustrate fit layout
        xtype: 'treepanel',
        border: false,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        },

        store: Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                    text: "detention",
                    leaf: true},
                {
                    text: "homework",
                    expanded: true,
                    children: [
                        {
                        text: "book report",
                        leaf: true},
                    {
                        text: "algebra",
                        leaf: true}
                    ]},
                {
                    text: "buy lottery tickets",
                    leaf: true},
                {
                    text: "detention",
                    leaf: true},
                {
                    text: "homework",
                    expanded: true,
                    children: [
                        {
                        text: "book report",
                        leaf: true},
                    {
                        text: "algebra",
                        leaf: true}
                    ]},
                {
                    text: "buy lottery tickets",
                    leaf: true}
                ]
            }
        })
    }
}).showAt(500,100);