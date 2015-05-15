Ext.require([
 'Ext.data.*',
 'Ext.grid.*'
]);

Ext.onReady(function() {
    Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.Store', {
            fields: [
               {name: 'company'},
               {name: 'price', type: 'float'}
            ],   
            data: [
              ['3m Co',71.72],
              ['Alcoa Inc',29.01],
              ['Altria Group Inc', 12.02],
              ['American Express Company', 52.55]
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            }
        }),
        columns: [
            {id:'company',text: 'Company', width: 200, dataIndex: 'company'},
            {text: 'Price', width: 200, dataIndex: 'price'}
        ],
        height: 200,
        width: 400,
        title: 'Framed Grid',
        frame: true,
        renderTo: Ext.getBody()
    });
});