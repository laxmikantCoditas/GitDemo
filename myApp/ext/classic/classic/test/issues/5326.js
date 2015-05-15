Ext.require('*');
Ext.onReady(function () {
    Ext.define('foo', {
        extend :'Ext.tree.Panel', 
        title: 'Core Team Projects',
        width: 500,
        height: 300,
        animate : false,
        rootVisible: false
    });
    
    Ext.create('foo', {
        root: {
            text: 'Root Node',
            expanded: true,
            children: [{
                text: 'Item 1',
                leaf: true
            }, {
                text: 'Item 2',
                leaf: true
            }, {
                text: 'Folder',
                children: [{
                    text: 'Item 3',
                    leaf: true
                }]
            }]
        },
        renderTo: Ext.getBody()        
    });

});