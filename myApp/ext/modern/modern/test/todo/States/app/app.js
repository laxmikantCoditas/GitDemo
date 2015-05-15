Ext.application({
    name: 'StatesMVC',
    tabletStartupScreen: 'tablet_startup.jpg',
    phoneStartupScreen: 'phone_startup.jpg',
    requires: [
        'Ext.Ajax',
        'Ext.draw.Component',
        'Ext.chart.Panel',
        'Ext.chart.series.Column',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],
    stores: [
        'PieStore',
        'PyramidStore',
        'BarStore',
        'GeoStore'
    ],
    controllers: [
        'Main'
    ],
    views: [
        'Population',
        'Gender',
        'Main',
        'USMap',
        'Pyramid',
        'Race'
    ],
    
    launch: function () {
        StatesMVC.colorMap = {};
        Ext.Viewport.add(Ext.create("StatesMVC.view.Main", {title: '2010 Census Data'}));

        var me = this;
        Ext.Ajax.request({
            url: 'app/data/states_data.json',
            success: function (response) {
                StatesMVC.statesData = JSON.parse(response.responseText);
                var statesData = StatesMVC.statesData,
                    prop,
                    barChartData = [];

                for (prop in statesData) {
                    barChartData.push({
                        name: prop,
                        population: +statesData[prop].POP100
                    });
                }

                barChartData.sort(function (b, a) {
                    var aname = a.name,
                        bname = b.name;

                    if (bname > aname) {
                        return 1;
                    } else if (bname < aname) {
                        return -1;
                    }

                    return 0;
                });

                Ext.getStore("BarStore").setData(barChartData);
                me.transitionData();
                Ext.ComponentQuery.query('usmap')[0].selectElement();
            },
            failure: function () {
                console.log('something went wrong');
            }
        });
    },
    
    transitionData: function () {
        var i = 0,
            store = Ext.getStore("GeoStore"),
            data = StatesMVC.statesData,
            l = data.length,
            items = {},
            min = Number.MAX_VALUE,
            max = Number.MIN_VALUE,
            value, colorArray, p, id,
            color = {
                from: [49, 130, 189],
                to: [222, 235, 247]
            }, colorMap = {};

        store.getData().each(function (record) {
            items[record.get('id')] = record;
            record.beginEdit();
        });

        for (id in data) {
            value = +data[id].POP100;
            min = min < value ? min : value;
            max = max > value ? max : value;
        }

        for (id in data) {
            value = +data[id].POP100;
            colorArray = [
                ((value - min) / (max - min) * (color.to[0] - color.from[0]) + color.from[0]) >> 0,
                ((value - min) / (max - min) * (color.to[1] - color.from[1]) + color.from[1]) >> 0,
                ((value - min) / (max - min) * (color.to[2] - color.from[2]) + color.from[2]) >> 0
            ];
            if (items[id]) {
                items[id].set('fill', colorMap[id] = 'rgb(' + colorArray.join() + ')');
                items[id].commit();
            }
        }
        StatesMVC.colorMap = colorMap;
    }
});