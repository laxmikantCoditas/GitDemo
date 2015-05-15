Ext.require('*');

Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
        data: [
            { 'name': 'One', 'Data1': 10, 'Data2': 12, 'Data3': 14, 'Data4': 8, 'Data5': 13 },
            { 'name': 'Two', 'Data1': 7, 'Data2': 8, 'Data3': 16, 'Data4': 10, 'Data5': 6 },
            { 'name': 'Three', 'Data1': 5, 'Data2': 9, 'Data3': 14, 'Data4': 20, 'Data5': 7 },
            { 'name': 'Four', 'Data1': 8, 'Data2': 14, 'Data3': 6, 'Data4': 9, 'Data5': 23 },
            { 'name': 'Five', 'Data1': 27, 'Data2': 18, 'Data3': 26, 'Data4': 13, 'Data5': 20 }
        ]
    });
    
        var storePie = Ext.create('Ext.data.JsonStore', {
        fields: ['namePie', 'dataPie'],
        data: [{
            'namePie': 'One',
            'dataPie': 10
        }, {
            'namePie': 'Two',
            'dataPie': 7
        }, {
            'namePie': 'Three',
            'dataPie': 5
        }, {
            'namePie': 'Four',
            'dataPie': 6
        }, {
            'namePie': 'Five',
            'dataPie': 8
        }]
    });

    var isRTL = true; //Suppose some external parameter

    var columnChart = Ext.create('Ext.chart.Chart', {
        xtype: 'chart',
        width: 500,
        height: 350,
        animate: true,
        store: store,
        theme: 'Base:gradients',
        legend: true,
        showInLegend: true,
       rtl: isRTL,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
                label: Ext.util.Format.numberRenderer('0'),
                title: '\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u063a\u0631\u0628\u064a\u0629',
                grid: true,
                //minimum: 0,
                maximum: 40
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '\u0635\u0650\u0641 \u062E\u064E\u0644\u0642\u064E \u062E\u064E\u0648\u062F\u0650'
            }
        ],
        series: [
            {
                type: 'column',
                axis: 'left',
                highlight: true,
                rtl: isRTL,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function (storeItem, item) {
                        this.setTitle(item.value[0] + ': $ ' + item.value[1]);
                    }

                },
                label: {
                    display: 'insideEnd',
                    field: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    contrast: true
                },
                xField: 'name',
                yField: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5']
            }

        ]
    });

    var barChart = Ext.create('Ext.chart.Chart', {
        xtype: 'chart',
        width: 500,
        height: 350,
        animate: true,
        store: store,
        theme: 'Base:gradients',
        legend: true,
        showInLegend: true,
        rtl: isRTL,
        axes: [
            {
                type: 'Numeric',
                position: 'bottom',
                fields: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
                label: Ext.util.Format.numberRenderer('0'),
                title: '\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u063a\u0631\u0628\u064a\u0629',
                grid: true,
                minimum: 0
            },
            {
                type: 'Category',
                position: 'left',
                fields: ['name'],
                title: '\u0635\u0650\u0641 \u062E\u064E\u0644\u0642\u064E \u062E\u064E\u0648\u062F\u0650'
            }
        ],
        series: [
            {
                type: 'bar',
                axis: 'left',
                highlight: true,
                rtl: isRTL,
                stacked:true,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function (storeItem, item) {
                        this.setTitle(item.value[0] + ': $ ' + item.value[1]);
                    }
                },
                label: {
                    display: 'insideEnd',
                    'text-anchor': 'middle',
                    field: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    contrast: true
                },
                xField: 'name',
                yField: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5']
            }

        ]
    });
    
    var pieChart = Ext.create('Ext.chart.Chart', {
        width: 500,
        height: 350,
        animate: true,
        store: storePie,
        theme: 'Base:gradients',
        legend: true,
        rtl: isRTL,
        series: [{
            type: 'pie',
            angleField: 'dataPie',
            showInLegend: true,
            rtl: isRTL,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                    // calculate and display percentage on hover
                    /*var total = 0;
                    storePie.each(function(rec) {
                        total += rec.get('dataPie');
                    });
                    this.setTitle(storeItem.get('namePie') + ': ' + storeItem.get('dataPie') + ' ('+ Math.round(storeItem.get('dataPie') / total * 100) + '%)');
                    */
                }
            },
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'namePie',
                display: 'rotate',
                contrast: true,
                font: '18px Arial'
            }
        }]
    });

    Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'hbox'
        },
        rtl: isRTL,
        items: [columnChart,barChart,pieChart]
    });
});                                                      
