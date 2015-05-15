Ext.require([
    'Ext.tree.Panel'
]);

Ext.onReady(function () {
    Ext.create('Ext.tree.Panel', {
            renderTo: Ext.getBody(),
            rootVisible: false,
            width: 320,
            height: 320,
            root: {
                    expanded: true,
                    children: [{
                            text: 'Parent 1',
                            leaf: false,
                            children: [{
                                    text: 'Node 1',
                                    leaf: true
                            },{
                                    text: 'Node 2',
                                    leaf: true
                            },{
                                    text: 'Node 3',
                                    leaf: true
                            },{
                                    text: 'Node 4',
                                    leaf: true
                            },{
                                    text: 'Node 5',
                                    leaf: true
                            },{
                                    text: 'Node 6',
                                    leaf: true
                            },{
                                    text: 'Node 7',
                                    leaf: true
                            },{
                                    text: 'Node 8',
                                    leaf: true
                            },{
                                    text: 'Node 9',
                                    leaf: true
                            },{
                                    text: 'Node 10',
                                    leaf: true
                            },{
                                    text: 'Node 11',
                                    leaf: true
                            },{
                                    text: 'Node 12',
                                    leaf: true
                            },{
                                    text: 'Node 13',
                                    leaf: true
                            },{
                                    text: 'Node 14',
                                    leaf: true
                            },{
                                    text: 'Node 15',
                                    leaf: true
                            },{
                                    text: 'Node 16',
                                    leaf: true
                            },{
                                    text: 'Node 17',
                                    leaf: true
                            },{
                                    text: 'Remove me to un-break it',
                                    leaf: true
                            }]
                    },{
                            text: 'Parent 2',
                            leaf: false,
                            children: [{
                                    text: 'Node 1',
                                    leaf: true
                            }]
                    },{
                            text: 'Parent 3',
                            leaf: false,
                            children: [{
                                    text: 'Node 1',
                                    leaf: true
                            }]
                    },{
                            text: 'Parent 4',
                            leaf: false,
                            children: [{
                                    text: 'Node 1',
                                    leaf: true
                            }]
                    },{
                            text: 'Node 1',
                            leaf: true
                    },{
                            text: 'Node 2',
                            leaf: true
                    },{
                            text: 'Node 3',
                            leaf: true
                    },{
                            text: 'Node 4',
                            leaf: true
                    },{
                            text: 'Node 5',
                            leaf: true
                    },{
                            text: 'Node 6',
                            leaf: true
                    },{
                            text: 'Node 7',
                            leaf: true
                    },{
                            text: 'Node 8',
                            leaf: true
                    },{
                            text: 'Node 9',
                            leaf: true
                    },{
                            text: 'Node 10',
                            leaf: true
                    },{
                            text: 'Node 11',
                            leaf: true
                    },{
                            text: 'Node 12',
                            leaf: true
                    },{
                            text: 'Remove me to un-break it',
                            leaf: true
                    }]
            }
    });
});
