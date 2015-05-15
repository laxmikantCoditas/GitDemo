Ext.require('*');
Ext.onReady(function() {
    var layoutRunCount = 0;
    Ext.layout.Context.prototype.run = Ext.Function.createInterceptor(Ext.layout.Context.prototype.run, function() {
        layoutRunCount++;
    });
    Ext.create('Ext.view.View', {
        tpl: '<tpl for="."><div>{field}</div></tpl>',
        itemSelector: 'div',
        deferInitialRefresh: false,
        store: {
            type: 'array',
            fields: ['field'],
            data: [
                ['datum']
            ]
        },
        renderTo: document.body,
        width: 100,
        style: 'border: 1px solid black'
    });
    Ext.Msg.alert('Layout runs SHOULD be 1', 'Layout run count: ' + layoutRunCount);
});

