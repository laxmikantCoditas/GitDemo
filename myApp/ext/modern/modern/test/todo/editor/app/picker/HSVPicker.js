Ext.define('EditorApp.picker.HSVPicker', {
    extend: 'Ext.draw.Component',
    alias: 'widget.hsvpicker',
    config: {
        currentComponent: 'h', // h, s, b
        reference: '#F00'
    },

    capture: false,

    h: 0,
    s: 1,
    v: 1, // red

    applyReference: function (ref) {
        return Ext.draw.Color.fromString(ref.toString());
    },

    updateReference: function (ref) {
        var me = this;
        if (me.getSurface()) {

        }
    },

    applyCurrentComponent: function (type) {
        type = type.toLowerCase();
        switch (type) {
            case 'h' :
            case 's' :
            case 'v' :
                return type;
                break;
        }
    },

    updateCurrentComponent: function (type) {
        var me = this;
        if (me.getSurface()) {
            me.resetComponent();
        }
    },

    resetComponent: function () {
        var me = this, type = me.getCurrentComponent();
        switch (type) {
            case 'h':
                me.getSurface()._gradients['saturation'].setDegrees(90);
                me.getSurface()._gradients['black-mask'].setDegrees(90);
                me.getSurface()._gradients['white-mask'].setDegrees(0);
                me.colorBlock.setAttributes({
                    fill: me.fromHSV(me.h, 1, me.v).toString()
                });
                me.middleMask.setAttributes({
                    opacity: 1,
                    fill: 'url(#white-mask)'
                });
                me.topMask.setAttributes({
                    opacity: 1,
                    fill: 'url(#black-mask)'
                });
                me.grad.setAttributes({
                    fill: 'url(#saturation)'
                });
                break;
            case 's':
                me.getSurface()._gradients['saturation'].setDegrees(0);
                me.getSurface()._gradients['linear-mask'].setDegrees(90);
                me.getSurface()._gradients['black-mask'].setDegrees(90);
                me.getSurface()._gradients['white-mask'].setDegrees(90);
                me.colorBlock.setAttributes({
                    fill: 'url(#saturation)'
                });
                me.middleMask.setAttributes({
                    opacity: 1,
                    fill: 'white'
                });
                me.topMask.setAttributes({
                    opacity: 1,
                    fill: 'url(#black-mask)'
                });
                me.grad.setAttributes({
                    fill: 'url(#linear-mask)'
                });
                break;
            case 'v':
                me.getSurface()._gradients['saturation'].setDegrees(0);
                me.getSurface()._gradients['linear-mask'].setDegrees(90);
                me.getSurface()._gradients['black-mask'].setDegrees(0);
                me.getSurface()._gradients['white-mask'].setDegrees(-90);
                me.colorBlock.setAttributes({
                    fill: 'url(#saturation)'
                });
                me.middleMask.setAttributes({
                    opacity: 1,
                    fill: 'url(#white-mask)'
                });
                me.topMask.setAttributes({
                    opacity: 1 - me.s,
                    fill: 'black'
                });
                me.grad.setAttributes({
                    fill: 'url(#linear-mask)'
                });
        }
        me.updateHSV(me.h, me.s, me.v, true);
    },

    constructor: function () {
        var me = this;
        me.callParent(arguments);
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.getSurface().addGradient({
            id: 'saturation',
            degrees: 90,
            stops: {
                0: {
                    color: '#F00'
                },
                16: {
                    color: '#FF0'
                },
                33: {
                    color: '#0F0'
                },
                50: {
                    color: '#0FF'
                },
                66: {
                    color: '#00F'
                },
                83: {
                    color: '#F0F'
                },
                100: {
                    color: '#F00'
                }
            }
        });

        me.getSurface().addGradient({
            id: 'black-mask',
            degrees: 0,
            stops: {
                0: {
                    color: '#000',
                    opacity: 0
                },
                100: {
                    color: '#000'
                }
            }
        });

        me.getSurface().addGradient({
            id: 'white-mask',
            degrees: 0,
            stops: {
                0: {
                    color: '#fff'
                },
                100: {
                    color: '#fff',
                    opacity: 0
                }
            }
        });

        me.getSurface().addGradient({
            id: 'linear-mask',
            degrees: 0,
            stops: {
                0: {
                    color: '#F00'
                },
                100: {
                    color: '#FFF'
                }
            }
        });
        var gradLeft = 284,
            gradWidth = 25,
            paddingTop = 10;
        var items = me.getSurface().add([
            {
                id: 'colorBlock',
                type: 'rect',
                x: 10,
                y: 10,
                width: 256,
                height: 256,
                zIndex: 0
            },
            {
                id: 'middleMask',
                type: 'rect',
                x: 10,
                y: 10,
                width: 256,
                height: 256,
                zIndex: 1,
                opacity: 0
            },
            {
                id: 'topMask',
                type: 'rect',
                x: 9.5,
                y: 9.5,
                width: 256,
                height: 256,
                zIndex: 2
            },
            {
                id: 'blockFrame',
                type: 'rect',
                x: 9.5,
                y: 9.5,
                width: 256,
                height: 256,
                zIndex: 2,
                "stroke-width": 1,
                stroke: 'black'
            },
            {
                id: 'grad',
                type: 'rect',
                x: gradLeft - 0.5,
                y: paddingTop - 0.5,
                width: gradWidth,
                height: 256,
                zIndex: 2,
                "stroke-width": 1,
                stroke: 'black'
            },
            {
                id: 'blockHandler0',
                type: "path",
                translate: {
                    x: 0,
                    y: 0
                },
                path: [
                    'M', 9.5, 15,
                    'A', 5.5, 5.5, 0, 1, 1, 9.5, 4,
                    'A', 5.5, 5.5, 0, 0, 1, 9.5, 15
                ],
                "stroke-width": 1,
                zIndex: 5,
                stroke: 'black'
            },
            {
                id: 'blockHandler1',
                type: "path",
                translate: {
                    x: 0,
                    y: 0
                },
                path: [
                    'M', 9.5, 14,
                    'A', 4.5, 4.5, 0, 1, 1, 9.5, 5,
                    'A', 4.5, 4.5, 0, 0, 1, 9.5, 14
                ],
                "stroke-width": 1.5,
                zIndex: 4,
                stroke: 'white'
            },
            {
                id: 'gradHandlers',
                type: "path",
                translate: {
                    x: 0,
                    y: 0
                },
                path: [
                    'M',
                    gradLeft - 0.5, paddingTop - 0.5,
                    gradLeft + 4 - 0.5, paddingTop - 4 - 0.5,
                    gradLeft + gradWidth - 4 - 0.5, paddingTop - 4 - 0.5,
                    gradLeft + gradWidth - 0.5, paddingTop - 0.5,
                    gradLeft + gradWidth - 4 - 0.5, paddingTop + 4 - 0.5,
                    gradLeft + 4 - 0.5, paddingTop + 4 - 0.5,
                    , 'z'
                ],
                zIndex: 5,
                fill: 'white',
                stroke: 'black',
                "stroke-width": 1,
                "shadowColor": 'black',
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "shadowBlur": 3
            }
        ]);
        me.colorBlock = items[0];
        me.middleMask = items[1];
        me.topMask = items[2];
        me.grad = items[4];
        me.blockHandlers = [items[5], items[6]];
        me.gradHandlers = [items[7]];
        me.on('touchstart', me.onTouchStart);
        me.on('touchend', me.onTouchEnd);
        me.on('touchmove', me.onTouchMove);
        me.resetComponent();
    },

    getEventXY: function (e) {
        e = (e.changedTouches && e.changedTouches[0]) || e.event || e.browserEvent || e;
        var me = this, xy = me.element.getXY();
        return [e.pageX - xy[0], e.pageY - xy[1]];
    },

    onTouchMove: function (e) {
        this.onTouchStart(e);
    },

    onTouchEnd: function (e) {
        this.capture = false;
        this.fireEvent('change', this.getValue());
    },

    getHSV: function (color) {
        color = [color.r / 255, color.g / 255, color.b / 255];
        var sorted = color.slice(0).sort(),
            m = sorted[0],
            x = sorted[1] - m,
            c = sorted[2] - m,
            v = m + c,
            s = c / v,
            color0 = [color[0] - m, color[1] - m, color[2] - m],
            r = 1 - x / c;
        if (x == c && c == m) {
            return [this.h, 0, m];
        }
        if (color0[2] == 0) {
            if (color0[0] <= color0[1]) {
                return [(1 + r) * 60, s, v];
            } else {
                return [(1 - r) * 60, s, v];
            }
        } else if (color0[0] == 0) {
            if (color0[1] <= color0[2]) {
                return [(3 + r) * 60, s, v];
            } else {
                return [(3 - r) * 60, s, v];
            }
        } else {
            if (color0[2] <= color0[0]) {
                return [(5 + r) * 60, s, v];
            } else {
                return [(5 - r) * 60, s, v];
            }
        }
    },

    fromHSV: function (h, s, v) {
        var color = [], c = s * v, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = v - c;
        h /= 60;
        switch (Math.floor(h)) {
            case 0:
                color = [c, x, 0];
                break;
            case 1:
                color = [x, c, 0];
                break;
            case 2:
                color = [0, c, x];
                break;
            case 3:
                color = [0, x, c];
                break;
            case 4:
                color = [x, 0, c];
                break;
            default:
                color = [c, 0, x];
        }
        return new Ext.draw.Color((color[0] + m) * 255, (color[1] + m) * 255, (color[2] + m) * 255);
    },

    updateHSV: function (h, s, v, force) {
        var me = this, value, valueString;
        if (!force && h === me.h && s == me.s && v == me.v) {
            return;
        }
        value = me.fromHSV(h, s, v);
        valueString = value.toString();
        me.h = h;
        me.s = s;
        me.v = v;

        switch (me.getCurrentComponent()) {
            case 'h':
                me.colorBlock.setAttributes({
                    fill: me.fromHSV(me.h, 1, 1).toString()
                });

                me.blockHandlers[0].setAttributes({
                    translate: {
                        x: s * 256,
                        y: (1 - v) * 255
                    }
                });

                me.blockHandlers[1].setAttributes({
                    fill: valueString,
                    translate: {
                        x: s * 256,
                        y: (1 - v) * 255
                    }
                });

                me.gradHandlers[0].setAttributes({
                    fill: valueString,
                    translate: {
                        x: 0,
                        y: h / 359 * 255
                    }
                });
                break;
            case 's':
                me.getSurface()._gradients["linear-mask"]._stops[0].color = me.fromHSV(me.h, 1, me.v);
                me.getSurface()._gradients["linear-mask"]._stops[1].color = me.fromHSV(me.h, 0, me.v);
                me.blockHandlers[0].setAttributes({
                    translate: {
                        x: h / 359 * 255,
                        y: (1 - v) * 255
                    }
                });

                me.blockHandlers[1].setAttributes({
                    fill: valueString,
                    translate: {
                        x: h / 359 * 255,
                        y: (1 - v) * 255
                    }
                });

                me.gradHandlers[0].setAttributes({
                    fill: valueString,
                    translate: {
                        x: 0,
                        y: (1 - s) * 255
                    }
                });
                me.middleMask.setAttributes({
                    opacity: 1 - s
                });
                break;
            case 'v':
                me.getSurface()._gradients["linear-mask"]._stops[0].color = me.fromHSV(me.h, me.s, 1);
                me.getSurface()._gradients["linear-mask"]._stops[1].color = me.fromHSV(me.h, me.s, 0);
                me.blockHandlers[0].setAttributes({
                    translate: {
                        x: h / 359 * 255,
                        y: (1 - s) * 255
                    }
                });

                me.blockHandlers[1].setAttributes({
                    fill: valueString,
                    translate: {
                        x: h / 359 * 255,
                        y: (1 - s) * 255
                    }
                });

                me.gradHandlers[0].setAttributes({
                    fill: valueString,
                    translate: {
                        x: 0,
                        y: (1 - v) * 255
                    }
                });
                
                me.topMask.setAttributes({
                    opacity: 1 - v
                });
                break;
        }
        me.fireEvent('hsvchanged', h, s, v);
        me.renderFrame();
    },

    setValue: function (value) {
        value = Ext.draw.Color.fromString(value.toString());
        var me = this,
            hsv = me.getHSV(value);
        me.updateHSV(hsv[0], hsv[1], hsv[2]);
    },

    getValue: function () {
        var me = this;
        return me.fromHSV(me.h, me.s, me.v);
    },

    onTouchStart: function (e) {
        var me = this,
            xy = me.getEventXY(e);
        if (me.capture === 'block' || me.capture === false && 0 <= xy[0] && xy[0] < 273 && 0 <= xy[1] && xy[1] < 276) {
            me.capture = 'block';
            xy[0] = Math.min(255, Math.max(0, xy[0] - 10));
            xy[1] = Math.min(255, Math.max(0, xy[1] - 10));
            switch (me.getCurrentComponent()) {
                case 'h':
                    me.updateHSV(me.h, xy[0] / 255, 1 - xy[1] / 255);
                    break;
                case 's':
                    me.updateHSV(xy[0] / 255 * 359, me.s, 1 - xy[1] / 255);
                    break;
                case 'v':
                    me.updateHSV(xy[0] / 255 * 359, 1 - xy[1] / 255, me.v);
                    break;
            }

        } else if (me.capture === 'grad' || me.capture === false && 273 <= xy[0] && xy[0] < 340 && 0 <= xy[1] && xy[1] < 276) {
            me.capture = 'grad';
            var y = Math.min(255, Math.max(0, xy[1] - 10));
            switch (me.getCurrentComponent()) {
                case 'h':
                    me.updateHSV(y / 255 * 360, me.s, me.v);
                    break;
                case 's':
                    me.updateHSV(me.h, 1 - y / 255, me.v);
                    break;
                case 'v':
                    me.updateHSV(me.h, me.s, 1 - y / 255);
                    break;
            }
        } else {
            me.capture = 'nothing';
        }
    },

    onResize: function () {
        this.callParent();
        this.getSurface().dirt();
        this.renderFrame();
    }
});