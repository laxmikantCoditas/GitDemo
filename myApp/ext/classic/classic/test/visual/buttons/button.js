Ext.require([
    'Ext.button.Split',
    'Ext.rtl.*'
]);

Ext.onReady(function() {
    var tpl = [
        '<table class="button-table" id="table-{0}">',
            '<tr>',
                '<th class="cell header first">{0}</th>',
                '<th class="cell header">Normal</th>',
                '<th class="cell header">Mouseover CSS</th>',
                '<th class="cell header">Disabled</th>',
            '</tr>',
            '<tr>',
                '<td class="cell header">Normal</td>',
                '<td class="cell" id="target0-{0}"></td>',
                '<td class="cell" id="target1-{0}"></td>',
                '<td class="cell" id="target2-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td class="cell header">Link</td>',
                '<td class="cell" id="target3-{0}"></td>',
                '<td class="cell" id="target4-{0}"></td>',
                '<td class="cell" id="target5-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td class="cell header">Toolbar</td>',
                '<td class="cell" id="target6-{0}"></td>',
                '<td class="cell" id="target7-{0}"></td>',
                '<td class="cell" id="target8-{0}"></td>',
            '</tr>',
            '<tr>',
                '<td class="cell header">Link &amp;<br>Toolbar</td>',
                '<td class="cell" id="target9-{0}"></td>',
                '<td class="cell" id="target10-{0}"></td>',
                '<td class="cell" id="target11-{0}"></td>',
            '</tr>',
        '</table>'
    ].join('');

    Ext.getBody().update([
        Ext.String.format(tpl, 'small-shrink'),
        Ext.String.format(tpl, 'medium-shrink'),
        Ext.String.format(tpl, 'small-fixed'),
        Ext.String.format(tpl, 'large-shrink'),
        Ext.String.format(tpl, 'medium-fixed'),
        Ext.String.format(tpl, 'large-fixed'),
        '<ul id="config-list"></ul>'
    ].join(''));

    create('target0', 'container', {});
    create('target1', 'container', {simulateOver: true});
    create('target2', 'container', {disabled: true});

    create('target3', 'container', {href: '#'});
    create('target4', 'container', {href: '#', simulateOver: true});
    create('target5', 'container', {disabled: true, href: '#'});

    create('target6', 'toolbar', {});
    create('target7', 'toolbar', {simulateOver: true});
    create('target8', 'toolbar', {disabled: true});

    create('target9', 'toolbar', {href: '#'});
    create('target10', 'toolbar', {href: '#', simulateOver: true});
    create('target11', 'toolbar', {disabled: true, href: '#'});

    // Apply hover styling - this is a bit of a hack
    Ext.each(Ext.ComponentQuery.query('button[simulateOver]'), function(btn) {
        btn.addCls(btn.overCls);
        btn.addClsWithUI(btn.overCls);
    });

    // Build up a list of the key config options
    var listItems = [];

    Ext.Object.each(getBaseConfig(), function(key, value) {
        listItems.push(key + ': ' + Ext.htmlEncode(Ext.encode(value)));
    });

    // Ensure the order otherwise the visual test may fail
    listItems.sort();

    Ext.get('config-list').update('<li>' + listItems.join('</li><li>') + '</li>');

    function create(target, containerType, btnConfig) {
        Ext.each(['shrink', 'fixed'], function(sizing) {
            Ext.each(['small', 'medium', 'large'], function(scale) {
                var baseConfig = Ext.apply(getBaseConfig(), btnConfig);
                var ctWidth = 290;

                baseConfig.scale = scale;

                if (sizing === 'fixed') {
                    baseConfig.height = 80;
                    baseConfig.width = 90;
                }

                if (!baseConfig.text && sizing === 'shrink' && ((!baseConfig.menu && baseConfig.xtype !== 'splitbutton') || baseConfig.arrowAlign === 'bottom')) {
                    if (scale === 'small') {
                        Ext.get('table-small-shrink').setStyle('float', 'left');
                        Ext.get('table-small-shrink').setStyle('margin-right', '6px');
                        ctWidth = 120;
                    }
                    else if (scale === 'medium') {
                        Ext.get('table-medium-shrink').setStyle('float', 'left');
                        ctWidth = 135;
                    }
                }

                var iconCls = scale + '-icon';

                Ext.widget(containerType, {
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
                            iconCls: iconCls,
                            text: null
                        }, baseConfig),
                        {
                            flex: 1,
                            xtype: 'component'
                        },
                        Ext.apply({
                            iconCls: iconCls,
                            text: 'Kg'
                        }, baseConfig)
                    ]
                });
            });
        });
    }

    function getBaseConfig() {
        var params = Ext.Object.fromQueryString(location.search);

        var config = {
            xtype: 'button'
        };

        if (params.rtl === 'true') {
            config.rtl = true;
        }

        if (params.arrowAlign) {
            config.arrowAlign = params.arrowAlign;
        }

        if (params.enableToggle === 'true') {
            config.enableToggle = true;
        }

        if (params.iconAlign) {
            config.iconAlign = params.iconAlign;
        }

        if (params.menu === 'true') {
            config.menu = [{text: 'Item 1'}];
        }

        if (params.pressed === 'true') {
            config.pressed = true;
        }

        if (params.text) {
            config.text = params.text;
        }

        if (params.textAlign) {
            config.textAlign = params.textAlign;
        }

        if (params.split === 'true') {
            config.xtype = 'splitbutton';
        }

        return config;
    }
});
