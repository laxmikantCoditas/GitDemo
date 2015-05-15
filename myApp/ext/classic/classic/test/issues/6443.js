Ext.onReady(function() {

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "expandable", expanded: false, expandable: true, children: [
                    { text: "leaf 1", leaf: true },
                    { text: "leaf 2", leaf: true}
                ] },
                { text: "non-expandable (double click me)", expanded: false, expandable: false, children: [
                    { text: "leaf 1", leaf: true },
                    { text: "leaf 2", leaf: true}
                ] }
            ]
        }
    });

    Ext.create('Ext.tree.Panel', {
        title: 'Simple Tree',
        width: 200,
        height: 150,
        store: store,
        rootVisible: false,
        renderTo: Ext.getBody()
    });

});
