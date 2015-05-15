Ext.define('ChartView', {
    requires: 'Ext.chart.*',
    extend: 'Ext.Panel',
    xtype: 'line-basic',
    width: 650,
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    initComponent: function() {
        var me = this,
            regularData = [
                { month: 'Jan', data1: 20 },
                { month: 'Feb', data1: 20 },
                { month: 'Mar', data1: 19 },
                { month: 'Apr', data1: 18 },
                { month: 'May', data1: 18 },
                { month: 'Jun', data1: 17 },
                { month: 'Jul', data1: 16 },
                { month: 'Aug', data1: 16 },
                { month: 'Sep', data1: 16 },
                { month: 'Oct', data1: 16 },
                { month: 'Nov', data1: 15 },
                { month: 'Dec', data1: 15 }
            ],
            gapsData = [
                { month: 'Jan', data1: 18 },
                { month: 'Feb', data1: 20 },
                { month: 'Mar', data1: 16 },
                { month: 'Apr', data1: NaN },
                { month: 'May', data1: 15 },
                { month: 'Jun', data1: 17 },
                { month: 'Jul', data1: 20 },
                { month: 'Aug', data1: -16 },
                { month: 'Sep', data1: -13 },
                { month: 'Oct', data1: -NaN },
                { month: 'Nov', data1: -15 },
                { month: 'Dec', data1: -18 }
            ],
            bigData = [
                { month: 'Jan', data1: 35184372088876 },
                { month: 'Feb', data1: 35184372088826 },
                { month: 'Mar', data1: 35184372088836 },
                { month: 'Apr', data1: 35184372088856 },
                { month: 'May', data1: 35184372088826 },
                { month: 'Jun', data1: 35184372088846 },
                { month: 'Jul', data1: 35184372088886 },
                { month: 'Aug', data1: 35184372088896 },
                { month: 'Sep', data1: 35184372088856 },
                { month: 'Oct', data1: 35184372088866 },
                { month: 'Nov', data1: 35184372088826 },
                { month: 'Dec', data1: 35184372088846 }
            ];

        me.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1' ],
            data: regularData
        });

        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            layout: 'column',
            defaults: {
                margin: '0 0 10 10'
            },
            items: [
                '->',
                {
                    xtype: 'segmentedbutton',
                    itemId: 'dataToggle',
                    width: 250,
                    items: [
                        {
                            text: 'Regular',
                            pressed: true
                        },
                        {
                            text: 'Gaps'
                        },
                        {
                            text: 'Big data'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                axes = chart.getAxes(),
                                leftAxis = axes[0],
                                bottomAxis = axes[1],
                                value = segmentedButton.getValue();

                            if (!chart) return;

                            switch (value) {
                                case 0:
                                    me.myDataStore.setData(regularData);
                                    leftAxis.setMinimum(0);
                                    leftAxis.setMaximum(30);
                                    bottomAxis.setFloating(null);
                                    break;
                                case 1:
                                    me.myDataStore.setData(gapsData);
                                    leftAxis.setMinimum(-30);
                                    leftAxis.setMaximum(30);
                                    bottomAxis.setFloating({
                                        value: 0,
                                        alongAxis: 0
                                    });
                                    break;
                                case 2:
                                    me.myDataStore.setData(bigData);
                                    leftAxis.setMinimum(35184372088800);
                                    leftAxis.setMaximum(NaN);
                                    bottomAxis.setFloating(null);
                                    break;
                            }
                            chart.performLayout();
                        }
                    }
                },
                {
                    xtype: 'segmentedbutton',
                    width: 170,
                    items: [
                        {
                            text: 'No renderer',
                            pressed: true
                        },
                        {
                            text: 'Renderer'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                series = chart.getSeries()[0],
                                value = segmentedButton.getValue();

                            if (!chart) return;

                            if (value === 0) {
                                series.setRenderer();
                            } else {
                                series.setRenderer(function (a, b, c, d) {
                                    return {
                                        fillStyle: d % 2 === 1 ? 'red' : 'green',
                                        strokeStyle: d % 2 === 0 ? 'yellow' : 'black'
                                    };
                                });
                            }
                        }
                    }
                },
                {
                    xtype: 'segmentedbutton',
                    width: 170,
                    items: [
                        {
                            text: 'Normal',
                            pressed: true
                        },
                        {
                            text: 'Flipped'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                dataToggle = me.down('#dataToggle'),
                                config = chart.initialConfig,
                                view = chart.ownerCt,
                                value = segmentedButton.getValue(),
                                axesMap = {
                                    left: 'bottom',
                                    bottom: 'left',
                                    top: 'right',
                                    right: 'top'
                                },
                                i, axis, axes, item, items;

                            if (!chart) return;

                            chart.destroy();
                            me.myDataStore.setData(regularData);
                            dataToggle.setValue(0);
                            config.flipXY = value === 1;
                            axes = config.axes;
                            for (i = 0; i < axes.length; i++) {
                                axis = axes[i];
                                axis.position = axesMap[axis.position];
                            }

                            view.add(config);
                        }
                    }
                },
                {
                    xtype: 'segmentedbutton',
                    width: 250,
                    items: [
                        {
                            text: 'Straight',
                            pressed: true
                        },
                        {
                            text: 'Step'
                        },
                        {
                            text: 'Smooth'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                series = chart.getSeries()[0],
                                value = segmentedButton.getValue();

                            if (!chart) return;

                            switch (value) {
                                case 0:
                                    series.setSmooth(false);
                                    series.setStep(false);
                                    break;
                                case 1:
                                    series.setSmooth(false);
                                    series.setStep(true);
                                    break;
                                case 2:
                                    series.setStep(false);
                                    series.setSmooth(true);
                                    break;
                            }
                            chart.redraw();
                        }
                    }
                },
                {
                    xtype: 'segmentedbutton',
                    width: 170,
                    items: [
                        {
                            text: 'Fill',
                            pressed: true
                        },
                        {
                            text: 'No fill'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                series = chart.getSeries()[0],
                                value = segmentedButton.getValue();

                            if (!chart) return;

                            series.setFill(value === 0);
                            chart.redraw();
                        }
                    }
                },
                {
                    xtype: 'segmentedbutton',
                    width: 170,
                    items: [
                        {
                            text: 'Bottom-Left',
                            pressed: true
                        },
                        {
                            text: 'Top-Right'
                        }
                    ],
                    listeners: {
                        toggle: function (segmentedButton, button, pressed) {
                            var chart = me.down('cartesian'),
                                toolbar = me.down('toolbar'),
                                config = chart.initialConfig,
                                view = chart.ownerCt,
                                value = segmentedButton.getValue(),
                                axesMap = {
                                    left: 'right',
                                    bottom: 'top',
                                    top: 'bottom',
                                    right: 'left'
                                },
                                i, axis, axes;

                            if (!chart) return;

                            chart.destroy();
                            axes = config.axes;
                            for (i = 0; i < axes.length; i++) {
                                axis = axes[i];
                                axis.position = axesMap[axis.position];
                            }

                            view.add(config);
                        }
                    }
                }
            ]
        }];

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 500,
            interactions: {
                type: 'panzoom',
                zoomOnPanGesture: true
            },
            store: this.myDataStore,
            insetPadding: 20,
            innerPadding: {
                top: 20,
                bottom: 40,
                left: 20,
                right: 40
            },
            axes: [{
                type: 'numeric',
                fields: 'data1',
                position: 'left',
                grid: true,
                minimum: 0,
                maximum: 30
            }, {
                type: 'category',
                fields: 'month',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                xField: 'month',
                yField: 'data1',
                style: {
                    lineWidth: 4
                },
                fill: true,
                marker: {
                    radius: 4
                },
                label: {
                    field: 'data1',
                    display: 'over'
                },
                highlight: {
                    fillStyle: '#000',
                    radius: 5,
                    lineWidth: 2,
                    strokeStyle: '#fff'
                },
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('month') + ': ' + storeItem.get('data1') + '%');
                    }
                }
            }]
        }];

        me.callParent();
    }
});

Ext.onReady(function () {
    var view = Ext.create('ChartView', {
        renderTo: Ext.getBody()
    });
});
