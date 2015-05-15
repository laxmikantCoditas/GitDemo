Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    motorStore = Ext.create('Ext.data.ArrayStore', {
        fields: [
            { name: 'deltaTime', type: 'float' },
            { name: 'curEvt1', type: 'float' }
        ],
        data: decData,
        autoload: true
    });

    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        maximizable: true,
        title: 'Line Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [
            {
                text: 'Decimal Data',
                handler: function () {
                    motorStore.loadData(decData);
                }
            },
            {
                text: 'Integer Data',
                handler: function () {
                    motorStore.loadData(intData);
                }
            },
            {
                text: 'Random Data',
                handler: function () {
                    motorStore.loadData(ranData);
                }
            },
            {
                text: 'Random Data 1',
                handler: function () {
                    motorStore.loadData(ranData1);
                }
            },
            {
                text: 'Random Data 2',
                handler: function () {
                    motorStore.loadData(ranData2);
                }
            },
            {
                text: 'Random Data 3',
                handler: function () {
                    motorStore.loadData(ranData3);
                }
            },
            {
                text: 'Random Data 4',
                handler: function () {
                    motorStore.loadData(ranData4);
                }
            }
        ],
        items: {
            xtype: 'chart',
            theme: 'Category4',
            shadow: false,
            id: 'motorChart',
            store: motorStore,
            axes: [
                {
                    type: 'Numeric',
                    position: 'bottom',
                    title: 'Time',
                    grid: true,
                    fields: ['deltaTime'],
                    decimals: 6,
                    label: { // only changes label
                        renderer: Ext.util.Format.numberRenderer('0.00'),
                        font: '10px Arial'
                    }

                },
                {
                    type: 'Numeric',
                    position: 'right',
                    title: 'right',
                    fields: ['curEvt1'],
                    label: { // only changes label
                        renderer: Ext.util.Format.numberRenderer('0.00'),
                        font: '10px Arial'
                    }
                }
            ],
            series: [
                {
                    type: 'line',
                    displayName: 'current',
                    axis: 'right',
                    yField: 'curEvt1',
                    xField: 'deltaTime',
                    title: 'current',
                    showInLegend: true,
                    smooth: 3,
                    label: {
                        display: true,
                        field: 'deltaTime'
                    }
                }
            ],

            legend: {
                position: 'bottom'
            }
        }
    });
});