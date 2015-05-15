Ext.onReady(function() {
    var drawComponent = Ext.create('Ext.draw.Component', {
        viewBox: false,
        items: [{
            type: "text",
            text: "Initial Text",
            fill: "green",
            font: "18px monospace",
            x: 150,
            y: 100,
            listeners:{
                'click': function(e, t, eOpts){
                    e.setText('Text after clicking');
                }
            }
        }]
    });

    Ext.create('Ext.Window', {
        width: 500,
        height: 300,
        layout: 'fit',
        items: [drawComponent]
    }).show();
});
