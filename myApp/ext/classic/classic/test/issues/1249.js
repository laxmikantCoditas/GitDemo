Ext.define('Foo', {
    extend: 'Ext.data.Model',
    fields: ['a', 'b', 'c']    
});

Ext.onReady(function(){
    
    Ext.create('Ext.window.Window', {
        width: 400,
        height: 400,
        autoShow: true,
        layout: 'border',
        items: [{
            region: 'north',
            height: 100,
            html: 'North'
        },{
            region: 'center',
            xtype: 'grid',
            store: {
                model: 'Foo',
                proxy: {
                    type: 'memory'
                },
                data: [{
                    a: 'a1',
                    b: 'b1',
                    c: 'c1'
                }, {
                    a: 'a2',
                    b: 'b2',
                    c: 'c2'
                }, {
                    a: 'a3',
                    b: 'b3',
                    c: 'c3'
                }, {
                    a: 'a4',
                    b: 'b4',
                    c: 'c4'
                }]
            },
            columns: [{
                dataIndex: 'a',
                text: 'Col A'
            },{
                dataIndex: 'b',
                text: 'Col B' 
            },{
                dataIndex: 'c',
                text: 'Col c'
            }]    
        }]
    });
     
});