var data1 = [];
for (var i = 0; i < 20; i++) {
    data1.push([i]);
}


function mkgrid(){
    return Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.ArrayStore', {
            fields: [{
                name: 'X'
            }],
            data: data1
        }),
        columns: [{
            text: 'X',
            dataIndex: 'X',
            flex: 1
        }],
        height: 150,
        width: 150
    });
}


var grid1 = mkgrid();

Ext.application({
    launch: function(){
        grid1.render(document.body);
        mkgrid().render(document.body);
    }
});
