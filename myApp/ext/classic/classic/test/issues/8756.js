Ext.require('*');

Ext.onReady(function() {

    Ext.create('Ext.tree.Panel', {
        renderTo: document.body,
        tbar: [{
            text: 'Parent 4 removeAll',
            handler: function() {
                var store = this.up('treepanel').getStore();
                store.getById('p4').removeAll();
            }
        }, {
            text: 'Parent 2 removeAll',
            handler: function() {
                var store = this.up('treepanel').getStore();
                store.getById('p2').removeAll();
            }
        }, {
            text: 'Parent 3.remove',
            handler: function(){
                var store = this.up('treepanel').getStore();
                store.getById('p3').remove();
            }
        }, {
            text: 'Parent 2.remove',
            handler: function(){
                var store = this.up('treepanel').getStore();
                store.getById('p2').remove();
            }
        }],
        store: Ext.create('Ext.data.TreeStore', {
            root: {
                text: 'Ext JS',
                id: 'root',
                expanded: true,
                children: [{
                    text: 'parent',
                    id: 'p1',
                    expanded: true,
                    children: [{
                        text: 'Parent 4',
                        id: 'p4',
                        expanded: true,
                        children: [{
                            text: 'Parent 3',
                            id: 'p3',
                            expanded: true,
                            children: [{
                                text: 'Parent 2',
                                id: 'p2',
                                expanded: true,
                                children: [{
                                    leaf: true,
                                    text: 'child 1',
                                    id: 'p2c1'
                                }, {
                                    leaf: true,
                                    text: 'child 2',
                                    id: 'p2c2'
                                }]
                            }]
                        }]
                    }, {
                        text: 'Parent 5',
                        id: 'p5',
                        expanded: true,
                        children: [{
                            leaf: true,
                            text: 'child 1',
                            id: 'p4c1'
                        }, {
                            leaf: true,
                            text: 'child 2',
                            id: 'p4c2'
                        }]
                    }]
                }]
            },
            folderSort: true,
            sorters: [{
                property: 'text',
                direction: 'ASC'
            }]
        }),
        title: 'Tree Edge case Tester',
        useArrows: true
    })

});
