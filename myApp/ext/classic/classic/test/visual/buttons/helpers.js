var tpl = [
        '<table style="background-color: #FFF; margin:5px 0;" id="table-{0}" class="x-border-box x-root">',
            '<tr>',
                '<th style="border: 1px solid #DDD; text-align: center; padding: 5px; background-color: #EEE; font-size: 10px; width: 60px;">{0}</th>',
                '<th style="border: 1px solid #DDD; text-align: center; padding: 5px; background-color: #EEE; font-size: 10px;">Normal</th>',
                '<th style="border: 1px solid #DDD; text-align: center; padding: 5px; background-color: #EEE; font-size: 10px;">Mouseover CSS</th>',
                '<th style="border: 1px solid #DDD; text-align: center; padding: 5px; background-color: #EEE; font-size: 10px;">Disabled</th>',
            '</tr>',
            '<tr>',
                '<td style="border: 1px solid #DDD; padding: 5px; background-color: #EEE; font-size: 10px;">Normal</td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target0-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target1-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target2-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td style="border: 1px solid #DDD; padding: 5px; background-color: #EEE; font-size: 10px;">Link</td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target3-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target4-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target5-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td style="border: 1px solid #DDD; padding: 5px; background-color: #EEE; font-size: 10px;">Toolbar</td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target6-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target7-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target8-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td style="border: 1px solid #DDD; padding: 5px; background-color: #EEE; font-size: 10px;">Link &amp;<br>Toolbar</td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target9-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target10-{0}"></td>',
                '<td style="border: 1px solid #DDD; padding: 5px;" id="target11-{0}"></td>',
            '</tr>',
        '</table>'
    ].join(''),
    icons = {
        small: 'buttons/16x16.png',
        medium: 'buttons/24x24.png',
        large: 'buttons/32x32.png'
    },
    containers;

function createButtons(scale, sizing, target, containerType, btnConfig) {
    var baseConfig = btnConfig,
        ctWidth = 290,
        icon = icons[scale];

    baseConfig.scale = scale;

    if (sizing === 'fixed') {
        baseConfig.height = 80;
        baseConfig.width = 90;
    }

    if (!baseConfig.text && sizing === 'shrink' && ((!baseConfig.menu && baseConfig.xtype !== 'splitbutton') || baseConfig.arrowAlign === 'bottom')) {
        if (scale === 'small') {
            ctWidth = 120;
        }
        else if (scale === 'medium') {
            ctWidth = 135;
        }
    }

    containers.push(Ext.widget(containerType, {
        layout: 'hbox',
        renderTo: target + '-' + scale + '-' + sizing,
        width: ctWidth,
        items: [
            Ext.apply({
                text: 'Kg'
            }, baseConfig),
            {
                flex: 1,
                xtype: 'component'
            },
            Ext.applyIf({
                icon: icon,
                text: null
            }, baseConfig),
            {
                flex: 1,
                xtype: 'component'
            },
            Ext.apply({
                icon: icon,
                text: 'Kg'
            }, baseConfig)
        ]
    }));
}

function create(scale, sizing, config) {
    var listItems = [],
        size, coord, table;

    config = Ext.apply({ xtype: 'button' }, config || {});

    createButtons(scale, sizing, 'target0', 'container', Ext.apply({}, config));
    createButtons(scale, sizing, 'target1', 'container', Ext.apply({simulateOver: true}, config));
    createButtons(scale, sizing, 'target2', 'container', Ext.apply({disabled: true}, config));

    createButtons(scale, sizing, 'target3', 'container', Ext.apply({href: '#'}, config));
    createButtons(scale, sizing, 'target4', 'container', Ext.apply({href: '#', simulateOver: true}, config));
    createButtons(scale, sizing, 'target5', 'container', Ext.apply({disabled: true, href: '#'}, config));

    createButtons(scale, sizing, 'target6', 'toolbar', Ext.apply({}, config));
    createButtons(scale, sizing, 'target7', 'toolbar', Ext.apply({simulateOver: true}, config));
    createButtons(scale, sizing, 'target8', 'toolbar', Ext.apply({disabled: true}, config));

    createButtons(scale, sizing, 'target9', 'toolbar', Ext.apply({href: '#'}, config));
    createButtons(scale, sizing, 'target10', 'toolbar', Ext.apply({href: '#', simulateOver: true}, config));
    createButtons(scale, sizing, 'target11', 'toolbar', Ext.apply({disabled: true, href: '#'}, config));

    // Apply hover styling - this is a bit of a hack
    Ext.each(Ext.ComponentQuery.query('button[simulateOver]'), function(btn) {
        btn.addCls(btn.overCls);
        btn.addClsWithUI(btn.overCls);
    });

    // Build up a list of the key config options
    Ext.Object.each(config, function(key, value) {
        listItems.push(key + ': ' + Ext.htmlEncode(Ext.encode(value)));
    });

    // Ensure the order otherwise the visual test may fail
    listItems.sort();
    table = Ext.getBody().down('table');
    coord = table.getXY();
    size = table.getSize();
    takeScreenshot({
        area: {
            x: coord[0],
            y: coord[1],
            width: size.width,
            height: size.height
        }
    });
}

function createSuite(scale, sizing) {
    var desc = scale + '-' + sizing;

    describe(desc, function() {

        beforeEach(function() {
            containers = [];
            Ext.getBody().update(Ext.String.format(tpl, desc));
            
        });
        
        afterEach(function() {
            var i = containers.length;

            for(; i--;) {
                containers[i].destroy();
            }

            Ext.getBody().dom.innerHTML = '';
        });

        it("should render buttons", function() {
            create(scale, sizing);
        });

        it("should render buttons with top-aligned icons", function() {
            create(scale, sizing, {
                iconAlign: 'top'
            });
        });

        it("should render buttons with right-aligned icons", function() {
            create(scale, sizing, {
                iconAlign: 'right'
            });
        });

        it("should render buttons with bottom-aligned icons", function() {
            create(scale, sizing, {
                iconAlign: 'bottom'
            });
        });

        it("should render buttons with left-aligned text", function() {
            create(scale, sizing, {
                textAlign: 'left'
            });
        });

        it("should render buttons with left-aligned text and top-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'left',
                iconAlign: 'top'
            });
        });

        it("should render buttons with left-aligned text and right-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'left',
                iconAlign: 'right'
            });
        });

        it("should render buttons with left-aligned text and bottom-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'left',
                iconAlign: 'bottom'
            });
        });

        it("should render buttons with right-aligned text", function() {
            create(scale, sizing, {
                textAlign: 'right'
            });
        });

        it("should render buttons with right-aligned text and top-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'right',
                iconAlign: 'top'
            });
        });

        it("should render buttons with right-aligned text and right-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'right',
                iconAlign: 'right'
            });
        });

        it("should render buttons with right-aligned text and bottom-aligned icons", function() {
            create(scale, sizing, {
                textAlign: 'right',
                iconAlign: 'bottom'
            });
        });

        it("should render buttons with space-containing text", function() {
            create(scale, sizing, {
                text: 'A B C D E F G H I J'
            });
        });

        it("should render buttons with space-containing text and top-aligned icons", function() {
            create(scale, sizing, {
                text: 'A B C D E F G H I J',
                iconAlign: 'top'
            });
        });

        it("should render buttons with space-containing text and right-aligned icons", function() {
            create(scale, sizing, {
                text: 'A B C D E F G H I J',
                iconAlign: 'right'
            });
        });

        it("should render buttons with space-containing text and bottom-aligned icons", function() {
            create(scale, sizing, {
                text: 'A B C D E F G H I J',
                iconAlign: 'bottom'
            });
        });

        it("should render buttons with wrapping text", function() {
            create(scale, sizing, {
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G'
            });
        });

        it("should render buttons with wrapping text and top-aligned icons", function() {
            create(scale, sizing, {
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G',
                iconAlign: 'top'
            });
        });

        it("should render buttons with wrapping text and right-aligned icons", function() {
            create(scale, sizing, {
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G',
                iconAlign: 'right'
            });
        });

        it("should render buttons with wrapping text and bottom-aligned icons", function() {
            create(scale, sizing, {
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G',
                iconAlign: 'bottom'
            });
        });

        it("should render pressed buttons", function() {
            create(scale, sizing, {
                enableToggle: true,
                pressed: true
            });
        });

        it("should render pressed buttons with top-aligned icons", function() {
            create(scale, sizing, {
                enableToggle: true,
                pressed: true,
                iconAlign: 'top'
            });
        });

        it("should render pressed buttons with right-aligned icons", function() {
            create(scale, sizing, {
                enableToggle: true,
                pressed: true,
                iconAlign: 'right'
            });
        });

        it("should render buttons with menus", function() {
            create(scale, sizing, {
                menu: [{text: 'Item 1'}]
            });
        });

        it("should render buttons with menus and bottom-aligned arrows", function() {
            create(scale, sizing, {
                menu: [{text: 'Item 1'}],
                arrowAlign: 'bottom'
            });
        });

        it("should render buttons with menus, bottom-aligned arrows, and top-aligned icons", function() {
            create(scale, sizing, {
                menu: [{text: 'Item 1'}],
                arrowAlign: 'bottom',
                iconAlign: 'top'
            });
        });

        it("should render split buttons", function() {
            create(scale, sizing, {
                xtype: 'splitbutton'
            });
        });

        it("should render split buttons with top-aligned icons", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                iconAlign: 'top'
            });
        });

        it("should render split buttons with right-aligned icons", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                iconAlign: 'right'
            });
        });

        it("should render split buttons with top-aligned icons and wrapping text", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                iconAlign: 'top',
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G'
            });
        });

        it("should render split buttons with right-aligned icons and wrapping text", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                iconAlign: 'right',
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G'
            });
        });

        it("should render split buttons with bottom-aligned arrows and wrapping text", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                arrowAlign: 'bottom',
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G'
            });
        });

        it("should render split buttons with bottom-aligned arrows, top-aligned icons, and wrapping text", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                arrowAlign: 'bottom',
                iconAlign: 'top',
                text: 'A<br>B<br>C<br>D<br>E<br>F<br>G'
            });
        });

        it("should render split buttons with bottom-aligned arrows and right-aligned icons", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                arrowAlign: 'bottom',
                iconAlign: 'right'
            });
        });

        it("should render split buttons with bottom-aligned arrows and botttom-aligned icons", function() {
            create(scale, sizing, {
                xtype: 'splitbutton',
                arrowAlign: 'bottom',
                iconAlign: 'bottom'
            });
        });
    });
}