Ext.require('Ext.tab.*');

Ext.onReady(function(){

    var tabs = Ext.Array.map([1,2,3,4,5], function(num) {
            return {title: 'Tab ' + num};
        }),
        fewTabs = tabs.slice(0, 2);

    Ext.Array.forEach(['top', 'bottom'], function(pos) {

        Ext.widget('container', {
            renderTo: Ext.getBody(),
            defaultType: 'tabpanel',
            defaults: {
                tabPosition: pos,
                margin: 3,
                width: 150,
                height: 100,
                style: 'float: left;'
            },
            items: [{
                xtype: 'panel',
                title: 'Panel Title',
                headerPosition: pos
            }, {
                items: fewTabs
            }, {
                items: fewTabs,
                plain: true
            }, {
                items: tabs
            }, {
                items: tabs,
                plain: true
            }, {
                items: fewTabs,
                border: false
            }, {
                items: fewTabs,
                plain: true,
                border: false
            }, {
                items: tabs,
                border: false
            }, {
                items: tabs,
                plain: true,
                border: false
            }]
        });

    });

});