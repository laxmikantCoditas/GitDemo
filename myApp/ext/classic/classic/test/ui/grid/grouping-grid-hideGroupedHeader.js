Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function() {
    Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.Store', {
            fields: [
               {name: 'company'},
               {name: 'price', type: 'float'}
            ],
            groupField: 'company',
            data: [
              ['3m Co', 71.72],
              ['3m Co', 34.78],
              ['3m Co', 44.75],
              ['Alcoa Inc', 22.22],
              ['Alcoa Inc', 29.01],
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
        features: [{
            hideGroupedHeader: true,
            ftype: 'grouping'
        }],
        columns: [
            {id:'company',text: 'Company', width: 200, dataIndex: 'company'},
            {text: 'Price', width: 200, dataIndex: 'price'}
        ],
        height: 350,
        width: 600,
        title: 'Hidden Grouped Header Grid',
        renderTo: Ext.getBody()
    });
});