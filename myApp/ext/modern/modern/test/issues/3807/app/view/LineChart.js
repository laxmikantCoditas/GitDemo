Ext.syncRequire('Test.store.LineStore');
Ext.define('Test.view.LineChart', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Toolbar',
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.axis.Category'
    ],
    xtype: 'calinechart',
    config: {
        cls: 'card1',
        layout: 'fit',
        height: '100%',
        width: '100%',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                top: 0,
                right: 0,
                zIndex: 50,
                style: {
                    background: 'none'
                },
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        iconCls: 'refresh',
                        iconMask: true,
                        text: '&nbsp;Reload',
                        handler: function (a, b, c, d, e) {
                            var chart = this.up().up().down('cartesian');
                            Ext.ComponentQuery.query('axis', chart)[0].setVisibleRange([0, 1]);
                            Ext.ComponentQuery.query('axis', chart)[1].setVisibleRange([0, 1]);
                            Ext.getStore('Line').generateData(10);
                        }
                    }
                ]
            },
            {
                xtype: 'cartesian',
                store: Ext.create('Test.store.LineStore'),
                animate: false,
                insetPadding: {
                    left: 25,
                    right: 25,
                    bottom: 25,
                    top: 25
                },
                interactions: [
                    {
                        type: 'panzoom',
                        zoomOnPanGesture: false,
                        axes: {
                            bottom: {
                                maxZoom: 5
                            },
                            left: false
                        }
                    }
                ],
                series: [
                    {
                        type: 'line',
                        xField: 'name',
                        yField: 'g1',
                        style: {
                            smooth: true,
                            stroke: 'rgb(143,203,203)',
                            fill: 'rgba(143,203,203,0.3)',
                            miterLimit: 3,
                            lineCap: 'miter',
                            lineWidth: 2
                        },
                        title: 'Square'
                    },
                    {
                        type: 'line',
                        xField: 'name',
                        yField: 'g2',
                        style: {
                            stroke: 'rgb(143,203,203)',
                            lineWidth: 2
                        },
                        title: 'Circle'
                    },
                    {
                        type: 'line',
                        xField: 'name',
                        yField: 'g3',
                        style: {
                            stroke: 'rgb(143,203,203)',
                            lineWidth: 2
                        },
                        title: 'Polygon'
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        fields: ['g1', 'g2', 'g3'],
                        minimum: 0
                    },
                    {
                        type: 'category',
                        position: 'bottom',
                        maxZoom: 5,
                        fields: 'name'
                    }
                ]
            }
        ]
    },
    initialize: function () {
        this.callParent();
        Ext.getStore('Line').generateData(10);
        var chart = Ext.ComponentQuery.query('chart', this)[0],
            toolbar = Ext.ComponentQuery.query('toolbar', this)[0],
            interaction = Ext.ComponentQuery.query('interaction', this)[0];
        if (toolbar && interaction && !interaction.isMultiTouch()) {
            toolbar.add(interaction.getModeToggleButton());
        }
    }
});