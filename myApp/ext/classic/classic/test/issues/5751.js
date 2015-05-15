// Ext.require('Ext.diag.layout.ContextItem');

Ext.Loader.setPath({
    'Ext.app': '../../examples/portal/classes'
});

Ext.require(
    'Ext.app.PortalPanel'
);

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
loremIpsum = loremIpsum + loremIpsum;

var testCase = {
    run: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'anchor',
            autoScroll: true,
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'portalpanel',
                    //layout: 'column',   // default for portalpanel
                    title: 'Top',
                    items: [
                        {
                            id: 'col-1',
                            columnWidth: .5,
                            //layout: 'anchor',   // default for portalcolumn
                            defaults: {
                                anchor: '100%',
                                height: 150
                            },
                            items: [
                                {
                                    title: "Hello",
                                    html: 'A ' + loremIpsum
                                },
                                {
                                    title: "Hello",
                                    html: 'B ' + loremIpsum
                                }
                            ]
                        },
                        {
                            id: 'col-2',
                            columnWidth: .5,
                            //layout: 'anchor',   // default for portalcolumn
                            defaults: {
                                anchor: '100%',
                                height: 150
                            },
                            items: [
                                {
                                    title: "Hello",
                                    html: 'C ' + loremIpsum
                                },
                                {
                                    title: "Hello",
                                    html: 'D ' + loremIpsum
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'portalpanel',
                    //layout: 'column',   // default for portalpanel
                    title: 'Bottom',
                    items: [
                        {
                            id: 'col-3',
                            columnWidth: 1,
                            //layout: 'anchor',   // default for portalcolumn
                            defaults: {
                                anchor: '100%',
                                height: 150
                            },
                            items: [
                                {
                                    title: "hello",
                                    html: 'E ' + loremIpsum
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    },

    xevents: [
        // collapse the panel:
        { type: 'mduclick', ts: 1000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterCollapse' },

        // expand the panel:
        { type: 'mduclick', ts: 2000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterExpand' },

        // collapse the panel:
        { type: 'mduclick', ts: 3000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterCollapse' },

        // expand the panel:
        { type: 'mduclick', ts: 4000, x: 0, y: 0, target: '#tool-1015-toolEl', button: 0,
          afterplay: 'afterExpand' }
    ]
};
