var view = {
    xtype: 'panel',

    width : 450,
    height: 350,

    title : 'BorderLayout Panel',
    layout: 'border',

    defaults: { collapsible: true, split: true },
    items: [
        { height: 70, margins: '5 5 0 5', region: 'north', title: 'North', html: 'North', ctitle: 'North' },
        { height: 70, margins: '0 5 5 5', region: 'south', title: 'South', html: 'South', collapseMode: 'mini' },
        { width: 100, margins: '0 5 0 0', region: 'east',  title: 'East',  html: 'East', },
        { width: 100, margins: '0 0 0 5', region: 'west',  title: 'West',  html: 'West', collapseMode: 'mini' },
        { title: 'Center', region: 'center', html: 'Center', collapsible: false }
    ]
};

Ext.require('*',function(){
    
    Ext.widget('panel', Ext.Object.merge({
        renderTo: Ext.getBody(),
        listeners: { afterrender: afterrender }
    }, view));
    
});

////////////////////////////////////////////////////////////////////////////////

var testEvents = [];

var time = 0;

Ext.Array.forEach([/*1015, 1016, 1017,*/ 1018], function(id){
    
    testEvents = testEvents.concat([
        { type: "mduclick", ts: time         ,target: "#panel-" + id + " .x-tool > *", x: 6, y: 10, button: 0 },
        { type: "mduclick", ts: time += 1000 ,target: "#panel-" + id + " + .x-splitter > *", x: 3, y: 15, button: 0 },
        { type: "mduclick", ts: time         ,target: "#panel-" + id + " + .x-splitter > *", x: 3, y: 15, button: 0 },
        { type: "mouseup",  ts: time += 100  ,target: "#panel-1014-embedded-center", x: 3, y: 79, button: 0 }
    ]);
    
    time += 1000;
});

////////////////////////////////////////////////////////////////////////////////

Ext.Loader.setPath({
    'Ext.ux': '../../examples/ux'
});

function afterrender(){
    Ext.require('Ext.ux.event.Player', function(){
        player = Ext.create('Ext.ux.event.Player', {
            attachTo: window,
            eventQueue: testEvents
        });
        player.pauseForAnimations = false;
        player.start();
    });
}


