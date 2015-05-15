Ext.require('Ext.chart.*');
Ext.require('Ext.layout.container.Fit');

Ext.onReady(function () { 
    var pieModel = [
        {
            name: 'data1',
            data: 10
        },
        {
            name: 'data2',
            data: 10
        },
        {
            name: 'data3',
            data: 10
        },
        {
            name: 'data4',
            data: 10
        },
        {
            name: 'data5',
            data: 10
        }
    ];
    var gridStore = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: pieModel
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        store: gridStore,
        autoHeight: true,
        //height: 130,
        width: 400,
        columns: [
            {
                text   : 'name',
                dataIndex: 'name',
                width: 200
            },
            {
                text   : 'data',
                dataIndex: 'data',
                width: 200
            }
        ]
    });
    
    var panel1 = Ext.create('widget.panel', {
        width: 800,
        height: 400,
        title: 'Line Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'chart',
            animate: true,
            shadow: true,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                title: false,
                grid: true
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: false
            }],
            series: [{
                type: 'line',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['data1'],
                tips: {
                    trackMouse: false,
                    width: 400,
                    height: 170,
                    layout: 'fit',
                    items: {
                        xtype: 'container',
                        layout: 'fit',
                        items: [grid]
                    },
                    renderer: function(klass, item) {
                        var storeItem = item.storeItem,
                            data = [{
                                name: 'data1',
                                data: storeItem.get('data1')
                            }, {
                                name: 'data2',
                                data: storeItem.get('data2')
                            }, {
                                name: 'data3',
                                data: storeItem.get('data3')
                            }, {
                                name: 'data4',
                                data: storeItem.get('data4')
                            }, {
                                name: 'data5',
                                data: storeItem.get('data5')
                            }], i, l, html;
                        //grid.setSize(400, 170);
                    }
                }
            }]
        }]
    });
});