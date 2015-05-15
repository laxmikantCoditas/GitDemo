Ext.require([
    'Ext.Window',
    'Ext.tip.QuickTip'
]);

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function show (config) {
    var comp = Ext.widget(Ext.apply({
        title: 'Hello',
        html:  'Test',
        width: 200,
        tools: [
            {
                type: 'refresh',
                qtip: loremIpsum,
                handler: function (e, toolEl, owner) {
                    comp.doLayout();
                }
            }
        ]
    }, config));
}

Ext.onReady(function () {
    Ext.QuickTips.init();
    show({ xtype: 'panel', frame: true, renderTo: Ext.getBody(), minHeight: 100, style: 'position: absolute;left:20px;top:20px;' });
    show({ xtype: 'window', hidden: true, autoShow: true, x: 240, y: 20, minHeight: 100 });
});
