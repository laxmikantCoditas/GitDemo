Ext.require([
    'Ext.panel.Panel',
    'Ext.container.Viewport',
    'Ext.form.*',
    'Ext.layout.*',
    'Ext.perf.Monitor'
]);

var testCases = {
    A: function () {
        var add = [
                {
                    xtype: 'panel',
                    dock: 'top',
                    id: 'testA_dock1',
                    layout: 'hbox',
                    bodyStyle: 'background-color: yellow',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'bottom',
                    id: 'testA_dock2',
                    layout: 'hbox',
                    bodyStyle: 'background-color: orange',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'left',
                    id: 'testA_dock3',
                    layout: 'vbox',
                    bodyStyle: 'background-color: green',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'right',
                    id: 'testA_dock4',
                    layout: 'vbox',
                    bodyStyle: 'background-color: red',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'top',
                    id: 'testA_dock5',
                    layout: 'hbox',
                    bodyStyle: 'background-color: #f88',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'bottom',
                    id: 'testA_dock6',
                    layout: 'hbox',
                    bodyStyle: 'background-color: #8f8',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'left',
                    id: 'testA_dock7',
                    layout: 'vbox',
                    bodyStyle: 'background-color: #88f',
                    items: []
                },
                {
                    xtype: 'panel',
                    dock: 'right',
                    id: 'testA_dock8',
                    layout: 'vbox',
                    bodyStyle: 'background-color: #f80',
                    items: []
                }
            ],
            panel;

        function onAdd () {
            var config = add.shift(),
                cfg, comp;

            if (config) {
                cfg = Ext.apply({}, config);
                cfg.tester = 1;
                cfg.items = config.items.concat(
                    {
                        xtype: 'button',
                        text: '+',
                        handler: function () {
                            var a = [],
                                i = comp.items.items.length;
                            while (i--) {
                                a.push(i);
                            }
                            comp.add(2, {
                                xtype: 'component',
                                html: (cfg.dock == 'left' || cfg.dock == 'right') ?
                                    a.join('')+'<br>' : a.join('<br>')
                            });
                        }
                    },
                    {
                        xtype: 'button',
                        text: '-',
                        handler: function () {
                            var items = comp.items.items;

                            comp.suspendLayouts();
                            while (items.length > 4) {
                                comp.remove(items[2]);
                            }
                            comp.resumeLayouts(true);
                        }
                    },
                    {
                        xtype: 'component',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: 'X',
                        handler: function () {
                            panel.removeDocked(comp, true);
                            add.push(config);
                        }
                    }
                );

                comp = panel.addDocked(cfg)[0];
            }
        }

        function onHideShow (hide) {
            var items = panel.dockedItems.items,
                length = items.length,
                i, item;

            for (i = 0; i < length; ++i) {
                item = items[i];
                if (item.tester && item.hidden != hide) {
                    item.setVisible(!hide);
                    break;
                }
            }
        }

        function onHide () {
            onHideShow(false);
        }

        function onShow () {
            onHideShow(true);
        }

        return {
            title: 'Test A',
            id: 'testA',
            xtype: 'panel',
            x: 10, y: 25,
            width: 400,
            height: 350,
            resizable: true,
            listeners: {
                render: function (comp) {
                    panel = comp;
                }
            },
            bodyStyle: 'background-color: #f0f',
            tools: [
                { type: 'plus', handler: onAdd, qtip: 'Add component' },
                { type: 'pin', handler: onShow, qtip: 'Show something' },
                { type: 'unpin', handler: onHide, qtip: 'Hide something' },
                {
                    type: 'refresh',
                    handler: function () {
                        panel.doLayout();
                    }
                }
            ]
        };
    },
    //----------------------------------------------
    0:0
}; // testCases

function go (tests) {
    var start = new Date(),
        viewport = {
            xtype: 'viewport',
            layout: 'absolute',
            items: [{
                xtype: 'component',
                anchor: '0',
                x: 10, y: 5,
                html: 'Use ?test=AB on the URL to run only certain test(s) and ?perf to ' +
                    'turn of Perf monitor. These can be combined "test=A&amp;perf"'
            }],
            autoScroll: true
        },
        i, len, test, c, id;

    //tests = 'C';

    for (i = 0, len = tests.length; i < len; ++i) {
        c = tests.charAt(i);
        id = 'test' + c;

        test = testCases[c];

        if (typeof test == 'function') {
            test = test(id);
        }
        test.id = id;

        viewport.items.push(test);
    }

    Ext.ComponentManager.create(viewport);

    var dt = new Date() - start;
    Ext.log('totalTime = ' + dt);
}

Ext.onReady(function () {
    var m = /test\=([^&=]+)/.exec(window.location.search),
        tests = m && m[1];

    if (!tests) {
        tests = '';
        Ext.Object.each(testCases, function (name) {
            if (name != '0') {
                tests += name;
            }
        });
    }

    //Ext.QuickTips.init();

    if (window.location.search.indexOf('perf') >= 0) {
        Ext.Perf.setup();
        Ext.Perf.monitor('go', function () {
            go(tests);
        });
        Ext.Perf.report();
    } else {
        go(tests);
    }
});
