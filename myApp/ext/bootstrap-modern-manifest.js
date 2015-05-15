var Ext = Ext || { }; Ext.manifest = {
  "paths": {
    "Ext": "modern/modern/src",
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
    "Ext.String.format": "packages/core/src/Template.js",
    "Ext.TaskQueue": "packages/core/src/TaskQueue.js",
    "Ext.Template": "packages/core/src/Template.js",
    "Ext.Widget": "packages/core/src/Widget.js",
    "Ext.XTemplate": "packages/core/src/XTemplate.js",
    "Ext.app": "packages/core/src/app",
    "Ext.chart": "packages/charts/src/chart",
    "Ext.chart.LegendBase": "packages/charts/modern/src/chart/LegendBase.js",
    "Ext.chart.interactions.ItemInfo": "packages/charts/modern/src/chart/interactions/ItemInfo.js",
    "Ext.chart.overrides": "packages/charts/modern/overrides",
    "Ext.data": "packages/core/src/data",
    "Ext.device.Purchases.Product": "modern/modern/src/device/purchases/Sencha.js",
    "Ext.device.filesystem.DirectoryEntry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.Entry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.FileEntry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.FileSystem": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.purchases.Purchase": "modern/modern/src/device/purchases/Sencha.js",
    "Ext.device.sqlite.Database": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLResultSet": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLResultSetRowList": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLTransaction": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.direct": "packages/core/src/direct",
    "Ext.dom": "packages/core/src/dom",
    "Ext.draw": "packages/charts/src/draw",
    "Ext.draw.ContainerBase": "packages/charts/modern/src/draw/ContainerBase.js",
    "Ext.draw.SurfaceBase": "packages/charts/modern/src/draw/SurfaceBase.js",
    "Ext.draw.engine.SvgContext.Gradient": "packages/charts/src/draw/engine/SvgContext.js",
    "Ext.event": "packages/core/src/event",
    "Ext.fx": "packages/core/src/fx",
    "Ext.grid.column.Action": "modern/modern/src/grid/column/unsupported/Action.js",
    "Ext.grid.column.CheckColumn": "modern/modern/src/grid/column/unsupported/CheckColumn.js",
    "Ext.mixin": "packages/core/src/mixin",
    "Ext.mixin.Progressable": "modern/modern/src/mixin/Progressable.js",
    "Ext.overrides": "modern/modern/overrides",
    "Ext.perf": "packages/core/src/perf",
    "Ext.plugin.Abstract": "packages/core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "packages/core/src/plugin/LazyItems.js",
    "Ext.scroll": "packages/core/src/scroll",
    "Ext.util": "packages/core/src/util",
    "Ext.util.Audio": "modern/modern/src/util/Audio.js",
    "Ext.util.BufferedCollection": "modern/modern/src/util/BufferedCollection.js",
    "Ext.util.DelayedTask": "modern/modern/src/util/DelayedTask.js",
    "Ext.util.Draggable": "modern/modern/src/util/Draggable.js",
    "Ext.util.Droppable": "modern/modern/src/util/Droppable.js",
    "Ext.util.Format.format": "packages/core/src/Template.js",
    "Ext.util.Geolocation": "modern/modern/src/util/Geolocation.js",
    "Ext.util.InputBlocker": "modern/modern/src/util/InputBlocker.js",
    "Ext.util.LineSegment": "modern/modern/src/util/LineSegment.js",
    "Ext.util.PositionMap": "modern/modern/src/util/PositionMap.js",
    "Ext.util.TapRepeater": "modern/modern/src/util/TapRepeater.js",
    "Ext.util.TranslatableGroup": "modern/modern/src/util/TranslatableGroup.js",
    "Ext.util.TranslatableList": "modern/modern/src/util/TranslatableList.js",
    "Ext.util.Wrapper": "modern/modern/src/util/Wrapper.js",
    "Ext.ux.ajax.DataSimlet": "packages/ux/src/ajax/DataSimlet.js",
    "Ext.ux.ajax.JsonSimlet": "packages/ux/src/ajax/JsonSimlet.js",
    "Ext.ux.ajax.SimManager": "packages/ux/src/ajax/SimManager.js",
    "Ext.ux.ajax.SimXhr": "packages/ux/src/ajax/SimXhr.js",
    "Ext.ux.ajax.Simlet": "packages/ux/src/ajax/Simlet.js",
    "Ext.ux.ajax.XmlSimlet": "packages/ux/src/ajax/XmlSimlet.js",
    "Ext.ux.device.Analytics": "packages/ux/modern/src/device/Analytics.js",
    "Ext.ux.device.Twitter": "packages/ux/modern/src/device/Twitter.js",
    "Ext.ux.device.analytics.Abstract": "packages/ux/modern/src/device/analytics/Abstract.js",
    "Ext.ux.device.analytics.Cordova": "packages/ux/modern/src/device/analytics/Cordova.js",
    "Ext.ux.device.twitter.Abstract": "packages/ux/modern/src/device/twitter/Abstract.js",
    "Ext.ux.device.twitter.Cordova": "packages/ux/modern/src/device/twitter/Cordova.js",
    "Ext.ux.event.Driver": "packages/ux/src/event/Driver.js",
    "Ext.ux.event.Maker": "packages/ux/src/event/Maker.js",
    "Ext.ux.event.Player": "packages/ux/src/event/Player.js",
    "Ext.ux.event.Recorder": "packages/ux/src/event/Recorder.js",
    "Ext.ux.google.Api": "packages/ux/src/google/Api.js",
    "Ext.ux.google.Feeds": "packages/ux/src/google/Feeds.js"
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
        43
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
        63
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
        43
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
        42,
        43
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
        26,
        42
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
        46
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
      "requires": [],
      "uses": [
        24,
        42
      ],
      "idx": 16
    },
    {
      "path": "packages/core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 17
    },
    {
      "path": "packages/core/src/dom/Underlay.js",
      "requires": [
        17
      ],
      "uses": [],
      "idx": 18
    },
    {
      "path": "packages/core/src/dom/Shadow.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "packages/core/src/dom/Shim.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 20
    },
    {
      "path": "packages/core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        27
      ],
      "idx": 21
    },
    {
      "path": "packages/core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 22
    },
    {
      "path": "packages/core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 23
    },
    {
      "path": "packages/core/src/util/Region.js",
      "requires": [
        23
      ],
      "uses": [],
      "idx": 24
    },
    {
      "path": "packages/core/src/util/Point.js",
      "requires": [
        24
      ],
      "uses": [],
      "idx": 25
    },
    {
      "path": "packages/core/src/event/Event.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 26
    },
    {
      "path": "packages/core/src/event/publisher/Dom.js",
      "requires": [
        22,
        26
      ],
      "uses": [
        43
      ],
      "idx": 27
    },
    {
      "path": "packages/core/src/event/publisher/Gesture.js",
      "requires": [
        10,
        25,
        27
      ],
      "uses": [
        26,
        42,
        275,
        276,
        277,
        278,
        279,
        280,
        281,
        282,
        283,
        284,
        285,
        286
      ],
      "idx": 28
    },
    {
      "path": "packages/core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        42
      ],
      "idx": 29
    },
    {
      "path": "packages/core/src/TaskQueue.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 30
    },
    {
      "path": "packages/core/src/util/sizemonitor/Abstract.js",
      "requires": [
        29,
        30
      ],
      "uses": [],
      "idx": 31
    },
    {
      "path": "packages/core/src/util/sizemonitor/Default.js",
      "requires": [
        31
      ],
      "uses": [],
      "idx": 32
    },
    {
      "path": "packages/core/src/util/sizemonitor/Scroll.js",
      "requires": [
        31
      ],
      "uses": [
        30
      ],
      "idx": 33
    },
    {
      "path": "packages/core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        31
      ],
      "uses": [
        30
      ],
      "idx": 34
    },
    {
      "path": "packages/core/src/util/SizeMonitor.js",
      "requires": [
        32,
        33,
        34
      ],
      "uses": [],
      "idx": 35
    },
    {
      "path": "packages/core/src/event/publisher/ElementSize.js",
      "requires": [
        22,
        35
      ],
      "uses": [
        30
      ],
      "idx": 36
    },
    {
      "path": "packages/core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 37
    },
    {
      "path": "packages/core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 38
    },
    {
      "path": "packages/core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 39
    },
    {
      "path": "packages/core/src/util/PaintMonitor.js",
      "requires": [
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "packages/core/src/event/publisher/ElementPaint.js",
      "requires": [
        22,
        30,
        40
      ],
      "uses": [],
      "idx": 41
    },
    {
      "path": "packages/core/src/dom/Element.js",
      "requires": [
        4,
        16,
        19,
        20,
        21,
        27,
        28,
        36,
        41
      ],
      "uses": [
        22,
        24,
        43,
        46,
        167,
        243,
        272,
        273,
        274,
        287,
        289
      ],
      "idx": 42
    },
    {
      "path": "packages/core/src/GlobalEvents.js",
      "requires": [
        4,
        42
      ],
      "uses": [],
      "idx": 43
    },
    {
      "path": "packages/core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 44
    },
    {
      "path": "packages/core/src/util/Format.js",
      "requires": [],
      "uses": [
        46,
        243
      ],
      "idx": 45
    },
    {
      "path": "packages/core/src/Template.js",
      "requires": [
        45
      ],
      "uses": [
        243
      ],
      "idx": 46
    },
    {
      "path": "packages/core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 47
    },
    {
      "path": "packages/core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        68
      ],
      "idx": 48
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
      "idx": 49
    },
    {
      "path": "packages/core/src/Widget.js",
      "requires": [
        15,
        42,
        47,
        48,
        49,
        52
      ],
      "uses": [
        11,
        14
      ],
      "idx": 50
    },
    {
      "path": "packages/core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 51
    },
    {
      "path": "modern/modern/overrides/Widget.js",
      "requires": [
        51
      ],
      "uses": [],
      "idx": 52
    },
    {
      "path": "packages/core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 53
    },
    {
      "path": "packages/core/src/util/XTemplateCompiler.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 54
    },
    {
      "path": "packages/core/src/XTemplate.js",
      "requires": [
        46,
        54
      ],
      "uses": [],
      "idx": 55
    },
    {
      "path": "packages/core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 56
    },
    {
      "path": "packages/core/src/app/domain/Component.js",
      "requires": [
        50,
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "packages/core/src/app/EventBus.js",
      "requires": [
        57
      ],
      "uses": [
        56
      ],
      "idx": 58
    },
    {
      "path": "packages/core/src/app/domain/Global.js",
      "requires": [
        43,
        56
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "packages/core/src/app/BaseController.js",
      "requires": [
        4,
        58,
        59
      ],
      "uses": [
        123,
        124,
        223
      ],
      "idx": 60
    },
    {
      "path": "packages/core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 61
    },
    {
      "path": "packages/core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 62
    },
    {
      "path": "packages/core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 63
    },
    {
      "path": "packages/core/src/util/AbstractMixedCollection.js",
      "requires": [
        62,
        63
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "packages/core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 65
    },
    {
      "path": "packages/core/src/util/Sortable.js",
      "requires": [
        65
      ],
      "uses": [
        67
      ],
      "idx": 66
    },
    {
      "path": "packages/core/src/util/MixedCollection.js",
      "requires": [
        64,
        66
      ],
      "uses": [],
      "idx": 67
    },
    {
      "path": "packages/core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 68
    },
    {
      "path": "packages/core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 69
    },
    {
      "path": "packages/core/src/util/Grouper.js",
      "requires": [
        65
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "packages/core/src/util/Collection.js",
      "requires": [
        4,
        62,
        65,
        69,
        70
      ],
      "uses": [
        113,
        114,
        115
      ],
      "idx": 71
    },
    {
      "path": "packages/core/src/util/ObjectTemplate.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "packages/core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        68
      ],
      "idx": 73
    },
    {
      "path": "packages/core/src/data/schema/Association.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 74
    },
    {
      "path": "packages/core/src/data/schema/OneToOne.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 75
    },
    {
      "path": "packages/core/src/data/schema/ManyToOne.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 76
    },
    {
      "path": "packages/core/src/data/schema/ManyToMany.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 77
    },
    {
      "path": "packages/core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "packages/core/src/data/schema/Namer.js",
      "requires": [
        68,
        78
      ],
      "uses": [],
      "idx": 79
    },
    {
      "path": "packages/core/src/data/schema/Schema.js",
      "requires": [
        68,
        72,
        75,
        76,
        77,
        79
      ],
      "uses": [],
      "idx": 80
    },
    {
      "path": "packages/core/src/data/AbstractStore.js",
      "requires": [
        4,
        62,
        68,
        71,
        80
      ],
      "uses": [
        119
      ],
      "idx": 81
    },
    {
      "path": "packages/core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 82
    },
    {
      "path": "packages/core/src/data/ErrorCollection.js",
      "requires": [
        67,
        82
      ],
      "uses": [
        91
      ],
      "idx": 83
    },
    {
      "path": "packages/core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 84
    },
    {
      "path": "packages/core/src/data/operation/Create.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 85
    },
    {
      "path": "packages/core/src/data/operation/Destroy.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 86
    },
    {
      "path": "packages/core/src/data/operation/Read.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "packages/core/src/data/operation/Update.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "packages/core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 89
    },
    {
      "path": "packages/core/src/data/validator/Validator.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "packages/core/src/data/field/Field.js",
      "requires": [
        68,
        89,
        90
      ],
      "uses": [],
      "idx": 91
    },
    {
      "path": "packages/core/src/data/field/Boolean.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "packages/core/src/data/field/Date.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 93
    },
    {
      "path": "packages/core/src/data/field/Integer.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 94
    },
    {
      "path": "packages/core/src/data/field/Number.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 95
    },
    {
      "path": "packages/core/src/data/field/String.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 96
    },
    {
      "path": "packages/core/src/data/identifier/Generator.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "packages/core/src/data/identifier/Sequential.js",
      "requires": [
        97
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "packages/core/src/data/Model.js",
      "requires": [
        80,
        83,
        84,
        85,
        86,
        87,
        88,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98
      ],
      "uses": [
        68,
        101,
        242
      ],
      "idx": 99
    },
    {
      "path": "packages/core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 100
    },
    {
      "path": "packages/core/src/data/reader/Reader.js",
      "requires": [
        4,
        13,
        55,
        68,
        100
      ],
      "uses": [
        80
      ],
      "idx": 101
    },
    {
      "path": "packages/core/src/data/writer/Writer.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 102
    },
    {
      "path": "packages/core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        68,
        80,
        101,
        102
      ],
      "uses": [
        84,
        85,
        86,
        87,
        88,
        99,
        202
      ],
      "idx": 103
    },
    {
      "path": "packages/core/src/data/proxy/Client.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "packages/core/src/data/proxy/Memory.js",
      "requires": [
        104
      ],
      "uses": [
        62,
        66
      ],
      "idx": 105
    },
    {
      "path": "packages/core/src/data/ProxyStore.js",
      "requires": [
        81,
        84,
        85,
        86,
        87,
        88,
        99,
        103,
        105
      ],
      "uses": [
        1,
        80
      ],
      "idx": 106
    },
    {
      "path": "packages/core/src/data/LocalStore.js",
      "requires": [
        0
      ],
      "uses": [
        71
      ],
      "idx": 107
    },
    {
      "path": "packages/core/src/data/proxy/Server.js",
      "requires": [
        103
      ],
      "uses": [
        46,
        239
      ],
      "idx": 108
    },
    {
      "path": "packages/core/src/data/proxy/Ajax.js",
      "requires": [
        9,
        108
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "packages/core/src/data/reader/Json.js",
      "requires": [
        44,
        101
      ],
      "uses": [],
      "idx": 110
    },
    {
      "path": "packages/core/src/data/writer/Json.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "packages/core/src/util/Group.js",
      "requires": [
        71
      ],
      "uses": [],
      "idx": 112
    },
    {
      "path": "packages/core/src/util/SorterCollection.js",
      "requires": [
        65,
        71
      ],
      "uses": [],
      "idx": 113
    },
    {
      "path": "packages/core/src/util/FilterCollection.js",
      "requires": [
        62,
        71
      ],
      "uses": [],
      "idx": 114
    },
    {
      "path": "packages/core/src/util/GroupCollection.js",
      "requires": [
        71,
        112,
        113,
        114
      ],
      "uses": [],
      "idx": 115
    },
    {
      "path": "packages/core/src/data/Store.js",
      "requires": [
        1,
        99,
        106,
        107,
        109,
        110,
        111,
        115
      ],
      "uses": [
        70,
        119,
        228
      ],
      "idx": 116
    },
    {
      "path": "packages/core/src/data/reader/Array.js",
      "requires": [
        110
      ],
      "uses": [],
      "idx": 117
    },
    {
      "path": "packages/core/src/data/ArrayStore.js",
      "requires": [
        105,
        116,
        117
      ],
      "uses": [],
      "idx": 118
    },
    {
      "path": "packages/core/src/data/StoreManager.js",
      "requires": [
        67,
        118
      ],
      "uses": [
        68,
        105,
        111,
        116,
        117
      ],
      "idx": 119
    },
    {
      "path": "packages/core/src/app/domain/Store.js",
      "requires": [
        56,
        81
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "packages/core/src/app/route/Queue.js",
      "requires": [],
      "uses": [
        67
      ],
      "idx": 121
    },
    {
      "path": "packages/core/src/app/route/Route.js",
      "requires": [],
      "uses": [
        46
      ],
      "idx": 122
    },
    {
      "path": "packages/core/src/util/History.js",
      "requires": [
        63
      ],
      "uses": [
        313
      ],
      "idx": 123
    },
    {
      "path": "packages/core/src/app/route/Router.js",
      "requires": [
        121,
        122,
        123
      ],
      "uses": [],
      "idx": 124
    },
    {
      "path": "packages/core/src/app/Controller.js",
      "requires": [
        11,
        57,
        60,
        61,
        119,
        120,
        124
      ],
      "uses": [
        14,
        80
      ],
      "idx": 125
    },
    {
      "path": "packages/core/src/app/Application.js",
      "requires": [
        67,
        123,
        125,
        127,
        196
      ],
      "uses": [
        124
      ],
      "idx": 126
    },
    {
      "path": "packages/core/overrides/app/Application.js",
      "requires": [],
      "uses": [
        126
      ],
      "idx": 127
    },
    {
      "path": "packages/core/src/scroll/Scroller.js",
      "requires": [
        15,
        68
      ],
      "uses": [
        43,
        143,
        144
      ],
      "idx": 128
    },
    {
      "path": "packages/core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 129
    },
    {
      "path": "packages/core/src/fx/easing/Momentum.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "packages/core/src/fx/easing/Bounce.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 131
    },
    {
      "path": "packages/core/src/fx/easing/BoundMomentum.js",
      "requires": [
        129,
        130,
        131
      ],
      "uses": [],
      "idx": 132
    },
    {
      "path": "packages/core/src/fx/easing/Linear.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "packages/core/src/fx/easing/EaseOut.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 134
    },
    {
      "path": "packages/core/src/util/translatable/Abstract.js",
      "requires": [
        15,
        133
      ],
      "uses": [
        10
      ],
      "idx": 135
    },
    {
      "path": "packages/core/src/util/translatable/Dom.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "packages/core/src/util/translatable/CssTransform.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 137
    },
    {
      "path": "packages/core/src/util/translatable/ScrollPosition.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "packages/core/src/util/translatable/ScrollParent.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "packages/core/src/util/translatable/CssPosition.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 140
    },
    {
      "path": "packages/core/src/util/Translatable.js",
      "requires": [
        137,
        138,
        139,
        140
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "packages/core/src/scroll/Indicator.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 142
    },
    {
      "path": "packages/core/src/scroll/TouchScroller.js",
      "requires": [
        43,
        128,
        132,
        134,
        141,
        142
      ],
      "uses": [],
      "idx": 143
    },
    {
      "path": "packages/core/src/scroll/DomScroller.js",
      "requires": [
        128
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "modern/modern/src/behavior/Behavior.js",
      "requires": [],
      "uses": [],
      "idx": 145
    },
    {
      "path": "modern/modern/src/behavior/Translatable.js",
      "requires": [
        141,
        145
      ],
      "uses": [],
      "idx": 146
    },
    {
      "path": "modern/modern/src/util/Draggable.js",
      "requires": [
        4,
        141
      ],
      "uses": [],
      "idx": 147
    },
    {
      "path": "modern/modern/src/behavior/Draggable.js",
      "requires": [
        145,
        147
      ],
      "uses": [],
      "idx": 148
    },
    {
      "path": "modern/modern/src/Component.js",
      "requires": [
        11,
        14,
        50,
        51,
        55,
        128,
        143,
        144,
        146,
        148
      ],
      "uses": [
        42,
        167,
        289
      ],
      "idx": 149
    },
    {
      "path": "modern/modern/src/layout/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "packages/core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "modern/modern/src/util/Wrapper.js",
      "requires": [
        151
      ],
      "uses": [
        42
      ],
      "idx": 152
    },
    {
      "path": "modern/modern/src/layout/wrapper/BoxDock.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 153
    },
    {
      "path": "modern/modern/src/layout/wrapper/Inner.js",
      "requires": [],
      "uses": [],
      "idx": 154
    },
    {
      "path": "modern/modern/src/layout/Default.js",
      "requires": [
        150,
        152,
        153,
        154
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "modern/modern/src/layout/Box.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "packages/core/src/fx/layout/card/Abstract.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "packages/core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 158
    },
    {
      "path": "packages/core/src/fx/animation/Abstract.js",
      "requires": [
        15,
        158
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "packages/core/src/fx/animation/Slide.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "packages/core/src/fx/animation/SlideOut.js",
      "requires": [
        160
      ],
      "uses": [],
      "idx": 161
    },
    {
      "path": "packages/core/src/fx/animation/Fade.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 162
    },
    {
      "path": "packages/core/src/fx/animation/FadeOut.js",
      "requires": [
        162
      ],
      "uses": [],
      "idx": 163
    },
    {
      "path": "packages/core/src/fx/animation/Flip.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 164
    },
    {
      "path": "packages/core/src/fx/animation/Pop.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 165
    },
    {
      "path": "packages/core/src/fx/animation/PopOut.js",
      "requires": [
        165
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "packages/core/src/fx/Animation.js",
      "requires": [
        160,
        161,
        162,
        163,
        164,
        165,
        166
      ],
      "uses": [
        159
      ],
      "idx": 167
    },
    {
      "path": "packages/core/src/fx/layout/card/Style.js",
      "requires": [
        157,
        167
      ],
      "uses": [
        289
      ],
      "idx": 168
    },
    {
      "path": "packages/core/src/fx/layout/card/Slide.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 169
    },
    {
      "path": "packages/core/src/fx/layout/card/Cover.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 170
    },
    {
      "path": "packages/core/src/fx/layout/card/Reveal.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 171
    },
    {
      "path": "packages/core/src/fx/layout/card/Fade.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 172
    },
    {
      "path": "packages/core/src/fx/layout/card/Flip.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 173
    },
    {
      "path": "packages/core/src/fx/layout/card/Pop.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "packages/core/src/fx/layout/card/Scroll.js",
      "requires": [
        133,
        157
      ],
      "uses": [
        10
      ],
      "idx": 175
    },
    {
      "path": "packages/core/src/fx/layout/Card.js",
      "requires": [
        169,
        170,
        171,
        172,
        173,
        174,
        175
      ],
      "uses": [
        157
      ],
      "idx": 176
    },
    {
      "path": "modern/modern/src/layout/Card.js",
      "requires": [
        155,
        176
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "modern/modern/src/layout/Fit.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 178
    },
    {
      "path": "modern/modern/src/layout/FlexBox.js",
      "requires": [
        156
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "modern/modern/src/layout/Float.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 180
    },
    {
      "path": "modern/modern/src/layout/HBox.js",
      "requires": [
        179
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "modern/modern/src/layout/VBox.js",
      "requires": [
        179
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "modern/modern/src/layout/wrapper/Dock.js",
      "requires": [
        152
      ],
      "uses": [
        42
      ],
      "idx": 183
    },
    {
      "path": "packages/core/src/util/ItemCollection.js",
      "requires": [
        67
      ],
      "uses": [],
      "idx": 184
    },
    {
      "path": "modern/modern/src/util/InputBlocker.js",
      "requires": [],
      "uses": [],
      "idx": 185
    },
    {
      "path": "modern/modern/src/Mask.js",
      "requires": [
        149,
        185
      ],
      "uses": [],
      "idx": 186
    },
    {
      "path": "packages/core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 187
    },
    {
      "path": "packages/core/src/mixin/Container.js",
      "requires": [
        0
      ],
      "uses": [
        11
      ],
      "idx": 188
    },
    {
      "path": "modern/modern/src/Container.js",
      "requires": [
        149,
        150,
        153,
        154,
        155,
        156,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        186,
        187,
        188
      ],
      "uses": [
        176
      ],
      "idx": 189
    },
    {
      "path": "modern/modern/src/LoadMask.js",
      "requires": [
        186
      ],
      "uses": [],
      "idx": 190
    },
    {
      "path": "modern/modern/src/viewport/Default.js",
      "requires": [
        177,
        185,
        189,
        190
      ],
      "uses": [
        63,
        149
      ],
      "idx": 191
    },
    {
      "path": "modern/modern/src/viewport/Ios.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 192
    },
    {
      "path": "modern/modern/src/viewport/Android.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 193
    },
    {
      "path": "modern/modern/src/viewport/WindowsPhone.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 194
    },
    {
      "path": "modern/modern/src/viewport/Viewport.js",
      "requires": [
        192,
        193,
        194
      ],
      "uses": [],
      "idx": 195
    },
    {
      "path": "modern/modern/overrides/app/Application.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 196
    },
    {
      "path": "packages/core/src/app/Profile.js",
      "requires": [
        4
      ],
      "uses": [
        125
      ],
      "idx": 197
    },
    {
      "path": "packages/core/src/app/domain/View.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 198
    },
    {
      "path": "packages/core/src/app/ViewController.js",
      "requires": [
        60,
        68,
        198
      ],
      "uses": [],
      "idx": 199
    },
    {
      "path": "packages/core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 200
    },
    {
      "path": "packages/core/src/util/Scheduler.js",
      "requires": [
        4,
        200
      ],
      "uses": [
        43
      ],
      "idx": 201
    },
    {
      "path": "packages/core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 202
    },
    {
      "path": "packages/core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 203
    },
    {
      "path": "packages/core/src/data/matrix/Side.js",
      "requires": [
        203
      ],
      "uses": [],
      "idx": 204
    },
    {
      "path": "packages/core/src/data/matrix/Matrix.js",
      "requires": [
        204
      ],
      "uses": [],
      "idx": 205
    },
    {
      "path": "packages/core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 206
    },
    {
      "path": "packages/core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "packages/core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        202
      ],
      "idx": 208
    },
    {
      "path": "packages/core/src/data/Session.js",
      "requires": [
        80,
        202,
        205,
        206,
        207,
        208
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "packages/core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 210
    },
    {
      "path": "packages/core/src/app/bind/BaseBinding.js",
      "requires": [
        210
      ],
      "uses": [],
      "idx": 211
    },
    {
      "path": "packages/core/src/app/bind/Binding.js",
      "requires": [
        211
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "packages/core/src/app/bind/AbstractStub.js",
      "requires": [
        210,
        212
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "packages/core/src/app/bind/Stub.js",
      "requires": [
        212,
        213
      ],
      "uses": [
        218
      ],
      "idx": 214
    },
    {
      "path": "packages/core/src/app/bind/LinkStub.js",
      "requires": [
        214
      ],
      "uses": [],
      "idx": 215
    },
    {
      "path": "packages/core/src/app/bind/RootStub.js",
      "requires": [
        213,
        214,
        215
      ],
      "uses": [],
      "idx": 216
    },
    {
      "path": "packages/core/src/app/bind/Multi.js",
      "requires": [
        211
      ],
      "uses": [],
      "idx": 217
    },
    {
      "path": "packages/core/src/app/bind/Formula.js",
      "requires": [
        13,
        210
      ],
      "uses": [],
      "idx": 218
    },
    {
      "path": "packages/core/src/app/bind/Template.js",
      "requires": [
        45
      ],
      "uses": [],
      "idx": 219
    },
    {
      "path": "packages/core/src/app/bind/TemplateBinding.js",
      "requires": [
        211,
        217,
        219
      ],
      "uses": [],
      "idx": 220
    },
    {
      "path": "packages/core/src/data/ChainedStore.js",
      "requires": [
        81,
        107
      ],
      "uses": [
        46,
        119
      ],
      "idx": 221
    },
    {
      "path": "packages/core/src/app/ViewModel.js",
      "requires": [
        3,
        68,
        201,
        209,
        215,
        216,
        217,
        218,
        220,
        221
      ],
      "uses": [
        1,
        80
      ],
      "idx": 222
    },
    {
      "path": "packages/core/src/app/domain/Controller.js",
      "requires": [
        56,
        125
      ],
      "uses": [
        60
      ],
      "idx": 223
    },
    {
      "path": "packages/core/src/direct/Manager.js",
      "requires": [
        4,
        67
      ],
      "uses": [
        46
      ],
      "idx": 224
    },
    {
      "path": "packages/core/src/direct/Provider.js",
      "requires": [
        4,
        224
      ],
      "uses": [],
      "idx": 225
    },
    {
      "path": "packages/core/src/app/domain/Direct.js",
      "requires": [
        56,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "packages/core/src/data/PageMap.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 227
    },
    {
      "path": "packages/core/src/data/BufferedStore.js",
      "requires": [
        62,
        65,
        70,
        106,
        227
      ],
      "uses": [
        113,
        114,
        115
      ],
      "idx": 228
    },
    {
      "path": "packages/core/src/data/proxy/Direct.js",
      "requires": [
        108,
        224
      ],
      "uses": [],
      "idx": 229
    },
    {
      "path": "packages/core/src/data/DirectStore.js",
      "requires": [
        116,
        229
      ],
      "uses": [],
      "idx": 230
    },
    {
      "path": "packages/core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        43
      ],
      "idx": 231
    },
    {
      "path": "packages/core/src/data/proxy/JsonP.js",
      "requires": [
        108,
        231
      ],
      "uses": [],
      "idx": 232
    },
    {
      "path": "packages/core/src/data/JsonPStore.js",
      "requires": [
        110,
        116,
        232
      ],
      "uses": [],
      "idx": 233
    },
    {
      "path": "packages/core/src/data/JsonStore.js",
      "requires": [
        109,
        110,
        111,
        116
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "packages/core/src/data/ModelManager.js",
      "requires": [
        80
      ],
      "uses": [
        99
      ],
      "idx": 235
    },
    {
      "path": "packages/core/src/data/NodeInterface.js",
      "requires": [
        4,
        92,
        94,
        96,
        111
      ],
      "uses": [
        80
      ],
      "idx": 236
    },
    {
      "path": "packages/core/src/data/TreeModel.js",
      "requires": [
        99,
        187,
        236
      ],
      "uses": [],
      "idx": 237
    },
    {
      "path": "packages/core/src/data/NodeStore.js",
      "requires": [
        116,
        236,
        237
      ],
      "uses": [
        99
      ],
      "idx": 238
    },
    {
      "path": "packages/core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 239
    },
    {
      "path": "packages/core/src/data/TreeStore.js",
      "requires": [
        65,
        116,
        236,
        237
      ],
      "uses": [
        99
      ],
      "idx": 240
    },
    {
      "path": "packages/core/src/data/Types.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 241
    },
    {
      "path": "packages/core/src/data/Validation.js",
      "requires": [
        99
      ],
      "uses": [],
      "idx": 242
    },
    {
      "path": "packages/core/src/dom/Helper.js",
      "requires": [],
      "uses": [
        46
      ],
      "idx": 243
    },
    {
      "path": "packages/core/src/dom/Query.js",
      "requires": [
        12,
        243
      ],
      "uses": [
        13
      ],
      "idx": 244
    },
    {
      "path": "packages/core/src/data/reader/Xml.js",
      "requires": [
        101,
        244
      ],
      "uses": [],
      "idx": 245
    },
    {
      "path": "packages/core/src/data/writer/Xml.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "packages/core/src/data/XmlStore.js",
      "requires": [
        109,
        116,
        245,
        246
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "packages/core/src/data/identifier/Negative.js",
      "requires": [
        98
      ],
      "uses": [],
      "idx": 248
    },
    {
      "path": "packages/core/src/data/identifier/Uuid.js",
      "requires": [
        97
      ],
      "uses": [],
      "idx": 249
    },
    {
      "path": "packages/core/src/data/proxy/WebStorage.js",
      "requires": [
        98,
        104
      ],
      "uses": [
        46,
        65,
        100
      ],
      "idx": 250
    },
    {
      "path": "packages/core/src/data/proxy/LocalStorage.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "packages/core/src/data/proxy/Rest.js",
      "requires": [
        109
      ],
      "uses": [],
      "idx": 252
    },
    {
      "path": "packages/core/src/data/proxy/SessionStorage.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "packages/core/src/data/validator/Bound.js",
      "requires": [
        90
      ],
      "uses": [
        46
      ],
      "idx": 254
    },
    {
      "path": "packages/core/src/data/validator/Format.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "packages/core/src/data/validator/Email.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "packages/core/src/data/validator/List.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "packages/core/src/data/validator/Exclusion.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "packages/core/src/data/validator/Inclusion.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "packages/core/src/data/validator/Length.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 260
    },
    {
      "path": "packages/core/src/data/validator/Presence.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 261
    },
    {
      "path": "packages/core/src/data/validator/Range.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 262
    },
    {
      "path": "packages/core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 263
    },
    {
      "path": "packages/core/src/direct/RemotingEvent.js",
      "requires": [
        263
      ],
      "uses": [
        224
      ],
      "idx": 264
    },
    {
      "path": "packages/core/src/direct/ExceptionEvent.js",
      "requires": [
        264
      ],
      "uses": [],
      "idx": 265
    },
    {
      "path": "packages/core/src/direct/JsonProvider.js",
      "requires": [
        225
      ],
      "uses": [
        224,
        265
      ],
      "idx": 266
    },
    {
      "path": "packages/core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        43
      ],
      "idx": 267
    },
    {
      "path": "packages/core/src/direct/PollingProvider.js",
      "requires": [
        9,
        265,
        266,
        267
      ],
      "uses": [
        224,
        313
      ],
      "idx": 268
    },
    {
      "path": "packages/core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 269
    },
    {
      "path": "packages/core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 270
    },
    {
      "path": "packages/core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        67,
        224,
        266,
        269,
        270
      ],
      "uses": [
        9,
        44,
        265
      ],
      "idx": 271
    },
    {
      "path": "packages/core/src/dom/Fly.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "packages/core/src/dom/CompositeElementLite.js",
      "requires": [
        272
      ],
      "uses": [
        42
      ],
      "idx": 273
    },
    {
      "path": "packages/core/src/dom/CompositeElement.js",
      "requires": [
        273
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "packages/core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 275
    },
    {
      "path": "packages/core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        28
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "packages/core/src/event/gesture/SingleTouch.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "packages/core/src/event/gesture/DoubleTap.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "packages/core/src/event/gesture/Drag.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "packages/core/src/event/gesture/Swipe.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "packages/core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        280
      ],
      "uses": [
        42
      ],
      "idx": 281
    },
    {
      "path": "packages/core/src/event/gesture/LongPress.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 282
    },
    {
      "path": "packages/core/src/event/gesture/MultiTouch.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "packages/core/src/event/gesture/Pinch.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "packages/core/src/event/gesture/Rotate.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 285
    },
    {
      "path": "packages/core/src/event/gesture/Tap.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "packages/core/src/event/publisher/Focus.js",
      "requires": [
        27,
        42
      ],
      "uses": [
        26,
        43
      ],
      "idx": 287
    },
    {
      "path": "packages/core/src/fx/runner/Css.js",
      "requires": [
        15,
        167
      ],
      "uses": [],
      "idx": 288
    },
    {
      "path": "packages/core/src/fx/runner/CssTransition.js",
      "requires": [
        10,
        288
      ],
      "uses": [
        167
      ],
      "idx": 289
    },
    {
      "path": "packages/core/src/fx/Runner.js",
      "requires": [
        289
      ],
      "uses": [],
      "idx": 290
    },
    {
      "path": "packages/core/src/fx/animation/Cube.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 291
    },
    {
      "path": "packages/core/src/fx/animation/Wipe.js",
      "requires": [
        167
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "packages/core/src/fx/animation/WipeOut.js",
      "requires": [
        292
      ],
      "uses": [],
      "idx": 293
    },
    {
      "path": "packages/core/src/fx/easing/EaseIn.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 294
    },
    {
      "path": "packages/core/src/fx/easing/Easing.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "packages/core/src/fx/layout/card/Cube.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        175
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        175
      ],
      "uses": [],
      "idx": 298
    },
    {
      "path": "packages/core/src/fx/runner/CssAnimation.js",
      "requires": [
        288
      ],
      "uses": [
        167
      ],
      "idx": 299
    },
    {
      "path": "packages/core/src/mixin/Accessible.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 300
    },
    {
      "path": "packages/core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 301
    },
    {
      "path": "packages/core/src/mixin/Responsive.js",
      "requires": [
        0,
        43
      ],
      "uses": [
        42
      ],
      "idx": 302
    },
    {
      "path": "packages/core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        67
      ],
      "idx": 303
    },
    {
      "path": "packages/core/src/perf/Accumulator.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "packages/core/src/perf/Monitor.js",
      "requires": [
        304
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "packages/core/src/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 306
    },
    {
      "path": "packages/core/src/plugin/LazyItems.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 307
    },
    {
      "path": "packages/core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 308
    },
    {
      "path": "packages/core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 309
    },
    {
      "path": "packages/core/src/util/CSV.js",
      "requires": [
        309
      ],
      "uses": [],
      "idx": 310
    },
    {
      "path": "packages/core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 311
    },
    {
      "path": "packages/core/src/util/TSV.js",
      "requires": [
        309
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "packages/core/src/util/TaskManager.js",
      "requires": [
        267
      ],
      "uses": [],
      "idx": 313
    },
    {
      "path": "packages/core/src/util/TextMetrics.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 314
    },
    {
      "path": "modern/modern/src/AbstractComponent.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 315
    },
    {
      "path": "modern/modern/src/AbstractPlugin.js",
      "requires": [],
      "uses": [],
      "idx": 316
    },
    {
      "path": "modern/modern/src/util/LineSegment.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 317
    },
    {
      "path": "modern/modern/src/Panel.js",
      "requires": [
        189,
        317
      ],
      "uses": [
        42
      ],
      "idx": 318
    },
    {
      "path": "modern/modern/src/Button.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "modern/modern/src/Sheet.js",
      "requires": [
        167,
        318,
        319
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "modern/modern/src/ActionSheet.js",
      "requires": [
        319,
        320
      ],
      "uses": [],
      "idx": 321
    },
    {
      "path": "modern/modern/src/Anim.js",
      "requires": [],
      "uses": [],
      "idx": 322
    },
    {
      "path": "modern/modern/src/Media.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 323
    },
    {
      "path": "modern/modern/src/Audio.js",
      "requires": [
        323
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "modern/modern/src/util/Geolocation.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 325
    },
    {
      "path": "modern/modern/src/Map.js",
      "requires": [
        189,
        325
      ],
      "uses": [],
      "idx": 326
    },
    {
      "path": "modern/modern/src/BingMap.js",
      "requires": [
        325,
        326
      ],
      "uses": [],
      "idx": 327
    },
    {
      "path": "modern/modern/src/Decorator.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 328
    },
    {
      "path": "modern/modern/src/Img.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 329
    },
    {
      "path": "modern/modern/src/Label.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "modern/modern/src/Menu.js",
      "requires": [
        319,
        320
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "modern/modern/src/Title.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 332
    },
    {
      "path": "modern/modern/src/Spacer.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 333
    },
    {
      "path": "modern/modern/src/Toolbar.js",
      "requires": [
        181,
        189,
        319,
        332,
        333
      ],
      "uses": [],
      "idx": 334
    },
    {
      "path": "modern/modern/src/field/Input.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 335
    },
    {
      "path": "modern/modern/src/field/Field.js",
      "requires": [
        328,
        335
      ],
      "uses": [],
      "idx": 336
    },
    {
      "path": "modern/modern/src/field/Text.js",
      "requires": [
        209,
        335,
        336
      ],
      "uses": [],
      "idx": 337
    },
    {
      "path": "modern/modern/src/field/TextAreaInput.js",
      "requires": [
        335
      ],
      "uses": [],
      "idx": 338
    },
    {
      "path": "modern/modern/src/field/TextArea.js",
      "requires": [
        209,
        337,
        338
      ],
      "uses": [],
      "idx": 339
    },
    {
      "path": "modern/modern/src/MessageBox.js",
      "requires": [
        185,
        320,
        334,
        337,
        339
      ],
      "uses": [
        149,
        209
      ],
      "idx": 340
    },
    {
      "path": "modern/modern/src/mixin/Progressable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 341
    },
    {
      "path": "modern/modern/src/ProgressIndicator.js",
      "requires": [
        189,
        341
      ],
      "uses": [
        55
      ],
      "idx": 342
    },
    {
      "path": "modern/modern/src/Promise.js",
      "requires": [],
      "uses": [],
      "idx": 343
    },
    {
      "path": "modern/modern/src/SegmentedButton.js",
      "requires": [
        189,
        319
      ],
      "uses": [],
      "idx": 344
    },
    {
      "path": "modern/modern/src/Sortable.js",
      "requires": [
        4,
        147
      ],
      "uses": [],
      "idx": 345
    },
    {
      "path": "modern/modern/src/TitleBar.js",
      "requires": [
        189,
        319,
        332,
        333
      ],
      "uses": [
        149,
        209
      ],
      "idx": 346
    },
    {
      "path": "modern/modern/src/Toast.js",
      "requires": [
        185,
        320
      ],
      "uses": [
        149
      ],
      "idx": 347
    },
    {
      "path": "modern/modern/src/Video.js",
      "requires": [
        323
      ],
      "uses": [
        42
      ],
      "idx": 348
    },
    {
      "path": "modern/modern/src/behavior/Droppable.js",
      "requires": [],
      "uses": [],
      "idx": 349
    },
    {
      "path": "modern/modern/src/behavior/Sortable.js",
      "requires": [],
      "uses": [],
      "idx": 350
    },
    {
      "path": "modern/modern/src/carousel/Item.js",
      "requires": [
        328
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "modern/modern/src/carousel/Indicator.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 352
    },
    {
      "path": "modern/modern/src/util/TranslatableGroup.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 353
    },
    {
      "path": "modern/modern/src/carousel/Carousel.js",
      "requires": [
        134,
        189,
        351,
        352,
        353
      ],
      "uses": [],
      "idx": 354
    },
    {
      "path": "modern/modern/src/carousel/Infinite.js",
      "requires": [
        354
      ],
      "uses": [],
      "idx": 355
    },
    {
      "path": "modern/modern/src/dataview/component/DataItem.js",
      "requires": [
        149,
        189,
        209
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "modern/modern/src/dataview/component/Container.js",
      "requires": [
        189,
        356
      ],
      "uses": [],
      "idx": 357
    },
    {
      "path": "modern/modern/src/dataview/element/Container.js",
      "requires": [
        149
      ],
      "uses": [
        42
      ],
      "idx": 358
    },
    {
      "path": "modern/modern/src/dataview/DataView.js",
      "requires": [
        119,
        189,
        190,
        303,
        357,
        358
      ],
      "uses": [
        55,
        116,
        149,
        209
      ],
      "idx": 359
    },
    {
      "path": "modern/modern/src/dataview/IndexBar.js",
      "requires": [
        149
      ],
      "uses": [
        25,
        42
      ],
      "idx": 360
    },
    {
      "path": "modern/modern/src/dataview/ListItemHeader.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 361
    },
    {
      "path": "modern/modern/src/dataview/component/ListItem.js",
      "requires": [
        149,
        209,
        356
      ],
      "uses": [],
      "idx": 362
    },
    {
      "path": "modern/modern/src/dataview/component/SimpleListItem.js",
      "requires": [
        149,
        209
      ],
      "uses": [],
      "idx": 363
    },
    {
      "path": "modern/modern/src/util/PositionMap.js",
      "requires": [],
      "uses": [],
      "idx": 364
    },
    {
      "path": "modern/modern/src/dataview/List.js",
      "requires": [
        116,
        151,
        359,
        360,
        361,
        362,
        363,
        364
      ],
      "uses": [
        10,
        189,
        209
      ],
      "idx": 365
    },
    {
      "path": "modern/modern/src/dataview/NestedList.js",
      "requires": [
        55,
        119,
        189,
        209,
        238,
        240,
        319,
        346,
        365
      ],
      "uses": [
        105,
        110,
        111,
        149,
        190,
        334
      ],
      "idx": 366
    },
    {
      "path": "modern/modern/src/dataview/element/List.js",
      "requires": [
        358
      ],
      "uses": [
        42
      ],
      "idx": 367
    },
    {
      "path": "modern/modern/src/device/accelerometer/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 368
    },
    {
      "path": "modern/modern/src/device/accelerometer/Cordova.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 369
    },
    {
      "path": "modern/modern/src/device/accelerometer/Simulator.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 370
    },
    {
      "path": "modern/modern/src/device/Accelerometer.js",
      "requires": [
        369,
        370
      ],
      "uses": [],
      "idx": 371
    },
    {
      "path": "modern/modern/src/device/communicator/Default.js",
      "requires": [],
      "uses": [],
      "idx": 372
    },
    {
      "path": "modern/modern/src/device/communicator/Android.js",
      "requires": [
        372
      ],
      "uses": [],
      "idx": 373
    },
    {
      "path": "modern/modern/src/device/Communicator.js",
      "requires": [
        372,
        373
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "modern/modern/src/device/browser/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 375
    },
    {
      "path": "modern/modern/src/device/browser/Cordova.js",
      "requires": [
        375
      ],
      "uses": [
        458
      ],
      "idx": 376
    },
    {
      "path": "modern/modern/src/device/browser/Simulator.js",
      "requires": [],
      "uses": [],
      "idx": 377
    },
    {
      "path": "modern/modern/src/device/Browser.js",
      "requires": [
        374,
        376,
        377
      ],
      "uses": [],
      "idx": 378
    },
    {
      "path": "modern/modern/src/device/camera/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 379
    },
    {
      "path": "modern/modern/src/device/camera/Cordova.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 380
    },
    {
      "path": "modern/modern/src/device/camera/Sencha.js",
      "requires": [
        374,
        379
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "modern/modern/src/device/camera/Simulator.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 382
    },
    {
      "path": "modern/modern/src/device/Camera.js",
      "requires": [
        374,
        380,
        381,
        382
      ],
      "uses": [],
      "idx": 383
    },
    {
      "path": "modern/modern/src/device/capture/Cordova.js",
      "requires": [],
      "uses": [],
      "idx": 384
    },
    {
      "path": "modern/modern/src/device/capture/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 385
    },
    {
      "path": "modern/modern/src/device/Capture.js",
      "requires": [
        374,
        384,
        385
      ],
      "uses": [],
      "idx": 386
    },
    {
      "path": "modern/modern/src/device/compass/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 387
    },
    {
      "path": "modern/modern/src/device/compass/Cordova.js",
      "requires": [
        387
      ],
      "uses": [],
      "idx": 388
    },
    {
      "path": "modern/modern/src/device/compass/Simulator.js",
      "requires": [
        387
      ],
      "uses": [],
      "idx": 389
    },
    {
      "path": "modern/modern/src/device/Compass.js",
      "requires": [
        388,
        389
      ],
      "uses": [],
      "idx": 390
    },
    {
      "path": "modern/modern/src/device/connection/Abstract.js",
      "requires": [
        4,
        15
      ],
      "uses": [],
      "idx": 391
    },
    {
      "path": "modern/modern/src/device/connection/Sencha.js",
      "requires": [
        391
      ],
      "uses": [
        374
      ],
      "idx": 392
    },
    {
      "path": "modern/modern/src/device/connection/Cordova.js",
      "requires": [
        391
      ],
      "uses": [],
      "idx": 393
    },
    {
      "path": "modern/modern/src/device/connection/Simulator.js",
      "requires": [
        391
      ],
      "uses": [
        395
      ],
      "idx": 394
    },
    {
      "path": "modern/modern/src/device/Connection.js",
      "requires": [
        374,
        392,
        393,
        394
      ],
      "uses": [],
      "idx": 395
    },
    {
      "path": "modern/modern/src/device/contacts/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "modern/modern/src/device/contacts/Sencha.js",
      "requires": [
        396
      ],
      "uses": [
        374
      ],
      "idx": 397
    },
    {
      "path": "modern/modern/src/device/contacts/Cordova.js",
      "requires": [
        396
      ],
      "uses": [],
      "idx": 398
    },
    {
      "path": "modern/modern/src/device/Contacts.js",
      "requires": [
        374,
        397,
        398
      ],
      "uses": [
        396
      ],
      "idx": 399
    },
    {
      "path": "modern/modern/src/device/device/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 400
    },
    {
      "path": "modern/modern/src/device/device/Cordova.js",
      "requires": [
        400
      ],
      "uses": [
        404
      ],
      "idx": 401
    },
    {
      "path": "modern/modern/src/device/device/Sencha.js",
      "requires": [
        400
      ],
      "uses": [
        374
      ],
      "idx": 402
    },
    {
      "path": "modern/modern/src/device/device/Simulator.js",
      "requires": [
        400
      ],
      "uses": [],
      "idx": 403
    },
    {
      "path": "modern/modern/src/device/Device.js",
      "requires": [
        374,
        401,
        402,
        403
      ],
      "uses": [],
      "idx": 404
    },
    {
      "path": "modern/modern/src/device/filesystem/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 405
    },
    {
      "path": "modern/modern/src/device/filesystem/Sencha.js",
      "requires": [
        405
      ],
      "uses": [
        374
      ],
      "idx": 406
    },
    {
      "path": "modern/modern/src/device/filesystem/HTML5.js",
      "requires": [
        405,
        406
      ],
      "uses": [],
      "idx": 407
    },
    {
      "path": "modern/modern/src/device/filesystem/Cordova.js",
      "requires": [
        407
      ],
      "uses": [
        406
      ],
      "idx": 408
    },
    {
      "path": "modern/modern/src/device/filesystem/Chrome.js",
      "requires": [
        407
      ],
      "uses": [
        405,
        406
      ],
      "idx": 409
    },
    {
      "path": "modern/modern/src/device/filesystem/Simulator.js",
      "requires": [
        407
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "modern/modern/src/device/FileSystem.js",
      "requires": [
        374,
        406,
        408,
        409,
        410
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "modern/modern/src/device/geolocation/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 412
    },
    {
      "path": "modern/modern/src/device/geolocation/Cordova.js",
      "requires": [
        412
      ],
      "uses": [],
      "idx": 413
    },
    {
      "path": "modern/modern/src/device/geolocation/Sencha.js",
      "requires": [
        412
      ],
      "uses": [
        374
      ],
      "idx": 414
    },
    {
      "path": "modern/modern/src/device/geolocation/Simulator.js",
      "requires": [
        325,
        412
      ],
      "uses": [],
      "idx": 415
    },
    {
      "path": "modern/modern/src/device/Geolocation.js",
      "requires": [
        374,
        413,
        414,
        415
      ],
      "uses": [],
      "idx": 416
    },
    {
      "path": "modern/modern/src/device/globalization/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        45
      ],
      "idx": 417
    },
    {
      "path": "modern/modern/src/device/globalization/Cordova.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 418
    },
    {
      "path": "modern/modern/src/device/globalization/Simulator.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 419
    },
    {
      "path": "modern/modern/src/device/Globalization.js",
      "requires": [
        418,
        419
      ],
      "uses": [],
      "idx": 420
    },
    {
      "path": "modern/modern/src/device/media/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 421
    },
    {
      "path": "modern/modern/src/device/media/Cordova.js",
      "requires": [
        421
      ],
      "uses": [],
      "idx": 422
    },
    {
      "path": "modern/modern/src/device/Media.js",
      "requires": [
        374,
        422
      ],
      "uses": [
        421
      ],
      "idx": 423
    },
    {
      "path": "modern/modern/src/device/notification/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 424
    },
    {
      "path": "modern/modern/src/device/notification/Cordova.js",
      "requires": [
        374,
        424
      ],
      "uses": [],
      "idx": 425
    },
    {
      "path": "modern/modern/src/device/notification/Sencha.js",
      "requires": [
        374,
        424
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "modern/modern/src/util/Audio.js",
      "requires": [],
      "uses": [],
      "idx": 427
    },
    {
      "path": "modern/modern/src/device/notification/Simulator.js",
      "requires": [
        340,
        424,
        427
      ],
      "uses": [],
      "idx": 428
    },
    {
      "path": "modern/modern/src/device/Notification.js",
      "requires": [
        374,
        425,
        426,
        428
      ],
      "uses": [],
      "idx": 429
    },
    {
      "path": "modern/modern/src/device/orientation/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 430
    },
    {
      "path": "modern/modern/src/device/orientation/HTML5.js",
      "requires": [
        430
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "modern/modern/src/device/orientation/Sencha.js",
      "requires": [
        374,
        430
      ],
      "uses": [],
      "idx": 432
    },
    {
      "path": "modern/modern/src/device/Orientation.js",
      "requires": [
        374,
        431,
        432
      ],
      "uses": [],
      "idx": 433
    },
    {
      "path": "modern/modern/src/device/purchases/Sencha.js",
      "requires": [
        99,
        116
      ],
      "uses": [
        374
      ],
      "idx": 434
    },
    {
      "path": "modern/modern/src/device/Purchases.js",
      "requires": [
        374,
        434
      ],
      "uses": [],
      "idx": 435
    },
    {
      "path": "modern/modern/src/device/push/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 436
    },
    {
      "path": "modern/modern/src/device/push/Sencha.js",
      "requires": [
        436
      ],
      "uses": [
        374
      ],
      "idx": 437
    },
    {
      "path": "modern/modern/src/device/push/Cordova.js",
      "requires": [
        436
      ],
      "uses": [
        439
      ],
      "idx": 438
    },
    {
      "path": "modern/modern/src/device/Push.js",
      "requires": [
        374,
        437,
        438
      ],
      "uses": [
        436
      ],
      "idx": 439
    },
    {
      "path": "modern/modern/src/device/sqlite/Sencha.js",
      "requires": [],
      "uses": [
        374
      ],
      "idx": 440
    },
    {
      "path": "modern/modern/src/device/SQLite.js",
      "requires": [
        374,
        440
      ],
      "uses": [],
      "idx": 441
    },
    {
      "path": "modern/modern/src/device/splashscreen/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 442
    },
    {
      "path": "modern/modern/src/device/splashscreen/Cordova.js",
      "requires": [
        442
      ],
      "uses": [],
      "idx": 443
    },
    {
      "path": "modern/modern/src/device/splashscreen/Simulator.js",
      "requires": [
        442
      ],
      "uses": [],
      "idx": 444
    },
    {
      "path": "modern/modern/src/device/Splashscreen.js",
      "requires": [
        443,
        444
      ],
      "uses": [],
      "idx": 445
    },
    {
      "path": "modern/modern/src/device/storage/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 446
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/SQLStatement.js",
      "requires": [],
      "uses": [],
      "idx": 447
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/Database.js",
      "requires": [
        447
      ],
      "uses": [],
      "idx": 448
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/HTML5.js",
      "requires": [
        446,
        448
      ],
      "uses": [],
      "idx": 449
    },
    {
      "path": "modern/modern/src/device/storage/Cordova.js",
      "requires": [
        449
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "modern/modern/src/device/storage/Simulator.js",
      "requires": [
        449
      ],
      "uses": [],
      "idx": 451
    },
    {
      "path": "modern/modern/src/device/Storage.js",
      "requires": [
        450,
        451
      ],
      "uses": [],
      "idx": 452
    },
    {
      "path": "modern/modern/src/device/tunnel/Abstract.js",
      "requires": [
        343
      ],
      "uses": [
        455
      ],
      "idx": 453
    },
    {
      "path": "modern/modern/src/device/tunnel/Simulator.js",
      "requires": [
        374,
        453
      ],
      "uses": [
        343
      ],
      "idx": 454
    },
    {
      "path": "modern/modern/src/device/tunnel/Connection.js",
      "requires": [],
      "uses": [
        457
      ],
      "idx": 455
    },
    {
      "path": "modern/modern/src/device/tunnel/Sencha.js",
      "requires": [
        453,
        455
      ],
      "uses": [
        343,
        374
      ],
      "idx": 456
    },
    {
      "path": "modern/modern/src/device/Tunnel.js",
      "requires": [
        454,
        456
      ],
      "uses": [],
      "idx": 457
    },
    {
      "path": "modern/modern/src/device/browser/Window.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 458
    },
    {
      "path": "modern/modern/src/field/Checkbox.js",
      "requires": [
        209,
        335,
        336
      ],
      "uses": [],
      "idx": 459
    },
    {
      "path": "modern/modern/src/picker/Slot.js",
      "requires": [
        55,
        116,
        119,
        149,
        359
      ],
      "uses": [
        209
      ],
      "idx": 460
    },
    {
      "path": "modern/modern/src/picker/Picker.js",
      "requires": [
        99,
        185,
        209,
        320,
        334,
        346,
        460
      ],
      "uses": [],
      "idx": 461
    },
    {
      "path": "modern/modern/src/field/Select.js",
      "requires": [
        116,
        119,
        318,
        337,
        365,
        461
      ],
      "uses": [
        149,
        209
      ],
      "idx": 462
    },
    {
      "path": "modern/modern/src/picker/Date.js",
      "requires": [
        185,
        461
      ],
      "uses": [
        460
      ],
      "idx": 463
    },
    {
      "path": "modern/modern/src/field/DatePicker.js",
      "requires": [
        462,
        463
      ],
      "uses": [
        45
      ],
      "idx": 464
    },
    {
      "path": "modern/modern/src/field/DatePickerNative.js",
      "requires": [
        464
      ],
      "uses": [],
      "idx": 465
    },
    {
      "path": "modern/modern/src/field/Email.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 466
    },
    {
      "path": "modern/modern/src/field/FileInput.js",
      "requires": [
        335
      ],
      "uses": [],
      "idx": 467
    },
    {
      "path": "modern/modern/src/field/File.js",
      "requires": [
        209,
        336,
        467
      ],
      "uses": [],
      "idx": 468
    },
    {
      "path": "modern/modern/src/field/Hidden.js",
      "requires": [
        209,
        335,
        337
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "modern/modern/src/field/Number.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 470
    },
    {
      "path": "modern/modern/src/field/Password.js",
      "requires": [
        337
      ],
      "uses": [
        42
      ],
      "idx": 471
    },
    {
      "path": "modern/modern/src/field/Radio.js",
      "requires": [
        459
      ],
      "uses": [],
      "idx": 472
    },
    {
      "path": "modern/modern/src/field/Search.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 473
    },
    {
      "path": "modern/modern/src/slider/Thumb.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "modern/modern/src/slider/Slider.js",
      "requires": [
        134,
        189,
        474
      ],
      "uses": [],
      "idx": 475
    },
    {
      "path": "modern/modern/src/field/Slider.js",
      "requires": [
        336,
        475
      ],
      "uses": [],
      "idx": 476
    },
    {
      "path": "modern/modern/src/util/TapRepeater.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 477
    },
    {
      "path": "modern/modern/src/field/Spinner.js",
      "requires": [
        470,
        477
      ],
      "uses": [
        42,
        149
      ],
      "idx": 478
    },
    {
      "path": "modern/modern/src/slider/Toggle.js",
      "requires": [
        475
      ],
      "uses": [],
      "idx": 479
    },
    {
      "path": "modern/modern/src/field/Toggle.js",
      "requires": [
        476,
        479
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "modern/modern/src/field/Url.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 481
    },
    {
      "path": "modern/modern/src/form/FieldSet.js",
      "requires": [
        189,
        332
      ],
      "uses": [],
      "idx": 482
    },
    {
      "path": "modern/modern/src/form/Panel.js",
      "requires": [
        9,
        55,
        318,
        459
      ],
      "uses": [
        190,
        209,
        224
      ],
      "idx": 483
    },
    {
      "path": "modern/modern/src/grid/Row.js",
      "requires": [
        149,
        209
      ],
      "uses": [
        42
      ],
      "idx": 484
    },
    {
      "path": "modern/modern/src/grid/column/Column.js",
      "requires": [
        149,
        209,
        337
      ],
      "uses": [],
      "idx": 485
    },
    {
      "path": "modern/modern/src/grid/column/Date.js",
      "requires": [
        485
      ],
      "uses": [
        45
      ],
      "idx": 486
    },
    {
      "path": "modern/modern/src/grid/column/Template.js",
      "requires": [
        55,
        485
      ],
      "uses": [],
      "idx": 487
    },
    {
      "path": "modern/modern/src/grid/HeaderContainer.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 488
    },
    {
      "path": "modern/modern/src/grid/HeaderGroup.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 489
    },
    {
      "path": "modern/modern/src/grid/Grid.js",
      "requires": [
        209,
        340,
        346,
        365,
        484,
        485,
        486,
        487,
        488,
        489
      ],
      "uses": [
        189
      ],
      "idx": 490
    },
    {
      "path": "modern/modern/src/grid/column/Boolean.js",
      "requires": [
        209,
        459,
        485
      ],
      "uses": [],
      "idx": 491
    },
    {
      "path": "modern/modern/src/grid/column/Number.js",
      "requires": [
        45,
        209,
        470,
        485
      ],
      "uses": [],
      "idx": 492
    },
    {
      "path": "modern/modern/src/grid/column/unsupported/Action.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "modern/modern/src/grid/column/unsupported/CheckColumn.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "modern/modern/src/grid/plugin/ColumnResizing.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 495
    },
    {
      "path": "modern/modern/src/grid/plugin/Editable.js",
      "requires": [
        149,
        209,
        319,
        346,
        482,
        483
      ],
      "uses": [
        320
      ],
      "idx": 496
    },
    {
      "path": "modern/modern/src/grid/plugin/MultiSelection.js",
      "requires": [
        149,
        209,
        485
      ],
      "uses": [
        319
      ],
      "idx": 497
    },
    {
      "path": "modern/modern/src/grid/plugin/PagingToolbar.js",
      "requires": [
        149,
        151,
        209,
        319,
        334,
        476
      ],
      "uses": [],
      "idx": 498
    },
    {
      "path": "modern/modern/src/grid/plugin/SummaryRow.js",
      "requires": [
        151,
        484
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "modern/modern/src/plugin/SortableList.js",
      "requires": [
        149,
        151
      ],
      "uses": [
        244
      ],
      "idx": 500
    },
    {
      "path": "modern/modern/src/grid/plugin/ViewOptions.js",
      "requires": [
        149,
        209,
        319,
        320,
        346,
        366,
        480,
        500
      ],
      "uses": [
        189
      ],
      "idx": 501
    },
    {
      "path": "modern/modern/src/navigation/Bar.js",
      "requires": [
        319,
        333,
        346
      ],
      "uses": [
        167,
        289
      ],
      "idx": 502
    },
    {
      "path": "modern/modern/src/navigation/View.js",
      "requires": [
        189,
        502
      ],
      "uses": [
        14,
        209,
        319,
        334,
        346
      ],
      "idx": 503
    },
    {
      "path": "modern/modern/src/plugin/BufferedList.js",
      "requires": [
        151
      ],
      "uses": [],
      "idx": 504
    },
    {
      "path": "modern/modern/src/plugin/ListPaging.js",
      "requires": [
        149,
        209
      ],
      "uses": [
        55
      ],
      "idx": 505
    },
    {
      "path": "modern/modern/src/plugin/PullRefresh.js",
      "requires": [
        149
      ],
      "uses": [
        45,
        55,
        84
      ],
      "idx": 506
    },
    {
      "path": "modern/modern/src/plugin/field/PlaceHolderLabel.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 507
    },
    {
      "path": "modern/modern/src/tab/Tab.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 508
    },
    {
      "path": "modern/modern/src/tab/Bar.js",
      "requires": [
        334,
        508
      ],
      "uses": [],
      "idx": 509
    },
    {
      "path": "modern/modern/src/tab/Panel.js",
      "requires": [
        189,
        509
      ],
      "uses": [
        508
      ],
      "idx": 510
    },
    {
      "path": "modern/modern/src/table/Cell.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 511
    },
    {
      "path": "modern/modern/src/table/Row.js",
      "requires": [
        511
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "modern/modern/src/table/Table.js",
      "requires": [
        189,
        512
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "modern/modern/src/tip/ToolTip.js",
      "requires": [],
      "uses": [],
      "idx": 514
    },
    {
      "path": "modern/modern/src/util/BufferedCollection.js",
      "requires": [
        4,
        71
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "modern/modern/src/util/DelayedTask.js",
      "requires": [],
      "uses": [],
      "idx": 516
    },
    {
      "path": "modern/modern/src/util/Droppable.js",
      "requires": [
        4
      ],
      "uses": [
        63,
        147
      ],
      "idx": 517
    },
    {
      "path": "modern/modern/src/util/TranslatableList.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 518
    },
    {
      "path": "packages/charts/modern/src/chart/LegendBase.js",
      "requires": [
        359
      ],
      "uses": [],
      "idx": 519
    },
    {
      "path": "packages/charts/src/chart/interactions/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        11
      ],
      "idx": 520
    },
    {
      "path": "packages/charts/modern/src/chart/interactions/ItemInfo.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 521
    },
    {
      "path": "packages/charts/modern/src/draw/ContainerBase.js",
      "requires": [
        189
      ],
      "uses": [
        209,
        318,
        329
      ],
      "idx": 522
    },
    {
      "path": "packages/charts/modern/src/draw/SurfaceBase.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "packages/charts/src/draw/Color.js",
      "requires": [],
      "uses": [],
      "idx": 524
    },
    {
      "path": "packages/charts/src/draw/sprite/AnimationParser.js",
      "requires": [
        524
      ],
      "uses": [
        539
      ],
      "idx": 525
    },
    {
      "path": "packages/charts/src/draw/Draw.js",
      "requires": [],
      "uses": [],
      "idx": 526
    },
    {
      "path": "packages/charts/src/draw/gradient/Gradient.js",
      "requires": [
        524
      ],
      "uses": [],
      "idx": 527
    },
    {
      "path": "packages/charts/src/draw/gradient/GradientDefinition.js",
      "requires": [],
      "uses": [],
      "idx": 528
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeParser.js",
      "requires": [
        524,
        528
      ],
      "uses": [
        527,
        562,
        563
      ],
      "idx": 529
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeDefinition.js",
      "requires": [
        525,
        529
      ],
      "uses": [
        526,
        531
      ],
      "idx": 530
    },
    {
      "path": "packages/charts/src/draw/Matrix.js",
      "requires": [],
      "uses": [],
      "idx": 531
    },
    {
      "path": "packages/charts/src/draw/modifier/Modifier.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 532
    },
    {
      "path": "packages/charts/src/draw/modifier/Target.js",
      "requires": [
        531,
        532
      ],
      "uses": [],
      "idx": 533
    },
    {
      "path": "packages/charts/src/draw/TimingFunctions.js",
      "requires": [],
      "uses": [],
      "idx": 534
    },
    {
      "path": "packages/charts/src/draw/Animator.js",
      "requires": [],
      "uses": [
        10,
        526
      ],
      "idx": 535
    },
    {
      "path": "packages/charts/src/draw/modifier/Animation.js",
      "requires": [
        532,
        534,
        535
      ],
      "uses": [],
      "idx": 536
    },
    {
      "path": "packages/charts/src/draw/modifier/Highlight.js",
      "requires": [
        532
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "packages/charts/src/draw/sprite/Sprite.js",
      "requires": [
        4,
        526,
        527,
        530,
        533,
        536,
        537
      ],
      "uses": [
        532
      ],
      "idx": 538
    },
    {
      "path": "packages/charts/src/draw/Path.js",
      "requires": [
        526
      ],
      "uses": [],
      "idx": 539
    },
    {
      "path": "packages/charts/src/draw/overrides/Path.js",
      "requires": [],
      "uses": [
        640
      ],
      "idx": 540
    },
    {
      "path": "packages/charts/src/draw/sprite/Path.js",
      "requires": [
        526,
        538,
        539
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "packages/charts/src/draw/overrides/sprite/Path.js",
      "requires": [
        524
      ],
      "uses": [
        538
      ],
      "idx": 542
    },
    {
      "path": "packages/charts/src/draw/sprite/Circle.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 543
    },
    {
      "path": "packages/charts/src/draw/sprite/Arc.js",
      "requires": [
        543
      ],
      "uses": [],
      "idx": 544
    },
    {
      "path": "packages/charts/src/draw/sprite/Arrow.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 545
    },
    {
      "path": "packages/charts/src/draw/sprite/Composite.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 546
    },
    {
      "path": "packages/charts/src/draw/sprite/Cross.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 547
    },
    {
      "path": "packages/charts/src/draw/sprite/Diamond.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 548
    },
    {
      "path": "packages/charts/src/draw/sprite/Ellipse.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 549
    },
    {
      "path": "packages/charts/src/draw/sprite/EllipticalArc.js",
      "requires": [
        549
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "packages/charts/src/draw/sprite/Rect.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 551
    },
    {
      "path": "packages/charts/src/draw/sprite/Image.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 552
    },
    {
      "path": "packages/charts/src/draw/sprite/Instancing.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 553
    },
    {
      "path": "packages/charts/src/draw/sprite/Line.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 554
    },
    {
      "path": "packages/charts/src/draw/sprite/Plus.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 555
    },
    {
      "path": "packages/charts/src/draw/sprite/Sector.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 556
    },
    {
      "path": "packages/charts/src/draw/sprite/Square.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 557
    },
    {
      "path": "packages/charts/src/draw/TextMeasurer.js",
      "requires": [
        314
      ],
      "uses": [
        42
      ],
      "idx": 558
    },
    {
      "path": "packages/charts/src/draw/sprite/Text.js",
      "requires": [
        524,
        538,
        558
      ],
      "uses": [
        42,
        531
      ],
      "idx": 559
    },
    {
      "path": "packages/charts/src/draw/sprite/Tick.js",
      "requires": [
        554
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "packages/charts/src/draw/sprite/Triangle.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "packages/charts/src/draw/gradient/Linear.js",
      "requires": [
        524,
        527
      ],
      "uses": [
        526
      ],
      "idx": 562
    },
    {
      "path": "packages/charts/src/draw/gradient/Radial.js",
      "requires": [
        527
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "packages/charts/src/draw/Surface.js",
      "requires": [
        523,
        525,
        526,
        527,
        528,
        529,
        530,
        531,
        538,
        541,
        543,
        544,
        545,
        546,
        547,
        548,
        549,
        550,
        551,
        552,
        553,
        554,
        555,
        556,
        557,
        559,
        560,
        561,
        562,
        563
      ],
      "uses": [
        42,
        569
      ],
      "idx": 564
    },
    {
      "path": "packages/charts/src/draw/overrides/Surface.js",
      "requires": [],
      "uses": [
        538
      ],
      "idx": 565
    },
    {
      "path": "packages/charts/src/draw/engine/SvgContext.js",
      "requires": [
        524
      ],
      "uses": [
        531,
        539
      ],
      "idx": 566
    },
    {
      "path": "packages/charts/src/draw/engine/Svg.js",
      "requires": [
        564,
        566
      ],
      "uses": [],
      "idx": 567
    },
    {
      "path": "packages/charts/src/draw/engine/excanvas.js",
      "requires": [],
      "uses": [],
      "idx": 568
    },
    {
      "path": "packages/charts/src/draw/engine/Canvas.js",
      "requires": [
        524,
        535,
        564,
        568
      ],
      "uses": [
        42,
        531
      ],
      "idx": 569
    },
    {
      "path": "packages/charts/src/draw/Container.js",
      "requires": [
        522,
        528,
        564,
        567,
        569
      ],
      "uses": [
        44,
        243,
        535
      ],
      "idx": 570
    },
    {
      "path": "packages/charts/src/chart/theme/Base.js",
      "requires": [
        68,
        524
      ],
      "uses": [],
      "idx": 571
    },
    {
      "path": "packages/charts/src/chart/theme/Default.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 572
    },
    {
      "path": "packages/charts/src/chart/Markers.js",
      "requires": [
        553
      ],
      "uses": [],
      "idx": 573
    },
    {
      "path": "packages/charts/src/chart/label/Callout.js",
      "requires": [
        532
      ],
      "uses": [],
      "idx": 574
    },
    {
      "path": "packages/charts/src/chart/label/Label.js",
      "requires": [
        559,
        574
      ],
      "uses": [],
      "idx": 575
    },
    {
      "path": "packages/charts/src/chart/series/Series.js",
      "requires": [
        4,
        48,
        514,
        573,
        575
      ],
      "uses": [
        11,
        119,
        524,
        553
      ],
      "idx": 576
    },
    {
      "path": "packages/charts/src/chart/MarkerHolder.js",
      "requires": [
        0
      ],
      "uses": [
        531
      ],
      "idx": 577
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis.js",
      "requires": [
        538,
        559,
        577
      ],
      "uses": [
        526,
        531
      ],
      "idx": 578
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Segmenter.js",
      "requires": [],
      "uses": [],
      "idx": 579
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Names.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 580
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Numeric.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Time.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 582
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Layout.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 583
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Discrete.js",
      "requires": [
        583
      ],
      "uses": [],
      "idx": 584
    },
    {
      "path": "packages/charts/src/chart/axis/layout/CombineDuplicate.js",
      "requires": [
        584
      ],
      "uses": [],
      "idx": 585
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Continuous.js",
      "requires": [
        583
      ],
      "uses": [],
      "idx": 586
    },
    {
      "path": "packages/charts/src/chart/axis/Axis.js",
      "requires": [
        4,
        578,
        579,
        580,
        581,
        582,
        583,
        584,
        585,
        586
      ],
      "uses": [
        11,
        553,
        559,
        573
      ],
      "idx": 587
    },
    {
      "path": "packages/charts/src/chart/Legend.js",
      "requires": [
        519
      ],
      "uses": [],
      "idx": 588
    },
    {
      "path": "packages/charts/src/chart/AbstractChart.js",
      "requires": [
        116,
        119,
        520,
        570,
        572,
        576,
        587,
        588,
        590
      ],
      "uses": [
        11,
        45,
        68,
        535
      ],
      "idx": 589
    },
    {
      "path": "packages/charts/modern/overrides/AbstractChart.js",
      "requires": [],
      "uses": [],
      "idx": 590
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 591
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 592
    },
    {
      "path": "packages/charts/src/chart/CartesianChart.js",
      "requires": [
        589,
        591,
        592
      ],
      "uses": [
        45
      ],
      "idx": 593
    },
    {
      "path": "packages/charts/src/chart/grid/CircularGrid.js",
      "requires": [
        543
      ],
      "uses": [],
      "idx": 594
    },
    {
      "path": "packages/charts/src/chart/grid/RadialGrid.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 595
    },
    {
      "path": "packages/charts/src/chart/PolarChart.js",
      "requires": [
        589,
        594,
        595
      ],
      "uses": [
        526
      ],
      "idx": 596
    },
    {
      "path": "packages/charts/src/chart/SpaceFillingChart.js",
      "requires": [
        589
      ],
      "uses": [],
      "idx": 597
    },
    {
      "path": "packages/charts/src/chart/axis/Axis3D.js",
      "requires": [
        587
      ],
      "uses": [],
      "idx": 598
    },
    {
      "path": "packages/charts/src/chart/axis/Category.js",
      "requires": [
        580,
        585,
        587
      ],
      "uses": [],
      "idx": 599
    },
    {
      "path": "packages/charts/src/chart/axis/Category3D.js",
      "requires": [
        580,
        585,
        598
      ],
      "uses": [],
      "idx": 600
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric.js",
      "requires": [
        581,
        586,
        587
      ],
      "uses": [],
      "idx": 601
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric3D.js",
      "requires": [
        581,
        586,
        598
      ],
      "uses": [],
      "idx": 602
    },
    {
      "path": "packages/charts/src/chart/axis/Time.js",
      "requires": [
        582,
        586,
        601
      ],
      "uses": [],
      "idx": 603
    },
    {
      "path": "packages/charts/src/chart/axis/Time3D.js",
      "requires": [
        582,
        586,
        602
      ],
      "uses": [],
      "idx": 604
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis3D.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 605
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid3D.js",
      "requires": [
        591
      ],
      "uses": [],
      "idx": 606
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid3D.js",
      "requires": [
        592
      ],
      "uses": [],
      "idx": 607
    },
    {
      "path": "packages/charts/src/chart/interactions/CrossZoom.js",
      "requires": [
        520
      ],
      "uses": [
        319
      ],
      "idx": 608
    },
    {
      "path": "packages/charts/src/chart/interactions/Crosshair.js",
      "requires": [
        520,
        584,
        591,
        592,
        593
      ],
      "uses": [],
      "idx": 609
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemHighlight.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 610
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemEdit.js",
      "requires": [
        514,
        610
      ],
      "uses": [],
      "idx": 611
    },
    {
      "path": "packages/charts/src/chart/interactions/PanZoom.js",
      "requires": [
        209,
        319,
        344,
        520,
        535
      ],
      "uses": [],
      "idx": 612
    },
    {
      "path": "packages/charts/src/chart/interactions/Rotate.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 613
    },
    {
      "path": "packages/charts/src/chart/interactions/RotatePie3D.js",
      "requires": [
        613
      ],
      "uses": [],
      "idx": 614
    },
    {
      "path": "packages/charts/src/chart/plugin/ItemEvents.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 615
    },
    {
      "path": "packages/charts/src/chart/series/Cartesian.js",
      "requires": [
        576
      ],
      "uses": [],
      "idx": 616
    },
    {
      "path": "packages/charts/src/chart/series/StackedCartesian.js",
      "requires": [
        616
      ],
      "uses": [],
      "idx": 617
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Series.js",
      "requires": [
        538,
        577
      ],
      "uses": [],
      "idx": 618
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Cartesian.js",
      "requires": [
        618
      ],
      "uses": [],
      "idx": 619
    },
    {
      "path": "packages/charts/src/chart/series/sprite/StackedCartesian.js",
      "requires": [
        619
      ],
      "uses": [],
      "idx": 620
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Area.js",
      "requires": [
        620
      ],
      "uses": [],
      "idx": 621
    },
    {
      "path": "packages/charts/src/chart/series/Area.js",
      "requires": [
        617,
        621
      ],
      "uses": [],
      "idx": 622
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar.js",
      "requires": [
        620
      ],
      "uses": [
        526
      ],
      "idx": 623
    },
    {
      "path": "packages/charts/src/chart/series/Bar.js",
      "requires": [
        551,
        617,
        623
      ],
      "uses": [],
      "idx": 624
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar3D.js",
      "requires": [
        562,
        623
      ],
      "uses": [],
      "idx": 625
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Box.js",
      "requires": [
        538
      ],
      "uses": [
        524,
        562
      ],
      "idx": 626
    },
    {
      "path": "packages/charts/src/chart/series/Bar3D.js",
      "requires": [
        624,
        625,
        626
      ],
      "uses": [],
      "idx": 627
    },
    {
      "path": "packages/charts/src/draw/LimitedCache.js",
      "requires": [],
      "uses": [],
      "idx": 628
    },
    {
      "path": "packages/charts/src/draw/SegmentTree.js",
      "requires": [],
      "uses": [],
      "idx": 629
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Aggregative.js",
      "requires": [
        619,
        628,
        629
      ],
      "uses": [],
      "idx": 630
    },
    {
      "path": "packages/charts/src/chart/series/sprite/CandleStick.js",
      "requires": [
        630
      ],
      "uses": [
        551
      ],
      "idx": 631
    },
    {
      "path": "packages/charts/src/chart/series/CandleStick.js",
      "requires": [
        616,
        631
      ],
      "uses": [],
      "idx": 632
    },
    {
      "path": "packages/charts/src/chart/series/Polar.js",
      "requires": [
        576
      ],
      "uses": [],
      "idx": 633
    },
    {
      "path": "packages/charts/src/chart/series/Gauge.js",
      "requires": [
        556,
        633
      ],
      "uses": [],
      "idx": 634
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Line.js",
      "requires": [
        630
      ],
      "uses": [
        526
      ],
      "idx": 635
    },
    {
      "path": "packages/charts/src/chart/series/Line.js",
      "requires": [
        616,
        635
      ],
      "uses": [],
      "idx": 636
    },
    {
      "path": "packages/charts/src/chart/series/sprite/PieSlice.js",
      "requires": [
        556,
        577
      ],
      "uses": [],
      "idx": 637
    },
    {
      "path": "packages/charts/src/chart/series/Pie.js",
      "requires": [
        633,
        637
      ],
      "uses": [],
      "idx": 638
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Pie3DPart.js",
      "requires": [
        541,
        577
      ],
      "uses": [
        524,
        529,
        562,
        563
      ],
      "idx": 639
    },
    {
      "path": "packages/charts/src/draw/PathUtil.js",
      "requires": [
        540,
        542,
        565
      ],
      "uses": [],
      "idx": 640
    },
    {
      "path": "packages/charts/src/chart/series/Pie3D.js",
      "requires": [
        633,
        639,
        640
      ],
      "uses": [
        524
      ],
      "idx": 641
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Polar.js",
      "requires": [
        618
      ],
      "uses": [],
      "idx": 642
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Radar.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 643
    },
    {
      "path": "packages/charts/src/chart/series/Radar.js",
      "requires": [
        633,
        643
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Scatter.js",
      "requires": [
        619
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "packages/charts/src/chart/series/Scatter.js",
      "requires": [
        616,
        645
      ],
      "uses": [],
      "idx": 646
    },
    {
      "path": "packages/charts/src/chart/theme/Blue.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 647
    },
    {
      "path": "packages/charts/src/chart/theme/BlueGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 648
    },
    {
      "path": "packages/charts/src/chart/theme/Category1.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 649
    },
    {
      "path": "packages/charts/src/chart/theme/Category1Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 650
    },
    {
      "path": "packages/charts/src/chart/theme/Category2.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "packages/charts/src/chart/theme/Category2Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 652
    },
    {
      "path": "packages/charts/src/chart/theme/Category3.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 653
    },
    {
      "path": "packages/charts/src/chart/theme/Category3Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "packages/charts/src/chart/theme/Category4.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 655
    },
    {
      "path": "packages/charts/src/chart/theme/Category4Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 656
    },
    {
      "path": "packages/charts/src/chart/theme/Category5.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 657
    },
    {
      "path": "packages/charts/src/chart/theme/Category5Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 658
    },
    {
      "path": "packages/charts/src/chart/theme/Category6.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "packages/charts/src/chart/theme/Category6Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 660
    },
    {
      "path": "packages/charts/src/chart/theme/DefaultGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 661
    },
    {
      "path": "packages/charts/src/chart/theme/Green.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 662
    },
    {
      "path": "packages/charts/src/chart/theme/GreenGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 663
    },
    {
      "path": "packages/charts/src/chart/theme/Midnight.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 664
    },
    {
      "path": "packages/charts/src/chart/theme/Muted.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 665
    },
    {
      "path": "packages/charts/src/chart/theme/Purple.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 666
    },
    {
      "path": "packages/charts/src/chart/theme/PurpleGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 667
    },
    {
      "path": "packages/charts/src/chart/theme/Red.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 668
    },
    {
      "path": "packages/charts/src/chart/theme/RedGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 669
    },
    {
      "path": "packages/charts/src/chart/theme/Sky.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 670
    },
    {
      "path": "packages/charts/src/chart/theme/SkyGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 671
    },
    {
      "path": "packages/charts/src/chart/theme/Yellow.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 672
    },
    {
      "path": "packages/charts/src/chart/theme/YellowGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 673
    },
    {
      "path": "packages/charts/src/draw/Point.js",
      "requires": [
        526,
        531
      ],
      "uses": [],
      "idx": 674
    },
    {
      "path": "packages/charts/src/draw/plugin/SpriteEvents.js",
      "requires": [
        306,
        640
      ],
      "uses": [],
      "idx": 675
    },
    {
      "path": "packages/ux/modern/src/device/analytics/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 676
    },
    {
      "path": "packages/ux/modern/src/device/analytics/Cordova.js",
      "requires": [
        676
      ],
      "uses": [],
      "idx": 677
    },
    {
      "path": "packages/ux/modern/src/device/Analytics.js",
      "requires": [
        374,
        676,
        677
      ],
      "uses": [],
      "idx": 678
    },
    {
      "path": "packages/ux/modern/src/device/twitter/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 679
    },
    {
      "path": "packages/ux/modern/src/device/twitter/Cordova.js",
      "requires": [],
      "uses": [],
      "idx": 680
    },
    {
      "path": "packages/ux/modern/src/device/Twitter.js",
      "requires": [
        374,
        679,
        680
      ],
      "uses": [],
      "idx": 681
    },
    {
      "path": "packages/ux/src/ajax/Simlet.js",
      "requires": [],
      "uses": [
        685
      ],
      "idx": 682
    },
    {
      "path": "packages/ux/src/ajax/DataSimlet.js",
      "requires": [
        682
      ],
      "uses": [
        114
      ],
      "idx": 683
    },
    {
      "path": "packages/ux/src/ajax/JsonSimlet.js",
      "requires": [
        683
      ],
      "uses": [],
      "idx": 684
    },
    {
      "path": "packages/ux/src/ajax/SimXhr.js",
      "requires": [],
      "uses": [],
      "idx": 685
    },
    {
      "path": "packages/ux/src/ajax/SimManager.js",
      "requires": [
        8,
        682,
        684,
        685
      ],
      "uses": [
        231
      ],
      "idx": 686
    },
    {
      "path": "packages/ux/src/ajax/XmlSimlet.js",
      "requires": [
        683
      ],
      "uses": [
        55
      ],
      "idx": 687
    },
    {
      "path": "packages/ux/src/event/Driver.js",
      "requires": [
        63
      ],
      "uses": [],
      "idx": 688
    },
    {
      "path": "packages/ux/src/event/Maker.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 689
    },
    {
      "path": "packages/ux/src/event/Player.js",
      "requires": [
        688
      ],
      "uses": [],
      "idx": 690
    },
    {
      "path": "packages/ux/src/event/Recorder.js",
      "requires": [
        688
      ],
      "uses": [
        26
      ],
      "idx": 691
    },
    {
      "path": "packages/ux/src/google/Api.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 692
    },
    {
      "path": "packages/ux/src/google/Feeds.js",
      "requires": [
        692
      ],
      "uses": [],
      "idx": 693
    }
  ],
  "classes": {
    "Ext.AbstractComponent": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.AbstractPlugin": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.ActionSheet": {
      "idx": 321,
      "alias": [
        "widget.actionsheet"
      ],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.Anim": {
      "idx": 322,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.Audio": {
      "idx": 324,
      "alias": [
        "widget.audio"
      ],
      "alternates": []
    },
    "Ext.BingMap": {
      "idx": 327,
      "alias": [
        "widget.bingmap"
      ],
      "alternates": []
    },
    "Ext.Button": {
      "idx": 319,
      "alias": [
        "widget.button"
      ],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 149,
      "alias": [
        "widget.component"
      ],
      "alternates": [
        "Ext.lib.Component"
      ]
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
    "Ext.Container": {
      "idx": 189,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.lib.Container",
        "Ext.container.Container"
      ]
    },
    "Ext.Decorator": {
      "idx": 328,
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
    "Ext.GlobalEvents": {
      "idx": 43,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 329,
      "alias": [
        "widget.image",
        "widget.img"
      ],
      "alternates": []
    },
    "Ext.Label": {
      "idx": 330,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 190,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Map": {
      "idx": 326,
      "alias": [
        "widget.map"
      ],
      "alternates": []
    },
    "Ext.Mask": {
      "idx": 186,
      "alias": [
        "widget.mask"
      ],
      "alternates": []
    },
    "Ext.Media": {
      "idx": 323,
      "alias": [
        "widget.media"
      ],
      "alternates": []
    },
    "Ext.Menu": {
      "idx": 331,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.MessageBox": {
      "idx": 340,
      "alias": [],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.Panel": {
      "idx": 318,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.lib.Panel"
      ]
    },
    "Ext.ProgressIndicator": {
      "idx": 342,
      "alias": [
        "widget.progressindicator"
      ],
      "alternates": []
    },
    "Ext.Promise": {
      "idx": 343,
      "alias": [],
      "alternates": []
    },
    "Ext.SegmentedButton": {
      "idx": 344,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.Sheet": {
      "idx": 320,
      "alias": [
        "widget.sheet"
      ],
      "alternates": []
    },
    "Ext.Sortable": {
      "idx": 345,
      "alias": [],
      "alternates": []
    },
    "Ext.Spacer": {
      "idx": 333,
      "alias": [
        "widget.spacer"
      ],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.Title": {
      "idx": 332,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.TitleBar": {
      "idx": 346,
      "alias": [
        "widget.titlebar"
      ],
      "alternates": []
    },
    "Ext.Toast": {
      "idx": 347,
      "alias": [],
      "alternates": []
    },
    "Ext.Toolbar": {
      "idx": 334,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": []
    },
    "Ext.Video": {
      "idx": 348,
      "alias": [
        "widget.video"
      ],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 50,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Application": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 125,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 222,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 218,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 215,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 217,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 216,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 219,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 223,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 226,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Behavior": {
      "idx": 145,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Draggable": {
      "idx": 148,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Translatable": {
      "idx": 146,
      "alias": [],
      "alternates": []
    },
    "Ext.carousel.Carousel": {
      "idx": 354,
      "alias": [
        "widget.carousel"
      ],
      "alternates": [
        "Ext.Carousel"
      ]
    },
    "Ext.carousel.Indicator": {
      "idx": 352,
      "alias": [
        "widget.carouselindicator"
      ],
      "alternates": [
        "Ext.Carousel.Indicator"
      ]
    },
    "Ext.carousel.Infinite": {
      "idx": 355,
      "alias": [],
      "alternates": []
    },
    "Ext.carousel.Item": {
      "idx": 351,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.AbstractChart": {
      "idx": 589,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.CartesianChart": {
      "idx": 593,
      "alias": [
        "widget.cartesian",
        "widget.chart"
      ],
      "alternates": [
        "Ext.chart.Chart"
      ]
    },
    "Ext.chart.Legend": {
      "idx": 588,
      "alias": [
        "widget.legend"
      ],
      "alternates": []
    },
    "Ext.chart.LegendBase": {
      "idx": 519,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.MarkerHolder": {
      "idx": 577,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.Markers": {
      "idx": 573,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.PolarChart": {
      "idx": 596,
      "alias": [
        "widget.polar"
      ],
      "alternates": []
    },
    "Ext.chart.SpaceFillingChart": {
      "idx": 597,
      "alias": [
        "widget.spacefilling"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis": {
      "idx": 587,
      "alias": [
        "widget.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis3D": {
      "idx": 598,
      "alias": [
        "widget.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category": {
      "idx": 599,
      "alias": [
        "axis.category"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category3D": {
      "idx": 600,
      "alias": [
        "axis.category3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric": {
      "idx": 601,
      "alias": [
        "axis.numeric",
        "axis.radial"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric3D": {
      "idx": 602,
      "alias": [
        "axis.numeric3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time": {
      "idx": 603,
      "alias": [
        "axis.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time3D": {
      "idx": 604,
      "alias": [
        "axis.time3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.CombineDuplicate": {
      "idx": 585,
      "alias": [
        "axisLayout.combineDuplicate"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Continuous": {
      "idx": 586,
      "alias": [
        "axisLayout.continuous"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Discrete": {
      "idx": 584,
      "alias": [
        "axisLayout.discrete"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Layout": {
      "idx": 583,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Names": {
      "idx": 580,
      "alias": [
        "segmenter.names"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Numeric": {
      "idx": 581,
      "alias": [
        "segmenter.numeric"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Segmenter": {
      "idx": 579,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Time": {
      "idx": 582,
      "alias": [
        "segmenter.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis": {
      "idx": 578,
      "alias": [
        "sprite.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis3D": {
      "idx": 605,
      "alias": [
        "sprite.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.CircularGrid": {
      "idx": 594,
      "alias": [
        "grid.circular"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid": {
      "idx": 591,
      "alias": [
        "grid.horizontal"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid3D": {
      "idx": 606,
      "alias": [
        "grid.horizontal3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.RadialGrid": {
      "idx": 595,
      "alias": [
        "grid.radial"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid": {
      "idx": 592,
      "alias": [
        "grid.vertical"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid3D": {
      "idx": 607,
      "alias": [
        "grid.vertical3d"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Abstract": {
      "idx": 520,
      "alias": [
        "widget.interaction"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.CrossZoom": {
      "idx": 608,
      "alias": [
        "interaction.crosszoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Crosshair": {
      "idx": 609,
      "alias": [
        "interaction.crosshair"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemEdit": {
      "idx": 611,
      "alias": [
        "interaction.itemedit"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemHighlight": {
      "idx": 610,
      "alias": [
        "interaction.itemhighlight"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemInfo": {
      "idx": 521,
      "alias": [
        "interaction.iteminfo"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.PanZoom": {
      "idx": 612,
      "alias": [
        "interaction.panzoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Rotate": {
      "idx": 613,
      "alias": [
        "interaction.rotate"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.RotatePie3D": {
      "idx": 614,
      "alias": [
        "interaction.rotatePie3d"
      ],
      "alternates": []
    },
    "Ext.chart.label.Callout": {
      "idx": 574,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.label.Label": {
      "idx": 575,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.overrides.AbstractChart": {
      "idx": 590,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.plugin.ItemEvents": {
      "idx": 615,
      "alias": [
        "plugin.chartitemevents"
      ],
      "alternates": []
    },
    "Ext.chart.series.Area": {
      "idx": 622,
      "alias": [
        "series.area"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar": {
      "idx": 624,
      "alias": [
        "series.bar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar3D": {
      "idx": 627,
      "alias": [
        "series.bar3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.CandleStick": {
      "idx": 632,
      "alias": [
        "series.candlestick"
      ],
      "alternates": []
    },
    "Ext.chart.series.Cartesian": {
      "idx": 616,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Gauge": {
      "idx": 634,
      "alias": [
        "series.gauge"
      ],
      "alternates": []
    },
    "Ext.chart.series.Line": {
      "idx": 636,
      "alias": [
        "series.line"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie": {
      "idx": 638,
      "alias": [
        "series.pie"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie3D": {
      "idx": 641,
      "alias": [
        "series.pie3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.Polar": {
      "idx": 633,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Radar": {
      "idx": 644,
      "alias": [
        "series.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Scatter": {
      "idx": 646,
      "alias": [
        "series.scatter"
      ],
      "alternates": []
    },
    "Ext.chart.series.Series": {
      "idx": 576,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.StackedCartesian": {
      "idx": 617,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Aggregative": {
      "idx": 630,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Area": {
      "idx": 621,
      "alias": [
        "sprite.areaSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar": {
      "idx": 623,
      "alias": [
        "sprite.barSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar3D": {
      "idx": 625,
      "alias": [
        "sprite.bar3dSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Box": {
      "idx": 626,
      "alias": [
        "sprite.box"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.CandleStick": {
      "idx": 631,
      "alias": [
        "sprite.candlestickSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Cartesian": {
      "idx": 619,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Line": {
      "idx": 635,
      "alias": [
        "sprite.lineSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Pie3DPart": {
      "idx": 639,
      "alias": [
        "sprite.pie3dPart"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.PieSlice": {
      "idx": 637,
      "alias": [
        "sprite.pieslice"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Polar": {
      "idx": 642,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Radar": {
      "idx": 643,
      "alias": [
        "sprite.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Scatter": {
      "idx": 645,
      "alias": [
        "sprite.scatterSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Series": {
      "idx": 618,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.StackedCartesian": {
      "idx": 620,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Base": {
      "idx": 571,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Blue": {
      "idx": 647,
      "alias": [
        "chart.theme.Blue",
        "chart.theme.blue"
      ],
      "alternates": []
    },
    "Ext.chart.theme.BlueGradients": {
      "idx": 648,
      "alias": [
        "chart.theme.Blue:gradients",
        "chart.theme.blue-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1": {
      "idx": 649,
      "alias": [
        "chart.theme.Category1",
        "chart.theme.category1"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1Gradients": {
      "idx": 650,
      "alias": [
        "chart.theme.Category1:gradients",
        "chart.theme.category1-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2": {
      "idx": 651,
      "alias": [
        "chart.theme.Category2",
        "chart.theme.category2"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2Gradients": {
      "idx": 652,
      "alias": [
        "chart.theme.Category2:gradients",
        "chart.theme.category2-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3": {
      "idx": 653,
      "alias": [
        "chart.theme.Category3",
        "chart.theme.category3"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3Gradients": {
      "idx": 654,
      "alias": [
        "chart.theme.Category3:gradients",
        "chart.theme.category3-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4": {
      "idx": 655,
      "alias": [
        "chart.theme.Category4",
        "chart.theme.category4"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4Gradients": {
      "idx": 656,
      "alias": [
        "chart.theme.Category4:gradients",
        "chart.theme.category4-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5": {
      "idx": 657,
      "alias": [
        "chart.theme.Category5",
        "chart.theme.category5"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5Gradients": {
      "idx": 658,
      "alias": [
        "chart.theme.Category5:gradients",
        "chart.theme.category5-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6": {
      "idx": 659,
      "alias": [
        "chart.theme.Category6",
        "chart.theme.category6"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6Gradients": {
      "idx": 660,
      "alias": [
        "chart.theme.Category6:gradients",
        "chart.theme.category6-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Default": {
      "idx": 572,
      "alias": [
        "chart.theme.Base",
        "chart.theme.default"
      ],
      "alternates": []
    },
    "Ext.chart.theme.DefaultGradients": {
      "idx": 661,
      "alias": [
        "chart.theme.Base:gradients",
        "chart.theme.default-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Green": {
      "idx": 662,
      "alias": [
        "chart.theme.Green",
        "chart.theme.green"
      ],
      "alternates": []
    },
    "Ext.chart.theme.GreenGradients": {
      "idx": 663,
      "alias": [
        "chart.theme.Green:gradients",
        "chart.theme.green-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Midnight": {
      "idx": 664,
      "alias": [
        "chart.theme.Midnight",
        "chart.theme.midnight"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Muted": {
      "idx": 665,
      "alias": [
        "chart.theme.Muted",
        "chart.theme.muted"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Purple": {
      "idx": 666,
      "alias": [
        "chart.theme.Purple",
        "chart.theme.purple"
      ],
      "alternates": []
    },
    "Ext.chart.theme.PurpleGradients": {
      "idx": 667,
      "alias": [
        "chart.theme.Purple:gradients",
        "chart.theme.purple-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Red": {
      "idx": 668,
      "alias": [
        "chart.theme.Red",
        "chart.theme.red"
      ],
      "alternates": []
    },
    "Ext.chart.theme.RedGradients": {
      "idx": 669,
      "alias": [
        "chart.theme.Red:gradients",
        "chart.theme.red-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Sky": {
      "idx": 670,
      "alias": [
        "chart.theme.Sky",
        "chart.theme.sky"
      ],
      "alternates": []
    },
    "Ext.chart.theme.SkyGradients": {
      "idx": 671,
      "alias": [
        "chart.theme.Sky:gradients",
        "chart.theme.sky-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Yellow": {
      "idx": 672,
      "alias": [
        "chart.theme.Yellow",
        "chart.theme.yellow"
      ],
      "alternates": []
    },
    "Ext.chart.theme.YellowGradients": {
      "idx": 673,
      "alias": [
        "chart.theme.Yellow:gradients",
        "chart.theme.yellow-gradients"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 118,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 228,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 221,
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
      "idx": 230,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 83,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 231,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 233,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 234,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 99,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 235,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 238,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 227,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 239,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 100,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 116,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 119,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 237,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 240,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 241,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 242,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 247,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 92,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 93,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 91,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 94,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 95,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 96,
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
      "idx": 97,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 248,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 98,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 249,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 85,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 86,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 84,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 87,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 88,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 109,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 104,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 229,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 232,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 251,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 105,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 103,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 252,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 108,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 253,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 250,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 117,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 110,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 101,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 245,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 74,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 77,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 76,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 79,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 73,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 80,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 254,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 256,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 258,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 255,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 259,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 260,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 257,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 261,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 262,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 90,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 111,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 102,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 246,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dataview.DataView": {
      "idx": 359,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.dataview.IndexBar": {
      "idx": 360,
      "alias": [],
      "alternates": [
        "Ext.IndexBar"
      ]
    },
    "Ext.dataview.List": {
      "idx": 365,
      "alias": [
        "widget.list"
      ],
      "alternates": [
        "Ext.List"
      ]
    },
    "Ext.dataview.ListItemHeader": {
      "idx": 361,
      "alias": [
        "widget.listitemheader"
      ],
      "alternates": []
    },
    "Ext.dataview.NestedList": {
      "idx": 366,
      "alias": [
        "widget.nestedlist"
      ],
      "alternates": [
        "Ext.NestedList"
      ]
    },
    "Ext.dataview.component.Container": {
      "idx": 357,
      "alias": [],
      "alternates": []
    },
    "Ext.dataview.component.DataItem": {
      "idx": 356,
      "alias": [
        "widget.dataitem"
      ],
      "alternates": []
    },
    "Ext.dataview.component.ListItem": {
      "idx": 362,
      "alias": [
        "widget.listitem"
      ],
      "alternates": []
    },
    "Ext.dataview.component.SimpleListItem": {
      "idx": 363,
      "alias": [
        "widget.simplelistitem"
      ],
      "alternates": []
    },
    "Ext.dataview.element.Container": {
      "idx": 358,
      "alias": [],
      "alternates": []
    },
    "Ext.dataview.element.List": {
      "idx": 367,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Accelerometer": {
      "idx": 371,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Browser": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Camera": {
      "idx": 383,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Capture": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Communicator": {
      "idx": 374,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Compass": {
      "idx": 390,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Connection": {
      "idx": 395,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Contacts": {
      "idx": 399,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Device": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.device.FileSystem": {
      "idx": 411,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Geolocation": {
      "idx": 416,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Globalization": {
      "idx": 420,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Media": {
      "idx": 423,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Notification": {
      "idx": 429,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Orientation": {
      "idx": 433,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Purchases": {
      "idx": 435,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Purchases.Product": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Push": {
      "idx": 439,
      "alias": [],
      "alternates": []
    },
    "Ext.device.SQLite": {
      "idx": 441,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Splashscreen": {
      "idx": 445,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Storage": {
      "idx": 452,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Tunnel": {
      "idx": 457,
      "alias": [],
      "alternates": []
    },
    "Ext.device.accelerometer.Abstract": {
      "idx": 368,
      "alias": [],
      "alternates": []
    },
    "Ext.device.accelerometer.Cordova": {
      "idx": 369,
      "alias": [],
      "alternates": [
        "Ext.device.accelerometer.PhoneGap"
      ]
    },
    "Ext.device.accelerometer.Simulator": {
      "idx": 370,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Abstract": {
      "idx": 375,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Cordova": {
      "idx": 376,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Simulator": {
      "idx": 377,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Window": {
      "idx": 458,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Abstract": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Cordova": {
      "idx": 380,
      "alias": [],
      "alternates": [
        "Ext.device.camera.PhoneGap"
      ]
    },
    "Ext.device.camera.Sencha": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Simulator": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.device.capture.Abstract": {
      "idx": 385,
      "alias": [],
      "alternates": [
        "Ext.device.capture.Simulator"
      ]
    },
    "Ext.device.capture.Cordova": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.device.communicator.Android": {
      "idx": 373,
      "alias": [],
      "alternates": []
    },
    "Ext.device.communicator.Default": {
      "idx": 372,
      "alias": [],
      "alternates": []
    },
    "Ext.device.compass.Abstract": {
      "idx": 387,
      "alias": [],
      "alternates": []
    },
    "Ext.device.compass.Cordova": {
      "idx": 388,
      "alias": [],
      "alternates": [
        "Ext.device.compass.PhoneGap"
      ]
    },
    "Ext.device.compass.Simulator": {
      "idx": 389,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Abstract": {
      "idx": 391,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Cordova": {
      "idx": 393,
      "alias": [],
      "alternates": [
        "Ext.device.connection.PhoneGap"
      ]
    },
    "Ext.device.connection.Sencha": {
      "idx": 392,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Simulator": {
      "idx": 394,
      "alias": [],
      "alternates": []
    },
    "Ext.device.contacts.Abstract": {
      "idx": 396,
      "alias": [],
      "alternates": []
    },
    "Ext.device.contacts.Cordova": {
      "idx": 398,
      "alias": [],
      "alternates": [
        "Ext.device.contacts.PhoneGap"
      ]
    },
    "Ext.device.contacts.Sencha": {
      "idx": 397,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Abstract": {
      "idx": 400,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Cordova": {
      "idx": 401,
      "alias": [],
      "alternates": [
        "Ext.device.device.PhoneGap"
      ]
    },
    "Ext.device.device.Sencha": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Simulator": {
      "idx": 403,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Abstract": {
      "idx": 405,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Chrome": {
      "idx": 409,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Cordova": {
      "idx": 408,
      "alias": [],
      "alternates": [
        "Ext.device.filesystem.PhoneGap"
      ]
    },
    "Ext.device.filesystem.DirectoryEntry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Entry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.FileEntry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.FileSystem": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.HTML5": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Sencha": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Simulator": {
      "idx": 410,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Abstract": {
      "idx": 412,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Cordova": {
      "idx": 413,
      "alias": [],
      "alternates": [
        "Ext.device.geolocation.PhoneGap"
      ]
    },
    "Ext.device.geolocation.Sencha": {
      "idx": 414,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Simulator": {
      "idx": 415,
      "alias": [],
      "alternates": []
    },
    "Ext.device.globalization.Abstract": {
      "idx": 417,
      "alias": [],
      "alternates": []
    },
    "Ext.device.globalization.Cordova": {
      "idx": 418,
      "alias": [],
      "alternates": [
        "Ext.device.globalization.PhoneGap"
      ]
    },
    "Ext.device.globalization.Simulator": {
      "idx": 419,
      "alias": [],
      "alternates": []
    },
    "Ext.device.media.Abstract": {
      "idx": 421,
      "alias": [],
      "alternates": []
    },
    "Ext.device.media.Cordova": {
      "idx": 422,
      "alias": [],
      "alternates": [
        "Ext.device.media.PhoneGap"
      ]
    },
    "Ext.device.notification.Abstract": {
      "idx": 424,
      "alias": [],
      "alternates": []
    },
    "Ext.device.notification.Cordova": {
      "idx": 425,
      "alias": [],
      "alternates": [
        "Ext.device.notification.PhoneGap"
      ]
    },
    "Ext.device.notification.Sencha": {
      "idx": 426,
      "alias": [],
      "alternates": []
    },
    "Ext.device.notification.Simulator": {
      "idx": 428,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.Abstract": {
      "idx": 430,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.HTML5": {
      "idx": 431,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.Sencha": {
      "idx": 432,
      "alias": [],
      "alternates": []
    },
    "Ext.device.purchases.Purchase": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.purchases.Sencha": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Abstract": {
      "idx": 436,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Cordova": {
      "idx": 438,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Sencha": {
      "idx": 437,
      "alias": [],
      "alternates": []
    },
    "Ext.device.splashscreen.Abstract": {
      "idx": 442,
      "alias": [],
      "alternates": []
    },
    "Ext.device.splashscreen.Cordova": {
      "idx": 443,
      "alias": [],
      "alternates": [
        "Ext.device.splashscreen.PhoneGap"
      ]
    },
    "Ext.device.splashscreen.Simulator": {
      "idx": 444,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.Database": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLResultSet": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLResultSetRowList": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLTransaction": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.Sencha": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Abstract": {
      "idx": 446,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Cordova": {
      "idx": 450,
      "alias": [],
      "alternates": [
        "Ext.device.storage.PhoneGap"
      ]
    },
    "Ext.device.storage.HTML5.Database": {
      "idx": 448,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.HTML5.HTML5": {
      "idx": 449,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.HTML5.SQLStatement": {
      "idx": 447,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Simulator": {
      "idx": 451,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Abstract": {
      "idx": 453,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Connection": {
      "idx": 455,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Sencha": {
      "idx": 456,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Simulator": {
      "idx": 454,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 263,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 265,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 266,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 224,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 268,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 225,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 264,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 269,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 271,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 270,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.CompositeElement": {
      "idx": 274,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 273,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 42,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 272,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 243,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Query": {
      "idx": 244,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 19,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 20,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Animator": {
      "idx": 535,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Color": {
      "idx": 524,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Container": {
      "idx": 570,
      "alias": [
        "widget.draw"
      ],
      "alternates": [
        "Ext.draw.Component"
      ]
    },
    "Ext.draw.ContainerBase": {
      "idx": 522,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Draw": {
      "idx": 526,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.LimitedCache": {
      "idx": 628,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Matrix": {
      "idx": 531,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Path": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.PathUtil": {
      "idx": 640,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Point": {
      "idx": 674,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.SegmentTree": {
      "idx": 629,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Surface": {
      "idx": 564,
      "alias": [
        "widget.surface"
      ],
      "alternates": []
    },
    "Ext.draw.SurfaceBase": {
      "idx": 523,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TextMeasurer": {
      "idx": 558,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TimingFunctions": {
      "idx": 534,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Canvas": {
      "idx": 569,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Svg": {
      "idx": 567,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext": {
      "idx": 566,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext.Gradient": {
      "idx": 566,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Gradient": {
      "idx": 527,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.GradientDefinition": {
      "idx": 528,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Linear": {
      "idx": 562,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Radial": {
      "idx": 563,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Animation": {
      "idx": 536,
      "alias": [
        "modifier.animation"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Highlight": {
      "idx": 537,
      "alias": [
        "modifier.highlight"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Modifier": {
      "idx": 532,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Target": {
      "idx": 533,
      "alias": [
        "modifier.target"
      ],
      "alternates": []
    },
    "Ext.draw.overrides.Path": {
      "idx": 540,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.Surface": {
      "idx": 565,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.sprite.Path": {
      "idx": 542,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.plugin.SpriteEvents": {
      "idx": 675,
      "alias": [
        "plugin.spriteevents"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AnimationParser": {
      "idx": 525,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Arc": {
      "idx": 544,
      "alias": [
        "sprite.arc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Arrow": {
      "idx": 545,
      "alias": [
        "sprite.arrow"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeDefinition": {
      "idx": 530,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeParser": {
      "idx": 529,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Circle": {
      "idx": 543,
      "alias": [
        "sprite.circle"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Composite": {
      "idx": 546,
      "alias": [
        "sprite.composite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Cross": {
      "idx": 547,
      "alias": [
        "sprite.cross"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Diamond": {
      "idx": 548,
      "alias": [
        "sprite.diamond"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Ellipse": {
      "idx": 549,
      "alias": [
        "sprite.ellipse"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.EllipticalArc": {
      "idx": 550,
      "alias": [
        "sprite.ellipticalArc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Image": {
      "idx": 552,
      "alias": [
        "sprite.image"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Instancing": {
      "idx": 553,
      "alias": [
        "sprite.instancing"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Line": {
      "idx": 554,
      "alias": [
        "sprite.line"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Path": {
      "idx": 541,
      "alias": [
        "Ext.draw.Sprite",
        "sprite.path"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Plus": {
      "idx": 555,
      "alias": [
        "sprite.plus"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Rect": {
      "idx": 551,
      "alias": [
        "sprite.rect"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sector": {
      "idx": 556,
      "alias": [
        "sprite.sector"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sprite": {
      "idx": 538,
      "alias": [
        "sprite.sprite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Square": {
      "idx": 557,
      "alias": [
        "sprite.square"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Text": {
      "idx": 559,
      "alias": [
        "sprite.text"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Tick": {
      "idx": 560,
      "alias": [
        "sprite.tick"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Triangle": {
      "idx": 561,
      "alias": [
        "sprite.triangle"
      ],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 26,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 282,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 283,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 284,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 276,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 285,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 286,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 27,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 287,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 28,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.field.Checkbox": {
      "idx": 459,
      "alias": [
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.field.DatePicker": {
      "idx": 464,
      "alias": [
        "widget.datepickerfield"
      ],
      "alternates": [
        "Ext.form.DatePicker"
      ]
    },
    "Ext.field.DatePickerNative": {
      "idx": 465,
      "alias": [
        "widget.datepickernativefield"
      ],
      "alternates": [
        "Ext.form.DatePickerNative"
      ]
    },
    "Ext.field.Email": {
      "idx": 466,
      "alias": [
        "widget.emailfield"
      ],
      "alternates": [
        "Ext.form.Email"
      ]
    },
    "Ext.field.Field": {
      "idx": 336,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field"
      ]
    },
    "Ext.field.File": {
      "idx": 468,
      "alias": [
        "widget.filefield"
      ],
      "alternates": []
    },
    "Ext.field.FileInput": {
      "idx": 467,
      "alias": [
        "widget.fileinput"
      ],
      "alternates": []
    },
    "Ext.field.Hidden": {
      "idx": 469,
      "alias": [
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.field.Input": {
      "idx": 335,
      "alias": [
        "widget.input"
      ],
      "alternates": []
    },
    "Ext.field.Number": {
      "idx": 470,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.Number"
      ]
    },
    "Ext.field.Password": {
      "idx": 471,
      "alias": [
        "widget.passwordfield"
      ],
      "alternates": [
        "Ext.form.Password"
      ]
    },
    "Ext.field.Radio": {
      "idx": 472,
      "alias": [
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.field.Search": {
      "idx": 473,
      "alias": [
        "widget.searchfield"
      ],
      "alternates": [
        "Ext.form.Search"
      ]
    },
    "Ext.field.Select": {
      "idx": 462,
      "alias": [
        "widget.selectfield"
      ],
      "alternates": [
        "Ext.form.Select"
      ]
    },
    "Ext.field.Slider": {
      "idx": 476,
      "alias": [
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.form.Slider"
      ]
    },
    "Ext.field.Spinner": {
      "idx": 478,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.field.Text": {
      "idx": 337,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.Text"
      ]
    },
    "Ext.field.TextArea": {
      "idx": 339,
      "alias": [
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.field.TextAreaInput": {
      "idx": 338,
      "alias": [
        "widget.textareainput"
      ],
      "alternates": []
    },
    "Ext.field.Toggle": {
      "idx": 480,
      "alias": [
        "widget.togglefield"
      ],
      "alternates": [
        "Ext.form.Toggle"
      ]
    },
    "Ext.field.Url": {
      "idx": 481,
      "alias": [
        "widget.urlfield"
      ],
      "alternates": [
        "Ext.form.Url"
      ]
    },
    "Ext.form.FieldSet": {
      "idx": 482,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 483,
      "alias": [
        "widget.formpanel"
      ],
      "alternates": [
        "Ext.form.FormPanel"
      ]
    },
    "Ext.fx.Animation": {
      "idx": 167,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 290,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 158,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 159,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 291,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 162,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 163,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 164,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 165,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 166,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 160,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 161,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 292,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 293,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 294,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 134,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 295,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 133,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 176,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 157,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 170,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 296,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 172,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 173,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 174,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 171,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 175,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 297,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 298,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 169,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 168,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 288,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 299,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 289,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.grid.Grid": {
      "idx": 490,
      "alias": [
        "widget.grid"
      ],
      "alternates": []
    },
    "Ext.grid.HeaderContainer": {
      "idx": 488,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.HeaderGroup": {
      "idx": 489,
      "alias": [
        "widget.gridheadergroup"
      ],
      "alternates": []
    },
    "Ext.grid.Row": {
      "idx": 484,
      "alias": [
        "widget.gridrow"
      ],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 493,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 491,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.CheckColumn": {
      "idx": 494,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 485,
      "alias": [
        "widget.column"
      ],
      "alternates": []
    },
    "Ext.grid.column.Date": {
      "idx": 486,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.Number": {
      "idx": 492,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.Template": {
      "idx": 487,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.ColumnResizing": {
      "idx": 495,
      "alias": [
        "plugin.gridcolumnresizing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editable": {
      "idx": 496,
      "alias": [
        "plugin.grideditable"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.MultiSelection": {
      "idx": 497,
      "alias": [
        "plugin.gridmultiselection"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.PagingToolbar": {
      "idx": 498,
      "alias": [
        "plugin.gridpagingtoolbar"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.SummaryRow": {
      "idx": 499,
      "alias": [
        "plugin.gridsummaryrow"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.ViewOptions": {
      "idx": 501,
      "alias": [
        "plugin.gridviewoptions"
      ],
      "alternates": []
    },
    "Ext.layout.Abstract": {
      "idx": 150,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Box": {
      "idx": 156,
      "alias": [
        "layout.tablebox"
      ],
      "alternates": []
    },
    "Ext.layout.Card": {
      "idx": 177,
      "alias": [
        "layout.card"
      ],
      "alternates": []
    },
    "Ext.layout.Default": {
      "idx": 155,
      "alias": [
        "layout.auto",
        "layout.default"
      ],
      "alternates": []
    },
    "Ext.layout.Fit": {
      "idx": 178,
      "alias": [
        "layout.fit"
      ],
      "alternates": []
    },
    "Ext.layout.FlexBox": {
      "idx": 179,
      "alias": [
        "layout.box"
      ],
      "alternates": []
    },
    "Ext.layout.Float": {
      "idx": 180,
      "alias": [
        "layout.float"
      ],
      "alternates": []
    },
    "Ext.layout.HBox": {
      "idx": 181,
      "alias": [
        "layout.hbox"
      ],
      "alternates": []
    },
    "Ext.layout.VBox": {
      "idx": 182,
      "alias": [
        "layout.vbox"
      ],
      "alternates": []
    },
    "Ext.layout.wrapper.BoxDock": {
      "idx": 153,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.wrapper.Dock": {
      "idx": 183,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.wrapper.Inner": {
      "idx": 154,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Accessible": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 48,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ComponentDelegation": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Container": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 151,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 47,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Progressable": {
      "idx": 341,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 187,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 302,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 303,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.navigation.Bar": {
      "idx": 502,
      "alias": [],
      "alternates": []
    },
    "Ext.navigation.View": {
      "idx": 503,
      "alias": [
        "widget.navigationview"
      ],
      "alternates": [
        "Ext.NavigationView"
      ]
    },
    "Ext.overrides.Widget": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 304,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 305,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Date": {
      "idx": 463,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Picker": {
      "idx": 461,
      "alias": [
        "widget.picker"
      ],
      "alternates": [
        "Ext.Picker"
      ]
    },
    "Ext.picker.Slot": {
      "idx": 460,
      "alias": [
        "widget.pickerslot"
      ],
      "alternates": [
        "Ext.Picker.Slot"
      ]
    },
    "Ext.plugin.Abstract": {
      "idx": 306,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.BufferedList": {
      "idx": 504,
      "alias": [
        "plugin.bufferedlist"
      ],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 307,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.ListPaging": {
      "idx": 505,
      "alias": [
        "plugin.listpaging"
      ],
      "alternates": []
    },
    "Ext.plugin.PullRefresh": {
      "idx": 506,
      "alias": [
        "plugin.pullrefresh"
      ],
      "alternates": []
    },
    "Ext.plugin.SortableList": {
      "idx": 500,
      "alias": [
        "plugin.sortablelist"
      ],
      "alternates": []
    },
    "Ext.plugin.field.PlaceHolderLabel": {
      "idx": 507,
      "alias": [
        "plugin.placeholderlabel"
      ],
      "alternates": []
    },
    "Ext.scroll.DomScroller": {
      "idx": 144,
      "alias": [
        "scroller.dom"
      ],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 142,
      "alias": [
        "widget.scrollindicator"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 128,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TouchScroller": {
      "idx": 143,
      "alias": [
        "scroller.touch"
      ],
      "alternates": []
    },
    "Ext.slider.Slider": {
      "idx": 475,
      "alias": [
        "widget.slider"
      ],
      "alternates": []
    },
    "Ext.slider.Thumb": {
      "idx": 474,
      "alias": [
        "widget.thumb"
      ],
      "alternates": []
    },
    "Ext.slider.Toggle": {
      "idx": 479,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 509,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": [
        "Ext.TabBar"
      ]
    },
    "Ext.tab.Panel": {
      "idx": 510,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 508,
      "alias": [
        "widget.tab"
      ],
      "alternates": [
        "Ext.Tab"
      ]
    },
    "Ext.table.Cell": {
      "idx": 511,
      "alias": [
        "widget.tablecell"
      ],
      "alternates": []
    },
    "Ext.table.Row": {
      "idx": 512,
      "alias": [
        "widget.tablerow"
      ],
      "alternates": []
    },
    "Ext.table.Table": {
      "idx": 513,
      "alias": [
        "widget.table"
      ],
      "alternates": []
    },
    "Ext.tip.ToolTip": {
      "idx": 514,
      "alias": [],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Audio": {
      "idx": 427,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 308,
      "alias": [],
      "alternates": []
    },
    "Ext.util.BufferedCollection": {
      "idx": 515,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 310,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelayedTask": {
      "idx": 516,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Draggable": {
      "idx": 147,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Droppable": {
      "idx": 517,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Geolocation": {
      "idx": 325,
      "alias": [],
      "alternates": [
        "Ext.util.GeoLocation"
      ]
    },
    "Ext.util.Group": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 123,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 78,
      "alias": [],
      "alternates": []
    },
    "Ext.util.InputBlocker": {
      "idx": 185,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ItemCollection": {
      "idx": 184,
      "alias": [],
      "alternates": [
        "Ext.ItemCollection"
      ]
    },
    "Ext.util.LineSegment": {
      "idx": 317,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LocalStorage": {
      "idx": 311,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 72,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PositionMap": {
      "idx": 364,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 16,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 24,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 113,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 312,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TapRepeater": {
      "idx": 477,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 313,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 267,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 141,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TranslatableGroup": {
      "idx": 353,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TranslatableList": {
      "idx": 518,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Wrapper": {
      "idx": 152,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 135,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 136,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.DataSimlet": {
      "idx": 683,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.JsonSimlet": {
      "idx": 684,
      "alias": [
        "simlet.json"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.SimManager": {
      "idx": 686,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.SimXhr": {
      "idx": 685,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.Simlet": {
      "idx": 682,
      "alias": [
        "simlet.basic"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.XmlSimlet": {
      "idx": 687,
      "alias": [
        "simlet.xml"
      ],
      "alternates": []
    },
    "Ext.ux.device.Analytics": {
      "idx": 678,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.Twitter": {
      "idx": 681,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.analytics.Abstract": {
      "idx": 676,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.analytics.Cordova": {
      "idx": 677,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.twitter.Abstract": {
      "idx": 679,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.twitter.Cordova": {
      "idx": 680,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Driver": {
      "idx": 688,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Maker": {
      "idx": 689,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Player": {
      "idx": 690,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Recorder": {
      "idx": 691,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Api": {
      "idx": 692,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Feeds": {
      "idx": 693,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Android": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Default": {
      "idx": 191,
      "alias": [
        "widget.viewport"
      ],
      "alternates": []
    },
    "Ext.viewport.Ios": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Viewport": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.WindowsPhone": {
      "idx": 194,
      "alias": [],
      "alternates": [
        "Ext.viewport.WP"
      ]
    }
  },
  "packages": {
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
    },
    "modern": {
      "build": {
        "dir": "${package.output}"
      },
      "creator": "Sencha",
      "output": "${framework.dir}/build",
      "requires": [
        "ext",
        "core",
        "modern"
      ],
      "type": "toolkit",
      "version": "6.0.0"
    }
  },
  "bootRelative": true
};
var Ext = Ext || { }; Ext.manifest = {
  "paths": {
    "Ext": "modern/modern/src",
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
    "Ext.String.format": "packages/core/src/Template.js",
    "Ext.TaskQueue": "packages/core/src/TaskQueue.js",
    "Ext.Template": "packages/core/src/Template.js",
    "Ext.Widget": "packages/core/src/Widget.js",
    "Ext.XTemplate": "packages/core/src/XTemplate.js",
    "Ext.app": "packages/core/src/app",
    "Ext.chart": "packages/charts/src/chart",
    "Ext.chart.LegendBase": "packages/charts/modern/src/chart/LegendBase.js",
    "Ext.chart.interactions.ItemInfo": "packages/charts/modern/src/chart/interactions/ItemInfo.js",
    "Ext.chart.overrides": "packages/charts/modern/overrides",
    "Ext.data": "packages/core/src/data",
    "Ext.device.Purchases.Product": "modern/modern/src/device/purchases/Sencha.js",
    "Ext.device.filesystem.DirectoryEntry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.Entry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.FileEntry": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.filesystem.FileSystem": "modern/modern/src/device/filesystem/HTML5.js",
    "Ext.device.purchases.Purchase": "modern/modern/src/device/purchases/Sencha.js",
    "Ext.device.sqlite.Database": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLResultSet": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLResultSetRowList": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.device.sqlite.SQLTransaction": "modern/modern/src/device/sqlite/Sencha.js",
    "Ext.direct": "packages/core/src/direct",
    "Ext.dom": "packages/core/src/dom",
    "Ext.draw": "packages/charts/src/draw",
    "Ext.draw.ContainerBase": "packages/charts/modern/src/draw/ContainerBase.js",
    "Ext.draw.SurfaceBase": "packages/charts/modern/src/draw/SurfaceBase.js",
    "Ext.draw.engine.SvgContext.Gradient": "packages/charts/src/draw/engine/SvgContext.js",
    "Ext.event": "packages/core/src/event",
    "Ext.fx": "packages/core/src/fx",
    "Ext.grid.column.Action": "modern/modern/src/grid/column/unsupported/Action.js",
    "Ext.grid.column.CheckColumn": "modern/modern/src/grid/column/unsupported/CheckColumn.js",
    "Ext.mixin": "packages/core/src/mixin",
    "Ext.mixin.Progressable": "modern/modern/src/mixin/Progressable.js",
    "Ext.overrides": "modern/modern/overrides",
    "Ext.perf": "packages/core/src/perf",
    "Ext.plugin.Abstract": "packages/core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "packages/core/src/plugin/LazyItems.js",
    "Ext.scroll": "packages/core/src/scroll",
    "Ext.util": "packages/core/src/util",
    "Ext.util.Audio": "modern/modern/src/util/Audio.js",
    "Ext.util.BufferedCollection": "modern/modern/src/util/BufferedCollection.js",
    "Ext.util.DelayedTask": "modern/modern/src/util/DelayedTask.js",
    "Ext.util.Draggable": "modern/modern/src/util/Draggable.js",
    "Ext.util.Droppable": "modern/modern/src/util/Droppable.js",
    "Ext.util.Format.format": "packages/core/src/Template.js",
    "Ext.util.Geolocation": "modern/modern/src/util/Geolocation.js",
    "Ext.util.InputBlocker": "modern/modern/src/util/InputBlocker.js",
    "Ext.util.LineSegment": "modern/modern/src/util/LineSegment.js",
    "Ext.util.PositionMap": "modern/modern/src/util/PositionMap.js",
    "Ext.util.TapRepeater": "modern/modern/src/util/TapRepeater.js",
    "Ext.util.TranslatableGroup": "modern/modern/src/util/TranslatableGroup.js",
    "Ext.util.TranslatableList": "modern/modern/src/util/TranslatableList.js",
    "Ext.util.Wrapper": "modern/modern/src/util/Wrapper.js",
    "Ext.ux.ajax.DataSimlet": "packages/ux/src/ajax/DataSimlet.js",
    "Ext.ux.ajax.JsonSimlet": "packages/ux/src/ajax/JsonSimlet.js",
    "Ext.ux.ajax.SimManager": "packages/ux/src/ajax/SimManager.js",
    "Ext.ux.ajax.SimXhr": "packages/ux/src/ajax/SimXhr.js",
    "Ext.ux.ajax.Simlet": "packages/ux/src/ajax/Simlet.js",
    "Ext.ux.ajax.XmlSimlet": "packages/ux/src/ajax/XmlSimlet.js",
    "Ext.ux.device.Analytics": "packages/ux/modern/src/device/Analytics.js",
    "Ext.ux.device.Twitter": "packages/ux/modern/src/device/Twitter.js",
    "Ext.ux.device.analytics.Abstract": "packages/ux/modern/src/device/analytics/Abstract.js",
    "Ext.ux.device.analytics.Cordova": "packages/ux/modern/src/device/analytics/Cordova.js",
    "Ext.ux.device.twitter.Abstract": "packages/ux/modern/src/device/twitter/Abstract.js",
    "Ext.ux.device.twitter.Cordova": "packages/ux/modern/src/device/twitter/Cordova.js",
    "Ext.ux.event.Driver": "packages/ux/src/event/Driver.js",
    "Ext.ux.event.Maker": "packages/ux/src/event/Maker.js",
    "Ext.ux.event.Player": "packages/ux/src/event/Player.js",
    "Ext.ux.event.Recorder": "packages/ux/src/event/Recorder.js",
    "Ext.ux.google.Api": "packages/ux/src/google/Api.js",
    "Ext.ux.google.Feeds": "packages/ux/src/google/Feeds.js"
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
        43
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
        63
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
        43
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
        42,
        43
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
        26,
        42
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
        46
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
      "requires": [],
      "uses": [
        24,
        42
      ],
      "idx": 16
    },
    {
      "path": "packages/core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 17
    },
    {
      "path": "packages/core/src/dom/Underlay.js",
      "requires": [
        17
      ],
      "uses": [],
      "idx": 18
    },
    {
      "path": "packages/core/src/dom/Shadow.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "packages/core/src/dom/Shim.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 20
    },
    {
      "path": "packages/core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        27
      ],
      "idx": 21
    },
    {
      "path": "packages/core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 22
    },
    {
      "path": "packages/core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 23
    },
    {
      "path": "packages/core/src/util/Region.js",
      "requires": [
        23
      ],
      "uses": [],
      "idx": 24
    },
    {
      "path": "packages/core/src/util/Point.js",
      "requires": [
        24
      ],
      "uses": [],
      "idx": 25
    },
    {
      "path": "packages/core/src/event/Event.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 26
    },
    {
      "path": "packages/core/src/event/publisher/Dom.js",
      "requires": [
        22,
        26
      ],
      "uses": [
        43
      ],
      "idx": 27
    },
    {
      "path": "packages/core/src/event/publisher/Gesture.js",
      "requires": [
        10,
        25,
        27
      ],
      "uses": [
        26,
        42,
        275,
        276,
        277,
        278,
        279,
        280,
        281,
        282,
        283,
        284,
        285,
        286
      ],
      "idx": 28
    },
    {
      "path": "packages/core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        42
      ],
      "idx": 29
    },
    {
      "path": "packages/core/src/TaskQueue.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 30
    },
    {
      "path": "packages/core/src/util/sizemonitor/Abstract.js",
      "requires": [
        29,
        30
      ],
      "uses": [],
      "idx": 31
    },
    {
      "path": "packages/core/src/util/sizemonitor/Default.js",
      "requires": [
        31
      ],
      "uses": [],
      "idx": 32
    },
    {
      "path": "packages/core/src/util/sizemonitor/Scroll.js",
      "requires": [
        31
      ],
      "uses": [
        30
      ],
      "idx": 33
    },
    {
      "path": "packages/core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        31
      ],
      "uses": [
        30
      ],
      "idx": 34
    },
    {
      "path": "packages/core/src/util/SizeMonitor.js",
      "requires": [
        32,
        33,
        34
      ],
      "uses": [],
      "idx": 35
    },
    {
      "path": "packages/core/src/event/publisher/ElementSize.js",
      "requires": [
        22,
        35
      ],
      "uses": [
        30
      ],
      "idx": 36
    },
    {
      "path": "packages/core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 37
    },
    {
      "path": "packages/core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 38
    },
    {
      "path": "packages/core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 39
    },
    {
      "path": "packages/core/src/util/PaintMonitor.js",
      "requires": [
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "packages/core/src/event/publisher/ElementPaint.js",
      "requires": [
        22,
        30,
        40
      ],
      "uses": [],
      "idx": 41
    },
    {
      "path": "packages/core/src/dom/Element.js",
      "requires": [
        4,
        16,
        19,
        20,
        21,
        27,
        28,
        36,
        41
      ],
      "uses": [
        22,
        24,
        43,
        46,
        167,
        243,
        272,
        273,
        274,
        287,
        289
      ],
      "idx": 42
    },
    {
      "path": "packages/core/src/GlobalEvents.js",
      "requires": [
        4,
        42
      ],
      "uses": [],
      "idx": 43
    },
    {
      "path": "packages/core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 44
    },
    {
      "path": "packages/core/src/util/Format.js",
      "requires": [],
      "uses": [
        46,
        243
      ],
      "idx": 45
    },
    {
      "path": "packages/core/src/Template.js",
      "requires": [
        45
      ],
      "uses": [
        243
      ],
      "idx": 46
    },
    {
      "path": "packages/core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 47
    },
    {
      "path": "packages/core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        68
      ],
      "idx": 48
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
      "idx": 49
    },
    {
      "path": "packages/core/src/Widget.js",
      "requires": [
        15,
        42,
        47,
        48,
        49,
        52
      ],
      "uses": [
        11,
        14
      ],
      "idx": 50
    },
    {
      "path": "packages/core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 51
    },
    {
      "path": "modern/modern/overrides/Widget.js",
      "requires": [
        51
      ],
      "uses": [],
      "idx": 52
    },
    {
      "path": "packages/core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 53
    },
    {
      "path": "packages/core/src/util/XTemplateCompiler.js",
      "requires": [
        53
      ],
      "uses": [],
      "idx": 54
    },
    {
      "path": "packages/core/src/XTemplate.js",
      "requires": [
        46,
        54
      ],
      "uses": [],
      "idx": 55
    },
    {
      "path": "packages/core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 56
    },
    {
      "path": "packages/core/src/app/domain/Component.js",
      "requires": [
        50,
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "packages/core/src/app/EventBus.js",
      "requires": [
        57
      ],
      "uses": [
        56
      ],
      "idx": 58
    },
    {
      "path": "packages/core/src/app/domain/Global.js",
      "requires": [
        43,
        56
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "packages/core/src/app/BaseController.js",
      "requires": [
        4,
        58,
        59
      ],
      "uses": [
        123,
        124,
        223
      ],
      "idx": 60
    },
    {
      "path": "packages/core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 61
    },
    {
      "path": "packages/core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 62
    },
    {
      "path": "packages/core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 63
    },
    {
      "path": "packages/core/src/util/AbstractMixedCollection.js",
      "requires": [
        62,
        63
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "packages/core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 65
    },
    {
      "path": "packages/core/src/util/Sortable.js",
      "requires": [
        65
      ],
      "uses": [
        67
      ],
      "idx": 66
    },
    {
      "path": "packages/core/src/util/MixedCollection.js",
      "requires": [
        64,
        66
      ],
      "uses": [],
      "idx": 67
    },
    {
      "path": "packages/core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 68
    },
    {
      "path": "packages/core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 69
    },
    {
      "path": "packages/core/src/util/Grouper.js",
      "requires": [
        65
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "packages/core/src/util/Collection.js",
      "requires": [
        4,
        62,
        65,
        69,
        70
      ],
      "uses": [
        113,
        114,
        115
      ],
      "idx": 71
    },
    {
      "path": "packages/core/src/util/ObjectTemplate.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "packages/core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        68
      ],
      "idx": 73
    },
    {
      "path": "packages/core/src/data/schema/Association.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 74
    },
    {
      "path": "packages/core/src/data/schema/OneToOne.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 75
    },
    {
      "path": "packages/core/src/data/schema/ManyToOne.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 76
    },
    {
      "path": "packages/core/src/data/schema/ManyToMany.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 77
    },
    {
      "path": "packages/core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "packages/core/src/data/schema/Namer.js",
      "requires": [
        68,
        78
      ],
      "uses": [],
      "idx": 79
    },
    {
      "path": "packages/core/src/data/schema/Schema.js",
      "requires": [
        68,
        72,
        75,
        76,
        77,
        79
      ],
      "uses": [],
      "idx": 80
    },
    {
      "path": "packages/core/src/data/AbstractStore.js",
      "requires": [
        4,
        62,
        68,
        71,
        80
      ],
      "uses": [
        119
      ],
      "idx": 81
    },
    {
      "path": "packages/core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 82
    },
    {
      "path": "packages/core/src/data/ErrorCollection.js",
      "requires": [
        67,
        82
      ],
      "uses": [
        91
      ],
      "idx": 83
    },
    {
      "path": "packages/core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 84
    },
    {
      "path": "packages/core/src/data/operation/Create.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 85
    },
    {
      "path": "packages/core/src/data/operation/Destroy.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 86
    },
    {
      "path": "packages/core/src/data/operation/Read.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "packages/core/src/data/operation/Update.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "packages/core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 89
    },
    {
      "path": "packages/core/src/data/validator/Validator.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "packages/core/src/data/field/Field.js",
      "requires": [
        68,
        89,
        90
      ],
      "uses": [],
      "idx": 91
    },
    {
      "path": "packages/core/src/data/field/Boolean.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "packages/core/src/data/field/Date.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 93
    },
    {
      "path": "packages/core/src/data/field/Integer.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 94
    },
    {
      "path": "packages/core/src/data/field/Number.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 95
    },
    {
      "path": "packages/core/src/data/field/String.js",
      "requires": [
        91
      ],
      "uses": [],
      "idx": 96
    },
    {
      "path": "packages/core/src/data/identifier/Generator.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "packages/core/src/data/identifier/Sequential.js",
      "requires": [
        97
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "packages/core/src/data/Model.js",
      "requires": [
        80,
        83,
        84,
        85,
        86,
        87,
        88,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98
      ],
      "uses": [
        68,
        101,
        242
      ],
      "idx": 99
    },
    {
      "path": "packages/core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 100
    },
    {
      "path": "packages/core/src/data/reader/Reader.js",
      "requires": [
        4,
        13,
        55,
        68,
        100
      ],
      "uses": [
        80
      ],
      "idx": 101
    },
    {
      "path": "packages/core/src/data/writer/Writer.js",
      "requires": [
        68
      ],
      "uses": [],
      "idx": 102
    },
    {
      "path": "packages/core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        68,
        80,
        101,
        102
      ],
      "uses": [
        84,
        85,
        86,
        87,
        88,
        99,
        202
      ],
      "idx": 103
    },
    {
      "path": "packages/core/src/data/proxy/Client.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "packages/core/src/data/proxy/Memory.js",
      "requires": [
        104
      ],
      "uses": [
        62,
        66
      ],
      "idx": 105
    },
    {
      "path": "packages/core/src/data/ProxyStore.js",
      "requires": [
        81,
        84,
        85,
        86,
        87,
        88,
        99,
        103,
        105
      ],
      "uses": [
        1,
        80
      ],
      "idx": 106
    },
    {
      "path": "packages/core/src/data/LocalStore.js",
      "requires": [
        0
      ],
      "uses": [
        71
      ],
      "idx": 107
    },
    {
      "path": "packages/core/src/data/proxy/Server.js",
      "requires": [
        103
      ],
      "uses": [
        46,
        239
      ],
      "idx": 108
    },
    {
      "path": "packages/core/src/data/proxy/Ajax.js",
      "requires": [
        9,
        108
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "packages/core/src/data/reader/Json.js",
      "requires": [
        44,
        101
      ],
      "uses": [],
      "idx": 110
    },
    {
      "path": "packages/core/src/data/writer/Json.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "packages/core/src/util/Group.js",
      "requires": [
        71
      ],
      "uses": [],
      "idx": 112
    },
    {
      "path": "packages/core/src/util/SorterCollection.js",
      "requires": [
        65,
        71
      ],
      "uses": [],
      "idx": 113
    },
    {
      "path": "packages/core/src/util/FilterCollection.js",
      "requires": [
        62,
        71
      ],
      "uses": [],
      "idx": 114
    },
    {
      "path": "packages/core/src/util/GroupCollection.js",
      "requires": [
        71,
        112,
        113,
        114
      ],
      "uses": [],
      "idx": 115
    },
    {
      "path": "packages/core/src/data/Store.js",
      "requires": [
        1,
        99,
        106,
        107,
        109,
        110,
        111,
        115
      ],
      "uses": [
        70,
        119,
        228
      ],
      "idx": 116
    },
    {
      "path": "packages/core/src/data/reader/Array.js",
      "requires": [
        110
      ],
      "uses": [],
      "idx": 117
    },
    {
      "path": "packages/core/src/data/ArrayStore.js",
      "requires": [
        105,
        116,
        117
      ],
      "uses": [],
      "idx": 118
    },
    {
      "path": "packages/core/src/data/StoreManager.js",
      "requires": [
        67,
        118
      ],
      "uses": [
        68,
        105,
        111,
        116,
        117
      ],
      "idx": 119
    },
    {
      "path": "packages/core/src/app/domain/Store.js",
      "requires": [
        56,
        81
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "packages/core/src/app/route/Queue.js",
      "requires": [],
      "uses": [
        67
      ],
      "idx": 121
    },
    {
      "path": "packages/core/src/app/route/Route.js",
      "requires": [],
      "uses": [
        46
      ],
      "idx": 122
    },
    {
      "path": "packages/core/src/util/History.js",
      "requires": [
        63
      ],
      "uses": [
        313
      ],
      "idx": 123
    },
    {
      "path": "packages/core/src/app/route/Router.js",
      "requires": [
        121,
        122,
        123
      ],
      "uses": [],
      "idx": 124
    },
    {
      "path": "packages/core/src/app/Controller.js",
      "requires": [
        11,
        57,
        60,
        61,
        119,
        120,
        124
      ],
      "uses": [
        14,
        80
      ],
      "idx": 125
    },
    {
      "path": "packages/core/src/app/Application.js",
      "requires": [
        67,
        123,
        125,
        127,
        196
      ],
      "uses": [
        124
      ],
      "idx": 126
    },
    {
      "path": "packages/core/overrides/app/Application.js",
      "requires": [],
      "uses": [
        126
      ],
      "idx": 127
    },
    {
      "path": "packages/core/src/scroll/Scroller.js",
      "requires": [
        15,
        68
      ],
      "uses": [
        43,
        143,
        144
      ],
      "idx": 128
    },
    {
      "path": "packages/core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 129
    },
    {
      "path": "packages/core/src/fx/easing/Momentum.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "packages/core/src/fx/easing/Bounce.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 131
    },
    {
      "path": "packages/core/src/fx/easing/BoundMomentum.js",
      "requires": [
        129,
        130,
        131
      ],
      "uses": [],
      "idx": 132
    },
    {
      "path": "packages/core/src/fx/easing/Linear.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "packages/core/src/fx/easing/EaseOut.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 134
    },
    {
      "path": "packages/core/src/util/translatable/Abstract.js",
      "requires": [
        15,
        133
      ],
      "uses": [
        10
      ],
      "idx": 135
    },
    {
      "path": "packages/core/src/util/translatable/Dom.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "packages/core/src/util/translatable/CssTransform.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 137
    },
    {
      "path": "packages/core/src/util/translatable/ScrollPosition.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "packages/core/src/util/translatable/ScrollParent.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "packages/core/src/util/translatable/CssPosition.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 140
    },
    {
      "path": "packages/core/src/util/Translatable.js",
      "requires": [
        137,
        138,
        139,
        140
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "packages/core/src/scroll/Indicator.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 142
    },
    {
      "path": "packages/core/src/scroll/TouchScroller.js",
      "requires": [
        43,
        128,
        132,
        134,
        141,
        142
      ],
      "uses": [],
      "idx": 143
    },
    {
      "path": "packages/core/src/scroll/DomScroller.js",
      "requires": [
        128
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "modern/modern/src/behavior/Behavior.js",
      "requires": [],
      "uses": [],
      "idx": 145
    },
    {
      "path": "modern/modern/src/behavior/Translatable.js",
      "requires": [
        141,
        145
      ],
      "uses": [],
      "idx": 146
    },
    {
      "path": "modern/modern/src/util/Draggable.js",
      "requires": [
        4,
        141
      ],
      "uses": [],
      "idx": 147
    },
    {
      "path": "modern/modern/src/behavior/Draggable.js",
      "requires": [
        145,
        147
      ],
      "uses": [],
      "idx": 148
    },
    {
      "path": "modern/modern/src/Component.js",
      "requires": [
        11,
        14,
        50,
        51,
        55,
        128,
        143,
        144,
        146,
        148
      ],
      "uses": [
        42,
        167,
        289
      ],
      "idx": 149
    },
    {
      "path": "modern/modern/src/layout/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "packages/core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "modern/modern/src/util/Wrapper.js",
      "requires": [
        151
      ],
      "uses": [
        42
      ],
      "idx": 152
    },
    {
      "path": "modern/modern/src/layout/wrapper/BoxDock.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 153
    },
    {
      "path": "modern/modern/src/layout/wrapper/Inner.js",
      "requires": [],
      "uses": [],
      "idx": 154
    },
    {
      "path": "modern/modern/src/layout/Default.js",
      "requires": [
        150,
        152,
        153,
        154
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "modern/modern/src/layout/Box.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "packages/core/src/fx/layout/card/Abstract.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "packages/core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 158
    },
    {
      "path": "packages/core/src/fx/animation/Abstract.js",
      "requires": [
        15,
        158
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "packages/core/src/fx/animation/Slide.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "packages/core/src/fx/animation/SlideOut.js",
      "requires": [
        160
      ],
      "uses": [],
      "idx": 161
    },
    {
      "path": "packages/core/src/fx/animation/Fade.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 162
    },
    {
      "path": "packages/core/src/fx/animation/FadeOut.js",
      "requires": [
        162
      ],
      "uses": [],
      "idx": 163
    },
    {
      "path": "packages/core/src/fx/animation/Flip.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 164
    },
    {
      "path": "packages/core/src/fx/animation/Pop.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 165
    },
    {
      "path": "packages/core/src/fx/animation/PopOut.js",
      "requires": [
        165
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "packages/core/src/fx/Animation.js",
      "requires": [
        160,
        161,
        162,
        163,
        164,
        165,
        166
      ],
      "uses": [
        159
      ],
      "idx": 167
    },
    {
      "path": "packages/core/src/fx/layout/card/Style.js",
      "requires": [
        157,
        167
      ],
      "uses": [
        289
      ],
      "idx": 168
    },
    {
      "path": "packages/core/src/fx/layout/card/Slide.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 169
    },
    {
      "path": "packages/core/src/fx/layout/card/Cover.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 170
    },
    {
      "path": "packages/core/src/fx/layout/card/Reveal.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 171
    },
    {
      "path": "packages/core/src/fx/layout/card/Fade.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 172
    },
    {
      "path": "packages/core/src/fx/layout/card/Flip.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 173
    },
    {
      "path": "packages/core/src/fx/layout/card/Pop.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "packages/core/src/fx/layout/card/Scroll.js",
      "requires": [
        133,
        157
      ],
      "uses": [
        10
      ],
      "idx": 175
    },
    {
      "path": "packages/core/src/fx/layout/Card.js",
      "requires": [
        169,
        170,
        171,
        172,
        173,
        174,
        175
      ],
      "uses": [
        157
      ],
      "idx": 176
    },
    {
      "path": "modern/modern/src/layout/Card.js",
      "requires": [
        155,
        176
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "modern/modern/src/layout/Fit.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 178
    },
    {
      "path": "modern/modern/src/layout/FlexBox.js",
      "requires": [
        156
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "modern/modern/src/layout/Float.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 180
    },
    {
      "path": "modern/modern/src/layout/HBox.js",
      "requires": [
        179
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "modern/modern/src/layout/VBox.js",
      "requires": [
        179
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "modern/modern/src/layout/wrapper/Dock.js",
      "requires": [
        152
      ],
      "uses": [
        42
      ],
      "idx": 183
    },
    {
      "path": "packages/core/src/util/ItemCollection.js",
      "requires": [
        67
      ],
      "uses": [],
      "idx": 184
    },
    {
      "path": "modern/modern/src/util/InputBlocker.js",
      "requires": [],
      "uses": [],
      "idx": 185
    },
    {
      "path": "modern/modern/src/Mask.js",
      "requires": [
        149,
        185
      ],
      "uses": [],
      "idx": 186
    },
    {
      "path": "packages/core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 187
    },
    {
      "path": "packages/core/src/mixin/Container.js",
      "requires": [
        0
      ],
      "uses": [
        11
      ],
      "idx": 188
    },
    {
      "path": "modern/modern/src/Container.js",
      "requires": [
        149,
        150,
        153,
        154,
        155,
        156,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        186,
        187,
        188
      ],
      "uses": [
        176
      ],
      "idx": 189
    },
    {
      "path": "modern/modern/src/LoadMask.js",
      "requires": [
        186
      ],
      "uses": [],
      "idx": 190
    },
    {
      "path": "modern/modern/src/viewport/Default.js",
      "requires": [
        177,
        185,
        189,
        190
      ],
      "uses": [
        63,
        149
      ],
      "idx": 191
    },
    {
      "path": "modern/modern/src/viewport/Ios.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 192
    },
    {
      "path": "modern/modern/src/viewport/Android.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 193
    },
    {
      "path": "modern/modern/src/viewport/WindowsPhone.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 194
    },
    {
      "path": "modern/modern/src/viewport/Viewport.js",
      "requires": [
        192,
        193,
        194
      ],
      "uses": [],
      "idx": 195
    },
    {
      "path": "modern/modern/overrides/app/Application.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 196
    },
    {
      "path": "packages/core/src/app/Profile.js",
      "requires": [
        4
      ],
      "uses": [
        125
      ],
      "idx": 197
    },
    {
      "path": "packages/core/src/app/domain/View.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 198
    },
    {
      "path": "packages/core/src/app/ViewController.js",
      "requires": [
        60,
        68,
        198
      ],
      "uses": [],
      "idx": 199
    },
    {
      "path": "packages/core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 200
    },
    {
      "path": "packages/core/src/util/Scheduler.js",
      "requires": [
        4,
        200
      ],
      "uses": [
        43
      ],
      "idx": 201
    },
    {
      "path": "packages/core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 202
    },
    {
      "path": "packages/core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 203
    },
    {
      "path": "packages/core/src/data/matrix/Side.js",
      "requires": [
        203
      ],
      "uses": [],
      "idx": 204
    },
    {
      "path": "packages/core/src/data/matrix/Matrix.js",
      "requires": [
        204
      ],
      "uses": [],
      "idx": 205
    },
    {
      "path": "packages/core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 206
    },
    {
      "path": "packages/core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "packages/core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        202
      ],
      "idx": 208
    },
    {
      "path": "packages/core/src/data/Session.js",
      "requires": [
        80,
        202,
        205,
        206,
        207,
        208
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "packages/core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 210
    },
    {
      "path": "packages/core/src/app/bind/BaseBinding.js",
      "requires": [
        210
      ],
      "uses": [],
      "idx": 211
    },
    {
      "path": "packages/core/src/app/bind/Binding.js",
      "requires": [
        211
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "packages/core/src/app/bind/AbstractStub.js",
      "requires": [
        210,
        212
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "packages/core/src/app/bind/Stub.js",
      "requires": [
        212,
        213
      ],
      "uses": [
        218
      ],
      "idx": 214
    },
    {
      "path": "packages/core/src/app/bind/LinkStub.js",
      "requires": [
        214
      ],
      "uses": [],
      "idx": 215
    },
    {
      "path": "packages/core/src/app/bind/RootStub.js",
      "requires": [
        213,
        214,
        215
      ],
      "uses": [],
      "idx": 216
    },
    {
      "path": "packages/core/src/app/bind/Multi.js",
      "requires": [
        211
      ],
      "uses": [],
      "idx": 217
    },
    {
      "path": "packages/core/src/app/bind/Formula.js",
      "requires": [
        13,
        210
      ],
      "uses": [],
      "idx": 218
    },
    {
      "path": "packages/core/src/app/bind/Template.js",
      "requires": [
        45
      ],
      "uses": [],
      "idx": 219
    },
    {
      "path": "packages/core/src/app/bind/TemplateBinding.js",
      "requires": [
        211,
        217,
        219
      ],
      "uses": [],
      "idx": 220
    },
    {
      "path": "packages/core/src/data/ChainedStore.js",
      "requires": [
        81,
        107
      ],
      "uses": [
        46,
        119
      ],
      "idx": 221
    },
    {
      "path": "packages/core/src/app/ViewModel.js",
      "requires": [
        3,
        68,
        201,
        209,
        215,
        216,
        217,
        218,
        220,
        221
      ],
      "uses": [
        1,
        80
      ],
      "idx": 222
    },
    {
      "path": "packages/core/src/app/domain/Controller.js",
      "requires": [
        56,
        125
      ],
      "uses": [
        60
      ],
      "idx": 223
    },
    {
      "path": "packages/core/src/direct/Manager.js",
      "requires": [
        4,
        67
      ],
      "uses": [
        46
      ],
      "idx": 224
    },
    {
      "path": "packages/core/src/direct/Provider.js",
      "requires": [
        4,
        224
      ],
      "uses": [],
      "idx": 225
    },
    {
      "path": "packages/core/src/app/domain/Direct.js",
      "requires": [
        56,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "packages/core/src/data/PageMap.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 227
    },
    {
      "path": "packages/core/src/data/BufferedStore.js",
      "requires": [
        62,
        65,
        70,
        106,
        227
      ],
      "uses": [
        113,
        114,
        115
      ],
      "idx": 228
    },
    {
      "path": "packages/core/src/data/proxy/Direct.js",
      "requires": [
        108,
        224
      ],
      "uses": [],
      "idx": 229
    },
    {
      "path": "packages/core/src/data/DirectStore.js",
      "requires": [
        116,
        229
      ],
      "uses": [],
      "idx": 230
    },
    {
      "path": "packages/core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        43
      ],
      "idx": 231
    },
    {
      "path": "packages/core/src/data/proxy/JsonP.js",
      "requires": [
        108,
        231
      ],
      "uses": [],
      "idx": 232
    },
    {
      "path": "packages/core/src/data/JsonPStore.js",
      "requires": [
        110,
        116,
        232
      ],
      "uses": [],
      "idx": 233
    },
    {
      "path": "packages/core/src/data/JsonStore.js",
      "requires": [
        109,
        110,
        111,
        116
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "packages/core/src/data/ModelManager.js",
      "requires": [
        80
      ],
      "uses": [
        99
      ],
      "idx": 235
    },
    {
      "path": "packages/core/src/data/NodeInterface.js",
      "requires": [
        4,
        92,
        94,
        96,
        111
      ],
      "uses": [
        80
      ],
      "idx": 236
    },
    {
      "path": "packages/core/src/data/TreeModel.js",
      "requires": [
        99,
        187,
        236
      ],
      "uses": [],
      "idx": 237
    },
    {
      "path": "packages/core/src/data/NodeStore.js",
      "requires": [
        116,
        236,
        237
      ],
      "uses": [
        99
      ],
      "idx": 238
    },
    {
      "path": "packages/core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 239
    },
    {
      "path": "packages/core/src/data/TreeStore.js",
      "requires": [
        65,
        116,
        236,
        237
      ],
      "uses": [
        99
      ],
      "idx": 240
    },
    {
      "path": "packages/core/src/data/Types.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 241
    },
    {
      "path": "packages/core/src/data/Validation.js",
      "requires": [
        99
      ],
      "uses": [],
      "idx": 242
    },
    {
      "path": "packages/core/src/dom/Helper.js",
      "requires": [],
      "uses": [
        46
      ],
      "idx": 243
    },
    {
      "path": "packages/core/src/dom/Query.js",
      "requires": [
        12,
        243
      ],
      "uses": [
        13
      ],
      "idx": 244
    },
    {
      "path": "packages/core/src/data/reader/Xml.js",
      "requires": [
        101,
        244
      ],
      "uses": [],
      "idx": 245
    },
    {
      "path": "packages/core/src/data/writer/Xml.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "packages/core/src/data/XmlStore.js",
      "requires": [
        109,
        116,
        245,
        246
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "packages/core/src/data/identifier/Negative.js",
      "requires": [
        98
      ],
      "uses": [],
      "idx": 248
    },
    {
      "path": "packages/core/src/data/identifier/Uuid.js",
      "requires": [
        97
      ],
      "uses": [],
      "idx": 249
    },
    {
      "path": "packages/core/src/data/proxy/WebStorage.js",
      "requires": [
        98,
        104
      ],
      "uses": [
        46,
        65,
        100
      ],
      "idx": 250
    },
    {
      "path": "packages/core/src/data/proxy/LocalStorage.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "packages/core/src/data/proxy/Rest.js",
      "requires": [
        109
      ],
      "uses": [],
      "idx": 252
    },
    {
      "path": "packages/core/src/data/proxy/SessionStorage.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "packages/core/src/data/validator/Bound.js",
      "requires": [
        90
      ],
      "uses": [
        46
      ],
      "idx": 254
    },
    {
      "path": "packages/core/src/data/validator/Format.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "packages/core/src/data/validator/Email.js",
      "requires": [
        255
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "packages/core/src/data/validator/List.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "packages/core/src/data/validator/Exclusion.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "packages/core/src/data/validator/Inclusion.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "packages/core/src/data/validator/Length.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 260
    },
    {
      "path": "packages/core/src/data/validator/Presence.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 261
    },
    {
      "path": "packages/core/src/data/validator/Range.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 262
    },
    {
      "path": "packages/core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 263
    },
    {
      "path": "packages/core/src/direct/RemotingEvent.js",
      "requires": [
        263
      ],
      "uses": [
        224
      ],
      "idx": 264
    },
    {
      "path": "packages/core/src/direct/ExceptionEvent.js",
      "requires": [
        264
      ],
      "uses": [],
      "idx": 265
    },
    {
      "path": "packages/core/src/direct/JsonProvider.js",
      "requires": [
        225
      ],
      "uses": [
        224,
        265
      ],
      "idx": 266
    },
    {
      "path": "packages/core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        43
      ],
      "idx": 267
    },
    {
      "path": "packages/core/src/direct/PollingProvider.js",
      "requires": [
        9,
        265,
        266,
        267
      ],
      "uses": [
        224,
        313
      ],
      "idx": 268
    },
    {
      "path": "packages/core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 269
    },
    {
      "path": "packages/core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 270
    },
    {
      "path": "packages/core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        67,
        224,
        266,
        269,
        270
      ],
      "uses": [
        9,
        44,
        265
      ],
      "idx": 271
    },
    {
      "path": "packages/core/src/dom/Fly.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "packages/core/src/dom/CompositeElementLite.js",
      "requires": [
        272
      ],
      "uses": [
        42
      ],
      "idx": 273
    },
    {
      "path": "packages/core/src/dom/CompositeElement.js",
      "requires": [
        273
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "packages/core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        42
      ],
      "idx": 275
    },
    {
      "path": "packages/core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        28
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "packages/core/src/event/gesture/SingleTouch.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "packages/core/src/event/gesture/DoubleTap.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "packages/core/src/event/gesture/Drag.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "packages/core/src/event/gesture/Swipe.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "packages/core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        280
      ],
      "uses": [
        42
      ],
      "idx": 281
    },
    {
      "path": "packages/core/src/event/gesture/LongPress.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 282
    },
    {
      "path": "packages/core/src/event/gesture/MultiTouch.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "packages/core/src/event/gesture/Pinch.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "packages/core/src/event/gesture/Rotate.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 285
    },
    {
      "path": "packages/core/src/event/gesture/Tap.js",
      "requires": [
        277
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "packages/core/src/event/publisher/Focus.js",
      "requires": [
        27,
        42
      ],
      "uses": [
        26,
        43
      ],
      "idx": 287
    },
    {
      "path": "packages/core/src/fx/runner/Css.js",
      "requires": [
        15,
        167
      ],
      "uses": [],
      "idx": 288
    },
    {
      "path": "packages/core/src/fx/runner/CssTransition.js",
      "requires": [
        10,
        288
      ],
      "uses": [
        167
      ],
      "idx": 289
    },
    {
      "path": "packages/core/src/fx/Runner.js",
      "requires": [
        289
      ],
      "uses": [],
      "idx": 290
    },
    {
      "path": "packages/core/src/fx/animation/Cube.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 291
    },
    {
      "path": "packages/core/src/fx/animation/Wipe.js",
      "requires": [
        167
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "packages/core/src/fx/animation/WipeOut.js",
      "requires": [
        292
      ],
      "uses": [],
      "idx": 293
    },
    {
      "path": "packages/core/src/fx/easing/EaseIn.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 294
    },
    {
      "path": "packages/core/src/fx/easing/Easing.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "packages/core/src/fx/layout/card/Cube.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        175
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "packages/core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        175
      ],
      "uses": [],
      "idx": 298
    },
    {
      "path": "packages/core/src/fx/runner/CssAnimation.js",
      "requires": [
        288
      ],
      "uses": [
        167
      ],
      "idx": 299
    },
    {
      "path": "packages/core/src/mixin/Accessible.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 300
    },
    {
      "path": "packages/core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 301
    },
    {
      "path": "packages/core/src/mixin/Responsive.js",
      "requires": [
        0,
        43
      ],
      "uses": [
        42
      ],
      "idx": 302
    },
    {
      "path": "packages/core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        67
      ],
      "idx": 303
    },
    {
      "path": "packages/core/src/perf/Accumulator.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "packages/core/src/perf/Monitor.js",
      "requires": [
        304
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "packages/core/src/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 306
    },
    {
      "path": "packages/core/src/plugin/LazyItems.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 307
    },
    {
      "path": "packages/core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 308
    },
    {
      "path": "packages/core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 309
    },
    {
      "path": "packages/core/src/util/CSV.js",
      "requires": [
        309
      ],
      "uses": [],
      "idx": 310
    },
    {
      "path": "packages/core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 311
    },
    {
      "path": "packages/core/src/util/TSV.js",
      "requires": [
        309
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "packages/core/src/util/TaskManager.js",
      "requires": [
        267
      ],
      "uses": [],
      "idx": 313
    },
    {
      "path": "packages/core/src/util/TextMetrics.js",
      "requires": [
        42
      ],
      "uses": [],
      "idx": 314
    },
    {
      "path": "modern/modern/src/AbstractComponent.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 315
    },
    {
      "path": "modern/modern/src/AbstractPlugin.js",
      "requires": [],
      "uses": [],
      "idx": 316
    },
    {
      "path": "modern/modern/src/util/LineSegment.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 317
    },
    {
      "path": "modern/modern/src/Panel.js",
      "requires": [
        189,
        317
      ],
      "uses": [
        42
      ],
      "idx": 318
    },
    {
      "path": "modern/modern/src/Button.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "modern/modern/src/Sheet.js",
      "requires": [
        167,
        318,
        319
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "modern/modern/src/ActionSheet.js",
      "requires": [
        319,
        320
      ],
      "uses": [],
      "idx": 321
    },
    {
      "path": "modern/modern/src/Anim.js",
      "requires": [],
      "uses": [],
      "idx": 322
    },
    {
      "path": "modern/modern/src/Media.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 323
    },
    {
      "path": "modern/modern/src/Audio.js",
      "requires": [
        323
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "modern/modern/src/util/Geolocation.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 325
    },
    {
      "path": "modern/modern/src/Map.js",
      "requires": [
        189,
        325
      ],
      "uses": [],
      "idx": 326
    },
    {
      "path": "modern/modern/src/BingMap.js",
      "requires": [
        325,
        326
      ],
      "uses": [],
      "idx": 327
    },
    {
      "path": "modern/modern/src/Decorator.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 328
    },
    {
      "path": "modern/modern/src/Img.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 329
    },
    {
      "path": "modern/modern/src/Label.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "modern/modern/src/Menu.js",
      "requires": [
        319,
        320
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "modern/modern/src/Title.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 332
    },
    {
      "path": "modern/modern/src/Spacer.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 333
    },
    {
      "path": "modern/modern/src/Toolbar.js",
      "requires": [
        181,
        189,
        319,
        332,
        333
      ],
      "uses": [],
      "idx": 334
    },
    {
      "path": "modern/modern/src/field/Input.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 335
    },
    {
      "path": "modern/modern/src/field/Field.js",
      "requires": [
        328,
        335
      ],
      "uses": [],
      "idx": 336
    },
    {
      "path": "modern/modern/src/field/Text.js",
      "requires": [
        209,
        335,
        336
      ],
      "uses": [],
      "idx": 337
    },
    {
      "path": "modern/modern/src/field/TextAreaInput.js",
      "requires": [
        335
      ],
      "uses": [],
      "idx": 338
    },
    {
      "path": "modern/modern/src/field/TextArea.js",
      "requires": [
        209,
        337,
        338
      ],
      "uses": [],
      "idx": 339
    },
    {
      "path": "modern/modern/src/MessageBox.js",
      "requires": [
        185,
        320,
        334,
        337,
        339
      ],
      "uses": [
        149,
        209
      ],
      "idx": 340
    },
    {
      "path": "modern/modern/src/mixin/Progressable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 341
    },
    {
      "path": "modern/modern/src/ProgressIndicator.js",
      "requires": [
        189,
        341
      ],
      "uses": [
        55
      ],
      "idx": 342
    },
    {
      "path": "modern/modern/src/Promise.js",
      "requires": [],
      "uses": [],
      "idx": 343
    },
    {
      "path": "modern/modern/src/SegmentedButton.js",
      "requires": [
        189,
        319
      ],
      "uses": [],
      "idx": 344
    },
    {
      "path": "modern/modern/src/Sortable.js",
      "requires": [
        4,
        147
      ],
      "uses": [],
      "idx": 345
    },
    {
      "path": "modern/modern/src/TitleBar.js",
      "requires": [
        189,
        319,
        332,
        333
      ],
      "uses": [
        149,
        209
      ],
      "idx": 346
    },
    {
      "path": "modern/modern/src/Toast.js",
      "requires": [
        185,
        320
      ],
      "uses": [
        149
      ],
      "idx": 347
    },
    {
      "path": "modern/modern/src/Video.js",
      "requires": [
        323
      ],
      "uses": [
        42
      ],
      "idx": 348
    },
    {
      "path": "modern/modern/src/behavior/Droppable.js",
      "requires": [],
      "uses": [],
      "idx": 349
    },
    {
      "path": "modern/modern/src/behavior/Sortable.js",
      "requires": [],
      "uses": [],
      "idx": 350
    },
    {
      "path": "modern/modern/src/carousel/Item.js",
      "requires": [
        328
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "modern/modern/src/carousel/Indicator.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 352
    },
    {
      "path": "modern/modern/src/util/TranslatableGroup.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 353
    },
    {
      "path": "modern/modern/src/carousel/Carousel.js",
      "requires": [
        134,
        189,
        351,
        352,
        353
      ],
      "uses": [],
      "idx": 354
    },
    {
      "path": "modern/modern/src/carousel/Infinite.js",
      "requires": [
        354
      ],
      "uses": [],
      "idx": 355
    },
    {
      "path": "modern/modern/src/dataview/component/DataItem.js",
      "requires": [
        149,
        189,
        209
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "modern/modern/src/dataview/component/Container.js",
      "requires": [
        189,
        356
      ],
      "uses": [],
      "idx": 357
    },
    {
      "path": "modern/modern/src/dataview/element/Container.js",
      "requires": [
        149
      ],
      "uses": [
        42
      ],
      "idx": 358
    },
    {
      "path": "modern/modern/src/dataview/DataView.js",
      "requires": [
        119,
        189,
        190,
        303,
        357,
        358
      ],
      "uses": [
        55,
        116,
        149,
        209
      ],
      "idx": 359
    },
    {
      "path": "modern/modern/src/dataview/IndexBar.js",
      "requires": [
        149
      ],
      "uses": [
        25,
        42
      ],
      "idx": 360
    },
    {
      "path": "modern/modern/src/dataview/ListItemHeader.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 361
    },
    {
      "path": "modern/modern/src/dataview/component/ListItem.js",
      "requires": [
        149,
        209,
        356
      ],
      "uses": [],
      "idx": 362
    },
    {
      "path": "modern/modern/src/dataview/component/SimpleListItem.js",
      "requires": [
        149,
        209
      ],
      "uses": [],
      "idx": 363
    },
    {
      "path": "modern/modern/src/util/PositionMap.js",
      "requires": [],
      "uses": [],
      "idx": 364
    },
    {
      "path": "modern/modern/src/dataview/List.js",
      "requires": [
        116,
        151,
        359,
        360,
        361,
        362,
        363,
        364
      ],
      "uses": [
        10,
        189,
        209
      ],
      "idx": 365
    },
    {
      "path": "modern/modern/src/dataview/NestedList.js",
      "requires": [
        55,
        119,
        189,
        209,
        238,
        240,
        319,
        346,
        365
      ],
      "uses": [
        105,
        110,
        111,
        149,
        190,
        334
      ],
      "idx": 366
    },
    {
      "path": "modern/modern/src/dataview/element/List.js",
      "requires": [
        358
      ],
      "uses": [
        42
      ],
      "idx": 367
    },
    {
      "path": "modern/modern/src/device/accelerometer/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 368
    },
    {
      "path": "modern/modern/src/device/accelerometer/Cordova.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 369
    },
    {
      "path": "modern/modern/src/device/accelerometer/Simulator.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 370
    },
    {
      "path": "modern/modern/src/device/Accelerometer.js",
      "requires": [
        369,
        370
      ],
      "uses": [],
      "idx": 371
    },
    {
      "path": "modern/modern/src/device/communicator/Default.js",
      "requires": [],
      "uses": [],
      "idx": 372
    },
    {
      "path": "modern/modern/src/device/communicator/Android.js",
      "requires": [
        372
      ],
      "uses": [],
      "idx": 373
    },
    {
      "path": "modern/modern/src/device/Communicator.js",
      "requires": [
        372,
        373
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "modern/modern/src/device/browser/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 375
    },
    {
      "path": "modern/modern/src/device/browser/Cordova.js",
      "requires": [
        375
      ],
      "uses": [
        458
      ],
      "idx": 376
    },
    {
      "path": "modern/modern/src/device/browser/Simulator.js",
      "requires": [],
      "uses": [],
      "idx": 377
    },
    {
      "path": "modern/modern/src/device/Browser.js",
      "requires": [
        374,
        376,
        377
      ],
      "uses": [],
      "idx": 378
    },
    {
      "path": "modern/modern/src/device/camera/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 379
    },
    {
      "path": "modern/modern/src/device/camera/Cordova.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 380
    },
    {
      "path": "modern/modern/src/device/camera/Sencha.js",
      "requires": [
        374,
        379
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "modern/modern/src/device/camera/Simulator.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 382
    },
    {
      "path": "modern/modern/src/device/Camera.js",
      "requires": [
        374,
        380,
        381,
        382
      ],
      "uses": [],
      "idx": 383
    },
    {
      "path": "modern/modern/src/device/capture/Cordova.js",
      "requires": [],
      "uses": [],
      "idx": 384
    },
    {
      "path": "modern/modern/src/device/capture/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 385
    },
    {
      "path": "modern/modern/src/device/Capture.js",
      "requires": [
        374,
        384,
        385
      ],
      "uses": [],
      "idx": 386
    },
    {
      "path": "modern/modern/src/device/compass/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 387
    },
    {
      "path": "modern/modern/src/device/compass/Cordova.js",
      "requires": [
        387
      ],
      "uses": [],
      "idx": 388
    },
    {
      "path": "modern/modern/src/device/compass/Simulator.js",
      "requires": [
        387
      ],
      "uses": [],
      "idx": 389
    },
    {
      "path": "modern/modern/src/device/Compass.js",
      "requires": [
        388,
        389
      ],
      "uses": [],
      "idx": 390
    },
    {
      "path": "modern/modern/src/device/connection/Abstract.js",
      "requires": [
        4,
        15
      ],
      "uses": [],
      "idx": 391
    },
    {
      "path": "modern/modern/src/device/connection/Sencha.js",
      "requires": [
        391
      ],
      "uses": [
        374
      ],
      "idx": 392
    },
    {
      "path": "modern/modern/src/device/connection/Cordova.js",
      "requires": [
        391
      ],
      "uses": [],
      "idx": 393
    },
    {
      "path": "modern/modern/src/device/connection/Simulator.js",
      "requires": [
        391
      ],
      "uses": [
        395
      ],
      "idx": 394
    },
    {
      "path": "modern/modern/src/device/Connection.js",
      "requires": [
        374,
        392,
        393,
        394
      ],
      "uses": [],
      "idx": 395
    },
    {
      "path": "modern/modern/src/device/contacts/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "modern/modern/src/device/contacts/Sencha.js",
      "requires": [
        396
      ],
      "uses": [
        374
      ],
      "idx": 397
    },
    {
      "path": "modern/modern/src/device/contacts/Cordova.js",
      "requires": [
        396
      ],
      "uses": [],
      "idx": 398
    },
    {
      "path": "modern/modern/src/device/Contacts.js",
      "requires": [
        374,
        397,
        398
      ],
      "uses": [
        396
      ],
      "idx": 399
    },
    {
      "path": "modern/modern/src/device/device/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 400
    },
    {
      "path": "modern/modern/src/device/device/Cordova.js",
      "requires": [
        400
      ],
      "uses": [
        404
      ],
      "idx": 401
    },
    {
      "path": "modern/modern/src/device/device/Sencha.js",
      "requires": [
        400
      ],
      "uses": [
        374
      ],
      "idx": 402
    },
    {
      "path": "modern/modern/src/device/device/Simulator.js",
      "requires": [
        400
      ],
      "uses": [],
      "idx": 403
    },
    {
      "path": "modern/modern/src/device/Device.js",
      "requires": [
        374,
        401,
        402,
        403
      ],
      "uses": [],
      "idx": 404
    },
    {
      "path": "modern/modern/src/device/filesystem/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 405
    },
    {
      "path": "modern/modern/src/device/filesystem/Sencha.js",
      "requires": [
        405
      ],
      "uses": [
        374
      ],
      "idx": 406
    },
    {
      "path": "modern/modern/src/device/filesystem/HTML5.js",
      "requires": [
        405,
        406
      ],
      "uses": [],
      "idx": 407
    },
    {
      "path": "modern/modern/src/device/filesystem/Cordova.js",
      "requires": [
        407
      ],
      "uses": [
        406
      ],
      "idx": 408
    },
    {
      "path": "modern/modern/src/device/filesystem/Chrome.js",
      "requires": [
        407
      ],
      "uses": [
        405,
        406
      ],
      "idx": 409
    },
    {
      "path": "modern/modern/src/device/filesystem/Simulator.js",
      "requires": [
        407
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "modern/modern/src/device/FileSystem.js",
      "requires": [
        374,
        406,
        408,
        409,
        410
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "modern/modern/src/device/geolocation/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 412
    },
    {
      "path": "modern/modern/src/device/geolocation/Cordova.js",
      "requires": [
        412
      ],
      "uses": [],
      "idx": 413
    },
    {
      "path": "modern/modern/src/device/geolocation/Sencha.js",
      "requires": [
        412
      ],
      "uses": [
        374
      ],
      "idx": 414
    },
    {
      "path": "modern/modern/src/device/geolocation/Simulator.js",
      "requires": [
        325,
        412
      ],
      "uses": [],
      "idx": 415
    },
    {
      "path": "modern/modern/src/device/Geolocation.js",
      "requires": [
        374,
        413,
        414,
        415
      ],
      "uses": [],
      "idx": 416
    },
    {
      "path": "modern/modern/src/device/globalization/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        45
      ],
      "idx": 417
    },
    {
      "path": "modern/modern/src/device/globalization/Cordova.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 418
    },
    {
      "path": "modern/modern/src/device/globalization/Simulator.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 419
    },
    {
      "path": "modern/modern/src/device/Globalization.js",
      "requires": [
        418,
        419
      ],
      "uses": [],
      "idx": 420
    },
    {
      "path": "modern/modern/src/device/media/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 421
    },
    {
      "path": "modern/modern/src/device/media/Cordova.js",
      "requires": [
        421
      ],
      "uses": [],
      "idx": 422
    },
    {
      "path": "modern/modern/src/device/Media.js",
      "requires": [
        374,
        422
      ],
      "uses": [
        421
      ],
      "idx": 423
    },
    {
      "path": "modern/modern/src/device/notification/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 424
    },
    {
      "path": "modern/modern/src/device/notification/Cordova.js",
      "requires": [
        374,
        424
      ],
      "uses": [],
      "idx": 425
    },
    {
      "path": "modern/modern/src/device/notification/Sencha.js",
      "requires": [
        374,
        424
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "modern/modern/src/util/Audio.js",
      "requires": [],
      "uses": [],
      "idx": 427
    },
    {
      "path": "modern/modern/src/device/notification/Simulator.js",
      "requires": [
        340,
        424,
        427
      ],
      "uses": [],
      "idx": 428
    },
    {
      "path": "modern/modern/src/device/Notification.js",
      "requires": [
        374,
        425,
        426,
        428
      ],
      "uses": [],
      "idx": 429
    },
    {
      "path": "modern/modern/src/device/orientation/Abstract.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 430
    },
    {
      "path": "modern/modern/src/device/orientation/HTML5.js",
      "requires": [
        430
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "modern/modern/src/device/orientation/Sencha.js",
      "requires": [
        374,
        430
      ],
      "uses": [],
      "idx": 432
    },
    {
      "path": "modern/modern/src/device/Orientation.js",
      "requires": [
        374,
        431,
        432
      ],
      "uses": [],
      "idx": 433
    },
    {
      "path": "modern/modern/src/device/purchases/Sencha.js",
      "requires": [
        99,
        116
      ],
      "uses": [
        374
      ],
      "idx": 434
    },
    {
      "path": "modern/modern/src/device/Purchases.js",
      "requires": [
        374,
        434
      ],
      "uses": [],
      "idx": 435
    },
    {
      "path": "modern/modern/src/device/push/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 436
    },
    {
      "path": "modern/modern/src/device/push/Sencha.js",
      "requires": [
        436
      ],
      "uses": [
        374
      ],
      "idx": 437
    },
    {
      "path": "modern/modern/src/device/push/Cordova.js",
      "requires": [
        436
      ],
      "uses": [
        439
      ],
      "idx": 438
    },
    {
      "path": "modern/modern/src/device/Push.js",
      "requires": [
        374,
        437,
        438
      ],
      "uses": [
        436
      ],
      "idx": 439
    },
    {
      "path": "modern/modern/src/device/sqlite/Sencha.js",
      "requires": [],
      "uses": [
        374
      ],
      "idx": 440
    },
    {
      "path": "modern/modern/src/device/SQLite.js",
      "requires": [
        374,
        440
      ],
      "uses": [],
      "idx": 441
    },
    {
      "path": "modern/modern/src/device/splashscreen/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 442
    },
    {
      "path": "modern/modern/src/device/splashscreen/Cordova.js",
      "requires": [
        442
      ],
      "uses": [],
      "idx": 443
    },
    {
      "path": "modern/modern/src/device/splashscreen/Simulator.js",
      "requires": [
        442
      ],
      "uses": [],
      "idx": 444
    },
    {
      "path": "modern/modern/src/device/Splashscreen.js",
      "requires": [
        443,
        444
      ],
      "uses": [],
      "idx": 445
    },
    {
      "path": "modern/modern/src/device/storage/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 446
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/SQLStatement.js",
      "requires": [],
      "uses": [],
      "idx": 447
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/Database.js",
      "requires": [
        447
      ],
      "uses": [],
      "idx": 448
    },
    {
      "path": "modern/modern/src/device/storage/HTML5/HTML5.js",
      "requires": [
        446,
        448
      ],
      "uses": [],
      "idx": 449
    },
    {
      "path": "modern/modern/src/device/storage/Cordova.js",
      "requires": [
        449
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "modern/modern/src/device/storage/Simulator.js",
      "requires": [
        449
      ],
      "uses": [],
      "idx": 451
    },
    {
      "path": "modern/modern/src/device/Storage.js",
      "requires": [
        450,
        451
      ],
      "uses": [],
      "idx": 452
    },
    {
      "path": "modern/modern/src/device/tunnel/Abstract.js",
      "requires": [
        343
      ],
      "uses": [
        455
      ],
      "idx": 453
    },
    {
      "path": "modern/modern/src/device/tunnel/Simulator.js",
      "requires": [
        374,
        453
      ],
      "uses": [
        343
      ],
      "idx": 454
    },
    {
      "path": "modern/modern/src/device/tunnel/Connection.js",
      "requires": [],
      "uses": [
        457
      ],
      "idx": 455
    },
    {
      "path": "modern/modern/src/device/tunnel/Sencha.js",
      "requires": [
        453,
        455
      ],
      "uses": [
        343,
        374
      ],
      "idx": 456
    },
    {
      "path": "modern/modern/src/device/Tunnel.js",
      "requires": [
        454,
        456
      ],
      "uses": [],
      "idx": 457
    },
    {
      "path": "modern/modern/src/device/browser/Window.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 458
    },
    {
      "path": "modern/modern/src/field/Checkbox.js",
      "requires": [
        209,
        335,
        336
      ],
      "uses": [],
      "idx": 459
    },
    {
      "path": "modern/modern/src/picker/Slot.js",
      "requires": [
        55,
        116,
        119,
        149,
        359
      ],
      "uses": [
        209
      ],
      "idx": 460
    },
    {
      "path": "modern/modern/src/picker/Picker.js",
      "requires": [
        99,
        185,
        209,
        320,
        334,
        346,
        460
      ],
      "uses": [],
      "idx": 461
    },
    {
      "path": "modern/modern/src/field/Select.js",
      "requires": [
        116,
        119,
        318,
        337,
        365,
        461
      ],
      "uses": [
        149,
        209
      ],
      "idx": 462
    },
    {
      "path": "modern/modern/src/picker/Date.js",
      "requires": [
        185,
        461
      ],
      "uses": [
        460
      ],
      "idx": 463
    },
    {
      "path": "modern/modern/src/field/DatePicker.js",
      "requires": [
        462,
        463
      ],
      "uses": [
        45
      ],
      "idx": 464
    },
    {
      "path": "modern/modern/src/field/DatePickerNative.js",
      "requires": [
        464
      ],
      "uses": [],
      "idx": 465
    },
    {
      "path": "modern/modern/src/field/Email.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 466
    },
    {
      "path": "modern/modern/src/field/FileInput.js",
      "requires": [
        335
      ],
      "uses": [],
      "idx": 467
    },
    {
      "path": "modern/modern/src/field/File.js",
      "requires": [
        209,
        336,
        467
      ],
      "uses": [],
      "idx": 468
    },
    {
      "path": "modern/modern/src/field/Hidden.js",
      "requires": [
        209,
        335,
        337
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "modern/modern/src/field/Number.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 470
    },
    {
      "path": "modern/modern/src/field/Password.js",
      "requires": [
        337
      ],
      "uses": [
        42
      ],
      "idx": 471
    },
    {
      "path": "modern/modern/src/field/Radio.js",
      "requires": [
        459
      ],
      "uses": [],
      "idx": 472
    },
    {
      "path": "modern/modern/src/field/Search.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 473
    },
    {
      "path": "modern/modern/src/slider/Thumb.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "modern/modern/src/slider/Slider.js",
      "requires": [
        134,
        189,
        474
      ],
      "uses": [],
      "idx": 475
    },
    {
      "path": "modern/modern/src/field/Slider.js",
      "requires": [
        336,
        475
      ],
      "uses": [],
      "idx": 476
    },
    {
      "path": "modern/modern/src/util/TapRepeater.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 477
    },
    {
      "path": "modern/modern/src/field/Spinner.js",
      "requires": [
        470,
        477
      ],
      "uses": [
        42,
        149
      ],
      "idx": 478
    },
    {
      "path": "modern/modern/src/slider/Toggle.js",
      "requires": [
        475
      ],
      "uses": [],
      "idx": 479
    },
    {
      "path": "modern/modern/src/field/Toggle.js",
      "requires": [
        476,
        479
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "modern/modern/src/field/Url.js",
      "requires": [
        337
      ],
      "uses": [],
      "idx": 481
    },
    {
      "path": "modern/modern/src/form/FieldSet.js",
      "requires": [
        189,
        332
      ],
      "uses": [],
      "idx": 482
    },
    {
      "path": "modern/modern/src/form/Panel.js",
      "requires": [
        9,
        55,
        318,
        459
      ],
      "uses": [
        190,
        209,
        224
      ],
      "idx": 483
    },
    {
      "path": "modern/modern/src/grid/Row.js",
      "requires": [
        149,
        209
      ],
      "uses": [
        42
      ],
      "idx": 484
    },
    {
      "path": "modern/modern/src/grid/column/Column.js",
      "requires": [
        149,
        209,
        337
      ],
      "uses": [],
      "idx": 485
    },
    {
      "path": "modern/modern/src/grid/column/Date.js",
      "requires": [
        485
      ],
      "uses": [
        45
      ],
      "idx": 486
    },
    {
      "path": "modern/modern/src/grid/column/Template.js",
      "requires": [
        55,
        485
      ],
      "uses": [],
      "idx": 487
    },
    {
      "path": "modern/modern/src/grid/HeaderContainer.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 488
    },
    {
      "path": "modern/modern/src/grid/HeaderGroup.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 489
    },
    {
      "path": "modern/modern/src/grid/Grid.js",
      "requires": [
        209,
        340,
        346,
        365,
        484,
        485,
        486,
        487,
        488,
        489
      ],
      "uses": [
        189
      ],
      "idx": 490
    },
    {
      "path": "modern/modern/src/grid/column/Boolean.js",
      "requires": [
        209,
        459,
        485
      ],
      "uses": [],
      "idx": 491
    },
    {
      "path": "modern/modern/src/grid/column/Number.js",
      "requires": [
        45,
        209,
        470,
        485
      ],
      "uses": [],
      "idx": 492
    },
    {
      "path": "modern/modern/src/grid/column/unsupported/Action.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "modern/modern/src/grid/column/unsupported/CheckColumn.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "modern/modern/src/grid/plugin/ColumnResizing.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 495
    },
    {
      "path": "modern/modern/src/grid/plugin/Editable.js",
      "requires": [
        149,
        209,
        319,
        346,
        482,
        483
      ],
      "uses": [
        320
      ],
      "idx": 496
    },
    {
      "path": "modern/modern/src/grid/plugin/MultiSelection.js",
      "requires": [
        149,
        209,
        485
      ],
      "uses": [
        319
      ],
      "idx": 497
    },
    {
      "path": "modern/modern/src/grid/plugin/PagingToolbar.js",
      "requires": [
        149,
        151,
        209,
        319,
        334,
        476
      ],
      "uses": [],
      "idx": 498
    },
    {
      "path": "modern/modern/src/grid/plugin/SummaryRow.js",
      "requires": [
        151,
        484
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "modern/modern/src/plugin/SortableList.js",
      "requires": [
        149,
        151
      ],
      "uses": [
        244
      ],
      "idx": 500
    },
    {
      "path": "modern/modern/src/grid/plugin/ViewOptions.js",
      "requires": [
        149,
        209,
        319,
        320,
        346,
        366,
        480,
        500
      ],
      "uses": [
        189
      ],
      "idx": 501
    },
    {
      "path": "modern/modern/src/navigation/Bar.js",
      "requires": [
        319,
        333,
        346
      ],
      "uses": [
        167,
        289
      ],
      "idx": 502
    },
    {
      "path": "modern/modern/src/navigation/View.js",
      "requires": [
        189,
        502
      ],
      "uses": [
        14,
        209,
        319,
        334,
        346
      ],
      "idx": 503
    },
    {
      "path": "modern/modern/src/plugin/BufferedList.js",
      "requires": [
        151
      ],
      "uses": [],
      "idx": 504
    },
    {
      "path": "modern/modern/src/plugin/ListPaging.js",
      "requires": [
        149,
        209
      ],
      "uses": [
        55
      ],
      "idx": 505
    },
    {
      "path": "modern/modern/src/plugin/PullRefresh.js",
      "requires": [
        149
      ],
      "uses": [
        45,
        55,
        84
      ],
      "idx": 506
    },
    {
      "path": "modern/modern/src/plugin/field/PlaceHolderLabel.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 507
    },
    {
      "path": "modern/modern/src/tab/Tab.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 508
    },
    {
      "path": "modern/modern/src/tab/Bar.js",
      "requires": [
        334,
        508
      ],
      "uses": [],
      "idx": 509
    },
    {
      "path": "modern/modern/src/tab/Panel.js",
      "requires": [
        189,
        509
      ],
      "uses": [
        508
      ],
      "idx": 510
    },
    {
      "path": "modern/modern/src/table/Cell.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 511
    },
    {
      "path": "modern/modern/src/table/Row.js",
      "requires": [
        511
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "modern/modern/src/table/Table.js",
      "requires": [
        189,
        512
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "modern/modern/src/tip/ToolTip.js",
      "requires": [],
      "uses": [],
      "idx": 514
    },
    {
      "path": "modern/modern/src/util/BufferedCollection.js",
      "requires": [
        4,
        71
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "modern/modern/src/util/DelayedTask.js",
      "requires": [],
      "uses": [],
      "idx": 516
    },
    {
      "path": "modern/modern/src/util/Droppable.js",
      "requires": [
        4
      ],
      "uses": [
        63,
        147
      ],
      "idx": 517
    },
    {
      "path": "modern/modern/src/util/TranslatableList.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 518
    },
    {
      "path": "packages/charts/modern/src/chart/LegendBase.js",
      "requires": [
        359
      ],
      "uses": [],
      "idx": 519
    },
    {
      "path": "packages/charts/src/chart/interactions/Abstract.js",
      "requires": [
        4
      ],
      "uses": [
        11
      ],
      "idx": 520
    },
    {
      "path": "packages/charts/modern/src/chart/interactions/ItemInfo.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 521
    },
    {
      "path": "packages/charts/modern/src/draw/ContainerBase.js",
      "requires": [
        189
      ],
      "uses": [
        209,
        318,
        329
      ],
      "idx": 522
    },
    {
      "path": "packages/charts/modern/src/draw/SurfaceBase.js",
      "requires": [
        149
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "packages/charts/src/draw/Color.js",
      "requires": [],
      "uses": [],
      "idx": 524
    },
    {
      "path": "packages/charts/src/draw/sprite/AnimationParser.js",
      "requires": [
        524
      ],
      "uses": [
        539
      ],
      "idx": 525
    },
    {
      "path": "packages/charts/src/draw/Draw.js",
      "requires": [],
      "uses": [],
      "idx": 526
    },
    {
      "path": "packages/charts/src/draw/gradient/Gradient.js",
      "requires": [
        524
      ],
      "uses": [],
      "idx": 527
    },
    {
      "path": "packages/charts/src/draw/gradient/GradientDefinition.js",
      "requires": [],
      "uses": [],
      "idx": 528
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeParser.js",
      "requires": [
        524,
        528
      ],
      "uses": [
        527,
        562,
        563
      ],
      "idx": 529
    },
    {
      "path": "packages/charts/src/draw/sprite/AttributeDefinition.js",
      "requires": [
        525,
        529
      ],
      "uses": [
        526,
        531
      ],
      "idx": 530
    },
    {
      "path": "packages/charts/src/draw/Matrix.js",
      "requires": [],
      "uses": [],
      "idx": 531
    },
    {
      "path": "packages/charts/src/draw/modifier/Modifier.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 532
    },
    {
      "path": "packages/charts/src/draw/modifier/Target.js",
      "requires": [
        531,
        532
      ],
      "uses": [],
      "idx": 533
    },
    {
      "path": "packages/charts/src/draw/TimingFunctions.js",
      "requires": [],
      "uses": [],
      "idx": 534
    },
    {
      "path": "packages/charts/src/draw/Animator.js",
      "requires": [],
      "uses": [
        10,
        526
      ],
      "idx": 535
    },
    {
      "path": "packages/charts/src/draw/modifier/Animation.js",
      "requires": [
        532,
        534,
        535
      ],
      "uses": [],
      "idx": 536
    },
    {
      "path": "packages/charts/src/draw/modifier/Highlight.js",
      "requires": [
        532
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "packages/charts/src/draw/sprite/Sprite.js",
      "requires": [
        4,
        526,
        527,
        530,
        533,
        536,
        537
      ],
      "uses": [
        532
      ],
      "idx": 538
    },
    {
      "path": "packages/charts/src/draw/Path.js",
      "requires": [
        526
      ],
      "uses": [],
      "idx": 539
    },
    {
      "path": "packages/charts/src/draw/overrides/Path.js",
      "requires": [],
      "uses": [
        640
      ],
      "idx": 540
    },
    {
      "path": "packages/charts/src/draw/sprite/Path.js",
      "requires": [
        526,
        538,
        539
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "packages/charts/src/draw/overrides/sprite/Path.js",
      "requires": [
        524
      ],
      "uses": [
        538
      ],
      "idx": 542
    },
    {
      "path": "packages/charts/src/draw/sprite/Circle.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 543
    },
    {
      "path": "packages/charts/src/draw/sprite/Arc.js",
      "requires": [
        543
      ],
      "uses": [],
      "idx": 544
    },
    {
      "path": "packages/charts/src/draw/sprite/Arrow.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 545
    },
    {
      "path": "packages/charts/src/draw/sprite/Composite.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 546
    },
    {
      "path": "packages/charts/src/draw/sprite/Cross.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 547
    },
    {
      "path": "packages/charts/src/draw/sprite/Diamond.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 548
    },
    {
      "path": "packages/charts/src/draw/sprite/Ellipse.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 549
    },
    {
      "path": "packages/charts/src/draw/sprite/EllipticalArc.js",
      "requires": [
        549
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "packages/charts/src/draw/sprite/Rect.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 551
    },
    {
      "path": "packages/charts/src/draw/sprite/Image.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 552
    },
    {
      "path": "packages/charts/src/draw/sprite/Instancing.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 553
    },
    {
      "path": "packages/charts/src/draw/sprite/Line.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 554
    },
    {
      "path": "packages/charts/src/draw/sprite/Plus.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 555
    },
    {
      "path": "packages/charts/src/draw/sprite/Sector.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 556
    },
    {
      "path": "packages/charts/src/draw/sprite/Square.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 557
    },
    {
      "path": "packages/charts/src/draw/TextMeasurer.js",
      "requires": [
        314
      ],
      "uses": [
        42
      ],
      "idx": 558
    },
    {
      "path": "packages/charts/src/draw/sprite/Text.js",
      "requires": [
        524,
        538,
        558
      ],
      "uses": [
        42,
        531
      ],
      "idx": 559
    },
    {
      "path": "packages/charts/src/draw/sprite/Tick.js",
      "requires": [
        554
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "packages/charts/src/draw/sprite/Triangle.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "packages/charts/src/draw/gradient/Linear.js",
      "requires": [
        524,
        527
      ],
      "uses": [
        526
      ],
      "idx": 562
    },
    {
      "path": "packages/charts/src/draw/gradient/Radial.js",
      "requires": [
        527
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "packages/charts/src/draw/Surface.js",
      "requires": [
        523,
        525,
        526,
        527,
        528,
        529,
        530,
        531,
        538,
        541,
        543,
        544,
        545,
        546,
        547,
        548,
        549,
        550,
        551,
        552,
        553,
        554,
        555,
        556,
        557,
        559,
        560,
        561,
        562,
        563
      ],
      "uses": [
        42,
        569
      ],
      "idx": 564
    },
    {
      "path": "packages/charts/src/draw/overrides/Surface.js",
      "requires": [],
      "uses": [
        538
      ],
      "idx": 565
    },
    {
      "path": "packages/charts/src/draw/engine/SvgContext.js",
      "requires": [
        524
      ],
      "uses": [
        531,
        539
      ],
      "idx": 566
    },
    {
      "path": "packages/charts/src/draw/engine/Svg.js",
      "requires": [
        564,
        566
      ],
      "uses": [],
      "idx": 567
    },
    {
      "path": "packages/charts/src/draw/engine/excanvas.js",
      "requires": [],
      "uses": [],
      "idx": 568
    },
    {
      "path": "packages/charts/src/draw/engine/Canvas.js",
      "requires": [
        524,
        535,
        564,
        568
      ],
      "uses": [
        42,
        531
      ],
      "idx": 569
    },
    {
      "path": "packages/charts/src/draw/Container.js",
      "requires": [
        522,
        528,
        564,
        567,
        569
      ],
      "uses": [
        44,
        243,
        535
      ],
      "idx": 570
    },
    {
      "path": "packages/charts/src/chart/theme/Base.js",
      "requires": [
        68,
        524
      ],
      "uses": [],
      "idx": 571
    },
    {
      "path": "packages/charts/src/chart/theme/Default.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 572
    },
    {
      "path": "packages/charts/src/chart/Markers.js",
      "requires": [
        553
      ],
      "uses": [],
      "idx": 573
    },
    {
      "path": "packages/charts/src/chart/label/Callout.js",
      "requires": [
        532
      ],
      "uses": [],
      "idx": 574
    },
    {
      "path": "packages/charts/src/chart/label/Label.js",
      "requires": [
        559,
        574
      ],
      "uses": [],
      "idx": 575
    },
    {
      "path": "packages/charts/src/chart/series/Series.js",
      "requires": [
        4,
        48,
        514,
        573,
        575
      ],
      "uses": [
        11,
        119,
        524,
        553
      ],
      "idx": 576
    },
    {
      "path": "packages/charts/src/chart/MarkerHolder.js",
      "requires": [
        0
      ],
      "uses": [
        531
      ],
      "idx": 577
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis.js",
      "requires": [
        538,
        559,
        577
      ],
      "uses": [
        526,
        531
      ],
      "idx": 578
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Segmenter.js",
      "requires": [],
      "uses": [],
      "idx": 579
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Names.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 580
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Numeric.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "packages/charts/src/chart/axis/segmenter/Time.js",
      "requires": [
        579
      ],
      "uses": [],
      "idx": 582
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Layout.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 583
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Discrete.js",
      "requires": [
        583
      ],
      "uses": [],
      "idx": 584
    },
    {
      "path": "packages/charts/src/chart/axis/layout/CombineDuplicate.js",
      "requires": [
        584
      ],
      "uses": [],
      "idx": 585
    },
    {
      "path": "packages/charts/src/chart/axis/layout/Continuous.js",
      "requires": [
        583
      ],
      "uses": [],
      "idx": 586
    },
    {
      "path": "packages/charts/src/chart/axis/Axis.js",
      "requires": [
        4,
        578,
        579,
        580,
        581,
        582,
        583,
        584,
        585,
        586
      ],
      "uses": [
        11,
        553,
        559,
        573
      ],
      "idx": 587
    },
    {
      "path": "packages/charts/src/chart/Legend.js",
      "requires": [
        519
      ],
      "uses": [],
      "idx": 588
    },
    {
      "path": "packages/charts/src/chart/AbstractChart.js",
      "requires": [
        116,
        119,
        520,
        570,
        572,
        576,
        587,
        588,
        590
      ],
      "uses": [
        11,
        45,
        68,
        535
      ],
      "idx": 589
    },
    {
      "path": "packages/charts/modern/overrides/AbstractChart.js",
      "requires": [],
      "uses": [],
      "idx": 590
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 591
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid.js",
      "requires": [
        538
      ],
      "uses": [],
      "idx": 592
    },
    {
      "path": "packages/charts/src/chart/CartesianChart.js",
      "requires": [
        589,
        591,
        592
      ],
      "uses": [
        45
      ],
      "idx": 593
    },
    {
      "path": "packages/charts/src/chart/grid/CircularGrid.js",
      "requires": [
        543
      ],
      "uses": [],
      "idx": 594
    },
    {
      "path": "packages/charts/src/chart/grid/RadialGrid.js",
      "requires": [
        541
      ],
      "uses": [],
      "idx": 595
    },
    {
      "path": "packages/charts/src/chart/PolarChart.js",
      "requires": [
        589,
        594,
        595
      ],
      "uses": [
        526
      ],
      "idx": 596
    },
    {
      "path": "packages/charts/src/chart/SpaceFillingChart.js",
      "requires": [
        589
      ],
      "uses": [],
      "idx": 597
    },
    {
      "path": "packages/charts/src/chart/axis/Axis3D.js",
      "requires": [
        587
      ],
      "uses": [],
      "idx": 598
    },
    {
      "path": "packages/charts/src/chart/axis/Category.js",
      "requires": [
        580,
        585,
        587
      ],
      "uses": [],
      "idx": 599
    },
    {
      "path": "packages/charts/src/chart/axis/Category3D.js",
      "requires": [
        580,
        585,
        598
      ],
      "uses": [],
      "idx": 600
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric.js",
      "requires": [
        581,
        586,
        587
      ],
      "uses": [],
      "idx": 601
    },
    {
      "path": "packages/charts/src/chart/axis/Numeric3D.js",
      "requires": [
        581,
        586,
        598
      ],
      "uses": [],
      "idx": 602
    },
    {
      "path": "packages/charts/src/chart/axis/Time.js",
      "requires": [
        582,
        586,
        601
      ],
      "uses": [],
      "idx": 603
    },
    {
      "path": "packages/charts/src/chart/axis/Time3D.js",
      "requires": [
        582,
        586,
        602
      ],
      "uses": [],
      "idx": 604
    },
    {
      "path": "packages/charts/src/chart/axis/sprite/Axis3D.js",
      "requires": [
        578
      ],
      "uses": [],
      "idx": 605
    },
    {
      "path": "packages/charts/src/chart/grid/HorizontalGrid3D.js",
      "requires": [
        591
      ],
      "uses": [],
      "idx": 606
    },
    {
      "path": "packages/charts/src/chart/grid/VerticalGrid3D.js",
      "requires": [
        592
      ],
      "uses": [],
      "idx": 607
    },
    {
      "path": "packages/charts/src/chart/interactions/CrossZoom.js",
      "requires": [
        520
      ],
      "uses": [
        319
      ],
      "idx": 608
    },
    {
      "path": "packages/charts/src/chart/interactions/Crosshair.js",
      "requires": [
        520,
        584,
        591,
        592,
        593
      ],
      "uses": [],
      "idx": 609
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemHighlight.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 610
    },
    {
      "path": "packages/charts/src/chart/interactions/ItemEdit.js",
      "requires": [
        514,
        610
      ],
      "uses": [],
      "idx": 611
    },
    {
      "path": "packages/charts/src/chart/interactions/PanZoom.js",
      "requires": [
        209,
        319,
        344,
        520,
        535
      ],
      "uses": [],
      "idx": 612
    },
    {
      "path": "packages/charts/src/chart/interactions/Rotate.js",
      "requires": [
        520
      ],
      "uses": [],
      "idx": 613
    },
    {
      "path": "packages/charts/src/chart/interactions/RotatePie3D.js",
      "requires": [
        613
      ],
      "uses": [],
      "idx": 614
    },
    {
      "path": "packages/charts/src/chart/plugin/ItemEvents.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 615
    },
    {
      "path": "packages/charts/src/chart/series/Cartesian.js",
      "requires": [
        576
      ],
      "uses": [],
      "idx": 616
    },
    {
      "path": "packages/charts/src/chart/series/StackedCartesian.js",
      "requires": [
        616
      ],
      "uses": [],
      "idx": 617
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Series.js",
      "requires": [
        538,
        577
      ],
      "uses": [],
      "idx": 618
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Cartesian.js",
      "requires": [
        618
      ],
      "uses": [],
      "idx": 619
    },
    {
      "path": "packages/charts/src/chart/series/sprite/StackedCartesian.js",
      "requires": [
        619
      ],
      "uses": [],
      "idx": 620
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Area.js",
      "requires": [
        620
      ],
      "uses": [],
      "idx": 621
    },
    {
      "path": "packages/charts/src/chart/series/Area.js",
      "requires": [
        617,
        621
      ],
      "uses": [],
      "idx": 622
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar.js",
      "requires": [
        620
      ],
      "uses": [
        526
      ],
      "idx": 623
    },
    {
      "path": "packages/charts/src/chart/series/Bar.js",
      "requires": [
        551,
        617,
        623
      ],
      "uses": [],
      "idx": 624
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Bar3D.js",
      "requires": [
        562,
        623
      ],
      "uses": [],
      "idx": 625
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Box.js",
      "requires": [
        538
      ],
      "uses": [
        524,
        562
      ],
      "idx": 626
    },
    {
      "path": "packages/charts/src/chart/series/Bar3D.js",
      "requires": [
        624,
        625,
        626
      ],
      "uses": [],
      "idx": 627
    },
    {
      "path": "packages/charts/src/draw/LimitedCache.js",
      "requires": [],
      "uses": [],
      "idx": 628
    },
    {
      "path": "packages/charts/src/draw/SegmentTree.js",
      "requires": [],
      "uses": [],
      "idx": 629
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Aggregative.js",
      "requires": [
        619,
        628,
        629
      ],
      "uses": [],
      "idx": 630
    },
    {
      "path": "packages/charts/src/chart/series/sprite/CandleStick.js",
      "requires": [
        630
      ],
      "uses": [
        551
      ],
      "idx": 631
    },
    {
      "path": "packages/charts/src/chart/series/CandleStick.js",
      "requires": [
        616,
        631
      ],
      "uses": [],
      "idx": 632
    },
    {
      "path": "packages/charts/src/chart/series/Polar.js",
      "requires": [
        576
      ],
      "uses": [],
      "idx": 633
    },
    {
      "path": "packages/charts/src/chart/series/Gauge.js",
      "requires": [
        556,
        633
      ],
      "uses": [],
      "idx": 634
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Line.js",
      "requires": [
        630
      ],
      "uses": [
        526
      ],
      "idx": 635
    },
    {
      "path": "packages/charts/src/chart/series/Line.js",
      "requires": [
        616,
        635
      ],
      "uses": [],
      "idx": 636
    },
    {
      "path": "packages/charts/src/chart/series/sprite/PieSlice.js",
      "requires": [
        556,
        577
      ],
      "uses": [],
      "idx": 637
    },
    {
      "path": "packages/charts/src/chart/series/Pie.js",
      "requires": [
        633,
        637
      ],
      "uses": [],
      "idx": 638
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Pie3DPart.js",
      "requires": [
        541,
        577
      ],
      "uses": [
        524,
        529,
        562,
        563
      ],
      "idx": 639
    },
    {
      "path": "packages/charts/src/draw/PathUtil.js",
      "requires": [
        540,
        542,
        565
      ],
      "uses": [],
      "idx": 640
    },
    {
      "path": "packages/charts/src/chart/series/Pie3D.js",
      "requires": [
        633,
        639,
        640
      ],
      "uses": [
        524
      ],
      "idx": 641
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Polar.js",
      "requires": [
        618
      ],
      "uses": [],
      "idx": 642
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Radar.js",
      "requires": [
        642
      ],
      "uses": [],
      "idx": 643
    },
    {
      "path": "packages/charts/src/chart/series/Radar.js",
      "requires": [
        633,
        643
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "packages/charts/src/chart/series/sprite/Scatter.js",
      "requires": [
        619
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "packages/charts/src/chart/series/Scatter.js",
      "requires": [
        616,
        645
      ],
      "uses": [],
      "idx": 646
    },
    {
      "path": "packages/charts/src/chart/theme/Blue.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 647
    },
    {
      "path": "packages/charts/src/chart/theme/BlueGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 648
    },
    {
      "path": "packages/charts/src/chart/theme/Category1.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 649
    },
    {
      "path": "packages/charts/src/chart/theme/Category1Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 650
    },
    {
      "path": "packages/charts/src/chart/theme/Category2.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "packages/charts/src/chart/theme/Category2Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 652
    },
    {
      "path": "packages/charts/src/chart/theme/Category3.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 653
    },
    {
      "path": "packages/charts/src/chart/theme/Category3Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "packages/charts/src/chart/theme/Category4.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 655
    },
    {
      "path": "packages/charts/src/chart/theme/Category4Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 656
    },
    {
      "path": "packages/charts/src/chart/theme/Category5.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 657
    },
    {
      "path": "packages/charts/src/chart/theme/Category5Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 658
    },
    {
      "path": "packages/charts/src/chart/theme/Category6.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "packages/charts/src/chart/theme/Category6Gradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 660
    },
    {
      "path": "packages/charts/src/chart/theme/DefaultGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 661
    },
    {
      "path": "packages/charts/src/chart/theme/Green.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 662
    },
    {
      "path": "packages/charts/src/chart/theme/GreenGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 663
    },
    {
      "path": "packages/charts/src/chart/theme/Midnight.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 664
    },
    {
      "path": "packages/charts/src/chart/theme/Muted.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 665
    },
    {
      "path": "packages/charts/src/chart/theme/Purple.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 666
    },
    {
      "path": "packages/charts/src/chart/theme/PurpleGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 667
    },
    {
      "path": "packages/charts/src/chart/theme/Red.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 668
    },
    {
      "path": "packages/charts/src/chart/theme/RedGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 669
    },
    {
      "path": "packages/charts/src/chart/theme/Sky.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 670
    },
    {
      "path": "packages/charts/src/chart/theme/SkyGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 671
    },
    {
      "path": "packages/charts/src/chart/theme/Yellow.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 672
    },
    {
      "path": "packages/charts/src/chart/theme/YellowGradients.js",
      "requires": [
        571
      ],
      "uses": [],
      "idx": 673
    },
    {
      "path": "packages/charts/src/draw/Point.js",
      "requires": [
        526,
        531
      ],
      "uses": [],
      "idx": 674
    },
    {
      "path": "packages/charts/src/draw/plugin/SpriteEvents.js",
      "requires": [
        306,
        640
      ],
      "uses": [],
      "idx": 675
    },
    {
      "path": "packages/ux/modern/src/device/analytics/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 676
    },
    {
      "path": "packages/ux/modern/src/device/analytics/Cordova.js",
      "requires": [
        676
      ],
      "uses": [],
      "idx": 677
    },
    {
      "path": "packages/ux/modern/src/device/Analytics.js",
      "requires": [
        374,
        676,
        677
      ],
      "uses": [],
      "idx": 678
    },
    {
      "path": "packages/ux/modern/src/device/twitter/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 679
    },
    {
      "path": "packages/ux/modern/src/device/twitter/Cordova.js",
      "requires": [],
      "uses": [],
      "idx": 680
    },
    {
      "path": "packages/ux/modern/src/device/Twitter.js",
      "requires": [
        374,
        679,
        680
      ],
      "uses": [],
      "idx": 681
    },
    {
      "path": "packages/ux/src/ajax/Simlet.js",
      "requires": [],
      "uses": [
        685
      ],
      "idx": 682
    },
    {
      "path": "packages/ux/src/ajax/DataSimlet.js",
      "requires": [
        682
      ],
      "uses": [
        114
      ],
      "idx": 683
    },
    {
      "path": "packages/ux/src/ajax/JsonSimlet.js",
      "requires": [
        683
      ],
      "uses": [],
      "idx": 684
    },
    {
      "path": "packages/ux/src/ajax/SimXhr.js",
      "requires": [],
      "uses": [],
      "idx": 685
    },
    {
      "path": "packages/ux/src/ajax/SimManager.js",
      "requires": [
        8,
        682,
        684,
        685
      ],
      "uses": [
        231
      ],
      "idx": 686
    },
    {
      "path": "packages/ux/src/ajax/XmlSimlet.js",
      "requires": [
        683
      ],
      "uses": [
        55
      ],
      "idx": 687
    },
    {
      "path": "packages/ux/src/event/Driver.js",
      "requires": [
        63
      ],
      "uses": [],
      "idx": 688
    },
    {
      "path": "packages/ux/src/event/Maker.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 689
    },
    {
      "path": "packages/ux/src/event/Player.js",
      "requires": [
        688
      ],
      "uses": [],
      "idx": 690
    },
    {
      "path": "packages/ux/src/event/Recorder.js",
      "requires": [
        688
      ],
      "uses": [
        26
      ],
      "idx": 691
    },
    {
      "path": "packages/ux/src/google/Api.js",
      "requires": [
        301
      ],
      "uses": [],
      "idx": 692
    },
    {
      "path": "packages/ux/src/google/Feeds.js",
      "requires": [
        692
      ],
      "uses": [],
      "idx": 693
    }
  ],
  "classes": {
    "Ext.AbstractComponent": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.AbstractPlugin": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.ActionSheet": {
      "idx": 321,
      "alias": [
        "widget.actionsheet"
      ],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.Anim": {
      "idx": 322,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.Audio": {
      "idx": 324,
      "alias": [
        "widget.audio"
      ],
      "alternates": []
    },
    "Ext.BingMap": {
      "idx": 327,
      "alias": [
        "widget.bingmap"
      ],
      "alternates": []
    },
    "Ext.Button": {
      "idx": 319,
      "alias": [
        "widget.button"
      ],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 149,
      "alias": [
        "widget.component"
      ],
      "alternates": [
        "Ext.lib.Component"
      ]
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
    "Ext.Container": {
      "idx": 189,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.lib.Container",
        "Ext.container.Container"
      ]
    },
    "Ext.Decorator": {
      "idx": 328,
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
    "Ext.GlobalEvents": {
      "idx": 43,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 329,
      "alias": [
        "widget.image",
        "widget.img"
      ],
      "alternates": []
    },
    "Ext.Label": {
      "idx": 330,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 190,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Map": {
      "idx": 326,
      "alias": [
        "widget.map"
      ],
      "alternates": []
    },
    "Ext.Mask": {
      "idx": 186,
      "alias": [
        "widget.mask"
      ],
      "alternates": []
    },
    "Ext.Media": {
      "idx": 323,
      "alias": [
        "widget.media"
      ],
      "alternates": []
    },
    "Ext.Menu": {
      "idx": 331,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.MessageBox": {
      "idx": 340,
      "alias": [],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.Panel": {
      "idx": 318,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.lib.Panel"
      ]
    },
    "Ext.ProgressIndicator": {
      "idx": 342,
      "alias": [
        "widget.progressindicator"
      ],
      "alternates": []
    },
    "Ext.Promise": {
      "idx": 343,
      "alias": [],
      "alternates": []
    },
    "Ext.SegmentedButton": {
      "idx": 344,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.Sheet": {
      "idx": 320,
      "alias": [
        "widget.sheet"
      ],
      "alternates": []
    },
    "Ext.Sortable": {
      "idx": 345,
      "alias": [],
      "alternates": []
    },
    "Ext.Spacer": {
      "idx": 333,
      "alias": [
        "widget.spacer"
      ],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.Title": {
      "idx": 332,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.TitleBar": {
      "idx": 346,
      "alias": [
        "widget.titlebar"
      ],
      "alternates": []
    },
    "Ext.Toast": {
      "idx": 347,
      "alias": [],
      "alternates": []
    },
    "Ext.Toolbar": {
      "idx": 334,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": []
    },
    "Ext.Video": {
      "idx": 348,
      "alias": [
        "widget.video"
      ],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 50,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Application": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 125,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 222,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 218,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 215,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 217,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 216,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 219,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 223,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 226,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Behavior": {
      "idx": 145,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Draggable": {
      "idx": 148,
      "alias": [],
      "alternates": []
    },
    "Ext.behavior.Translatable": {
      "idx": 146,
      "alias": [],
      "alternates": []
    },
    "Ext.carousel.Carousel": {
      "idx": 354,
      "alias": [
        "widget.carousel"
      ],
      "alternates": [
        "Ext.Carousel"
      ]
    },
    "Ext.carousel.Indicator": {
      "idx": 352,
      "alias": [
        "widget.carouselindicator"
      ],
      "alternates": [
        "Ext.Carousel.Indicator"
      ]
    },
    "Ext.carousel.Infinite": {
      "idx": 355,
      "alias": [],
      "alternates": []
    },
    "Ext.carousel.Item": {
      "idx": 351,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.AbstractChart": {
      "idx": 589,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.CartesianChart": {
      "idx": 593,
      "alias": [
        "widget.cartesian",
        "widget.chart"
      ],
      "alternates": [
        "Ext.chart.Chart"
      ]
    },
    "Ext.chart.Legend": {
      "idx": 588,
      "alias": [
        "widget.legend"
      ],
      "alternates": []
    },
    "Ext.chart.LegendBase": {
      "idx": 519,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.MarkerHolder": {
      "idx": 577,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.Markers": {
      "idx": 573,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.PolarChart": {
      "idx": 596,
      "alias": [
        "widget.polar"
      ],
      "alternates": []
    },
    "Ext.chart.SpaceFillingChart": {
      "idx": 597,
      "alias": [
        "widget.spacefilling"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis": {
      "idx": 587,
      "alias": [
        "widget.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Axis3D": {
      "idx": 598,
      "alias": [
        "widget.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category": {
      "idx": 599,
      "alias": [
        "axis.category"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Category3D": {
      "idx": 600,
      "alias": [
        "axis.category3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric": {
      "idx": 601,
      "alias": [
        "axis.numeric",
        "axis.radial"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Numeric3D": {
      "idx": 602,
      "alias": [
        "axis.numeric3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time": {
      "idx": 603,
      "alias": [
        "axis.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.Time3D": {
      "idx": 604,
      "alias": [
        "axis.time3d"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.CombineDuplicate": {
      "idx": 585,
      "alias": [
        "axisLayout.combineDuplicate"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Continuous": {
      "idx": 586,
      "alias": [
        "axisLayout.continuous"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Discrete": {
      "idx": 584,
      "alias": [
        "axisLayout.discrete"
      ],
      "alternates": []
    },
    "Ext.chart.axis.layout.Layout": {
      "idx": 583,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Names": {
      "idx": 580,
      "alias": [
        "segmenter.names"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Numeric": {
      "idx": 581,
      "alias": [
        "segmenter.numeric"
      ],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Segmenter": {
      "idx": 579,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.axis.segmenter.Time": {
      "idx": 582,
      "alias": [
        "segmenter.time"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis": {
      "idx": 578,
      "alias": [
        "sprite.axis"
      ],
      "alternates": []
    },
    "Ext.chart.axis.sprite.Axis3D": {
      "idx": 605,
      "alias": [
        "sprite.axis3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.CircularGrid": {
      "idx": 594,
      "alias": [
        "grid.circular"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid": {
      "idx": 591,
      "alias": [
        "grid.horizontal"
      ],
      "alternates": []
    },
    "Ext.chart.grid.HorizontalGrid3D": {
      "idx": 606,
      "alias": [
        "grid.horizontal3d"
      ],
      "alternates": []
    },
    "Ext.chart.grid.RadialGrid": {
      "idx": 595,
      "alias": [
        "grid.radial"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid": {
      "idx": 592,
      "alias": [
        "grid.vertical"
      ],
      "alternates": []
    },
    "Ext.chart.grid.VerticalGrid3D": {
      "idx": 607,
      "alias": [
        "grid.vertical3d"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Abstract": {
      "idx": 520,
      "alias": [
        "widget.interaction"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.CrossZoom": {
      "idx": 608,
      "alias": [
        "interaction.crosszoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Crosshair": {
      "idx": 609,
      "alias": [
        "interaction.crosshair"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemEdit": {
      "idx": 611,
      "alias": [
        "interaction.itemedit"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemHighlight": {
      "idx": 610,
      "alias": [
        "interaction.itemhighlight"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.ItemInfo": {
      "idx": 521,
      "alias": [
        "interaction.iteminfo"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.PanZoom": {
      "idx": 612,
      "alias": [
        "interaction.panzoom"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.Rotate": {
      "idx": 613,
      "alias": [
        "interaction.rotate"
      ],
      "alternates": []
    },
    "Ext.chart.interactions.RotatePie3D": {
      "idx": 614,
      "alias": [
        "interaction.rotatePie3d"
      ],
      "alternates": []
    },
    "Ext.chart.label.Callout": {
      "idx": 574,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.label.Label": {
      "idx": 575,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.overrides.AbstractChart": {
      "idx": 590,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.plugin.ItemEvents": {
      "idx": 615,
      "alias": [
        "plugin.chartitemevents"
      ],
      "alternates": []
    },
    "Ext.chart.series.Area": {
      "idx": 622,
      "alias": [
        "series.area"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar": {
      "idx": 624,
      "alias": [
        "series.bar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Bar3D": {
      "idx": 627,
      "alias": [
        "series.bar3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.CandleStick": {
      "idx": 632,
      "alias": [
        "series.candlestick"
      ],
      "alternates": []
    },
    "Ext.chart.series.Cartesian": {
      "idx": 616,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Gauge": {
      "idx": 634,
      "alias": [
        "series.gauge"
      ],
      "alternates": []
    },
    "Ext.chart.series.Line": {
      "idx": 636,
      "alias": [
        "series.line"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie": {
      "idx": 638,
      "alias": [
        "series.pie"
      ],
      "alternates": []
    },
    "Ext.chart.series.Pie3D": {
      "idx": 641,
      "alias": [
        "series.pie3d"
      ],
      "alternates": []
    },
    "Ext.chart.series.Polar": {
      "idx": 633,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.Radar": {
      "idx": 644,
      "alias": [
        "series.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.Scatter": {
      "idx": 646,
      "alias": [
        "series.scatter"
      ],
      "alternates": []
    },
    "Ext.chart.series.Series": {
      "idx": 576,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.StackedCartesian": {
      "idx": 617,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Aggregative": {
      "idx": 630,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Area": {
      "idx": 621,
      "alias": [
        "sprite.areaSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar": {
      "idx": 623,
      "alias": [
        "sprite.barSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Bar3D": {
      "idx": 625,
      "alias": [
        "sprite.bar3dSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Box": {
      "idx": 626,
      "alias": [
        "sprite.box"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.CandleStick": {
      "idx": 631,
      "alias": [
        "sprite.candlestickSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Cartesian": {
      "idx": 619,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Line": {
      "idx": 635,
      "alias": [
        "sprite.lineSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Pie3DPart": {
      "idx": 639,
      "alias": [
        "sprite.pie3dPart"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.PieSlice": {
      "idx": 637,
      "alias": [
        "sprite.pieslice"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Polar": {
      "idx": 642,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.Radar": {
      "idx": 643,
      "alias": [
        "sprite.radar"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Scatter": {
      "idx": 645,
      "alias": [
        "sprite.scatterSeries"
      ],
      "alternates": []
    },
    "Ext.chart.series.sprite.Series": {
      "idx": 618,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.series.sprite.StackedCartesian": {
      "idx": 620,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Base": {
      "idx": 571,
      "alias": [],
      "alternates": []
    },
    "Ext.chart.theme.Blue": {
      "idx": 647,
      "alias": [
        "chart.theme.Blue",
        "chart.theme.blue"
      ],
      "alternates": []
    },
    "Ext.chart.theme.BlueGradients": {
      "idx": 648,
      "alias": [
        "chart.theme.Blue:gradients",
        "chart.theme.blue-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1": {
      "idx": 649,
      "alias": [
        "chart.theme.Category1",
        "chart.theme.category1"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category1Gradients": {
      "idx": 650,
      "alias": [
        "chart.theme.Category1:gradients",
        "chart.theme.category1-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2": {
      "idx": 651,
      "alias": [
        "chart.theme.Category2",
        "chart.theme.category2"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category2Gradients": {
      "idx": 652,
      "alias": [
        "chart.theme.Category2:gradients",
        "chart.theme.category2-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3": {
      "idx": 653,
      "alias": [
        "chart.theme.Category3",
        "chart.theme.category3"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category3Gradients": {
      "idx": 654,
      "alias": [
        "chart.theme.Category3:gradients",
        "chart.theme.category3-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4": {
      "idx": 655,
      "alias": [
        "chart.theme.Category4",
        "chart.theme.category4"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category4Gradients": {
      "idx": 656,
      "alias": [
        "chart.theme.Category4:gradients",
        "chart.theme.category4-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5": {
      "idx": 657,
      "alias": [
        "chart.theme.Category5",
        "chart.theme.category5"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category5Gradients": {
      "idx": 658,
      "alias": [
        "chart.theme.Category5:gradients",
        "chart.theme.category5-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6": {
      "idx": 659,
      "alias": [
        "chart.theme.Category6",
        "chart.theme.category6"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Category6Gradients": {
      "idx": 660,
      "alias": [
        "chart.theme.Category6:gradients",
        "chart.theme.category6-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Default": {
      "idx": 572,
      "alias": [
        "chart.theme.Base",
        "chart.theme.default"
      ],
      "alternates": []
    },
    "Ext.chart.theme.DefaultGradients": {
      "idx": 661,
      "alias": [
        "chart.theme.Base:gradients",
        "chart.theme.default-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Green": {
      "idx": 662,
      "alias": [
        "chart.theme.Green",
        "chart.theme.green"
      ],
      "alternates": []
    },
    "Ext.chart.theme.GreenGradients": {
      "idx": 663,
      "alias": [
        "chart.theme.Green:gradients",
        "chart.theme.green-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Midnight": {
      "idx": 664,
      "alias": [
        "chart.theme.Midnight",
        "chart.theme.midnight"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Muted": {
      "idx": 665,
      "alias": [
        "chart.theme.Muted",
        "chart.theme.muted"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Purple": {
      "idx": 666,
      "alias": [
        "chart.theme.Purple",
        "chart.theme.purple"
      ],
      "alternates": []
    },
    "Ext.chart.theme.PurpleGradients": {
      "idx": 667,
      "alias": [
        "chart.theme.Purple:gradients",
        "chart.theme.purple-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Red": {
      "idx": 668,
      "alias": [
        "chart.theme.Red",
        "chart.theme.red"
      ],
      "alternates": []
    },
    "Ext.chart.theme.RedGradients": {
      "idx": 669,
      "alias": [
        "chart.theme.Red:gradients",
        "chart.theme.red-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Sky": {
      "idx": 670,
      "alias": [
        "chart.theme.Sky",
        "chart.theme.sky"
      ],
      "alternates": []
    },
    "Ext.chart.theme.SkyGradients": {
      "idx": 671,
      "alias": [
        "chart.theme.Sky:gradients",
        "chart.theme.sky-gradients"
      ],
      "alternates": []
    },
    "Ext.chart.theme.Yellow": {
      "idx": 672,
      "alias": [
        "chart.theme.Yellow",
        "chart.theme.yellow"
      ],
      "alternates": []
    },
    "Ext.chart.theme.YellowGradients": {
      "idx": 673,
      "alias": [
        "chart.theme.Yellow:gradients",
        "chart.theme.yellow-gradients"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 118,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 228,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 221,
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
      "idx": 230,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 83,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 231,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 233,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 234,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 99,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 235,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 238,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 227,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 239,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 100,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 116,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 119,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 237,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 240,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 241,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 242,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 247,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 92,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 93,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 91,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 94,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 95,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 96,
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
      "idx": 97,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 248,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 98,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 249,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 85,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 86,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 84,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 87,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 88,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 109,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 104,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 229,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 232,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 251,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 105,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 103,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 252,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 108,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 253,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 250,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 117,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 110,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 101,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 245,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 74,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 77,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 76,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 79,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 73,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 80,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 254,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 256,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 258,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 255,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 259,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 260,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 257,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 261,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 262,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 90,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 111,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 102,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 246,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dataview.DataView": {
      "idx": 359,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.dataview.IndexBar": {
      "idx": 360,
      "alias": [],
      "alternates": [
        "Ext.IndexBar"
      ]
    },
    "Ext.dataview.List": {
      "idx": 365,
      "alias": [
        "widget.list"
      ],
      "alternates": [
        "Ext.List"
      ]
    },
    "Ext.dataview.ListItemHeader": {
      "idx": 361,
      "alias": [
        "widget.listitemheader"
      ],
      "alternates": []
    },
    "Ext.dataview.NestedList": {
      "idx": 366,
      "alias": [
        "widget.nestedlist"
      ],
      "alternates": [
        "Ext.NestedList"
      ]
    },
    "Ext.dataview.component.Container": {
      "idx": 357,
      "alias": [],
      "alternates": []
    },
    "Ext.dataview.component.DataItem": {
      "idx": 356,
      "alias": [
        "widget.dataitem"
      ],
      "alternates": []
    },
    "Ext.dataview.component.ListItem": {
      "idx": 362,
      "alias": [
        "widget.listitem"
      ],
      "alternates": []
    },
    "Ext.dataview.component.SimpleListItem": {
      "idx": 363,
      "alias": [
        "widget.simplelistitem"
      ],
      "alternates": []
    },
    "Ext.dataview.element.Container": {
      "idx": 358,
      "alias": [],
      "alternates": []
    },
    "Ext.dataview.element.List": {
      "idx": 367,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Accelerometer": {
      "idx": 371,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Browser": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Camera": {
      "idx": 383,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Capture": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Communicator": {
      "idx": 374,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Compass": {
      "idx": 390,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Connection": {
      "idx": 395,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Contacts": {
      "idx": 399,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Device": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.device.FileSystem": {
      "idx": 411,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Geolocation": {
      "idx": 416,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Globalization": {
      "idx": 420,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Media": {
      "idx": 423,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Notification": {
      "idx": 429,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Orientation": {
      "idx": 433,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Purchases": {
      "idx": 435,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Purchases.Product": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Push": {
      "idx": 439,
      "alias": [],
      "alternates": []
    },
    "Ext.device.SQLite": {
      "idx": 441,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Splashscreen": {
      "idx": 445,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Storage": {
      "idx": 452,
      "alias": [],
      "alternates": []
    },
    "Ext.device.Tunnel": {
      "idx": 457,
      "alias": [],
      "alternates": []
    },
    "Ext.device.accelerometer.Abstract": {
      "idx": 368,
      "alias": [],
      "alternates": []
    },
    "Ext.device.accelerometer.Cordova": {
      "idx": 369,
      "alias": [],
      "alternates": [
        "Ext.device.accelerometer.PhoneGap"
      ]
    },
    "Ext.device.accelerometer.Simulator": {
      "idx": 370,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Abstract": {
      "idx": 375,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Cordova": {
      "idx": 376,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Simulator": {
      "idx": 377,
      "alias": [],
      "alternates": []
    },
    "Ext.device.browser.Window": {
      "idx": 458,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Abstract": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Cordova": {
      "idx": 380,
      "alias": [],
      "alternates": [
        "Ext.device.camera.PhoneGap"
      ]
    },
    "Ext.device.camera.Sencha": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.device.camera.Simulator": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.device.capture.Abstract": {
      "idx": 385,
      "alias": [],
      "alternates": [
        "Ext.device.capture.Simulator"
      ]
    },
    "Ext.device.capture.Cordova": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.device.communicator.Android": {
      "idx": 373,
      "alias": [],
      "alternates": []
    },
    "Ext.device.communicator.Default": {
      "idx": 372,
      "alias": [],
      "alternates": []
    },
    "Ext.device.compass.Abstract": {
      "idx": 387,
      "alias": [],
      "alternates": []
    },
    "Ext.device.compass.Cordova": {
      "idx": 388,
      "alias": [],
      "alternates": [
        "Ext.device.compass.PhoneGap"
      ]
    },
    "Ext.device.compass.Simulator": {
      "idx": 389,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Abstract": {
      "idx": 391,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Cordova": {
      "idx": 393,
      "alias": [],
      "alternates": [
        "Ext.device.connection.PhoneGap"
      ]
    },
    "Ext.device.connection.Sencha": {
      "idx": 392,
      "alias": [],
      "alternates": []
    },
    "Ext.device.connection.Simulator": {
      "idx": 394,
      "alias": [],
      "alternates": []
    },
    "Ext.device.contacts.Abstract": {
      "idx": 396,
      "alias": [],
      "alternates": []
    },
    "Ext.device.contacts.Cordova": {
      "idx": 398,
      "alias": [],
      "alternates": [
        "Ext.device.contacts.PhoneGap"
      ]
    },
    "Ext.device.contacts.Sencha": {
      "idx": 397,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Abstract": {
      "idx": 400,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Cordova": {
      "idx": 401,
      "alias": [],
      "alternates": [
        "Ext.device.device.PhoneGap"
      ]
    },
    "Ext.device.device.Sencha": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.device.device.Simulator": {
      "idx": 403,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Abstract": {
      "idx": 405,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Chrome": {
      "idx": 409,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Cordova": {
      "idx": 408,
      "alias": [],
      "alternates": [
        "Ext.device.filesystem.PhoneGap"
      ]
    },
    "Ext.device.filesystem.DirectoryEntry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Entry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.FileEntry": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.FileSystem": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.HTML5": {
      "idx": 407,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Sencha": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.device.filesystem.Simulator": {
      "idx": 410,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Abstract": {
      "idx": 412,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Cordova": {
      "idx": 413,
      "alias": [],
      "alternates": [
        "Ext.device.geolocation.PhoneGap"
      ]
    },
    "Ext.device.geolocation.Sencha": {
      "idx": 414,
      "alias": [],
      "alternates": []
    },
    "Ext.device.geolocation.Simulator": {
      "idx": 415,
      "alias": [],
      "alternates": []
    },
    "Ext.device.globalization.Abstract": {
      "idx": 417,
      "alias": [],
      "alternates": []
    },
    "Ext.device.globalization.Cordova": {
      "idx": 418,
      "alias": [],
      "alternates": [
        "Ext.device.globalization.PhoneGap"
      ]
    },
    "Ext.device.globalization.Simulator": {
      "idx": 419,
      "alias": [],
      "alternates": []
    },
    "Ext.device.media.Abstract": {
      "idx": 421,
      "alias": [],
      "alternates": []
    },
    "Ext.device.media.Cordova": {
      "idx": 422,
      "alias": [],
      "alternates": [
        "Ext.device.media.PhoneGap"
      ]
    },
    "Ext.device.notification.Abstract": {
      "idx": 424,
      "alias": [],
      "alternates": []
    },
    "Ext.device.notification.Cordova": {
      "idx": 425,
      "alias": [],
      "alternates": [
        "Ext.device.notification.PhoneGap"
      ]
    },
    "Ext.device.notification.Sencha": {
      "idx": 426,
      "alias": [],
      "alternates": []
    },
    "Ext.device.notification.Simulator": {
      "idx": 428,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.Abstract": {
      "idx": 430,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.HTML5": {
      "idx": 431,
      "alias": [],
      "alternates": []
    },
    "Ext.device.orientation.Sencha": {
      "idx": 432,
      "alias": [],
      "alternates": []
    },
    "Ext.device.purchases.Purchase": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.purchases.Sencha": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Abstract": {
      "idx": 436,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Cordova": {
      "idx": 438,
      "alias": [],
      "alternates": []
    },
    "Ext.device.push.Sencha": {
      "idx": 437,
      "alias": [],
      "alternates": []
    },
    "Ext.device.splashscreen.Abstract": {
      "idx": 442,
      "alias": [],
      "alternates": []
    },
    "Ext.device.splashscreen.Cordova": {
      "idx": 443,
      "alias": [],
      "alternates": [
        "Ext.device.splashscreen.PhoneGap"
      ]
    },
    "Ext.device.splashscreen.Simulator": {
      "idx": 444,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.Database": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLResultSet": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLResultSetRowList": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.SQLTransaction": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.sqlite.Sencha": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Abstract": {
      "idx": 446,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Cordova": {
      "idx": 450,
      "alias": [],
      "alternates": [
        "Ext.device.storage.PhoneGap"
      ]
    },
    "Ext.device.storage.HTML5.Database": {
      "idx": 448,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.HTML5.HTML5": {
      "idx": 449,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.HTML5.SQLStatement": {
      "idx": 447,
      "alias": [],
      "alternates": []
    },
    "Ext.device.storage.Simulator": {
      "idx": 451,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Abstract": {
      "idx": 453,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Connection": {
      "idx": 455,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Sencha": {
      "idx": 456,
      "alias": [],
      "alternates": []
    },
    "Ext.device.tunnel.Simulator": {
      "idx": 454,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 263,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 265,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 266,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 224,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 268,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 225,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 264,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 269,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 271,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 270,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.CompositeElement": {
      "idx": 274,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 273,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 42,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 272,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 243,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Query": {
      "idx": 244,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 19,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 20,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Animator": {
      "idx": 535,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Color": {
      "idx": 524,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Container": {
      "idx": 570,
      "alias": [
        "widget.draw"
      ],
      "alternates": [
        "Ext.draw.Component"
      ]
    },
    "Ext.draw.ContainerBase": {
      "idx": 522,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Draw": {
      "idx": 526,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.LimitedCache": {
      "idx": 628,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Matrix": {
      "idx": 531,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Path": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.PathUtil": {
      "idx": 640,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Point": {
      "idx": 674,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.SegmentTree": {
      "idx": 629,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.Surface": {
      "idx": 564,
      "alias": [
        "widget.surface"
      ],
      "alternates": []
    },
    "Ext.draw.SurfaceBase": {
      "idx": 523,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TextMeasurer": {
      "idx": 558,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.TimingFunctions": {
      "idx": 534,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Canvas": {
      "idx": 569,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.Svg": {
      "idx": 567,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext": {
      "idx": 566,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.engine.SvgContext.Gradient": {
      "idx": 566,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Gradient": {
      "idx": 527,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.GradientDefinition": {
      "idx": 528,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Linear": {
      "idx": 562,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.gradient.Radial": {
      "idx": 563,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Animation": {
      "idx": 536,
      "alias": [
        "modifier.animation"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Highlight": {
      "idx": 537,
      "alias": [
        "modifier.highlight"
      ],
      "alternates": []
    },
    "Ext.draw.modifier.Modifier": {
      "idx": 532,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.modifier.Target": {
      "idx": 533,
      "alias": [
        "modifier.target"
      ],
      "alternates": []
    },
    "Ext.draw.overrides.Path": {
      "idx": 540,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.Surface": {
      "idx": 565,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.overrides.sprite.Path": {
      "idx": 542,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.plugin.SpriteEvents": {
      "idx": 675,
      "alias": [
        "plugin.spriteevents"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AnimationParser": {
      "idx": 525,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Arc": {
      "idx": 544,
      "alias": [
        "sprite.arc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Arrow": {
      "idx": 545,
      "alias": [
        "sprite.arrow"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeDefinition": {
      "idx": 530,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.AttributeParser": {
      "idx": 529,
      "alias": [],
      "alternates": []
    },
    "Ext.draw.sprite.Circle": {
      "idx": 543,
      "alias": [
        "sprite.circle"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Composite": {
      "idx": 546,
      "alias": [
        "sprite.composite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Cross": {
      "idx": 547,
      "alias": [
        "sprite.cross"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Diamond": {
      "idx": 548,
      "alias": [
        "sprite.diamond"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Ellipse": {
      "idx": 549,
      "alias": [
        "sprite.ellipse"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.EllipticalArc": {
      "idx": 550,
      "alias": [
        "sprite.ellipticalArc"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Image": {
      "idx": 552,
      "alias": [
        "sprite.image"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Instancing": {
      "idx": 553,
      "alias": [
        "sprite.instancing"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Line": {
      "idx": 554,
      "alias": [
        "sprite.line"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Path": {
      "idx": 541,
      "alias": [
        "Ext.draw.Sprite",
        "sprite.path"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Plus": {
      "idx": 555,
      "alias": [
        "sprite.plus"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Rect": {
      "idx": 551,
      "alias": [
        "sprite.rect"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sector": {
      "idx": 556,
      "alias": [
        "sprite.sector"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Sprite": {
      "idx": 538,
      "alias": [
        "sprite.sprite"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Square": {
      "idx": 557,
      "alias": [
        "sprite.square"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Text": {
      "idx": 559,
      "alias": [
        "sprite.text"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Tick": {
      "idx": 560,
      "alias": [
        "sprite.tick"
      ],
      "alternates": []
    },
    "Ext.draw.sprite.Triangle": {
      "idx": 561,
      "alias": [
        "sprite.triangle"
      ],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 26,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 282,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 283,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 284,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 276,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 285,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 286,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 27,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 287,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 28,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.field.Checkbox": {
      "idx": 459,
      "alias": [
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.field.DatePicker": {
      "idx": 464,
      "alias": [
        "widget.datepickerfield"
      ],
      "alternates": [
        "Ext.form.DatePicker"
      ]
    },
    "Ext.field.DatePickerNative": {
      "idx": 465,
      "alias": [
        "widget.datepickernativefield"
      ],
      "alternates": [
        "Ext.form.DatePickerNative"
      ]
    },
    "Ext.field.Email": {
      "idx": 466,
      "alias": [
        "widget.emailfield"
      ],
      "alternates": [
        "Ext.form.Email"
      ]
    },
    "Ext.field.Field": {
      "idx": 336,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field"
      ]
    },
    "Ext.field.File": {
      "idx": 468,
      "alias": [
        "widget.filefield"
      ],
      "alternates": []
    },
    "Ext.field.FileInput": {
      "idx": 467,
      "alias": [
        "widget.fileinput"
      ],
      "alternates": []
    },
    "Ext.field.Hidden": {
      "idx": 469,
      "alias": [
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.field.Input": {
      "idx": 335,
      "alias": [
        "widget.input"
      ],
      "alternates": []
    },
    "Ext.field.Number": {
      "idx": 470,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.Number"
      ]
    },
    "Ext.field.Password": {
      "idx": 471,
      "alias": [
        "widget.passwordfield"
      ],
      "alternates": [
        "Ext.form.Password"
      ]
    },
    "Ext.field.Radio": {
      "idx": 472,
      "alias": [
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.field.Search": {
      "idx": 473,
      "alias": [
        "widget.searchfield"
      ],
      "alternates": [
        "Ext.form.Search"
      ]
    },
    "Ext.field.Select": {
      "idx": 462,
      "alias": [
        "widget.selectfield"
      ],
      "alternates": [
        "Ext.form.Select"
      ]
    },
    "Ext.field.Slider": {
      "idx": 476,
      "alias": [
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.form.Slider"
      ]
    },
    "Ext.field.Spinner": {
      "idx": 478,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.field.Text": {
      "idx": 337,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.Text"
      ]
    },
    "Ext.field.TextArea": {
      "idx": 339,
      "alias": [
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.field.TextAreaInput": {
      "idx": 338,
      "alias": [
        "widget.textareainput"
      ],
      "alternates": []
    },
    "Ext.field.Toggle": {
      "idx": 480,
      "alias": [
        "widget.togglefield"
      ],
      "alternates": [
        "Ext.form.Toggle"
      ]
    },
    "Ext.field.Url": {
      "idx": 481,
      "alias": [
        "widget.urlfield"
      ],
      "alternates": [
        "Ext.form.Url"
      ]
    },
    "Ext.form.FieldSet": {
      "idx": 482,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 483,
      "alias": [
        "widget.formpanel"
      ],
      "alternates": [
        "Ext.form.FormPanel"
      ]
    },
    "Ext.fx.Animation": {
      "idx": 167,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 290,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 158,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 159,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 291,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 162,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 163,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 164,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 165,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 166,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 160,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 161,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 292,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 293,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 294,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 134,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 295,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 133,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 176,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 157,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 170,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 296,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 172,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 173,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 174,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 171,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 175,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 297,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 298,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 169,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 168,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 288,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 299,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 289,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.grid.Grid": {
      "idx": 490,
      "alias": [
        "widget.grid"
      ],
      "alternates": []
    },
    "Ext.grid.HeaderContainer": {
      "idx": 488,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.HeaderGroup": {
      "idx": 489,
      "alias": [
        "widget.gridheadergroup"
      ],
      "alternates": []
    },
    "Ext.grid.Row": {
      "idx": 484,
      "alias": [
        "widget.gridrow"
      ],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 493,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 491,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.CheckColumn": {
      "idx": 494,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 485,
      "alias": [
        "widget.column"
      ],
      "alternates": []
    },
    "Ext.grid.column.Date": {
      "idx": 486,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.Number": {
      "idx": 492,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": []
    },
    "Ext.grid.column.Template": {
      "idx": 487,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.ColumnResizing": {
      "idx": 495,
      "alias": [
        "plugin.gridcolumnresizing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editable": {
      "idx": 496,
      "alias": [
        "plugin.grideditable"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.MultiSelection": {
      "idx": 497,
      "alias": [
        "plugin.gridmultiselection"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.PagingToolbar": {
      "idx": 498,
      "alias": [
        "plugin.gridpagingtoolbar"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.SummaryRow": {
      "idx": 499,
      "alias": [
        "plugin.gridsummaryrow"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.ViewOptions": {
      "idx": 501,
      "alias": [
        "plugin.gridviewoptions"
      ],
      "alternates": []
    },
    "Ext.layout.Abstract": {
      "idx": 150,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Box": {
      "idx": 156,
      "alias": [
        "layout.tablebox"
      ],
      "alternates": []
    },
    "Ext.layout.Card": {
      "idx": 177,
      "alias": [
        "layout.card"
      ],
      "alternates": []
    },
    "Ext.layout.Default": {
      "idx": 155,
      "alias": [
        "layout.auto",
        "layout.default"
      ],
      "alternates": []
    },
    "Ext.layout.Fit": {
      "idx": 178,
      "alias": [
        "layout.fit"
      ],
      "alternates": []
    },
    "Ext.layout.FlexBox": {
      "idx": 179,
      "alias": [
        "layout.box"
      ],
      "alternates": []
    },
    "Ext.layout.Float": {
      "idx": 180,
      "alias": [
        "layout.float"
      ],
      "alternates": []
    },
    "Ext.layout.HBox": {
      "idx": 181,
      "alias": [
        "layout.hbox"
      ],
      "alternates": []
    },
    "Ext.layout.VBox": {
      "idx": 182,
      "alias": [
        "layout.vbox"
      ],
      "alternates": []
    },
    "Ext.layout.wrapper.BoxDock": {
      "idx": 153,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.wrapper.Dock": {
      "idx": 183,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.wrapper.Inner": {
      "idx": 154,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Accessible": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 48,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ComponentDelegation": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Container": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 151,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 47,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Progressable": {
      "idx": 341,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 187,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 302,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 303,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.navigation.Bar": {
      "idx": 502,
      "alias": [],
      "alternates": []
    },
    "Ext.navigation.View": {
      "idx": 503,
      "alias": [
        "widget.navigationview"
      ],
      "alternates": [
        "Ext.NavigationView"
      ]
    },
    "Ext.overrides.Widget": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 304,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 305,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Date": {
      "idx": 463,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Picker": {
      "idx": 461,
      "alias": [
        "widget.picker"
      ],
      "alternates": [
        "Ext.Picker"
      ]
    },
    "Ext.picker.Slot": {
      "idx": 460,
      "alias": [
        "widget.pickerslot"
      ],
      "alternates": [
        "Ext.Picker.Slot"
      ]
    },
    "Ext.plugin.Abstract": {
      "idx": 306,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.BufferedList": {
      "idx": 504,
      "alias": [
        "plugin.bufferedlist"
      ],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 307,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.ListPaging": {
      "idx": 505,
      "alias": [
        "plugin.listpaging"
      ],
      "alternates": []
    },
    "Ext.plugin.PullRefresh": {
      "idx": 506,
      "alias": [
        "plugin.pullrefresh"
      ],
      "alternates": []
    },
    "Ext.plugin.SortableList": {
      "idx": 500,
      "alias": [
        "plugin.sortablelist"
      ],
      "alternates": []
    },
    "Ext.plugin.field.PlaceHolderLabel": {
      "idx": 507,
      "alias": [
        "plugin.placeholderlabel"
      ],
      "alternates": []
    },
    "Ext.scroll.DomScroller": {
      "idx": 144,
      "alias": [
        "scroller.dom"
      ],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 142,
      "alias": [
        "widget.scrollindicator"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 128,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TouchScroller": {
      "idx": 143,
      "alias": [
        "scroller.touch"
      ],
      "alternates": []
    },
    "Ext.slider.Slider": {
      "idx": 475,
      "alias": [
        "widget.slider"
      ],
      "alternates": []
    },
    "Ext.slider.Thumb": {
      "idx": 474,
      "alias": [
        "widget.thumb"
      ],
      "alternates": []
    },
    "Ext.slider.Toggle": {
      "idx": 479,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 509,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": [
        "Ext.TabBar"
      ]
    },
    "Ext.tab.Panel": {
      "idx": 510,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 508,
      "alias": [
        "widget.tab"
      ],
      "alternates": [
        "Ext.Tab"
      ]
    },
    "Ext.table.Cell": {
      "idx": 511,
      "alias": [
        "widget.tablecell"
      ],
      "alternates": []
    },
    "Ext.table.Row": {
      "idx": 512,
      "alias": [
        "widget.tablerow"
      ],
      "alternates": []
    },
    "Ext.table.Table": {
      "idx": 513,
      "alias": [
        "widget.table"
      ],
      "alternates": []
    },
    "Ext.tip.ToolTip": {
      "idx": 514,
      "alias": [],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Audio": {
      "idx": 427,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 308,
      "alias": [],
      "alternates": []
    },
    "Ext.util.BufferedCollection": {
      "idx": 515,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 310,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelayedTask": {
      "idx": 516,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Draggable": {
      "idx": 147,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Droppable": {
      "idx": 517,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Geolocation": {
      "idx": 325,
      "alias": [],
      "alternates": [
        "Ext.util.GeoLocation"
      ]
    },
    "Ext.util.Group": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 123,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 78,
      "alias": [],
      "alternates": []
    },
    "Ext.util.InputBlocker": {
      "idx": 185,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ItemCollection": {
      "idx": 184,
      "alias": [],
      "alternates": [
        "Ext.ItemCollection"
      ]
    },
    "Ext.util.LineSegment": {
      "idx": 317,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LocalStorage": {
      "idx": 311,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 72,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PositionMap": {
      "idx": 364,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 16,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 24,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 113,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 312,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TapRepeater": {
      "idx": 477,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 313,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 267,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 141,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TranslatableGroup": {
      "idx": 353,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TranslatableList": {
      "idx": 518,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Wrapper": {
      "idx": 152,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 135,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 136,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.DataSimlet": {
      "idx": 683,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.JsonSimlet": {
      "idx": 684,
      "alias": [
        "simlet.json"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.SimManager": {
      "idx": 686,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.SimXhr": {
      "idx": 685,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.ajax.Simlet": {
      "idx": 682,
      "alias": [
        "simlet.basic"
      ],
      "alternates": []
    },
    "Ext.ux.ajax.XmlSimlet": {
      "idx": 687,
      "alias": [
        "simlet.xml"
      ],
      "alternates": []
    },
    "Ext.ux.device.Analytics": {
      "idx": 678,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.Twitter": {
      "idx": 681,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.analytics.Abstract": {
      "idx": 676,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.analytics.Cordova": {
      "idx": 677,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.twitter.Abstract": {
      "idx": 679,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.device.twitter.Cordova": {
      "idx": 680,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Driver": {
      "idx": 688,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Maker": {
      "idx": 689,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Player": {
      "idx": 690,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.event.Recorder": {
      "idx": 691,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Api": {
      "idx": 692,
      "alias": [],
      "alternates": []
    },
    "Ext.ux.google.Feeds": {
      "idx": 693,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Android": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Default": {
      "idx": 191,
      "alias": [
        "widget.viewport"
      ],
      "alternates": []
    },
    "Ext.viewport.Ios": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.Viewport": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.viewport.WindowsPhone": {
      "idx": 194,
      "alias": [],
      "alternates": [
        "Ext.viewport.WP"
      ]
    }
  },
  "packages": {
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
    },
    "modern": {
      "build": {
        "dir": "${package.output}"
      },
      "creator": "Sencha",
      "output": "${framework.dir}/build",
      "requires": [
        "ext",
        "core",
        "modern"
      ],
      "type": "toolkit",
      "version": "6.0.0"
    }
  },
  "bootRelative": true
};
