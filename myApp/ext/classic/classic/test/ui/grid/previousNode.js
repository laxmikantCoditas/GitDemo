Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.define('SampleBox', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.samplebox'
});


Ext.onReady(function(){
    var box1 = {
        flex: 1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaultType: 'samplebox',
        items: [{
            width: 20,
            html: 'A1'
        },{
            width: 20,
            html: 'B1'
        },{
            width: 20,
            html: 'C1'
        },{
            width: 20,
            html: 'D1'
        }]
    };
    
    var box2 = {
        flex: 1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaultType: 'samplebox',
        items: [{
            width: 20,
            html: 'A2'
        },{
            width: 20,
            html: 'B2'
        },{
            width: 20,
            html: 'C2'
        },{
            width: 20,
            html: 'D2'
        }]
    };
    
    new Ext.panel.Panel({
        renderTo: Ext.getBody(),
        width: 800,
        height: 400,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [box1, box2]
    });
    
    Ext.getBody().on('click', function(e, t) {
        var boxEl = e.getTarget('.x-box-item');
        if (boxEl.id) {
            var cmp = Ext.getCmp(boxEl.id),
                prevNode = cmp.previousNode('samplebox');
            if (prevNode) {
                console.log(prevNode.body.dom.innerHTML)
            } else {
                console.log('previous node not found');
            }
        }
    }, {delegate: '.x-box-item'});

});
