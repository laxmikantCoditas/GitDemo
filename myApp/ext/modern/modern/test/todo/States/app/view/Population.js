Ext.define("StatesMVC.view.Population", {
    extend: 'Ext.chart.CartesianChart',
    config: {
        animate: true,
        shadow: false,
        showInLegend: false,
        store: "BarStore",
        axes: [
            {
                type: 'Category',
                position: 'bottom',
                title: 'Population Distribution',
                fields: 'name',
                label: {
                    renderer: function (v) {
                        return v;
                    },
                    field: 'name',
                    font: '7px Arial'
                }
            },
            {
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['population'],
                label: {
                    renderer: function (v) {
                        if (!(v % 1e6)) {
                            return Math.round(v / 1e6) + 'M';
                        }
                        return v;
                    },
                    font: '6px Arial'
                }
            }
        ],
        series: [
            {
                type: 'column',
                xField: 'name',
                yField: 'population',
                axis: 'left',
                label: {
                    field: 'name',
                    font: '5px Arial'
                },
                renderer: function (sprite, storeItem, attr) {
                    var chart = this.getChart(),
                        minVal = chart.getMin(),
                        maxVal = chart.getMax(),
                        val = storeItem.get('population'),
                        ratio = (val - minVal) / (maxVal - minVal),
                        from = chart.getFrom(),
                        to = chart.getTo();
                    attr.fill = Ext.draw.Color.create(
                        Math.round((to.r - from.r) * ratio + from.r),
                        Math.round((to.g - from.g) * ratio + from.g),
                        Math.round((to.b - from.b) * ratio + from.b)
                    );
                    return attr;
                }
            }
        ],
        min: 563626,
        max: 37253956,
        from: [49, 130, 189],
        to: [222, 235, 247]
    },
    applyFrom: function (from) {
        return new Ext.draw.Color(from[0], from[1], from[2]);
    },
    applyTo: function (to) {
        return new Ext.draw.Color(to[0], to[1], to[2]);
    }
});