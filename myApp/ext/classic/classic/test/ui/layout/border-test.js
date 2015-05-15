Ext.require([
    'Ext.panel.Panel',
    'Ext.container.Viewport',
    'Ext.form.*',
    'Ext.layout.*',

    // TODO - 'Ext.diag.*',
    'Ext.diag.layout.ContextItem',
    'Ext.diag.layout.Context',

    'Ext.perf.Monitor'
]);

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var testCases = {
    A: {
        title: 'Test A',
        id: 'testA',
        xtype: 'panel',
        x: 10, y: 25,
        width: 300,
        height: 350,
        cls: 'abs',
        layout: {
            type: 'border'
        },
        items: [
            {
                title: 'West',
                id: 'testA-west',
                region: 'west',
                width: '30%',
                html: loremIpsum,
                bodyStyle: {
                    'overflow-y': 'auto'
                }
            },
            {
                title: 'W',
                id: 'testA-west2',
                region: 'west',
                html: '-B-<br>-O-<br>-R-<br>-D-<br>-E-<br>-R-'
            },
            {
                title: 'North',
                id: 'testA-north',
                region: 'north',
                html: 'north<br>baby!'
            },
            {
                title: 'Center',
                id: 'testA-center',
                region: 'center',
                html: 'center'
            }
        ]
    },
    //----------------------------------------------
    B: {
        title: 'Test B',
        id: 'testB',
        xtype: 'panel',
        x: 320, y: 25,
        width: 300,
        height: 350,
        cls: 'abs',
        layout: {
            type: 'border'
        },
        items: [
            {
                title: 'West',
                id: 'testB-west',
                region: 'west',
                width: '30%',
                weight: 30,
                html: loremIpsum,
                bodyStyle: {
                    'overflow-y': 'auto'
                }
            },
            {
                title: 'W',
                id: 'testB-west2',
                region: 'west',
                width: 30,
                html: '-B-<br>-O-<br>-R-<br>-D-<br>-E-<br>-R-'
            },
            {
                title: 'North',
                id: 'testB-north',
                region: 'north',
                html: 'north<br>baby!'
            },
            {
                title: 'South',
                id: 'testB-south',
                region: 'south',
                weight: -30,
                html: 'south<br>woot!'
            },
            {
                title: 'Center',
                id: 'testB-center',
                region: 'center',
                html: 'center'
            }
        ]
    },
    //----------------------------------------------
    C: function () {
        var add = [
                {
                    title: 'West',
                    id: 'testC-west',
                    region: 'west',
                    width: '30%',
                    weight: 30,
                    html: loremIpsum,
                    split: true,
                    collapsible: true,
                    bodyStyle: {
                        'overflow-y': 'auto'
                    }
                },
                {
                    title: 'Center',
                    id: 'testC-center',
                    region: 'center',
                    html: loremIpsum,
                    collapsible: true,
                    bodyStyle: {
                        'overflow-y': 'auto'
                    }
                },
                {
                    title: 'W',
                    id: 'testC-west2',
                    region: 'west',
                    width: 45,
                    split: true,
                    html: '-W-<br>-E-<br>-S-<br>-T-'
                },
                {
                    title: 'North',
                    id: 'testC-north',
                    collapsible: true,
                    region: 'north',
                    html: 'north<br>baby!',
                    height: 50,
                    split: true
                },
                {
                    title: 'E',
                    id: 'testC-east',
                    region: 'east',
                    width: 45,
                    weight: -40,
                    split: true,
                    html: '-E-<br>-A-<br>-S-<br>-T-'
                },
                {
                    id: 'testC-south2',
                    region: 'south',
                    weight: -50,
                    title: 'South 2',
                    html: 'south baby!',
                    height: '25%',
                    maintainFlex: true,
                    collapsible: true,
                    split: true
                },
                {
                    title: 'E2',
                    id: 'testC-east2',
                    region: 'east',
                    width: 45,
                    split: true,
                    html: '-E-<br>-A-<br>-S-<br>-T-<br>-2-'
                },
                {
                    title: 'E3',
                    id: 'testC-east3',
                    region: 'east',
                    width: 45,
                    split: true,
                    html: '-E-<br>-A-<br>-S-<br>-T-<br>-3-'
                },
                {
                    id: 'testC-south',
                    region: 'south',
                    title: 'South 1',
                    weight: -30,
                    html: 'south woot!',
                    height: 55,
                    collapsible: true,
                    split: true
                }
            ],
            panel;

        function onAdd () {
            var config = add.shift(),
                comp;

            if (config) {
                config.tools = [
                    {
                        type: 'close',
                        handler: function () {
                            panel.remove(comp, true);
                            add.push(config);
                        }
                    }
                ];

                comp = panel.add(config);
            }
        }

        function onHideShow (hide) {
            var items = panel.items.items,
                length = items.length,
                i, item;

            for (i = 0; i < length; ++i) {
                item = items[i];
                if (item.region && item.hidden != hide) {
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
            title: 'Test C',
            id: 'testC',
            xtype: 'panel',
            x: 630, y: 25,
            width: 400,
            height: 350,
            cls: 'abs',
            layout: {
                type: 'border'
            },
            resizable: true,
            listeners: {
                render: function (comp) {
                    panel = comp;
                }
            },
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
            ],
            items: [
                /*{
                    title: 'West',
                    id: 'testC-west',
                    region: 'west',
                    width: '30%',
                    weight: 30,
                    html: loremIpsum,
                    split: true,
                    bodyStyle: {
                        'overflow-y': 'auto'
                    }
                },
                {
                    title: 'W',
                    id: 'testC-west2',
                    region: 'west',
                    width: 25,
                    split: true,
                    html: '-W-<br>-E-<br>-S-<br>-T-'
                },
                {
                    title: 'North',
                    id: 'testC-north',
                    region: 'north',
                    html: 'north<br>baby!',
                    height: 50,
                    split: true
                },*/
                /*{
                    title: 'Center',
                    id: 'testC-center',
                    region: 'center',
                    html: loremIpsum,
                    bodyStyle: {
                        'overflow-y': 'auto'
                    }
                },
                {
                    title: 'E',
                    id: 'testC-east',
                    region: 'east',
                    width: 25,
                    weight: -40,
                    split: true,
                    html: '-E-<br>-A-<br>-S-<br>-T-'
                },
                {
                    id: 'testC-south2',
                    region: 'south',
                    weight: -50,
                    html: 'south baby!',
                    height: 25,
                    split: true
                }*/
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
            //layout: '',
            items: [],
            autoScroll: true,
            html: '<div style="padding: 6px;">' +
                    'Use ?test=AB on the URL to run only certain test(s) and ?perf to ' +
                    'turn of Perf monitor. These can be combined "test=A&amp;perf"' +
                '</div>'
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
