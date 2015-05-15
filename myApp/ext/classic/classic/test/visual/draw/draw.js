Ext.require(['Ext.draw.Component']);
Ext.onReady(function () {
    var items = [
        {
            id: 'lt',
            type: 'rect',
            x: 30,
            y: 30,
            width: 30,
            height: 30,
            "stroke-width": 1,
            stroke: 'red',
            fill : 'blue'
        }, {
            id: 'lb',
            type: 'rect',
            x: 30,
            y: 200,
            width: 30,
            height: 30,
            "stroke-width": 1,
            stroke: 'red',
            fill : 'blue'
        }, {
            id: 'rt',
            type: 'rect',
            x: 200,
            y: 30,
            width: 30,
            height: 30,
            "stroke-width": 1,
            stroke: 'red',
            fill : 'blue'
        }, {
            id: 'tb',
            type: 'rect',
            x: 200,
            y: 200,
            width: 30,
            height: 30,
            "stroke-width": 1,
            stroke: 'red',
            fill : 'blue'
        }, {
            id: 'c',
            type: 'rect',
            x: 60,
            y: 60,
            width: 140,
            height: 140,
            "stroke-width": 1,
            stroke: 'red',
            fill : 'blue'
        }
    ];
    var defaults = {
        xtype: 'draw',
        padding: 2,
        background: {
            fill: 'black'
        },
        items : items
    };
    
    function createTestPanel (override, name) {
        Ext.getBody().createChild({tag: 'h2', html: name || 'Test'});
        
        Ext.getBody().createChild({tag: 'h3', html: 'Inside out'});
        var renderTo = Ext.getBody().createChild({}),
            ctDefaults = { shrinkWrap: 3, xtype: 'container', margin: 1, style : 'background: white; overflow: hidden' };
        Ext.widget('container', {
            layout: 'hbox',
            renderTo: renderTo,
            style: 'background: #EEE',
            padding: 1,
            items: [
                Ext.apply({ items: Ext.apply({ }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ width: 150 }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ height: 150 }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ width: 150, height: 150 }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ width: 200, height: 150 }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ width: 150, height: 200 }, defaults, override) }, ctDefaults)
            ]
        });
        
        Ext.getBody().createChild({tag: 'h3', html: 'Outside in'});
        var renderTo = Ext.getBody().createChild({}),
            ctDefaults = { xtype: 'container', margin: 1, style : 'background: white; overflow: hidden', width: 150, height: 150 };
        Ext.widget('container', {
            layout: 'hbox',
            renderTo: renderTo,
            style: 'background: #EEE',
            padding: 1,
            items: [
                Ext.apply({ items: Ext.apply({ shrinkWrap: 2, style: 'width: 50%' }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ shrinkWrap: 1, style: 'height: 30%' }, defaults, override) }, ctDefaults),
                Ext.apply({ items: Ext.apply({ shrinkWrap: 0, style: 'width: 50%; height: 30%' }, defaults, override) }, ctDefaults),
                  Ext.apply({ items: Ext.apply({ shrinkWrap: 0, style: 'width: 30%; height: 50%' }, defaults, override) }, ctDefaults)
            ]
        });
    }
    
    createTestPanel({}, 'autoSize off, viewBox on');
    
    createTestPanel({
        autoSize: true,
        viewBox: false
    }, 'autoSize on, viewBox off');
    
    createTestPanel({
        autoSize: false,
        viewBox: false
    }, 'autoSize off, viewBox off');
});