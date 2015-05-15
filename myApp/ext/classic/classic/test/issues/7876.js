        Ext.onReady(function(){
            var store = Ext.create('Ext.data.JsonStore', {
                fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
                data: [
                    { 'name': 'metric one',   'data1': 10, 'data2': 12, 'data3': 11 },
                    { 'name': 'metric two',   'data1': 7,  'data2': 8,  'data3': 6 },
                    { 'name': 'metric three', 'data1': 5,  'data2': 2,  'data3': 1 },
                    { 'name': 'metric four',  'data1': 2,  'data2': -2, 'data3': 7 },
                    { 'name': 'metric five',  'data1': 4,  'data2': 8,  'data3': 5 }
                ]
            });



            Ext.create('Ext.chart.Chart', {
                renderTo: Ext.getBody(),
                width: 500,
                height: 300,
                animate: true,
                store: store,
                axes: [
                    {
                        type: 'Numeric',
                        position: 'left',
                        fields: ['data1', 'data2'],
                        label: {
                            renderer: Ext.util.Format.numberRenderer('0,0')
                        },
                        title: 'Sample Values (red < 0)',
                        grid: false,
                        minimum: -4,
                        maximum: 16,
                        majorTickSteps: 9

                    },
                    {
                        type: 'Category',
                        position: 'bottom',
                        fields: ['name'],
                        title: 'Sample Metrics'
                    }
                ],
                series: [
                    {
                        type: 'line',
                        highlight: {
                            size: 8,
                            radius: 8
                        },
                        axis: 'left',
                        fill: true,
                        xField: 'name',
                        yField: 'data2',
                        markerConfig: {
                            type: 'circle',
                            radius: 6
                        },
                        renderer: function(sprite,record,attributes,index,store) {
                            if (sprite.type == this.markerConfig.type) {
                                attributes.fill = (record.data[this.yField] < 0 ? 'red' : 'lightgreen');
                            }
                            return attributes;
                        }
                    }
                ]
            });


            Ext.create('Ext.chart.Chart', {
                renderTo: Ext.getBody(),
                width: 500,
                height: 300,
                animate: true,
                store: store,
                axes: [{
                    type: 'Radial',
                    position: 'radial',
                    label: {
                        display: true
                    }
                }],
                series: [{
                    type: 'radar',
                    xField: 'name',
                    yField: 'data1',
                    showInLegend: true,
                    showMarkers: true,
                    markerConfig: {
                        type: 'cross',
                        radius: 5,
                        size: 5
                    },
                    style: {
                        'stroke-width': 2,
                        fill: 'none'
                    },
                    renderer: function(sprite,record,attributes,index,store) {
                        attributes.fill = (record.data[this.yField] < 5 ? 'red' : 'lightgreen');
                        return attributes;
                    }
                    
                }]
            });



            Ext.create('Ext.chart.Chart', {
                renderTo: Ext.getBody(),
                width: 500,
                height: 300,
                animate: true,
                theme:'Category2',
                store: store,
                axes: [{
                    type: 'Numeric',
                    position: 'left',
                    fields: ['data2', 'data3'],
                    title: 'Sample Values (red < 6)',
                    grid: true,
                    minimum: 0
                }, {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['name'],
                    title: 'Sample Metrics'
                }],
                series: [{
                    type: 'scatter',
                    markerConfig: {
                        type: 'cross',
                        radius: 5
                    },
                    axis: 'left',
                    xField: 'name',
                    yField: 'data3',
                    renderer: function(sprite,record,attributes,index,store) {
                        attributes.fill = (record.data[this.yField] < 6 ? 'red' : 'lightgreen');
                        return attributes;
                    }
                }]
            });




        });