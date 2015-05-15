var Ext = Ext || { }; Ext.manifest = {
  "paths": {
    "Ext": "classic/classic/src",
    "Ext.AbstractManager": "packages/core/src/AbstractManager.js",
    "Ext.Ajax": "packages/core/src/Ajax.js",
    "Ext.AnimationQueue": "packages/core/src/AnimationQueue.js",
    "Ext.ComponentManager": "packages/core/src/ComponentManager.js",
    "Ext.ComponentQuery": "packages/core/src/ComponentQuery.js",
    "Ext.Evented": "packages/core/src/Evented.js",
    "Ext.Factory": "packages/core/src/mixin/Factoryable.js",
    "Ext.GlobalEvents": "packages/core/src/GlobalEvents.js",
    "Ext.JSON": "packages/core/src/JSON.js",
    "Ext.Mixin": "packages/core/src/class/Mixin.js",
    "Ext.Msg": "classic/classic/src/window/MessageBox.js",
    "Ext.String.format": "packages/core/src/Template.js",
    "Ext.TaskQueue": "packages/core/src/TaskQueue.js",
    "Ext.Template": "packages/core/src/Template.js",
    "Ext.Widget": "packages/core/src/Widget.js",
    "Ext.XTemplate": "packages/core/src/XTemplate.js",
    "Ext.app": "packages/core/src/app",
    "Ext.app.bindinspector": "classic/classic/src/app/bindinspector",
    "Ext.chart": "packages/charts/src/chart",
    "Ext.chart.LegendBase": "packages/charts/classic/src/chart/LegendBase.js",
    "Ext.chart.TipSurface": "packages/charts/classic/src/chart/TipSurface.js",
    "Ext.chart.interactions.ItemInfo": "packages/charts/classic/src/chart/interactions/ItemInfo.js",
    "Ext.chart.overrides": "packages/charts/classic/overrides",
    "Ext.data": "packages/core/src/data",
    "Ext.direct": "packages/core/src/direct",
    "Ext.dom": "packages/core/src/dom",
    "Ext.dom.ButtonElement": "classic/classic/src/dom/ButtonElement.js",
    "Ext.dom.Layer": "classic/classic/src/dom/Layer.js",
    "Ext.draw": "packages/charts/src/draw",
    "Ext.draw.ContainerBase": "packages/charts/classic/src/draw/ContainerBase.js",
    "Ext.draw.SurfaceBase": "packages/charts/classic/src/draw/SurfaceBase.js",
    "Ext.draw.engine.SvgContext.Gradient": "packages/charts/src/draw/engine/SvgContext.js",
    "Ext.event": "packages/core/src/event",
    "Ext.event.publisher.MouseEnterLeave": "classic/classic/src/event/publisher/MouseEnterLeave.js",
    "Ext.fx.Animation": "packages/core/src/fx/Animation.js",
    "Ext.fx.Runner": "packages/core/src/fx/Runner.js",
    "Ext.fx.State": "packages/core/src/fx/State.js",
    "Ext.fx.animation": "packages/core/src/fx/animation",
    "Ext.fx.easing": "packages/core/src/fx/easing",
    "Ext.fx.layout": "packages/core/src/fx/layout",
    "Ext.fx.runner": "packages/core/src/fx/runner",
    "Ext.mixin": "packages/core/src/mixin",
    "Ext.overrides": "classic/classic/overrides",
    "Ext.overrides.util.Positionable": "classic/classic/overrides/Positionable.js",
    "Ext.perf": "packages/core/src/perf",
    "Ext.plugin.Abstract": "packages/core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "packages/core/src/plugin/LazyItems.js",
    "Ext.scroll": "packages/core/src/scroll",
    "Ext.util": "packages/core/src/util",
    "Ext.util.Animate": "classic/classic/src/util/Animate.js",
    "Ext.util.CSS": "classic/classic/src/util/CSS.js",
    "Ext.util.ClickRepeater": "classic/classic/src/util/ClickRepeater.js",
    "Ext.util.ComponentDragger": "classic/classic/src/util/ComponentDragger.js",
    "Ext.util.Cookies": "classic/classic/src/util/Cookies.js",
    "Ext.util.ElementContainer": "classic/classic/src/util/ElementContainer.js",
    "Ext.util.Floating": "classic/classic/src/util/Floating.js",
    "Ext.util.FocusTrap": "classic/classic/src/util/FocusTrap.js",
    "Ext.util.Focusable": "classic/classic/src/util/Focusable.js",
    "Ext.util.FocusableContainer": "classic/classic/src/util/FocusableContainer.js",
    "Ext.util.Format.format": "packages/core/src/Template.js",
    "Ext.util.KeyMap": "classic/classic/src/util/KeyMap.js",
    "Ext.util.KeyNav": "classic/classic/src/util/KeyNav.js",
    "Ext.util.KeyboardInteractive": "classic/classic/src/util/KeyboardInteractive.js",
    "Ext.util.Memento": "classic/classic/src/util/Memento.js",
    "Ext.util.ProtoElement": "classic/classic/src/util/ProtoElement.js",
    "Ext.util.Queue": "classic/classic/src/util/Queue.js",
    "Ext.util.Renderable": "classic/classic/src/util/Renderable.js",
    "Ext.util.StoreHolder": "classic/classic/src/util/StoreHolder.js",
    "Ext.ux.BoxReorderer": "packages/ux/classic/src/BoxReorderer.js",
    "Ext.ux.CellDragDrop": "packages/ux/classic/src/CellDragDrop.js",
    "Ext.ux.DataTip": "packages/ux/classic/src/DataTip.js",
    "Ext.ux.DataView.Animated": "packages/ux/classic/src/DataView/Animated.js",
    "Ext.ux.DataView.DragSelector": "packages/ux/classic/src/DataView/DragSelector.js",
    "Ext.ux.DataView.Draggable": "packages/ux/classic/src/DataView/Draggable.js",
    "Ext.ux.DataView.LabelEditor": "packages/ux/classic/src/DataView/LabelEditor.js",
    "Ext.ux.Explorer": "packages/ux/classic/src/Explorer.js",
    "Ext.ux.FieldReplicator": "packages/ux/classic/src/FieldReplicator.js",
    "Ext.ux.GMapPanel": "packages/ux/classic/src/GMapPanel.js",
    "Ext.ux.GroupTabPanel": "packages/ux/classic/src/GroupTabPanel.js",
    "Ext.ux.GroupTabRenderer": "packages/ux/classic/src/GroupTabRenderer.js",
    "Ext.ux.IFrame": "packages/ux/classic/src/IFrame.js",
    "Ext.ux.LiveSearchGridPanel": "packages/ux/classic/src/LiveSearchGridPanel.js",
    "Ext.ux.PreviewPlugin": "packages/ux/classic/src/PreviewPlugin.js",
    "Ext.ux.ProgressBarPager": "packages/ux/classic/src/ProgressBarPager.js",
    "Ext.ux.RowExpander": "packages/ux/classic/src/RowExpander.js",
    "Ext.ux.SlidingPager": "packages/ux/classic/src/SlidingPager.js",
    "Ext.ux.Spotlight": "packages/ux/classic/src/Spotlight.js",
    "Ext.ux.TabCloseMenu": "packages/ux/classic/src/TabCloseMenu.js",
    "Ext.ux.TabReorderer": "packages/ux/classic/src/TabReorderer.js",
    "Ext.ux.TabScrollerMenu": "packages/ux/classic/src/TabScrollerMenu.js",
    "Ext.ux.ToolbarDroppable": "packages/ux/classic/src/ToolbarDroppable.js",
    "Ext.ux.TreePicker": "packages/ux/classic/src/TreePicker.js",
    "Ext.ux.ajax.DataSimlet": "packages/ux/src/ajax/DataSimlet.js",
    "Ext.ux.ajax.JsonSimlet": "packages/ux/src/ajax/JsonSimlet.js",
    "Ext.ux.ajax.SimManager": "packages/ux/src/ajax/SimManager.js",
    "Ext.ux.ajax.SimXhr": "packages/ux/src/ajax/SimXhr.js",
    "Ext.ux.ajax.Simlet": "packages/ux/src/ajax/Simlet.js",
    "Ext.ux.ajax.XmlSimlet": "packages/ux/src/ajax/XmlSimlet.js",
    "Ext.ux.colorpick.Button": "packages/ux/classic/src/colorpick/Button.js",
    "Ext.ux.colorpick.ButtonController": "packages/ux/classic/src/colorpick/ButtonController.js",
    "Ext.ux.colorpick.ColorMap": "packages/ux/classic/src/colorpick/ColorMap.js",
    "Ext.ux.colorpick.ColorMapController": "packages/ux/classic/src/colorpick/ColorMapController.js",
    "Ext.ux.colorpick.ColorPreview": "packages/ux/classic/src/colorpick/ColorPreview.js",
    "Ext.ux.colorpick.ColorUtils": "packages/ux/classic/src/colorpick/ColorUtils.js",
    "Ext.ux.colorpick.Field": "packages/ux/classic/src/colorpick/Field.js",
    "Ext.ux.colorpick.Selection": "packages/ux/classic/src/colorpick/Selection.js",
    "Ext.ux.colorpick.Selector": "packages/ux/classic/src/colorpick/Selector.js",
    "Ext.ux.colorpick.SelectorController": "packages/ux/classic/src/colorpick/SelectorController.js",
    "Ext.ux.colorpick.SelectorModel": "packages/ux/classic/src/colorpick/SelectorModel.js",
    "Ext.ux.colorpick.Slider": "packages/ux/classic/src/colorpick/Slider.js",
    "Ext.ux.colorpick.SliderAlpha": "packages/ux/classic/src/colorpick/SliderAlpha.js",
    "Ext.ux.colorpick.SliderController": "packages/ux/classic/src/colorpick/SliderController.js",
    "Ext.ux.colorpick.SliderHue": "packages/ux/classic/src/colorpick/SliderHue.js",
    "Ext.ux.colorpick.SliderSaturation": "packages/ux/classic/src/colorpick/SliderSaturation.js",
    "Ext.ux.colorpick.SliderValue": "packages/ux/classic/src/colorpick/SliderValue.js",
    "Ext.ux.dashboard.GoogleRssPart": "packages/ux/classic/src/dashboard/GoogleRssPart.js",
    "Ext.ux.dashboard.GoogleRssView": "packages/ux/classic/src/dashboard/GoogleRssView.js",
    "Ext.ux.data.PagingMemoryProxy": "packages/ux/classic/src/data/PagingMemoryProxy.js",
    "Ext.ux.dd.CellFieldDropZone": "packages/ux/classic/src/dd/CellFieldDropZone.js",
    "Ext.ux.dd.PanelFieldDragZone": "packages/ux/classic/src/dd/PanelFieldDragZone.js",
    "Ext.ux.desktop.App": "packages/ux/classic/src/desktop/App.js",
    "Ext.ux.desktop.Desktop": "packages/ux/classic/src/desktop/Desktop.js",
    "Ext.ux.desktop.Module": "packages/ux/classic/src/desktop/Module.js",
    "Ext.ux.desktop.ShortcutModel": "packages/ux/classic/src/desktop/ShortcutModel.js",
    "Ext.ux.desktop.StartMenu": "packages/ux/classic/src/desktop/StartMenu.js",
    "Ext.ux.desktop.TaskBar": "packages/ux/classic/src/desktop/TaskBar.js",
    "Ext.ux.desktop.TrayClock": "packages/ux/classic/src/desktop/TaskBar.js",
    "Ext.ux.desktop.Video": "packages/ux/classic/src/desktop/Video.js",
    "Ext.ux.desktop.Wallpaper": "packages/ux/classic/src/desktop/Wallpaper.js",
    "Ext.ux.event.Driver": "packages/ux/src/event/Driver.js",
    "Ext.ux.event.Maker": "packages/ux/src/event/Maker.js",
    "Ext.ux.event.Player": "packages/ux/src/event/Player.js",
    "Ext.ux.event.Recorder": "packages/ux/src/event/Recorder.js",
    "Ext.ux.event.RecorderManager": "packages/ux/classic/src/event/RecorderManager.js",
    "Ext.ux.form.ItemSelector": "packages/ux/classic/src/form/ItemSelector.js",
    "Ext.ux.form.MultiSelect": "packages/ux/classic/src/form/MultiSelect.js",
    "Ext.ux.form.SearchField": "packages/ux/classic/src/form/SearchField.js",
    "Ext.ux.google.Api": "packages/ux/src/google/Api.js",
    "Ext.ux.google.Feeds": "packages/ux/src/google/Feeds.js",
    "Ext.ux.grid.SubTable": "packages/ux/classic/src/grid/SubTable.js",
    "Ext.ux.grid.TransformGrid": "packages/ux/classic/src/grid/TransformGrid.js",
    "Ext.ux.rating.Picker": "packages/ux/classic/src/rating/Picker.js",
    "Ext.ux.statusbar.StatusBar": "packages/ux/classic/src/statusbar/StatusBar.js",
    "Ext.ux.statusbar.ValidationStatus": "packages/ux/classic/src/statusbar/ValidationStatus.js"
  },
  "loadOrder": [
    {
      "path": "packages/core/src/class/Mixin.js",
      "requires": [],
      "uses": [],
      "idx": 0
    },
    {
      "path": "packages/core/src/util/DelayedTask.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 1
    },
    {
      "path": "packages/core/src/util/Event.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 2
    },
    {
      "path": "packages/core/src/mixin/Identifiable.js",
      "requires": [],
      "uses": [],
      "idx": 3
    },
    {
      "path": "packages/core/src/mixin/Observable.js",
      "requires": [
        0,
        2,
        3
      ],
      "uses": [
        49
      ],
      "idx": 4
    },
    {
      "path": "packages/core/src/util/HashMap.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 5
    },
    {
      "path": "packages/core/src/AbstractManager.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 6
    },
    {
      "path": "packages/core/src/data/flash/BinaryXhr.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 7
    },
    {
      "path": "packages/core/src/data/Connection.js",
      "requires": [
        4,
        7
      ],
      "uses": [
        47,
        76
      ],
      "idx": 8
    },
    {
      "path": "packages/core/src/Ajax.js",
      "requires": [
        8
      ],
      "uses": [],
      "idx": 9
    },
    {
      "path": "packages/core/src/AnimationQueue.js",
      "requires": [],
      "uses": [],
      "idx": 10
    },
    {
      "path": "packages/core/src/ComponentManager.js",
      "requires": [],
      "uses": [
        27,
        47
      ],
      "idx": 11
    },
    {
      "path": "packages/core/src/util/Operators.js",
      "requires": [],
      "uses": [],
      "idx": 12
    },
    {
      "path": "packages/core/src/util/LruCache.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 13
    },
    {
      "path": "packages/core/src/ComponentQuery.js",
      "requires": [
        11,
        12,
        13
      ],
      "uses": [
        80
      ],
      "idx": 14
    },
    {
      "path": "packages/core/src/Evented.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 15
    },
    {
      "path": "packages/core/src/util/Positionable.js",
      "requires": [
        17
      ],
      "uses": [
        25,
        47
      ],
      "idx": 16
    },
    {
      "path": "classic/classic/overrides/Positionable.js",
      "requires": [],
      "uses": [],
      "idx": 17
    },
    {
      "path": "packages/core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 18
    },
    {
      "path": "packages/core/src/dom/Underlay.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "packages/core/src/dom/Shadow.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 20
    },
    {
      "path": "packages/core/src/dom/Shim.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 21
    },
    {
      "path": "packages/core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        30
      ],
      "idx": 22
    },
    {
      "path": "packages/core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 23
    },
    {
      "path": "packages/core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 24
    },
    {
      "path": "packages/core/src/util/Region.js",
      "requires": [
        24
      ],
      "uses": [],
      "idx": 25
    },
    {
      "path": "packages/core/src/util/Point.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 26
    },
    {
      "path": "packages/core/src/event/Event.js",
      "requires": [
        26,
        28
      ],
      "uses": [],
      "idx": 27
    },
    {
      "path": "classic/classic/overrides/event/Event.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 28
    },
    {
      "path": "classic/classic/src/rtl/event/Event.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 29
    },
    {
      "path": "packages/core/src/event/publisher/Dom.js",
      "requires": [
        23,
        27,
        31
      ],
      "uses": [
        76
      ],
      "idx": 30
    },
    {
      "path": "classic/classic/overrides/event/publisher/Dom.js",
      "requires": [],
      "uses": [],
      "idx": 31
    },
    {
      "path": "packages/core/src/event/publisher/Gesture.js",
      "requires": [
        10,
        26,
        30,
        33
      ],
      "uses": [
        27,
        47,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        278,
        279,
        280
      ],
      "idx": 32
    },
    {
      "path": "classic/classic/overrides/event/publisher/Gesture.js",
      "requires": [],
      "uses": [
        27
      ],
      "idx": 33
    },
    {
      "path": "packages/core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        47
      ],
      "idx": 34
    },
    {
      "path": "packages/core/src/TaskQueue.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 35
    },
    {
      "path": "packages/core/src/util/sizemonitor/Abstract.js",
      "requires": [
        34,
        35
      ],
      "uses": [],
      "idx": 36
    },
    {
      "path": "packages/core/src/util/sizemonitor/Default.js",
      "requires": [
        36
      ],
      "uses": [],
      "idx": 37
    },
    {
      "path": "packages/core/src/util/sizemonitor/Scroll.js",
      "requires": [
        36
      ],
      "uses": [
        35
      ],
      "idx": 38
    },
    {
      "path": "packages/core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        36
      ],
      "uses": [
        35
      ],
      "idx": 39
    },
    {
      "path": "packages/core/src/util/SizeMonitor.js",
      "requires": [
        37,
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "packages/core/src/event/publisher/ElementSize.js",
      "requires": [
        23,
        40
      ],
      "uses": [
        35
      ],
      "idx": 41
    },
    {
      "path": "packages/core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 42
    },
    {
      "path": "packages/core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 43
    },
    {
      "path": "packages/core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 44
    },
    {
      "path": "packages/core/src/util/PaintMonitor.js",
      "requires": [
        43,
        44
      ],
      "uses": [],
      "idx": 45
    },
    {
      "path": "packages/core/src/event/publisher/ElementPaint.js",
      "requires": [
        23,
        35,
        45
      ],
      "uses": [],
      "idx": 46
    },
    {
      "path": "packages/core/src/dom/Element.js",
      "requires": [
        4,
        16,
        20,
        21,
        22,
        30,
        32,
        41,
        46,
        74
      ],
      "uses": [
        23,
        25,
        72,
        73,
        76,
        80,
        92,
        240,
        281,
        291,
        293
      ],
      "idx": 47
    },
    {
      "path": "packages/core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 48
    },
    {
      "path": "packages/core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 49
    },
    {
      "path": "packages/core/src/util/AbstractMixedCollection.js",
      "requires": [
        48,
        49
      ],
      "uses": [],
      "idx": 50
    },
    {
      "path": "packages/core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 51
    },
    {
      "path": "packages/core/src/util/Sortable.js",
      "requires": [
        51
      ],
      "uses": [
        53
      ],
      "idx": 52
    },
    {
      "path": "packages/core/src/util/MixedCollection.js",
      "requires": [
        50,
        52
      ],
      "uses": [],
      "idx": 53
    },
    {
      "path": "packages/core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 54
    },
    {
      "path": "classic/classic/src/fx/target/Target.js",
      "requires": [],
      "uses": [],
      "idx": 55
    },
    {
      "path": "classic/classic/src/fx/target/Element.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 56
    },
    {
      "path": "classic/classic/src/fx/target/ElementCSS.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "classic/classic/src/fx/target/CompositeElement.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 58
    },
    {
      "path": "classic/classic/src/fx/target/CompositeElementCSS.js",
      "requires": [
        57,
        58
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "classic/classic/src/fx/target/Sprite.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 60
    },
    {
      "path": "classic/classic/src/fx/target/CompositeSprite.js",
      "requires": [
        60
      ],
      "uses": [],
      "idx": 61
    },
    {
      "path": "classic/classic/src/fx/target/Component.js",
      "requires": [
        55
      ],
      "uses": [
        76
      ],
      "idx": 62
    },
    {
      "path": "classic/classic/src/fx/Queue.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 63
    },
    {
      "path": "classic/classic/src/fx/Manager.js",
      "requires": [
        53,
        54,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "classic/classic/src/fx/Animator.js",
      "requires": [
        49,
        64
      ],
      "uses": [
        70
      ],
      "idx": 65
    },
    {
      "path": "classic/classic/src/fx/CubicBezier.js",
      "requires": [],
      "uses": [],
      "idx": 66
    },
    {
      "path": "classic/classic/src/fx/Easing.js",
      "requires": [
        66
      ],
      "uses": [],
      "idx": 67
    },
    {
      "path": "classic/classic/src/fx/DrawPath.js",
      "requires": [],
      "uses": [],
      "idx": 68
    },
    {
      "path": "classic/classic/src/fx/PropertyHandler.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 69
    },
    {
      "path": "classic/classic/src/fx/Anim.js",
      "requires": [
        49,
        64,
        65,
        66,
        67,
        69
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "classic/classic/src/util/Animate.js",
      "requires": [
        64,
        70
      ],
      "uses": [],
      "idx": 71
    },
    {
      "path": "packages/core/src/dom/Fly.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "packages/core/src/dom/CompositeElementLite.js",
      "requires": [
        72
      ],
      "uses": [
        47
      ],
      "idx": 73
    },
    {
      "path": "classic/classic/overrides/dom/Element.js",
      "requires": [
        47,
        71,
        73
      ],
      "uses": [
        64,
        65,
        70,
        72,
        80,
        240,
        269,
        334,
        359,
        378,
        380,
        425,
        498
      ],
      "idx": 74
    },
    {
      "path": "classic/classic/src/rtl/dom/Element.js",
      "requires": [
        73
      ],
      "uses": [
        47
      ],
      "idx": 75
    },
    {
      "path": "packages/core/src/GlobalEvents.js",
      "requires": [
        4,
        47,
        77
      ],
      "uses": [],
      "idx": 76
    },
    {
      "path": "classic/classic/overrides/GlobalEvents.js",
      "requires": [],
      "uses": [],
      "idx": 77
    },
    {
      "path": "packages/core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "packages/core/src/util/Format.js",
      "requires": [],
      "uses": [
        80,
        240
      ],
      "idx": 79
    },
    {
      "path": "packages/core/src/Template.js",
      "requires": [
        79
      ],
      "uses": [
        240
      ],
      "idx": 80
    },
    {
      "path": "packages/core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 81
    },
    {
      "path": "packages/core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 82
    },
    {
      "path": "packages/core/src/mixin/ComponentDelegation.js",
      "requires": [
        0,
        4
      ],
      "uses": [
        2
      ],
      "idx": 83
    },
    {
      "path": "packages/core/src/Widget.js",
      "requires": [
        15,
        47,
        81,
        82,
        83,
        85
      ],
      "uses": [
        11,
        14
      ],
      "idx": 84
    },
    {
      "path": "classic/classic/overrides/Widget.js",
      "requires": [],
      "uses": [
        47,
        125,
        350
      ],
      "idx": 85
    },
    {
      "path": "packages/core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 86
    },
    {
      "path": "packages/core/src/util/XTemplateCompiler.js",
      "requires": [
        86
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "packages/core/src/XTemplate.js",
      "requires": [
        80,
        87
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "packages/core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 89
    },
    {
      "path": "packages/core/src/app/domain/Component.js",
      "requires": [
        84,
        89,
        128
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "classic/classic/src/util/ProtoElement.js",
      "requires": [],
      "uses": [
        47,
        240
      ],
      "idx": 91
    },
    {
      "path": "packages/core/src/dom/CompositeElement.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "packages/core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 93
    },
    {
      "path": "packages/core/src/scroll/Scroller.js",
      "requires": [
        15,
        93
      ],
      "uses": [
        76,
        111,
        113
      ],
      "idx": 94
    },
    {
      "path": "classic/classic/src/rtl/scroll/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 95
    },
    {
      "path": "packages/core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 96
    },
    {
      "path": "packages/core/src/fx/easing/Momentum.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "packages/core/src/fx/easing/Bounce.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "packages/core/src/fx/easing/BoundMomentum.js",
      "requires": [
        96,
        97,
        98
      ],
      "uses": [],
      "idx": 99
    },
    {
      "path": "packages/core/src/fx/easing/Linear.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 100
    },
    {
      "path": "packages/core/src/fx/easing/EaseOut.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 101
    },
    {
      "path": "packages/core/src/util/translatable/Abstract.js",
      "requires": [
        15,
        100
      ],
      "uses": [
        10
      ],
      "idx": 102
    },
    {
      "path": "packages/core/src/util/translatable/Dom.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 103
    },
    {
      "path": "packages/core/src/util/translatable/CssTransform.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "packages/core/src/util/translatable/ScrollPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 105
    },
    {
      "path": "packages/core/src/util/translatable/ScrollParent.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 106
    },
    {
      "path": "packages/core/src/util/translatable/CssPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 107
    },
    {
      "path": "packages/core/src/util/Translatable.js",
      "requires": [
        104,
        105,
        106,
        107
      ],
      "uses": [],
      "idx": 108
    },
    {
      "path": "packages/core/src/scroll/Indicator.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "classic/classic/src/rtl/scroll/Indicator.js",
      "requires": [],
      "uses": [],
      "idx": 110
    },
    {
      "path": "packages/core/src/scroll/TouchScroller.js",
      "requires": [
        76,
        94,
        99,
        101,
        108,
        109
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "classic/classic/src/rtl/scroll/TouchScroller.js",
      "requires": [],
      "uses": [],
      "idx": 112
    },
    {
      "path": "packages/core/src/scroll/DomScroller.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 113
    },
    {
      "path": "classic/classic/src/rtl/scroll/DomScroller.js",
      "requires": [],
      "uses": [],
      "idx": 114
    },
    {
      "path": "classic/classic/src/util/Floating.js",
      "requires": [],
      "uses": [
        11,
        76,
        340
      ],
      "idx": 115
    },
    {
      "path": "classic/classic/src/util/ElementContainer.js",
      "requires": [],
      "uses": [],
      "idx": 116
    },
    {
      "path": "classic/classic/src/util/Renderable.js",
      "requires": [
        47
      ],
      "uses": [
        88,
        125,
        240
      ],
      "idx": 117
    },
    {
      "path": "classic/classic/src/rtl/util/Renderable.js",
      "requires": [],
      "uses": [],
      "idx": 118
    },
    {
      "path": "classic/classic/src/state/Provider.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 119
    },
    {
      "path": "classic/classic/src/state/Manager.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "classic/classic/src/state/Stateful.js",
      "requires": [
        120
      ],
      "uses": [
        54
      ],
      "idx": 121
    },
    {
      "path": "classic/classic/src/util/Focusable.js",
      "requires": [
        1
      ],
      "uses": [
        14,
        47,
        125
      ],
      "idx": 122
    },
    {
      "path": "packages/core/src/mixin/Accessible.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 123
    },
    {
      "path": "classic/classic/src/util/KeyboardInteractive.js",
      "requires": [
        0
      ],
      "uses": [
        27
      ],
      "idx": 124
    },
    {
      "path": "classic/classic/src/Component.js",
      "requires": [
        11,
        14,
        16,
        49,
        71,
        76,
        81,
        82,
        83,
        91,
        92,
        94,
        111,
        113,
        115,
        116,
        117,
        121,
        122,
        123,
        124
      ],
      "uses": [
        1,
        17,
        28,
        31,
        33,
        47,
        64,
        74,
        77,
        85,
        88,
        128,
        192,
        205,
        240,
        241,
        323,
        335,
        336,
        337,
        340,
        348,
        350,
        464,
        614,
        626,
        632
      ],
      "idx": 125
    },
    {
      "path": "classic/classic/src/layout/container/border/Region.js",
      "requires": [],
      "uses": [],
      "idx": 126
    },
    {
      "path": "classic/classic/src/rtl/Component.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 127
    },
    {
      "path": "classic/classic/overrides/app/domain/Component.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 128
    },
    {
      "path": "packages/core/src/app/EventBus.js",
      "requires": [
        90
      ],
      "uses": [
        89
      ],
      "idx": 129
    },
    {
      "path": "packages/core/src/app/domain/Global.js",
      "requires": [
        76,
        89
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "packages/core/src/app/BaseController.js",
      "requires": [
        4,
        129,
        130
      ],
      "uses": [
        187,
        188,
        219
      ],
      "idx": 131
    },
    {
      "path": "packages/core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 132
    },
    {
      "path": "packages/core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "packages/core/src/util/Grouper.js",
      "requires": [
        51
      ],
      "uses": [],
      "idx": 134
    },
    {
      "path": "packages/core/src/util/Collection.js",
      "requires": [
        4,
        48,
        51,
        133,
        134
      ],
      "uses": [
        177,
        178,
        179
      ],
      "idx": 135
    },
    {
      "path": "packages/core/src/util/ObjectTemplate.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "packages/core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 137
    },
    {
      "path": "packages/core/src/data/schema/Association.js",
      "requires": [
        137
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "packages/core/src/data/schema/OneToOne.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "packages/core/src/data/schema/ManyToOne.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 140
    },
    {
      "path": "packages/core/src/data/schema/ManyToMany.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "packages/core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 142
    },
    {
      "path": "packages/core/src/data/schema/Namer.js",
      "requires": [
        93,
        142
      ],
      "uses": [],
      "idx": 143
    },
    {
      "path": "packages/core/src/data/schema/Schema.js",
      "requires": [
        93,
        136,
        139,
        140,
        141,
        143
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "packages/core/src/data/AbstractStore.js",
      "requires": [
        4,
        48,
        93,
        135,
        144
      ],
      "uses": [
        183
      ],
      "idx": 145
    },
    {
      "path": "packages/core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 146
    },
    {
      "path": "packages/core/src/data/ErrorCollection.js",
      "requires": [
        53,
        146
      ],
      "uses": [
        155
      ],
      "idx": 147
    },
    {
      "path": "packages/core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 148
    },
    {
      "path": "packages/core/src/data/operation/Create.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 149
    },
    {
      "path": "packages/core/src/data/operation/Destroy.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "packages/core/src/data/operation/Read.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "packages/core/src/data/operation/Update.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 152
    },
    {
      "path": "packages/core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 153
    },
    {
      "path": "packages/core/src/data/validator/Validator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 154
    },
    {
      "path": "packages/core/src/data/field/Field.js",
      "requires": [
        93,
        153,
        154
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "packages/core/src/data/field/Boolean.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "packages/core/src/data/field/Date.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "packages/core/src/data/field/Integer.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 158
    },
    {
      "path": "packages/core/src/data/field/Number.js",
      "requires": [
        158
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "packages/core/src/data/field/String.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "packages/core/src/data/identifier/Generator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 161
    },
    {
      "path": "packages/core/src/data/identifier/Sequential.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 162
    },
    {
      "path": "packages/core/src/data/Model.js",
      "requires": [
        144,
        147,
        148,
        149,
        150,
        151,
        152,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162
      ],
      "uses": [
        93,
        165,
        239
      ],
      "idx": 163
    },
    {
      "path": "packages/core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 164
    },
    {
      "path": "packages/core/src/data/reader/Reader.js",
      "requires": [
        4,
        13,
        88,
        93,
        164
      ],
      "uses": [
        144
      ],
      "idx": 165
    },
    {
      "path": "packages/core/src/data/writer/Writer.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "packages/core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        93,
        144,
        165,
        166
      ],
      "uses": [
        148,
        149,
        150,
        151,
        152,
        163,
        198
      ],
      "idx": 167
    },
    {
      "path": "packages/core/src/data/proxy/Client.js",
      "requires": [
        167
      ],
      "uses": [],
      "idx": 168
    },
    {
      "path": "packages/core/src/data/proxy/Memory.js",
      "requires": [
        168
      ],
      "uses": [
        48,
        52
      ],
      "idx": 169
    },
    {
      "path": "packages/core/src/data/ProxyStore.js",
      "requires": [
        145,
        148,
        149,
        150,
        151,
        152,
        163,
        167,
        169
      ],
      "uses": [
        1,
        144
      ],
      "idx": 170
    },
    {
      "path": "packages/core/src/data/LocalStore.js",
      "requires": [
        0
      ],
      "uses": [
        135
      ],
      "idx": 171
    },
    {
      "path": "packages/core/src/data/proxy/Server.js",
      "requires": [
        167
      ],
      "uses": [
        80,
        236
      ],
      "idx": 172
    },
    {
      "path": "packages/core/src/data/proxy/Ajax.js",
      "requires": [
        9,
        172
      ],
      "uses": [],
      "idx": 173
    },
    {
      "path": "packages/core/src/data/reader/Json.js",
      "requires": [
        78,
        165
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "packages/core/src/data/writer/Json.js",
      "requires": [
        166
      ],
      "uses": [],
      "idx": 175
    },
    {
      "path": "packages/core/src/util/Group.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 176
    },
    {
      "path": "packages/core/src/util/SorterCollection.js",
      "requires": [
        51,
        135
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "packages/core/src/util/FilterCollection.js",
      "requires": [
        48,
        135
      ],
      "uses": [],
      "idx": 178
    },
    {
      "path": "packages/core/src/util/GroupCollection.js",
      "requires": [
        135,
        176,
        177,
        178
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "packages/core/src/data/Store.js",
      "requires": [
        1,
        163,
        170,
        171,
        173,
        174,
        175,
        179
      ],
      "uses": [
        134,
        183,
        224
      ],
      "idx": 180
    },
    {
      "path": "packages/core/src/data/reader/Array.js",
      "requires": [
        174
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "packages/core/src/data/ArrayStore.js",
      "requires": [
        169,
        180,
        181
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "packages/core/src/data/StoreManager.js",
      "requires": [
        53,
        182
      ],
      "uses": [
        93,
        169,
        175,
        180,
        181
      ],
      "idx": 183
    },
    {
      "path": "packages/core/src/app/domain/Store.js",
      "requires": [
        89,
        145
      ],
      "uses": [],
      "idx": 184
    },
    {
      "path": "packages/core/src/app/route/Queue.js",
      "requires": [],
      "uses": [
        53
      ],
      "idx": 185
    },
    {
      "path": "packages/core/src/app/route/Route.js",
      "requires": [],
      "uses": [
        80
      ],
      "idx": 186
    },
    {
      "path": "packages/core/src/util/History.js",
      "requires": [
        49
      ],
      "uses": [
        331
      ],
      "idx": 187
    },
    {
      "path": "packages/core/src/app/route/Router.js",
      "requires": [
        185,
        186,
        187
      ],
      "uses": [],
      "idx": 188
    },
    {
      "path": "packages/core/src/app/Controller.js",
      "requires": [
        11,
        90,
        131,
        132,
        183,
        184,
        188
      ],
      "uses": [
        14,
        144
      ],
      "idx": 189
    },
    {
      "path": "packages/core/src/app/Application.js",
      "requires": [
        53,
        187,
        189,
        191,
        192
      ],
      "uses": [
        188
      ],
      "idx": 190
    },
    {
      "path": "packages/core/overrides/app/Application.js",
      "requires": [],
      "uses": [
        190
      ],
      "idx": 191
    },
    {
      "path": "classic/classic/overrides/app/Application.js",
      "requires": [],
      "uses": [
        189,
        470
      ],
      "idx": 192
    },
    {
      "path": "packages/core/src/app/Profile.js",
      "requires": [
        4
      ],
      "uses": [
        189
      ],
      "idx": 193
    },
    {
      "path": "packages/core/src/app/domain/View.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 194
    },
    {
      "path": "packages/core/src/app/ViewController.js",
      "requires": [
        93,
        131,
        194
      ],
      "uses": [],
      "idx": 195
    },
    {
      "path": "packages/core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 196
    },
    {
      "path": "packages/core/src/util/Scheduler.js",
      "requires": [
        4,
        196
      ],
      "uses": [
        76
      ],
      "idx": 197
    },
    {
      "path": "packages/core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 198
    },
    {
      "path": "packages/core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 199
    },
    {
      "path": "packages/core/src/data/matrix/Side.js",
      "requires": [
        199
      ],
      "uses": [],
      "idx": 200
    },
    {
      "path": "packages/core/src/data/matrix/Matrix.js",
      "requires": [
        200
      ],
      "uses": [],
      "idx": 201
    },
    {
      "path": "packages/core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 202
    },
    {
      "path": "packages/core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        202
      ],
      "uses": [],
      "idx": 203
    },
    {
      "path": "packages/core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        198
      ],
      "idx": 204
    },
    {
      "path": "packages/core/src/data/Session.js",
      "requires": [
        144,
        198,
        201,
        202,
        203,
        204
      ],
      "uses": [],
      "idx": 205
    },
    {
      "path": "packages/core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 206
    },
    {
      "path": "packages/core/src/app/bind/BaseBinding.js",
      "requires": [
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "packages/core/src/app/bind/Binding.js",
      "requires": [
        207
      ],
      "uses": [],
      "idx": 208
    },
    {
      "path": "packages/core/src/app/bind/AbstractStub.js",
      "requires": [
        206,
        208
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "packages/core/src/app/bind/Stub.js",
      "requires": [
        208,
        209
      ],
      "uses": [
        214
      ],
      "idx": 210
    },
    {
      "path": "packages/core/src/app/bind/LinkStub.js",
      "requires": [
        210
      ],
      "uses": [],
      "idx": 211
    },
    {
      "path": "packages/core/src/app/bind/RootStub.js",
      "requires": [
        209,
        210,
        211
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "packages/core/src/app/bind/Multi.js",
      "requires": [
        207
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "packages/core/src/app/bind/Formula.js",
      "requires": [
        13,
        206
      ],
      "uses": [],
      "idx": 214
    },
    {
      "path": "packages/core/src/app/bind/Template.js",
      "requires": [
        79
      ],
      "uses": [],
      "idx": 215
    },
    {
      "path": "packages/core/src/app/bind/TemplateBinding.js",
      "requires": [
        207,
        213,
        215
      ],
      "uses": [],
      "idx": 216
    },
    {
      "path": "packages/core/src/data/ChainedStore.js",
      "requires": [
        145,
        171
      ],
      "uses": [
        80,
        183
      ],
      "idx": 217
    },
    {
      "path": "packages/core/src/app/ViewModel.js",
      "requires": [
        3,
        93,
        197,
        205,
        211,
        212,
        213,
        214,
        216,
        217
      ],
      "uses": [
        1,
        144
      ],
      "idx": 218
    },
    {
      "path": "packages/core/src/app/domain/Controller.js",
      "requires": [
        89,
        189
      ],
      "uses": [
        131
      ],
      "idx": 219
    },
    {
      "path": "packages/core/src/direct/Manager.js",
      "requires": [
        4,
        53
      ],
      "uses": [
        80
      ],
      "idx": 220
    },
    {
      "path": "packages/core/src/direct/Provider.js",
      "requires": [
        4,
        220
      ],
      "uses": [],
      "idx": 221
    },
    {
      "path": "packages/core/src/app/domain/Direct.js",
      "requires": [
        89,
        221
      ],
      "uses": [],
      "idx": 222
    },
    {
      "path": "packages/core/src/data/PageMap.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 223
    },
    {
      "path": "packages/core/src/data/BufferedStore.js",
      "requires": [
        48,
        51,
        134,
        170,
        223
      ],
      "uses": [
        177,
        178,
        179
      ],
      "idx": 224
    },
    {
      "path": "packages/core/src/data/proxy/Direct.js",
      "requires": [
        172,
        220
      ],
      "uses": [],
      "idx": 225
    },
    {
      "path": "packages/core/src/data/DirectStore.js",
      "requires": [
        180,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "packages/core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 227
    },
    {
      "path": "packages/core/src/data/proxy/JsonP.js",
      "requires": [
        172,
        227
      ],
      "uses": [],
      "idx": 228
    },
    {
      "path": "packages/core/src/data/JsonPStore.js",
      "requires": [
        174,
        180,
        228
      ],
      "uses": [],
      "idx": 229
    },
    {
      "path": "packages/core/src/data/JsonStore.js",
      "requires": [
        173,
        174,
        175,
        180
      ],
      "uses": [],
      "idx": 230
    },
    {
      "path": "packages/core/src/data/ModelManager.js",
      "requires": [
        144
      ],
      "uses": [
        163
      ],
      "idx": 231
    },
    {
      "path": "packages/core/src/data/NodeInterface.js",
      "requires": [
        4,
        156,
        158,
        160,
        175
      ],
      "uses": [
        144
      ],
      "idx": 232
    },
    {
      "path": "packages/core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 233
    },
    {
      "path": "packages/core/src/data/TreeModel.js",
      "requires": [
        163,
        232,
        233
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "packages/core/src/data/NodeStore.js",
      "requires": [
        180,
        232,
        234
      ],
      "uses": [
        163
      ],
      "idx": 235
    },
    {
      "path": "packages/core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 236
    },
    {
      "path": "packages/core/src/data/TreeStore.js",
      "requires": [
        51,
        180,
        232,
        234
      ],
      "uses": [
        163
      ],
      "idx": 237
    },
    {
      "path": "packages/core/src/data/Types.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 238
    },
    {
      "path": "packages/core/src/data/Validation.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 239
    },
    {
      "path": "packages/core/src/dom/Helper.js",
      "requires": [
        241
      ],
      "uses": [
        80
      ],
      "idx": 240
    },
    {
      "path": "classic/classic/overrides/dom/Helper.js",
      "requires": [],
      "uses": [],
      "idx": 241
    },
    {
      "path": "packages/core/src/dom/Query.js",
      "requires": [
        12,
        240
      ],
      "uses": [
        13
      ],
      "idx": 242
    },
    {
      "path": "packages/core/src/data/reader/Xml.js",
      "requires": [
        165,
        242
      ],
      "uses": [],
      "idx": 243
    },
    {
      "path": "packages/core/src/data/writer/Xml.js",
      "requires": [
        166
      ],
      "uses": [],
      "idx": 244
    },
    {
      "path": "packages/core/src/data/XmlStore.js",
      "requires": [
        173,
        180,
        243,
        244
      ],
      "uses": [],
      "idx": 245
    },
    {
      "path": "packages/core/src/data/identifier/Negative.js",
      "requires": [
        162
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "packages/core/src/data/identifier/Uuid.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "packages/core/src/data/proxy/WebStorage.js",
      "requires": [
        162,
        168
      ],
      "uses": [
        51,
        80,
        164
      ],
      "idx": 248
    },
    {
      "path": "packages/core/src/data/proxy/LocalStorage.js",
      "requires": [
        248
      ],
      "uses": [],
      "idx": 249
    },
    {
      "path": "packages/core/src/data/proxy/Rest.js",
      "requires": [
        173
      ],
      "uses": [],
      "idx": 250
    },
    {
      "path": "packages/core/src/data/proxy/SessionStorage.js",
      "requires": [
        248
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "packages/core/src/data/validator/Bound.js",
      "requires": [
        154
      ],
      "uses": [
        80
      ],
      "idx": 252
    },
    {
      "path": "packages/core/src/data/validator/Format.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "packages/core/src/data/validator/Email.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 254
    },
    {
      "path": "packages/core/src/data/validator/List.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "packages/core/src/data/validator/Exclusion.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "packages/core/src/data/validator/Inclusion.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "packages/core/src/data/validator/Length.js",
      "requires": [
        252
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "packages/core/src/data/validator/Presence.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "packages/core/src/data/validator/Range.js",
      "requires": [
        252
      ],
      "uses": [],
      "idx": 260
    },
    {
      "path": "packages/core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 261
    },
    {
      "path": "packages/core/src/direct/RemotingEvent.js",
      "requires": [
        261
      ],
      "uses": [
        220
      ],
      "idx": 262
    },
    {
      "path": "packages/core/src/direct/ExceptionEvent.js",
      "requires": [
        262
      ],
      "uses": [],
      "idx": 263
    },
    {
      "path": "packages/core/src/direct/JsonProvider.js",
      "requires": [
        221
      ],
      "uses": [
        220,
        263
      ],
      "idx": 264
    },
    {
      "path": "packages/core/src/direct/PollingProvider.js",
      "requires": [
        9,
        54,
        263,
        264
      ],
      "uses": [
        220,
        331
      ],
      "idx": 265
    },
    {
      "path": "packages/core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 266
    },
    {
      "path": "packages/core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 267
    },
    {
      "path": "packages/core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        53,
        220,
        264,
        266,
        267
      ],
      "uses": [
        9,
        78,
        263
      ],
      "idx": 268
    },
    {
      "path": "packages/core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 269
    },
    {
      "path": "packages/core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        32
      ],
      "uses": [],
      "idx": 270
    },
    {
      "path": "packages/core/src/event/gesture/SingleTouch.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 271
    },
    {
      "path": "packages/core/src/event/gesture/DoubleTap.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "packages/core/src/event/gesture/Drag.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 273
    },
    {
      "path": "packages/core/src/event/gesture/Swipe.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "packages/core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        274
      ],
      "uses": [
        47
      ],
      "idx": 275
    },
    {
      "path": "packages/core/src/event/gesture/LongPress.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "packages/core/src/event/gesture/MultiTouch.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "packages/core/src/event/gesture/Pinch.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "packages/core/src/event/gesture/Rotate.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "packages/core/src/event/gesture/Tap.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "packages/core/src/event/publisher/Focus.js",
      "requires": [
        30,
        47
      ],
      "uses": [
        27,
        76
      ],
      "idx": 281
    },
    {
      "path": "packages/core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 282
    },
    {
      "path": "packages/core/src/fx/animation/Abstract.js",
      "requires": [
        15,
        282
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "packages/core/src/fx/animation/Slide.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "packages/core/src/fx/animation/SlideOut.js",
      "requires": [
        284
      ],
      "uses": [],
      "idx": 285
    },
    {
      "path": "packages/core/src/fx/animation/Fade.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "packages/core/src/fx/animation/FadeOut.js",
      "requires": [
        286
      ],
      "uses": [],
      "idx": 287
    },
    {
      "path": "packages/core/src/fx/animation/Flip.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 288
    },
    {
      "path": "packages/core/src/fx/animation/Pop.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 289
    },
    {
      "path": "packages/core/src/fx/animation/PopOut.js",
      "requires": [
        289
      ],
      "uses": [],
      "idx": 290
    },
    {
      "path": "packages/core/src/fx/Animation.js",
      "requires": [
        284,
        285,
        286,
        287,
        288,
        289,
        290
      ],
      "uses": [
        283
      ],
      "idx": 291
    },
    {
      "path": "packages/core/src/fx/runner/Css.js",
      "requires": [
        15,
        291
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "packages/core/src/fx/runner/CssTransition.js",
      "requires": [
        10,
        292
      ],
      "uses": [
        291
      ],
      "idx": 293
    },
    {
      "path": "packages/core/src/fx/Runner.js",
      "requires": [
        293
      ],
      "uses": [],
      "idx": 294
    },
    {
      "path": "packages/core/src/fx/animation/Cube.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "packages/core/src/fx/animation/Wipe.js",
      "requires": [
        291
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "packages/core/src/fx/animation/WipeOut.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "packages/core/src/fx/easing/EaseIn.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 298
    },
    {
      "path": "packages/core/src/fx/easing/Easing.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 299
    },
    {
      "path": "packages/core/src/fx/layout/card/Abstract.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 300
    },
    {
      "path": "packages/core/src/fx/layout/card/Style.js",
      "requires": [
        291,
        300
      ],
      "uses": [
        293
      ],
      "idx": 301
    },
    {
      "path": "packages/core/src/fx/layout/card/Slide.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 302
    },
    {
      "path": "packages/core/src/fx/layout/card/Cover.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 303
    },
    {
      "path": "packages/core/src/fx/layout/card/Reveal.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "packages/core/src/fx/layout/card/Fade.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "packages/core/src/fx/layout/card/Flip.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 306
    },
    {
      "path": "packages/core/src/fx/layout/card/Pop.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 307
    },
    {
      "path": "packages/core/src/fx/layout/card/Scroll.js",
      "requires": [
        100,
        300
      ],
      "uses": [
        10
      ],
      "idx": 308
    },
    {
      "path": "packages/core/src/fx/layout/Card.js",
      "requires": [
        302,
        303,
        304,
        305,
        306,
        307,
        308
      ],
      "uses": [
        300
      ],
      "idx": 309
    },
    {
      "path": "packages/core/src/fx/layout/card/Cube.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 310
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        308
      ],
      "uses": [],
      "idx": 311
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        308
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "packages/core/src/fx/runner/CssAnimation.js",
      "requires": [
        292
      ],
      "uses": [
        291
      ],
      "idx": 313
    },
    {
      "path": "packages/core/src/mixin/Container.js",
      "requires": [
        0
      ],
      "uses": [
        11
      ],
      "idx": 314
    },
    {
      "path": "packages/core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 315
    },
    {
      "path": "packages/core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 316
    },
    {
      "path": "packages/core/src/mixin/Responsive.js",
      "requires": [
        0,
        76
      ],
      "uses": [
        47
      ],
      "idx": 317
    },
    {
      "path": "packages/core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        53
      ],
      "idx": 318
    },
    {
      "path": "packages/core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "packages/core/src/perf/Accumulator.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "packages/core/src/perf/Monitor.js",
      "requires": [
        320
      ],
      "uses": [],
      "idx": 321
    },
    {
      "path": "packages/core/src/plugin/Abstract.js",
      "requires": [
        323
      ],
      "uses": [],
      "idx": 322
    },
    {
      "path": "classic/classic/overrides/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 323
    },
    {
      "path": "packages/core/src/plugin/LazyItems.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "packages/core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 325
    },
    {
      "path": "packages/core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 326
    },
    {
      "path": "packages/core/src/util/CSV.js",
      "requires": [
        326
      ],
      "uses": [],
      "idx": 327
    },
    {
      "path": "packages/core/src/util/ItemCollection.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 328
    },
    {
      "path": "packages/core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 329
    },
    {
      "path": "packages/core/src/util/TSV.js",
      "requires": [
        326
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "packages/core/src/util/TaskManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "packages/core/src/util/TextMetrics.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 332
    },
    {
      "path": "classic/classic/src/Action.js",
      "requires": [],
      "uses": [],
      "idx": 333
    },
    {
      "path": "classic/classic/src/ElementLoader.js",
      "requires": [
        49
      ],
      "uses": [
        8,
        9
      ],
      "idx": 334
    },
    {
      "path": "classic/classic/src/ComponentLoader.js",
      "requires": [
        334
      ],
      "uses": [],
      "idx": 335
    },
    {
      "path": "classic/classic/src/layout/SizeModel.js",
      "requires": [],
      "uses": [],
      "idx": 336
    },
    {
      "path": "classic/classic/src/layout/Layout.js",
      "requires": [
        88,
        93,
        336
      ],
      "uses": [
        614
      ],
      "idx": 337
    },
    {
      "path": "classic/classic/src/layout/container/Container.js",
      "requires": [
        88,
        116,
        337
      ],
      "uses": [
        240
      ],
      "idx": 338
    },
    {
      "path": "classic/classic/src/layout/container/Auto.js",
      "requires": [
        338
      ],
      "uses": [
        88
      ],
      "idx": 339
    },
    {
      "path": "classic/classic/src/ZIndexManager.js",
      "requires": [
        76,
        177,
        178
      ],
      "uses": [
        47,
        135
      ],
      "idx": 340
    },
    {
      "path": "classic/classic/src/container/Container.js",
      "requires": [
        53,
        125,
        233,
        314,
        339,
        340
      ],
      "uses": [
        11,
        14,
        93,
        328
      ],
      "idx": 341
    },
    {
      "path": "classic/classic/src/layout/container/Editor.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 342
    },
    {
      "path": "classic/classic/src/Editor.js",
      "requires": [
        341,
        342
      ],
      "uses": [
        1,
        11
      ],
      "idx": 343
    },
    {
      "path": "classic/classic/src/EventManager.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 344
    },
    {
      "path": "classic/classic/src/FocusManager.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 345
    },
    {
      "path": "classic/classic/src/Img.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 346
    },
    {
      "path": "classic/classic/src/util/StoreHolder.js",
      "requires": [
        183
      ],
      "uses": [],
      "idx": 347
    },
    {
      "path": "classic/classic/src/LoadMask.js",
      "requires": [
        125,
        347
      ],
      "uses": [
        76,
        183
      ],
      "idx": 348
    },
    {
      "path": "classic/classic/src/layout/component/Component.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 349
    },
    {
      "path": "classic/classic/src/layout/component/Auto.js",
      "requires": [
        349
      ],
      "uses": [],
      "idx": 350
    },
    {
      "path": "classic/classic/src/layout/component/ProgressBar.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "classic/classic/src/ProgressBar.js",
      "requires": [
        80,
        92,
        125,
        331,
        351
      ],
      "uses": [
        70,
        88
      ],
      "idx": 352
    },
    {
      "path": "classic/classic/src/ProgressBarWidget.js",
      "requires": [
        84,
        352
      ],
      "uses": [
        88
      ],
      "idx": 353
    },
    {
      "path": "classic/classic/src/panel/Bar.js",
      "requires": [
        341
      ],
      "uses": [],
      "idx": 354
    },
    {
      "path": "classic/classic/src/rtl/panel/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 355
    },
    {
      "path": "classic/classic/src/panel/Title.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "classic/classic/src/rtl/panel/Title.js",
      "requires": [],
      "uses": [],
      "idx": 357
    },
    {
      "path": "classic/classic/src/panel/Tool.js",
      "requires": [
        125
      ],
      "uses": [
        470
      ],
      "idx": 358
    },
    {
      "path": "classic/classic/src/util/KeyMap.js",
      "requires": [],
      "uses": [],
      "idx": 359
    },
    {
      "path": "classic/classic/src/util/KeyNav.js",
      "requires": [
        359
      ],
      "uses": [],
      "idx": 360
    },
    {
      "path": "classic/classic/src/util/FocusableContainer.js",
      "requires": [
        0,
        360
      ],
      "uses": [
        125
      ],
      "idx": 361
    },
    {
      "path": "classic/classic/src/rtl/util/FocusableContainer.js",
      "requires": [],
      "uses": [],
      "idx": 362
    },
    {
      "path": "classic/classic/src/panel/Header.js",
      "requires": [
        205,
        350,
        354,
        356,
        358,
        361
      ],
      "uses": [
        11,
        125
      ],
      "idx": 363
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/None.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 364
    },
    {
      "path": "classic/classic/src/util/ClickRepeater.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 365
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/Scroller.js",
      "requires": [
        4,
        47,
        364,
        365
      ],
      "uses": [],
      "idx": 366
    },
    {
      "path": "classic/classic/src/rtl/layout/container/boxOverflow/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 367
    },
    {
      "path": "classic/classic/src/dd/DragDropManager.js",
      "requires": [
        25
      ],
      "uses": [
        425,
        470
      ],
      "idx": 368
    },
    {
      "path": "classic/classic/src/resizer/Splitter.js",
      "requires": [
        88,
        125
      ],
      "uses": [
        488
      ],
      "idx": 369
    },
    {
      "path": "classic/classic/src/layout/container/Box.js",
      "requires": [
        79,
        338,
        364,
        366,
        368,
        369
      ],
      "uses": [
        93,
        205,
        336,
        350
      ],
      "idx": 370
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Box.js",
      "requires": [],
      "uses": [],
      "idx": 371
    },
    {
      "path": "classic/classic/src/layout/container/HBox.js",
      "requires": [
        370
      ],
      "uses": [],
      "idx": 372
    },
    {
      "path": "classic/classic/src/rtl/layout/container/HBox.js",
      "requires": [],
      "uses": [],
      "idx": 373
    },
    {
      "path": "classic/classic/src/layout/container/VBox.js",
      "requires": [
        370
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "classic/classic/src/rtl/layout/container/VBox.js",
      "requires": [],
      "uses": [],
      "idx": 375
    },
    {
      "path": "classic/classic/src/toolbar/Toolbar.js",
      "requires": [
        205,
        341,
        350,
        361,
        372,
        374
      ],
      "uses": [
        525,
        543,
        658
      ],
      "idx": 376
    },
    {
      "path": "classic/classic/src/dd/DragDrop.js",
      "requires": [
        368
      ],
      "uses": [
        47
      ],
      "idx": 377
    },
    {
      "path": "classic/classic/src/dd/DD.js",
      "requires": [
        368,
        377
      ],
      "uses": [
        47
      ],
      "idx": 378
    },
    {
      "path": "classic/classic/src/rtl/dd/DD.js",
      "requires": [],
      "uses": [],
      "idx": 379
    },
    {
      "path": "classic/classic/src/dd/DDProxy.js",
      "requires": [
        378
      ],
      "uses": [
        368
      ],
      "idx": 380
    },
    {
      "path": "classic/classic/src/dd/StatusProxy.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "classic/classic/src/dd/DragSource.js",
      "requires": [
        368,
        380,
        381
      ],
      "uses": [
        205,
        350
      ],
      "idx": 382
    },
    {
      "path": "classic/classic/src/panel/Proxy.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 383
    },
    {
      "path": "classic/classic/src/panel/DD.js",
      "requires": [
        382,
        383
      ],
      "uses": [],
      "idx": 384
    },
    {
      "path": "classic/classic/src/layout/component/Dock.js",
      "requires": [
        349
      ],
      "uses": [
        14,
        47,
        336
      ],
      "idx": 385
    },
    {
      "path": "classic/classic/src/rtl/layout/component/Dock.js",
      "requires": [],
      "uses": [
        385
      ],
      "idx": 386
    },
    {
      "path": "classic/classic/src/util/Memento.js",
      "requires": [],
      "uses": [],
      "idx": 387
    },
    {
      "path": "classic/classic/src/container/DockingContainer.js",
      "requires": [
        47,
        53
      ],
      "uses": [
        14,
        240,
        328
      ],
      "idx": 388
    },
    {
      "path": "classic/classic/src/panel/Panel.js",
      "requires": [
        47,
        53,
        70,
        88,
        341,
        359,
        363,
        376,
        384,
        385,
        387,
        388
      ],
      "uses": [
        1,
        11,
        91,
        92,
        125,
        205,
        240,
        339,
        350,
        358,
        360,
        464,
        544
      ],
      "idx": 389
    },
    {
      "path": "classic/classic/src/rtl/panel/Panel.js",
      "requires": [],
      "uses": [],
      "idx": 390
    },
    {
      "path": "classic/classic/src/form/Labelable.js",
      "requires": [
        0,
        74,
        88
      ],
      "uses": [
        47,
        469
      ],
      "idx": 391
    },
    {
      "path": "classic/classic/src/rtl/form/Labelable.js",
      "requires": [],
      "uses": [],
      "idx": 392
    },
    {
      "path": "classic/classic/src/form/field/Field.js",
      "requires": [],
      "uses": [],
      "idx": 393
    },
    {
      "path": "classic/classic/src/form/field/Base.js",
      "requires": [
        1,
        88,
        125,
        391,
        393
      ],
      "uses": [
        240
      ],
      "idx": 394
    },
    {
      "path": "classic/classic/src/form/field/Display.js",
      "requires": [
        79,
        88,
        394
      ],
      "uses": [],
      "idx": 395
    },
    {
      "path": "classic/classic/src/layout/container/Fit.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "classic/classic/src/panel/Table.js",
      "requires": [
        389,
        396
      ],
      "uses": [
        1,
        183,
        240,
        416,
        432,
        438,
        589,
        590,
        633,
        634
      ],
      "idx": 397
    },
    {
      "path": "classic/classic/src/selection/Model.js",
      "requires": [
        4,
        93,
        347
      ],
      "uses": [
        135
      ],
      "idx": 398
    },
    {
      "path": "classic/classic/src/selection/DataViewModel.js",
      "requires": [
        360,
        398
      ],
      "uses": [],
      "idx": 399
    },
    {
      "path": "classic/classic/src/view/NavigationModel.js",
      "requires": [
        49,
        93
      ],
      "uses": [
        360
      ],
      "idx": 400
    },
    {
      "path": "classic/classic/src/rtl/view/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 401
    },
    {
      "path": "classic/classic/src/view/AbstractView.js",
      "requires": [
        73,
        125,
        347,
        348,
        399,
        400
      ],
      "uses": [
        10,
        80,
        88,
        93,
        183,
        240,
        331
      ],
      "idx": 402
    },
    {
      "path": "classic/classic/src/view/View.js",
      "requires": [
        402
      ],
      "uses": [],
      "idx": 403
    },
    {
      "path": "classic/classic/src/grid/CellContext.js",
      "requires": [],
      "uses": [],
      "idx": 404
    },
    {
      "path": "classic/classic/src/view/TableLayout.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 405
    },
    {
      "path": "classic/classic/src/grid/locking/RowSynchronizer.js",
      "requires": [],
      "uses": [],
      "idx": 406
    },
    {
      "path": "classic/classic/src/view/NodeCache.js",
      "requires": [
        73
      ],
      "uses": [
        47,
        72
      ],
      "idx": 407
    },
    {
      "path": "classic/classic/src/view/Table.js",
      "requires": [
        1,
        53,
        403,
        404,
        405,
        406,
        407
      ],
      "uses": [
        47,
        72,
        88,
        93,
        125,
        163,
        432
      ],
      "idx": 408
    },
    {
      "path": "classic/classic/src/rtl/view/Table.js",
      "requires": [],
      "uses": [],
      "idx": 409
    },
    {
      "path": "classic/classic/src/grid/Panel.js",
      "requires": [
        397,
        408
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "classic/classic/src/form/CheckboxManager.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "classic/classic/src/form/field/Checkbox.js",
      "requires": [
        88,
        394,
        411
      ],
      "uses": [],
      "idx": 412
    },
    {
      "path": "classic/classic/src/app/bindinspector/Util.js",
      "requires": [],
      "uses": [
        80
      ],
      "idx": 413
    },
    {
      "path": "classic/classic/src/app/bindinspector/ComponentDetail.js",
      "requires": [
        125,
        205,
        341,
        350,
        372,
        374,
        389,
        395,
        410,
        412,
        413
      ],
      "uses": [
        80,
        376,
        385,
        396,
        453,
        461,
        544,
        658
      ],
      "idx": 414
    },
    {
      "path": "classic/classic/src/tree/View.js",
      "requires": [
        408
      ],
      "uses": [
        47,
        88
      ],
      "idx": 415
    },
    {
      "path": "classic/classic/src/selection/RowModel.js",
      "requires": [
        399,
        404
      ],
      "uses": [],
      "idx": 416
    },
    {
      "path": "classic/classic/src/selection/TreeModel.js",
      "requires": [
        416
      ],
      "uses": [],
      "idx": 417
    },
    {
      "path": "classic/classic/src/grid/ColumnLayout.js",
      "requires": [
        372,
        397
      ],
      "uses": [],
      "idx": 418
    },
    {
      "path": "classic/classic/src/rtl/grid/ColumnLayout.js",
      "requires": [],
      "uses": [],
      "idx": 419
    },
    {
      "path": "classic/classic/src/dd/DragTracker.js",
      "requires": [
        49
      ],
      "uses": [
        25,
        360
      ],
      "idx": 420
    },
    {
      "path": "classic/classic/src/grid/plugin/HeaderResizer.js",
      "requires": [
        25,
        322,
        420
      ],
      "uses": [
        434
      ],
      "idx": 421
    },
    {
      "path": "classic/classic/src/rtl/grid/plugin/HeaderResizer.js",
      "requires": [],
      "uses": [],
      "idx": 422
    },
    {
      "path": "classic/classic/src/dd/DragZone.js",
      "requires": [
        382
      ],
      "uses": [
        426,
        428
      ],
      "idx": 423
    },
    {
      "path": "classic/classic/src/grid/header/DragZone.js",
      "requires": [
        423
      ],
      "uses": [],
      "idx": 424
    },
    {
      "path": "classic/classic/src/dd/DDTarget.js",
      "requires": [
        377
      ],
      "uses": [],
      "idx": 425
    },
    {
      "path": "classic/classic/src/dd/ScrollManager.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "classic/classic/src/dd/DropTarget.js",
      "requires": [
        425,
        426
      ],
      "uses": [],
      "idx": 427
    },
    {
      "path": "classic/classic/src/dd/Registry.js",
      "requires": [],
      "uses": [],
      "idx": 428
    },
    {
      "path": "classic/classic/src/dd/DropZone.js",
      "requires": [
        427,
        428
      ],
      "uses": [
        368
      ],
      "idx": 429
    },
    {
      "path": "classic/classic/src/grid/header/DropZone.js",
      "requires": [
        429
      ],
      "uses": [
        368
      ],
      "idx": 430
    },
    {
      "path": "classic/classic/src/grid/plugin/HeaderReorderer.js",
      "requires": [
        322,
        424,
        430
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "classic/classic/src/grid/header/Container.js",
      "requires": [
        341,
        360,
        361,
        418,
        421,
        431
      ],
      "uses": [
        1,
        125,
        205,
        350,
        366,
        374,
        385,
        434,
        553,
        575,
        576,
        577
      ],
      "idx": 432
    },
    {
      "path": "classic/classic/src/grid/ColumnComponentLayout.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 433
    },
    {
      "path": "classic/classic/src/grid/column/Column.js",
      "requires": [
        215,
        418,
        432,
        433
      ],
      "uses": [
        79,
        421
      ],
      "idx": 434
    },
    {
      "path": "classic/classic/src/rtl/grid/column/Column.js",
      "requires": [],
      "uses": [],
      "idx": 435
    },
    {
      "path": "classic/classic/src/tree/Column.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 436
    },
    {
      "path": "classic/classic/src/rtl/tree/Column.js",
      "requires": [],
      "uses": [],
      "idx": 437
    },
    {
      "path": "classic/classic/src/grid/NavigationModel.js",
      "requires": [
        400
      ],
      "uses": [
        11,
        27,
        72,
        125,
        360,
        404
      ],
      "idx": 438
    },
    {
      "path": "classic/classic/src/rtl/grid/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 439
    },
    {
      "path": "classic/classic/src/tree/NavigationModel.js",
      "requires": [
        438
      ],
      "uses": [
        27
      ],
      "idx": 440
    },
    {
      "path": "classic/classic/src/tree/Panel.js",
      "requires": [
        237,
        397,
        415,
        417,
        436,
        440
      ],
      "uses": [
        183,
        205,
        339,
        433
      ],
      "idx": 441
    },
    {
      "path": "classic/classic/src/form/field/VTypes.js",
      "requires": [],
      "uses": [],
      "idx": 442
    },
    {
      "path": "classic/classic/src/form/trigger/Trigger.js",
      "requires": [
        93,
        365
      ],
      "uses": [
        47,
        88
      ],
      "idx": 443
    },
    {
      "path": "classic/classic/src/form/field/Text.js",
      "requires": [
        332,
        394,
        442,
        443
      ],
      "uses": [
        79,
        80,
        92
      ],
      "idx": 444
    },
    {
      "path": "classic/classic/src/app/bindinspector/ComponentList.js",
      "requires": [
        441,
        444
      ],
      "uses": [
        14,
        205,
        339,
        350,
        376,
        385,
        413,
        433,
        436,
        453,
        468,
        544,
        658
      ],
      "idx": 445
    },
    {
      "path": "classic/classic/src/resizer/BorderSplitter.js",
      "requires": [
        369
      ],
      "uses": [
        627
      ],
      "idx": 446
    },
    {
      "path": "classic/classic/src/layout/container/Border.js",
      "requires": [
        70,
        126,
        338,
        446
      ],
      "uses": [
        79,
        205,
        350
      ],
      "idx": 447
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Border.js",
      "requires": [],
      "uses": [],
      "idx": 448
    },
    {
      "path": "classic/classic/src/layout/container/Card.js",
      "requires": [
        396
      ],
      "uses": [
        47
      ],
      "idx": 449
    },
    {
      "path": "classic/classic/src/dom/ButtonElement.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "classic/classic/src/button/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 451
    },
    {
      "path": "classic/classic/src/menu/Manager.js",
      "requires": [],
      "uses": [
        11,
        577
      ],
      "idx": 452
    },
    {
      "path": "classic/classic/src/button/Button.js",
      "requires": [
        125,
        233,
        332,
        359,
        365,
        450,
        451,
        452
      ],
      "uses": [
        27,
        470
      ],
      "idx": 453
    },
    {
      "path": "classic/classic/src/rtl/button/Button.js",
      "requires": [],
      "uses": [],
      "idx": 454
    },
    {
      "path": "classic/classic/src/tab/Tab.js",
      "requires": [
        360,
        453
      ],
      "uses": [],
      "idx": 455
    },
    {
      "path": "classic/classic/src/layout/component/Body.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 456
    },
    {
      "path": "classic/classic/src/tab/Bar.js",
      "requires": [
        26,
        354,
        361,
        455,
        456
      ],
      "uses": [
        25
      ],
      "idx": 457
    },
    {
      "path": "classic/classic/src/rtl/tab/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 458
    },
    {
      "path": "classic/classic/src/tab/Panel.js",
      "requires": [
        389,
        449,
        457
      ],
      "uses": [
        205,
        350,
        455
      ],
      "idx": 459
    },
    {
      "path": "classic/classic/src/app/bindinspector/Environment.js",
      "requires": [
        135
      ],
      "uses": [
        11,
        504
      ],
      "idx": 460
    },
    {
      "path": "classic/classic/src/app/bindinspector/ViewModelDetail.js",
      "requires": [
        441
      ],
      "uses": [
        80,
        205,
        339,
        413,
        433,
        436
      ],
      "idx": 461
    },
    {
      "path": "classic/classic/src/app/bindinspector/noconflict/BaseModel.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 462
    },
    {
      "path": "classic/classic/src/app/bindinspector/Container.js",
      "requires": [
        125,
        205,
        341,
        350,
        372,
        413,
        414,
        445,
        447,
        459,
        460,
        461,
        462
      ],
      "uses": [
        144,
        339,
        385,
        389,
        396,
        457
      ],
      "idx": 463
    },
    {
      "path": "classic/classic/src/util/ComponentDragger.js",
      "requires": [
        420
      ],
      "uses": [
        25,
        47
      ],
      "idx": 464
    },
    {
      "path": "classic/classic/src/util/FocusTrap.js",
      "requires": [
        0
      ],
      "uses": [
        47
      ],
      "idx": 465
    },
    {
      "path": "classic/classic/src/window/Window.js",
      "requires": [
        25,
        389,
        464,
        465
      ],
      "uses": [],
      "idx": 466
    },
    {
      "path": "classic/classic/src/tip/Tip.js",
      "requires": [
        389
      ],
      "uses": [
        125
      ],
      "idx": 467
    },
    {
      "path": "classic/classic/src/tip/ToolTip.js",
      "requires": [
        467
      ],
      "uses": [
        47
      ],
      "idx": 468
    },
    {
      "path": "classic/classic/src/tip/QuickTip.js",
      "requires": [
        468
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "classic/classic/src/tip/QuickTipManager.js",
      "requires": [
        469
      ],
      "uses": [],
      "idx": 470
    },
    {
      "path": "classic/classic/src/rtl/tip/QuickTipManager.js",
      "requires": [],
      "uses": [],
      "idx": 471
    },
    {
      "path": "classic/classic/src/app/bindinspector/Inspector.js",
      "requires": [
        396,
        463,
        466,
        470
      ],
      "uses": [
        205,
        350,
        447,
        460
      ],
      "idx": 472
    },
    {
      "path": "classic/classic/src/button/Split.js",
      "requires": [
        453
      ],
      "uses": [],
      "idx": 473
    },
    {
      "path": "classic/classic/src/button/Cycle.js",
      "requires": [
        473
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "classic/classic/src/button/Segmented.js",
      "requires": [
        341,
        453
      ],
      "uses": [],
      "idx": 475
    },
    {
      "path": "classic/classic/src/rtl/button/Segmented.js",
      "requires": [],
      "uses": [],
      "idx": 476
    },
    {
      "path": "classic/classic/src/layout/container/Table.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 477
    },
    {
      "path": "classic/classic/src/container/ButtonGroup.js",
      "requires": [
        361,
        389,
        477
      ],
      "uses": [],
      "idx": 478
    },
    {
      "path": "classic/classic/src/container/Monitor.js",
      "requires": [],
      "uses": [
        53
      ],
      "idx": 479
    },
    {
      "path": "classic/classic/src/plugin/Responsive.js",
      "requires": [
        317
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "classic/classic/src/plugin/Viewport.js",
      "requires": [
        480
      ],
      "uses": [
        47,
        125,
        336
      ],
      "idx": 481
    },
    {
      "path": "classic/classic/src/container/Viewport.js",
      "requires": [
        317,
        341,
        481
      ],
      "uses": [],
      "idx": 482
    },
    {
      "path": "classic/classic/src/layout/container/Anchor.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 483
    },
    {
      "path": "classic/classic/src/dashboard/Panel.js",
      "requires": [
        389
      ],
      "uses": [
        11
      ],
      "idx": 484
    },
    {
      "path": "classic/classic/src/dashboard/Column.js",
      "requires": [
        341,
        483,
        484
      ],
      "uses": [],
      "idx": 485
    },
    {
      "path": "classic/classic/src/layout/container/Column.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 486
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Column.js",
      "requires": [],
      "uses": [],
      "idx": 487
    },
    {
      "path": "classic/classic/src/resizer/SplitterTracker.js",
      "requires": [
        25,
        420
      ],
      "uses": [
        47,
        100
      ],
      "idx": 488
    },
    {
      "path": "classic/classic/src/rtl/resizer/SplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 489
    },
    {
      "path": "classic/classic/src/layout/container/ColumnSplitterTracker.js",
      "requires": [
        488
      ],
      "uses": [],
      "idx": 490
    },
    {
      "path": "classic/classic/src/layout/container/ColumnSplitter.js",
      "requires": [
        369,
        490
      ],
      "uses": [],
      "idx": 491
    },
    {
      "path": "classic/classic/src/layout/container/Dashboard.js",
      "requires": [
        486,
        491
      ],
      "uses": [
        205,
        350
      ],
      "idx": 492
    },
    {
      "path": "classic/classic/src/dashboard/DropZone.js",
      "requires": [
        427
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "classic/classic/src/dashboard/Part.js",
      "requires": [
        3,
        93,
        136
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "classic/classic/src/dashboard/Dashboard.js",
      "requires": [
        389,
        485,
        492,
        493,
        494
      ],
      "uses": [
        93,
        120,
        135
      ],
      "idx": 495
    },
    {
      "path": "classic/classic/src/dom/Layer.js",
      "requires": [
        47
      ],
      "uses": [
        240
      ],
      "idx": 496
    },
    {
      "path": "classic/classic/src/enums.js",
      "requires": [],
      "uses": [],
      "idx": 497
    },
    {
      "path": "classic/classic/src/event/publisher/MouseEnterLeave.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 498
    },
    {
      "path": "classic/classic/src/flash/Component.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "classic/classic/src/form/action/Action.js",
      "requires": [],
      "uses": [],
      "idx": 500
    },
    {
      "path": "classic/classic/src/form/action/Load.js",
      "requires": [
        8,
        500
      ],
      "uses": [
        9
      ],
      "idx": 501
    },
    {
      "path": "classic/classic/src/form/action/Submit.js",
      "requires": [
        500
      ],
      "uses": [
        9,
        240
      ],
      "idx": 502
    },
    {
      "path": "classic/classic/src/form/field/TextArea.js",
      "requires": [
        1,
        88,
        444
      ],
      "uses": [
        79,
        332
      ],
      "idx": 503
    },
    {
      "path": "classic/classic/src/window/MessageBox.js",
      "requires": [
        352,
        372,
        376,
        444,
        453,
        466,
        483,
        503
      ],
      "uses": [
        125,
        205,
        341,
        350,
        351,
        544
      ],
      "idx": 504
    },
    {
      "path": "classic/classic/src/form/Basic.js",
      "requires": [
        1,
        49,
        53,
        147,
        501,
        502,
        504
      ],
      "uses": [
        479
      ],
      "idx": 505
    },
    {
      "path": "classic/classic/src/form/FieldAncestor.js",
      "requires": [
        0,
        479
      ],
      "uses": [],
      "idx": 506
    },
    {
      "path": "classic/classic/src/layout/component/field/FieldContainer.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 507
    },
    {
      "path": "classic/classic/src/form/FieldContainer.js",
      "requires": [
        341,
        391,
        506,
        507
      ],
      "uses": [],
      "idx": 508
    },
    {
      "path": "classic/classic/src/layout/container/CheckboxGroup.js",
      "requires": [
        338
      ],
      "uses": [
        240
      ],
      "idx": 509
    },
    {
      "path": "classic/classic/src/form/CheckboxGroup.js",
      "requires": [
        393,
        394,
        412,
        508,
        509
      ],
      "uses": [],
      "idx": 510
    },
    {
      "path": "classic/classic/src/form/FieldSet.js",
      "requires": [
        341,
        506
      ],
      "uses": [
        47,
        91,
        125,
        205,
        240,
        350,
        358,
        412,
        483,
        616
      ],
      "idx": 511
    },
    {
      "path": "classic/classic/src/form/Label.js",
      "requires": [
        79,
        125
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "classic/classic/src/form/Panel.js",
      "requires": [
        54,
        389,
        505,
        506
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "classic/classic/src/form/RadioManager.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 514
    },
    {
      "path": "classic/classic/src/form/field/Radio.js",
      "requires": [
        412,
        514
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "classic/classic/src/form/RadioGroup.js",
      "requires": [
        361,
        510,
        515
      ],
      "uses": [
        514
      ],
      "idx": 516
    },
    {
      "path": "classic/classic/src/form/action/DirectAction.js",
      "requires": [
        0
      ],
      "uses": [
        220
      ],
      "idx": 517
    },
    {
      "path": "classic/classic/src/form/action/DirectLoad.js",
      "requires": [
        220,
        501,
        517
      ],
      "uses": [],
      "idx": 518
    },
    {
      "path": "classic/classic/src/form/action/DirectSubmit.js",
      "requires": [
        220,
        502,
        517
      ],
      "uses": [],
      "idx": 519
    },
    {
      "path": "classic/classic/src/form/action/StandardSubmit.js",
      "requires": [
        502
      ],
      "uses": [],
      "idx": 520
    },
    {
      "path": "classic/classic/src/form/field/Picker.js",
      "requires": [
        360,
        444
      ],
      "uses": [],
      "idx": 521
    },
    {
      "path": "classic/classic/src/view/BoundListKeyNav.js",
      "requires": [
        400
      ],
      "uses": [
        27,
        360
      ],
      "idx": 522
    },
    {
      "path": "classic/classic/src/layout/component/BoundList.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "classic/classic/src/toolbar/Item.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 524
    },
    {
      "path": "classic/classic/src/toolbar/TextItem.js",
      "requires": [
        88,
        376,
        524
      ],
      "uses": [],
      "idx": 525
    },
    {
      "path": "classic/classic/src/form/trigger/Spinner.js",
      "requires": [
        443
      ],
      "uses": [],
      "idx": 526
    },
    {
      "path": "classic/classic/src/form/field/Spinner.js",
      "requires": [
        360,
        444,
        526
      ],
      "uses": [],
      "idx": 527
    },
    {
      "path": "classic/classic/src/form/field/Number.js",
      "requires": [
        527
      ],
      "uses": [
        79,
        80
      ],
      "idx": 528
    },
    {
      "path": "classic/classic/src/toolbar/Paging.js",
      "requires": [
        347,
        376,
        525,
        528
      ],
      "uses": [
        80,
        205,
        350,
        526
      ],
      "idx": 529
    },
    {
      "path": "classic/classic/src/view/BoundList.js",
      "requires": [
        47,
        233,
        403,
        522,
        523,
        529
      ],
      "uses": [
        88,
        205,
        350,
        544
      ],
      "idx": 530
    },
    {
      "path": "classic/classic/src/form/field/ComboBox.js",
      "requires": [
        1,
        183,
        347,
        521,
        530
      ],
      "uses": [
        27,
        47,
        48,
        88,
        135,
        163,
        178,
        205,
        240,
        399,
        522,
        523
      ],
      "idx": 531
    },
    {
      "path": "classic/classic/src/picker/Month.js",
      "requires": [
        88,
        125,
        365,
        453
      ],
      "uses": [
        205,
        350
      ],
      "idx": 532
    },
    {
      "path": "classic/classic/src/picker/Date.js",
      "requires": [
        64,
        88,
        125,
        360,
        365,
        453,
        473,
        532
      ],
      "uses": [
        80,
        205,
        240,
        350
      ],
      "idx": 533
    },
    {
      "path": "classic/classic/src/form/field/Date.js",
      "requires": [
        521,
        533
      ],
      "uses": [
        80,
        205,
        350
      ],
      "idx": 534
    },
    {
      "path": "classic/classic/src/form/field/FileButton.js",
      "requires": [
        453
      ],
      "uses": [
        125
      ],
      "idx": 535
    },
    {
      "path": "classic/classic/src/rtl/form/field/FileButton.js",
      "requires": [],
      "uses": [],
      "idx": 536
    },
    {
      "path": "classic/classic/src/form/trigger/Component.js",
      "requires": [
        443
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "classic/classic/src/form/field/File.js",
      "requires": [
        444,
        535,
        537
      ],
      "uses": [
        205,
        350
      ],
      "idx": 538
    },
    {
      "path": "classic/classic/src/rtl/form/field/File.js",
      "requires": [],
      "uses": [],
      "idx": 539
    },
    {
      "path": "classic/classic/src/form/field/Hidden.js",
      "requires": [
        394
      ],
      "uses": [],
      "idx": 540
    },
    {
      "path": "classic/classic/src/picker/Color.js",
      "requires": [
        88,
        125
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "classic/classic/src/layout/component/field/HtmlEditor.js",
      "requires": [
        507
      ],
      "uses": [],
      "idx": 542
    },
    {
      "path": "classic/classic/src/toolbar/Separator.js",
      "requires": [
        376,
        524
      ],
      "uses": [],
      "idx": 543
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/Menu.js",
      "requires": [
        364,
        453,
        543
      ],
      "uses": [
        205,
        350,
        366,
        374,
        385,
        577,
        658
      ],
      "idx": 544
    },
    {
      "path": "classic/classic/src/rtl/layout/container/boxOverflow/Menu.js",
      "requires": [],
      "uses": [],
      "idx": 545
    },
    {
      "path": "classic/classic/src/form/field/HtmlEditor.js",
      "requires": [
        79,
        331,
        374,
        376,
        393,
        470,
        508,
        524,
        541,
        542,
        544
      ],
      "uses": [
        1,
        80,
        125,
        205,
        240,
        350,
        366,
        385,
        577
      ],
      "idx": 546
    },
    {
      "path": "classic/classic/src/form/field/Tag.js",
      "requires": [
        180,
        217,
        398,
        531
      ],
      "uses": [
        48,
        88
      ],
      "idx": 547
    },
    {
      "path": "classic/classic/src/picker/Time.js",
      "requires": [
        180,
        530
      ],
      "uses": [
        48
      ],
      "idx": 548
    },
    {
      "path": "classic/classic/src/form/field/Time.js",
      "requires": [
        522,
        531,
        534,
        548
      ],
      "uses": [
        80,
        88,
        205,
        399,
        523
      ],
      "idx": 549
    },
    {
      "path": "classic/classic/src/form/field/Trigger.js",
      "requires": [
        240,
        365,
        444
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "classic/classic/src/grid/CellEditor.js",
      "requires": [
        343
      ],
      "uses": [],
      "idx": 551
    },
    {
      "path": "classic/classic/src/rtl/grid/CellEditor.js",
      "requires": [],
      "uses": [],
      "idx": 552
    },
    {
      "path": "classic/classic/src/grid/ColumnManager.js",
      "requires": [],
      "uses": [],
      "idx": 553
    },
    {
      "path": "classic/classic/src/grid/RowEditorButtons.js",
      "requires": [
        341
      ],
      "uses": [
        205,
        350,
        389,
        453
      ],
      "idx": 554
    },
    {
      "path": "classic/classic/src/grid/RowEditor.js",
      "requires": [
        360,
        468,
        513,
        554
      ],
      "uses": [
        76,
        205,
        339,
        341,
        350,
        385,
        395,
        404
      ],
      "idx": 555
    },
    {
      "path": "classic/classic/src/grid/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 556
    },
    {
      "path": "classic/classic/src/view/DropZone.js",
      "requires": [
        429
      ],
      "uses": [
        125,
        205,
        350
      ],
      "idx": 557
    },
    {
      "path": "classic/classic/src/grid/ViewDropZone.js",
      "requires": [
        557
      ],
      "uses": [],
      "idx": 558
    },
    {
      "path": "classic/classic/src/grid/column/Action.js",
      "requires": [
        434
      ],
      "uses": [
        47
      ],
      "idx": 559
    },
    {
      "path": "classic/classic/src/grid/column/Boolean.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "classic/classic/src/grid/column/Check.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "classic/classic/src/grid/column/Date.js",
      "requires": [
        434
      ],
      "uses": [
        79
      ],
      "idx": 562
    },
    {
      "path": "classic/classic/src/grid/column/Number.js",
      "requires": [
        79,
        434
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "classic/classic/src/grid/column/RowNumberer.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 564
    },
    {
      "path": "classic/classic/src/grid/column/Template.js",
      "requires": [
        88,
        434
      ],
      "uses": [
        561
      ],
      "idx": 565
    },
    {
      "path": "classic/classic/src/grid/column/Widget.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 566
    },
    {
      "path": "classic/classic/src/grid/feature/Feature.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 567
    },
    {
      "path": "classic/classic/src/grid/feature/AbstractSummary.js",
      "requires": [
        567
      ],
      "uses": [],
      "idx": 568
    },
    {
      "path": "classic/classic/src/grid/feature/GroupStore.js",
      "requires": [
        49
      ],
      "uses": [
        135
      ],
      "idx": 569
    },
    {
      "path": "classic/classic/src/grid/feature/Grouping.js",
      "requires": [
        567,
        568,
        569
      ],
      "uses": [
        88,
        163,
        432
      ],
      "idx": 570
    },
    {
      "path": "classic/classic/src/grid/feature/GroupingSummary.js",
      "requires": [
        570
      ],
      "uses": [],
      "idx": 571
    },
    {
      "path": "classic/classic/src/grid/feature/RowBody.js",
      "requires": [
        567
      ],
      "uses": [
        88
      ],
      "idx": 572
    },
    {
      "path": "classic/classic/src/grid/feature/Summary.js",
      "requires": [
        568
      ],
      "uses": [
        88,
        125,
        163,
        205,
        350
      ],
      "idx": 573
    },
    {
      "path": "classic/classic/src/menu/Item.js",
      "requires": [
        125,
        233
      ],
      "uses": [
        452,
        470
      ],
      "idx": 574
    },
    {
      "path": "classic/classic/src/menu/CheckItem.js",
      "requires": [
        574
      ],
      "uses": [
        452
      ],
      "idx": 575
    },
    {
      "path": "classic/classic/src/menu/Separator.js",
      "requires": [
        574
      ],
      "uses": [],
      "idx": 576
    },
    {
      "path": "classic/classic/src/menu/Menu.js",
      "requires": [
        361,
        374,
        389,
        452,
        574,
        575,
        576
      ],
      "uses": [
        11,
        47,
        205,
        350
      ],
      "idx": 577
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Base.js",
      "requires": [
        93,
        205,
        366,
        374,
        385,
        577
      ],
      "uses": [
        1,
        48
      ],
      "idx": 578
    },
    {
      "path": "classic/classic/src/grid/filters/filter/SingleFilter.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 579
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Boolean.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 580
    },
    {
      "path": "classic/classic/src/grid/filters/filter/TriFilter.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Date.js",
      "requires": [
        205,
        350,
        575,
        581
      ],
      "uses": [
        533,
        577
      ],
      "idx": 582
    },
    {
      "path": "classic/classic/src/grid/filters/filter/List.js",
      "requires": [
        579
      ],
      "uses": [
        180,
        183
      ],
      "idx": 583
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Number.js",
      "requires": [
        205,
        350,
        526,
        581
      ],
      "uses": [
        528
      ],
      "idx": 584
    },
    {
      "path": "classic/classic/src/grid/filters/filter/String.js",
      "requires": [
        205,
        350,
        444,
        579
      ],
      "uses": [],
      "idx": 585
    },
    {
      "path": "classic/classic/src/grid/filters/Filters.js",
      "requires": [
        322,
        347,
        578,
        579,
        580,
        581,
        582,
        583,
        584,
        585
      ],
      "uses": [
        93
      ],
      "idx": 586
    },
    {
      "path": "classic/classic/src/grid/locking/HeaderContainer.js",
      "requires": [
        432,
        553
      ],
      "uses": [],
      "idx": 587
    },
    {
      "path": "classic/classic/src/grid/locking/View.js",
      "requires": [
        49,
        122,
        125,
        347,
        402,
        408
      ],
      "uses": [
        11,
        348,
        404,
        438,
        440
      ],
      "idx": 588
    },
    {
      "path": "classic/classic/src/grid/locking/Lockable.js",
      "requires": [
        125,
        408,
        432,
        587,
        588
      ],
      "uses": [
        1,
        183,
        205,
        339,
        350,
        369,
        370
      ],
      "idx": 589
    },
    {
      "path": "classic/classic/src/grid/plugin/BufferedRenderer.js",
      "requires": [
        322
      ],
      "uses": [
        1,
        406
      ],
      "idx": 590
    },
    {
      "path": "classic/classic/src/grid/plugin/Editing.js",
      "requires": [
        4,
        322,
        360,
        394,
        408,
        434
      ],
      "uses": [
        11,
        205,
        350,
        404
      ],
      "idx": 591
    },
    {
      "path": "classic/classic/src/grid/plugin/CellEditing.js",
      "requires": [
        1,
        551,
        591
      ],
      "uses": [
        53,
        205,
        342,
        350,
        404
      ],
      "idx": 592
    },
    {
      "path": "classic/classic/src/plugin/AbstractClipboard.js",
      "requires": [
        322,
        359
      ],
      "uses": [
        47
      ],
      "idx": 593
    },
    {
      "path": "classic/classic/src/grid/plugin/Clipboard.js",
      "requires": [
        79,
        330,
        593
      ],
      "uses": [
        404
      ],
      "idx": 594
    },
    {
      "path": "classic/classic/src/grid/plugin/DragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        558,
        660
      ],
      "idx": 595
    },
    {
      "path": "classic/classic/src/grid/plugin/RowEditing.js",
      "requires": [
        555,
        591
      ],
      "uses": [],
      "idx": 596
    },
    {
      "path": "classic/classic/src/rtl/grid/plugin/RowEditing.js",
      "requires": [],
      "uses": [],
      "idx": 597
    },
    {
      "path": "classic/classic/src/grid/plugin/RowExpander.js",
      "requires": [
        322,
        572
      ],
      "uses": [
        88,
        434
      ],
      "idx": 598
    },
    {
      "path": "classic/classic/src/grid/property/Grid.js",
      "requires": [
        410
      ],
      "uses": [
        11,
        88,
        163,
        205,
        342,
        350,
        394,
        408,
        444,
        526,
        528,
        531,
        534,
        551,
        592,
        600,
        603
      ],
      "idx": 599
    },
    {
      "path": "classic/classic/src/grid/property/HeaderContainer.js",
      "requires": [
        79,
        432
      ],
      "uses": [],
      "idx": 600
    },
    {
      "path": "classic/classic/src/grid/property/Property.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 601
    },
    {
      "path": "classic/classic/src/grid/property/Reader.js",
      "requires": [
        165
      ],
      "uses": [
        164
      ],
      "idx": 602
    },
    {
      "path": "classic/classic/src/grid/property/Store.js",
      "requires": [
        169,
        180,
        601,
        602
      ],
      "uses": [
        175
      ],
      "idx": 603
    },
    {
      "path": "classic/classic/src/grid/selection/Selection.js",
      "requires": [],
      "uses": [],
      "idx": 604
    },
    {
      "path": "classic/classic/src/grid/selection/Cells.js",
      "requires": [
        604
      ],
      "uses": [
        404
      ],
      "idx": 605
    },
    {
      "path": "classic/classic/src/grid/selection/Columns.js",
      "requires": [
        604
      ],
      "uses": [
        404
      ],
      "idx": 606
    },
    {
      "path": "classic/classic/src/grid/selection/Replicator.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 607
    },
    {
      "path": "classic/classic/src/grid/selection/Rows.js",
      "requires": [
        135,
        604
      ],
      "uses": [
        404
      ],
      "idx": 608
    },
    {
      "path": "classic/classic/src/grid/selection/SelectionExtender.js",
      "requires": [
        420
      ],
      "uses": [
        47,
        331
      ],
      "idx": 609
    },
    {
      "path": "classic/classic/src/grid/selection/SpreadsheetModel.js",
      "requires": [
        398,
        564,
        604,
        605,
        606,
        608,
        609
      ],
      "uses": [
        205,
        339,
        404,
        426,
        433
      ],
      "idx": 610
    },
    {
      "path": "classic/classic/src/util/Queue.js",
      "requires": [],
      "uses": [],
      "idx": 611
    },
    {
      "path": "classic/classic/src/layout/ContextItem.js",
      "requires": [],
      "uses": [
        53,
        64,
        70,
        336
      ],
      "idx": 612
    },
    {
      "path": "classic/classic/src/rtl/layout/ContextItem.js",
      "requires": [],
      "uses": [],
      "idx": 613
    },
    {
      "path": "classic/classic/src/layout/Context.js",
      "requires": [
        64,
        70,
        321,
        337,
        611,
        612
      ],
      "uses": [],
      "idx": 614
    },
    {
      "path": "classic/classic/src/layout/SizePolicy.js",
      "requires": [],
      "uses": [],
      "idx": 615
    },
    {
      "path": "classic/classic/src/layout/component/FieldSet.js",
      "requires": [
        456
      ],
      "uses": [],
      "idx": 616
    },
    {
      "path": "classic/classic/src/layout/container/Absolute.js",
      "requires": [
        483
      ],
      "uses": [],
      "idx": 617
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Absolute.js",
      "requires": [],
      "uses": [],
      "idx": 618
    },
    {
      "path": "classic/classic/src/layout/container/Accordion.js",
      "requires": [
        374
      ],
      "uses": [],
      "idx": 619
    },
    {
      "path": "classic/classic/src/layout/container/Center.js",
      "requires": [
        396
      ],
      "uses": [],
      "idx": 620
    },
    {
      "path": "classic/classic/src/layout/container/Form.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 621
    },
    {
      "path": "classic/classic/src/layout/container/SegmentedButton.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 622
    },
    {
      "path": "classic/classic/src/menu/ColorPicker.js",
      "requires": [
        541,
        577
      ],
      "uses": [
        205,
        350,
        452
      ],
      "idx": 623
    },
    {
      "path": "classic/classic/src/menu/DatePicker.js",
      "requires": [
        533,
        577
      ],
      "uses": [
        205,
        350,
        452
      ],
      "idx": 624
    },
    {
      "path": "classic/classic/src/panel/Pinnable.js",
      "requires": [
        0
      ],
      "uses": [
        205,
        350,
        358
      ],
      "idx": 625
    },
    {
      "path": "classic/classic/src/plugin/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 626
    },
    {
      "path": "classic/classic/src/resizer/BorderSplitterTracker.js",
      "requires": [
        25,
        488
      ],
      "uses": [],
      "idx": 627
    },
    {
      "path": "classic/classic/src/rtl/resizer/BorderSplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 628
    },
    {
      "path": "classic/classic/src/resizer/Handle.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 629
    },
    {
      "path": "classic/classic/src/resizer/ResizeTracker.js",
      "requires": [
        420
      ],
      "uses": [],
      "idx": 630
    },
    {
      "path": "classic/classic/src/rtl/resizer/ResizeTracker.js",
      "requires": [],
      "uses": [],
      "idx": 631
    },
    {
      "path": "classic/classic/src/resizer/Resizer.js",
      "requires": [
        49
      ],
      "uses": [
        47,
        80,
        125,
        240,
        630
      ],
      "idx": 632
    },
    {
      "path": "classic/classic/src/selection/CellModel.js",
      "requires": [
        399,
        404
      ],
      "uses": [],
      "idx": 633
    },
    {
      "path": "classic/classic/src/selection/CheckboxModel.js",
      "requires": [
        416
      ],
      "uses": [
        205,
        339,
        404,
        433,
        434
      ],
      "idx": 634
    },
    {
      "path": "classic/classic/src/slider/Thumb.js",
      "requires": [
        79,
        420
      ],
      "uses": [
        70
      ],
      "idx": 635
    },
    {
      "path": "classic/classic/src/slider/Tip.js",
      "requires": [
        467
      ],
      "uses": [],
      "idx": 636
    },
    {
      "path": "classic/classic/src/slider/Multi.js",
      "requires": [
        79,
        80,
        394,
        635,
        636
      ],
      "uses": [
        240
      ],
      "idx": 637
    },
    {
      "path": "classic/classic/src/rtl/slider/Multi.js",
      "requires": [],
      "uses": [],
      "idx": 638
    },
    {
      "path": "classic/classic/src/slider/Single.js",
      "requires": [
        637
      ],
      "uses": [],
      "idx": 639
    },
    {
      "path": "classic/classic/src/slider/Widget.js",
      "requires": [
        84,
        637
      ],
      "uses": [
        70,
        79
      ],
      "idx": 640
    },
    {
      "path": "classic/classic/src/sparkline/Shape.js",
      "requires": [],
      "uses": [],
      "idx": 641
    },
    {
      "path": "classic/classic/src/sparkline/CanvasBase.js",
      "requires": [
        641
      ],
      "uses": [],
      "idx": 642
    },
    {
      "path": "classic/classic/src/sparkline/CanvasCanvas.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 643
    },
    {
      "path": "classic/classic/src/sparkline/VmlCanvas.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "classic/classic/src/sparkline/Base.js",
      "requires": [
        84,
        88,
        205,
        339,
        385,
        468,
        643,
        644
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "classic/classic/src/sparkline/BarBase.js",
      "requires": [
        645
      ],
      "uses": [],
      "idx": 646
    },
    {
      "path": "classic/classic/src/sparkline/RangeMap.js",
      "requires": [],
      "uses": [],
      "idx": 647
    },
    {
      "path": "classic/classic/src/sparkline/Bar.js",
      "requires": [
        88,
        646,
        647
      ],
      "uses": [],
      "idx": 648
    },
    {
      "path": "classic/classic/src/sparkline/Box.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 649
    },
    {
      "path": "classic/classic/src/sparkline/Bullet.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 650
    },
    {
      "path": "classic/classic/src/sparkline/Discrete.js",
      "requires": [
        88,
        646
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "classic/classic/src/sparkline/Line.js",
      "requires": [
        88,
        645,
        647
      ],
      "uses": [],
      "idx": 652
    },
    {
      "path": "classic/classic/src/sparkline/Pie.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 653
    },
    {
      "path": "classic/classic/src/sparkline/TriState.js",
      "requires": [
        88,
        646,
        647
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "classic/classic/src/state/CookieProvider.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 655
    },
    {
      "path": "classic/classic/src/state/LocalStorageProvider.js",
      "requires": [
        119,
        329
      ],
      "uses": [],
      "idx": 656
    },
    {
      "path": "classic/classic/src/toolbar/Breadcrumb.js",
      "requires": [
        237,
        341,
        361,
        473
      ],
      "uses": [
        183
      ],
      "idx": 657
    },
    {
      "path": "classic/classic/src/toolbar/Fill.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 658
    },
    {
      "path": "classic/classic/src/toolbar/Spacer.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "classic/classic/src/view/DragZone.js",
      "requires": [
        423
      ],
      "uses": [
        80
      ],
      "idx": 660
    },
    {
      "path": "classic/classic/src/tree/ViewDragZone.js",
      "requires": [
        660
      ],
      "uses": [
        80
      ],
      "idx": 661
    },
    {
      "path": "classic/classic/src/tree/ViewDropZone.js",
      "requires": [
        557
      ],
      "uses": [],
      "idx": 662
    },
    {
      "path": "classic/classic/src/tree/plugin/TreeViewDragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        661,
        662
      ],
      "idx": 663
    },
    {
      "path": "classic/classic/src/util/CSS.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 664
    },
    {
      "path": "classic/classic/src/util/Cookies.js",
      "requires": [],
      "uses": [],
      "idx": 665
    },
    {
      "path": "classic/classic/src/view/MultiSelectorSearch.js",
      "requires": [
        389
      ],
      "uses": [
        48,
        183,
        205,
        350,
        385,
        396,
        410,
        444
      ],
      "idx": 666
    },
    {
      "path": "classic/classic/src/view/MultiSelector.js",
      "requires": [
        205,
        385,
        396,
        410,
        666
      ],
      "uses": [],
      "idx": 667
    },
    {
      "path": "classic/classic/src/window/Toast.js",
      "requires": [
        466
      ],
      "uses": [
        1
      ],
      "idx": 668
    },
    {
      "path": "packages/charts/classic/src/chart/LegendBase.js",
      "requires": [
        403
      ],
      "uses": [],
      "idx": 669
    },
    {
      "path": "packages/charts/classic/src/draw/ContainerBase.js",
      "requires": [
        389,
        466
      ],
      "uses": [
        205,
        339,
        341,
        346,
        350,
        372,
        385
      ],
      "idx": 670
    },
    {
      "path": "packages/charts/classic/src/draw/SurfaceBase.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 671
    },
    {
      "path": "packages/charts/src/draw/Color.js",
      "requires": [],
      "uses": [],
      "idx": 672
    },
    {
      "path": "packages/charts/src/draw/sprite/AnimationParser.js",
      "requires": [
        672
      ],
      "uses": [
        687
      ],
      "idx": 673
    },
    {
      "path": "packages/charts/src/draw/Draw.js",
      "requires": [],
      "uses": [],
      "idx": 674
    },
    {
      "path": "packages/charts/src/draw/gradient/Gradient.js",
      "requires": [
        672
      ],
      "uses": [],
      "idx": 675
    },
    {
      "path": "packages/charts/src/draw/gradient/GradientDefinition.js",
      "requires": [],
      "uses": [],
      "idx": 676
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeParser.js",
      "requires": [
        672,
        676
      ],
      "uses": [
        675,
        710,
        711
      ],
      "idx": 677
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeDefinition.js",
      "requires": [
        673,
        677
      ],
      "uses": [
        674,
        679
      ],
      "idx": 678
    },
    {
      "path": "packages/charts/src/draw/Matrix.js",
      "requires": [],
      "uses": [],
      "idx": 679
    },
    {
      "path": "packages/charts/src/draw/modifier/Modifier.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 680
    },
    {
      "path": "packages/charts/src/draw/modifier/Target.js",
      "requires": [
        679,
        680
      ],
      "uses": [],
      "idx": 681
    },
    {
      "path": "packages/charts/src/draw/TimingFunctions.js",
      "requires": [],
      "uses": [],
      "idx": 682
    },
    {
      "path": "packages/charts/src/draw/Animator.js",
      "requires": [],
      "uses": [
        10,
        674
      ],
      "idx": 683
    },
    {
      "path": "packages/charts/src/draw/modifier/Animation.js",
      "requires": [
        680,
        682,
        683
      ],
      "uses": [],
      "idx": 684
    },
    {
      "path": "packages/charts/src/draw/modifier/Highlight.js",
      "requires": [
        680
      ],
      "uses": [],
      "idx": 685
    },
    {
      "path": "packages/charts/src/draw/sprite/Sprite.js",
      "requires": [
        4,
        674,
        675,
        678,
        681,
        684,
        685
      ],
      "uses": [
        680
      ],
      "idx": 686
    },
    {
      "path": "packages/charts/src/draw/Path.js",
      "requires": [
        674
      ],
      "uses": [],
      "idx": 687
    },
    {
      "path": "packages/charts/src/draw/overrides/Path.js",
      "requires": [],
      "uses": [
        791
      ],
      "idx": 688
    },
    {
      "path": "packages/charts/src/draw/sprite/Path.js",
      "requires": [
        674,
        686,
        687
      ],
      "uses": [],
      "idx": 689
    },
    {
      "path": "packages/charts/src/draw/overrides/sprite/Path.js",
      "requires": [
        672
      ],
      "uses": [
        686
      ],
      "idx": 690
    },
    {
      "path": "packages/charts/src/draw/sprite/Circle.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 691
    },
    {
      "path": "packages/charts/src/draw/sprite/Arc.js",
      "requires": [
        691
      ],
      "uses": [],
      "idx": 692
    },
    {
      "path": "packages/charts/src/draw/sprite/Arrow.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 693
    },
    {
      "path": "packages/charts/src/draw/sprite/Composite.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 694
    },
    {
      "path": "packages/charts/src/draw/sprite/Cross.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 695
    },
    {
      "path": "packages/charts/src/draw/sprite/Diamond.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 696
    },
    {
      "path": "packages/charts/src/draw/sprite/Ellipse.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 697
    },
    {
      "path": "packages/charts/src/draw/sprite/EllipticalArc.js",
      "requires": [
        697
      ],
      "uses": [],
      "idx": 698
    },
    {
      "path": "packages/charts/src/draw/sprite/Rect.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 699
    },
    {
      "path": "packages/charts/src/draw/sprite/Image.js",
      "requires": [
        699
      ],
      "uses": [],
      "idx": 700
    },
    {
      "path": "packages/charts/src/draw/sprite/Instancing.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 701
    },
    {
      "path": "packages/charts/src/draw/sprite/Line.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 702
    },
    {
      "path": "packages/charts/src/draw/sprite/Plus.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 703
    },
    {
      "path": "packages/charts/src/draw/sprite/Sector.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 704
    },
    {
      "path": "packages/charts/src/draw/sprite/Square.js",
      "requires": [
        699
      ],
      "uses": [],
      "idx": 705
    },
    {
      "path": "packages/charts/src/draw/TextMeasurer.js",
      "requires": [
        332
      ],
      "uses": [
        47
      ],
      "idx": 706
    },
    {
      "path": "packages/charts/src/draw/sprite/Text.js",
      "requires": [
        672,
        686,
        706
      ],
      "uses": [
        47,
        679
      ],
      "idx": 707
    },
    {
      "path": "packages/charts/src/draw/sprite/Tick.js",
      "requires": [
        702
      ],
      "uses": [],
      "idx": 708
    },
    {
      "path": "packages/charts/src/draw/sprite/Triangle.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 709
    },
    {
      "path": "packages/charts/src/draw/gradient/Linear.js",
      "requires": [
        672,
        675
      ],
      "uses": [
        674
      ],
      "idx": 710
    },
    {
      "path": "packages/charts/src/draw/gradient/Radial.js",
      "requires": [
        675
      ],
      "uses": [],
      "idx": 711
    },
    {
      "path": "packages/charts/src/draw/Surface.js",
      "requires": [
        671,
        673,
        674,
        675,
        676,
        677,
        678,
        679,
        686,
        689,
        691,
        692,
        693,
        694,
        695,
        696,
        697,
        698,
        699,
        700,
        701,
        702,
        703,
        704,
        705,
        707,
        708,
        709,
        710,
        711
      ],
      "uses": [
        47,
        717
      ],
      "idx": 712
    },
    {
      "path": "packages/charts/src/draw/overrides/Surface.js",
      "requires": [],
      "uses": [
        686
      ],
      "idx": 713
    },
    {
      "path": "packages/charts/src/draw/engine/SvgContext.js",
      "requires": [
        672
      ],
      "uses": [
        679,
        687
      ],
      "idx": 714
    },
    {
      "path": "packages/charts/src/draw/engine/Svg.js",
      "requires": [
        712,
        714
      ],
      "uses": [],
      "idx": 715
    },
    {
      "path": "packages/charts/src/draw/engine/excanvas.js",
      "requires": [],
      "uses": [],
      "idx": 716
    },
    {
      "path": "packages/charts/src/draw/engine/Canvas.js",
      "requires": [
        672,
        683,
        712,
        716
      ],
      "uses": [
        47,
        679
      ],
      "idx": 717
    },
    {
      "path": "packages/charts/src/draw/Container.js",
      "requires": [
        670,
        676,
        712,
        715,
        717
      ],
      "uses": [
        78,
        240,
        683
      ],
      "idx": 718
    },
    {
      "path": "packages/charts/classic/src/chart/TipSurface.js",
      "requires": [
        718
      ],
      "uses": [],
      "idx": 719
    },
    {
      "path": "packages/charts/src/chart/interactions/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        11
      ],
      "idx": 720
    },
    {
      "path": "packages/charts/classic/src/chart/interactions/ItemInfo.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 721
    },
    {
      "path": "packages/charts/src/chart/theme/Base.js",
      "requires": [
        93,
        672
      ],
      "uses": [],
      "idx": 722
    },
    {
      "path": "packages/charts/src/chart/theme/Default.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 723
    },
    {
      "path": "packages/charts/src/chart/Markers.js",
      "requires": [
        701
      ],
      "uses": [],
      "idx": 724
    },
    {
      "path": "packages/charts/src/chart/label/Callout.js",
      "requires": [
        680
      ],
      "uses": [],
      "idx": 725
    },
    {
      "path": "packages/charts/src/chart/label/Label.js",
      "requires": [
        707,
        725
      ],
      "uses": [],
      "idx": 726
    },
    {
      "path": "packages/charts/src/chart/series/Series.js",
      "requires": [
        4,
        82,
        468,
        724,
        726
      ],
      "uses": [
        11,
        183,
        205,
        339,
        385,
        672,
        701
      ],
      "idx": 727
    },
    {
      "path": "packages/charts/src/chart/MarkerHolder.js",
      "requires": [
        0
      ],
      "uses": [
        679
      ],
      "idx": 728
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis.js",
      "requires": [
        686,
        707,
        728
      ],
      "uses": [
        674,
        679
      ],
      "idx": 729
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Segmenter.js",
      "requires": [],
      "uses": [],
      "idx": 730
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Names.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 731
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Numeric.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 732
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Time.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 733
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Layout.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 734
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Discrete.js",
      "requires": [
        734
      ],
      "uses": [],
      "idx": 735
    },
    {
      "path": "packages/charts/src/chart/axis/layout/CombineDuplicate.js",
      "requires": [
        735
      ],
      "uses": [],
      "idx": 736
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Continuous.js",
      "requires": [
        734
      ],
      "uses": [],
      "idx": 737
    },
    {
      "path": "packages/charts/src/chart/axis/Axis.js",
      "requires": [
        4,
        729,
        730,
        731,
        732,
        733,
        734,
        735,
        736,
        737
      ],
      "uses": [
        11,
        701,
        707,
        724
      ],
      "idx": 738
    },
    {
      "path": "packages/charts/src/chart/Legend.js",
      "requires": [
        669
      ],
      "uses": [],
      "idx": 739
    },
    {
      "path": "packages/charts/src/chart/AbstractChart.js",
      "requires": [
        180,
        183,
        718,
        720,
        723,
        727,
        738,
        739,
        741
      ],
      "uses": [
        11,
        79,
        93,
        683
      ],
      "idx": 740
    },
    {
      "path": "packages/charts/classic/overrides/AbstractChart.js",
      "requires": [],
      "uses": [
        205,
        385,
        389
      ],
      "idx": 741
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 742
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 743
    },
    {
      "path": "packages/charts/src/chart/CartesianChart.js",
      "requires": [
        740,
        742,
        743
      ],
      "uses": [
        79
      ],
      "idx": 744
    },
    {
      "path": "packages/charts/src/chart/grid/CircularGrid.js",
      "requires": [
        691
      ],
      "uses": [],
      "idx": 745
    },
    {
      "path": "packages/charts/src/chart/grid/RadialGrid.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 746
    },
    {
      "path": "packages/charts/src/chart/PolarChart.js",
      "requires": [
        740,
        745,
        746
      ],
      "uses": [
        674
      ],
      "idx": 747
    },
    {
      "path": "packages/charts/src/chart/SpaceFillingChart.js",
      "requires": [
        740
      ],
      "uses": [],
      "idx": 748
    },
    {
      "path": "packages/charts/src/chart/axis/Axis3D.js",
      "requires": [
        738
      ],
      "uses": [],
      "idx": 749
    },
    {
      "path": "packages/charts/src/chart/axis/Category.js",
      "requires": [
        731,
        736,
        738
      ],
      "uses": [],
      "idx": 750
    },
    {
      "path": "packages/charts/src/chart/axis/Category3D.js",
      "requires": [
        731,
        736,
        749
      ],
      "uses": [],
      "idx": 751
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric.js",
      "requires": [
        732,
        737,
        738
      ],
      "uses": [],
      "idx": 752
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric3D.js",
      "requires": [
        732,
        737,
        749
      ],
      "uses": [],
      "idx": 753
    },
    {
      "path": "packages/charts/src/chart/axis/Time.js",
      "requires": [
        733,
        737,
        752
      ],
      "uses": [],
      "idx": 754
    },
    {
      "path": "packages/charts/src/chart/axis/Time3D.js",
      "requires": [
        733,
        737,
        753
      ],
      "uses": [],
      "idx": 755
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis3D.js",
      "requires": [
        729
      ],
      "uses": [],
      "idx": 756
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid3D.js",
      "requires": [
        742
      ],
      "uses": [],
      "idx": 757
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid3D.js",
      "requires": [
        743
      ],
      "uses": [],
      "idx": 758
    },
    {
      "path": "packages/charts/src/chart/interactions/CrossZoom.js",
      "requires": [
        720
      ],
      "uses": [
        453
      ],
      "idx": 759
    },
    {
      "path": "packages/charts/src/chart/interactions/Crosshair.js",
      "requires": [
        720,
        735,
        742,
        743,
        744
      ],
      "uses": [],
      "idx": 760
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemHighlight.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 761
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemEdit.js",
      "requires": [
        468,
        761
      ],
      "uses": [],
      "idx": 762
    },
    {
      "path": "packages/charts/src/chart/interactions/PanZoom.js",
      "requires": [
        205,
        350,
        453,
        475,
        622,
        683,
        720
      ],
      "uses": [],
      "idx": 763
    },
    {
      "path": "packages/charts/src/chart/interactions/Rotate.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 764
    },
    {
      "path": "packages/charts/src/chart/interactions/RotatePie3D.js",
      "requires": [
        764
      ],
      "uses": [],
      "idx": 765
    },
    {
      "path": "packages/charts/src/chart/plugin/ItemEvents.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 766
    },
    {
      "path": "packages/charts/src/chart/series/Cartesian.js",
      "requires": [
        727
      ],
      "uses": [],
      "idx": 767
    },
    {
      "path": "packages/charts/src/chart/series/StackedCartesian.js",
      "requires": [
        767
      ],
      "uses": [],
      "idx": 768
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Series.js",
      "requires": [
        686,
        728
      ],
      "uses": [],
      "idx": 769
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Cartesian.js",
      "requires": [
        769
      ],
      "uses": [],
      "idx": 770
    },
    {
      "path": "packages/charts/src/chart/series/sprite/StackedCartesian.js",
      "requires": [
        770
      ],
      "uses": [],
      "idx": 771
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Area.js",
      "requires": [
        771
      ],
      "uses": [],
      "idx": 772
    },
    {
      "path": "packages/charts/src/chart/series/Area.js",
      "requires": [
        768,
        772
      ],
      "uses": [],
      "idx": 773
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar.js",
      "requires": [
        771
      ],
      "uses": [
        674
      ],
      "idx": 774
    },
    {
      "path": "packages/charts/src/chart/series/Bar.js",
      "requires": [
        699,
        768,
        774
      ],
      "uses": [],
      "idx": 775
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar3D.js",
      "requires": [
        710,
        774
      ],
      "uses": [],
      "idx": 776
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Box.js",
      "requires": [
        686
      ],
      "uses": [
        672,
        710
      ],
      "idx": 777
    },
    {
      "path": "packages/charts/src/chart/series/Bar3D.js",
      "requires": [
        775,
        776,
        777
      ],
      "uses": [],
      "idx": 778
    },
    {
      "path": "packages/charts/src/draw/LimitedCache.js",
      "requires": [],
      "uses": [],
      "idx": 779
    },
    {
      "path": "packages/charts/src/draw/SegmentTree.js",
      "requires": [],
      "uses": [],
      "idx": 780
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Aggregative.js",
      "requires": [
        770,
        779,
        780
      ],
      "uses": [],
      "idx": 781
    },
    {
      "path": "packages/charts/src/chart/series/sprite/CandleStick.js",
      "requires": [
        781
      ],
      "uses": [
        699
      ],
      "idx": 782
    },
    {
      "path": "packages/charts/src/chart/series/CandleStick.js",
      "requires": [
        767,
        782
      ],
      "uses": [],
      "idx": 783
    },
    {
      "path": "packages/charts/src/chart/series/Polar.js",
      "requires": [
        727
      ],
      "uses": [],
      "idx": 784
    },
    {
      "path": "packages/charts/src/chart/series/Gauge.js",
      "requires": [
        704,
        784
      ],
      "uses": [],
      "idx": 785
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Line.js",
      "requires": [
        781
      ],
      "uses": [
        674
      ],
      "idx": 786
    },
    {
      "path": "packages/charts/src/chart/series/Line.js",
      "requires": [
        767,
        786
      ],
      "uses": [],
      "idx": 787
    },
    {
      "path": "packages/charts/src/chart/series/sprite/PieSlice.js",
      "requires": [
        704,
        728
      ],
      "uses": [],
      "idx": 788
    },
    {
      "path": "packages/charts/src/chart/series/Pie.js",
      "requires": [
        784,
        788
      ],
      "uses": [],
      "idx": 789
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Pie3DPart.js",
      "requires": [
        689,
        728
      ],
      "uses": [
        672,
        677,
        710,
        711
      ],
      "idx": 790
    },
    {
      "path": "packages/charts/src/draw/PathUtil.js",
      "requires": [
        688,
        690,
        713
      ],
      "uses": [],
      "idx": 791
    },
    {
      "path": "packages/charts/src/chart/series/Pie3D.js",
      "requires": [
        784,
        790,
        791
      ],
      "uses": [
        672
      ],
      "idx": 792
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Polar.js",
      "requires": [
        769
      ],
      "uses": [],
      "idx": 793
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Radar.js",
      "requires": [
        793
      ],
      "uses": [],
      "idx": 794
    },
    {
      "path": "packages/charts/src/chart/series/Radar.js",
      "requires": [
        784,
        794
      ],
      "uses": [],
      "idx": 795
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Scatter.js",
      "requires": [
        770
      ],
      "uses": [],
      "idx": 796
    },
    {
      "path": "packages/charts/src/chart/series/Scatter.js",
      "requires": [
        767,
        796
      ],
      "uses": [],
      "idx": 797
    },
    {
      "path": "packages/charts/src/chart/theme/Blue.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 798
    },
    {
      "path": "packages/charts/src/chart/theme/BlueGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 799
    },
    {
      "path": "packages/charts/src/chart/theme/Category1.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 800
    },
    {
      "path": "packages/charts/src/chart/theme/Category1Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 801
    },
    {
      "path": "packages/charts/src/chart/theme/Category2.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 802
    },
    {
      "path": "packages/charts/src/chart/theme/Category2Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 803
    },
    {
      "path": "packages/charts/src/chart/theme/Category3.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 804
    },
    {
      "path": "packages/charts/src/chart/theme/Category3Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 805
    },
    {
      "path": "packages/charts/src/chart/theme/Category4.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 806
    },
    {
      "path": "packages/charts/src/chart/theme/Category4Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 807
    },
    {
      "path": "packages/charts/src/chart/theme/Category5.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 808
    },
    {
      "path": "packages/charts/src/chart/theme/Category5Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 809
    },
    {
      "path": "packages/charts/src/chart/theme/Category6.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 810
    },
    {
      "path": "packages/charts/src/chart/theme/Category6Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 811
    },
    {
      "path": "packages/charts/src/chart/theme/DefaultGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 812
    },
    {
      "path": "packages/charts/src/chart/theme/Green.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 813
    },
    {
      "path": "packages/charts/src/chart/theme/GreenGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 814
    },
    {
      "path": "packages/charts/src/chart/theme/Midnight.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 815
    },
    {
      "path": "packages/charts/src/chart/theme/Muted.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 816
    },
    {
      "path": "packages/charts/src/chart/theme/Purple.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 817
    },
    {
      "path": "packages/charts/src/chart/theme/PurpleGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 818
    },
    {
      "path": "packages/charts/src/chart/theme/Red.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 819
    },
    {
      "path": "packages/charts/src/chart/theme/RedGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 820
    },
    {
      "path": "packages/charts/src/chart/theme/Sky.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 821
    },
    {
      "path": "packages/charts/src/chart/theme/SkyGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 822
    },
    {
      "path": "packages/charts/src/chart/theme/Yellow.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 823
    },
    {
      "path": "packages/charts/src/chart/theme/YellowGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 824
    },
    {
      "path": "packages/charts/src/draw/Point.js",
      "requires": [
        674,
        679
      ],
      "uses": [],
      "idx": 825
    },
    {
      "path": "packages/charts/src/draw/plugin/SpriteEvents.js",
      "requires": [
        322,
        791
      ],
      "uses": [],
      "idx": 826
    },
    {
      "path": "packages/ux/classic/src/BoxReorderer.js",
      "requires": [
        49,
        378
      ],
      "uses": [
        64
      ],
      "idx": 827
    },
    {
      "path": "packages/ux/classic/src/CellDragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        27,
        429,
        660
      ],
      "idx": 828
    },
    {
      "path": "packages/ux/classic/src/DataTip.js",
      "requires": [
        322,
        468
      ],
      "uses": [
        391
      ],
      "idx": 829
    },
    {
      "path": "packages/ux/classic/src/DataView/Animated.js",
      "requires": [],
      "uses": [
        64,
        72,
        80,
        331
      ],
      "idx": 830
    },
    {
      "path": "packages/ux/classic/src/DataView/DragSelector.js",
      "requires": [
        25,
        420
      ],
      "uses": [],
      "idx": 831
    },
    {
      "path": "packages/ux/classic/src/DataView/Draggable.js",
      "requires": [
        423
      ],
      "uses": [
        180,
        403
      ],
      "idx": 832
    },
    {
      "path": "packages/ux/classic/src/DataView/LabelEditor.js",
      "requires": [
        343,
        444
      ],
      "uses": [
        205,
        350
      ],
      "idx": 833
    },
    {
      "path": "packages/ux/classic/src/DataViewTransition.js",
      "requires": [],
      "uses": [
        80,
        331
      ],
      "idx": 834
    },
    {
      "path": "packages/ux/classic/src/Explorer.js",
      "requires": [
        205,
        350,
        372,
        385,
        389,
        396,
        399,
        400,
        403,
        441,
        447,
        657
      ],
      "uses": [
        180
      ],
      "idx": 835
    },
    {
      "path": "packages/ux/classic/src/FieldReplicator.js",
      "requires": [],
      "uses": [],
      "idx": 836
    },
    {
      "path": "packages/ux/classic/src/GMapPanel.js",
      "requires": [
        389,
        504
      ],
      "uses": [],
      "idx": 837
    },
    {
      "path": "packages/ux/classic/src/GroupTabRenderer.js",
      "requires": [
        88,
        322
      ],
      "uses": [],
      "idx": 838
    },
    {
      "path": "packages/ux/classic/src/GroupTabPanel.js",
      "requires": [
        341,
        441,
        838
      ],
      "uses": [
        169,
        174,
        175,
        205,
        237,
        339,
        350,
        385,
        396,
        433,
        436,
        449
      ],
      "idx": 839
    },
    {
      "path": "packages/ux/classic/src/IFrame.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 840
    },
    {
      "path": "packages/ux/classic/src/statusbar/StatusBar.js",
      "requires": [
        376,
        525
      ],
      "uses": [
        205,
        350
      ],
      "idx": 841
    },
    {
      "path": "packages/ux/classic/src/LiveSearchGridPanel.js",
      "requires": [
        410,
        412,
        444,
        525,
        841
      ],
      "uses": [
        80,
        205,
        350,
        453,
        544
      ],
      "idx": 842
    },
    {
      "path": "packages/ux/classic/src/PreviewPlugin.js",
      "requires": [
        322,
        572
      ],
      "uses": [],
      "idx": 843
    },
    {
      "path": "packages/ux/classic/src/ProgressBarPager.js",
      "requires": [
        352
      ],
      "uses": [
        80,
        205,
        351
      ],
      "idx": 844
    },
    {
      "path": "packages/ux/classic/src/RowExpander.js",
      "requires": [
        598
      ],
      "uses": [],
      "idx": 845
    },
    {
      "path": "packages/ux/classic/src/SlidingPager.js",
      "requires": [
        636,
        639
      ],
      "uses": [
        80,
        205,
        350
      ],
      "idx": 846
    },
    {
      "path": "packages/ux/classic/src/Spotlight.js",
      "requires": [],
      "uses": [
        47,
        92
      ],
      "idx": 847
    },
    {
      "path": "packages/ux/classic/src/TabCloseMenu.js",
      "requires": [
        49,
        322
      ],
      "uses": [
        205,
        366,
        374,
        385,
        577
      ],
      "idx": 848
    },
    {
      "path": "packages/ux/classic/src/TabReorderer.js",
      "requires": [
        827
      ],
      "uses": [],
      "idx": 849
    },
    {
      "path": "packages/ux/classic/src/TabScrollerMenu.js",
      "requires": [
        577
      ],
      "uses": [
        47,
        79,
        205,
        366,
        374,
        385
      ],
      "idx": 850
    },
    {
      "path": "packages/ux/classic/src/ToolbarDroppable.js",
      "requires": [],
      "uses": [
        427
      ],
      "idx": 851
    },
    {
      "path": "packages/ux/classic/src/TreePicker.js",
      "requires": [
        521
      ],
      "uses": [
        205,
        385,
        396,
        441
      ],
      "idx": 852
    },
    {
      "path": "packages/ux/classic/src/colorpick/Selection.js",
      "requires": [],
      "uses": [
        854
      ],
      "idx": 853
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorUtils.js",
      "requires": [],
      "uses": [
        88
      ],
      "idx": 854
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorMapController.js",
      "requires": [
        195,
        854
      ],
      "uses": [],
      "idx": 855
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorMap.js",
      "requires": [
        341,
        855
      ],
      "uses": [],
      "idx": 856
    },
    {
      "path": "packages/ux/classic/src/colorpick/SelectorModel.js",
      "requires": [
        218,
        854
      ],
      "uses": [],
      "idx": 857
    },
    {
      "path": "packages/ux/classic/src/colorpick/SelectorController.js",
      "requires": [
        195,
        854
      ],
      "uses": [],
      "idx": 858
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorPreview.js",
      "requires": [
        79,
        88,
        125
      ],
      "uses": [
        854
      ],
      "idx": 859
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderController.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 860
    },
    {
      "path": "packages/ux/classic/src/colorpick/Slider.js",
      "requires": [
        341,
        620,
        860
      ],
      "uses": [],
      "idx": 861
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderAlpha.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 862
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderSaturation.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 863
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderValue.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 864
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderHue.js",
      "requires": [
        861
      ],
      "uses": [],
      "idx": 865
    },
    {
      "path": "packages/ux/classic/src/colorpick/Selector.js",
      "requires": [
        341,
        372,
        444,
        528,
        853,
        856,
        857,
        858,
        859,
        861,
        862,
        863,
        864,
        865
      ],
      "uses": [
        93,
        125,
        205,
        339,
        350,
        374,
        394,
        453,
        526,
        620,
        855,
        860
      ],
      "idx": 866
    },
    {
      "path": "packages/ux/classic/src/colorpick/ButtonController.js",
      "requires": [
        195,
        396,
        466,
        854,
        866
      ],
      "uses": [],
      "idx": 867
    },
    {
      "path": "packages/ux/classic/src/colorpick/Button.js",
      "requires": [
        125,
        205,
        350,
        372,
        385,
        396,
        466,
        853,
        858,
        866,
        867
      ],
      "uses": [
        854
      ],
      "idx": 868
    },
    {
      "path": "packages/ux/classic/src/colorpick/Field.js",
      "requires": [
        205,
        350,
        372,
        385,
        396,
        466,
        521,
        853,
        854,
        858,
        866
      ],
      "uses": [],
      "idx": 869
    },
    {
      "path": "packages/ux/src/google/Api.js",
      "requires": [
        316
      ],
      "uses": [],
      "idx": 870
    },
    {
      "path": "packages/ux/src/google/Feeds.js",
      "requires": [
        870
      ],
      "uses": [],
      "idx": 871
    },
    {
      "path": "packages/ux/classic/src/dashboard/GoogleRssView.js",
      "requires": [
        125,
        468,
        871
      ],
      "uses": [
        47,
        205,
        339,
        385
      ],
      "idx": 872
    },
    {
      "path": "packages/ux/classic/src/dashboard/GoogleRssPart.js",
      "requires": [
        205,
        350,
        494,
        504,
        872
      ],
      "uses": [],
      "idx": 873
    },
    {
      "path": "packages/ux/classic/src/data/PagingMemoryProxy.js",
      "requires": [
        169
      ],
      "uses": [],
      "idx": 874
    },
    {
      "path": "packages/ux/classic/src/dd/CellFieldDropZone.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 875
    },
    {
      "path": "packages/ux/classic/src/dd/PanelFieldDragZone.js",
      "requires": [
        423
      ],
      "uses": [
        391
      ],
      "idx": 876
    },
    {
      "path": "packages/ux/classic/src/desktop/Desktop.js",
      "requires": [
        389
      ],
      "uses": [
        53,
        88,
        205,
        350,
        399,
        400,
        403,
        466,
        577,
        882,
        884
      ],
      "idx": 877
    },
    {
      "path": "packages/ux/classic/src/desktop/App.js",
      "requires": [
        49,
        482,
        877
      ],
      "uses": [
        205,
        350,
        396,
        470
      ],
      "idx": 878
    },
    {
      "path": "packages/ux/classic/src/desktop/Module.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 879
    },
    {
      "path": "packages/ux/classic/src/desktop/ShortcutModel.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 880
    },
    {
      "path": "packages/ux/classic/src/desktop/StartMenu.js",
      "requires": [
        577
      ],
      "uses": [
        376
      ],
      "idx": 881
    },
    {
      "path": "packages/ux/classic/src/desktop/TaskBar.js",
      "requires": [
        369,
        376,
        453,
        525,
        577,
        881
      ],
      "uses": [
        79,
        88,
        205,
        350
      ],
      "idx": 882
    },
    {
      "path": "packages/ux/classic/src/desktop/Video.js",
      "requires": [
        389
      ],
      "uses": [],
      "idx": 883
    },
    {
      "path": "packages/ux/classic/src/desktop/Wallpaper.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 884
    },
    {
      "path": "packages/ux/classic/src/event/RecorderManager.js",
      "requires": [
        389
      ],
      "uses": [
        205,
        350,
        473,
        503,
        525,
        901,
        902
      ],
      "idx": 885
    },
    {
      "path": "packages/ux/classic/src/form/MultiSelect.js",
      "requires": [
        347,
        389,
        393,
        396,
        508,
        530
      ],
      "uses": [
        80,
        205,
        385,
        483,
        557,
        660
      ],
      "idx": 886
    },
    {
      "path": "packages/ux/classic/src/form/ItemSelector.js",
      "requires": [
        453,
        886
      ],
      "uses": [
        205,
        350,
        374,
        376,
        483,
        507,
        544
      ],
      "idx": 887
    },
    {
      "path": "packages/ux/classic/src/form/SearchField.js",
      "requires": [
        444
      ],
      "uses": [
        48,
        183
      ],
      "idx": 888
    },
    {
      "path": "packages/ux/classic/src/grid/SubTable.js",
      "requires": [
        598
      ],
      "uses": [],
      "idx": 889
    },
    {
      "path": "packages/ux/classic/src/grid/TransformGrid.js",
      "requires": [
        410
      ],
      "uses": [],
      "idx": 890
    },
    {
      "path": "packages/ux/classic/src/rating/Picker.js",
      "requires": [
        84
      ],
      "uses": [
        88,
        470
      ],
      "idx": 891
    },
    {
      "path": "packages/ux/classic/src/statusbar/ValidationStatus.js",
      "requires": [
        53,
        125
      ],
      "uses": [
        240
      ],
      "idx": 892
    },
    {
      "path": "packages/ux/src/ajax/Simlet.js",
      "requires": [],
      "uses": [
        896
      ],
      "idx": 893
    },
    {
      "path": "packages/ux/src/ajax/DataSimlet.js",
      "requires": [
        893
      ],
      "uses": [
        178
      ],
      "idx": 894
    },
    {
      "path": "packages/ux/src/ajax/JsonSimlet.js",
      "requires": [
        894
      ],
      "uses": [],
      "idx": 895
    },
    {
      "path": "packages/ux/src/ajax/SimXhr.js",
      "requires": [],
      "uses": [],
      "idx": 896
    },
    {
      "path": "packages/ux/src/ajax/SimManager.js",
      "requires": [
        8,
        893,
        895,
        896
      ],
      "uses": [
        227
      ],
      "idx": 897
    },
    {
      "path": "packages/ux/src/ajax/XmlSimlet.js",
      "requires": [
        894
      ],
      "uses": [
        88
      ],
      "idx": 898
    },
    {
      "path": "packages/ux/src/event/Driver.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 899
    },
    {
      "path": "packages/ux/src/event/Maker.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 900
    },
    {
      "path": "packages/ux/src/event/Player.js",
      "requires": [
        899
      ],
      "uses": [],
      "idx": 901
    },
    {
      "path": "packages/ux/src/event/Recorder.js",
      "requires": [
        899
      ],
      "uses": [
        27
      ],
      "idx": 902
    }
  ],
  "classes": {
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.Action": {
      "idx": 333,
      "alias": [],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 125,
      "alias": [
        "widget.box",
        "widget.component"
      ],
      "alternates": [
        "Ext.AbstractComponent"
      ]
    },
    "Ext.ComponentLoader": {
      "idx": 335,
      "alias": [],
      "alternates": []
    },
    "Ext.ComponentManager": {
      "idx": 11,
      "alias": [],
      "alternates": [
        "Ext.ComponentMgr"
      ]
    },
    "Ext.ComponentQuery": {
      "idx": 14,
      "alias": [],
      "alternates": []
    },
    "Ext.Editor": {
      "idx": 343,
      "alias": [
        "widget.editor"
      ],
      "alternates": []
    },
    "Ext.ElementLoader": {
      "idx": 334,
      "alias": [],
      "alternates": []
    },
    "Ext.EventManager": {
      "idx": 344,
      "alias": [],
      "alternates": []
    },
    "Ext.Evented": {
      "idx": 15,
      "alias": [],
      "alternates": [
        "Ext.EventedBase"
      ]
    },
    "Ext.FocusManager": {
      "idx": 345,
      "alias": [],
      "alternates": [
        "Ext.FocusMgr"
      ]
    },
    "Ext.GlobalEvents": {
      "idx": 76,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 346,
      "alias": [
        "widget.image",
        "widget.imagecomponent"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 348,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.ProgressBar": {
      "idx": 352,
      "alias": [
        "widget.progressbar"
      ],
      "alternates": []
    },
    "Ext.ProgressBarWidget": {
      "idx": 353,
      "alias": [
        "widget.progressbarwidget"
      ],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 80,
      "alias": [],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 84,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 88,
      "alias": [],
      "alternates": []
    },
    "Ext.ZIndexManager": {
      "idx": 340,
      "alias": [],
      "alternates": [
        "Ext.WindowGroup"
      ]
    },
    "Ext.app.Application": {
      "idx": 190,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 189,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 218,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 215,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 216,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentDetail": {
      "idx": 414,
      "alias": [
        "widget.bindinspector-componentdetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentList": {
      "idx": 445,
      "alias": [
        "widget.bindinspector-componentlist"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Container": {
      "idx": 463,
      "alias": [
        "widget.bindinspector-container"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Environment": {
      "idx": 460,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Inspector": {
      "idx": 472,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Util": {
      "idx": 413,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ViewModelDetail": {
      "idx": 461,
      "alias": [
        "widget.bindinspector-viewmodeldetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.noconflict.BaseModel": {
      "idx": 462,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 90,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 219,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 222,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 184,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 194,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 185,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 186,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.button.Button": {
      "idx": 453,
      "alias": [
        "widget.button"
      ],
      "alternates": [
        "Ext.Button"
      ]
    },
    "Ext.button.Cycle": {
      "idx": 474,
      "alias": [
        "widget.cycle"
      ],
      "alternates": [
        "Ext.CycleButton"
      ]
    },
    "Ext.button.Manager": {
      "idx": 451,
      "alias": [],
      "alternates": [
        "Ext.ButtonToggleManager"
      ]
    },
    "Ext.button.Segmented": {
      "idx": 475,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.button.Split": {
      "idx": 473,
      "alias": [
        "widget.splitbutton"
      ],
      "alternates": [
        "Ext.SplitButton"
      ]
    },
    "Ext.chart.AbstractChart": {
      "idx": 740,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.CartesianChart": {
      "idx": 744,
      "alias": [
        "widget.cartesian",
        "widget.chart"
      ],
      "alternates": [
        "Ext.chart.Chart"
      ]
    },
    "Ext.chart.Legend": {
      "idx": 739,
      "alias": [
        "widget.legend"
      ],
      "alternates": []
    },
    "Ext.chart.LegendBase": {
      "idx": 669,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.MarkerHolder": {
      "idx": 728,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.Markers": {
      "idx": 724,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.PolarChart": {
      "idx": 747,
      "alias": [
        "widget.polar"
      ],
      "alternates": []
    },
    "Ext.chart.SpaceFillingChart": {
      "idx": 748,
      "alias": [
        "widget.spacefilling"
      ],
      "alternates": []
    },
    "Ext.chart.TipSurface": {
      "idx": 719,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.Axis": {
      "idx": 738,
      "alias": [
        "widget.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis3D": {
      "idx": 749,
      "alias": [
        "widget.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category": {
      "idx": 750,
      "alias": [
        "axis.category"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category3D": {
      "idx": 751,
      "alias": [
        "axis.category3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric": {
      "idx": 752,
      "alias": [
        "axis.numeric",
        "axis.radial"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric3D": {
      "idx": 753,
      "alias": [
        "axis.numeric3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time": {
      "idx": 754,
      "alias": [
        "axis.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time3D": {
      "idx": 755,
      "alias": [
        "axis.time3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.CombineDuplicate": {
      "idx": 736,
      "alias": [
        "axisLayout.combineDuplicate"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Continuous": {
      "idx": 737,
      "alias": [
        "axisLayout.continuous"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Discrete": {
      "idx": 735,
      "alias": [
        "axisLayout.discrete"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Layout": {
      "idx": 734,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Names": {
      "idx": 731,
      "alias": [
        "segmenter.names"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Numeric": {
      "idx": 732,
      "alias": [
        "segmenter.numeric"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Segmenter": {
      "idx": 730,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Time": {
      "idx": 733,
      "alias": [
        "segmenter.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis": {
      "idx": 729,
      "alias": [
        "sprite.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis3D": {
      "idx": 756,
      "alias": [
        "sprite.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.CircularGrid": {
      "idx": 745,
      "alias": [
        "grid.circular"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid": {
      "idx": 742,
      "alias": [
        "grid.horizontal"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid3D": {
      "idx": 757,
      "alias": [
        "grid.horizontal3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.RadialGrid": {
      "idx": 746,
      "alias": [
        "grid.radial"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid": {
      "idx": 743,
      "alias": [
        "grid.vertical"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid3D": {
      "idx": 758,
      "alias": [
        "grid.vertical3d"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Abstract": {
      "idx": 720,
      "alias": [
        "widget.interaction"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.CrossZoom": {
      "idx": 759,
      "alias": [
        "interaction.crosszoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Crosshair": {
      "idx": 760,
      "alias": [
        "interaction.crosshair"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemEdit": {
      "idx": 762,
      "alias": [
        "interaction.itemedit"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemHighlight": {
      "idx": 761,
      "alias": [
        "interaction.itemhighlight"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemInfo": {
      "idx": 721,
      "alias": [
        "interaction.iteminfo"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.PanZoom": {
      "idx": 763,
      "alias": [
        "interaction.panzoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Rotate": {
      "idx": 764,
      "alias": [
        "interaction.rotate"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.RotatePie3D": {
      "idx": 765,
      "alias": [
        "interaction.rotatePie3d"
      ],
      "alternates": []
    },
    "Ext.chart.label.Callout": {
      "idx": 725,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.label.Label": {
      "idx": 726,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.overrides.AbstractChart": {
      "idx": 741,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.plugin.ItemEvents": {
      "idx": 766,
      "alias": [
        "plugin.chartitemevents"
      ],
      "alternates": []
    },
    "Ext.chart.series.Area": {
      "idx": 773,
      "alias": [
        "series.area"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar": {
      "idx": 775,
      "alias": [
        "series.bar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar3D": {
      "idx": 778,
      "alias": [
        "series.bar3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.CandleStick": {
      "idx": 783,
      "alias": [
        "series.candlestick"
      ],
      "alternates": []
    },
    "Ext.chart.series.Cartesian": {
      "idx": 767,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Gauge": {
      "idx": 785,
      "alias": [
        "series.gauge"
      ],
      "alternates": []
    },
    "Ext.chart.series.Line": {
      "idx": 787,
      "alias": [
        "series.line"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie": {
      "idx": 789,
      "alias": [
        "series.pie"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie3D": {
      "idx": 792,
      "alias": [
        "series.pie3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.Polar": {
      "idx": 784,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Radar": {
      "idx": 795,
      "alias": [
        "series.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Scatter": {
      "idx": 797,
      "alias": [
        "series.scatter"
      ],
      "alternates": []
    },
    "Ext.chart.series.Series": {
      "idx": 727,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.StackedCartesian": {
      "idx": 768,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Aggregative": {
      "idx": 781,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Area": {
      "idx": 772,
      "alias": [
        "sprite.areaSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar": {
      "idx": 774,
      "alias": [
        "sprite.barSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar3D": {
      "idx": 776,
      "alias": [
        "sprite.bar3dSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Box": {
      "idx": 777,
      "alias": [
        "sprite.box"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.CandleStick": {
      "idx": 782,
      "alias": [
        "sprite.candlestickSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Cartesian": {
      "idx": 770,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Line": {
      "idx": 786,
      "alias": [
        "sprite.lineSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Pie3DPart": {
      "idx": 790,
      "alias": [
        "sprite.pie3dPart"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.PieSlice": {
      "idx": 788,
      "alias": [
        "sprite.pieslice"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Polar": {
      "idx": 793,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Radar": {
      "idx": 794,
      "alias": [
        "sprite.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Scatter": {
      "idx": 796,
      "alias": [
        "sprite.scatterSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Series": {
      "idx": 769,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.StackedCartesian": {
      "idx": 771,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Base": {
      "idx": 722,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Blue": {
      "idx": 798,
      "alias": [
        "chart.theme.Blue",
        "chart.theme.blue"
      ],
      "alternates": []
    },
    "Ext.chart.theme.BlueGradients": {
      "idx": 799,
      "alias": [
        "chart.theme.Blue:gradients",
        "chart.theme.blue-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1": {
      "idx": 800,
      "alias": [
        "chart.theme.Category1",
        "chart.theme.category1"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1Gradients": {
      "idx": 801,
      "alias": [
        "chart.theme.Category1:gradients",
        "chart.theme.category1-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2": {
      "idx": 802,
      "alias": [
        "chart.theme.Category2",
        "chart.theme.category2"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2Gradients": {
      "idx": 803,
      "alias": [
        "chart.theme.Category2:gradients",
        "chart.theme.category2-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3": {
      "idx": 804,
      "alias": [
        "chart.theme.Category3",
        "chart.theme.category3"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3Gradients": {
      "idx": 805,
      "alias": [
        "chart.theme.Category3:gradients",
        "chart.theme.category3-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4": {
      "idx": 806,
      "alias": [
        "chart.theme.Category4",
        "chart.theme.category4"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4Gradients": {
      "idx": 807,
      "alias": [
        "chart.theme.Category4:gradients",
        "chart.theme.category4-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5": {
      "idx": 808,
      "alias": [
        "chart.theme.Category5",
        "chart.theme.category5"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5Gradients": {
      "idx": 809,
      "alias": [
        "chart.theme.Category5:gradients",
        "chart.theme.category5-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6": {
      "idx": 810,
      "alias": [
        "chart.theme.Category6",
        "chart.theme.category6"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6Gradients": {
      "idx": 811,
      "alias": [
        "chart.theme.Category6:gradients",
        "chart.theme.category6-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Default": {
      "idx": 723,
      "alias": [
        "chart.theme.Base",
        "chart.theme.default"
      ],
      "alternates": []
    },
    "Ext.chart.theme.DefaultGradients": {
      "idx": 812,
      "alias": [
        "chart.theme.Base:gradients",
        "chart.theme.default-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Green": {
      "idx": 813,
      "alias": [
        "chart.theme.Green",
        "chart.theme.green"
      ],
      "alternates": []
    },
    "Ext.chart.theme.GreenGradients": {
      "idx": 814,
      "alias": [
        "chart.theme.Green:gradients",
        "chart.theme.green-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Midnight": {
      "idx": 815,
      "alias": [
        "chart.theme.Midnight",
        "chart.theme.midnight"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Muted": {
      "idx": 816,
      "alias": [
        "chart.theme.Muted",
        "chart.theme.muted"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Purple": {
      "idx": 817,
      "alias": [
        "chart.theme.Purple",
        "chart.theme.purple"
      ],
      "alternates": []
    },
    "Ext.chart.theme.PurpleGradients": {
      "idx": 818,
      "alias": [
        "chart.theme.Purple:gradients",
        "chart.theme.purple-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Red": {
      "idx": 819,
      "alias": [
        "chart.theme.Red",
        "chart.theme.red"
      ],
      "alternates": []
    },
    "Ext.chart.theme.RedGradients": {
      "idx": 820,
      "alias": [
        "chart.theme.Red:gradients",
        "chart.theme.red-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Sky": {
      "idx": 821,
      "alias": [
        "chart.theme.Sky",
        "chart.theme.sky"
      ],
      "alternates": []
    },
    "Ext.chart.theme.SkyGradients": {
      "idx": 822,
      "alias": [
        "chart.theme.Sky:gradients",
        "chart.theme.sky-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Yellow": {
      "idx": 823,
      "alias": [
        "chart.theme.Yellow",
        "chart.theme.yellow"
      ],
      "alternates": []
    },
    "Ext.chart.theme.YellowGradients": {
      "idx": 824,
      "alias": [
        "chart.theme.Yellow:gradients",
        "chart.theme.yellow-gradients"
      ],
      "alternates": []
    },
    "Ext.container.ButtonGroup": {
      "idx": 478,
      "alias": [
        "widget.buttongroup"
      ],
      "alternates": [
        "Ext.ButtonGroup"
      ]
    },
    "Ext.container.Container": {
      "idx": 341,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.Container",
        "Ext.AbstractContainer"
      ]
    },
    "Ext.container.DockingContainer": {
      "idx": 388,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Monitor": {
      "idx": 479,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Viewport": {
      "idx": 482,
      "alias": [
        "widget.viewport"
      ],
      "alternates": [
        "Ext.Viewport"
      ]
    },
    "Ext.dashboard.Column": {
      "idx": 485,
      "alias": [
        "widget.dashboard-column"
      ],
      "alternates": []
    },
    "Ext.dashboard.Dashboard": {
      "idx": 495,
      "alias": [
        "widget.dashboard"
      ],
      "alternates": []
    },
    "Ext.dashboard.DropZone": {
      "idx": 493,
      "alias": [],
      "alternates": []
    },
    "Ext.dashboard.Panel": {
      "idx": 484,
      "alias": [
        "widget.dashboard-panel"
      ],
      "alternates": []
    },
    "Ext.dashboard.Part": {
      "idx": 494,
      "alias": [
        "part.part"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 145,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 182,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 224,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 217,
      "alias": [
        "store.chained"
      ],
      "alternates": []
    },
    "Ext.data.Connection": {
      "idx": 8,
      "alias": [],
      "alternates": []
    },
    "Ext.data.DirectStore": {
      "idx": 226,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 146,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 147,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 227,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 229,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 230,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 171,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 163,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 231,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 232,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 235,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 223,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 170,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 164,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 153,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 180,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 183,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 234,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 237,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 238,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 239,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 245,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 156,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 157,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 155,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 158,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 159,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 160,
      "alias": [
        "data.field.string"
      ],
      "alternates": []
    },
    "Ext.data.flash.BinaryXhr": {
      "idx": 7,
      "alias": [],
      "alternates": []
    },
    "Ext.data.identifier.Generator": {
      "idx": 161,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 246,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 162,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 247,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 149,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 150,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 148,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 151,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 152,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 173,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 168,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 225,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 228,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 249,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 169,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 167,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 250,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 172,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 251,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 248,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 181,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 174,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 165,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 243,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 141,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 143,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 144,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 252,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 254,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 256,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 253,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 257,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 258,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 255,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 259,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 260,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 154,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 175,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 166,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 244,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dd.DD": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDProxy": {
      "idx": 380,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDTarget": {
      "idx": 425,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDrop": {
      "idx": 377,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDropManager": {
      "idx": 368,
      "alias": [],
      "alternates": [
        "Ext.dd.DragDropMgr",
        "Ext.dd.DDM"
      ]
    },
    "Ext.dd.DragSource": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragTracker": {
      "idx": 420,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragZone": {
      "idx": 423,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropTarget": {
      "idx": 427,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropZone": {
      "idx": 429,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.Registry": {
      "idx": 428,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.ScrollManager": {
      "idx": 426,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.StatusProxy": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 261,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 263,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 264,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 265,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 221,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 262,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 266,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 268,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 267,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.ButtonElement": {
      "idx": 450,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.CompositeElement": {
      "idx": 92,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 73,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 47,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 72,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 269,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 240,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Layer": {
      "idx": 496,
      "alias": [],
      "alternates": [
        "Ext.Layer"
      ]
    },
    "Ext.dom.Query": {
      "idx": 242,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 20,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 19,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Animator": {
      "idx": 683,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Color": {
      "idx": 672,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Container": {
      "idx": 718,
      "alias": [
        "widget.draw"
      ],
      "alternates": [
        "Ext.draw.Component"
      ]
    },
    "Ext.draw.ContainerBase": {
      "idx": 670,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Draw": {
      "idx": 674,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.LimitedCache": {
      "idx": 779,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Matrix": {
      "idx": 679,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Path": {
      "idx": 687,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.PathUtil": {
      "idx": 791,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Point": {
      "idx": 825,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.SegmentTree": {
      "idx": 780,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Surface": {
      "idx": 712,
      "alias": [
        "widget.surface"
      ],
      "alternates": []
    },
    "Ext.draw.SurfaceBase": {
      "idx": 671,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TextMeasurer": {
      "idx": 706,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TimingFunctions": {
      "idx": 682,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Canvas": {
      "idx": 717,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Svg": {
      "idx": 715,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext": {
      "idx": 714,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext.Gradient": {
      "idx": 714,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Gradient": {
      "idx": 675,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.GradientDefinition": {
      "idx": 676,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Linear": {
      "idx": 710,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Radial": {
      "idx": 711,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Animation": {
      "idx": 684,
      "alias": [
        "modifier.animation"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Highlight": {
      "idx": 685,
      "alias": [
        "modifier.highlight"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Modifier": {
      "idx": 680,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Target": {
      "idx": 681,
      "alias": [
        "modifier.target"
      ],
      "alternates": []
    },
    "Ext.draw.overrides.Path": {
      "idx": 688,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.Surface": {
      "idx": 713,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.sprite.Path": {
      "idx": 690,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.plugin.SpriteEvents": {
      "idx": 826,
      "alias": [
        "plugin.spriteevents"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AnimationParser": {
      "idx": 673,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Arc": {
      "idx": 692,
      "alias": [
        "sprite.arc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Arrow": {
      "idx": 693,
      "alias": [
        "sprite.arrow"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeDefinition": {
      "idx": 678,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeParser": {
      "idx": 677,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Circle": {
      "idx": 691,
      "alias": [
        "sprite.circle"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Composite": {
      "idx": 694,
      "alias": [
        "sprite.composite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Cross": {
      "idx": 695,
      "alias": [
        "sprite.cross"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Diamond": {
      "idx": 696,
      "alias": [
        "sprite.diamond"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Ellipse": {
      "idx": 697,
      "alias": [
        "sprite.ellipse"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.EllipticalArc": {
      "idx": 698,
      "alias": [
        "sprite.ellipticalArc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Image": {
      "idx": 700,
      "alias": [
        "sprite.image"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Instancing": {
      "idx": 701,
      "alias": [
        "sprite.instancing"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Line": {
      "idx": 702,
      "alias": [
        "sprite.line"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Path": {
      "idx": 689,
      "alias": [
        "Ext.draw.Sprite",
        "sprite.path"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Plus": {
      "idx": 703,
      "alias": [
        "sprite.plus"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Rect": {
      "idx": 699,
      "alias": [
        "sprite.rect"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sector": {
      "idx": 704,
      "alias": [
        "sprite.sector"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sprite": {
      "idx": 686,
      "alias": [
        "sprite.sprite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Square": {
      "idx": 705,
      "alias": [
        "sprite.square"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Text": {
      "idx": 707,
      "alias": [
        "sprite.text"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Tick": {
      "idx": 708,
      "alias": [
        "sprite.tick"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Triangle": {
      "idx": 709,
      "alias": [
        "sprite.triangle"
      ],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 27,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 272,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 273,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 276,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 270,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 271,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 274,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.MouseEnterLeave": {
      "idx": 498,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.flash.Component": {
      "idx": 499,
      "alias": [
        "widget.flash"
      ],
      "alternates": [
        "Ext.FlashComponent"
      ]
    },
    "Ext.form.Basic": {
      "idx": 505,
      "alias": [],
      "alternates": [
        "Ext.form.BasicForm"
      ]
    },
    "Ext.form.CheckboxGroup": {
      "idx": 510,
      "alias": [
        "widget.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.form.CheckboxManager": {
      "idx": 411,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldAncestor": {
      "idx": 506,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldContainer": {
      "idx": 508,
      "alias": [
        "widget.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.form.FieldSet": {
      "idx": 511,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Label": {
      "idx": 512,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.form.Labelable": {
      "idx": 391,
      "alias": [],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 513,
      "alias": [
        "widget.form"
      ],
      "alternates": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
      ]
    },
    "Ext.form.RadioGroup": {
      "idx": 516,
      "alias": [
        "widget.radiogroup"
      ],
      "alternates": []
    },
    "Ext.form.RadioManager": {
      "idx": 514,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.Action": {
      "idx": 500,
      "alias": [],
      "alternates": [
        "Ext.form.Action"
      ]
    },
    "Ext.form.action.DirectAction": {
      "idx": 517,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.DirectLoad": {
      "idx": 518,
      "alias": [
        "formaction.directload"
      ],
      "alternates": [
        "Ext.form.Action.DirectLoad"
      ]
    },
    "Ext.form.action.DirectSubmit": {
      "idx": 519,
      "alias": [
        "formaction.directsubmit"
      ],
      "alternates": [
        "Ext.form.Action.DirectSubmit"
      ]
    },
    "Ext.form.action.Load": {
      "idx": 501,
      "alias": [
        "formaction.load"
      ],
      "alternates": [
        "Ext.form.Action.Load"
      ]
    },
    "Ext.form.action.StandardSubmit": {
      "idx": 520,
      "alias": [
        "formaction.standardsubmit"
      ],
      "alternates": []
    },
    "Ext.form.action.Submit": {
      "idx": 502,
      "alias": [
        "formaction.submit"
      ],
      "alternates": [
        "Ext.form.Action.Submit"
      ]
    },
    "Ext.form.field.Base": {
      "idx": 394,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field",
        "Ext.form.BaseField"
      ]
    },
    "Ext.form.field.Checkbox": {
      "idx": 412,
      "alias": [
        "widget.checkbox",
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.form.field.ComboBox": {
      "idx": 531,
      "alias": [
        "widget.combo",
        "widget.combobox"
      ],
      "alternates": [
        "Ext.form.ComboBox"
      ]
    },
    "Ext.form.field.Date": {
      "idx": 534,
      "alias": [
        "widget.datefield"
      ],
      "alternates": [
        "Ext.form.DateField",
        "Ext.form.Date"
      ]
    },
    "Ext.form.field.Display": {
      "idx": 395,
      "alias": [
        "widget.displayfield"
      ],
      "alternates": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
      ]
    },
    "Ext.form.field.Field": {
      "idx": 393,
      "alias": [],
      "alternates": []
    },
    "Ext.form.field.File": {
      "idx": 538,
      "alias": [
        "widget.filefield",
        "widget.fileuploadfield"
      ],
      "alternates": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
      ]
    },
    "Ext.form.field.FileButton": {
      "idx": 535,
      "alias": [
        "widget.filebutton"
      ],
      "alternates": []
    },
    "Ext.form.field.Hidden": {
      "idx": 540,
      "alias": [
        "widget.hidden",
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.form.field.HtmlEditor": {
      "idx": 546,
      "alias": [
        "widget.htmleditor"
      ],
      "alternates": [
        "Ext.form.HtmlEditor"
      ]
    },
    "Ext.form.field.Number": {
      "idx": 528,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.NumberField",
        "Ext.form.Number"
      ]
    },
    "Ext.form.field.Picker": {
      "idx": 521,
      "alias": [
        "widget.pickerfield"
      ],
      "alternates": [
        "Ext.form.Picker"
      ]
    },
    "Ext.form.field.Radio": {
      "idx": 515,
      "alias": [
        "widget.radio",
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.form.field.Spinner": {
      "idx": 527,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.form.field.Tag": {
      "idx": 547,
      "alias": [
        "widget.tagfield"
      ],
      "alternates": []
    },
    "Ext.form.field.Text": {
      "idx": 444,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.TextField",
        "Ext.form.Text"
      ]
    },
    "Ext.form.field.TextArea": {
      "idx": 503,
      "alias": [
        "widget.textarea",
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.form.field.Time": {
      "idx": 549,
      "alias": [
        "widget.timefield"
      ],
      "alternates": [
        "Ext.form.TimeField",
        "Ext.form.Time"
      ]
    },
    "Ext.form.field.Trigger": {
      "idx": 550,
      "alias": [
        "widget.trigger",
        "widget.triggerfield"
      ],
      "alternates": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
      ]
    },
    "Ext.form.field.VTypes": {
      "idx": 442,
      "alias": [],
      "alternates": [
        "Ext.form.VTypes"
      ]
    },
    "Ext.form.trigger.Component": {
      "idx": 537,
      "alias": [
        "trigger.component"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Spinner": {
      "idx": 526,
      "alias": [
        "trigger.spinner"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Trigger": {
      "idx": 443,
      "alias": [
        "trigger.trigger"
      ],
      "alternates": []
    },
    "Ext.fx.Anim": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animation": {
      "idx": 291,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animator": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.CubicBezier": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.DrawPath": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Easing": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Manager": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.PropertyHandler": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Queue": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 294,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 282,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 283,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 295,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 286,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 287,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 288,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 289,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 290,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 284,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 285,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 296,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 297,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 96,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 98,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 99,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 298,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 101,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 299,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 100,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 97,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 303,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 310,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 305,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 306,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 307,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 304,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 308,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 311,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 312,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 302,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 292,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 313,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 293,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.fx.target.Component": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElement": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElementCSS": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeSprite": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Element": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.ElementCSS": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Sprite": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Target": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellContext": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellEditor": {
      "idx": 551,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ColumnComponentLayout": {
      "idx": 433,
      "alias": [
        "layout.columncomponent"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnLayout": {
      "idx": 418,
      "alias": [
        "layout.gridcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnManager": {
      "idx": 553,
      "alias": [],
      "alternates": [
        "Ext.grid.ColumnModel"
      ]
    },
    "Ext.grid.NavigationModel": {
      "idx": 438,
      "alias": [
        "view.navigation.grid"
      ],
      "alternates": []
    },
    "Ext.grid.Panel": {
      "idx": 410,
      "alias": [
        "widget.grid",
        "widget.gridpanel"
      ],
      "alternates": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
      ]
    },
    "Ext.grid.RowEditor": {
      "idx": 555,
      "alias": [
        "widget.roweditor"
      ],
      "alternates": []
    },
    "Ext.grid.RowEditorButtons": {
      "idx": 554,
      "alias": [
        "widget.roweditorbuttons"
      ],
      "alternates": []
    },
    "Ext.grid.Scroller": {
      "idx": 556,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ViewDropZone": {
      "idx": 558,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 559,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 560,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": [
        "Ext.grid.BooleanColumn"
      ]
    },
    "Ext.grid.column.Check": {
      "idx": 561,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 434,
      "alias": [
        "widget.gridcolumn"
      ],
      "alternates": [
        "Ext.grid.Column"
      ]
    },
    "Ext.grid.column.Date": {
      "idx": 562,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": [
        "Ext.grid.DateColumn"
      ]
    },
    "Ext.grid.column.Number": {
      "idx": 563,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": [
        "Ext.grid.NumberColumn"
      ]
    },
    "Ext.grid.column.RowNumberer": {
      "idx": 564,
      "alias": [
        "widget.rownumberer"
      ],
      "alternates": [
        "Ext.grid.RowNumberer"
      ]
    },
    "Ext.grid.column.Template": {
      "idx": 565,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": [
        "Ext.grid.TemplateColumn"
      ]
    },
    "Ext.grid.column.Widget": {
      "idx": 566,
      "alias": [
        "widget.widgetcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.feature.AbstractSummary": {
      "idx": 568,
      "alias": [
        "feature.abstractsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Feature": {
      "idx": 567,
      "alias": [
        "feature.feature"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupStore": {
      "idx": 569,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.feature.Grouping": {
      "idx": 570,
      "alias": [
        "feature.grouping"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupingSummary": {
      "idx": 571,
      "alias": [
        "feature.groupingsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.RowBody": {
      "idx": 572,
      "alias": [
        "feature.rowbody"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Summary": {
      "idx": 573,
      "alias": [
        "feature.summary"
      ],
      "alternates": []
    },
    "Ext.grid.filters.Filters": {
      "idx": 586,
      "alias": [
        "plugin.gridfilters"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Base": {
      "idx": 578,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.Boolean": {
      "idx": 580,
      "alias": [
        "grid.filter.boolean"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Date": {
      "idx": 582,
      "alias": [
        "grid.filter.date"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.List": {
      "idx": 583,
      "alias": [
        "grid.filter.list"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Number": {
      "idx": 584,
      "alias": [
        "grid.filter.number",
        "grid.filter.numeric"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.SingleFilter": {
      "idx": 579,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.String": {
      "idx": 585,
      "alias": [
        "grid.filter.string"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.TriFilter": {
      "idx": 581,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.Container": {
      "idx": 432,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.header.DragZone": {
      "idx": 424,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.DropZone": {
      "idx": 430,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.HeaderContainer": {
      "idx": 587,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.Lockable": {
      "idx": 589,
      "alias": [],
      "alternates": [
        "Ext.grid.Lockable"
      ]
    },
    "Ext.grid.locking.RowSynchronizer": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.View": {
      "idx": 588,
      "alias": [],
      "alternates": [
        "Ext.grid.LockingView"
      ]
    },
    "Ext.grid.plugin.BufferedRenderer": {
      "idx": 590,
      "alias": [
        "plugin.bufferedrenderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.CellEditing": {
      "idx": 592,
      "alias": [
        "plugin.cellediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Clipboard": {
      "idx": 594,
      "alias": [
        "plugin.clipboard"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.DragDrop": {
      "idx": 595,
      "alias": [
        "plugin.gridviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editing": {
      "idx": 591,
      "alias": [
        "editing.editing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderReorderer": {
      "idx": 431,
      "alias": [
        "plugin.gridheaderreorderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderResizer": {
      "idx": 421,
      "alias": [
        "plugin.gridheaderresizer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowEditing": {
      "idx": 596,
      "alias": [
        "plugin.rowediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowExpander": {
      "idx": 598,
      "alias": [
        "plugin.rowexpander"
      ],
      "alternates": []
    },
    "Ext.grid.property.Grid": {
      "idx": 599,
      "alias": [
        "widget.propertygrid"
      ],
      "alternates": [
        "Ext.grid.PropertyGrid"
      ]
    },
    "Ext.grid.property.HeaderContainer": {
      "idx": 600,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyColumnModel"
      ]
    },
    "Ext.grid.property.Property": {
      "idx": 601,
      "alias": [],
      "alternates": [
        "Ext.PropGridProperty"
      ]
    },
    "Ext.grid.property.Reader": {
      "idx": 602,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.property.Store": {
      "idx": 603,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyStore"
      ]
    },
    "Ext.grid.selection.Cells": {
      "idx": 605,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Columns": {
      "idx": 606,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Replicator": {
      "idx": 607,
      "alias": [
        "plugin.selectionreplicator"
      ],
      "alternates": []
    },
    "Ext.grid.selection.Rows": {
      "idx": 608,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Selection": {
      "idx": 604,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SelectionExtender": {
      "idx": 609,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SpreadsheetModel": {
      "idx": 610,
      "alias": [
        "selection.spreadsheet"
      ],
      "alternates": []
    },
    "Ext.layout.Context": {
      "idx": 614,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.ContextItem": {
      "idx": 612,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Layout": {
      "idx": 337,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.SizeModel": {
      "idx": 336,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Auto": {
      "idx": 350,
      "alias": [
        "layout.autocomponent"
      ],
      "alternates": []
    },
    "Ext.layout.component.Body": {
      "idx": 456,
      "alias": [
        "layout.body"
      ],
      "alternates": []
    },
    "Ext.layout.component.BoundList": {
      "idx": 523,
      "alias": [
        "layout.boundlist"
      ],
      "alternates": []
    },
    "Ext.layout.component.Component": {
      "idx": 349,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Dock": {
      "idx": 385,
      "alias": [
        "layout.dock"
      ],
      "alternates": [
        "Ext.layout.component.AbstractDock"
      ]
    },
    "Ext.layout.component.FieldSet": {
      "idx": 616,
      "alias": [
        "layout.fieldset"
      ],
      "alternates": []
    },
    "Ext.layout.component.ProgressBar": {
      "idx": 351,
      "alias": [
        "layout.progressbar"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.FieldContainer": {
      "idx": 507,
      "alias": [
        "layout.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.HtmlEditor": {
      "idx": 542,
      "alias": [
        "layout.htmleditor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Absolute": {
      "idx": 617,
      "alias": [
        "layout.absolute"
      ],
      "alternates": [
        "Ext.layout.AbsoluteLayout"
      ]
    },
    "Ext.layout.container.Accordion": {
      "idx": 619,
      "alias": [
        "layout.accordion"
      ],
      "alternates": [
        "Ext.layout.AccordionLayout"
      ]
    },
    "Ext.layout.container.Anchor": {
      "idx": 483,
      "alias": [
        "layout.anchor"
      ],
      "alternates": [
        "Ext.layout.AnchorLayout"
      ]
    },
    "Ext.layout.container.Auto": {
      "idx": 339,
      "alias": [
        "layout.auto",
        "layout.autocontainer"
      ],
      "alternates": []
    },
    "Ext.layout.container.Border": {
      "idx": 447,
      "alias": [
        "layout.border"
      ],
      "alternates": [
        "Ext.layout.BorderLayout"
      ]
    },
    "Ext.layout.container.Box": {
      "idx": 370,
      "alias": [
        "layout.box"
      ],
      "alternates": [
        "Ext.layout.BoxLayout"
      ]
    },
    "Ext.layout.container.Card": {
      "idx": 449,
      "alias": [
        "layout.card"
      ],
      "alternates": [
        "Ext.layout.CardLayout"
      ]
    },
    "Ext.layout.container.Center": {
      "idx": 620,
      "alias": [
        "layout.center",
        "layout.ux.center"
      ],
      "alternates": [
        "Ext.ux.layout.Center"
      ]
    },
    "Ext.layout.container.CheckboxGroup": {
      "idx": 509,
      "alias": [
        "layout.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.layout.container.Column": {
      "idx": 486,
      "alias": [
        "layout.column"
      ],
      "alternates": [
        "Ext.layout.ColumnLayout"
      ]
    },
    "Ext.layout.container.ColumnSplitter": {
      "idx": 491,
      "alias": [
        "widget.columnsplitter"
      ],
      "alternates": []
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      "idx": 490,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.Container": {
      "idx": 338,
      "alias": [
        "layout.container"
      ],
      "alternates": [
        "Ext.layout.ContainerLayout"
      ]
    },
    "Ext.layout.container.Dashboard": {
      "idx": 492,
      "alias": [
        "layout.dashboard"
      ],
      "alternates": []
    },
    "Ext.layout.container.Editor": {
      "idx": 342,
      "alias": [
        "layout.editor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Fit": {
      "idx": 396,
      "alias": [
        "layout.fit"
      ],
      "alternates": [
        "Ext.layout.FitLayout"
      ]
    },
    "Ext.layout.container.Form": {
      "idx": 621,
      "alias": [
        "layout.form"
      ],
      "alternates": [
        "Ext.layout.FormLayout"
      ]
    },
    "Ext.layout.container.HBox": {
      "idx": 372,
      "alias": [
        "layout.hbox"
      ],
      "alternates": [
        "Ext.layout.HBoxLayout"
      ]
    },
    "Ext.layout.container.SegmentedButton": {
      "idx": 622,
      "alias": [
        "layout.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.layout.container.Table": {
      "idx": 477,
      "alias": [
        "layout.table"
      ],
      "alternates": [
        "Ext.layout.TableLayout"
      ]
    },
    "Ext.layout.container.VBox": {
      "idx": 374,
      "alias": [
        "layout.vbox"
      ],
      "alternates": [
        "Ext.layout.VBoxLayout"
      ]
    },
    "Ext.layout.container.border.Region": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.boxOverflow.Menu": {
      "idx": 544,
      "alias": [
        "box.overflow.Menu",
        "box.overflow.menu"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Menu"
      ]
    },
    "Ext.layout.container.boxOverflow.None": {
      "idx": 364,
      "alias": [
        "box.overflow.None",
        "box.overflow.none"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.None"
      ]
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      "idx": 366,
      "alias": [
        "box.overflow.Scroller",
        "box.overflow.scroller"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Scroller"
      ]
    },
    "Ext.menu.CheckItem": {
      "idx": 575,
      "alias": [
        "widget.menucheckitem"
      ],
      "alternates": []
    },
    "Ext.menu.ColorPicker": {
      "idx": 623,
      "alias": [
        "widget.colormenu"
      ],
      "alternates": []
    },
    "Ext.menu.DatePicker": {
      "idx": 624,
      "alias": [
        "widget.datemenu"
      ],
      "alternates": []
    },
    "Ext.menu.Item": {
      "idx": 574,
      "alias": [
        "widget.menuitem"
      ],
      "alternates": [
        "Ext.menu.TextItem"
      ]
    },
    "Ext.menu.Manager": {
      "idx": 452,
      "alias": [],
      "alternates": [
        "Ext.menu.MenuMgr"
      ]
    },
    "Ext.menu.Menu": {
      "idx": 577,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.menu.Separator": {
      "idx": 576,
      "alias": [
        "widget.menuseparator"
      ],
      "alternates": []
    },
    "Ext.mixin.Accessible": {
      "idx": 123,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ComponentDelegation": {
      "idx": 83,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Container": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 93,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 233,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 317,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 318,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 319,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.GlobalEvents": {
      "idx": 77,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.Widget": {
      "idx": 85,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.domain.Component": {
      "idx": 128,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Element": {
      "idx": 74,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Helper": {
      "idx": 241,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.Event": {
      "idx": 28,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Dom": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Gesture": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.plugin.Abstract": {
      "idx": 323,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.util.Positionable": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Bar": {
      "idx": 354,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.DD": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Header": {
      "idx": 363,
      "alias": [
        "widget.header"
      ],
      "alternates": []
    },
    "Ext.panel.Panel": {
      "idx": 389,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.Panel"
      ]
    },
    "Ext.panel.Pinnable": {
      "idx": 625,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Proxy": {
      "idx": 383,
      "alias": [],
      "alternates": [
        "Ext.dd.PanelProxy"
      ]
    },
    "Ext.panel.Table": {
      "idx": 397,
      "alias": [
        "widget.tablepanel"
      ],
      "alternates": []
    },
    "Ext.panel.Title": {
      "idx": 356,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.panel.Tool": {
      "idx": 358,
      "alias": [
        "widget.tool"
      ],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 320,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 321,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Color": {
      "idx": 541,
      "alias": [
        "widget.colorpicker"
      ],
      "alternates": [
        "Ext.ColorPalette"
      ]
    },
    "Ext.picker.Date": {
      "idx": 533,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Month": {
      "idx": 532,
      "alias": [
        "widget.monthpicker"
      ],
      "alternates": [
        "Ext.MonthPicker"
      ]
    },
    "Ext.picker.Time": {
      "idx": 548,
      "alias": [
        "widget.timepicker"
      ],
      "alternates": []
    },
    "Ext.plugin.Abstract": {
      "idx": 322,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.AbstractClipboard": {
      "idx": 593,
      "alias": [],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 324,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.Manager": {
      "idx": 626,
      "alias": [],
      "alternates": [
        "Ext.PluginManager",
        "Ext.PluginMgr"
      ]
    },
    "Ext.plugin.Responsive": {
      "idx": 480,
      "alias": [
        "plugin.responsive"
      ],
      "alternates": []
    },
    "Ext.plugin.Viewport": {
      "idx": 481,
      "alias": [
        "plugin.viewport"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitter": {
      "idx": 446,
      "alias": [
        "widget.bordersplitter"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitterTracker": {
      "idx": 627,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Handle": {
      "idx": 629,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.ResizeTracker": {
      "idx": 630,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Resizer": {
      "idx": 632,
      "alias": [],
      "alternates": [
        "Ext.Resizable"
      ]
    },
    "Ext.resizer.Splitter": {
      "idx": 369,
      "alias": [
        "widget.splitter"
      ],
      "alternates": []
    },
    "Ext.resizer.SplitterTracker": {
      "idx": 488,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.Component": {
      "idx": 127,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Button": {
      "idx": 454,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Segmented": {
      "idx": 476,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dd.DD": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dom.Element": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.event.Event": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.Labelable": {
      "idx": 392,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.File": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.FileButton": {
      "idx": 536,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.CellEditor": {
      "idx": 552,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.ColumnLayout": {
      "idx": 419,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.NavigationModel": {
      "idx": 439,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.column.Column": {
      "idx": 435,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.HeaderResizer": {
      "idx": 422,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.RowEditing": {
      "idx": 597,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.ContextItem": {
      "idx": 613,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.component.Dock": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Absolute": {
      "idx": 618,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Border": {
      "idx": 448,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Box": {
      "idx": 371,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Column": {
      "idx": 487,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.HBox": {
      "idx": 373,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.VBox": {
      "idx": 375,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Menu": {
      "idx": 545,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Scroller": {
      "idx": 367,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Bar": {
      "idx": 355,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Panel": {
      "idx": 390,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Title": {
      "idx": 357,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.BorderSplitterTracker": {
      "idx": 628,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.ResizeTracker": {
      "idx": 631,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.SplitterTracker": {
      "idx": 489,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.DomScroller": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Indicator": {
      "idx": 110,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Scroller": {
      "idx": 95,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.TouchScroller": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.slider.Multi": {
      "idx": 638,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tab.Bar": {
      "idx": 458,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tip.QuickTipManager": {
      "idx": 471,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tree.Column": {
      "idx": 437,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.FocusableContainer": {
      "idx": 362,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.Renderable": {
      "idx": 118,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.NavigationModel": {
      "idx": 401,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.Table": {
      "idx": 409,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.DomScroller": {
      "idx": 113,
      "alias": [
        "scroller.dom"
      ],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 109,
      "alias": [
        "widget.scrollindicator"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 94,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TouchScroller": {
      "idx": 111,
      "alias": [
        "scroller.touch"
      ],
      "alternates": []
    },
    "Ext.selection.CellModel": {
      "idx": 633,
      "alias": [
        "selection.cellmodel"
      ],
      "alternates": []
    },
    "Ext.selection.CheckboxModel": {
      "idx": 634,
      "alias": [
        "selection.checkboxmodel"
      ],
      "alternates": []
    },
    "Ext.selection.DataViewModel": {
      "idx": 399,
      "alias": [
        "selection.dataviewmodel"
      ],
      "alternates": []
    },
    "Ext.selection.Model": {
      "idx": 398,
      "alias": [
        "selection.abstract"
      ],
      "alternates": [
        "Ext.AbstractSelectionModel"
      ]
    },
    "Ext.selection.RowModel": {
      "idx": 416,
      "alias": [
        "selection.rowmodel"
      ],
      "alternates": []
    },
    "Ext.selection.TreeModel": {
      "idx": 417,
      "alias": [
        "selection.treemodel"
      ],
      "alternates": []
    },
    "Ext.slider.Multi": {
      "idx": 637,
      "alias": [
        "widget.multislider"
      ],
      "alternates": [
        "Ext.slider.MultiSlider"
      ]
    },
    "Ext.slider.Single": {
      "idx": 639,
      "alias": [
        "widget.slider",
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
      ]
    },
    "Ext.slider.Thumb": {
      "idx": 635,
      "alias": [],
      "alternates": []
    },
    "Ext.slider.Tip": {
      "idx": 636,
      "alias": [
        "widget.slidertip"
      ],
      "alternates": []
    },
    "Ext.slider.Widget": {
      "idx": 640,
      "alias": [
        "widget.sliderwidget"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bar": {
      "idx": 648,
      "alias": [
        "widget.sparklinebar"
      ],
      "alternates": []
    },
    "Ext.sparkline.BarBase": {
      "idx": 646,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Base": {
      "idx": 645,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Box": {
      "idx": 649,
      "alias": [
        "widget.sparklinebox"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bullet": {
      "idx": 650,
      "alias": [
        "widget.sparklinebullet"
      ],
      "alternates": []
    },
    "Ext.sparkline.CanvasBase": {
      "idx": 642,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.CanvasCanvas": {
      "idx": 643,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Discrete": {
      "idx": 651,
      "alias": [
        "widget.sparklinediscrete"
      ],
      "alternates": []
    },
    "Ext.sparkline.Line": {
      "idx": 652,
      "alias": [
        "widget.sparklineline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Pie": {
      "idx": 653,
      "alias": [
        "widget.sparklinepie"
      ],
      "alternates": []
    },
    "Ext.sparkline.RangeMap": {
      "idx": 647,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Shape": {
      "idx": 641,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.TriState": {
      "idx": 654,
      "alias": [
        "widget.sparklinetristate"
      ],
      "alternates": []
    },
    "Ext.sparkline.VmlCanvas": {
      "idx": 644,
      "alias": [],
      "alternates": []
    },
    "Ext.state.CookieProvider": {
      "idx": 655,
      "alias": [],
      "alternates": []
    },
    "Ext.state.LocalStorageProvider": {
      "idx": 656,
      "alias": [
        "state.localstorage"
      ],
      "alternates": []
    },
    "Ext.state.Manager": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Provider": {
      "idx": 119,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Stateful": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 457,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": []
    },
    "Ext.tab.Panel": {
      "idx": 459,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 455,
      "alias": [
        "widget.tab"
      ],
      "alternates": []
    },
    "Ext.tip.QuickTip": {
      "idx": 469,
      "alias": [
        "widget.quicktip"
      ],
      "alternates": [
        "Ext.QuickTip"
      ]
    },
    "Ext.tip.QuickTipManager": {
      "idx": 470,
      "alias": [],
      "alternates": [
        "Ext.QuickTips"
      ]
    },
    "Ext.tip.Tip": {
      "idx": 467,
      "alias": [
        "widget.tip"
      ],
      "alternates": [
        "Ext.Tip"
      ]
    },
    "Ext.tip.ToolTip": {
      "idx": 468,
      "alias": [
        "widget.tooltip"
      ],
      "alternates": [
        "Ext.ToolTip"
      ]
    },
    "Ext.toolbar.Breadcrumb": {
      "idx": 657,
      "alias": [
        "widget.breadcrumb"
      ],
      "alternates": []
    },
    "Ext.toolbar.Fill": {
      "idx": 658,
      "alias": [
        "widget.tbfill"
      ],
      "alternates": [
        "Ext.Toolbar.Fill"
      ]
    },
    "Ext.toolbar.Item": {
      "idx": 524,
      "alias": [
        "widget.tbitem"
      ],
      "alternates": [
        "Ext.Toolbar.Item"
      ]
    },
    "Ext.toolbar.Paging": {
      "idx": 529,
      "alias": [
        "widget.pagingtoolbar"
      ],
      "alternates": [
        "Ext.PagingToolbar"
      ]
    },
    "Ext.toolbar.Separator": {
      "idx": 543,
      "alias": [
        "widget.tbseparator"
      ],
      "alternates": [
        "Ext.Toolbar.Separator"
      ]
    },
    "Ext.toolbar.Spacer": {
      "idx": 659,
      "alias": [
        "widget.tbspacer"
      ],
      "alternates": [
        "Ext.Toolbar.Spacer"
      ]
    },
    "Ext.toolbar.TextItem": {
      "idx": 525,
      "alias": [
        "widget.tbtext"
      ],
      "alternates": [
        "Ext.Toolbar.TextItem"
      ]
    },
    "Ext.toolbar.Toolbar": {
      "idx": 376,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": [
        "Ext.Toolbar"
      ]
    },
    "Ext.tree.Column": {
      "idx": 436,
      "alias": [
        "widget.treecolumn"
      ],
      "alternates": []
    },
    "Ext.tree.NavigationModel": {
      "idx": 440,
      "alias": [
        "view.navigation.tree"
      ],
      "alternates": []
    },
    "Ext.tree.Panel": {
      "idx": 441,
      "alias": [
        "widget.treepanel"
      ],
      "alternates": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
      ]
    },
    "Ext.tree.View": {
      "idx": 415,
      "alias": [
        "widget.treeview"
      ],
      "alternates": []
    },
    "Ext.tree.ViewDragZone": {
      "idx": 661,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.ViewDropZone": {
      "idx": 662,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.plugin.TreeViewDragDrop": {
      "idx": 663,
      "alias": [
        "plugin.treeviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 50,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Animate": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 325,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSS": {
      "idx": 664,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 327,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ClickRepeater": {
      "idx": 365,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 135,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 133,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ComponentDragger": {
      "idx": 464,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Cookies": {
      "idx": 665,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 326,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ElementContainer": {
      "idx": 116,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 48,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 178,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Floating": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FocusTrap": {
      "idx": 465,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Focusable": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FocusableContainer": {
      "idx": 361,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 79,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Group": {
      "idx": 176,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 179,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 134,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 187,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 142,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ItemCollection": {
      "idx": 328,
      "alias": [],
      "alternates": [
        "Ext.ItemCollection"
      ]
    },
    "Ext.util.KeyMap": {
      "idx": 359,
      "alias": [],
      "alternates": [
        "Ext.KeyMap"
      ]
    },
    "Ext.util.KeyNav": {
      "idx": 360,
      "alias": [],
      "alternates": [
        "Ext.KeyNav"
      ]
    },
    "Ext.util.KeyboardInteractive": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LocalStorage": {
      "idx": 329,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Memento": {
      "idx": 387,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 136,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 24,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 26,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 16,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ProtoElement": {
      "idx": 91,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Queue": {
      "idx": 611,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Renderable": {
      "idx": 117,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 177,
      "alias": [],
      "alternates": []
    },
    "Ext.util.StoreHolder": {
      "idx": 347,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 330,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 331,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 332,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 108,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 87,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 86,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 42,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 43,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 44,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 102,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 104,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 103,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 105,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.BoxReorderer": {
      "idx": 827,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.CellDragDrop": {
      "idx": 828,
      "alias": [
        "plugin.celldragdrop"
      ],
      "alternates": []
    },
    "Ext.ux.DataTip": {
      "idx": 829,
      "alias": [
        "plugin.datatip"
      ],
      "alternates": []
    },
    "Ext.ux.DataView.Animated": {
      "idx": 830,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.DragSelector": {
      "idx": 831,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.Draggable": {
      "idx": 832,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.LabelEditor": {
      "idx": 833,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.Explorer": {
      "idx": 835,
      "alias": [
        "widget.explorer"
      ],
      "alternates": []
    },
    "Ext.ux.FieldReplicator": {
      "idx": 836,
      "alias": [
        "plugin.fieldreplicator"
      ],
      "alternates": []
    },
    "Ext.ux.GMapPanel": {
      "idx": 837,
      "alias": [
        "widget.gmappanel"
      ],
      "alternates": []
    },
    "Ext.ux.GroupTabPanel": {
      "idx": 839,
      "alias": [
        "widget.grouptabpanel"
      ],
      "alternates": []
    },
    "Ext.ux.GroupTabRenderer": {
      "idx": 838,
      "alias": [
        "plugin.grouptabrenderer"
      ],
      "alternates": []
    },
    "Ext.ux.IFrame": {
      "idx": 840,
      "alias": [
        "widget.uxiframe"
      ],
      "alternates": []
    },
    "Ext.ux.LiveSearchGridPanel": {
      "idx": 842,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.PreviewPlugin": {
      "idx": 843,
      "alias": [
        "plugin.preview"
      ],
      "alternates": []
    },
    "Ext.ux.ProgressBarPager": {
      "idx": 844,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.RowExpander": {
      "idx": 845,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.SlidingPager": {
      "idx": 846,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.Spotlight": {
      "idx": 847,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.TabCloseMenu": {
      "idx": 848,
      "alias": [
        "plugin.tabclosemenu"
      ],
      "alternates": []
    },
    "Ext.ux.TabReorderer": {
      "idx": 849,
      "alias": [
        "plugin.tabreorderer"
      ],
      "alternates": []
    },
    "Ext.ux.TabScrollerMenu": {
      "idx": 850,
      "alias": [
        "plugin.tabscrollermenu"
      ],
      "alternates": []
    },
    "Ext.ux.ToolbarDroppable": {
      "idx": 851,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.TreePicker": {
      "idx": 852,
      "alias": [
        "widget.treepicker"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.DataSimlet": {
      "idx": 894,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.JsonSimlet": {
      "idx": 895,
      "alias": [
        "simlet.json"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.SimManager": {
      "idx": 897,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.SimXhr": {
      "idx": 896,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.Simlet": {
      "idx": 893,
      "alias": [
        "simlet.basic"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.XmlSimlet": {
      "idx": 898,
      "alias": [
        "simlet.xml"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Button": {
      "idx": 868,
      "alias": [
        "widget.colorbutton"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ButtonController": {
      "idx": 867,
      "alias": [
        "controller.colorpick-buttoncontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorMap": {
      "idx": 856,
      "alias": [
        "widget.colorpickercolormap"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorMapController": {
      "idx": 855,
      "alias": [
        "controller.colorpickercolormapcontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorPreview": {
      "idx": 859,
      "alias": [
        "widget.colorpickercolorpreview"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorUtils": {
      "idx": 854,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.colorpick.Field": {
      "idx": 869,
      "alias": [
        "widget.colorfield"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Selection": {
      "idx": 853,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.colorpick.Selector": {
      "idx": 866,
      "alias": [
        "widget.colorselector"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SelectorController": {
      "idx": 858,
      "alias": [
        "controller.colorpick-selectorcontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SelectorModel": {
      "idx": 857,
      "alias": [
        "viewmodel.colorpick-selectormodel"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Slider": {
      "idx": 861,
      "alias": [
        "widget.colorpickerslider"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderAlpha": {
      "idx": 862,
      "alias": [
        "widget.colorpickerslideralpha"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderController": {
      "idx": 860,
      "alias": [
        "controller.colorpick-slidercontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderHue": {
      "idx": 865,
      "alias": [
        "widget.colorpickersliderhue"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderSaturation": {
      "idx": 863,
      "alias": [
        "widget.colorpickerslidersaturation"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderValue": {
      "idx": 864,
      "alias": [
        "widget.colorpickerslidervalue"
      ],
      "alternates": []
    },
    "Ext.ux.dashboard.GoogleRssPart": {
      "idx": 873,
      "alias": [
        "part.google-rss"
      ],
      "alternates": []
    },
    "Ext.ux.dashboard.GoogleRssView": {
      "idx": 872,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.data.PagingMemoryProxy": {
      "idx": 874,
      "alias": [
        "proxy.pagingmemory"
      ],
      "alternates": [
        "Ext.data.PagingMemoryProxy"
      ]
    },
    "Ext.ux.dd.CellFieldDropZone": {
      "idx": 875,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.dd.PanelFieldDragZone": {
      "idx": 876,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.App": {
      "idx": 878,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.Desktop": {
      "idx": 877,
      "alias": [
        "widget.desktop"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Module": {
      "idx": 879,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.ShortcutModel": {
      "idx": 880,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.StartMenu": {
      "idx": 881,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.TaskBar": {
      "idx": 882,
      "alias": [
        "widget.taskbar"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.TrayClock": {
      "idx": 882,
      "alias": [
        "widget.trayclock"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Video": {
      "idx": 883,
      "alias": [
        "widget.video"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Wallpaper": {
      "idx": 884,
      "alias": [
        "widget.wallpaper"
      ],
      "alternates": []
    },
    "Ext.ux.event.Driver": {
      "idx": 899,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Maker": {
      "idx": 900,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Player": {
      "idx": 901,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Recorder": {
      "idx": 902,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.RecorderManager": {
      "idx": 885,
      "alias": [
        "widget.eventrecordermanager"
      ],
      "alternates": []
    },
    "Ext.ux.form.ItemSelector": {
      "idx": 887,
      "alias": [
        "widget.itemselector",
        "widget.itemselectorfield"
      ],
      "alternates": [
        "Ext.ux.ItemSelector"
      ]
    },
    "Ext.ux.form.MultiSelect": {
      "idx": 886,
      "alias": [
        "widget.multiselect",
        "widget.multiselectfield"
      ],
      "alternates": [
        "Ext.ux.Multiselect"
      ]
    },
    "Ext.ux.form.SearchField": {
      "idx": 888,
      "alias": [
        "widget.searchfield"
      ],
      "alternates": []
    },
    "Ext.ux.google.Api": {
      "idx": 870,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Feeds": {
      "idx": 871,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.grid.SubTable": {
      "idx": 889,
      "alias": [
        "plugin.subtable"
      ],
      "alternates": []
    },
    "Ext.ux.grid.TransformGrid": {
      "idx": 890,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.rating.Picker": {
      "idx": 891,
      "alias": [
        "widget.rating"
      ],
      "alternates": []
    },
    "Ext.ux.statusbar.StatusBar": {
      "idx": 841,
      "alias": [
        "widget.statusbar"
      ],
      "alternates": [
        "Ext.ux.StatusBar"
      ]
    },
    "Ext.ux.statusbar.ValidationStatus": {
      "idx": 892,
      "alias": [],
      "alternates": []
    },
    "Ext.view.AbstractView": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.view.BoundList": {
      "idx": 530,
      "alias": [
        "widget.boundlist"
      ],
      "alternates": [
        "Ext.BoundList"
      ]
    },
    "Ext.view.BoundListKeyNav": {
      "idx": 522,
      "alias": [
        "view.navigation.boundlist"
      ],
      "alternates": []
    },
    "Ext.view.DragZone": {
      "idx": 660,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DropZone": {
      "idx": 557,
      "alias": [],
      "alternates": []
    },
    "Ext.view.MultiSelector": {
      "idx": 667,
      "alias": [
        "widget.multiselector"
      ],
      "alternates": []
    },
    "Ext.view.MultiSelectorSearch": {
      "idx": 666,
      "alias": [
        "widget.multiselector-search"
      ],
      "alternates": []
    },
    "Ext.view.NavigationModel": {
      "idx": 400,
      "alias": [
        "view.navigation.default"
      ],
      "alternates": []
    },
    "Ext.view.NodeCache": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.view.Table": {
      "idx": 408,
      "alias": [
        "widget.gridview",
        "widget.tableview"
      ],
      "alternates": [
        "Ext.grid.View"
      ]
    },
    "Ext.view.TableLayout": {
      "idx": 405,
      "alias": [
        "layout.tableview"
      ],
      "alternates": []
    },
    "Ext.view.View": {
      "idx": 403,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.window.MessageBox": {
      "idx": 504,
      "alias": [
        "widget.messagebox"
      ],
      "alternates": []
    },
    "Ext.window.Toast": {
      "idx": 668,
      "alias": [
        "widget.toast"
      ],
      "alternates": []
    },
    "Ext.window.Window": {
      "idx": 466,
      "alias": [
        "widget.window"
      ],
      "alternates": [
        "Ext.Window"
      ]
    }
  },
  "packages": {
    "classic": {
      "build": {
        "dir": "${package.output}"
      },
      "creator": "Sencha",
      "output": "${framework.dir}/build",
      "requires": [
        "ext",
        "core",
        "classic"
      ],
      "type": "toolkit",
      "version": "6.0.0"
    },
    "core": {
      "alternateName": [
        "sencha-core"
      ],
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [
        "ext"
      ],
      "slicer": {
        "js": []
      },
      "type": "code",
      "version": "5.0.0"
    },
    "ext": {
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [],
      "type": "framework",
      "version": "6.0.0"
    }
  },
  "bootRelative": true
};
var Ext = Ext || { }; Ext.manifest = {
  "paths": {
    "Ext": "classic/classic/src",
    "Ext.AbstractManager": "packages/core/src/AbstractManager.js",
    "Ext.Ajax": "packages/core/src/Ajax.js",
    "Ext.AnimationQueue": "packages/core/src/AnimationQueue.js",
    "Ext.ComponentManager": "packages/core/src/ComponentManager.js",
    "Ext.ComponentQuery": "packages/core/src/ComponentQuery.js",
    "Ext.Evented": "packages/core/src/Evented.js",
    "Ext.Factory": "packages/core/src/mixin/Factoryable.js",
    "Ext.GlobalEvents": "packages/core/src/GlobalEvents.js",
    "Ext.JSON": "packages/core/src/JSON.js",
    "Ext.Mixin": "packages/core/src/class/Mixin.js",
    "Ext.Msg": "classic/classic/src/window/MessageBox.js",
    "Ext.String.format": "packages/core/src/Template.js",
    "Ext.TaskQueue": "packages/core/src/TaskQueue.js",
    "Ext.Template": "packages/core/src/Template.js",
    "Ext.Widget": "packages/core/src/Widget.js",
    "Ext.XTemplate": "packages/core/src/XTemplate.js",
    "Ext.app": "packages/core/src/app",
    "Ext.app.bindinspector": "classic/classic/src/app/bindinspector",
    "Ext.chart": "packages/charts/src/chart",
    "Ext.chart.LegendBase": "packages/charts/classic/src/chart/LegendBase.js",
    "Ext.chart.TipSurface": "packages/charts/classic/src/chart/TipSurface.js",
    "Ext.chart.interactions.ItemInfo": "packages/charts/classic/src/chart/interactions/ItemInfo.js",
    "Ext.chart.overrides": "packages/charts/classic/overrides",
    "Ext.data": "packages/core/src/data",
    "Ext.direct": "packages/core/src/direct",
    "Ext.dom": "packages/core/src/dom",
    "Ext.dom.ButtonElement": "classic/classic/src/dom/ButtonElement.js",
    "Ext.dom.Layer": "classic/classic/src/dom/Layer.js",
    "Ext.draw": "packages/charts/src/draw",
    "Ext.draw.ContainerBase": "packages/charts/classic/src/draw/ContainerBase.js",
    "Ext.draw.SurfaceBase": "packages/charts/classic/src/draw/SurfaceBase.js",
    "Ext.draw.engine.SvgContext.Gradient": "packages/charts/src/draw/engine/SvgContext.js",
    "Ext.event": "packages/core/src/event",
    "Ext.event.publisher.MouseEnterLeave": "classic/classic/src/event/publisher/MouseEnterLeave.js",
    "Ext.fx.Animation": "packages/core/src/fx/Animation.js",
    "Ext.fx.Runner": "packages/core/src/fx/Runner.js",
    "Ext.fx.State": "packages/core/src/fx/State.js",
    "Ext.fx.animation": "packages/core/src/fx/animation",
    "Ext.fx.easing": "packages/core/src/fx/easing",
    "Ext.fx.layout": "packages/core/src/fx/layout",
    "Ext.fx.runner": "packages/core/src/fx/runner",
    "Ext.mixin": "packages/core/src/mixin",
    "Ext.overrides": "classic/classic/overrides",
    "Ext.overrides.util.Positionable": "classic/classic/overrides/Positionable.js",
    "Ext.perf": "packages/core/src/perf",
    "Ext.plugin.Abstract": "packages/core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "packages/core/src/plugin/LazyItems.js",
    "Ext.scroll": "packages/core/src/scroll",
    "Ext.util": "packages/core/src/util",
    "Ext.util.Animate": "classic/classic/src/util/Animate.js",
    "Ext.util.CSS": "classic/classic/src/util/CSS.js",
    "Ext.util.ClickRepeater": "classic/classic/src/util/ClickRepeater.js",
    "Ext.util.ComponentDragger": "classic/classic/src/util/ComponentDragger.js",
    "Ext.util.Cookies": "classic/classic/src/util/Cookies.js",
    "Ext.util.ElementContainer": "classic/classic/src/util/ElementContainer.js",
    "Ext.util.Floating": "classic/classic/src/util/Floating.js",
    "Ext.util.FocusTrap": "classic/classic/src/util/FocusTrap.js",
    "Ext.util.Focusable": "classic/classic/src/util/Focusable.js",
    "Ext.util.FocusableContainer": "classic/classic/src/util/FocusableContainer.js",
    "Ext.util.Format.format": "packages/core/src/Template.js",
    "Ext.util.KeyMap": "classic/classic/src/util/KeyMap.js",
    "Ext.util.KeyNav": "classic/classic/src/util/KeyNav.js",
    "Ext.util.KeyboardInteractive": "classic/classic/src/util/KeyboardInteractive.js",
    "Ext.util.Memento": "classic/classic/src/util/Memento.js",
    "Ext.util.ProtoElement": "classic/classic/src/util/ProtoElement.js",
    "Ext.util.Queue": "classic/classic/src/util/Queue.js",
    "Ext.util.Renderable": "classic/classic/src/util/Renderable.js",
    "Ext.util.StoreHolder": "classic/classic/src/util/StoreHolder.js",
    "Ext.ux.BoxReorderer": "packages/ux/classic/src/BoxReorderer.js",
    "Ext.ux.CellDragDrop": "packages/ux/classic/src/CellDragDrop.js",
    "Ext.ux.DataTip": "packages/ux/classic/src/DataTip.js",
    "Ext.ux.DataView.Animated": "packages/ux/classic/src/DataView/Animated.js",
    "Ext.ux.DataView.DragSelector": "packages/ux/classic/src/DataView/DragSelector.js",
    "Ext.ux.DataView.Draggable": "packages/ux/classic/src/DataView/Draggable.js",
    "Ext.ux.DataView.LabelEditor": "packages/ux/classic/src/DataView/LabelEditor.js",
    "Ext.ux.Explorer": "packages/ux/classic/src/Explorer.js",
    "Ext.ux.FieldReplicator": "packages/ux/classic/src/FieldReplicator.js",
    "Ext.ux.GMapPanel": "packages/ux/classic/src/GMapPanel.js",
    "Ext.ux.GroupTabPanel": "packages/ux/classic/src/GroupTabPanel.js",
    "Ext.ux.GroupTabRenderer": "packages/ux/classic/src/GroupTabRenderer.js",
    "Ext.ux.IFrame": "packages/ux/classic/src/IFrame.js",
    "Ext.ux.LiveSearchGridPanel": "packages/ux/classic/src/LiveSearchGridPanel.js",
    "Ext.ux.PreviewPlugin": "packages/ux/classic/src/PreviewPlugin.js",
    "Ext.ux.ProgressBarPager": "packages/ux/classic/src/ProgressBarPager.js",
    "Ext.ux.RowExpander": "packages/ux/classic/src/RowExpander.js",
    "Ext.ux.SlidingPager": "packages/ux/classic/src/SlidingPager.js",
    "Ext.ux.Spotlight": "packages/ux/classic/src/Spotlight.js",
    "Ext.ux.TabCloseMenu": "packages/ux/classic/src/TabCloseMenu.js",
    "Ext.ux.TabReorderer": "packages/ux/classic/src/TabReorderer.js",
    "Ext.ux.TabScrollerMenu": "packages/ux/classic/src/TabScrollerMenu.js",
    "Ext.ux.ToolbarDroppable": "packages/ux/classic/src/ToolbarDroppable.js",
    "Ext.ux.TreePicker": "packages/ux/classic/src/TreePicker.js",
    "Ext.ux.ajax.DataSimlet": "packages/ux/src/ajax/DataSimlet.js",
    "Ext.ux.ajax.JsonSimlet": "packages/ux/src/ajax/JsonSimlet.js",
    "Ext.ux.ajax.SimManager": "packages/ux/src/ajax/SimManager.js",
    "Ext.ux.ajax.SimXhr": "packages/ux/src/ajax/SimXhr.js",
    "Ext.ux.ajax.Simlet": "packages/ux/src/ajax/Simlet.js",
    "Ext.ux.ajax.XmlSimlet": "packages/ux/src/ajax/XmlSimlet.js",
    "Ext.ux.colorpick.Button": "packages/ux/classic/src/colorpick/Button.js",
    "Ext.ux.colorpick.ButtonController": "packages/ux/classic/src/colorpick/ButtonController.js",
    "Ext.ux.colorpick.ColorMap": "packages/ux/classic/src/colorpick/ColorMap.js",
    "Ext.ux.colorpick.ColorMapController": "packages/ux/classic/src/colorpick/ColorMapController.js",
    "Ext.ux.colorpick.ColorPreview": "packages/ux/classic/src/colorpick/ColorPreview.js",
    "Ext.ux.colorpick.ColorUtils": "packages/ux/classic/src/colorpick/ColorUtils.js",
    "Ext.ux.colorpick.Field": "packages/ux/classic/src/colorpick/Field.js",
    "Ext.ux.colorpick.Selection": "packages/ux/classic/src/colorpick/Selection.js",
    "Ext.ux.colorpick.Selector": "packages/ux/classic/src/colorpick/Selector.js",
    "Ext.ux.colorpick.SelectorController": "packages/ux/classic/src/colorpick/SelectorController.js",
    "Ext.ux.colorpick.SelectorModel": "packages/ux/classic/src/colorpick/SelectorModel.js",
    "Ext.ux.colorpick.Slider": "packages/ux/classic/src/colorpick/Slider.js",
    "Ext.ux.colorpick.SliderAlpha": "packages/ux/classic/src/colorpick/SliderAlpha.js",
    "Ext.ux.colorpick.SliderController": "packages/ux/classic/src/colorpick/SliderController.js",
    "Ext.ux.colorpick.SliderHue": "packages/ux/classic/src/colorpick/SliderHue.js",
    "Ext.ux.colorpick.SliderSaturation": "packages/ux/classic/src/colorpick/SliderSaturation.js",
    "Ext.ux.colorpick.SliderValue": "packages/ux/classic/src/colorpick/SliderValue.js",
    "Ext.ux.dashboard.GoogleRssPart": "packages/ux/classic/src/dashboard/GoogleRssPart.js",
    "Ext.ux.dashboard.GoogleRssView": "packages/ux/classic/src/dashboard/GoogleRssView.js",
    "Ext.ux.data.PagingMemoryProxy": "packages/ux/classic/src/data/PagingMemoryProxy.js",
    "Ext.ux.dd.CellFieldDropZone": "packages/ux/classic/src/dd/CellFieldDropZone.js",
    "Ext.ux.dd.PanelFieldDragZone": "packages/ux/classic/src/dd/PanelFieldDragZone.js",
    "Ext.ux.desktop.App": "packages/ux/classic/src/desktop/App.js",
    "Ext.ux.desktop.Desktop": "packages/ux/classic/src/desktop/Desktop.js",
    "Ext.ux.desktop.Module": "packages/ux/classic/src/desktop/Module.js",
    "Ext.ux.desktop.ShortcutModel": "packages/ux/classic/src/desktop/ShortcutModel.js",
    "Ext.ux.desktop.StartMenu": "packages/ux/classic/src/desktop/StartMenu.js",
    "Ext.ux.desktop.TaskBar": "packages/ux/classic/src/desktop/TaskBar.js",
    "Ext.ux.desktop.TrayClock": "packages/ux/classic/src/desktop/TaskBar.js",
    "Ext.ux.desktop.Video": "packages/ux/classic/src/desktop/Video.js",
    "Ext.ux.desktop.Wallpaper": "packages/ux/classic/src/desktop/Wallpaper.js",
    "Ext.ux.event.Driver": "packages/ux/src/event/Driver.js",
    "Ext.ux.event.Maker": "packages/ux/src/event/Maker.js",
    "Ext.ux.event.Player": "packages/ux/src/event/Player.js",
    "Ext.ux.event.Recorder": "packages/ux/src/event/Recorder.js",
    "Ext.ux.event.RecorderManager": "packages/ux/classic/src/event/RecorderManager.js",
    "Ext.ux.form.ItemSelector": "packages/ux/classic/src/form/ItemSelector.js",
    "Ext.ux.form.MultiSelect": "packages/ux/classic/src/form/MultiSelect.js",
    "Ext.ux.form.SearchField": "packages/ux/classic/src/form/SearchField.js",
    "Ext.ux.google.Api": "packages/ux/src/google/Api.js",
    "Ext.ux.google.Feeds": "packages/ux/src/google/Feeds.js",
    "Ext.ux.grid.SubTable": "packages/ux/classic/src/grid/SubTable.js",
    "Ext.ux.grid.TransformGrid": "packages/ux/classic/src/grid/TransformGrid.js",
    "Ext.ux.rating.Picker": "packages/ux/classic/src/rating/Picker.js",
    "Ext.ux.statusbar.StatusBar": "packages/ux/classic/src/statusbar/StatusBar.js",
    "Ext.ux.statusbar.ValidationStatus": "packages/ux/classic/src/statusbar/ValidationStatus.js"
  },
  "loadOrder": [
    {
      "path": "packages/core/src/class/Mixin.js",
      "requires": [],
      "uses": [],
      "idx": 0
    },
    {
      "path": "packages/core/src/util/DelayedTask.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 1
    },
    {
      "path": "packages/core/src/util/Event.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 2
    },
    {
      "path": "packages/core/src/mixin/Identifiable.js",
      "requires": [],
      "uses": [],
      "idx": 3
    },
    {
      "path": "packages/core/src/mixin/Observable.js",
      "requires": [
        0,
        2,
        3
      ],
      "uses": [
        49
      ],
      "idx": 4
    },
    {
      "path": "packages/core/src/util/HashMap.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 5
    },
    {
      "path": "packages/core/src/AbstractManager.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 6
    },
    {
      "path": "packages/core/src/data/flash/BinaryXhr.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 7
    },
    {
      "path": "packages/core/src/data/Connection.js",
      "requires": [
        4,
        7
      ],
      "uses": [
        47,
        76
      ],
      "idx": 8
    },
    {
      "path": "packages/core/src/Ajax.js",
      "requires": [
        8
      ],
      "uses": [],
      "idx": 9
    },
    {
      "path": "packages/core/src/AnimationQueue.js",
      "requires": [],
      "uses": [],
      "idx": 10
    },
    {
      "path": "packages/core/src/ComponentManager.js",
      "requires": [],
      "uses": [
        27,
        47
      ],
      "idx": 11
    },
    {
      "path": "packages/core/src/util/Operators.js",
      "requires": [],
      "uses": [],
      "idx": 12
    },
    {
      "path": "packages/core/src/util/LruCache.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 13
    },
    {
      "path": "packages/core/src/ComponentQuery.js",
      "requires": [
        11,
        12,
        13
      ],
      "uses": [
        80
      ],
      "idx": 14
    },
    {
      "path": "packages/core/src/Evented.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 15
    },
    {
      "path": "packages/core/src/util/Positionable.js",
      "requires": [
        17
      ],
      "uses": [
        25,
        47
      ],
      "idx": 16
    },
    {
      "path": "classic/classic/overrides/Positionable.js",
      "requires": [],
      "uses": [],
      "idx": 17
    },
    {
      "path": "packages/core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 18
    },
    {
      "path": "packages/core/src/dom/Underlay.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "packages/core/src/dom/Shadow.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 20
    },
    {
      "path": "packages/core/src/dom/Shim.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 21
    },
    {
      "path": "packages/core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        30
      ],
      "idx": 22
    },
    {
      "path": "packages/core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 23
    },
    {
      "path": "packages/core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 24
    },
    {
      "path": "packages/core/src/util/Region.js",
      "requires": [
        24
      ],
      "uses": [],
      "idx": 25
    },
    {
      "path": "packages/core/src/util/Point.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 26
    },
    {
      "path": "packages/core/src/event/Event.js",
      "requires": [
        26,
        28
      ],
      "uses": [],
      "idx": 27
    },
    {
      "path": "classic/classic/overrides/event/Event.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 28
    },
    {
      "path": "classic/classic/src/rtl/event/Event.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 29
    },
    {
      "path": "packages/core/src/event/publisher/Dom.js",
      "requires": [
        23,
        27,
        31
      ],
      "uses": [
        76
      ],
      "idx": 30
    },
    {
      "path": "classic/classic/overrides/event/publisher/Dom.js",
      "requires": [],
      "uses": [],
      "idx": 31
    },
    {
      "path": "packages/core/src/event/publisher/Gesture.js",
      "requires": [
        10,
        26,
        30,
        33
      ],
      "uses": [
        27,
        47,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        278,
        279,
        280
      ],
      "idx": 32
    },
    {
      "path": "classic/classic/overrides/event/publisher/Gesture.js",
      "requires": [],
      "uses": [
        27
      ],
      "idx": 33
    },
    {
      "path": "packages/core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        47
      ],
      "idx": 34
    },
    {
      "path": "packages/core/src/TaskQueue.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 35
    },
    {
      "path": "packages/core/src/util/sizemonitor/Abstract.js",
      "requires": [
        34,
        35
      ],
      "uses": [],
      "idx": 36
    },
    {
      "path": "packages/core/src/util/sizemonitor/Default.js",
      "requires": [
        36
      ],
      "uses": [],
      "idx": 37
    },
    {
      "path": "packages/core/src/util/sizemonitor/Scroll.js",
      "requires": [
        36
      ],
      "uses": [
        35
      ],
      "idx": 38
    },
    {
      "path": "packages/core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        36
      ],
      "uses": [
        35
      ],
      "idx": 39
    },
    {
      "path": "packages/core/src/util/SizeMonitor.js",
      "requires": [
        37,
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "packages/core/src/event/publisher/ElementSize.js",
      "requires": [
        23,
        40
      ],
      "uses": [
        35
      ],
      "idx": 41
    },
    {
      "path": "packages/core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 42
    },
    {
      "path": "packages/core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 43
    },
    {
      "path": "packages/core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 44
    },
    {
      "path": "packages/core/src/util/PaintMonitor.js",
      "requires": [
        43,
        44
      ],
      "uses": [],
      "idx": 45
    },
    {
      "path": "packages/core/src/event/publisher/ElementPaint.js",
      "requires": [
        23,
        35,
        45
      ],
      "uses": [],
      "idx": 46
    },
    {
      "path": "packages/core/src/dom/Element.js",
      "requires": [
        4,
        16,
        20,
        21,
        22,
        30,
        32,
        41,
        46,
        74
      ],
      "uses": [
        23,
        25,
        72,
        73,
        76,
        80,
        92,
        240,
        281,
        291,
        293
      ],
      "idx": 47
    },
    {
      "path": "packages/core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 48
    },
    {
      "path": "packages/core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 49
    },
    {
      "path": "packages/core/src/util/AbstractMixedCollection.js",
      "requires": [
        48,
        49
      ],
      "uses": [],
      "idx": 50
    },
    {
      "path": "packages/core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 51
    },
    {
      "path": "packages/core/src/util/Sortable.js",
      "requires": [
        51
      ],
      "uses": [
        53
      ],
      "idx": 52
    },
    {
      "path": "packages/core/src/util/MixedCollection.js",
      "requires": [
        50,
        52
      ],
      "uses": [],
      "idx": 53
    },
    {
      "path": "packages/core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 54
    },
    {
      "path": "classic/classic/src/fx/target/Target.js",
      "requires": [],
      "uses": [],
      "idx": 55
    },
    {
      "path": "classic/classic/src/fx/target/Element.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 56
    },
    {
      "path": "classic/classic/src/fx/target/ElementCSS.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "classic/classic/src/fx/target/CompositeElement.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 58
    },
    {
      "path": "classic/classic/src/fx/target/CompositeElementCSS.js",
      "requires": [
        57,
        58
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "classic/classic/src/fx/target/Sprite.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 60
    },
    {
      "path": "classic/classic/src/fx/target/CompositeSprite.js",
      "requires": [
        60
      ],
      "uses": [],
      "idx": 61
    },
    {
      "path": "classic/classic/src/fx/target/Component.js",
      "requires": [
        55
      ],
      "uses": [
        76
      ],
      "idx": 62
    },
    {
      "path": "classic/classic/src/fx/Queue.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 63
    },
    {
      "path": "classic/classic/src/fx/Manager.js",
      "requires": [
        53,
        54,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "classic/classic/src/fx/Animator.js",
      "requires": [
        49,
        64
      ],
      "uses": [
        70
      ],
      "idx": 65
    },
    {
      "path": "classic/classic/src/fx/CubicBezier.js",
      "requires": [],
      "uses": [],
      "idx": 66
    },
    {
      "path": "classic/classic/src/fx/Easing.js",
      "requires": [
        66
      ],
      "uses": [],
      "idx": 67
    },
    {
      "path": "classic/classic/src/fx/DrawPath.js",
      "requires": [],
      "uses": [],
      "idx": 68
    },
    {
      "path": "classic/classic/src/fx/PropertyHandler.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 69
    },
    {
      "path": "classic/classic/src/fx/Anim.js",
      "requires": [
        49,
        64,
        65,
        66,
        67,
        69
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "classic/classic/src/util/Animate.js",
      "requires": [
        64,
        70
      ],
      "uses": [],
      "idx": 71
    },
    {
      "path": "packages/core/src/dom/Fly.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "packages/core/src/dom/CompositeElementLite.js",
      "requires": [
        72
      ],
      "uses": [
        47
      ],
      "idx": 73
    },
    {
      "path": "classic/classic/overrides/dom/Element.js",
      "requires": [
        47,
        71,
        73
      ],
      "uses": [
        64,
        65,
        70,
        72,
        80,
        240,
        269,
        334,
        359,
        378,
        380,
        425,
        498
      ],
      "idx": 74
    },
    {
      "path": "classic/classic/src/rtl/dom/Element.js",
      "requires": [
        73
      ],
      "uses": [
        47
      ],
      "idx": 75
    },
    {
      "path": "packages/core/src/GlobalEvents.js",
      "requires": [
        4,
        47,
        77
      ],
      "uses": [],
      "idx": 76
    },
    {
      "path": "classic/classic/overrides/GlobalEvents.js",
      "requires": [],
      "uses": [],
      "idx": 77
    },
    {
      "path": "packages/core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "packages/core/src/util/Format.js",
      "requires": [],
      "uses": [
        80,
        240
      ],
      "idx": 79
    },
    {
      "path": "packages/core/src/Template.js",
      "requires": [
        79
      ],
      "uses": [
        240
      ],
      "idx": 80
    },
    {
      "path": "packages/core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 81
    },
    {
      "path": "packages/core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 82
    },
    {
      "path": "packages/core/src/mixin/ComponentDelegation.js",
      "requires": [
        0,
        4
      ],
      "uses": [
        2
      ],
      "idx": 83
    },
    {
      "path": "packages/core/src/Widget.js",
      "requires": [
        15,
        47,
        81,
        82,
        83,
        85
      ],
      "uses": [
        11,
        14
      ],
      "idx": 84
    },
    {
      "path": "classic/classic/overrides/Widget.js",
      "requires": [],
      "uses": [
        47,
        125,
        350
      ],
      "idx": 85
    },
    {
      "path": "packages/core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 86
    },
    {
      "path": "packages/core/src/util/XTemplateCompiler.js",
      "requires": [
        86
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "packages/core/src/XTemplate.js",
      "requires": [
        80,
        87
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "packages/core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 89
    },
    {
      "path": "packages/core/src/app/domain/Component.js",
      "requires": [
        84,
        89,
        128
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "classic/classic/src/util/ProtoElement.js",
      "requires": [],
      "uses": [
        47,
        240
      ],
      "idx": 91
    },
    {
      "path": "packages/core/src/dom/CompositeElement.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "packages/core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 93
    },
    {
      "path": "packages/core/src/scroll/Scroller.js",
      "requires": [
        15,
        93
      ],
      "uses": [
        76,
        111,
        113
      ],
      "idx": 94
    },
    {
      "path": "classic/classic/src/rtl/scroll/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 95
    },
    {
      "path": "packages/core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 96
    },
    {
      "path": "packages/core/src/fx/easing/Momentum.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "packages/core/src/fx/easing/Bounce.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "packages/core/src/fx/easing/BoundMomentum.js",
      "requires": [
        96,
        97,
        98
      ],
      "uses": [],
      "idx": 99
    },
    {
      "path": "packages/core/src/fx/easing/Linear.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 100
    },
    {
      "path": "packages/core/src/fx/easing/EaseOut.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 101
    },
    {
      "path": "packages/core/src/util/translatable/Abstract.js",
      "requires": [
        15,
        100
      ],
      "uses": [
        10
      ],
      "idx": 102
    },
    {
      "path": "packages/core/src/util/translatable/Dom.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 103
    },
    {
      "path": "packages/core/src/util/translatable/CssTransform.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "packages/core/src/util/translatable/ScrollPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 105
    },
    {
      "path": "packages/core/src/util/translatable/ScrollParent.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 106
    },
    {
      "path": "packages/core/src/util/translatable/CssPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 107
    },
    {
      "path": "packages/core/src/util/Translatable.js",
      "requires": [
        104,
        105,
        106,
        107
      ],
      "uses": [],
      "idx": 108
    },
    {
      "path": "packages/core/src/scroll/Indicator.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "classic/classic/src/rtl/scroll/Indicator.js",
      "requires": [],
      "uses": [],
      "idx": 110
    },
    {
      "path": "packages/core/src/scroll/TouchScroller.js",
      "requires": [
        76,
        94,
        99,
        101,
        108,
        109
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "classic/classic/src/rtl/scroll/TouchScroller.js",
      "requires": [],
      "uses": [],
      "idx": 112
    },
    {
      "path": "packages/core/src/scroll/DomScroller.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 113
    },
    {
      "path": "classic/classic/src/rtl/scroll/DomScroller.js",
      "requires": [],
      "uses": [],
      "idx": 114
    },
    {
      "path": "classic/classic/src/util/Floating.js",
      "requires": [],
      "uses": [
        11,
        76,
        340
      ],
      "idx": 115
    },
    {
      "path": "classic/classic/src/util/ElementContainer.js",
      "requires": [],
      "uses": [],
      "idx": 116
    },
    {
      "path": "classic/classic/src/util/Renderable.js",
      "requires": [
        47
      ],
      "uses": [
        88,
        125,
        240
      ],
      "idx": 117
    },
    {
      "path": "classic/classic/src/rtl/util/Renderable.js",
      "requires": [],
      "uses": [],
      "idx": 118
    },
    {
      "path": "classic/classic/src/state/Provider.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 119
    },
    {
      "path": "classic/classic/src/state/Manager.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "classic/classic/src/state/Stateful.js",
      "requires": [
        120
      ],
      "uses": [
        54
      ],
      "idx": 121
    },
    {
      "path": "classic/classic/src/util/Focusable.js",
      "requires": [
        1
      ],
      "uses": [
        14,
        47,
        125
      ],
      "idx": 122
    },
    {
      "path": "packages/core/src/mixin/Accessible.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 123
    },
    {
      "path": "classic/classic/src/util/KeyboardInteractive.js",
      "requires": [
        0
      ],
      "uses": [
        27
      ],
      "idx": 124
    },
    {
      "path": "classic/classic/src/Component.js",
      "requires": [
        11,
        14,
        16,
        49,
        71,
        76,
        81,
        82,
        83,
        91,
        92,
        94,
        111,
        113,
        115,
        116,
        117,
        121,
        122,
        123,
        124
      ],
      "uses": [
        1,
        17,
        28,
        31,
        33,
        47,
        64,
        74,
        77,
        85,
        88,
        128,
        192,
        205,
        240,
        241,
        323,
        335,
        336,
        337,
        340,
        348,
        350,
        464,
        614,
        626,
        632
      ],
      "idx": 125
    },
    {
      "path": "classic/classic/src/layout/container/border/Region.js",
      "requires": [],
      "uses": [],
      "idx": 126
    },
    {
      "path": "classic/classic/src/rtl/Component.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 127
    },
    {
      "path": "classic/classic/overrides/app/domain/Component.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 128
    },
    {
      "path": "packages/core/src/app/EventBus.js",
      "requires": [
        90
      ],
      "uses": [
        89
      ],
      "idx": 129
    },
    {
      "path": "packages/core/src/app/domain/Global.js",
      "requires": [
        76,
        89
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "packages/core/src/app/BaseController.js",
      "requires": [
        4,
        129,
        130
      ],
      "uses": [
        187,
        188,
        219
      ],
      "idx": 131
    },
    {
      "path": "packages/core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 132
    },
    {
      "path": "packages/core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "packages/core/src/util/Grouper.js",
      "requires": [
        51
      ],
      "uses": [],
      "idx": 134
    },
    {
      "path": "packages/core/src/util/Collection.js",
      "requires": [
        4,
        48,
        51,
        133,
        134
      ],
      "uses": [
        177,
        178,
        179
      ],
      "idx": 135
    },
    {
      "path": "packages/core/src/util/ObjectTemplate.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "packages/core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 137
    },
    {
      "path": "packages/core/src/data/schema/Association.js",
      "requires": [
        137
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "packages/core/src/data/schema/OneToOne.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "packages/core/src/data/schema/ManyToOne.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 140
    },
    {
      "path": "packages/core/src/data/schema/ManyToMany.js",
      "requires": [
        138
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "packages/core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 142
    },
    {
      "path": "packages/core/src/data/schema/Namer.js",
      "requires": [
        93,
        142
      ],
      "uses": [],
      "idx": 143
    },
    {
      "path": "packages/core/src/data/schema/Schema.js",
      "requires": [
        93,
        136,
        139,
        140,
        141,
        143
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "packages/core/src/data/AbstractStore.js",
      "requires": [
        4,
        48,
        93,
        135,
        144
      ],
      "uses": [
        183
      ],
      "idx": 145
    },
    {
      "path": "packages/core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 146
    },
    {
      "path": "packages/core/src/data/ErrorCollection.js",
      "requires": [
        53,
        146
      ],
      "uses": [
        155
      ],
      "idx": 147
    },
    {
      "path": "packages/core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 148
    },
    {
      "path": "packages/core/src/data/operation/Create.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 149
    },
    {
      "path": "packages/core/src/data/operation/Destroy.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "packages/core/src/data/operation/Read.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "packages/core/src/data/operation/Update.js",
      "requires": [
        148
      ],
      "uses": [],
      "idx": 152
    },
    {
      "path": "packages/core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 153
    },
    {
      "path": "packages/core/src/data/validator/Validator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 154
    },
    {
      "path": "packages/core/src/data/field/Field.js",
      "requires": [
        93,
        153,
        154
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "packages/core/src/data/field/Boolean.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "packages/core/src/data/field/Date.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "packages/core/src/data/field/Integer.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 158
    },
    {
      "path": "packages/core/src/data/field/Number.js",
      "requires": [
        158
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "packages/core/src/data/field/String.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "packages/core/src/data/identifier/Generator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 161
    },
    {
      "path": "packages/core/src/data/identifier/Sequential.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 162
    },
    {
      "path": "packages/core/src/data/Model.js",
      "requires": [
        144,
        147,
        148,
        149,
        150,
        151,
        152,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162
      ],
      "uses": [
        93,
        165,
        239
      ],
      "idx": 163
    },
    {
      "path": "packages/core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 164
    },
    {
      "path": "packages/core/src/data/reader/Reader.js",
      "requires": [
        4,
        13,
        88,
        93,
        164
      ],
      "uses": [
        144
      ],
      "idx": 165
    },
    {
      "path": "packages/core/src/data/writer/Writer.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "packages/core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        93,
        144,
        165,
        166
      ],
      "uses": [
        148,
        149,
        150,
        151,
        152,
        163,
        198
      ],
      "idx": 167
    },
    {
      "path": "packages/core/src/data/proxy/Client.js",
      "requires": [
        167
      ],
      "uses": [],
      "idx": 168
    },
    {
      "path": "packages/core/src/data/proxy/Memory.js",
      "requires": [
        168
      ],
      "uses": [
        48,
        52
      ],
      "idx": 169
    },
    {
      "path": "packages/core/src/data/ProxyStore.js",
      "requires": [
        145,
        148,
        149,
        150,
        151,
        152,
        163,
        167,
        169
      ],
      "uses": [
        1,
        144
      ],
      "idx": 170
    },
    {
      "path": "packages/core/src/data/LocalStore.js",
      "requires": [
        0
      ],
      "uses": [
        135
      ],
      "idx": 171
    },
    {
      "path": "packages/core/src/data/proxy/Server.js",
      "requires": [
        167
      ],
      "uses": [
        80,
        236
      ],
      "idx": 172
    },
    {
      "path": "packages/core/src/data/proxy/Ajax.js",
      "requires": [
        9,
        172
      ],
      "uses": [],
      "idx": 173
    },
    {
      "path": "packages/core/src/data/reader/Json.js",
      "requires": [
        78,
        165
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "packages/core/src/data/writer/Json.js",
      "requires": [
        166
      ],
      "uses": [],
      "idx": 175
    },
    {
      "path": "packages/core/src/util/Group.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 176
    },
    {
      "path": "packages/core/src/util/SorterCollection.js",
      "requires": [
        51,
        135
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "packages/core/src/util/FilterCollection.js",
      "requires": [
        48,
        135
      ],
      "uses": [],
      "idx": 178
    },
    {
      "path": "packages/core/src/util/GroupCollection.js",
      "requires": [
        135,
        176,
        177,
        178
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "packages/core/src/data/Store.js",
      "requires": [
        1,
        163,
        170,
        171,
        173,
        174,
        175,
        179
      ],
      "uses": [
        134,
        183,
        224
      ],
      "idx": 180
    },
    {
      "path": "packages/core/src/data/reader/Array.js",
      "requires": [
        174
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "packages/core/src/data/ArrayStore.js",
      "requires": [
        169,
        180,
        181
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "packages/core/src/data/StoreManager.js",
      "requires": [
        53,
        182
      ],
      "uses": [
        93,
        169,
        175,
        180,
        181
      ],
      "idx": 183
    },
    {
      "path": "packages/core/src/app/domain/Store.js",
      "requires": [
        89,
        145
      ],
      "uses": [],
      "idx": 184
    },
    {
      "path": "packages/core/src/app/route/Queue.js",
      "requires": [],
      "uses": [
        53
      ],
      "idx": 185
    },
    {
      "path": "packages/core/src/app/route/Route.js",
      "requires": [],
      "uses": [
        80
      ],
      "idx": 186
    },
    {
      "path": "packages/core/src/util/History.js",
      "requires": [
        49
      ],
      "uses": [
        331
      ],
      "idx": 187
    },
    {
      "path": "packages/core/src/app/route/Router.js",
      "requires": [
        185,
        186,
        187
      ],
      "uses": [],
      "idx": 188
    },
    {
      "path": "packages/core/src/app/Controller.js",
      "requires": [
        11,
        90,
        131,
        132,
        183,
        184,
        188
      ],
      "uses": [
        14,
        144
      ],
      "idx": 189
    },
    {
      "path": "packages/core/src/app/Application.js",
      "requires": [
        53,
        187,
        189,
        191,
        192
      ],
      "uses": [
        188
      ],
      "idx": 190
    },
    {
      "path": "packages/core/overrides/app/Application.js",
      "requires": [],
      "uses": [
        190
      ],
      "idx": 191
    },
    {
      "path": "classic/classic/overrides/app/Application.js",
      "requires": [],
      "uses": [
        189,
        470
      ],
      "idx": 192
    },
    {
      "path": "packages/core/src/app/Profile.js",
      "requires": [
        4
      ],
      "uses": [
        189
      ],
      "idx": 193
    },
    {
      "path": "packages/core/src/app/domain/View.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 194
    },
    {
      "path": "packages/core/src/app/ViewController.js",
      "requires": [
        93,
        131,
        194
      ],
      "uses": [],
      "idx": 195
    },
    {
      "path": "packages/core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 196
    },
    {
      "path": "packages/core/src/util/Scheduler.js",
      "requires": [
        4,
        196
      ],
      "uses": [
        76
      ],
      "idx": 197
    },
    {
      "path": "packages/core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 198
    },
    {
      "path": "packages/core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 199
    },
    {
      "path": "packages/core/src/data/matrix/Side.js",
      "requires": [
        199
      ],
      "uses": [],
      "idx": 200
    },
    {
      "path": "packages/core/src/data/matrix/Matrix.js",
      "requires": [
        200
      ],
      "uses": [],
      "idx": 201
    },
    {
      "path": "packages/core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 202
    },
    {
      "path": "packages/core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        202
      ],
      "uses": [],
      "idx": 203
    },
    {
      "path": "packages/core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        198
      ],
      "idx": 204
    },
    {
      "path": "packages/core/src/data/Session.js",
      "requires": [
        144,
        198,
        201,
        202,
        203,
        204
      ],
      "uses": [],
      "idx": 205
    },
    {
      "path": "packages/core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 206
    },
    {
      "path": "packages/core/src/app/bind/BaseBinding.js",
      "requires": [
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "packages/core/src/app/bind/Binding.js",
      "requires": [
        207
      ],
      "uses": [],
      "idx": 208
    },
    {
      "path": "packages/core/src/app/bind/AbstractStub.js",
      "requires": [
        206,
        208
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "packages/core/src/app/bind/Stub.js",
      "requires": [
        208,
        209
      ],
      "uses": [
        214
      ],
      "idx": 210
    },
    {
      "path": "packages/core/src/app/bind/LinkStub.js",
      "requires": [
        210
      ],
      "uses": [],
      "idx": 211
    },
    {
      "path": "packages/core/src/app/bind/RootStub.js",
      "requires": [
        209,
        210,
        211
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "packages/core/src/app/bind/Multi.js",
      "requires": [
        207
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "packages/core/src/app/bind/Formula.js",
      "requires": [
        13,
        206
      ],
      "uses": [],
      "idx": 214
    },
    {
      "path": "packages/core/src/app/bind/Template.js",
      "requires": [
        79
      ],
      "uses": [],
      "idx": 215
    },
    {
      "path": "packages/core/src/app/bind/TemplateBinding.js",
      "requires": [
        207,
        213,
        215
      ],
      "uses": [],
      "idx": 216
    },
    {
      "path": "packages/core/src/data/ChainedStore.js",
      "requires": [
        145,
        171
      ],
      "uses": [
        80,
        183
      ],
      "idx": 217
    },
    {
      "path": "packages/core/src/app/ViewModel.js",
      "requires": [
        3,
        93,
        197,
        205,
        211,
        212,
        213,
        214,
        216,
        217
      ],
      "uses": [
        1,
        144
      ],
      "idx": 218
    },
    {
      "path": "packages/core/src/app/domain/Controller.js",
      "requires": [
        89,
        189
      ],
      "uses": [
        131
      ],
      "idx": 219
    },
    {
      "path": "packages/core/src/direct/Manager.js",
      "requires": [
        4,
        53
      ],
      "uses": [
        80
      ],
      "idx": 220
    },
    {
      "path": "packages/core/src/direct/Provider.js",
      "requires": [
        4,
        220
      ],
      "uses": [],
      "idx": 221
    },
    {
      "path": "packages/core/src/app/domain/Direct.js",
      "requires": [
        89,
        221
      ],
      "uses": [],
      "idx": 222
    },
    {
      "path": "packages/core/src/data/PageMap.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 223
    },
    {
      "path": "packages/core/src/data/BufferedStore.js",
      "requires": [
        48,
        51,
        134,
        170,
        223
      ],
      "uses": [
        177,
        178,
        179
      ],
      "idx": 224
    },
    {
      "path": "packages/core/src/data/proxy/Direct.js",
      "requires": [
        172,
        220
      ],
      "uses": [],
      "idx": 225
    },
    {
      "path": "packages/core/src/data/DirectStore.js",
      "requires": [
        180,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "packages/core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 227
    },
    {
      "path": "packages/core/src/data/proxy/JsonP.js",
      "requires": [
        172,
        227
      ],
      "uses": [],
      "idx": 228
    },
    {
      "path": "packages/core/src/data/JsonPStore.js",
      "requires": [
        174,
        180,
        228
      ],
      "uses": [],
      "idx": 229
    },
    {
      "path": "packages/core/src/data/JsonStore.js",
      "requires": [
        173,
        174,
        175,
        180
      ],
      "uses": [],
      "idx": 230
    },
    {
      "path": "packages/core/src/data/ModelManager.js",
      "requires": [
        144
      ],
      "uses": [
        163
      ],
      "idx": 231
    },
    {
      "path": "packages/core/src/data/NodeInterface.js",
      "requires": [
        4,
        156,
        158,
        160,
        175
      ],
      "uses": [
        144
      ],
      "idx": 232
    },
    {
      "path": "packages/core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 233
    },
    {
      "path": "packages/core/src/data/TreeModel.js",
      "requires": [
        163,
        232,
        233
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "packages/core/src/data/NodeStore.js",
      "requires": [
        180,
        232,
        234
      ],
      "uses": [
        163
      ],
      "idx": 235
    },
    {
      "path": "packages/core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 236
    },
    {
      "path": "packages/core/src/data/TreeStore.js",
      "requires": [
        51,
        180,
        232,
        234
      ],
      "uses": [
        163
      ],
      "idx": 237
    },
    {
      "path": "packages/core/src/data/Types.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 238
    },
    {
      "path": "packages/core/src/data/Validation.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 239
    },
    {
      "path": "packages/core/src/dom/Helper.js",
      "requires": [
        241
      ],
      "uses": [
        80
      ],
      "idx": 240
    },
    {
      "path": "classic/classic/overrides/dom/Helper.js",
      "requires": [],
      "uses": [],
      "idx": 241
    },
    {
      "path": "packages/core/src/dom/Query.js",
      "requires": [
        12,
        240
      ],
      "uses": [
        13
      ],
      "idx": 242
    },
    {
      "path": "packages/core/src/data/reader/Xml.js",
      "requires": [
        165,
        242
      ],
      "uses": [],
      "idx": 243
    },
    {
      "path": "packages/core/src/data/writer/Xml.js",
      "requires": [
        166
      ],
      "uses": [],
      "idx": 244
    },
    {
      "path": "packages/core/src/data/XmlStore.js",
      "requires": [
        173,
        180,
        243,
        244
      ],
      "uses": [],
      "idx": 245
    },
    {
      "path": "packages/core/src/data/identifier/Negative.js",
      "requires": [
        162
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "packages/core/src/data/identifier/Uuid.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "packages/core/src/data/proxy/WebStorage.js",
      "requires": [
        162,
        168
      ],
      "uses": [
        51,
        80,
        164
      ],
      "idx": 248
    },
    {
      "path": "packages/core/src/data/proxy/LocalStorage.js",
      "requires": [
        248
      ],
      "uses": [],
      "idx": 249
    },
    {
      "path": "packages/core/src/data/proxy/Rest.js",
      "requires": [
        173
      ],
      "uses": [],
      "idx": 250
    },
    {
      "path": "packages/core/src/data/proxy/SessionStorage.js",
      "requires": [
        248
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "packages/core/src/data/validator/Bound.js",
      "requires": [
        154
      ],
      "uses": [
        80
      ],
      "idx": 252
    },
    {
      "path": "packages/core/src/data/validator/Format.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "packages/core/src/data/validator/Email.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 254
    },
    {
      "path": "packages/core/src/data/validator/List.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "packages/core/src/data/validator/Exclusion.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "packages/core/src/data/validator/Inclusion.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "packages/core/src/data/validator/Length.js",
      "requires": [
        252
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "packages/core/src/data/validator/Presence.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "packages/core/src/data/validator/Range.js",
      "requires": [
        252
      ],
      "uses": [],
      "idx": 260
    },
    {
      "path": "packages/core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 261
    },
    {
      "path": "packages/core/src/direct/RemotingEvent.js",
      "requires": [
        261
      ],
      "uses": [
        220
      ],
      "idx": 262
    },
    {
      "path": "packages/core/src/direct/ExceptionEvent.js",
      "requires": [
        262
      ],
      "uses": [],
      "idx": 263
    },
    {
      "path": "packages/core/src/direct/JsonProvider.js",
      "requires": [
        221
      ],
      "uses": [
        220,
        263
      ],
      "idx": 264
    },
    {
      "path": "packages/core/src/direct/PollingProvider.js",
      "requires": [
        9,
        54,
        263,
        264
      ],
      "uses": [
        220,
        331
      ],
      "idx": 265
    },
    {
      "path": "packages/core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 266
    },
    {
      "path": "packages/core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 267
    },
    {
      "path": "packages/core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        53,
        220,
        264,
        266,
        267
      ],
      "uses": [
        9,
        78,
        263
      ],
      "idx": 268
    },
    {
      "path": "packages/core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 269
    },
    {
      "path": "packages/core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        32
      ],
      "uses": [],
      "idx": 270
    },
    {
      "path": "packages/core/src/event/gesture/SingleTouch.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 271
    },
    {
      "path": "packages/core/src/event/gesture/DoubleTap.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "packages/core/src/event/gesture/Drag.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 273
    },
    {
      "path": "packages/core/src/event/gesture/Swipe.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "packages/core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        274
      ],
      "uses": [
        47
      ],
      "idx": 275
    },
    {
      "path": "packages/core/src/event/gesture/LongPress.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "packages/core/src/event/gesture/MultiTouch.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "packages/core/src/event/gesture/Pinch.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "packages/core/src/event/gesture/Rotate.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "packages/core/src/event/gesture/Tap.js",
      "requires": [
        271
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "packages/core/src/event/publisher/Focus.js",
      "requires": [
        30,
        47
      ],
      "uses": [
        27,
        76
      ],
      "idx": 281
    },
    {
      "path": "packages/core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 282
    },
    {
      "path": "packages/core/src/fx/animation/Abstract.js",
      "requires": [
        15,
        282
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "packages/core/src/fx/animation/Slide.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "packages/core/src/fx/animation/SlideOut.js",
      "requires": [
        284
      ],
      "uses": [],
      "idx": 285
    },
    {
      "path": "packages/core/src/fx/animation/Fade.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "packages/core/src/fx/animation/FadeOut.js",
      "requires": [
        286
      ],
      "uses": [],
      "idx": 287
    },
    {
      "path": "packages/core/src/fx/animation/Flip.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 288
    },
    {
      "path": "packages/core/src/fx/animation/Pop.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 289
    },
    {
      "path": "packages/core/src/fx/animation/PopOut.js",
      "requires": [
        289
      ],
      "uses": [],
      "idx": 290
    },
    {
      "path": "packages/core/src/fx/Animation.js",
      "requires": [
        284,
        285,
        286,
        287,
        288,
        289,
        290
      ],
      "uses": [
        283
      ],
      "idx": 291
    },
    {
      "path": "packages/core/src/fx/runner/Css.js",
      "requires": [
        15,
        291
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "packages/core/src/fx/runner/CssTransition.js",
      "requires": [
        10,
        292
      ],
      "uses": [
        291
      ],
      "idx": 293
    },
    {
      "path": "packages/core/src/fx/Runner.js",
      "requires": [
        293
      ],
      "uses": [],
      "idx": 294
    },
    {
      "path": "packages/core/src/fx/animation/Cube.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "packages/core/src/fx/animation/Wipe.js",
      "requires": [
        291
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "packages/core/src/fx/animation/WipeOut.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "packages/core/src/fx/easing/EaseIn.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 298
    },
    {
      "path": "packages/core/src/fx/easing/Easing.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 299
    },
    {
      "path": "packages/core/src/fx/layout/card/Abstract.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 300
    },
    {
      "path": "packages/core/src/fx/layout/card/Style.js",
      "requires": [
        291,
        300
      ],
      "uses": [
        293
      ],
      "idx": 301
    },
    {
      "path": "packages/core/src/fx/layout/card/Slide.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 302
    },
    {
      "path": "packages/core/src/fx/layout/card/Cover.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 303
    },
    {
      "path": "packages/core/src/fx/layout/card/Reveal.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "packages/core/src/fx/layout/card/Fade.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "packages/core/src/fx/layout/card/Flip.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 306
    },
    {
      "path": "packages/core/src/fx/layout/card/Pop.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 307
    },
    {
      "path": "packages/core/src/fx/layout/card/Scroll.js",
      "requires": [
        100,
        300
      ],
      "uses": [
        10
      ],
      "idx": 308
    },
    {
      "path": "packages/core/src/fx/layout/Card.js",
      "requires": [
        302,
        303,
        304,
        305,
        306,
        307,
        308
      ],
      "uses": [
        300
      ],
      "idx": 309
    },
    {
      "path": "packages/core/src/fx/layout/card/Cube.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 310
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        308
      ],
      "uses": [],
      "idx": 311
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        308
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "packages/core/src/fx/runner/CssAnimation.js",
      "requires": [
        292
      ],
      "uses": [
        291
      ],
      "idx": 313
    },
    {
      "path": "packages/core/src/mixin/Container.js",
      "requires": [
        0
      ],
      "uses": [
        11
      ],
      "idx": 314
    },
    {
      "path": "packages/core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 315
    },
    {
      "path": "packages/core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 316
    },
    {
      "path": "packages/core/src/mixin/Responsive.js",
      "requires": [
        0,
        76
      ],
      "uses": [
        47
      ],
      "idx": 317
    },
    {
      "path": "packages/core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        53
      ],
      "idx": 318
    },
    {
      "path": "packages/core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "packages/core/src/perf/Accumulator.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "packages/core/src/perf/Monitor.js",
      "requires": [
        320
      ],
      "uses": [],
      "idx": 321
    },
    {
      "path": "packages/core/src/plugin/Abstract.js",
      "requires": [
        323
      ],
      "uses": [],
      "idx": 322
    },
    {
      "path": "classic/classic/overrides/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 323
    },
    {
      "path": "packages/core/src/plugin/LazyItems.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "packages/core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 325
    },
    {
      "path": "packages/core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 326
    },
    {
      "path": "packages/core/src/util/CSV.js",
      "requires": [
        326
      ],
      "uses": [],
      "idx": 327
    },
    {
      "path": "packages/core/src/util/ItemCollection.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 328
    },
    {
      "path": "packages/core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 329
    },
    {
      "path": "packages/core/src/util/TSV.js",
      "requires": [
        326
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "packages/core/src/util/TaskManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "packages/core/src/util/TextMetrics.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 332
    },
    {
      "path": "classic/classic/src/Action.js",
      "requires": [],
      "uses": [],
      "idx": 333
    },
    {
      "path": "classic/classic/src/ElementLoader.js",
      "requires": [
        49
      ],
      "uses": [
        8,
        9
      ],
      "idx": 334
    },
    {
      "path": "classic/classic/src/ComponentLoader.js",
      "requires": [
        334
      ],
      "uses": [],
      "idx": 335
    },
    {
      "path": "classic/classic/src/layout/SizeModel.js",
      "requires": [],
      "uses": [],
      "idx": 336
    },
    {
      "path": "classic/classic/src/layout/Layout.js",
      "requires": [
        88,
        93,
        336
      ],
      "uses": [
        614
      ],
      "idx": 337
    },
    {
      "path": "classic/classic/src/layout/container/Container.js",
      "requires": [
        88,
        116,
        337
      ],
      "uses": [
        240
      ],
      "idx": 338
    },
    {
      "path": "classic/classic/src/layout/container/Auto.js",
      "requires": [
        338
      ],
      "uses": [
        88
      ],
      "idx": 339
    },
    {
      "path": "classic/classic/src/ZIndexManager.js",
      "requires": [
        76,
        177,
        178
      ],
      "uses": [
        47,
        135
      ],
      "idx": 340
    },
    {
      "path": "classic/classic/src/container/Container.js",
      "requires": [
        53,
        125,
        233,
        314,
        339,
        340
      ],
      "uses": [
        11,
        14,
        93,
        328
      ],
      "idx": 341
    },
    {
      "path": "classic/classic/src/layout/container/Editor.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 342
    },
    {
      "path": "classic/classic/src/Editor.js",
      "requires": [
        341,
        342
      ],
      "uses": [
        1,
        11
      ],
      "idx": 343
    },
    {
      "path": "classic/classic/src/EventManager.js",
      "requires": [],
      "uses": [
        76
      ],
      "idx": 344
    },
    {
      "path": "classic/classic/src/FocusManager.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 345
    },
    {
      "path": "classic/classic/src/Img.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 346
    },
    {
      "path": "classic/classic/src/util/StoreHolder.js",
      "requires": [
        183
      ],
      "uses": [],
      "idx": 347
    },
    {
      "path": "classic/classic/src/LoadMask.js",
      "requires": [
        125,
        347
      ],
      "uses": [
        76,
        183
      ],
      "idx": 348
    },
    {
      "path": "classic/classic/src/layout/component/Component.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 349
    },
    {
      "path": "classic/classic/src/layout/component/Auto.js",
      "requires": [
        349
      ],
      "uses": [],
      "idx": 350
    },
    {
      "path": "classic/classic/src/layout/component/ProgressBar.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "classic/classic/src/ProgressBar.js",
      "requires": [
        80,
        92,
        125,
        331,
        351
      ],
      "uses": [
        70,
        88
      ],
      "idx": 352
    },
    {
      "path": "classic/classic/src/ProgressBarWidget.js",
      "requires": [
        84,
        352
      ],
      "uses": [
        88
      ],
      "idx": 353
    },
    {
      "path": "classic/classic/src/panel/Bar.js",
      "requires": [
        341
      ],
      "uses": [],
      "idx": 354
    },
    {
      "path": "classic/classic/src/rtl/panel/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 355
    },
    {
      "path": "classic/classic/src/panel/Title.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "classic/classic/src/rtl/panel/Title.js",
      "requires": [],
      "uses": [],
      "idx": 357
    },
    {
      "path": "classic/classic/src/panel/Tool.js",
      "requires": [
        125
      ],
      "uses": [
        470
      ],
      "idx": 358
    },
    {
      "path": "classic/classic/src/util/KeyMap.js",
      "requires": [],
      "uses": [],
      "idx": 359
    },
    {
      "path": "classic/classic/src/util/KeyNav.js",
      "requires": [
        359
      ],
      "uses": [],
      "idx": 360
    },
    {
      "path": "classic/classic/src/util/FocusableContainer.js",
      "requires": [
        0,
        360
      ],
      "uses": [
        125
      ],
      "idx": 361
    },
    {
      "path": "classic/classic/src/rtl/util/FocusableContainer.js",
      "requires": [],
      "uses": [],
      "idx": 362
    },
    {
      "path": "classic/classic/src/panel/Header.js",
      "requires": [
        205,
        350,
        354,
        356,
        358,
        361
      ],
      "uses": [
        11,
        125
      ],
      "idx": 363
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/None.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 364
    },
    {
      "path": "classic/classic/src/util/ClickRepeater.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 365
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/Scroller.js",
      "requires": [
        4,
        47,
        364,
        365
      ],
      "uses": [],
      "idx": 366
    },
    {
      "path": "classic/classic/src/rtl/layout/container/boxOverflow/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 367
    },
    {
      "path": "classic/classic/src/dd/DragDropManager.js",
      "requires": [
        25
      ],
      "uses": [
        425,
        470
      ],
      "idx": 368
    },
    {
      "path": "classic/classic/src/resizer/Splitter.js",
      "requires": [
        88,
        125
      ],
      "uses": [
        488
      ],
      "idx": 369
    },
    {
      "path": "classic/classic/src/layout/container/Box.js",
      "requires": [
        79,
        338,
        364,
        366,
        368,
        369
      ],
      "uses": [
        93,
        205,
        336,
        350
      ],
      "idx": 370
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Box.js",
      "requires": [],
      "uses": [],
      "idx": 371
    },
    {
      "path": "classic/classic/src/layout/container/HBox.js",
      "requires": [
        370
      ],
      "uses": [],
      "idx": 372
    },
    {
      "path": "classic/classic/src/rtl/layout/container/HBox.js",
      "requires": [],
      "uses": [],
      "idx": 373
    },
    {
      "path": "classic/classic/src/layout/container/VBox.js",
      "requires": [
        370
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "classic/classic/src/rtl/layout/container/VBox.js",
      "requires": [],
      "uses": [],
      "idx": 375
    },
    {
      "path": "classic/classic/src/toolbar/Toolbar.js",
      "requires": [
        205,
        341,
        350,
        361,
        372,
        374
      ],
      "uses": [
        525,
        543,
        658
      ],
      "idx": 376
    },
    {
      "path": "classic/classic/src/dd/DragDrop.js",
      "requires": [
        368
      ],
      "uses": [
        47
      ],
      "idx": 377
    },
    {
      "path": "classic/classic/src/dd/DD.js",
      "requires": [
        368,
        377
      ],
      "uses": [
        47
      ],
      "idx": 378
    },
    {
      "path": "classic/classic/src/rtl/dd/DD.js",
      "requires": [],
      "uses": [],
      "idx": 379
    },
    {
      "path": "classic/classic/src/dd/DDProxy.js",
      "requires": [
        378
      ],
      "uses": [
        368
      ],
      "idx": 380
    },
    {
      "path": "classic/classic/src/dd/StatusProxy.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "classic/classic/src/dd/DragSource.js",
      "requires": [
        368,
        380,
        381
      ],
      "uses": [
        205,
        350
      ],
      "idx": 382
    },
    {
      "path": "classic/classic/src/panel/Proxy.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 383
    },
    {
      "path": "classic/classic/src/panel/DD.js",
      "requires": [
        382,
        383
      ],
      "uses": [],
      "idx": 384
    },
    {
      "path": "classic/classic/src/layout/component/Dock.js",
      "requires": [
        349
      ],
      "uses": [
        14,
        47,
        336
      ],
      "idx": 385
    },
    {
      "path": "classic/classic/src/rtl/layout/component/Dock.js",
      "requires": [],
      "uses": [
        385
      ],
      "idx": 386
    },
    {
      "path": "classic/classic/src/util/Memento.js",
      "requires": [],
      "uses": [],
      "idx": 387
    },
    {
      "path": "classic/classic/src/container/DockingContainer.js",
      "requires": [
        47,
        53
      ],
      "uses": [
        14,
        240,
        328
      ],
      "idx": 388
    },
    {
      "path": "classic/classic/src/panel/Panel.js",
      "requires": [
        47,
        53,
        70,
        88,
        341,
        359,
        363,
        376,
        384,
        385,
        387,
        388
      ],
      "uses": [
        1,
        11,
        91,
        92,
        125,
        205,
        240,
        339,
        350,
        358,
        360,
        464,
        544
      ],
      "idx": 389
    },
    {
      "path": "classic/classic/src/rtl/panel/Panel.js",
      "requires": [],
      "uses": [],
      "idx": 390
    },
    {
      "path": "classic/classic/src/form/Labelable.js",
      "requires": [
        0,
        74,
        88
      ],
      "uses": [
        47,
        469
      ],
      "idx": 391
    },
    {
      "path": "classic/classic/src/rtl/form/Labelable.js",
      "requires": [],
      "uses": [],
      "idx": 392
    },
    {
      "path": "classic/classic/src/form/field/Field.js",
      "requires": [],
      "uses": [],
      "idx": 393
    },
    {
      "path": "classic/classic/src/form/field/Base.js",
      "requires": [
        1,
        88,
        125,
        391,
        393
      ],
      "uses": [
        240
      ],
      "idx": 394
    },
    {
      "path": "classic/classic/src/form/field/Display.js",
      "requires": [
        79,
        88,
        394
      ],
      "uses": [],
      "idx": 395
    },
    {
      "path": "classic/classic/src/layout/container/Fit.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "classic/classic/src/panel/Table.js",
      "requires": [
        389,
        396
      ],
      "uses": [
        1,
        183,
        240,
        416,
        432,
        438,
        589,
        590,
        633,
        634
      ],
      "idx": 397
    },
    {
      "path": "classic/classic/src/selection/Model.js",
      "requires": [
        4,
        93,
        347
      ],
      "uses": [
        135
      ],
      "idx": 398
    },
    {
      "path": "classic/classic/src/selection/DataViewModel.js",
      "requires": [
        360,
        398
      ],
      "uses": [],
      "idx": 399
    },
    {
      "path": "classic/classic/src/view/NavigationModel.js",
      "requires": [
        49,
        93
      ],
      "uses": [
        360
      ],
      "idx": 400
    },
    {
      "path": "classic/classic/src/rtl/view/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 401
    },
    {
      "path": "classic/classic/src/view/AbstractView.js",
      "requires": [
        73,
        125,
        347,
        348,
        399,
        400
      ],
      "uses": [
        10,
        80,
        88,
        93,
        183,
        240,
        331
      ],
      "idx": 402
    },
    {
      "path": "classic/classic/src/view/View.js",
      "requires": [
        402
      ],
      "uses": [],
      "idx": 403
    },
    {
      "path": "classic/classic/src/grid/CellContext.js",
      "requires": [],
      "uses": [],
      "idx": 404
    },
    {
      "path": "classic/classic/src/view/TableLayout.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 405
    },
    {
      "path": "classic/classic/src/grid/locking/RowSynchronizer.js",
      "requires": [],
      "uses": [],
      "idx": 406
    },
    {
      "path": "classic/classic/src/view/NodeCache.js",
      "requires": [
        73
      ],
      "uses": [
        47,
        72
      ],
      "idx": 407
    },
    {
      "path": "classic/classic/src/view/Table.js",
      "requires": [
        1,
        53,
        403,
        404,
        405,
        406,
        407
      ],
      "uses": [
        47,
        72,
        88,
        93,
        125,
        163,
        432
      ],
      "idx": 408
    },
    {
      "path": "classic/classic/src/rtl/view/Table.js",
      "requires": [],
      "uses": [],
      "idx": 409
    },
    {
      "path": "classic/classic/src/grid/Panel.js",
      "requires": [
        397,
        408
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "classic/classic/src/form/CheckboxManager.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "classic/classic/src/form/field/Checkbox.js",
      "requires": [
        88,
        394,
        411
      ],
      "uses": [],
      "idx": 412
    },
    {
      "path": "classic/classic/src/app/bindinspector/Util.js",
      "requires": [],
      "uses": [
        80
      ],
      "idx": 413
    },
    {
      "path": "classic/classic/src/app/bindinspector/ComponentDetail.js",
      "requires": [
        125,
        205,
        341,
        350,
        372,
        374,
        389,
        395,
        410,
        412,
        413
      ],
      "uses": [
        80,
        376,
        385,
        396,
        453,
        461,
        544,
        658
      ],
      "idx": 414
    },
    {
      "path": "classic/classic/src/tree/View.js",
      "requires": [
        408
      ],
      "uses": [
        47,
        88
      ],
      "idx": 415
    },
    {
      "path": "classic/classic/src/selection/RowModel.js",
      "requires": [
        399,
        404
      ],
      "uses": [],
      "idx": 416
    },
    {
      "path": "classic/classic/src/selection/TreeModel.js",
      "requires": [
        416
      ],
      "uses": [],
      "idx": 417
    },
    {
      "path": "classic/classic/src/grid/ColumnLayout.js",
      "requires": [
        372,
        397
      ],
      "uses": [],
      "idx": 418
    },
    {
      "path": "classic/classic/src/rtl/grid/ColumnLayout.js",
      "requires": [],
      "uses": [],
      "idx": 419
    },
    {
      "path": "classic/classic/src/dd/DragTracker.js",
      "requires": [
        49
      ],
      "uses": [
        25,
        360
      ],
      "idx": 420
    },
    {
      "path": "classic/classic/src/grid/plugin/HeaderResizer.js",
      "requires": [
        25,
        322,
        420
      ],
      "uses": [
        434
      ],
      "idx": 421
    },
    {
      "path": "classic/classic/src/rtl/grid/plugin/HeaderResizer.js",
      "requires": [],
      "uses": [],
      "idx": 422
    },
    {
      "path": "classic/classic/src/dd/DragZone.js",
      "requires": [
        382
      ],
      "uses": [
        426,
        428
      ],
      "idx": 423
    },
    {
      "path": "classic/classic/src/grid/header/DragZone.js",
      "requires": [
        423
      ],
      "uses": [],
      "idx": 424
    },
    {
      "path": "classic/classic/src/dd/DDTarget.js",
      "requires": [
        377
      ],
      "uses": [],
      "idx": 425
    },
    {
      "path": "classic/classic/src/dd/ScrollManager.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "classic/classic/src/dd/DropTarget.js",
      "requires": [
        425,
        426
      ],
      "uses": [],
      "idx": 427
    },
    {
      "path": "classic/classic/src/dd/Registry.js",
      "requires": [],
      "uses": [],
      "idx": 428
    },
    {
      "path": "classic/classic/src/dd/DropZone.js",
      "requires": [
        427,
        428
      ],
      "uses": [
        368
      ],
      "idx": 429
    },
    {
      "path": "classic/classic/src/grid/header/DropZone.js",
      "requires": [
        429
      ],
      "uses": [
        368
      ],
      "idx": 430
    },
    {
      "path": "classic/classic/src/grid/plugin/HeaderReorderer.js",
      "requires": [
        322,
        424,
        430
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "classic/classic/src/grid/header/Container.js",
      "requires": [
        341,
        360,
        361,
        418,
        421,
        431
      ],
      "uses": [
        1,
        125,
        205,
        350,
        366,
        374,
        385,
        434,
        553,
        575,
        576,
        577
      ],
      "idx": 432
    },
    {
      "path": "classic/classic/src/grid/ColumnComponentLayout.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 433
    },
    {
      "path": "classic/classic/src/grid/column/Column.js",
      "requires": [
        215,
        418,
        432,
        433
      ],
      "uses": [
        79,
        421
      ],
      "idx": 434
    },
    {
      "path": "classic/classic/src/rtl/grid/column/Column.js",
      "requires": [],
      "uses": [],
      "idx": 435
    },
    {
      "path": "classic/classic/src/tree/Column.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 436
    },
    {
      "path": "classic/classic/src/rtl/tree/Column.js",
      "requires": [],
      "uses": [],
      "idx": 437
    },
    {
      "path": "classic/classic/src/grid/NavigationModel.js",
      "requires": [
        400
      ],
      "uses": [
        11,
        27,
        72,
        125,
        360,
        404
      ],
      "idx": 438
    },
    {
      "path": "classic/classic/src/rtl/grid/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 439
    },
    {
      "path": "classic/classic/src/tree/NavigationModel.js",
      "requires": [
        438
      ],
      "uses": [
        27
      ],
      "idx": 440
    },
    {
      "path": "classic/classic/src/tree/Panel.js",
      "requires": [
        237,
        397,
        415,
        417,
        436,
        440
      ],
      "uses": [
        183,
        205,
        339,
        433
      ],
      "idx": 441
    },
    {
      "path": "classic/classic/src/form/field/VTypes.js",
      "requires": [],
      "uses": [],
      "idx": 442
    },
    {
      "path": "classic/classic/src/form/trigger/Trigger.js",
      "requires": [
        93,
        365
      ],
      "uses": [
        47,
        88
      ],
      "idx": 443
    },
    {
      "path": "classic/classic/src/form/field/Text.js",
      "requires": [
        332,
        394,
        442,
        443
      ],
      "uses": [
        79,
        80,
        92
      ],
      "idx": 444
    },
    {
      "path": "classic/classic/src/app/bindinspector/ComponentList.js",
      "requires": [
        441,
        444
      ],
      "uses": [
        14,
        205,
        339,
        350,
        376,
        385,
        413,
        433,
        436,
        453,
        468,
        544,
        658
      ],
      "idx": 445
    },
    {
      "path": "classic/classic/src/resizer/BorderSplitter.js",
      "requires": [
        369
      ],
      "uses": [
        627
      ],
      "idx": 446
    },
    {
      "path": "classic/classic/src/layout/container/Border.js",
      "requires": [
        70,
        126,
        338,
        446
      ],
      "uses": [
        79,
        205,
        350
      ],
      "idx": 447
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Border.js",
      "requires": [],
      "uses": [],
      "idx": 448
    },
    {
      "path": "classic/classic/src/layout/container/Card.js",
      "requires": [
        396
      ],
      "uses": [
        47
      ],
      "idx": 449
    },
    {
      "path": "classic/classic/src/dom/ButtonElement.js",
      "requires": [
        47
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "classic/classic/src/button/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 451
    },
    {
      "path": "classic/classic/src/menu/Manager.js",
      "requires": [],
      "uses": [
        11,
        577
      ],
      "idx": 452
    },
    {
      "path": "classic/classic/src/button/Button.js",
      "requires": [
        125,
        233,
        332,
        359,
        365,
        450,
        451,
        452
      ],
      "uses": [
        27,
        470
      ],
      "idx": 453
    },
    {
      "path": "classic/classic/src/rtl/button/Button.js",
      "requires": [],
      "uses": [],
      "idx": 454
    },
    {
      "path": "classic/classic/src/tab/Tab.js",
      "requires": [
        360,
        453
      ],
      "uses": [],
      "idx": 455
    },
    {
      "path": "classic/classic/src/layout/component/Body.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 456
    },
    {
      "path": "classic/classic/src/tab/Bar.js",
      "requires": [
        26,
        354,
        361,
        455,
        456
      ],
      "uses": [
        25
      ],
      "idx": 457
    },
    {
      "path": "classic/classic/src/rtl/tab/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 458
    },
    {
      "path": "classic/classic/src/tab/Panel.js",
      "requires": [
        389,
        449,
        457
      ],
      "uses": [
        205,
        350,
        455
      ],
      "idx": 459
    },
    {
      "path": "classic/classic/src/app/bindinspector/Environment.js",
      "requires": [
        135
      ],
      "uses": [
        11,
        504
      ],
      "idx": 460
    },
    {
      "path": "classic/classic/src/app/bindinspector/ViewModelDetail.js",
      "requires": [
        441
      ],
      "uses": [
        80,
        205,
        339,
        413,
        433,
        436
      ],
      "idx": 461
    },
    {
      "path": "classic/classic/src/app/bindinspector/noconflict/BaseModel.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 462
    },
    {
      "path": "classic/classic/src/app/bindinspector/Container.js",
      "requires": [
        125,
        205,
        341,
        350,
        372,
        413,
        414,
        445,
        447,
        459,
        460,
        461,
        462
      ],
      "uses": [
        144,
        339,
        385,
        389,
        396,
        457
      ],
      "idx": 463
    },
    {
      "path": "classic/classic/src/util/ComponentDragger.js",
      "requires": [
        420
      ],
      "uses": [
        25,
        47
      ],
      "idx": 464
    },
    {
      "path": "classic/classic/src/util/FocusTrap.js",
      "requires": [
        0
      ],
      "uses": [
        47
      ],
      "idx": 465
    },
    {
      "path": "classic/classic/src/window/Window.js",
      "requires": [
        25,
        389,
        464,
        465
      ],
      "uses": [],
      "idx": 466
    },
    {
      "path": "classic/classic/src/tip/Tip.js",
      "requires": [
        389
      ],
      "uses": [
        125
      ],
      "idx": 467
    },
    {
      "path": "classic/classic/src/tip/ToolTip.js",
      "requires": [
        467
      ],
      "uses": [
        47
      ],
      "idx": 468
    },
    {
      "path": "classic/classic/src/tip/QuickTip.js",
      "requires": [
        468
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "classic/classic/src/tip/QuickTipManager.js",
      "requires": [
        469
      ],
      "uses": [],
      "idx": 470
    },
    {
      "path": "classic/classic/src/rtl/tip/QuickTipManager.js",
      "requires": [],
      "uses": [],
      "idx": 471
    },
    {
      "path": "classic/classic/src/app/bindinspector/Inspector.js",
      "requires": [
        396,
        463,
        466,
        470
      ],
      "uses": [
        205,
        350,
        447,
        460
      ],
      "idx": 472
    },
    {
      "path": "classic/classic/src/button/Split.js",
      "requires": [
        453
      ],
      "uses": [],
      "idx": 473
    },
    {
      "path": "classic/classic/src/button/Cycle.js",
      "requires": [
        473
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "classic/classic/src/button/Segmented.js",
      "requires": [
        341,
        453
      ],
      "uses": [],
      "idx": 475
    },
    {
      "path": "classic/classic/src/rtl/button/Segmented.js",
      "requires": [],
      "uses": [],
      "idx": 476
    },
    {
      "path": "classic/classic/src/layout/container/Table.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 477
    },
    {
      "path": "classic/classic/src/container/ButtonGroup.js",
      "requires": [
        361,
        389,
        477
      ],
      "uses": [],
      "idx": 478
    },
    {
      "path": "classic/classic/src/container/Monitor.js",
      "requires": [],
      "uses": [
        53
      ],
      "idx": 479
    },
    {
      "path": "classic/classic/src/plugin/Responsive.js",
      "requires": [
        317
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "classic/classic/src/plugin/Viewport.js",
      "requires": [
        480
      ],
      "uses": [
        47,
        125,
        336
      ],
      "idx": 481
    },
    {
      "path": "classic/classic/src/container/Viewport.js",
      "requires": [
        317,
        341,
        481
      ],
      "uses": [],
      "idx": 482
    },
    {
      "path": "classic/classic/src/layout/container/Anchor.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 483
    },
    {
      "path": "classic/classic/src/dashboard/Panel.js",
      "requires": [
        389
      ],
      "uses": [
        11
      ],
      "idx": 484
    },
    {
      "path": "classic/classic/src/dashboard/Column.js",
      "requires": [
        341,
        483,
        484
      ],
      "uses": [],
      "idx": 485
    },
    {
      "path": "classic/classic/src/layout/container/Column.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 486
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Column.js",
      "requires": [],
      "uses": [],
      "idx": 487
    },
    {
      "path": "classic/classic/src/resizer/SplitterTracker.js",
      "requires": [
        25,
        420
      ],
      "uses": [
        47,
        100
      ],
      "idx": 488
    },
    {
      "path": "classic/classic/src/rtl/resizer/SplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 489
    },
    {
      "path": "classic/classic/src/layout/container/ColumnSplitterTracker.js",
      "requires": [
        488
      ],
      "uses": [],
      "idx": 490
    },
    {
      "path": "classic/classic/src/layout/container/ColumnSplitter.js",
      "requires": [
        369,
        490
      ],
      "uses": [],
      "idx": 491
    },
    {
      "path": "classic/classic/src/layout/container/Dashboard.js",
      "requires": [
        486,
        491
      ],
      "uses": [
        205,
        350
      ],
      "idx": 492
    },
    {
      "path": "classic/classic/src/dashboard/DropZone.js",
      "requires": [
        427
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "classic/classic/src/dashboard/Part.js",
      "requires": [
        3,
        93,
        136
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "classic/classic/src/dashboard/Dashboard.js",
      "requires": [
        389,
        485,
        492,
        493,
        494
      ],
      "uses": [
        93,
        120,
        135
      ],
      "idx": 495
    },
    {
      "path": "classic/classic/src/dom/Layer.js",
      "requires": [
        47
      ],
      "uses": [
        240
      ],
      "idx": 496
    },
    {
      "path": "classic/classic/src/enums.js",
      "requires": [],
      "uses": [],
      "idx": 497
    },
    {
      "path": "classic/classic/src/event/publisher/MouseEnterLeave.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 498
    },
    {
      "path": "classic/classic/src/flash/Component.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "classic/classic/src/form/action/Action.js",
      "requires": [],
      "uses": [],
      "idx": 500
    },
    {
      "path": "classic/classic/src/form/action/Load.js",
      "requires": [
        8,
        500
      ],
      "uses": [
        9
      ],
      "idx": 501
    },
    {
      "path": "classic/classic/src/form/action/Submit.js",
      "requires": [
        500
      ],
      "uses": [
        9,
        240
      ],
      "idx": 502
    },
    {
      "path": "classic/classic/src/form/field/TextArea.js",
      "requires": [
        1,
        88,
        444
      ],
      "uses": [
        79,
        332
      ],
      "idx": 503
    },
    {
      "path": "classic/classic/src/window/MessageBox.js",
      "requires": [
        352,
        372,
        376,
        444,
        453,
        466,
        483,
        503
      ],
      "uses": [
        125,
        205,
        341,
        350,
        351,
        544
      ],
      "idx": 504
    },
    {
      "path": "classic/classic/src/form/Basic.js",
      "requires": [
        1,
        49,
        53,
        147,
        501,
        502,
        504
      ],
      "uses": [
        479
      ],
      "idx": 505
    },
    {
      "path": "classic/classic/src/form/FieldAncestor.js",
      "requires": [
        0,
        479
      ],
      "uses": [],
      "idx": 506
    },
    {
      "path": "classic/classic/src/layout/component/field/FieldContainer.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 507
    },
    {
      "path": "classic/classic/src/form/FieldContainer.js",
      "requires": [
        341,
        391,
        506,
        507
      ],
      "uses": [],
      "idx": 508
    },
    {
      "path": "classic/classic/src/layout/container/CheckboxGroup.js",
      "requires": [
        338
      ],
      "uses": [
        240
      ],
      "idx": 509
    },
    {
      "path": "classic/classic/src/form/CheckboxGroup.js",
      "requires": [
        393,
        394,
        412,
        508,
        509
      ],
      "uses": [],
      "idx": 510
    },
    {
      "path": "classic/classic/src/form/FieldSet.js",
      "requires": [
        341,
        506
      ],
      "uses": [
        47,
        91,
        125,
        205,
        240,
        350,
        358,
        412,
        483,
        616
      ],
      "idx": 511
    },
    {
      "path": "classic/classic/src/form/Label.js",
      "requires": [
        79,
        125
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "classic/classic/src/form/Panel.js",
      "requires": [
        54,
        389,
        505,
        506
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "classic/classic/src/form/RadioManager.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 514
    },
    {
      "path": "classic/classic/src/form/field/Radio.js",
      "requires": [
        412,
        514
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "classic/classic/src/form/RadioGroup.js",
      "requires": [
        361,
        510,
        515
      ],
      "uses": [
        514
      ],
      "idx": 516
    },
    {
      "path": "classic/classic/src/form/action/DirectAction.js",
      "requires": [
        0
      ],
      "uses": [
        220
      ],
      "idx": 517
    },
    {
      "path": "classic/classic/src/form/action/DirectLoad.js",
      "requires": [
        220,
        501,
        517
      ],
      "uses": [],
      "idx": 518
    },
    {
      "path": "classic/classic/src/form/action/DirectSubmit.js",
      "requires": [
        220,
        502,
        517
      ],
      "uses": [],
      "idx": 519
    },
    {
      "path": "classic/classic/src/form/action/StandardSubmit.js",
      "requires": [
        502
      ],
      "uses": [],
      "idx": 520
    },
    {
      "path": "classic/classic/src/form/field/Picker.js",
      "requires": [
        360,
        444
      ],
      "uses": [],
      "idx": 521
    },
    {
      "path": "classic/classic/src/view/BoundListKeyNav.js",
      "requires": [
        400
      ],
      "uses": [
        27,
        360
      ],
      "idx": 522
    },
    {
      "path": "classic/classic/src/layout/component/BoundList.js",
      "requires": [
        350
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "classic/classic/src/toolbar/Item.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 524
    },
    {
      "path": "classic/classic/src/toolbar/TextItem.js",
      "requires": [
        88,
        376,
        524
      ],
      "uses": [],
      "idx": 525
    },
    {
      "path": "classic/classic/src/form/trigger/Spinner.js",
      "requires": [
        443
      ],
      "uses": [],
      "idx": 526
    },
    {
      "path": "classic/classic/src/form/field/Spinner.js",
      "requires": [
        360,
        444,
        526
      ],
      "uses": [],
      "idx": 527
    },
    {
      "path": "classic/classic/src/form/field/Number.js",
      "requires": [
        527
      ],
      "uses": [
        79,
        80
      ],
      "idx": 528
    },
    {
      "path": "classic/classic/src/toolbar/Paging.js",
      "requires": [
        347,
        376,
        525,
        528
      ],
      "uses": [
        80,
        205,
        350,
        526
      ],
      "idx": 529
    },
    {
      "path": "classic/classic/src/view/BoundList.js",
      "requires": [
        47,
        233,
        403,
        522,
        523,
        529
      ],
      "uses": [
        88,
        205,
        350,
        544
      ],
      "idx": 530
    },
    {
      "path": "classic/classic/src/form/field/ComboBox.js",
      "requires": [
        1,
        183,
        347,
        521,
        530
      ],
      "uses": [
        27,
        47,
        48,
        88,
        135,
        163,
        178,
        205,
        240,
        399,
        522,
        523
      ],
      "idx": 531
    },
    {
      "path": "classic/classic/src/picker/Month.js",
      "requires": [
        88,
        125,
        365,
        453
      ],
      "uses": [
        205,
        350
      ],
      "idx": 532
    },
    {
      "path": "classic/classic/src/picker/Date.js",
      "requires": [
        64,
        88,
        125,
        360,
        365,
        453,
        473,
        532
      ],
      "uses": [
        80,
        205,
        240,
        350
      ],
      "idx": 533
    },
    {
      "path": "classic/classic/src/form/field/Date.js",
      "requires": [
        521,
        533
      ],
      "uses": [
        80,
        205,
        350
      ],
      "idx": 534
    },
    {
      "path": "classic/classic/src/form/field/FileButton.js",
      "requires": [
        453
      ],
      "uses": [
        125
      ],
      "idx": 535
    },
    {
      "path": "classic/classic/src/rtl/form/field/FileButton.js",
      "requires": [],
      "uses": [],
      "idx": 536
    },
    {
      "path": "classic/classic/src/form/trigger/Component.js",
      "requires": [
        443
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "classic/classic/src/form/field/File.js",
      "requires": [
        444,
        535,
        537
      ],
      "uses": [
        205,
        350
      ],
      "idx": 538
    },
    {
      "path": "classic/classic/src/rtl/form/field/File.js",
      "requires": [],
      "uses": [],
      "idx": 539
    },
    {
      "path": "classic/classic/src/form/field/Hidden.js",
      "requires": [
        394
      ],
      "uses": [],
      "idx": 540
    },
    {
      "path": "classic/classic/src/picker/Color.js",
      "requires": [
        88,
        125
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "classic/classic/src/layout/component/field/HtmlEditor.js",
      "requires": [
        507
      ],
      "uses": [],
      "idx": 542
    },
    {
      "path": "classic/classic/src/toolbar/Separator.js",
      "requires": [
        376,
        524
      ],
      "uses": [],
      "idx": 543
    },
    {
      "path": "classic/classic/src/layout/container/boxOverflow/Menu.js",
      "requires": [
        364,
        453,
        543
      ],
      "uses": [
        205,
        350,
        366,
        374,
        385,
        577,
        658
      ],
      "idx": 544
    },
    {
      "path": "classic/classic/src/rtl/layout/container/boxOverflow/Menu.js",
      "requires": [],
      "uses": [],
      "idx": 545
    },
    {
      "path": "classic/classic/src/form/field/HtmlEditor.js",
      "requires": [
        79,
        331,
        374,
        376,
        393,
        470,
        508,
        524,
        541,
        542,
        544
      ],
      "uses": [
        1,
        80,
        125,
        205,
        240,
        350,
        366,
        385,
        577
      ],
      "idx": 546
    },
    {
      "path": "classic/classic/src/form/field/Tag.js",
      "requires": [
        180,
        217,
        398,
        531
      ],
      "uses": [
        48,
        88
      ],
      "idx": 547
    },
    {
      "path": "classic/classic/src/picker/Time.js",
      "requires": [
        180,
        530
      ],
      "uses": [
        48
      ],
      "idx": 548
    },
    {
      "path": "classic/classic/src/form/field/Time.js",
      "requires": [
        522,
        531,
        534,
        548
      ],
      "uses": [
        80,
        88,
        205,
        399,
        523
      ],
      "idx": 549
    },
    {
      "path": "classic/classic/src/form/field/Trigger.js",
      "requires": [
        240,
        365,
        444
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "classic/classic/src/grid/CellEditor.js",
      "requires": [
        343
      ],
      "uses": [],
      "idx": 551
    },
    {
      "path": "classic/classic/src/rtl/grid/CellEditor.js",
      "requires": [],
      "uses": [],
      "idx": 552
    },
    {
      "path": "classic/classic/src/grid/ColumnManager.js",
      "requires": [],
      "uses": [],
      "idx": 553
    },
    {
      "path": "classic/classic/src/grid/RowEditorButtons.js",
      "requires": [
        341
      ],
      "uses": [
        205,
        350,
        389,
        453
      ],
      "idx": 554
    },
    {
      "path": "classic/classic/src/grid/RowEditor.js",
      "requires": [
        360,
        468,
        513,
        554
      ],
      "uses": [
        76,
        205,
        339,
        341,
        350,
        385,
        395,
        404
      ],
      "idx": 555
    },
    {
      "path": "classic/classic/src/grid/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 556
    },
    {
      "path": "classic/classic/src/view/DropZone.js",
      "requires": [
        429
      ],
      "uses": [
        125,
        205,
        350
      ],
      "idx": 557
    },
    {
      "path": "classic/classic/src/grid/ViewDropZone.js",
      "requires": [
        557
      ],
      "uses": [],
      "idx": 558
    },
    {
      "path": "classic/classic/src/grid/column/Action.js",
      "requires": [
        434
      ],
      "uses": [
        47
      ],
      "idx": 559
    },
    {
      "path": "classic/classic/src/grid/column/Boolean.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "classic/classic/src/grid/column/Check.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "classic/classic/src/grid/column/Date.js",
      "requires": [
        434
      ],
      "uses": [
        79
      ],
      "idx": 562
    },
    {
      "path": "classic/classic/src/grid/column/Number.js",
      "requires": [
        79,
        434
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "classic/classic/src/grid/column/RowNumberer.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 564
    },
    {
      "path": "classic/classic/src/grid/column/Template.js",
      "requires": [
        88,
        434
      ],
      "uses": [
        561
      ],
      "idx": 565
    },
    {
      "path": "classic/classic/src/grid/column/Widget.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 566
    },
    {
      "path": "classic/classic/src/grid/feature/Feature.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 567
    },
    {
      "path": "classic/classic/src/grid/feature/AbstractSummary.js",
      "requires": [
        567
      ],
      "uses": [],
      "idx": 568
    },
    {
      "path": "classic/classic/src/grid/feature/GroupStore.js",
      "requires": [
        49
      ],
      "uses": [
        135
      ],
      "idx": 569
    },
    {
      "path": "classic/classic/src/grid/feature/Grouping.js",
      "requires": [
        567,
        568,
        569
      ],
      "uses": [
        88,
        163,
        432
      ],
      "idx": 570
    },
    {
      "path": "classic/classic/src/grid/feature/GroupingSummary.js",
      "requires": [
        570
      ],
      "uses": [],
      "idx": 571
    },
    {
      "path": "classic/classic/src/grid/feature/RowBody.js",
      "requires": [
        567
      ],
      "uses": [
        88
      ],
      "idx": 572
    },
    {
      "path": "classic/classic/src/grid/feature/Summary.js",
      "requires": [
        568
      ],
      "uses": [
        88,
        125,
        163,
        205,
        350
      ],
      "idx": 573
    },
    {
      "path": "classic/classic/src/menu/Item.js",
      "requires": [
        125,
        233
      ],
      "uses": [
        452,
        470
      ],
      "idx": 574
    },
    {
      "path": "classic/classic/src/menu/CheckItem.js",
      "requires": [
        574
      ],
      "uses": [
        452
      ],
      "idx": 575
    },
    {
      "path": "classic/classic/src/menu/Separator.js",
      "requires": [
        574
      ],
      "uses": [],
      "idx": 576
    },
    {
      "path": "classic/classic/src/menu/Menu.js",
      "requires": [
        361,
        374,
        389,
        452,
        574,
        575,
        576
      ],
      "uses": [
        11,
        47,
        205,
        350
      ],
      "idx": 577
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Base.js",
      "requires": [
        93,
        205,
        366,
        374,
        385,
        577
      ],
      "uses": [
        1,
        48
      ],
      "idx": 578
    },
    {
      "path": "classic/classic/src/grid/filters/filter/SingleFilter.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 579
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Boolean.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 580
    },
    {
      "path": "classic/classic/src/grid/filters/filter/TriFilter.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Date.js",
      "requires": [
        205,
        350,
        575,
        581
      ],
      "uses": [
        533,
        577
      ],
      "idx": 582
    },
    {
      "path": "classic/classic/src/grid/filters/filter/List.js",
      "requires": [
        579
      ],
      "uses": [
        180,
        183
      ],
      "idx": 583
    },
    {
      "path": "classic/classic/src/grid/filters/filter/Number.js",
      "requires": [
        205,
        350,
        526,
        581
      ],
      "uses": [
        528
      ],
      "idx": 584
    },
    {
      "path": "classic/classic/src/grid/filters/filter/String.js",
      "requires": [
        205,
        350,
        444,
        579
      ],
      "uses": [],
      "idx": 585
    },
    {
      "path": "classic/classic/src/grid/filters/Filters.js",
      "requires": [
        322,
        347,
        578,
        579,
        580,
        581,
        582,
        583,
        584,
        585
      ],
      "uses": [
        93
      ],
      "idx": 586
    },
    {
      "path": "classic/classic/src/grid/locking/HeaderContainer.js",
      "requires": [
        432,
        553
      ],
      "uses": [],
      "idx": 587
    },
    {
      "path": "classic/classic/src/grid/locking/View.js",
      "requires": [
        49,
        122,
        125,
        347,
        402,
        408
      ],
      "uses": [
        11,
        348,
        404,
        438,
        440
      ],
      "idx": 588
    },
    {
      "path": "classic/classic/src/grid/locking/Lockable.js",
      "requires": [
        125,
        408,
        432,
        587,
        588
      ],
      "uses": [
        1,
        183,
        205,
        339,
        350,
        369,
        370
      ],
      "idx": 589
    },
    {
      "path": "classic/classic/src/grid/plugin/BufferedRenderer.js",
      "requires": [
        322
      ],
      "uses": [
        1,
        406
      ],
      "idx": 590
    },
    {
      "path": "classic/classic/src/grid/plugin/Editing.js",
      "requires": [
        4,
        322,
        360,
        394,
        408,
        434
      ],
      "uses": [
        11,
        205,
        350,
        404
      ],
      "idx": 591
    },
    {
      "path": "classic/classic/src/grid/plugin/CellEditing.js",
      "requires": [
        1,
        551,
        591
      ],
      "uses": [
        53,
        205,
        342,
        350,
        404
      ],
      "idx": 592
    },
    {
      "path": "classic/classic/src/plugin/AbstractClipboard.js",
      "requires": [
        322,
        359
      ],
      "uses": [
        47
      ],
      "idx": 593
    },
    {
      "path": "classic/classic/src/grid/plugin/Clipboard.js",
      "requires": [
        79,
        330,
        593
      ],
      "uses": [
        404
      ],
      "idx": 594
    },
    {
      "path": "classic/classic/src/grid/plugin/DragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        558,
        660
      ],
      "idx": 595
    },
    {
      "path": "classic/classic/src/grid/plugin/RowEditing.js",
      "requires": [
        555,
        591
      ],
      "uses": [],
      "idx": 596
    },
    {
      "path": "classic/classic/src/rtl/grid/plugin/RowEditing.js",
      "requires": [],
      "uses": [],
      "idx": 597
    },
    {
      "path": "classic/classic/src/grid/plugin/RowExpander.js",
      "requires": [
        322,
        572
      ],
      "uses": [
        88,
        434
      ],
      "idx": 598
    },
    {
      "path": "classic/classic/src/grid/property/Grid.js",
      "requires": [
        410
      ],
      "uses": [
        11,
        88,
        163,
        205,
        342,
        350,
        394,
        408,
        444,
        526,
        528,
        531,
        534,
        551,
        592,
        600,
        603
      ],
      "idx": 599
    },
    {
      "path": "classic/classic/src/grid/property/HeaderContainer.js",
      "requires": [
        79,
        432
      ],
      "uses": [],
      "idx": 600
    },
    {
      "path": "classic/classic/src/grid/property/Property.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 601
    },
    {
      "path": "classic/classic/src/grid/property/Reader.js",
      "requires": [
        165
      ],
      "uses": [
        164
      ],
      "idx": 602
    },
    {
      "path": "classic/classic/src/grid/property/Store.js",
      "requires": [
        169,
        180,
        601,
        602
      ],
      "uses": [
        175
      ],
      "idx": 603
    },
    {
      "path": "classic/classic/src/grid/selection/Selection.js",
      "requires": [],
      "uses": [],
      "idx": 604
    },
    {
      "path": "classic/classic/src/grid/selection/Cells.js",
      "requires": [
        604
      ],
      "uses": [
        404
      ],
      "idx": 605
    },
    {
      "path": "classic/classic/src/grid/selection/Columns.js",
      "requires": [
        604
      ],
      "uses": [
        404
      ],
      "idx": 606
    },
    {
      "path": "classic/classic/src/grid/selection/Replicator.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 607
    },
    {
      "path": "classic/classic/src/grid/selection/Rows.js",
      "requires": [
        135,
        604
      ],
      "uses": [
        404
      ],
      "idx": 608
    },
    {
      "path": "classic/classic/src/grid/selection/SelectionExtender.js",
      "requires": [
        420
      ],
      "uses": [
        47,
        331
      ],
      "idx": 609
    },
    {
      "path": "classic/classic/src/grid/selection/SpreadsheetModel.js",
      "requires": [
        398,
        564,
        604,
        605,
        606,
        608,
        609
      ],
      "uses": [
        205,
        339,
        404,
        426,
        433
      ],
      "idx": 610
    },
    {
      "path": "classic/classic/src/util/Queue.js",
      "requires": [],
      "uses": [],
      "idx": 611
    },
    {
      "path": "classic/classic/src/layout/ContextItem.js",
      "requires": [],
      "uses": [
        53,
        64,
        70,
        336
      ],
      "idx": 612
    },
    {
      "path": "classic/classic/src/rtl/layout/ContextItem.js",
      "requires": [],
      "uses": [],
      "idx": 613
    },
    {
      "path": "classic/classic/src/layout/Context.js",
      "requires": [
        64,
        70,
        321,
        337,
        611,
        612
      ],
      "uses": [],
      "idx": 614
    },
    {
      "path": "classic/classic/src/layout/SizePolicy.js",
      "requires": [],
      "uses": [],
      "idx": 615
    },
    {
      "path": "classic/classic/src/layout/component/FieldSet.js",
      "requires": [
        456
      ],
      "uses": [],
      "idx": 616
    },
    {
      "path": "classic/classic/src/layout/container/Absolute.js",
      "requires": [
        483
      ],
      "uses": [],
      "idx": 617
    },
    {
      "path": "classic/classic/src/rtl/layout/container/Absolute.js",
      "requires": [],
      "uses": [],
      "idx": 618
    },
    {
      "path": "classic/classic/src/layout/container/Accordion.js",
      "requires": [
        374
      ],
      "uses": [],
      "idx": 619
    },
    {
      "path": "classic/classic/src/layout/container/Center.js",
      "requires": [
        396
      ],
      "uses": [],
      "idx": 620
    },
    {
      "path": "classic/classic/src/layout/container/Form.js",
      "requires": [
        339
      ],
      "uses": [],
      "idx": 621
    },
    {
      "path": "classic/classic/src/layout/container/SegmentedButton.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 622
    },
    {
      "path": "classic/classic/src/menu/ColorPicker.js",
      "requires": [
        541,
        577
      ],
      "uses": [
        205,
        350,
        452
      ],
      "idx": 623
    },
    {
      "path": "classic/classic/src/menu/DatePicker.js",
      "requires": [
        533,
        577
      ],
      "uses": [
        205,
        350,
        452
      ],
      "idx": 624
    },
    {
      "path": "classic/classic/src/panel/Pinnable.js",
      "requires": [
        0
      ],
      "uses": [
        205,
        350,
        358
      ],
      "idx": 625
    },
    {
      "path": "classic/classic/src/plugin/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 626
    },
    {
      "path": "classic/classic/src/resizer/BorderSplitterTracker.js",
      "requires": [
        25,
        488
      ],
      "uses": [],
      "idx": 627
    },
    {
      "path": "classic/classic/src/rtl/resizer/BorderSplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 628
    },
    {
      "path": "classic/classic/src/resizer/Handle.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 629
    },
    {
      "path": "classic/classic/src/resizer/ResizeTracker.js",
      "requires": [
        420
      ],
      "uses": [],
      "idx": 630
    },
    {
      "path": "classic/classic/src/rtl/resizer/ResizeTracker.js",
      "requires": [],
      "uses": [],
      "idx": 631
    },
    {
      "path": "classic/classic/src/resizer/Resizer.js",
      "requires": [
        49
      ],
      "uses": [
        47,
        80,
        125,
        240,
        630
      ],
      "idx": 632
    },
    {
      "path": "classic/classic/src/selection/CellModel.js",
      "requires": [
        399,
        404
      ],
      "uses": [],
      "idx": 633
    },
    {
      "path": "classic/classic/src/selection/CheckboxModel.js",
      "requires": [
        416
      ],
      "uses": [
        205,
        339,
        404,
        433,
        434
      ],
      "idx": 634
    },
    {
      "path": "classic/classic/src/slider/Thumb.js",
      "requires": [
        79,
        420
      ],
      "uses": [
        70
      ],
      "idx": 635
    },
    {
      "path": "classic/classic/src/slider/Tip.js",
      "requires": [
        467
      ],
      "uses": [],
      "idx": 636
    },
    {
      "path": "classic/classic/src/slider/Multi.js",
      "requires": [
        79,
        80,
        394,
        635,
        636
      ],
      "uses": [
        240
      ],
      "idx": 637
    },
    {
      "path": "classic/classic/src/rtl/slider/Multi.js",
      "requires": [],
      "uses": [],
      "idx": 638
    },
    {
      "path": "classic/classic/src/slider/Single.js",
      "requires": [
        637
      ],
      "uses": [],
      "idx": 639
    },
    {
      "path": "classic/classic/src/slider/Widget.js",
      "requires": [
        84,
        637
      ],
      "uses": [
        70,
        79
      ],
      "idx": 640
    },
    {
      "path": "classic/classic/src/sparkline/Shape.js",
      "requires": [],
      "uses": [],
      "idx": 641
    },
    {
      "path": "classic/classic/src/sparkline/CanvasBase.js",
      "requires": [
        641
      ],
      "uses": [],
      "idx": 642
    },
    {
      "path": "classic/classic/src/sparkline/CanvasCanvas.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 643
    },
    {
      "path": "classic/classic/src/sparkline/VmlCanvas.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "classic/classic/src/sparkline/Base.js",
      "requires": [
        84,
        88,
        205,
        339,
        385,
        468,
        643,
        644
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "classic/classic/src/sparkline/BarBase.js",
      "requires": [
        645
      ],
      "uses": [],
      "idx": 646
    },
    {
      "path": "classic/classic/src/sparkline/RangeMap.js",
      "requires": [],
      "uses": [],
      "idx": 647
    },
    {
      "path": "classic/classic/src/sparkline/Bar.js",
      "requires": [
        88,
        646,
        647
      ],
      "uses": [],
      "idx": 648
    },
    {
      "path": "classic/classic/src/sparkline/Box.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 649
    },
    {
      "path": "classic/classic/src/sparkline/Bullet.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 650
    },
    {
      "path": "classic/classic/src/sparkline/Discrete.js",
      "requires": [
        88,
        646
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "classic/classic/src/sparkline/Line.js",
      "requires": [
        88,
        645,
        647
      ],
      "uses": [],
      "idx": 652
    },
    {
      "path": "classic/classic/src/sparkline/Pie.js",
      "requires": [
        88,
        645
      ],
      "uses": [],
      "idx": 653
    },
    {
      "path": "classic/classic/src/sparkline/TriState.js",
      "requires": [
        88,
        646,
        647
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "classic/classic/src/state/CookieProvider.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 655
    },
    {
      "path": "classic/classic/src/state/LocalStorageProvider.js",
      "requires": [
        119,
        329
      ],
      "uses": [],
      "idx": 656
    },
    {
      "path": "classic/classic/src/toolbar/Breadcrumb.js",
      "requires": [
        237,
        341,
        361,
        473
      ],
      "uses": [
        183
      ],
      "idx": 657
    },
    {
      "path": "classic/classic/src/toolbar/Fill.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 658
    },
    {
      "path": "classic/classic/src/toolbar/Spacer.js",
      "requires": [
        125,
        376
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "classic/classic/src/view/DragZone.js",
      "requires": [
        423
      ],
      "uses": [
        80
      ],
      "idx": 660
    },
    {
      "path": "classic/classic/src/tree/ViewDragZone.js",
      "requires": [
        660
      ],
      "uses": [
        80
      ],
      "idx": 661
    },
    {
      "path": "classic/classic/src/tree/ViewDropZone.js",
      "requires": [
        557
      ],
      "uses": [],
      "idx": 662
    },
    {
      "path": "classic/classic/src/tree/plugin/TreeViewDragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        661,
        662
      ],
      "idx": 663
    },
    {
      "path": "classic/classic/src/util/CSS.js",
      "requires": [],
      "uses": [
        47
      ],
      "idx": 664
    },
    {
      "path": "classic/classic/src/util/Cookies.js",
      "requires": [],
      "uses": [],
      "idx": 665
    },
    {
      "path": "classic/classic/src/view/MultiSelectorSearch.js",
      "requires": [
        389
      ],
      "uses": [
        48,
        183,
        205,
        350,
        385,
        396,
        410,
        444
      ],
      "idx": 666
    },
    {
      "path": "classic/classic/src/view/MultiSelector.js",
      "requires": [
        205,
        385,
        396,
        410,
        666
      ],
      "uses": [],
      "idx": 667
    },
    {
      "path": "classic/classic/src/window/Toast.js",
      "requires": [
        466
      ],
      "uses": [
        1
      ],
      "idx": 668
    },
    {
      "path": "packages/charts/classic/src/chart/LegendBase.js",
      "requires": [
        403
      ],
      "uses": [],
      "idx": 669
    },
    {
      "path": "packages/charts/classic/src/draw/ContainerBase.js",
      "requires": [
        389,
        466
      ],
      "uses": [
        205,
        339,
        341,
        346,
        350,
        372,
        385
      ],
      "idx": 670
    },
    {
      "path": "packages/charts/classic/src/draw/SurfaceBase.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 671
    },
    {
      "path": "packages/charts/src/draw/Color.js",
      "requires": [],
      "uses": [],
      "idx": 672
    },
    {
      "path": "packages/charts/src/draw/sprite/AnimationParser.js",
      "requires": [
        672
      ],
      "uses": [
        687
      ],
      "idx": 673
    },
    {
      "path": "packages/charts/src/draw/Draw.js",
      "requires": [],
      "uses": [],
      "idx": 674
    },
    {
      "path": "packages/charts/src/draw/gradient/Gradient.js",
      "requires": [
        672
      ],
      "uses": [],
      "idx": 675
    },
    {
      "path": "packages/charts/src/draw/gradient/GradientDefinition.js",
      "requires": [],
      "uses": [],
      "idx": 676
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeParser.js",
      "requires": [
        672,
        676
      ],
      "uses": [
        675,
        710,
        711
      ],
      "idx": 677
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeDefinition.js",
      "requires": [
        673,
        677
      ],
      "uses": [
        674,
        679
      ],
      "idx": 678
    },
    {
      "path": "packages/charts/src/draw/Matrix.js",
      "requires": [],
      "uses": [],
      "idx": 679
    },
    {
      "path": "packages/charts/src/draw/modifier/Modifier.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 680
    },
    {
      "path": "packages/charts/src/draw/modifier/Target.js",
      "requires": [
        679,
        680
      ],
      "uses": [],
      "idx": 681
    },
    {
      "path": "packages/charts/src/draw/TimingFunctions.js",
      "requires": [],
      "uses": [],
      "idx": 682
    },
    {
      "path": "packages/charts/src/draw/Animator.js",
      "requires": [],
      "uses": [
        10,
        674
      ],
      "idx": 683
    },
    {
      "path": "packages/charts/src/draw/modifier/Animation.js",
      "requires": [
        680,
        682,
        683
      ],
      "uses": [],
      "idx": 684
    },
    {
      "path": "packages/charts/src/draw/modifier/Highlight.js",
      "requires": [
        680
      ],
      "uses": [],
      "idx": 685
    },
    {
      "path": "packages/charts/src/draw/sprite/Sprite.js",
      "requires": [
        4,
        674,
        675,
        678,
        681,
        684,
        685
      ],
      "uses": [
        680
      ],
      "idx": 686
    },
    {
      "path": "packages/charts/src/draw/Path.js",
      "requires": [
        674
      ],
      "uses": [],
      "idx": 687
    },
    {
      "path": "packages/charts/src/draw/overrides/Path.js",
      "requires": [],
      "uses": [
        791
      ],
      "idx": 688
    },
    {
      "path": "packages/charts/src/draw/sprite/Path.js",
      "requires": [
        674,
        686,
        687
      ],
      "uses": [],
      "idx": 689
    },
    {
      "path": "packages/charts/src/draw/overrides/sprite/Path.js",
      "requires": [
        672
      ],
      "uses": [
        686
      ],
      "idx": 690
    },
    {
      "path": "packages/charts/src/draw/sprite/Circle.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 691
    },
    {
      "path": "packages/charts/src/draw/sprite/Arc.js",
      "requires": [
        691
      ],
      "uses": [],
      "idx": 692
    },
    {
      "path": "packages/charts/src/draw/sprite/Arrow.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 693
    },
    {
      "path": "packages/charts/src/draw/sprite/Composite.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 694
    },
    {
      "path": "packages/charts/src/draw/sprite/Cross.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 695
    },
    {
      "path": "packages/charts/src/draw/sprite/Diamond.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 696
    },
    {
      "path": "packages/charts/src/draw/sprite/Ellipse.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 697
    },
    {
      "path": "packages/charts/src/draw/sprite/EllipticalArc.js",
      "requires": [
        697
      ],
      "uses": [],
      "idx": 698
    },
    {
      "path": "packages/charts/src/draw/sprite/Rect.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 699
    },
    {
      "path": "packages/charts/src/draw/sprite/Image.js",
      "requires": [
        699
      ],
      "uses": [],
      "idx": 700
    },
    {
      "path": "packages/charts/src/draw/sprite/Instancing.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 701
    },
    {
      "path": "packages/charts/src/draw/sprite/Line.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 702
    },
    {
      "path": "packages/charts/src/draw/sprite/Plus.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 703
    },
    {
      "path": "packages/charts/src/draw/sprite/Sector.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 704
    },
    {
      "path": "packages/charts/src/draw/sprite/Square.js",
      "requires": [
        699
      ],
      "uses": [],
      "idx": 705
    },
    {
      "path": "packages/charts/src/draw/TextMeasurer.js",
      "requires": [
        332
      ],
      "uses": [
        47
      ],
      "idx": 706
    },
    {
      "path": "packages/charts/src/draw/sprite/Text.js",
      "requires": [
        672,
        686,
        706
      ],
      "uses": [
        47,
        679
      ],
      "idx": 707
    },
    {
      "path": "packages/charts/src/draw/sprite/Tick.js",
      "requires": [
        702
      ],
      "uses": [],
      "idx": 708
    },
    {
      "path": "packages/charts/src/draw/sprite/Triangle.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 709
    },
    {
      "path": "packages/charts/src/draw/gradient/Linear.js",
      "requires": [
        672,
        675
      ],
      "uses": [
        674
      ],
      "idx": 710
    },
    {
      "path": "packages/charts/src/draw/gradient/Radial.js",
      "requires": [
        675
      ],
      "uses": [],
      "idx": 711
    },
    {
      "path": "packages/charts/src/draw/Surface.js",
      "requires": [
        671,
        673,
        674,
        675,
        676,
        677,
        678,
        679,
        686,
        689,
        691,
        692,
        693,
        694,
        695,
        696,
        697,
        698,
        699,
        700,
        701,
        702,
        703,
        704,
        705,
        707,
        708,
        709,
        710,
        711
      ],
      "uses": [
        47,
        717
      ],
      "idx": 712
    },
    {
      "path": "packages/charts/src/draw/overrides/Surface.js",
      "requires": [],
      "uses": [
        686
      ],
      "idx": 713
    },
    {
      "path": "packages/charts/src/draw/engine/SvgContext.js",
      "requires": [
        672
      ],
      "uses": [
        679,
        687
      ],
      "idx": 714
    },
    {
      "path": "packages/charts/src/draw/engine/Svg.js",
      "requires": [
        712,
        714
      ],
      "uses": [],
      "idx": 715
    },
    {
      "path": "packages/charts/src/draw/engine/excanvas.js",
      "requires": [],
      "uses": [],
      "idx": 716
    },
    {
      "path": "packages/charts/src/draw/engine/Canvas.js",
      "requires": [
        672,
        683,
        712,
        716
      ],
      "uses": [
        47,
        679
      ],
      "idx": 717
    },
    {
      "path": "packages/charts/src/draw/Container.js",
      "requires": [
        670,
        676,
        712,
        715,
        717
      ],
      "uses": [
        78,
        240,
        683
      ],
      "idx": 718
    },
    {
      "path": "packages/charts/classic/src/chart/TipSurface.js",
      "requires": [
        718
      ],
      "uses": [],
      "idx": 719
    },
    {
      "path": "packages/charts/src/chart/interactions/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        11
      ],
      "idx": 720
    },
    {
      "path": "packages/charts/classic/src/chart/interactions/ItemInfo.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 721
    },
    {
      "path": "packages/charts/src/chart/theme/Base.js",
      "requires": [
        93,
        672
      ],
      "uses": [],
      "idx": 722
    },
    {
      "path": "packages/charts/src/chart/theme/Default.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 723
    },
    {
      "path": "packages/charts/src/chart/Markers.js",
      "requires": [
        701
      ],
      "uses": [],
      "idx": 724
    },
    {
      "path": "packages/charts/src/chart/label/Callout.js",
      "requires": [
        680
      ],
      "uses": [],
      "idx": 725
    },
    {
      "path": "packages/charts/src/chart/label/Label.js",
      "requires": [
        707,
        725
      ],
      "uses": [],
      "idx": 726
    },
    {
      "path": "packages/charts/src/chart/series/Series.js",
      "requires": [
        4,
        82,
        468,
        724,
        726
      ],
      "uses": [
        11,
        183,
        205,
        339,
        385,
        672,
        701
      ],
      "idx": 727
    },
    {
      "path": "packages/charts/src/chart/MarkerHolder.js",
      "requires": [
        0
      ],
      "uses": [
        679
      ],
      "idx": 728
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis.js",
      "requires": [
        686,
        707,
        728
      ],
      "uses": [
        674,
        679
      ],
      "idx": 729
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Segmenter.js",
      "requires": [],
      "uses": [],
      "idx": 730
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Names.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 731
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Numeric.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 732
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Time.js",
      "requires": [
        730
      ],
      "uses": [],
      "idx": 733
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Layout.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 734
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Discrete.js",
      "requires": [
        734
      ],
      "uses": [],
      "idx": 735
    },
    {
      "path": "packages/charts/src/chart/axis/layout/CombineDuplicate.js",
      "requires": [
        735
      ],
      "uses": [],
      "idx": 736
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Continuous.js",
      "requires": [
        734
      ],
      "uses": [],
      "idx": 737
    },
    {
      "path": "packages/charts/src/chart/axis/Axis.js",
      "requires": [
        4,
        729,
        730,
        731,
        732,
        733,
        734,
        735,
        736,
        737
      ],
      "uses": [
        11,
        701,
        707,
        724
      ],
      "idx": 738
    },
    {
      "path": "packages/charts/src/chart/Legend.js",
      "requires": [
        669
      ],
      "uses": [],
      "idx": 739
    },
    {
      "path": "packages/charts/src/chart/AbstractChart.js",
      "requires": [
        180,
        183,
        718,
        720,
        723,
        727,
        738,
        739,
        741
      ],
      "uses": [
        11,
        79,
        93,
        683
      ],
      "idx": 740
    },
    {
      "path": "packages/charts/classic/overrides/AbstractChart.js",
      "requires": [],
      "uses": [
        205,
        385,
        389
      ],
      "idx": 741
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 742
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid.js",
      "requires": [
        686
      ],
      "uses": [],
      "idx": 743
    },
    {
      "path": "packages/charts/src/chart/CartesianChart.js",
      "requires": [
        740,
        742,
        743
      ],
      "uses": [
        79
      ],
      "idx": 744
    },
    {
      "path": "packages/charts/src/chart/grid/CircularGrid.js",
      "requires": [
        691
      ],
      "uses": [],
      "idx": 745
    },
    {
      "path": "packages/charts/src/chart/grid/RadialGrid.js",
      "requires": [
        689
      ],
      "uses": [],
      "idx": 746
    },
    {
      "path": "packages/charts/src/chart/PolarChart.js",
      "requires": [
        740,
        745,
        746
      ],
      "uses": [
        674
      ],
      "idx": 747
    },
    {
      "path": "packages/charts/src/chart/SpaceFillingChart.js",
      "requires": [
        740
      ],
      "uses": [],
      "idx": 748
    },
    {
      "path": "packages/charts/src/chart/axis/Axis3D.js",
      "requires": [
        738
      ],
      "uses": [],
      "idx": 749
    },
    {
      "path": "packages/charts/src/chart/axis/Category.js",
      "requires": [
        731,
        736,
        738
      ],
      "uses": [],
      "idx": 750
    },
    {
      "path": "packages/charts/src/chart/axis/Category3D.js",
      "requires": [
        731,
        736,
        749
      ],
      "uses": [],
      "idx": 751
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric.js",
      "requires": [
        732,
        737,
        738
      ],
      "uses": [],
      "idx": 752
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric3D.js",
      "requires": [
        732,
        737,
        749
      ],
      "uses": [],
      "idx": 753
    },
    {
      "path": "packages/charts/src/chart/axis/Time.js",
      "requires": [
        733,
        737,
        752
      ],
      "uses": [],
      "idx": 754
    },
    {
      "path": "packages/charts/src/chart/axis/Time3D.js",
      "requires": [
        733,
        737,
        753
      ],
      "uses": [],
      "idx": 755
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis3D.js",
      "requires": [
        729
      ],
      "uses": [],
      "idx": 756
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid3D.js",
      "requires": [
        742
      ],
      "uses": [],
      "idx": 757
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid3D.js",
      "requires": [
        743
      ],
      "uses": [],
      "idx": 758
    },
    {
      "path": "packages/charts/src/chart/interactions/CrossZoom.js",
      "requires": [
        720
      ],
      "uses": [
        453
      ],
      "idx": 759
    },
    {
      "path": "packages/charts/src/chart/interactions/Crosshair.js",
      "requires": [
        720,
        735,
        742,
        743,
        744
      ],
      "uses": [],
      "idx": 760
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemHighlight.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 761
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemEdit.js",
      "requires": [
        468,
        761
      ],
      "uses": [],
      "idx": 762
    },
    {
      "path": "packages/charts/src/chart/interactions/PanZoom.js",
      "requires": [
        205,
        350,
        453,
        475,
        622,
        683,
        720
      ],
      "uses": [],
      "idx": 763
    },
    {
      "path": "packages/charts/src/chart/interactions/Rotate.js",
      "requires": [
        720
      ],
      "uses": [],
      "idx": 764
    },
    {
      "path": "packages/charts/src/chart/interactions/RotatePie3D.js",
      "requires": [
        764
      ],
      "uses": [],
      "idx": 765
    },
    {
      "path": "packages/charts/src/chart/plugin/ItemEvents.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 766
    },
    {
      "path": "packages/charts/src/chart/series/Cartesian.js",
      "requires": [
        727
      ],
      "uses": [],
      "idx": 767
    },
    {
      "path": "packages/charts/src/chart/series/StackedCartesian.js",
      "requires": [
        767
      ],
      "uses": [],
      "idx": 768
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Series.js",
      "requires": [
        686,
        728
      ],
      "uses": [],
      "idx": 769
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Cartesian.js",
      "requires": [
        769
      ],
      "uses": [],
      "idx": 770
    },
    {
      "path": "packages/charts/src/chart/series/sprite/StackedCartesian.js",
      "requires": [
        770
      ],
      "uses": [],
      "idx": 771
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Area.js",
      "requires": [
        771
      ],
      "uses": [],
      "idx": 772
    },
    {
      "path": "packages/charts/src/chart/series/Area.js",
      "requires": [
        768,
        772
      ],
      "uses": [],
      "idx": 773
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar.js",
      "requires": [
        771
      ],
      "uses": [
        674
      ],
      "idx": 774
    },
    {
      "path": "packages/charts/src/chart/series/Bar.js",
      "requires": [
        699,
        768,
        774
      ],
      "uses": [],
      "idx": 775
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar3D.js",
      "requires": [
        710,
        774
      ],
      "uses": [],
      "idx": 776
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Box.js",
      "requires": [
        686
      ],
      "uses": [
        672,
        710
      ],
      "idx": 777
    },
    {
      "path": "packages/charts/src/chart/series/Bar3D.js",
      "requires": [
        775,
        776,
        777
      ],
      "uses": [],
      "idx": 778
    },
    {
      "path": "packages/charts/src/draw/LimitedCache.js",
      "requires": [],
      "uses": [],
      "idx": 779
    },
    {
      "path": "packages/charts/src/draw/SegmentTree.js",
      "requires": [],
      "uses": [],
      "idx": 780
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Aggregative.js",
      "requires": [
        770,
        779,
        780
      ],
      "uses": [],
      "idx": 781
    },
    {
      "path": "packages/charts/src/chart/series/sprite/CandleStick.js",
      "requires": [
        781
      ],
      "uses": [
        699
      ],
      "idx": 782
    },
    {
      "path": "packages/charts/src/chart/series/CandleStick.js",
      "requires": [
        767,
        782
      ],
      "uses": [],
      "idx": 783
    },
    {
      "path": "packages/charts/src/chart/series/Polar.js",
      "requires": [
        727
      ],
      "uses": [],
      "idx": 784
    },
    {
      "path": "packages/charts/src/chart/series/Gauge.js",
      "requires": [
        704,
        784
      ],
      "uses": [],
      "idx": 785
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Line.js",
      "requires": [
        781
      ],
      "uses": [
        674
      ],
      "idx": 786
    },
    {
      "path": "packages/charts/src/chart/series/Line.js",
      "requires": [
        767,
        786
      ],
      "uses": [],
      "idx": 787
    },
    {
      "path": "packages/charts/src/chart/series/sprite/PieSlice.js",
      "requires": [
        704,
        728
      ],
      "uses": [],
      "idx": 788
    },
    {
      "path": "packages/charts/src/chart/series/Pie.js",
      "requires": [
        784,
        788
      ],
      "uses": [],
      "idx": 789
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Pie3DPart.js",
      "requires": [
        689,
        728
      ],
      "uses": [
        672,
        677,
        710,
        711
      ],
      "idx": 790
    },
    {
      "path": "packages/charts/src/draw/PathUtil.js",
      "requires": [
        688,
        690,
        713
      ],
      "uses": [],
      "idx": 791
    },
    {
      "path": "packages/charts/src/chart/series/Pie3D.js",
      "requires": [
        784,
        790,
        791
      ],
      "uses": [
        672
      ],
      "idx": 792
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Polar.js",
      "requires": [
        769
      ],
      "uses": [],
      "idx": 793
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Radar.js",
      "requires": [
        793
      ],
      "uses": [],
      "idx": 794
    },
    {
      "path": "packages/charts/src/chart/series/Radar.js",
      "requires": [
        784,
        794
      ],
      "uses": [],
      "idx": 795
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Scatter.js",
      "requires": [
        770
      ],
      "uses": [],
      "idx": 796
    },
    {
      "path": "packages/charts/src/chart/series/Scatter.js",
      "requires": [
        767,
        796
      ],
      "uses": [],
      "idx": 797
    },
    {
      "path": "packages/charts/src/chart/theme/Blue.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 798
    },
    {
      "path": "packages/charts/src/chart/theme/BlueGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 799
    },
    {
      "path": "packages/charts/src/chart/theme/Category1.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 800
    },
    {
      "path": "packages/charts/src/chart/theme/Category1Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 801
    },
    {
      "path": "packages/charts/src/chart/theme/Category2.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 802
    },
    {
      "path": "packages/charts/src/chart/theme/Category2Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 803
    },
    {
      "path": "packages/charts/src/chart/theme/Category3.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 804
    },
    {
      "path": "packages/charts/src/chart/theme/Category3Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 805
    },
    {
      "path": "packages/charts/src/chart/theme/Category4.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 806
    },
    {
      "path": "packages/charts/src/chart/theme/Category4Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 807
    },
    {
      "path": "packages/charts/src/chart/theme/Category5.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 808
    },
    {
      "path": "packages/charts/src/chart/theme/Category5Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 809
    },
    {
      "path": "packages/charts/src/chart/theme/Category6.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 810
    },
    {
      "path": "packages/charts/src/chart/theme/Category6Gradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 811
    },
    {
      "path": "packages/charts/src/chart/theme/DefaultGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 812
    },
    {
      "path": "packages/charts/src/chart/theme/Green.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 813
    },
    {
      "path": "packages/charts/src/chart/theme/GreenGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 814
    },
    {
      "path": "packages/charts/src/chart/theme/Midnight.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 815
    },
    {
      "path": "packages/charts/src/chart/theme/Muted.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 816
    },
    {
      "path": "packages/charts/src/chart/theme/Purple.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 817
    },
    {
      "path": "packages/charts/src/chart/theme/PurpleGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 818
    },
    {
      "path": "packages/charts/src/chart/theme/Red.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 819
    },
    {
      "path": "packages/charts/src/chart/theme/RedGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 820
    },
    {
      "path": "packages/charts/src/chart/theme/Sky.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 821
    },
    {
      "path": "packages/charts/src/chart/theme/SkyGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 822
    },
    {
      "path": "packages/charts/src/chart/theme/Yellow.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 823
    },
    {
      "path": "packages/charts/src/chart/theme/YellowGradients.js",
      "requires": [
        722
      ],
      "uses": [],
      "idx": 824
    },
    {
      "path": "packages/charts/src/draw/Point.js",
      "requires": [
        674,
        679
      ],
      "uses": [],
      "idx": 825
    },
    {
      "path": "packages/charts/src/draw/plugin/SpriteEvents.js",
      "requires": [
        322,
        791
      ],
      "uses": [],
      "idx": 826
    },
    {
      "path": "packages/ux/classic/src/BoxReorderer.js",
      "requires": [
        49,
        378
      ],
      "uses": [
        64
      ],
      "idx": 827
    },
    {
      "path": "packages/ux/classic/src/CellDragDrop.js",
      "requires": [
        322
      ],
      "uses": [
        27,
        429,
        660
      ],
      "idx": 828
    },
    {
      "path": "packages/ux/classic/src/DataTip.js",
      "requires": [
        322,
        468
      ],
      "uses": [
        391
      ],
      "idx": 829
    },
    {
      "path": "packages/ux/classic/src/DataView/Animated.js",
      "requires": [],
      "uses": [
        64,
        72,
        80,
        331
      ],
      "idx": 830
    },
    {
      "path": "packages/ux/classic/src/DataView/DragSelector.js",
      "requires": [
        25,
        420
      ],
      "uses": [],
      "idx": 831
    },
    {
      "path": "packages/ux/classic/src/DataView/Draggable.js",
      "requires": [
        423
      ],
      "uses": [
        180,
        403
      ],
      "idx": 832
    },
    {
      "path": "packages/ux/classic/src/DataView/LabelEditor.js",
      "requires": [
        343,
        444
      ],
      "uses": [
        205,
        350
      ],
      "idx": 833
    },
    {
      "path": "packages/ux/classic/src/DataViewTransition.js",
      "requires": [],
      "uses": [
        80,
        331
      ],
      "idx": 834
    },
    {
      "path": "packages/ux/classic/src/Explorer.js",
      "requires": [
        205,
        350,
        372,
        385,
        389,
        396,
        399,
        400,
        403,
        441,
        447,
        657
      ],
      "uses": [
        180
      ],
      "idx": 835
    },
    {
      "path": "packages/ux/classic/src/FieldReplicator.js",
      "requires": [],
      "uses": [],
      "idx": 836
    },
    {
      "path": "packages/ux/classic/src/GMapPanel.js",
      "requires": [
        389,
        504
      ],
      "uses": [],
      "idx": 837
    },
    {
      "path": "packages/ux/classic/src/GroupTabRenderer.js",
      "requires": [
        88,
        322
      ],
      "uses": [],
      "idx": 838
    },
    {
      "path": "packages/ux/classic/src/GroupTabPanel.js",
      "requires": [
        341,
        441,
        838
      ],
      "uses": [
        169,
        174,
        175,
        205,
        237,
        339,
        350,
        385,
        396,
        433,
        436,
        449
      ],
      "idx": 839
    },
    {
      "path": "packages/ux/classic/src/IFrame.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 840
    },
    {
      "path": "packages/ux/classic/src/statusbar/StatusBar.js",
      "requires": [
        376,
        525
      ],
      "uses": [
        205,
        350
      ],
      "idx": 841
    },
    {
      "path": "packages/ux/classic/src/LiveSearchGridPanel.js",
      "requires": [
        410,
        412,
        444,
        525,
        841
      ],
      "uses": [
        80,
        205,
        350,
        453,
        544
      ],
      "idx": 842
    },
    {
      "path": "packages/ux/classic/src/PreviewPlugin.js",
      "requires": [
        322,
        572
      ],
      "uses": [],
      "idx": 843
    },
    {
      "path": "packages/ux/classic/src/ProgressBarPager.js",
      "requires": [
        352
      ],
      "uses": [
        80,
        205,
        351
      ],
      "idx": 844
    },
    {
      "path": "packages/ux/classic/src/RowExpander.js",
      "requires": [
        598
      ],
      "uses": [],
      "idx": 845
    },
    {
      "path": "packages/ux/classic/src/SlidingPager.js",
      "requires": [
        636,
        639
      ],
      "uses": [
        80,
        205,
        350
      ],
      "idx": 846
    },
    {
      "path": "packages/ux/classic/src/Spotlight.js",
      "requires": [],
      "uses": [
        47,
        92
      ],
      "idx": 847
    },
    {
      "path": "packages/ux/classic/src/TabCloseMenu.js",
      "requires": [
        49,
        322
      ],
      "uses": [
        205,
        366,
        374,
        385,
        577
      ],
      "idx": 848
    },
    {
      "path": "packages/ux/classic/src/TabReorderer.js",
      "requires": [
        827
      ],
      "uses": [],
      "idx": 849
    },
    {
      "path": "packages/ux/classic/src/TabScrollerMenu.js",
      "requires": [
        577
      ],
      "uses": [
        47,
        79,
        205,
        366,
        374,
        385
      ],
      "idx": 850
    },
    {
      "path": "packages/ux/classic/src/ToolbarDroppable.js",
      "requires": [],
      "uses": [
        427
      ],
      "idx": 851
    },
    {
      "path": "packages/ux/classic/src/TreePicker.js",
      "requires": [
        521
      ],
      "uses": [
        205,
        385,
        396,
        441
      ],
      "idx": 852
    },
    {
      "path": "packages/ux/classic/src/colorpick/Selection.js",
      "requires": [],
      "uses": [
        854
      ],
      "idx": 853
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorUtils.js",
      "requires": [],
      "uses": [
        88
      ],
      "idx": 854
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorMapController.js",
      "requires": [
        195,
        854
      ],
      "uses": [],
      "idx": 855
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorMap.js",
      "requires": [
        341,
        855
      ],
      "uses": [],
      "idx": 856
    },
    {
      "path": "packages/ux/classic/src/colorpick/SelectorModel.js",
      "requires": [
        218,
        854
      ],
      "uses": [],
      "idx": 857
    },
    {
      "path": "packages/ux/classic/src/colorpick/SelectorController.js",
      "requires": [
        195,
        854
      ],
      "uses": [],
      "idx": 858
    },
    {
      "path": "packages/ux/classic/src/colorpick/ColorPreview.js",
      "requires": [
        79,
        88,
        125
      ],
      "uses": [
        854
      ],
      "idx": 859
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderController.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 860
    },
    {
      "path": "packages/ux/classic/src/colorpick/Slider.js",
      "requires": [
        341,
        620,
        860
      ],
      "uses": [],
      "idx": 861
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderAlpha.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 862
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderSaturation.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 863
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderValue.js",
      "requires": [
        88,
        861
      ],
      "uses": [
        854
      ],
      "idx": 864
    },
    {
      "path": "packages/ux/classic/src/colorpick/SliderHue.js",
      "requires": [
        861
      ],
      "uses": [],
      "idx": 865
    },
    {
      "path": "packages/ux/classic/src/colorpick/Selector.js",
      "requires": [
        341,
        372,
        444,
        528,
        853,
        856,
        857,
        858,
        859,
        861,
        862,
        863,
        864,
        865
      ],
      "uses": [
        93,
        125,
        205,
        339,
        350,
        374,
        394,
        453,
        526,
        620,
        855,
        860
      ],
      "idx": 866
    },
    {
      "path": "packages/ux/classic/src/colorpick/ButtonController.js",
      "requires": [
        195,
        396,
        466,
        854,
        866
      ],
      "uses": [],
      "idx": 867
    },
    {
      "path": "packages/ux/classic/src/colorpick/Button.js",
      "requires": [
        125,
        205,
        350,
        372,
        385,
        396,
        466,
        853,
        858,
        866,
        867
      ],
      "uses": [
        854
      ],
      "idx": 868
    },
    {
      "path": "packages/ux/classic/src/colorpick/Field.js",
      "requires": [
        205,
        350,
        372,
        385,
        396,
        466,
        521,
        853,
        854,
        858,
        866
      ],
      "uses": [],
      "idx": 869
    },
    {
      "path": "packages/ux/src/google/Api.js",
      "requires": [
        316
      ],
      "uses": [],
      "idx": 870
    },
    {
      "path": "packages/ux/src/google/Feeds.js",
      "requires": [
        870
      ],
      "uses": [],
      "idx": 871
    },
    {
      "path": "packages/ux/classic/src/dashboard/GoogleRssView.js",
      "requires": [
        125,
        468,
        871
      ],
      "uses": [
        47,
        205,
        339,
        385
      ],
      "idx": 872
    },
    {
      "path": "packages/ux/classic/src/dashboard/GoogleRssPart.js",
      "requires": [
        205,
        350,
        494,
        504,
        872
      ],
      "uses": [],
      "idx": 873
    },
    {
      "path": "packages/ux/classic/src/data/PagingMemoryProxy.js",
      "requires": [
        169
      ],
      "uses": [],
      "idx": 874
    },
    {
      "path": "packages/ux/classic/src/dd/CellFieldDropZone.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 875
    },
    {
      "path": "packages/ux/classic/src/dd/PanelFieldDragZone.js",
      "requires": [
        423
      ],
      "uses": [
        391
      ],
      "idx": 876
    },
    {
      "path": "packages/ux/classic/src/desktop/Desktop.js",
      "requires": [
        389
      ],
      "uses": [
        53,
        88,
        205,
        350,
        399,
        400,
        403,
        466,
        577,
        882,
        884
      ],
      "idx": 877
    },
    {
      "path": "packages/ux/classic/src/desktop/App.js",
      "requires": [
        49,
        482,
        877
      ],
      "uses": [
        205,
        350,
        396,
        470
      ],
      "idx": 878
    },
    {
      "path": "packages/ux/classic/src/desktop/Module.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 879
    },
    {
      "path": "packages/ux/classic/src/desktop/ShortcutModel.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 880
    },
    {
      "path": "packages/ux/classic/src/desktop/StartMenu.js",
      "requires": [
        577
      ],
      "uses": [
        376
      ],
      "idx": 881
    },
    {
      "path": "packages/ux/classic/src/desktop/TaskBar.js",
      "requires": [
        369,
        376,
        453,
        525,
        577,
        881
      ],
      "uses": [
        79,
        88,
        205,
        350
      ],
      "idx": 882
    },
    {
      "path": "packages/ux/classic/src/desktop/Video.js",
      "requires": [
        389
      ],
      "uses": [],
      "idx": 883
    },
    {
      "path": "packages/ux/classic/src/desktop/Wallpaper.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 884
    },
    {
      "path": "packages/ux/classic/src/event/RecorderManager.js",
      "requires": [
        389
      ],
      "uses": [
        205,
        350,
        473,
        503,
        525,
        901,
        902
      ],
      "idx": 885
    },
    {
      "path": "packages/ux/classic/src/form/MultiSelect.js",
      "requires": [
        347,
        389,
        393,
        396,
        508,
        530
      ],
      "uses": [
        80,
        205,
        385,
        483,
        557,
        660
      ],
      "idx": 886
    },
    {
      "path": "packages/ux/classic/src/form/ItemSelector.js",
      "requires": [
        453,
        886
      ],
      "uses": [
        205,
        350,
        374,
        376,
        483,
        507,
        544
      ],
      "idx": 887
    },
    {
      "path": "packages/ux/classic/src/form/SearchField.js",
      "requires": [
        444
      ],
      "uses": [
        48,
        183
      ],
      "idx": 888
    },
    {
      "path": "packages/ux/classic/src/grid/SubTable.js",
      "requires": [
        598
      ],
      "uses": [],
      "idx": 889
    },
    {
      "path": "packages/ux/classic/src/grid/TransformGrid.js",
      "requires": [
        410
      ],
      "uses": [],
      "idx": 890
    },
    {
      "path": "packages/ux/classic/src/rating/Picker.js",
      "requires": [
        84
      ],
      "uses": [
        88,
        470
      ],
      "idx": 891
    },
    {
      "path": "packages/ux/classic/src/statusbar/ValidationStatus.js",
      "requires": [
        53,
        125
      ],
      "uses": [
        240
      ],
      "idx": 892
    },
    {
      "path": "packages/ux/src/ajax/Simlet.js",
      "requires": [],
      "uses": [
        896
      ],
      "idx": 893
    },
    {
      "path": "packages/ux/src/ajax/DataSimlet.js",
      "requires": [
        893
      ],
      "uses": [
        178
      ],
      "idx": 894
    },
    {
      "path": "packages/ux/src/ajax/JsonSimlet.js",
      "requires": [
        894
      ],
      "uses": [],
      "idx": 895
    },
    {
      "path": "packages/ux/src/ajax/SimXhr.js",
      "requires": [],
      "uses": [],
      "idx": 896
    },
    {
      "path": "packages/ux/src/ajax/SimManager.js",
      "requires": [
        8,
        893,
        895,
        896
      ],
      "uses": [
        227
      ],
      "idx": 897
    },
    {
      "path": "packages/ux/src/ajax/XmlSimlet.js",
      "requires": [
        894
      ],
      "uses": [
        88
      ],
      "idx": 898
    },
    {
      "path": "packages/ux/src/event/Driver.js",
      "requires": [
        49
      ],
      "uses": [],
      "idx": 899
    },
    {
      "path": "packages/ux/src/event/Maker.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 900
    },
    {
      "path": "packages/ux/src/event/Player.js",
      "requires": [
        899
      ],
      "uses": [],
      "idx": 901
    },
    {
      "path": "packages/ux/src/event/Recorder.js",
      "requires": [
        899
      ],
      "uses": [
        27
      ],
      "idx": 902
    }
  ],
  "classes": {
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.Action": {
      "idx": 333,
      "alias": [],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 125,
      "alias": [
        "widget.box",
        "widget.component"
      ],
      "alternates": [
        "Ext.AbstractComponent"
      ]
    },
    "Ext.ComponentLoader": {
      "idx": 335,
      "alias": [],
      "alternates": []
    },
    "Ext.ComponentManager": {
      "idx": 11,
      "alias": [],
      "alternates": [
        "Ext.ComponentMgr"
      ]
    },
    "Ext.ComponentQuery": {
      "idx": 14,
      "alias": [],
      "alternates": []
    },
    "Ext.Editor": {
      "idx": 343,
      "alias": [
        "widget.editor"
      ],
      "alternates": []
    },
    "Ext.ElementLoader": {
      "idx": 334,
      "alias": [],
      "alternates": []
    },
    "Ext.EventManager": {
      "idx": 344,
      "alias": [],
      "alternates": []
    },
    "Ext.Evented": {
      "idx": 15,
      "alias": [],
      "alternates": [
        "Ext.EventedBase"
      ]
    },
    "Ext.FocusManager": {
      "idx": 345,
      "alias": [],
      "alternates": [
        "Ext.FocusMgr"
      ]
    },
    "Ext.GlobalEvents": {
      "idx": 76,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 346,
      "alias": [
        "widget.image",
        "widget.imagecomponent"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 348,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.ProgressBar": {
      "idx": 352,
      "alias": [
        "widget.progressbar"
      ],
      "alternates": []
    },
    "Ext.ProgressBarWidget": {
      "idx": 353,
      "alias": [
        "widget.progressbarwidget"
      ],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 80,
      "alias": [],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 84,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 88,
      "alias": [],
      "alternates": []
    },
    "Ext.ZIndexManager": {
      "idx": 340,
      "alias": [],
      "alternates": [
        "Ext.WindowGroup"
      ]
    },
    "Ext.app.Application": {
      "idx": 190,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 189,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 218,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 215,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 216,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentDetail": {
      "idx": 414,
      "alias": [
        "widget.bindinspector-componentdetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentList": {
      "idx": 445,
      "alias": [
        "widget.bindinspector-componentlist"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Container": {
      "idx": 463,
      "alias": [
        "widget.bindinspector-container"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Environment": {
      "idx": 460,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Inspector": {
      "idx": 472,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Util": {
      "idx": 413,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ViewModelDetail": {
      "idx": 461,
      "alias": [
        "widget.bindinspector-viewmodeldetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.noconflict.BaseModel": {
      "idx": 462,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 90,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 219,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 222,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 184,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 194,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 185,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 186,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.button.Button": {
      "idx": 453,
      "alias": [
        "widget.button"
      ],
      "alternates": [
        "Ext.Button"
      ]
    },
    "Ext.button.Cycle": {
      "idx": 474,
      "alias": [
        "widget.cycle"
      ],
      "alternates": [
        "Ext.CycleButton"
      ]
    },
    "Ext.button.Manager": {
      "idx": 451,
      "alias": [],
      "alternates": [
        "Ext.ButtonToggleManager"
      ]
    },
    "Ext.button.Segmented": {
      "idx": 475,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.button.Split": {
      "idx": 473,
      "alias": [
        "widget.splitbutton"
      ],
      "alternates": [
        "Ext.SplitButton"
      ]
    },
    "Ext.chart.AbstractChart": {
      "idx": 740,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.CartesianChart": {
      "idx": 744,
      "alias": [
        "widget.cartesian",
        "widget.chart"
      ],
      "alternates": [
        "Ext.chart.Chart"
      ]
    },
    "Ext.chart.Legend": {
      "idx": 739,
      "alias": [
        "widget.legend"
      ],
      "alternates": []
    },
    "Ext.chart.LegendBase": {
      "idx": 669,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.MarkerHolder": {
      "idx": 728,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.Markers": {
      "idx": 724,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.PolarChart": {
      "idx": 747,
      "alias": [
        "widget.polar"
      ],
      "alternates": []
    },
    "Ext.chart.SpaceFillingChart": {
      "idx": 748,
      "alias": [
        "widget.spacefilling"
      ],
      "alternates": []
    },
    "Ext.chart.TipSurface": {
      "idx": 719,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.Axis": {
      "idx": 738,
      "alias": [
        "widget.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis3D": {
      "idx": 749,
      "alias": [
        "widget.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category": {
      "idx": 750,
      "alias": [
        "axis.category"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category3D": {
      "idx": 751,
      "alias": [
        "axis.category3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric": {
      "idx": 752,
      "alias": [
        "axis.numeric",
        "axis.radial"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric3D": {
      "idx": 753,
      "alias": [
        "axis.numeric3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time": {
      "idx": 754,
      "alias": [
        "axis.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time3D": {
      "idx": 755,
      "alias": [
        "axis.time3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.CombineDuplicate": {
      "idx": 736,
      "alias": [
        "axisLayout.combineDuplicate"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Continuous": {
      "idx": 737,
      "alias": [
        "axisLayout.continuous"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Discrete": {
      "idx": 735,
      "alias": [
        "axisLayout.discrete"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Layout": {
      "idx": 734,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Names": {
      "idx": 731,
      "alias": [
        "segmenter.names"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Numeric": {
      "idx": 732,
      "alias": [
        "segmenter.numeric"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Segmenter": {
      "idx": 730,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Time": {
      "idx": 733,
      "alias": [
        "segmenter.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis": {
      "idx": 729,
      "alias": [
        "sprite.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis3D": {
      "idx": 756,
      "alias": [
        "sprite.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.CircularGrid": {
      "idx": 745,
      "alias": [
        "grid.circular"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid": {
      "idx": 742,
      "alias": [
        "grid.horizontal"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid3D": {
      "idx": 757,
      "alias": [
        "grid.horizontal3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.RadialGrid": {
      "idx": 746,
      "alias": [
        "grid.radial"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid": {
      "idx": 743,
      "alias": [
        "grid.vertical"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid3D": {
      "idx": 758,
      "alias": [
        "grid.vertical3d"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Abstract": {
      "idx": 720,
      "alias": [
        "widget.interaction"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.CrossZoom": {
      "idx": 759,
      "alias": [
        "interaction.crosszoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Crosshair": {
      "idx": 760,
      "alias": [
        "interaction.crosshair"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemEdit": {
      "idx": 762,
      "alias": [
        "interaction.itemedit"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemHighlight": {
      "idx": 761,
      "alias": [
        "interaction.itemhighlight"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemInfo": {
      "idx": 721,
      "alias": [
        "interaction.iteminfo"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.PanZoom": {
      "idx": 763,
      "alias": [
        "interaction.panzoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Rotate": {
      "idx": 764,
      "alias": [
        "interaction.rotate"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.RotatePie3D": {
      "idx": 765,
      "alias": [
        "interaction.rotatePie3d"
      ],
      "alternates": []
    },
    "Ext.chart.label.Callout": {
      "idx": 725,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.label.Label": {
      "idx": 726,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.overrides.AbstractChart": {
      "idx": 741,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.plugin.ItemEvents": {
      "idx": 766,
      "alias": [
        "plugin.chartitemevents"
      ],
      "alternates": []
    },
    "Ext.chart.series.Area": {
      "idx": 773,
      "alias": [
        "series.area"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar": {
      "idx": 775,
      "alias": [
        "series.bar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar3D": {
      "idx": 778,
      "alias": [
        "series.bar3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.CandleStick": {
      "idx": 783,
      "alias": [
        "series.candlestick"
      ],
      "alternates": []
    },
    "Ext.chart.series.Cartesian": {
      "idx": 767,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Gauge": {
      "idx": 785,
      "alias": [
        "series.gauge"
      ],
      "alternates": []
    },
    "Ext.chart.series.Line": {
      "idx": 787,
      "alias": [
        "series.line"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie": {
      "idx": 789,
      "alias": [
        "series.pie"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie3D": {
      "idx": 792,
      "alias": [
        "series.pie3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.Polar": {
      "idx": 784,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Radar": {
      "idx": 795,
      "alias": [
        "series.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Scatter": {
      "idx": 797,
      "alias": [
        "series.scatter"
      ],
      "alternates": []
    },
    "Ext.chart.series.Series": {
      "idx": 727,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.StackedCartesian": {
      "idx": 768,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Aggregative": {
      "idx": 781,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Area": {
      "idx": 772,
      "alias": [
        "sprite.areaSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar": {
      "idx": 774,
      "alias": [
        "sprite.barSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar3D": {
      "idx": 776,
      "alias": [
        "sprite.bar3dSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Box": {
      "idx": 777,
      "alias": [
        "sprite.box"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.CandleStick": {
      "idx": 782,
      "alias": [
        "sprite.candlestickSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Cartesian": {
      "idx": 770,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Line": {
      "idx": 786,
      "alias": [
        "sprite.lineSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Pie3DPart": {
      "idx": 790,
      "alias": [
        "sprite.pie3dPart"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.PieSlice": {
      "idx": 788,
      "alias": [
        "sprite.pieslice"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Polar": {
      "idx": 793,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Radar": {
      "idx": 794,
      "alias": [
        "sprite.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Scatter": {
      "idx": 796,
      "alias": [
        "sprite.scatterSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Series": {
      "idx": 769,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.StackedCartesian": {
      "idx": 771,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Base": {
      "idx": 722,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Blue": {
      "idx": 798,
      "alias": [
        "chart.theme.Blue",
        "chart.theme.blue"
      ],
      "alternates": []
    },
    "Ext.chart.theme.BlueGradients": {
      "idx": 799,
      "alias": [
        "chart.theme.Blue:gradients",
        "chart.theme.blue-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1": {
      "idx": 800,
      "alias": [
        "chart.theme.Category1",
        "chart.theme.category1"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1Gradients": {
      "idx": 801,
      "alias": [
        "chart.theme.Category1:gradients",
        "chart.theme.category1-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2": {
      "idx": 802,
      "alias": [
        "chart.theme.Category2",
        "chart.theme.category2"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2Gradients": {
      "idx": 803,
      "alias": [
        "chart.theme.Category2:gradients",
        "chart.theme.category2-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3": {
      "idx": 804,
      "alias": [
        "chart.theme.Category3",
        "chart.theme.category3"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3Gradients": {
      "idx": 805,
      "alias": [
        "chart.theme.Category3:gradients",
        "chart.theme.category3-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4": {
      "idx": 806,
      "alias": [
        "chart.theme.Category4",
        "chart.theme.category4"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4Gradients": {
      "idx": 807,
      "alias": [
        "chart.theme.Category4:gradients",
        "chart.theme.category4-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5": {
      "idx": 808,
      "alias": [
        "chart.theme.Category5",
        "chart.theme.category5"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5Gradients": {
      "idx": 809,
      "alias": [
        "chart.theme.Category5:gradients",
        "chart.theme.category5-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6": {
      "idx": 810,
      "alias": [
        "chart.theme.Category6",
        "chart.theme.category6"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6Gradients": {
      "idx": 811,
      "alias": [
        "chart.theme.Category6:gradients",
        "chart.theme.category6-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Default": {
      "idx": 723,
      "alias": [
        "chart.theme.Base",
        "chart.theme.default"
      ],
      "alternates": []
    },
    "Ext.chart.theme.DefaultGradients": {
      "idx": 812,
      "alias": [
        "chart.theme.Base:gradients",
        "chart.theme.default-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Green": {
      "idx": 813,
      "alias": [
        "chart.theme.Green",
        "chart.theme.green"
      ],
      "alternates": []
    },
    "Ext.chart.theme.GreenGradients": {
      "idx": 814,
      "alias": [
        "chart.theme.Green:gradients",
        "chart.theme.green-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Midnight": {
      "idx": 815,
      "alias": [
        "chart.theme.Midnight",
        "chart.theme.midnight"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Muted": {
      "idx": 816,
      "alias": [
        "chart.theme.Muted",
        "chart.theme.muted"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Purple": {
      "idx": 817,
      "alias": [
        "chart.theme.Purple",
        "chart.theme.purple"
      ],
      "alternates": []
    },
    "Ext.chart.theme.PurpleGradients": {
      "idx": 818,
      "alias": [
        "chart.theme.Purple:gradients",
        "chart.theme.purple-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Red": {
      "idx": 819,
      "alias": [
        "chart.theme.Red",
        "chart.theme.red"
      ],
      "alternates": []
    },
    "Ext.chart.theme.RedGradients": {
      "idx": 820,
      "alias": [
        "chart.theme.Red:gradients",
        "chart.theme.red-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Sky": {
      "idx": 821,
      "alias": [
        "chart.theme.Sky",
        "chart.theme.sky"
      ],
      "alternates": []
    },
    "Ext.chart.theme.SkyGradients": {
      "idx": 822,
      "alias": [
        "chart.theme.Sky:gradients",
        "chart.theme.sky-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Yellow": {
      "idx": 823,
      "alias": [
        "chart.theme.Yellow",
        "chart.theme.yellow"
      ],
      "alternates": []
    },
    "Ext.chart.theme.YellowGradients": {
      "idx": 824,
      "alias": [
        "chart.theme.Yellow:gradients",
        "chart.theme.yellow-gradients"
      ],
      "alternates": []
    },
    "Ext.container.ButtonGroup": {
      "idx": 478,
      "alias": [
        "widget.buttongroup"
      ],
      "alternates": [
        "Ext.ButtonGroup"
      ]
    },
    "Ext.container.Container": {
      "idx": 341,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.Container",
        "Ext.AbstractContainer"
      ]
    },
    "Ext.container.DockingContainer": {
      "idx": 388,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Monitor": {
      "idx": 479,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Viewport": {
      "idx": 482,
      "alias": [
        "widget.viewport"
      ],
      "alternates": [
        "Ext.Viewport"
      ]
    },
    "Ext.dashboard.Column": {
      "idx": 485,
      "alias": [
        "widget.dashboard-column"
      ],
      "alternates": []
    },
    "Ext.dashboard.Dashboard": {
      "idx": 495,
      "alias": [
        "widget.dashboard"
      ],
      "alternates": []
    },
    "Ext.dashboard.DropZone": {
      "idx": 493,
      "alias": [],
      "alternates": []
    },
    "Ext.dashboard.Panel": {
      "idx": 484,
      "alias": [
        "widget.dashboard-panel"
      ],
      "alternates": []
    },
    "Ext.dashboard.Part": {
      "idx": 494,
      "alias": [
        "part.part"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 145,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 182,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 224,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 217,
      "alias": [
        "store.chained"
      ],
      "alternates": []
    },
    "Ext.data.Connection": {
      "idx": 8,
      "alias": [],
      "alternates": []
    },
    "Ext.data.DirectStore": {
      "idx": 226,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 146,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 147,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 227,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 229,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 230,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 171,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 163,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 231,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 232,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 235,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 223,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 170,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 164,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 153,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 180,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 183,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 234,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 237,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 238,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 239,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 245,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 156,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 157,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 155,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 158,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 159,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 160,
      "alias": [
        "data.field.string"
      ],
      "alternates": []
    },
    "Ext.data.flash.BinaryXhr": {
      "idx": 7,
      "alias": [],
      "alternates": []
    },
    "Ext.data.identifier.Generator": {
      "idx": 161,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 246,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 162,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 247,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 149,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 150,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 148,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 151,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 152,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 173,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 168,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 225,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 228,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 249,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 169,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 167,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 250,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 172,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 251,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 248,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 181,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 174,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 165,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 243,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 141,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 143,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 144,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 252,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 254,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 256,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 253,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 257,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 258,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 255,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 259,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 260,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 154,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 175,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 166,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 244,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dd.DD": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDProxy": {
      "idx": 380,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDTarget": {
      "idx": 425,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDrop": {
      "idx": 377,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDropManager": {
      "idx": 368,
      "alias": [],
      "alternates": [
        "Ext.dd.DragDropMgr",
        "Ext.dd.DDM"
      ]
    },
    "Ext.dd.DragSource": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragTracker": {
      "idx": 420,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragZone": {
      "idx": 423,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropTarget": {
      "idx": 427,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropZone": {
      "idx": 429,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.Registry": {
      "idx": 428,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.ScrollManager": {
      "idx": 426,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.StatusProxy": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 261,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 263,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 264,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 265,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 221,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 262,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 266,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 268,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 267,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.ButtonElement": {
      "idx": 450,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.CompositeElement": {
      "idx": 92,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 73,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 47,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 72,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 269,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 240,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Layer": {
      "idx": 496,
      "alias": [],
      "alternates": [
        "Ext.Layer"
      ]
    },
    "Ext.dom.Query": {
      "idx": 242,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 20,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 19,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Animator": {
      "idx": 683,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Color": {
      "idx": 672,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Container": {
      "idx": 718,
      "alias": [
        "widget.draw"
      ],
      "alternates": [
        "Ext.draw.Component"
      ]
    },
    "Ext.draw.ContainerBase": {
      "idx": 670,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Draw": {
      "idx": 674,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.LimitedCache": {
      "idx": 779,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Matrix": {
      "idx": 679,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Path": {
      "idx": 687,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.PathUtil": {
      "idx": 791,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Point": {
      "idx": 825,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.SegmentTree": {
      "idx": 780,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Surface": {
      "idx": 712,
      "alias": [
        "widget.surface"
      ],
      "alternates": []
    },
    "Ext.draw.SurfaceBase": {
      "idx": 671,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TextMeasurer": {
      "idx": 706,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TimingFunctions": {
      "idx": 682,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Canvas": {
      "idx": 717,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Svg": {
      "idx": 715,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext": {
      "idx": 714,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext.Gradient": {
      "idx": 714,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Gradient": {
      "idx": 675,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.GradientDefinition": {
      "idx": 676,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Linear": {
      "idx": 710,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Radial": {
      "idx": 711,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Animation": {
      "idx": 684,
      "alias": [
        "modifier.animation"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Highlight": {
      "idx": 685,
      "alias": [
        "modifier.highlight"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Modifier": {
      "idx": 680,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Target": {
      "idx": 681,
      "alias": [
        "modifier.target"
      ],
      "alternates": []
    },
    "Ext.draw.overrides.Path": {
      "idx": 688,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.Surface": {
      "idx": 713,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.sprite.Path": {
      "idx": 690,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.plugin.SpriteEvents": {
      "idx": 826,
      "alias": [
        "plugin.spriteevents"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AnimationParser": {
      "idx": 673,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Arc": {
      "idx": 692,
      "alias": [
        "sprite.arc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Arrow": {
      "idx": 693,
      "alias": [
        "sprite.arrow"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeDefinition": {
      "idx": 678,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeParser": {
      "idx": 677,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Circle": {
      "idx": 691,
      "alias": [
        "sprite.circle"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Composite": {
      "idx": 694,
      "alias": [
        "sprite.composite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Cross": {
      "idx": 695,
      "alias": [
        "sprite.cross"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Diamond": {
      "idx": 696,
      "alias": [
        "sprite.diamond"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Ellipse": {
      "idx": 697,
      "alias": [
        "sprite.ellipse"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.EllipticalArc": {
      "idx": 698,
      "alias": [
        "sprite.ellipticalArc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Image": {
      "idx": 700,
      "alias": [
        "sprite.image"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Instancing": {
      "idx": 701,
      "alias": [
        "sprite.instancing"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Line": {
      "idx": 702,
      "alias": [
        "sprite.line"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Path": {
      "idx": 689,
      "alias": [
        "Ext.draw.Sprite",
        "sprite.path"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Plus": {
      "idx": 703,
      "alias": [
        "sprite.plus"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Rect": {
      "idx": 699,
      "alias": [
        "sprite.rect"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sector": {
      "idx": 704,
      "alias": [
        "sprite.sector"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sprite": {
      "idx": 686,
      "alias": [
        "sprite.sprite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Square": {
      "idx": 705,
      "alias": [
        "sprite.square"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Text": {
      "idx": 707,
      "alias": [
        "sprite.text"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Tick": {
      "idx": 708,
      "alias": [
        "sprite.tick"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Triangle": {
      "idx": 709,
      "alias": [
        "sprite.triangle"
      ],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 27,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 272,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 273,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 276,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 270,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 271,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 274,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.MouseEnterLeave": {
      "idx": 498,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.flash.Component": {
      "idx": 499,
      "alias": [
        "widget.flash"
      ],
      "alternates": [
        "Ext.FlashComponent"
      ]
    },
    "Ext.form.Basic": {
      "idx": 505,
      "alias": [],
      "alternates": [
        "Ext.form.BasicForm"
      ]
    },
    "Ext.form.CheckboxGroup": {
      "idx": 510,
      "alias": [
        "widget.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.form.CheckboxManager": {
      "idx": 411,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldAncestor": {
      "idx": 506,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldContainer": {
      "idx": 508,
      "alias": [
        "widget.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.form.FieldSet": {
      "idx": 511,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Label": {
      "idx": 512,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.form.Labelable": {
      "idx": 391,
      "alias": [],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 513,
      "alias": [
        "widget.form"
      ],
      "alternates": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
      ]
    },
    "Ext.form.RadioGroup": {
      "idx": 516,
      "alias": [
        "widget.radiogroup"
      ],
      "alternates": []
    },
    "Ext.form.RadioManager": {
      "idx": 514,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.Action": {
      "idx": 500,
      "alias": [],
      "alternates": [
        "Ext.form.Action"
      ]
    },
    "Ext.form.action.DirectAction": {
      "idx": 517,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.DirectLoad": {
      "idx": 518,
      "alias": [
        "formaction.directload"
      ],
      "alternates": [
        "Ext.form.Action.DirectLoad"
      ]
    },
    "Ext.form.action.DirectSubmit": {
      "idx": 519,
      "alias": [
        "formaction.directsubmit"
      ],
      "alternates": [
        "Ext.form.Action.DirectSubmit"
      ]
    },
    "Ext.form.action.Load": {
      "idx": 501,
      "alias": [
        "formaction.load"
      ],
      "alternates": [
        "Ext.form.Action.Load"
      ]
    },
    "Ext.form.action.StandardSubmit": {
      "idx": 520,
      "alias": [
        "formaction.standardsubmit"
      ],
      "alternates": []
    },
    "Ext.form.action.Submit": {
      "idx": 502,
      "alias": [
        "formaction.submit"
      ],
      "alternates": [
        "Ext.form.Action.Submit"
      ]
    },
    "Ext.form.field.Base": {
      "idx": 394,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field",
        "Ext.form.BaseField"
      ]
    },
    "Ext.form.field.Checkbox": {
      "idx": 412,
      "alias": [
        "widget.checkbox",
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.form.field.ComboBox": {
      "idx": 531,
      "alias": [
        "widget.combo",
        "widget.combobox"
      ],
      "alternates": [
        "Ext.form.ComboBox"
      ]
    },
    "Ext.form.field.Date": {
      "idx": 534,
      "alias": [
        "widget.datefield"
      ],
      "alternates": [
        "Ext.form.DateField",
        "Ext.form.Date"
      ]
    },
    "Ext.form.field.Display": {
      "idx": 395,
      "alias": [
        "widget.displayfield"
      ],
      "alternates": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
      ]
    },
    "Ext.form.field.Field": {
      "idx": 393,
      "alias": [],
      "alternates": []
    },
    "Ext.form.field.File": {
      "idx": 538,
      "alias": [
        "widget.filefield",
        "widget.fileuploadfield"
      ],
      "alternates": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
      ]
    },
    "Ext.form.field.FileButton": {
      "idx": 535,
      "alias": [
        "widget.filebutton"
      ],
      "alternates": []
    },
    "Ext.form.field.Hidden": {
      "idx": 540,
      "alias": [
        "widget.hidden",
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.form.field.HtmlEditor": {
      "idx": 546,
      "alias": [
        "widget.htmleditor"
      ],
      "alternates": [
        "Ext.form.HtmlEditor"
      ]
    },
    "Ext.form.field.Number": {
      "idx": 528,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.NumberField",
        "Ext.form.Number"
      ]
    },
    "Ext.form.field.Picker": {
      "idx": 521,
      "alias": [
        "widget.pickerfield"
      ],
      "alternates": [
        "Ext.form.Picker"
      ]
    },
    "Ext.form.field.Radio": {
      "idx": 515,
      "alias": [
        "widget.radio",
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.form.field.Spinner": {
      "idx": 527,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.form.field.Tag": {
      "idx": 547,
      "alias": [
        "widget.tagfield"
      ],
      "alternates": []
    },
    "Ext.form.field.Text": {
      "idx": 444,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.TextField",
        "Ext.form.Text"
      ]
    },
    "Ext.form.field.TextArea": {
      "idx": 503,
      "alias": [
        "widget.textarea",
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.form.field.Time": {
      "idx": 549,
      "alias": [
        "widget.timefield"
      ],
      "alternates": [
        "Ext.form.TimeField",
        "Ext.form.Time"
      ]
    },
    "Ext.form.field.Trigger": {
      "idx": 550,
      "alias": [
        "widget.trigger",
        "widget.triggerfield"
      ],
      "alternates": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
      ]
    },
    "Ext.form.field.VTypes": {
      "idx": 442,
      "alias": [],
      "alternates": [
        "Ext.form.VTypes"
      ]
    },
    "Ext.form.trigger.Component": {
      "idx": 537,
      "alias": [
        "trigger.component"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Spinner": {
      "idx": 526,
      "alias": [
        "trigger.spinner"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Trigger": {
      "idx": 443,
      "alias": [
        "trigger.trigger"
      ],
      "alternates": []
    },
    "Ext.fx.Anim": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animation": {
      "idx": 291,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animator": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.CubicBezier": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.DrawPath": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Easing": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Manager": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.PropertyHandler": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Queue": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 294,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 282,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 283,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 295,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 286,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 287,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 288,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 289,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 290,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 284,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 285,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 296,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 297,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 96,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 98,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 99,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 298,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 101,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 299,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 100,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 97,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 303,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 310,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 305,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 306,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 307,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 304,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 308,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 311,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 312,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 302,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 292,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 313,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 293,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.fx.target.Component": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElement": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElementCSS": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeSprite": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Element": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.ElementCSS": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Sprite": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Target": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellContext": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellEditor": {
      "idx": 551,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ColumnComponentLayout": {
      "idx": 433,
      "alias": [
        "layout.columncomponent"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnLayout": {
      "idx": 418,
      "alias": [
        "layout.gridcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnManager": {
      "idx": 553,
      "alias": [],
      "alternates": [
        "Ext.grid.ColumnModel"
      ]
    },
    "Ext.grid.NavigationModel": {
      "idx": 438,
      "alias": [
        "view.navigation.grid"
      ],
      "alternates": []
    },
    "Ext.grid.Panel": {
      "idx": 410,
      "alias": [
        "widget.grid",
        "widget.gridpanel"
      ],
      "alternates": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
      ]
    },
    "Ext.grid.RowEditor": {
      "idx": 555,
      "alias": [
        "widget.roweditor"
      ],
      "alternates": []
    },
    "Ext.grid.RowEditorButtons": {
      "idx": 554,
      "alias": [
        "widget.roweditorbuttons"
      ],
      "alternates": []
    },
    "Ext.grid.Scroller": {
      "idx": 556,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ViewDropZone": {
      "idx": 558,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 559,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 560,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": [
        "Ext.grid.BooleanColumn"
      ]
    },
    "Ext.grid.column.Check": {
      "idx": 561,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 434,
      "alias": [
        "widget.gridcolumn"
      ],
      "alternates": [
        "Ext.grid.Column"
      ]
    },
    "Ext.grid.column.Date": {
      "idx": 562,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": [
        "Ext.grid.DateColumn"
      ]
    },
    "Ext.grid.column.Number": {
      "idx": 563,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": [
        "Ext.grid.NumberColumn"
      ]
    },
    "Ext.grid.column.RowNumberer": {
      "idx": 564,
      "alias": [
        "widget.rownumberer"
      ],
      "alternates": [
        "Ext.grid.RowNumberer"
      ]
    },
    "Ext.grid.column.Template": {
      "idx": 565,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": [
        "Ext.grid.TemplateColumn"
      ]
    },
    "Ext.grid.column.Widget": {
      "idx": 566,
      "alias": [
        "widget.widgetcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.feature.AbstractSummary": {
      "idx": 568,
      "alias": [
        "feature.abstractsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Feature": {
      "idx": 567,
      "alias": [
        "feature.feature"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupStore": {
      "idx": 569,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.feature.Grouping": {
      "idx": 570,
      "alias": [
        "feature.grouping"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupingSummary": {
      "idx": 571,
      "alias": [
        "feature.groupingsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.RowBody": {
      "idx": 572,
      "alias": [
        "feature.rowbody"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Summary": {
      "idx": 573,
      "alias": [
        "feature.summary"
      ],
      "alternates": []
    },
    "Ext.grid.filters.Filters": {
      "idx": 586,
      "alias": [
        "plugin.gridfilters"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Base": {
      "idx": 578,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.Boolean": {
      "idx": 580,
      "alias": [
        "grid.filter.boolean"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Date": {
      "idx": 582,
      "alias": [
        "grid.filter.date"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.List": {
      "idx": 583,
      "alias": [
        "grid.filter.list"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Number": {
      "idx": 584,
      "alias": [
        "grid.filter.number",
        "grid.filter.numeric"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.SingleFilter": {
      "idx": 579,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.String": {
      "idx": 585,
      "alias": [
        "grid.filter.string"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.TriFilter": {
      "idx": 581,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.Container": {
      "idx": 432,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.header.DragZone": {
      "idx": 424,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.DropZone": {
      "idx": 430,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.HeaderContainer": {
      "idx": 587,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.Lockable": {
      "idx": 589,
      "alias": [],
      "alternates": [
        "Ext.grid.Lockable"
      ]
    },
    "Ext.grid.locking.RowSynchronizer": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.View": {
      "idx": 588,
      "alias": [],
      "alternates": [
        "Ext.grid.LockingView"
      ]
    },
    "Ext.grid.plugin.BufferedRenderer": {
      "idx": 590,
      "alias": [
        "plugin.bufferedrenderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.CellEditing": {
      "idx": 592,
      "alias": [
        "plugin.cellediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Clipboard": {
      "idx": 594,
      "alias": [
        "plugin.clipboard"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.DragDrop": {
      "idx": 595,
      "alias": [
        "plugin.gridviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editing": {
      "idx": 591,
      "alias": [
        "editing.editing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderReorderer": {
      "idx": 431,
      "alias": [
        "plugin.gridheaderreorderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderResizer": {
      "idx": 421,
      "alias": [
        "plugin.gridheaderresizer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowEditing": {
      "idx": 596,
      "alias": [
        "plugin.rowediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowExpander": {
      "idx": 598,
      "alias": [
        "plugin.rowexpander"
      ],
      "alternates": []
    },
    "Ext.grid.property.Grid": {
      "idx": 599,
      "alias": [
        "widget.propertygrid"
      ],
      "alternates": [
        "Ext.grid.PropertyGrid"
      ]
    },
    "Ext.grid.property.HeaderContainer": {
      "idx": 600,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyColumnModel"
      ]
    },
    "Ext.grid.property.Property": {
      "idx": 601,
      "alias": [],
      "alternates": [
        "Ext.PropGridProperty"
      ]
    },
    "Ext.grid.property.Reader": {
      "idx": 602,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.property.Store": {
      "idx": 603,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyStore"
      ]
    },
    "Ext.grid.selection.Cells": {
      "idx": 605,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Columns": {
      "idx": 606,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Replicator": {
      "idx": 607,
      "alias": [
        "plugin.selectionreplicator"
      ],
      "alternates": []
    },
    "Ext.grid.selection.Rows": {
      "idx": 608,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Selection": {
      "idx": 604,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SelectionExtender": {
      "idx": 609,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SpreadsheetModel": {
      "idx": 610,
      "alias": [
        "selection.spreadsheet"
      ],
      "alternates": []
    },
    "Ext.layout.Context": {
      "idx": 614,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.ContextItem": {
      "idx": 612,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Layout": {
      "idx": 337,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.SizeModel": {
      "idx": 336,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Auto": {
      "idx": 350,
      "alias": [
        "layout.autocomponent"
      ],
      "alternates": []
    },
    "Ext.layout.component.Body": {
      "idx": 456,
      "alias": [
        "layout.body"
      ],
      "alternates": []
    },
    "Ext.layout.component.BoundList": {
      "idx": 523,
      "alias": [
        "layout.boundlist"
      ],
      "alternates": []
    },
    "Ext.layout.component.Component": {
      "idx": 349,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Dock": {
      "idx": 385,
      "alias": [
        "layout.dock"
      ],
      "alternates": [
        "Ext.layout.component.AbstractDock"
      ]
    },
    "Ext.layout.component.FieldSet": {
      "idx": 616,
      "alias": [
        "layout.fieldset"
      ],
      "alternates": []
    },
    "Ext.layout.component.ProgressBar": {
      "idx": 351,
      "alias": [
        "layout.progressbar"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.FieldContainer": {
      "idx": 507,
      "alias": [
        "layout.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.HtmlEditor": {
      "idx": 542,
      "alias": [
        "layout.htmleditor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Absolute": {
      "idx": 617,
      "alias": [
        "layout.absolute"
      ],
      "alternates": [
        "Ext.layout.AbsoluteLayout"
      ]
    },
    "Ext.layout.container.Accordion": {
      "idx": 619,
      "alias": [
        "layout.accordion"
      ],
      "alternates": [
        "Ext.layout.AccordionLayout"
      ]
    },
    "Ext.layout.container.Anchor": {
      "idx": 483,
      "alias": [
        "layout.anchor"
      ],
      "alternates": [
        "Ext.layout.AnchorLayout"
      ]
    },
    "Ext.layout.container.Auto": {
      "idx": 339,
      "alias": [
        "layout.auto",
        "layout.autocontainer"
      ],
      "alternates": []
    },
    "Ext.layout.container.Border": {
      "idx": 447,
      "alias": [
        "layout.border"
      ],
      "alternates": [
        "Ext.layout.BorderLayout"
      ]
    },
    "Ext.layout.container.Box": {
      "idx": 370,
      "alias": [
        "layout.box"
      ],
      "alternates": [
        "Ext.layout.BoxLayout"
      ]
    },
    "Ext.layout.container.Card": {
      "idx": 449,
      "alias": [
        "layout.card"
      ],
      "alternates": [
        "Ext.layout.CardLayout"
      ]
    },
    "Ext.layout.container.Center": {
      "idx": 620,
      "alias": [
        "layout.center",
        "layout.ux.center"
      ],
      "alternates": [
        "Ext.ux.layout.Center"
      ]
    },
    "Ext.layout.container.CheckboxGroup": {
      "idx": 509,
      "alias": [
        "layout.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.layout.container.Column": {
      "idx": 486,
      "alias": [
        "layout.column"
      ],
      "alternates": [
        "Ext.layout.ColumnLayout"
      ]
    },
    "Ext.layout.container.ColumnSplitter": {
      "idx": 491,
      "alias": [
        "widget.columnsplitter"
      ],
      "alternates": []
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      "idx": 490,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.Container": {
      "idx": 338,
      "alias": [
        "layout.container"
      ],
      "alternates": [
        "Ext.layout.ContainerLayout"
      ]
    },
    "Ext.layout.container.Dashboard": {
      "idx": 492,
      "alias": [
        "layout.dashboard"
      ],
      "alternates": []
    },
    "Ext.layout.container.Editor": {
      "idx": 342,
      "alias": [
        "layout.editor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Fit": {
      "idx": 396,
      "alias": [
        "layout.fit"
      ],
      "alternates": [
        "Ext.layout.FitLayout"
      ]
    },
    "Ext.layout.container.Form": {
      "idx": 621,
      "alias": [
        "layout.form"
      ],
      "alternates": [
        "Ext.layout.FormLayout"
      ]
    },
    "Ext.layout.container.HBox": {
      "idx": 372,
      "alias": [
        "layout.hbox"
      ],
      "alternates": [
        "Ext.layout.HBoxLayout"
      ]
    },
    "Ext.layout.container.SegmentedButton": {
      "idx": 622,
      "alias": [
        "layout.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.layout.container.Table": {
      "idx": 477,
      "alias": [
        "layout.table"
      ],
      "alternates": [
        "Ext.layout.TableLayout"
      ]
    },
    "Ext.layout.container.VBox": {
      "idx": 374,
      "alias": [
        "layout.vbox"
      ],
      "alternates": [
        "Ext.layout.VBoxLayout"
      ]
    },
    "Ext.layout.container.border.Region": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.boxOverflow.Menu": {
      "idx": 544,
      "alias": [
        "box.overflow.Menu",
        "box.overflow.menu"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Menu"
      ]
    },
    "Ext.layout.container.boxOverflow.None": {
      "idx": 364,
      "alias": [
        "box.overflow.None",
        "box.overflow.none"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.None"
      ]
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      "idx": 366,
      "alias": [
        "box.overflow.Scroller",
        "box.overflow.scroller"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Scroller"
      ]
    },
    "Ext.menu.CheckItem": {
      "idx": 575,
      "alias": [
        "widget.menucheckitem"
      ],
      "alternates": []
    },
    "Ext.menu.ColorPicker": {
      "idx": 623,
      "alias": [
        "widget.colormenu"
      ],
      "alternates": []
    },
    "Ext.menu.DatePicker": {
      "idx": 624,
      "alias": [
        "widget.datemenu"
      ],
      "alternates": []
    },
    "Ext.menu.Item": {
      "idx": 574,
      "alias": [
        "widget.menuitem"
      ],
      "alternates": [
        "Ext.menu.TextItem"
      ]
    },
    "Ext.menu.Manager": {
      "idx": 452,
      "alias": [],
      "alternates": [
        "Ext.menu.MenuMgr"
      ]
    },
    "Ext.menu.Menu": {
      "idx": 577,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.menu.Separator": {
      "idx": 576,
      "alias": [
        "widget.menuseparator"
      ],
      "alternates": []
    },
    "Ext.mixin.Accessible": {
      "idx": 123,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ComponentDelegation": {
      "idx": 83,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Container": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 93,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 233,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 317,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 318,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 319,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.GlobalEvents": {
      "idx": 77,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.Widget": {
      "idx": 85,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.domain.Component": {
      "idx": 128,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Element": {
      "idx": 74,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Helper": {
      "idx": 241,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.Event": {
      "idx": 28,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Dom": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Gesture": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.plugin.Abstract": {
      "idx": 323,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.util.Positionable": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Bar": {
      "idx": 354,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.DD": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Header": {
      "idx": 363,
      "alias": [
        "widget.header"
      ],
      "alternates": []
    },
    "Ext.panel.Panel": {
      "idx": 389,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.Panel"
      ]
    },
    "Ext.panel.Pinnable": {
      "idx": 625,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Proxy": {
      "idx": 383,
      "alias": [],
      "alternates": [
        "Ext.dd.PanelProxy"
      ]
    },
    "Ext.panel.Table": {
      "idx": 397,
      "alias": [
        "widget.tablepanel"
      ],
      "alternates": []
    },
    "Ext.panel.Title": {
      "idx": 356,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.panel.Tool": {
      "idx": 358,
      "alias": [
        "widget.tool"
      ],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 320,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 321,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Color": {
      "idx": 541,
      "alias": [
        "widget.colorpicker"
      ],
      "alternates": [
        "Ext.ColorPalette"
      ]
    },
    "Ext.picker.Date": {
      "idx": 533,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Month": {
      "idx": 532,
      "alias": [
        "widget.monthpicker"
      ],
      "alternates": [
        "Ext.MonthPicker"
      ]
    },
    "Ext.picker.Time": {
      "idx": 548,
      "alias": [
        "widget.timepicker"
      ],
      "alternates": []
    },
    "Ext.plugin.Abstract": {
      "idx": 322,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.AbstractClipboard": {
      "idx": 593,
      "alias": [],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 324,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.Manager": {
      "idx": 626,
      "alias": [],
      "alternates": [
        "Ext.PluginManager",
        "Ext.PluginMgr"
      ]
    },
    "Ext.plugin.Responsive": {
      "idx": 480,
      "alias": [
        "plugin.responsive"
      ],
      "alternates": []
    },
    "Ext.plugin.Viewport": {
      "idx": 481,
      "alias": [
        "plugin.viewport"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitter": {
      "idx": 446,
      "alias": [
        "widget.bordersplitter"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitterTracker": {
      "idx": 627,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Handle": {
      "idx": 629,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.ResizeTracker": {
      "idx": 630,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Resizer": {
      "idx": 632,
      "alias": [],
      "alternates": [
        "Ext.Resizable"
      ]
    },
    "Ext.resizer.Splitter": {
      "idx": 369,
      "alias": [
        "widget.splitter"
      ],
      "alternates": []
    },
    "Ext.resizer.SplitterTracker": {
      "idx": 488,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.Component": {
      "idx": 127,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Button": {
      "idx": 454,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Segmented": {
      "idx": 476,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dd.DD": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dom.Element": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.event.Event": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.Labelable": {
      "idx": 392,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.File": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.FileButton": {
      "idx": 536,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.CellEditor": {
      "idx": 552,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.ColumnLayout": {
      "idx": 419,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.NavigationModel": {
      "idx": 439,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.column.Column": {
      "idx": 435,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.HeaderResizer": {
      "idx": 422,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.RowEditing": {
      "idx": 597,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.ContextItem": {
      "idx": 613,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.component.Dock": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Absolute": {
      "idx": 618,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Border": {
      "idx": 448,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Box": {
      "idx": 371,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Column": {
      "idx": 487,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.HBox": {
      "idx": 373,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.VBox": {
      "idx": 375,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Menu": {
      "idx": 545,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Scroller": {
      "idx": 367,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Bar": {
      "idx": 355,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Panel": {
      "idx": 390,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Title": {
      "idx": 357,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.BorderSplitterTracker": {
      "idx": 628,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.ResizeTracker": {
      "idx": 631,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.SplitterTracker": {
      "idx": 489,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.DomScroller": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Indicator": {
      "idx": 110,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Scroller": {
      "idx": 95,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.TouchScroller": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.slider.Multi": {
      "idx": 638,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tab.Bar": {
      "idx": 458,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tip.QuickTipManager": {
      "idx": 471,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tree.Column": {
      "idx": 437,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.FocusableContainer": {
      "idx": 362,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.Renderable": {
      "idx": 118,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.NavigationModel": {
      "idx": 401,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.Table": {
      "idx": 409,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.DomScroller": {
      "idx": 113,
      "alias": [
        "scroller.dom"
      ],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 109,
      "alias": [
        "widget.scrollindicator"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 94,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TouchScroller": {
      "idx": 111,
      "alias": [
        "scroller.touch"
      ],
      "alternates": []
    },
    "Ext.selection.CellModel": {
      "idx": 633,
      "alias": [
        "selection.cellmodel"
      ],
      "alternates": []
    },
    "Ext.selection.CheckboxModel": {
      "idx": 634,
      "alias": [
        "selection.checkboxmodel"
      ],
      "alternates": []
    },
    "Ext.selection.DataViewModel": {
      "idx": 399,
      "alias": [
        "selection.dataviewmodel"
      ],
      "alternates": []
    },
    "Ext.selection.Model": {
      "idx": 398,
      "alias": [
        "selection.abstract"
      ],
      "alternates": [
        "Ext.AbstractSelectionModel"
      ]
    },
    "Ext.selection.RowModel": {
      "idx": 416,
      "alias": [
        "selection.rowmodel"
      ],
      "alternates": []
    },
    "Ext.selection.TreeModel": {
      "idx": 417,
      "alias": [
        "selection.treemodel"
      ],
      "alternates": []
    },
    "Ext.slider.Multi": {
      "idx": 637,
      "alias": [
        "widget.multislider"
      ],
      "alternates": [
        "Ext.slider.MultiSlider"
      ]
    },
    "Ext.slider.Single": {
      "idx": 639,
      "alias": [
        "widget.slider",
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
      ]
    },
    "Ext.slider.Thumb": {
      "idx": 635,
      "alias": [],
      "alternates": []
    },
    "Ext.slider.Tip": {
      "idx": 636,
      "alias": [
        "widget.slidertip"
      ],
      "alternates": []
    },
    "Ext.slider.Widget": {
      "idx": 640,
      "alias": [
        "widget.sliderwidget"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bar": {
      "idx": 648,
      "alias": [
        "widget.sparklinebar"
      ],
      "alternates": []
    },
    "Ext.sparkline.BarBase": {
      "idx": 646,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Base": {
      "idx": 645,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Box": {
      "idx": 649,
      "alias": [
        "widget.sparklinebox"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bullet": {
      "idx": 650,
      "alias": [
        "widget.sparklinebullet"
      ],
      "alternates": []
    },
    "Ext.sparkline.CanvasBase": {
      "idx": 642,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.CanvasCanvas": {
      "idx": 643,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Discrete": {
      "idx": 651,
      "alias": [
        "widget.sparklinediscrete"
      ],
      "alternates": []
    },
    "Ext.sparkline.Line": {
      "idx": 652,
      "alias": [
        "widget.sparklineline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Pie": {
      "idx": 653,
      "alias": [
        "widget.sparklinepie"
      ],
      "alternates": []
    },
    "Ext.sparkline.RangeMap": {
      "idx": 647,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Shape": {
      "idx": 641,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.TriState": {
      "idx": 654,
      "alias": [
        "widget.sparklinetristate"
      ],
      "alternates": []
    },
    "Ext.sparkline.VmlCanvas": {
      "idx": 644,
      "alias": [],
      "alternates": []
    },
    "Ext.state.CookieProvider": {
      "idx": 655,
      "alias": [],
      "alternates": []
    },
    "Ext.state.LocalStorageProvider": {
      "idx": 656,
      "alias": [
        "state.localstorage"
      ],
      "alternates": []
    },
    "Ext.state.Manager": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Provider": {
      "idx": 119,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Stateful": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 457,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": []
    },
    "Ext.tab.Panel": {
      "idx": 459,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 455,
      "alias": [
        "widget.tab"
      ],
      "alternates": []
    },
    "Ext.tip.QuickTip": {
      "idx": 469,
      "alias": [
        "widget.quicktip"
      ],
      "alternates": [
        "Ext.QuickTip"
      ]
    },
    "Ext.tip.QuickTipManager": {
      "idx": 470,
      "alias": [],
      "alternates": [
        "Ext.QuickTips"
      ]
    },
    "Ext.tip.Tip": {
      "idx": 467,
      "alias": [
        "widget.tip"
      ],
      "alternates": [
        "Ext.Tip"
      ]
    },
    "Ext.tip.ToolTip": {
      "idx": 468,
      "alias": [
        "widget.tooltip"
      ],
      "alternates": [
        "Ext.ToolTip"
      ]
    },
    "Ext.toolbar.Breadcrumb": {
      "idx": 657,
      "alias": [
        "widget.breadcrumb"
      ],
      "alternates": []
    },
    "Ext.toolbar.Fill": {
      "idx": 658,
      "alias": [
        "widget.tbfill"
      ],
      "alternates": [
        "Ext.Toolbar.Fill"
      ]
    },
    "Ext.toolbar.Item": {
      "idx": 524,
      "alias": [
        "widget.tbitem"
      ],
      "alternates": [
        "Ext.Toolbar.Item"
      ]
    },
    "Ext.toolbar.Paging": {
      "idx": 529,
      "alias": [
        "widget.pagingtoolbar"
      ],
      "alternates": [
        "Ext.PagingToolbar"
      ]
    },
    "Ext.toolbar.Separator": {
      "idx": 543,
      "alias": [
        "widget.tbseparator"
      ],
      "alternates": [
        "Ext.Toolbar.Separator"
      ]
    },
    "Ext.toolbar.Spacer": {
      "idx": 659,
      "alias": [
        "widget.tbspacer"
      ],
      "alternates": [
        "Ext.Toolbar.Spacer"
      ]
    },
    "Ext.toolbar.TextItem": {
      "idx": 525,
      "alias": [
        "widget.tbtext"
      ],
      "alternates": [
        "Ext.Toolbar.TextItem"
      ]
    },
    "Ext.toolbar.Toolbar": {
      "idx": 376,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": [
        "Ext.Toolbar"
      ]
    },
    "Ext.tree.Column": {
      "idx": 436,
      "alias": [
        "widget.treecolumn"
      ],
      "alternates": []
    },
    "Ext.tree.NavigationModel": {
      "idx": 440,
      "alias": [
        "view.navigation.tree"
      ],
      "alternates": []
    },
    "Ext.tree.Panel": {
      "idx": 441,
      "alias": [
        "widget.treepanel"
      ],
      "alternates": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
      ]
    },
    "Ext.tree.View": {
      "idx": 415,
      "alias": [
        "widget.treeview"
      ],
      "alternates": []
    },
    "Ext.tree.ViewDragZone": {
      "idx": 661,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.ViewDropZone": {
      "idx": 662,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.plugin.TreeViewDragDrop": {
      "idx": 663,
      "alias": [
        "plugin.treeviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 50,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Animate": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 325,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSS": {
      "idx": 664,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 327,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ClickRepeater": {
      "idx": 365,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 135,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 133,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ComponentDragger": {
      "idx": 464,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Cookies": {
      "idx": 665,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 326,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ElementContainer": {
      "idx": 116,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 48,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 178,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Floating": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FocusTrap": {
      "idx": 465,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Focusable": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FocusableContainer": {
      "idx": 361,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 79,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Group": {
      "idx": 176,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 179,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 134,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 187,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 142,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ItemCollection": {
      "idx": 328,
      "alias": [],
      "alternates": [
        "Ext.ItemCollection"
      ]
    },
    "Ext.util.KeyMap": {
      "idx": 359,
      "alias": [],
      "alternates": [
        "Ext.KeyMap"
      ]
    },
    "Ext.util.KeyNav": {
      "idx": 360,
      "alias": [],
      "alternates": [
        "Ext.KeyNav"
      ]
    },
    "Ext.util.KeyboardInteractive": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LocalStorage": {
      "idx": 329,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Memento": {
      "idx": 387,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 136,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 24,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 26,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 16,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ProtoElement": {
      "idx": 91,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Queue": {
      "idx": 611,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Renderable": {
      "idx": 117,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 177,
      "alias": [],
      "alternates": []
    },
    "Ext.util.StoreHolder": {
      "idx": 347,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 330,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 331,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 332,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 108,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 87,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 86,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 42,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 43,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 44,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 102,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 104,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 103,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 105,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.BoxReorderer": {
      "idx": 827,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.CellDragDrop": {
      "idx": 828,
      "alias": [
        "plugin.celldragdrop"
      ],
      "alternates": []
    },
    "Ext.ux.DataTip": {
      "idx": 829,
      "alias": [
        "plugin.datatip"
      ],
      "alternates": []
    },
    "Ext.ux.DataView.Animated": {
      "idx": 830,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.DragSelector": {
      "idx": 831,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.Draggable": {
      "idx": 832,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.DataView.LabelEditor": {
      "idx": 833,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.Explorer": {
      "idx": 835,
      "alias": [
        "widget.explorer"
      ],
      "alternates": []
    },
    "Ext.ux.FieldReplicator": {
      "idx": 836,
      "alias": [
        "plugin.fieldreplicator"
      ],
      "alternates": []
    },
    "Ext.ux.GMapPanel": {
      "idx": 837,
      "alias": [
        "widget.gmappanel"
      ],
      "alternates": []
    },
    "Ext.ux.GroupTabPanel": {
      "idx": 839,
      "alias": [
        "widget.grouptabpanel"
      ],
      "alternates": []
    },
    "Ext.ux.GroupTabRenderer": {
      "idx": 838,
      "alias": [
        "plugin.grouptabrenderer"
      ],
      "alternates": []
    },
    "Ext.ux.IFrame": {
      "idx": 840,
      "alias": [
        "widget.uxiframe"
      ],
      "alternates": []
    },
    "Ext.ux.LiveSearchGridPanel": {
      "idx": 842,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.PreviewPlugin": {
      "idx": 843,
      "alias": [
        "plugin.preview"
      ],
      "alternates": []
    },
    "Ext.ux.ProgressBarPager": {
      "idx": 844,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.RowExpander": {
      "idx": 845,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.SlidingPager": {
      "idx": 846,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.Spotlight": {
      "idx": 847,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.TabCloseMenu": {
      "idx": 848,
      "alias": [
        "plugin.tabclosemenu"
      ],
      "alternates": []
    },
    "Ext.ux.TabReorderer": {
      "idx": 849,
      "alias": [
        "plugin.tabreorderer"
      ],
      "alternates": []
    },
    "Ext.ux.TabScrollerMenu": {
      "idx": 850,
      "alias": [
        "plugin.tabscrollermenu"
      ],
      "alternates": []
    },
    "Ext.ux.ToolbarDroppable": {
      "idx": 851,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.TreePicker": {
      "idx": 852,
      "alias": [
        "widget.treepicker"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.DataSimlet": {
      "idx": 894,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.JsonSimlet": {
      "idx": 895,
      "alias": [
        "simlet.json"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.SimManager": {
      "idx": 897,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.SimXhr": {
      "idx": 896,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.Simlet": {
      "idx": 893,
      "alias": [
        "simlet.basic"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.XmlSimlet": {
      "idx": 898,
      "alias": [
        "simlet.xml"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Button": {
      "idx": 868,
      "alias": [
        "widget.colorbutton"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ButtonController": {
      "idx": 867,
      "alias": [
        "controller.colorpick-buttoncontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorMap": {
      "idx": 856,
      "alias": [
        "widget.colorpickercolormap"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorMapController": {
      "idx": 855,
      "alias": [
        "controller.colorpickercolormapcontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorPreview": {
      "idx": 859,
      "alias": [
        "widget.colorpickercolorpreview"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.ColorUtils": {
      "idx": 854,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.colorpick.Field": {
      "idx": 869,
      "alias": [
        "widget.colorfield"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Selection": {
      "idx": 853,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.colorpick.Selector": {
      "idx": 866,
      "alias": [
        "widget.colorselector"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SelectorController": {
      "idx": 858,
      "alias": [
        "controller.colorpick-selectorcontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SelectorModel": {
      "idx": 857,
      "alias": [
        "viewmodel.colorpick-selectormodel"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.Slider": {
      "idx": 861,
      "alias": [
        "widget.colorpickerslider"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderAlpha": {
      "idx": 862,
      "alias": [
        "widget.colorpickerslideralpha"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderController": {
      "idx": 860,
      "alias": [
        "controller.colorpick-slidercontroller"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderHue": {
      "idx": 865,
      "alias": [
        "widget.colorpickersliderhue"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderSaturation": {
      "idx": 863,
      "alias": [
        "widget.colorpickerslidersaturation"
      ],
      "alternates": []
    },
    "Ext.ux.colorpick.SliderValue": {
      "idx": 864,
      "alias": [
        "widget.colorpickerslidervalue"
      ],
      "alternates": []
    },
    "Ext.ux.dashboard.GoogleRssPart": {
      "idx": 873,
      "alias": [
        "part.google-rss"
      ],
      "alternates": []
    },
    "Ext.ux.dashboard.GoogleRssView": {
      "idx": 872,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.data.PagingMemoryProxy": {
      "idx": 874,
      "alias": [
        "proxy.pagingmemory"
      ],
      "alternates": [
        "Ext.data.PagingMemoryProxy"
      ]
    },
    "Ext.ux.dd.CellFieldDropZone": {
      "idx": 875,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.dd.PanelFieldDragZone": {
      "idx": 876,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.App": {
      "idx": 878,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.Desktop": {
      "idx": 877,
      "alias": [
        "widget.desktop"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Module": {
      "idx": 879,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.ShortcutModel": {
      "idx": 880,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.StartMenu": {
      "idx": 881,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.desktop.TaskBar": {
      "idx": 882,
      "alias": [
        "widget.taskbar"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.TrayClock": {
      "idx": 882,
      "alias": [
        "widget.trayclock"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Video": {
      "idx": 883,
      "alias": [
        "widget.video"
      ],
      "alternates": []
    },
    "Ext.ux.desktop.Wallpaper": {
      "idx": 884,
      "alias": [
        "widget.wallpaper"
      ],
      "alternates": []
    },
    "Ext.ux.event.Driver": {
      "idx": 899,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Maker": {
      "idx": 900,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Player": {
      "idx": 901,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Recorder": {
      "idx": 902,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.RecorderManager": {
      "idx": 885,
      "alias": [
        "widget.eventrecordermanager"
      ],
      "alternates": []
    },
    "Ext.ux.form.ItemSelector": {
      "idx": 887,
      "alias": [
        "widget.itemselector",
        "widget.itemselectorfield"
      ],
      "alternates": [
        "Ext.ux.ItemSelector"
      ]
    },
    "Ext.ux.form.MultiSelect": {
      "idx": 886,
      "alias": [
        "widget.multiselect",
        "widget.multiselectfield"
      ],
      "alternates": [
        "Ext.ux.Multiselect"
      ]
    },
    "Ext.ux.form.SearchField": {
      "idx": 888,
      "alias": [
        "widget.searchfield"
      ],
      "alternates": []
    },
    "Ext.ux.google.Api": {
      "idx": 870,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Feeds": {
      "idx": 871,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.grid.SubTable": {
      "idx": 889,
      "alias": [
        "plugin.subtable"
      ],
      "alternates": []
    },
    "Ext.ux.grid.TransformGrid": {
      "idx": 890,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.rating.Picker": {
      "idx": 891,
      "alias": [
        "widget.rating"
      ],
      "alternates": []
    },
    "Ext.ux.statusbar.StatusBar": {
      "idx": 841,
      "alias": [
        "widget.statusbar"
      ],
      "alternates": [
        "Ext.ux.StatusBar"
      ]
    },
    "Ext.ux.statusbar.ValidationStatus": {
      "idx": 892,
      "alias": [],
      "alternates": []
    },
    "Ext.view.AbstractView": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.view.BoundList": {
      "idx": 530,
      "alias": [
        "widget.boundlist"
      ],
      "alternates": [
        "Ext.BoundList"
      ]
    },
    "Ext.view.BoundListKeyNav": {
      "idx": 522,
      "alias": [
        "view.navigation.boundlist"
      ],
      "alternates": []
    },
    "Ext.view.DragZone": {
      "idx": 660,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DropZone": {
      "idx": 557,
      "alias": [],
      "alternates": []
    },
    "Ext.view.MultiSelector": {
      "idx": 667,
      "alias": [
        "widget.multiselector"
      ],
      "alternates": []
    },
    "Ext.view.MultiSelectorSearch": {
      "idx": 666,
      "alias": [
        "widget.multiselector-search"
      ],
      "alternates": []
    },
    "Ext.view.NavigationModel": {
      "idx": 400,
      "alias": [
        "view.navigation.default"
      ],
      "alternates": []
    },
    "Ext.view.NodeCache": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.view.Table": {
      "idx": 408,
      "alias": [
        "widget.gridview",
        "widget.tableview"
      ],
      "alternates": [
        "Ext.grid.View"
      ]
    },
    "Ext.view.TableLayout": {
      "idx": 405,
      "alias": [
        "layout.tableview"
      ],
      "alternates": []
    },
    "Ext.view.View": {
      "idx": 403,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.window.MessageBox": {
      "idx": 504,
      "alias": [
        "widget.messagebox"
      ],
      "alternates": []
    },
    "Ext.window.Toast": {
      "idx": 668,
      "alias": [
        "widget.toast"
      ],
      "alternates": []
    },
    "Ext.window.Window": {
      "idx": 466,
      "alias": [
        "widget.window"
      ],
      "alternates": [
        "Ext.Window"
      ]
    }
  },
  "packages": {
    "classic": {
      "build": {
        "dir": "${package.output}"
      },
      "creator": "Sencha",
      "output": "${framework.dir}/build",
      "requires": [
        "ext",
        "core",
        "classic"
      ],
      "type": "toolkit",
      "version": "6.0.0"
    },
    "core": {
      "alternateName": [
        "sencha-core"
      ],
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [
        "ext"
      ],
      "slicer": {
        "js": []
      },
      "type": "code",
      "version": "5.0.0"
    },
    "ext": {
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [],
      "type": "framework",
      "version": "6.0.0"
    }
  },
  "bootRelative": true
};
