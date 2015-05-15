Ext.require('*');
Ext.onReady(function () {
    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "algebra", leaf: true}
                ] },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });
     
    var newStore = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "algebra", leaf: true}
                ] },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });
     
    var tree = Ext.create('Ext.tree.Panel', {
        title: 'Simple Tree',
        tbar:[{
            text:'Click me',
            handler: function(){
                tree.reconfigure(newStore, [{header:'Col 1', dataIndex:'detention' }])
            }
        }],
        columns:[
            {header:'Col 1', dataIndex:'text'},
            {header:'Col 2', dataIndex:'text' }
        ],
        width: 200,
        height: 150,
        store: store,
        rootVisible: false,
        renderTo: Ext.getBody()
    });
});
