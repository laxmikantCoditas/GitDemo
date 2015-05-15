var data = [
    ['Record 0', 0, -9],
    ['Record 1', 1, -8],
    ['Record 2', 2, -7],
    ['Record 3', 3, -6],
    ['Record 4', 4, -5],
    ['Record 5', 5, -4],
    ['Record 6', 6, -3],
    ['Record 7', 7, -2],
    ['Record 8', 8, -1],
    ['Record 9', 9, -0]
];

var store = Ext.create('Ext.data.ArrayStore', {
    data: data,
    fields: [
       {name: 'name'},
       {name: 'column1', type: 'float'},
       {name: 'column2', type: 'float'}
    ]
});

var columns = [
    { text: 'Name', width:100, dataIndex: 'name' },
    { text: 'Col1', width:100, dataIndex: 'column1' },
    { text: 'Col2', width:100, dataIndex: 'column2' }
];

var config = [
    { xtype:'grid', title:'scroll XY', store: store, height: 100, width: 100, columns: columns },
    { xtype:'grid', title:'scroll X', store: store, height: 200, width: 100, columns: columns },
    { xtype:'grid', title:'scroll Y', store: store, height: 100, width: 200, columns: columns },
    { xtype:'grid', title:'no scrollbars', store: store, height: 200, width: 200, columns: columns }
];


if (Ext.versions.extjs.shortVersion < 406) {
    Ext.Array.forEach(config, function(config){
        config.store = Ext.Object.merge({}, config.store);
    });
}

////////////////////////////////////////////////////////////////////////////////

config = Ext.Array.map(config, function(cmp) {
    var rowConfig = {
        title: cmp.title,
        layout:'hbox',
        items:[]
    };
    
    
    cmp.deferRowRender = true;
    cmp.title = 'deferRowRender ' + rowConfig.title;
    
    rowConfig.items.push({
        margin: 5,
        listeners: { afterrender: cmp.deferRowRender ? test : testWithoutDefer },
        layout: 'accordion',
        width: cmp.width,
        height: cmp.height,
        items: [{}, cmp]
    });
    
    cmp = Ext.Object.merge({}, cmp, {deferRowRender:false});
    cmp.title = 'NO deferRowRender ' + rowConfig.title;
    
    rowConfig.items.push({
        margin: 5,
        listeners: { afterrender: cmp.deferRowRender ? test : testWithoutDefer },
        layout: 'accordion',
        width: cmp.width,
        height: cmp.height,
        items: [cmp, {}]
    });
    
    return rowConfig;
});

function expandTool(){
    fuzzy.clickElement(this.down('tool[type=collapse-top]').toolEl.dom);
}

function test(){
    var me = this;
    setTimeout(function(){
        testPanelWidth.call(me);
        setTimeout(function(){
            expandTool.call(me);
            setTimeout(function(){
                testPanelWidth.call(me);
            },0);
        },0);
    },0);
}

function testWithoutDefer(){
    var me = this;
    setTimeout(function() {
        testPanelWidth.call(me);
    }, 0);
}


var PASSED = [];

function testPanelWidth(){
    var me = this;
    clearTimeout(testPanelWidth._passTimer);
    var panels = me.query('panel');
    var expectedWidth = panels[0].el.getWidth();
    if (panels[1].el.getWidth() != expectedWidth) {
        throw Error('FAIL: Accordion panels must be the same width: ' + panels[1].title +' '+ panels[0].title);
    }
    // make sure that all the FAIL are thrown before logging any PASS
    PASSED.push('PASS: Accordion panels must be the same width: ' + panels[1].title +' '+ panels[0].title);
    testPanelWidth._passTimer = setTimeout(function(){
        for (var i=0; i < PASSED.length; i++) {
            console.log(PASSED[i]);
        }
    },1000);
}


////////////////////////////////////////////////////////////////////////////////

Ext.ns('fuzzy');

fuzzy.clickElement = function(target, xy){
    var event = new Ext.EventObjectImpl({target:target.dom || target, xy:xy});
    event.xy = xy;
    event.type = 'mouseenter';event.injectEvent();
    event.type = 'mouseover';event.injectEvent();
    event.type = 'mousemove';event.injectEvent();
    event.type = 'mousedown';event.injectEvent();
    event.type = 'mouseup';event.injectEvent();
    event.type = 'click';event.injectEvent();
    event.type = 'mouseout';event.injectEvent();
    event.type = 'mouseleave';event.injectEvent();
    
    // console.log('clicked', xy, target);
};
