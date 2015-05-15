Ext.define('EditorApp.view.GradientPanel', {
    extend: 'Ext.Panel',
    xtype: 'gradPanel',
    require: ['EditorApp.picker.ColorPicker'],
    config: {
        target: null,
        modal: true,
        width: 333,
        height: 380,
        ui: 'dark',
        hideOnMaskTap: true,
        layout: 'fit'
    },
    pureColorPanel: null,
    constructor: function (config) {
        var me = this, hsvPicker;
        me.callParent(arguments);
        var hsvPicker = new EditorApp.picker.HSVPicker({
            currentComponent: 'h'
        });
        var rgbPicker = new EditorApp.picker.RGBPicker();
        me.rgbPicker = rgbPicker;
        me.hsvPicker = hsvPicker;
        rgbPicker.on('change', function (value) {
            hsvPicker.setValue(value);
        });
        hsvPicker.on('change', function (value) {
            rgbPicker.setValue(value);
        });
        var pureColorPanel = new Ext.Panel({
            title: 'Pure color',
            ui: 'light',
            layout: {
                type: 'card',
                animation: false
            },
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    layout: {
                        pack: 'center'
                    },
                    ui: 'light',
                    items: [
                        {
                            xtype: 'segmentedbutton',
                            items: [
                                {
                                    pressed: true,
                                    text: 'RGB',
                                    handler: function () {
                                        pureColorPanel.setActiveItem(0);
                                    }
                                },
                                {
                                    text: 'HUE',
                                    handler: function () {
                                        pureColorPanel.setActiveItem(1);
                                        hsvPicker.setCurrentComponent('h');
                                    }
                                },
                                {
                                    text: 'SAT',
                                    handler: function () {
                                        pureColorPanel.setActiveItem(1);
                                        hsvPicker.setCurrentComponent('s');
                                    }
                                },
                                {
                                    text: 'VAL',
                                    handler: function () {
                                        pureColorPanel.setActiveItem(1);
                                        hsvPicker.setCurrentComponent('v');
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'spacer',
                            width: 20
                        },
                        {
                            xtype: 'segmentedbutton',
                            allowDepress: false,
                            items: [
                                {
                                    text: '√',
                                    handler: function () {
                                        me.hide();
                                    }
                                },
                                {
                                    text: 'X',
                                    handler: function () {
                                        me.hide();
                                    }
                                }
                            ]
                        }
                    ]
                },
                rgbPicker,
                hsvPicker
            ]
        });
        me.pureColorPanel = pureColorPanel;
        var gradientEditor = new EditorApp.pickers.GradientPicker();
        me.gradientEditor = gradientEditor;
        var tabpanel = me.tabpanel = new Ext.tab.Panel({
            tabBar: {
                docked: 'top',
                layout: {
                    pack: 'center'
                }
            },
            items: [
                pureColorPanel,
                {
                    xtype: 'nestedlist',
                    title: 'Gradient',
                    layout: 'fit',
                    ui: 'light',
                    toolbar: {
                        docked: 'bottom'
                    },
                    items: [
                        gradientEditor
                    ]
                }
            ]
        });
        me.add(tabpanel);
    },

    applyTarget: function (entity) {
        var me = this,
            targetSurface = entity.getEditor().getSurface(),
            matches = /url\(#(.*)\)/.match(entity.fill),
            id;
        if (matches && matches.length) {
            id = matches[1];
            me.tabpanel.setActiveItem(0);
            me.gradientEditor.set
            return {
                type: 'gradient',
                entity: entity,
                gradient: targetSurface._gradients[id]
            }
        } else {
            me.tabpanel.setActiveItem(1);
            return {
                type: 'color',
                entity: entity,
                color: entity.fill
            }
        }
    }
});