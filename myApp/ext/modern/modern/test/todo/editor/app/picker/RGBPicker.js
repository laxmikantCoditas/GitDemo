Ext.define('EditorApp.picker.RGBPicker', {
    extend: 'Ext.draw.Component',
    alias: 'widget.rgbpicker',
    config: {
        value: '#F00',
        reference: '#F00'
    },
    statics: {
        anchorLeft: 43,
        marginTop: 14,
        barTop: 1,
        barHeight: 24,
        totalHeight: 46,
        bevel: 3,
        fills: ['R', 'G', 'B', 'A'],
        texts: ['R:', 'G:', 'B:', 'A:']
    },
    capture: false,

    applyValue: function (value) {
        value = Ext.draw.Color.fromString(value.toString());
        return value;
    },

    updateValue: function (value) {
        var me = this;
        if (me.getSurface()) {
            me.refreshUI();
        }
    },

    refreshUI: function () {
        var me = this,
            value = me.getValue(),
            valueString = value.toString(),
            fills = EditorApp.pickers.RGBPicker.fills,
            compI, comp;
        me.rInd.setAttributes({
            fill: valueString,
            translate: {
                x: value.r + 0.5
            }
        });
        me.gInd.setAttributes({
            fill: valueString,
            translate: {
                x: value.g + 0.5
            }
        });

        me.bInd.setAttributes({
            fill: valueString,
            translate: {
                x: value.b + 0.5
            }
        });

        me.aInd.setAttributes({
            fill: valueString,
            translate: {
                x: value.a * 255 + 0.5
            }
        });

        for (var compI in fills) {
            comp = fills[compI];
            me.getSurface()._gradients[comp]._stops[0].color = value.clone();
            me.getSurface()._gradients[comp]._stops[1].color = value.clone();
        }

        for (var compI in fills) {
            comp = fills[compI];

            me.getSurface()._gradients[comp]._stops[0].color[comp.toLowerCase()] = 0;
            if (comp == 'A') {
                me.getSurface()._gradients[comp]._stops[1].color[comp.toLowerCase()] = 1;
            } else {
                me.getSurface()._gradients[comp]._stops[1].color[comp.toLowerCase()] = 255;
            }

        }

        me.renderFrame();
    },

    applyReference: function (ref) {
        return Ext.draw.Color.fromString(ref.toString());
    },

    updateReference: function (ref) {
        var me = this;
        if (me.getSurface()) {

        }
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.getSurface().addGradient({
            type: 'pattern',
            id: 'chessboard',
            src: 'chessboard.png',
            degrees: 0,
            stops: {
                0: {
                    color: '#000'
                },
                100: {
                    color: '#f00'
                }
            }
        });
        me.getSurface().addGradient({
            id: 'R',
            degrees: 0,
            stops: {
                0: {
                    color: '#000'
                },
                100: {
                    color: '#f00'
                }
            }
        });
        me.getSurface().addGradient({
            id: 'G',
            degrees: 0,
            stops: {
                0: {
                    color: '#f00'
                },
                100: {
                    color: '#ff0'
                }
            }
        });
        me.getSurface().addGradient({
            id: 'B',
            degrees: 0,
            stops: {
                0: {
                    color: '#f00'
                },
                100: {
                    color: '#f0f'
                }
            }
        });
        me.getSurface().addGradient({
            id: 'A',
            degrees: 1,
            stops: {
                0: {
                    color: 'rgba(255,0,0,0)'
                },
                100: {
                    color: 'rgba(255,0,0,1)'
                }
            }
        });

        var anchorLeft = EditorApp.pickers.RGBPicker.anchorLeft,
            marginTop = EditorApp.pickers.RGBPicker.marginTop,
            barTop = EditorApp.pickers.RGBPicker.barTop,
            barHeight = EditorApp.pickers.RGBPicker.barHeight,
            totalHeight = EditorApp.pickers.RGBPicker.totalHeight,
            bevel = EditorApp.pickers.RGBPicker.bevel,
            fills = EditorApp.pickers.RGBPicker.fills,
            texts = EditorApp.pickers.RGBPicker.texts,
            bars = [],
            indicators = [];
        for (var i = 0; i < 4; i++) {
            var items = me.getSurface().add([
                {
                    type: 'rect',
                    x: anchorLeft + 0.5,
                    y: i * totalHeight + barTop + marginTop + 0.5,
                    width: 255,
                    height: barHeight,
                    "stroke-width": 1,
                    stroke: 'black',
                    zIndex: 5,
                    fill: 'url(#' + fills[i] + ')'
                },
                {
                    type: 'rect',
                    x: anchorLeft + 0.5,
                    y: i * totalHeight + barTop + marginTop + 0.5,
                    width: 255,
                    height: barHeight,
                    zIndex: 0,
                    fill: 'url(#chessboard)'
                },
                {
                    type: 'path',
                    path: [
                        'M',
                        anchorLeft - bevel, marginTop + i * totalHeight + barTop + bevel,
                        anchorLeft, marginTop + i * totalHeight + barTop,
                        anchorLeft + bevel, marginTop + i * totalHeight + barTop + bevel,
                        anchorLeft + bevel, marginTop + i * totalHeight + barTop + barHeight - bevel,
                        anchorLeft, marginTop + i * totalHeight + barTop + barHeight,
                        anchorLeft - bevel, marginTop + i * totalHeight + barTop + barHeight - bevel,
                        'z'
                    ],
                    fill: 'white',
                    stroke: 'black',
                    "stroke-width": 1,
                    "shadowColor": 'black',
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 3,
                    zIndex: 6
                },
                {
                    type: 'text',
                    text: texts[i],
                    font: "15px Helvetica",
                    "text-anchor": 'right',
                    x: anchorLeft - 10,
                    y: i * totalHeight + (barTop + barHeight) * 0.5 + marginTop,
                    zIndex: 2
                }
            ]);
            bars.push(items[0]);
            indicators.push(items[2]);
        }
        me.rInd = indicators[0];
        me.gInd = indicators[1];
        me.bInd = indicators[2];
        me.aInd = indicators[3];
        me.updateValue();
        me.on('touchstart', me.onTouchStart);
        me.on('touchmove', me.onTouchMove);
        me.on('touchend', me.onTouchEnd);
    },

    getEventXY: function (e) {
        e = (e.changedTouches && e.changedTouches[0]) || e.event || e.browserEvent || e;
        var me = this, xy = me.element.getXY();
        return [e.pageX - xy[0], e.pageY - xy[1]];
    },

    onTouchStart: function (e) {
        var me = this,
            xy = me.getEventXY(e),
            anchorLeft = EditorApp.pickers.RGBPicker.anchorLeft,
            marginTop = EditorApp.pickers.RGBPicker.marginTop,
            barTop = EditorApp.pickers.RGBPicker.barTop,
            barHeight = EditorApp.pickers.RGBPicker.barHeight,
            totalHeight = EditorApp.pickers.RGBPicker.totalHeight,
            bevel = EditorApp.pickers.RGBPicker.bevel,
            fills = EditorApp.pickers.RGBPicker.fills,
            texts = EditorApp.pickers.RGBPicker.texts,
            colorValue = me.getValue();
        if (me.capture || me.capture === false && anchorLeft - 10 <= xy[0] < anchorLeft + 266) {
            if (!me.capture) {
                me.capture = fills[Math.floor((xy[1] - marginTop * 0.5) / totalHeight)];
            }
            if (me.capture) {
                var val = Math.floor(Math.max(0, Math.min(256, xy[0] - anchorLeft)));
                if (val == 256) {
                    val = 255;
                }
                if (me.capture == 'A') {
                    colorValue[me.capture.toLowerCase()] = val / 255;
                } else {
                    colorValue[me.capture.toLowerCase()] = val;
                }
                me.setValue(colorValue);
            }
        }
    },

    onTouchMove: function (e) {
        this.onTouchStart(e);
    },

    onTouchEnd: function (e) {
        this.capture = false;
        this.fireEvent('change', this.getValue());
    }
});