Ext.require('Ext.picker.Color');
Ext.onReady(function() {
    
    var sm = Ext.create('Ext.selection.CheckboxModel');
    
    var grid = Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 200,
        renderTo: document.body,
        selModel: sm, 
        store: {
            fields: ['a', 'b'],
            data: [{
                a: 1,
                b: 2
            }, {
                a: 3,
                b: 4
            }, {
                a: 5,
                b: 6
            }]
        },
        columns: [{
            dataIndex: 'a',
            header: 'A'
        }]    
    });
    
    setTimeout(function(){
        grid.reconfigure(null, [{
            dataIndex: 'b',
            header: 'B'
        }]);
    }, 2000);
});