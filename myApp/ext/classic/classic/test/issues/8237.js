Ext.onReady(function() {
    var tree = Ext.create('Ext.tree.Panel', {
        autoScroll: true,
            title: 'add node to tree',
           width: 400,
            height: 300,
        root:{     
            text:'root',
            leaf: false,
            expandable: true,
            expanded:true,
            children:[{
                text: 'Node1',
                leaf: false,
                expandable: true
            }]
        },
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: ['->', {
                text: 'Add node',
                handler : function(b) {
                    var root = tree.getRootNode();
                    var node = {
                        text: 'Node2',
                        leaf: false,
                        expandable: true
                    };
                    root.appendChild( node );
                }
            }]
        }],
            renderTo: Ext.getBody()
    });
});
