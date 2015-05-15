Ext.require(['Ext.tree.Panel']);

Ext.onReady(function() {
    
    var items = [],
        i = 0;
        
    for (; i < 20; ++i) {
        items.push({
            text: 'Node',
            leaf: true
        });
    }

    new Ext.tree.Panel({
        width: 200,
        animate: false,
        renderTo: document.body,
        root: {
            text: 'Foo',
            children: items
        }
    });
    new Ext.Component({
        renderTo: document.body,
        html: 'Foo'
    });
    
}); 