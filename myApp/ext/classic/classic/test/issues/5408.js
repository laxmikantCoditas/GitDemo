Ext.require('*');
Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();


    Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
        showDelay: 2000      // Show 2000ms after entering target
    });


    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true, qtip: 'AAAAAAAAAAAA' },
                { text: "homework", expanded: true, qtip: 'BBBBBBBBBBBB', children: [
                    { text: "book report", leaf: true, qtip: 'CCCCCCCCC' },
                    { text: "alegrbra", leaf: true, qtip: 'DDDDDDDDDDD'}
                ] },
                { text: "buy lottery tickets", leaf: true, qtip: 'EEEEEEEEEEE' }
            ]
        }
    });


    Ext.create('Ext.window.Window', {
        layout: 'fit',
        width: 600,
        height: 600,
        items: [
            Ext.create('Ext.tree.Panel', {
                region: 'west',
                title: 'Simple Tree',
                store: store,
                rootVisible: false
            })
        ],
        renderTo: Ext.getBody()
    }).show();


});