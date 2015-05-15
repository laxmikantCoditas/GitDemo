Ext.require([
    'Ext.window.Window',
    'Ext.rtl.*'
]);

Ext.onReady(function() {

    var y = 0,
        id = 1,
        getQueryParam = function(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1]);
        },
        hasQueryParam = function(name) {
            return window.location.search.indexOf(name) >= 0;
        },
        xtype = getQueryParam('xtype') || 'panel',
        frame = getQueryParam('frame') === 'true' ? true : false,
        shadow = getQueryParam('shadow') === 'true' ? true : false,
        fixedWidth = getQueryParam('fixedWidth') === 'false' ? false : true,
        fixedHeight = getQueryParam('fixedHeight') === 'false' ? false : true,
        collapsed = getQueryParam('collapsed') === 'true' ? true : false,
        rtl = hasQueryParam('rtl') ? true : undefined,
        nocss3 = hasQueryParam('nocss3'),
        contentHeight = 37,
        contentWidth = 62;

    if(xtype === 'window') {
        contentHeight -= 5;
        contentWidth -= 10;
    } else if(frame) {
        contentHeight -= 11;
        contentWidth -= 10;
    }

    if (nocss3) {
        Ext.supports.CSS3BorderRadius = false;
        Ext.getBody().addCls('x-nbr x-nlg');
    }

    function createPanels(headerPosition) {
        var vertical = headerPosition === 'top' || headerPosition === 'bottom',
            createPanel = function(x, options) {
                var itemHeight = options.tbar ? contentHeight : contentHeight + (frame ? 38 : 36),
                    itemWidth = options.tbar ? contentWidth : contentWidth + (frame ? 38 : 36);
                
                Ext.applyIf(options, {
                    xtype: xtype,
                    headerPosition: headerPosition,
                    floating: true,
                    shadow: shadow,
                    minWidth: 0,
                    minHeight: 0,
                    height: fixedHeight ? 100 : undefined,
                    width: fixedWidth ? 100 : undefined,
                    collapsed: collapsed,
                    expandOnShow: false,
                    title: 'Lorem ipsum',
                    frame: frame,
                    closable: false,
                    rtl: rtl,
                    items: [{
                        xtype: 'component',
                        style: 'overflow:hidden',
                        html: 'dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        height: fixedHeight ? undefined : (vertical ? itemHeight : itemWidth),
                        width: fixedWidth ? undefined : (vertical ? itemWidth : itemHeight)
                    }]
                });
                Ext.widget(options).showAt(x + 100, y + 100);
            };

        createPanel(0, {
            tbar: {
                xtype: 'component',
                id:    xtype + id + '_tbar',
                style: 'background-color:red;border:1px solid black;',
                height: 18,
                weight: 1
            },
            bbar: {
                xtype: 'component',
                id:    xtype + id + '_bbar',
                style: 'background-color:orange;border:1px solid blue;',
                height: 18,
                weight: 3
            },
            lbar: {
                xtype: 'component',
                id:    xtype + id + '_lbar',
                style: 'background-color:yellow;border:1px solid blue;',
                width: 18,
                weight: 5
            },
            rbar: {
                xtype: 'component',
                id:    xtype + id + '_rbar',
                style: 'background-color:#0f0;border:1px solid black;',
                width: 18,
                weight: 7
            }
        });
        createPanel(110, {
            iconCls: 'icon-feed'
        });
        createPanel(220, {
            closable: true
        });
        createPanel(330, {
            iconCls: 'icon-feed',
            closable: true,
            collapsible: true
        });

        y += 110;
        id++;
    }

    createPanels('top');
    createPanels('right');
    createPanels('bottom');
    createPanels('left');

});
