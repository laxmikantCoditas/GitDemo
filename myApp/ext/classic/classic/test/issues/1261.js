Ext.define('Model1', {
    extend: 'Ext.data.Model',
    fields: ['name', 'age']
});

Ext.define('Model2', {
    extend: 'Ext.data.Model',
    fields: ['foo', 'bar']
});

Ext.onReady(function(){

    var grid = Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 400,
        renderTo: document.body,
        store: {
            proxy: 'memory',
            model: 'Model1',
            data: [{
                name: 'a',
                age: 1
            }, {
                name: 'b',
                age: 2
            }, {
                name: 'c',
                age: 3
            }]
        },
        columns: [{
            width: 100,
            dataIndex: 'name',
            text: 'Name',
            locked: true
        }, {
            dataIndex: 'age',
            text: 'Age',
            flex: 1
        }]
    });
    
    setTimeout(function(){
        grid.reconfigure({
            proxy: 'memory',
            model: 'Model2',
            data: [{
                foo: 'x1',
                bar: 'y1'
            }, {
                foo: 'x2',
                bar: 'y2'
            }, {
                foo: 'x3',
                bar: 'y3'
            }]
        }, [{
            width: 200,
            text: 'Foo',
            dataIndex: 'foo',
            locked: true
        }, {
            text: 'Bar',
            dataIndex: 'bar',
            flex: 1
        }]);
    }, 1000);
    
    
});
