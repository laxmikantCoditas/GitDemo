Ext.define('Thing', {
    extend: 'Ext.data.Model',
    fields: ['text']    
});

Ext.onReady(function(){
    
    var children = [],
        i,
        j,
        k;
        
    for (i = 1; i <= 5; ++i) {
        children[i - 1] = {
            text: 'Node ' + i,
            id: 'node' + i,
            expanded: true,
            children: []    
        };
        for (j = 1; j <= 5; ++j) {
            children[i - 1].children[j - 1] = {
                text: 'Node ' + i + '.' + j,
                id: 'node' + i + '_' + j,
                expanded: true,
                children: []    
            };
            for (k = 1; k <= 5; ++k) {
                children[i - 1].children[j - 1].children[k - 1] = {
                    text: 'Node ' + i + '.' + j + '.' + k,
                    id: 'node' + i + '_' + j + '_' + k,
                    leaf: true
                };
            }
        }
    }
    
    var store = Ext.create('Ext.data.TreeStore', {
        model: 'Thing',
        root: {
            id: 'root',
            text: 'A root',
            expanded: true,
            children: children
        }    
    });
    
    Ext.create('Ext.tree.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        store: store,
        tbar: [{
            text: 'Remove all',
            handler: function(){
                store.getRootNode().removeAll();
                console.log(store.tree.flatten());
            }
        }]
    });
});
